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
    "revision": "71fb47a6620ff2b39951b79b8f6943e5"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "2ebdcf38424ddacf76bf6583fa526d45"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "546cb2053916378a0ede23ad855ebdfa"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "441b5d402df30ddf2e91b7adc5123087"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "419f5daa65bb5df823331ae29995f320"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "203004bb75ce12b9a9caf5cb4c60ea0d"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "7bb00829987f0a6d84abb7204a6e9f90"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "93915230a5b4cc7276f8673da33c52bc"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "d5adf118d65d048e666d99bea0db1e5c"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "38296ce24042805caf7efc0b183cfcc5"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "97a39221b66928f068272c77f1a8b1bc"
  },
  {
    "url": "404.html",
    "revision": "40be91c7ba643f5b0f20f9741a9c4192"
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
    "url": "assets/js/13.f2cbbca8.js",
    "revision": "d8db6c75a32527a1fe160071f92673ad"
  },
  {
    "url": "assets/js/14.f11e5493.js",
    "revision": "f245082443cd39ce178790de8a3e0585"
  },
  {
    "url": "assets/js/15.90cb4080.js",
    "revision": "8dd88f4b386861bde52abae8c44eb9ce"
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
    "url": "assets/js/app.8448d616.js",
    "revision": "c48c733ff364341656c454f6ebd8c465"
  },
  {
    "url": "index.html",
    "revision": "7557a98506400d57b1118003d1d83958"
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
