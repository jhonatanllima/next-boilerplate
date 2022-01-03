if (!self.define) {
  let e,
    s = {};
  const t = (t, n) => (
    (t = new URL(t + '.js', n).href),
    s[t] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = t), (e.onload = s), document.head.appendChild(e);
        } else (e = t), importScripts(t), s();
      }).then(() => {
        let e = s[t];
        if (!e) throw new Error(`Module ${t} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const a =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[a]) return;
    let c = {};
    const o = (e) => t(e, a),
      r = { module: { uri: a }, exports: c, require: o };
    s[a] = Promise.all(n.map((e) => r[e] || o(e))).then((e) => (i(...e), c));
  };
}
define(['./workbox-1846d813'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/5pNDwPIKq39ZBIKXt6_wf/_buildManifest.js',
          revision: '5pNDwPIKq39ZBIKXt6_wf',
        },
        {
          url: '/_next/static/5pNDwPIKq39ZBIKXt6_wf/_middlewareManifest.js',
          revision: '5pNDwPIKq39ZBIKXt6_wf',
        },
        {
          url: '/_next/static/5pNDwPIKq39ZBIKXt6_wf/_ssgManifest.js',
          revision: '5pNDwPIKq39ZBIKXt6_wf',
        },
        {
          url: '/_next/static/chunks/651.e7ad805f32a091cd.js',
          revision: '5pNDwPIKq39ZBIKXt6_wf',
        },
        {
          url: '/_next/static/chunks/framework-91d7f78b5b4003c8.js',
          revision: '5pNDwPIKq39ZBIKXt6_wf',
        },
        {
          url: '/_next/static/chunks/main-6e10b7b76b7124dc.js',
          revision: '5pNDwPIKq39ZBIKXt6_wf',
        },
        {
          url: '/_next/static/chunks/pages/_app-732d58e426d3f271.js',
          revision: '5pNDwPIKq39ZBIKXt6_wf',
        },
        {
          url: '/_next/static/chunks/pages/_error-1f95674706ce531a.js',
          revision: '5pNDwPIKq39ZBIKXt6_wf',
        },
        {
          url: '/_next/static/chunks/pages/index-c39db9346a20a828.js',
          revision: '5pNDwPIKq39ZBIKXt6_wf',
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: '5pNDwPIKq39ZBIKXt6_wf',
        },
        {
          url: '/_next/static/chunks/webpack-5c5912133a3556b5.js',
          revision: '5pNDwPIKq39ZBIKXt6_wf',
        },
        { url: '/favicon.ico', revision: 'c30c7d42707a47a3f4591831641e50dc' },
        { url: '/manifest.json', revision: 'af1bd108d48297c43058324516e41759' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: t,
              state: n,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
