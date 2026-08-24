const CACHE = 'party-school-48-v3';
const APP_SHELL = [
  './',
  './index.html',
  './direct.html',
  './otp-patch.js',
  './manifest.webmanifest',
  './icon.svg'
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

async function directPageWithOtp(request) {
  let response;
  try {
    response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(CACHE);
      cache.put('./direct.html', response.clone());
    }
  } catch (_) {
    response = await caches.match('./direct.html');
  }
  if (!response) return Response.error();
  const text = await response.text();
  const patched = text.includes('otp-patch.js')
    ? text
    : text.replace('</body>', '<script src="./otp-patch.js?v=3"></script></body>');
  return new Response(patched, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  if (url.origin === self.location.origin) {
    if (request.mode === 'navigate') {
      if (url.pathname.endsWith('/direct.html')) {
        event.respondWith(directPageWithOtp(request));
      } else {
        event.respondWith(networkFirst(request, './direct.html'));
      }
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

  // 离线时保留公开题库；不缓存个人学习记录与认证请求。
  if (url.hostname.endsWith('.supabase.co') && /^\/rest\/v1\/(questions|cards|app_meta)(?:\?|$)/.test(url.pathname + url.search)) {
    event.respondWith(networkFirst(request));
  }
});
