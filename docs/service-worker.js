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
    "revision": "127ae602fbb9e317e698c505fc1d714d"
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
    "url": "assets/js/10.958124f2.js",
    "revision": "0e154d0129553f9c2c5c44d825d42cd5"
  },
  {
    "url": "assets/js/11.1a21f1f0.js",
    "revision": "cf22f992a45e9e39511de35eff5572e1"
  },
  {
    "url": "assets/js/12.0776c25b.js",
    "revision": "47414c9d86d7215a2d269bc6ac33d304"
  },
  {
    "url": "assets/js/13.a352071f.js",
    "revision": "280d04b413e3d4ea705b5e2ba85f4e3e"
  },
  {
    "url": "assets/js/14.4b44dabb.js",
    "revision": "a427d00b1adc71b0667e49e48193e6f7"
  },
  {
    "url": "assets/js/15.1898bd6b.js",
    "revision": "2d6a17fcd37e119dd950b4fe25bc3199"
  },
  {
    "url": "assets/js/16.4b6283d6.js",
    "revision": "f4cdba6612cc5fc0d474a5a36b3463fe"
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
    "url": "assets/js/4.7d6372c8.js",
    "revision": "e1f78ee2d2003fd4bb8f7bbb9ba2703e"
  },
  {
    "url": "assets/js/5.e6d70a72.js",
    "revision": "2a7102b8a7a8e28981a1629d595d22b4"
  },
  {
    "url": "assets/js/6.36506809.js",
    "revision": "c8cd3d56c0a3c887a614ec23a328cf12"
  },
  {
    "url": "assets/js/7.0a10d8b5.js",
    "revision": "18e9085ac706c5ba2b4d8891b2e46dc6"
  },
  {
    "url": "assets/js/8.5820a9f9.js",
    "revision": "9661a2426355742730e656c978d5cbe0"
  },
  {
    "url": "assets/js/9.a6183e1d.js",
    "revision": "c766e126a5aeb9f65deba5913314ef0c"
  },
  {
    "url": "assets/js/app.405965cc.js",
    "revision": "1efe37394373eca4a8d70554fd0f41e4"
  },
  {
    "url": "index.html",
    "revision": "b649ab1c94135f9553c0a89ca344bbcc"
  },
  {
    "url": "v1/credit/index.html",
    "revision": "0036f01f7b0573fab96edde46b8eb5f5"
  },
  {
    "url": "v1/developer-guide/index.html",
    "revision": "eb424abaf980faa8a8c3229505f255fb"
  },
  {
    "url": "v1/faqs/index.html",
    "revision": "f29b4874c78c56c52c2b08fcab0979d2"
  },
  {
    "url": "v1/guide/accounts-transfers.html",
    "revision": "a37fe2a1c4ff774c0e7253f9e601a59d"
  },
  {
    "url": "v1/guide/expenses-incomes.html",
    "revision": "7639a0905cae253a6837e39d01fc174a"
  },
  {
    "url": "v1/guide/index.html",
    "revision": "926c291d2ffeb0eaa6310d50f75606d1"
  },
  {
    "url": "v1/guide/invoices-purchases.html",
    "revision": "5229fd83dac43941d2561676e1e75ef1"
  },
  {
    "url": "v1/guide/products-customers-vendors.html",
    "revision": "d989a7927726879d4509eab958e54e01"
  },
  {
    "url": "v1/guide/users-settings.html",
    "revision": "e135ba64bf3ad22f71971894edda6a77"
  },
  {
    "url": "v1/install/index.html",
    "revision": "c26ac7c256c5dbf73b5796f765931426"
  },
  {
    "url": "v1/install/service.html",
    "revision": "ba20e4311e984cd277b2f08c7f419a4f"
  },
  {
    "url": "v1/update/index.html",
    "revision": "b4b5ad5abc5b8e2e16d422c8a9a7f8a3"
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
