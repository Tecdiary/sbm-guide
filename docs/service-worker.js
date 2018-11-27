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
    "url": "1.0/credit/index.html",
    "revision": "d07243cef6c6d69ee2450e6f7de7b1da"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "1a3c4f2e17a25660425594493ab73443"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "a569bb166f209b34f47229425574faf9"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "222cf5383de6a23756dff4c4645d9456"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "7fa869d141ced6eba6f5f7d6d97ebdf1"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "dc7929864d316ce90e6e963992af002d"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "eb212271b56e7a6f944dbeb31e081166"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "2327e3ead828397843ad6ddff2abb9ad"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "d3bc8f7bf673aad154cf34bd7fef0fcd"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "039599602707b6aa2ab66b8378e71e3f"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "3301f8a87276779cd8257ec4c91f422d"
  },
  {
    "url": "404.html",
    "revision": "6a399a7ae74e657942ea1bb1dc67a513"
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
    "url": "assets/js/10.eb063d57.js",
    "revision": "6c3319ffe85cc845cb61119621569c50"
  },
  {
    "url": "assets/js/11.779c4242.js",
    "revision": "fc32a6d6491ee15008a9029c58bd05cd"
  },
  {
    "url": "assets/js/12.b73656fe.js",
    "revision": "e7ee413dceb3fcff87a151a659001f9b"
  },
  {
    "url": "assets/js/13.1045fcbc.js",
    "revision": "4136a901790a695e40071b2b61b9c929"
  },
  {
    "url": "assets/js/14.177f7518.js",
    "revision": "d9b81e595359c03fa4596fb1c6a85afb"
  },
  {
    "url": "assets/js/15.d8911ede.js",
    "revision": "fff4a592e454b356fd3d81a7b9f310fe"
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
    "url": "assets/js/4.91973575.js",
    "revision": "54bdeeb6b3665c739e4f0feba78eb562"
  },
  {
    "url": "assets/js/5.c029dbf1.js",
    "revision": "ec14da1426b4bcf98a63e2af3da659c0"
  },
  {
    "url": "assets/js/6.593f1b12.js",
    "revision": "7e23dfeaedab843515d42387a5ec7ae8"
  },
  {
    "url": "assets/js/7.632c2fcc.js",
    "revision": "1434ae6cfdc012dad2fed3666818d7ad"
  },
  {
    "url": "assets/js/8.060759bf.js",
    "revision": "ebf03f3ce68a8a45ad159345d97114f2"
  },
  {
    "url": "assets/js/9.bb0ae317.js",
    "revision": "5f8dea4b9f71eea1ee75d088570663f5"
  },
  {
    "url": "assets/js/app.7c4b97ab.js",
    "revision": "f00422c21285d74ca2205cb66ec0d733"
  },
  {
    "url": "index.html",
    "revision": "72c5f96ab93182147880ff00f0f565a0"
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
