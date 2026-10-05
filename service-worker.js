const CACHE='party-school-48-v14-merged';
const SHELL=['./','./index.html','./app.html','./exam.css?v=14','./exam.js?v=14','./exam-data.js?v=14','./supplement-47.js?v=14','./knowledge.js?v=14','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin)return;
 e.respondWith((async()=>{try{const res=await fetch(r);if(res.ok){const c=await caches.open(CACHE);await c.put(r,res.clone());}return res;}catch{const cached=await caches.match(r);if(cached)return cached;if(r.mode==='navigate')return (await caches.match('./app.html'))||Response.error();return Response.error();}})());
});
