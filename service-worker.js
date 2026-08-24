const CACHE = 'party-school-48-v5';
const APP_SHELL = [
  './',
  './index.html',
  './direct.html',
  './manifest.webmanifest',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './compact.css',
  './compact.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request, fallback) {
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (_) {
    return (await caches.match(request)) || (fallback ? await caches.match(fallback) : Response.error());
  }
}

async function compactHtml(response) {
  if (!response || !response.ok) return response;
  const type = response.headers.get('content-type') || '';
  if (!type.includes('text/html')) return response;
  let text = await response.text();
  if (!text.includes('id="accountTitle"')) {
    return new Response(text, {status: response.status, statusText: response.statusText, headers: response.headers});
  }
  if (!text.includes('compact.css')) {
    text = text.replace('</head>', '<link rel="stylesheet" href="./compact.css"></head>');
  }
  if (!text.includes('compact.js')) {
    text = text.replace('</body>', '<script src="./compact.js"></script></body>');
  }
  const headers = new Headers(response.headers);
  headers.set('content-type','text/html; charset=utf-8');
  headers.delete('content-length');
  return new Response(text, {status: response.status, statusText: response.statusText, headers});
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  if (url.origin === self.location.origin) {
    if (request.mode === 'navigate') {
      event.respondWith((async()=>{
        const response = await networkFirst(request, './direct.html');
        return compactHtml(response);
      })());
      return;
    }
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request).then(response => {
        if (response && response.ok) {
          caches.open(CACHE).then(cache => cache.put(request, response.clone()));
        }
        return response;
      }))
    );
    return;
  }

  if (url.hostname.endsWith('.supabase.co') && /^\/rest\/v1\/(questions|cards|app_meta)(?:\?|$)/.test(url.pathname + url.search)) {
    event.respondWith(networkFirst(request));
  }
});
