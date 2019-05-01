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
    "revision": "40adbc41199b871b0f2c98c9264d6dea"
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
    "url": "assets/js/14.ca6b3d69.js",
    "revision": "ef174df7a41b8716f6a725a450320432"
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
    "url": "assets/js/4.4b8bb347.js",
    "revision": "785d75e76bff634fa44bca103c67e5fe"
  },
  {
    "url": "assets/js/5.261a12d8.js",
    "revision": "206c808341a2416a453e833f2bd27db1"
  },
  {
    "url": "assets/js/6.09d6d382.js",
    "revision": "a8a8e438acd30b0e9fd18c4484ff98af"
  },
  {
    "url": "assets/js/7.9d783509.js",
    "revision": "6b184dfb40fd8c44d46c0dbae4a2b572"
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
    "url": "assets/js/app.41e90b25.js",
    "revision": "c24c9c113c96e07158305268e5bdbce2"
  },
  {
    "url": "index.html",
    "revision": "3b8609bf4dcba81481af06249d8ed8cd"
  },
  {
    "url": "v1/credit/index.html",
    "revision": "4a3b95979c43fec39572f95089df2030"
  },
  {
    "url": "v1/developer-guide/index.html",
    "revision": "9f5fce9a563f7a5bd5e6822a64a00bbd"
  },
  {
    "url": "v1/faqs/index.html",
    "revision": "8dc2d750c948100090110bfdd4bf1c1e"
  },
  {
    "url": "v1/guide/accounts-transfers.html",
    "revision": "cfd1852a27d0d2548eb44a1f4c98b0f1"
  },
  {
    "url": "v1/guide/expenses-incomes.html",
    "revision": "91b214506e7dbdabc6ceb1e389f198c3"
  },
  {
    "url": "v1/guide/index.html",
    "revision": "5774d1a57af6903317ae92dfe9de8115"
  },
  {
    "url": "v1/guide/invoices-purchases.html",
    "revision": "75f0b96333310efdda11977d9f56c128"
  },
  {
    "url": "v1/guide/products-customers-vendors.html",
    "revision": "90f5679bc0428e4797a773589dc5e7db"
  },
  {
    "url": "v1/guide/users-settings.html",
    "revision": "00c8533e1d8dfc37c231ce9fe8e8b998"
  },
  {
    "url": "v1/install/index.html",
    "revision": "716ee0d9c41964373322de226e461d8e"
  },
  {
    "url": "v1/install/service.html",
    "revision": "75b42681a941a9848140a56c15d7562b"
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
