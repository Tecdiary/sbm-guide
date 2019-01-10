/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1f4c0999f5452949704fcbd775069c80"
  },
  {
    "url": "assets/css/0.styles.032ddd1c.css",
    "revision": "a51f148fb0572fbed6df4648f6e96966"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4cba37f1.js",
    "revision": "3bc3427b1d2db32ce310c10a9392c317"
  },
  {
    "url": "assets/js/11.56d44a51.js",
    "revision": "8f32be968ef91e25ea2b8725b8112983"
  },
  {
    "url": "assets/js/12.c843d95f.js",
    "revision": "3adc7611f814cc5d7e0305445a1a6e46"
  },
  {
    "url": "assets/js/13.ffc5395f.js",
    "revision": "da8bcb2e86a32ff268b8d7bcc10317b5"
  },
  {
    "url": "assets/js/14.d7c5bea3.js",
    "revision": "866d0ca0c267f56cdc6e8bd8ceb6042d"
  },
  {
    "url": "assets/js/15.eb9520b9.js",
    "revision": "dcfc96f921b5ddf9fb1a82af37505645"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.1817f8b1.js",
    "revision": "00e732d58a5d06782bef3319d42f22ab"
  },
  {
    "url": "assets/js/4.a7cd725c.js",
    "revision": "f7547d4a4b17e7a614ddc1ca9d66a4d9"
  },
  {
    "url": "assets/js/5.261a12d8.js",
    "revision": "206c808341a2416a453e833f2bd27db1"
  },
  {
    "url": "assets/js/6.97a48381.js",
    "revision": "46639931a86ed29a0fb5bb7b8a4aa5dd"
  },
  {
    "url": "assets/js/7.ac2ed0cf.js",
    "revision": "86c93abfc506b10e597317c5dcc658b6"
  },
  {
    "url": "assets/js/8.b36a2ef6.js",
    "revision": "0dbf4857f18047ff522e7ef4e401bc62"
  },
  {
    "url": "assets/js/9.6f329644.js",
    "revision": "588725b72bbdab5359c026067860b4f0"
  },
  {
    "url": "assets/js/app.afc3954a.js",
    "revision": "b8f8d8595c255b2ad895a8d7b2e61ff1"
  },
  {
    "url": "index.html",
    "revision": "b254700dae94e29ee9f1d485f5a669d2"
  },
  {
    "url": "v1/credit/index.html",
    "revision": "20a3eac079e79670973f7acf457c4de3"
  },
  {
    "url": "v1/developer-guide/index.html",
    "revision": "5b46a3ced510728210362e569c472e83"
  },
  {
    "url": "v1/faqs/index.html",
    "revision": "c6a201bfc018381767a2aa78c4ef6931"
  },
  {
    "url": "v1/guide/accounts-transfers.html",
    "revision": "51fe915db242162e8a95d8bcc4274ab2"
  },
  {
    "url": "v1/guide/expenses-incomes.html",
    "revision": "3d8f3963291b2179dc7c0dba93245306"
  },
  {
    "url": "v1/guide/index.html",
    "revision": "23cda213b2210a90378776485fa53175"
  },
  {
    "url": "v1/guide/invoices-purchases.html",
    "revision": "4cdc0af6fe0d82133b2520ccc2b2f664"
  },
  {
    "url": "v1/guide/products-customers-vendors.html",
    "revision": "c8cb26c67dea01d468c1942bdd3512cd"
  },
  {
    "url": "v1/guide/users-settings.html",
    "revision": "7c7339f9c311d914578eebe364e1274a"
  },
  {
    "url": "v1/install/index.html",
    "revision": "cd0a99034188724eb8af26caa8682f04"
  },
  {
    "url": "v1/install/service.html",
    "revision": "bf067205580b91f6503c49441fb99a05"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
