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
    "revision": "c0fb53b18000701702ee370662e4577f"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "d28adf439a84e6278a74d35795b8c7f1"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "ae38fcd610fc50ced76e82f7ccad28c3"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "5815e163149b854973b993fad8bb8524"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "4db4f11367fbab26c3762311869901dc"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "38aba765d1bdf56524d6d1f1b3d8a645"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "6b7395b1236da972cd445c0d5071383f"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "fa59172dd7d9a31500c077f99b4fa8a4"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "1b53f525dafd62293736b2df5f31d5d2"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "4c6492aac31f3bdf3c6d8392e3bd7147"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "9a91f75f6f16f5817d98deb72d406c66"
  },
  {
    "url": "404.html",
    "revision": "d94022e6f2c6fe76367ef84da67d7956"
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
    "url": "assets/js/15.26ec1cc4.js",
    "revision": "8a528d3d3b3fb13edbd166581a6dbffd"
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
    "url": "assets/js/app.d5c4e62b.js",
    "revision": "65c8e0a3e59ef5aa094a670e45a5c4b5"
  },
  {
    "url": "index.html",
    "revision": "55fb24f7da401f94b870d6e953cb3799"
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
