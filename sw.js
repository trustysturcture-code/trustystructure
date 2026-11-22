const C = 'amg-2026.11.23-0804';
const FILES = ["./","index.html","app.css","app.js","manifest.webmanifest","icon-192.png","icon-512.png","data/meta.js","data/imgs.js","data/q_109_120.js","data/q_121_129.js","data/q_130_147.js","data/q_148_158.js","data/q_159_169.js","data/q_170_180.js","data/d1_109_120.js","data/d1_121_129.js","data/d1_130_138.js","data/d1_139_147.js","data/d1_148_158.js","data/d1_159_169.js","data/d1_170_180.js","data/dw_000_ref.js","data/dw_a.js","data/dw_b.js","data/dw_c.js","data/dw_d.js","data/dw_e.js","data/dw_f.js","data/dw_g.js","data/dw_h.js","data/dw_i.js","data/dw_j.js","data/dw_k.js","data/sp_proto.js","data/sp_w1.js","data/sp_w2.js","data/sp_w3.js","data/sp_d1.js","data/sp_d2.js","data/sp_d3.js","data/sp_d4.js","data/sp_d5.js","data/sp_d6.js","data/sp_d7.js","data/sp_d8.js","data/sp_d9.js","data/ss_01.js","data/ss_02.js","data/ss_03.js","data/ss_04.js","data/ss_05.js","data/ss_06.js","data/ss_07.js","data/ss_08.js","data/ss_09.js","data/ss_10.js"];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(C).then(c => c.addAll(FILES))); });
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(r => { if (r.ok) { const cp = r.clone(); caches.open(C).then(c => c.put(e.request, cp)); } return r; })
    .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html'))));
});
