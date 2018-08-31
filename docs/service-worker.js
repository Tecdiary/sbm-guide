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
    "revision": "7d0ea272762d7c9b7e139d58c5231623"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "c2f9d714eb16f8c547edd11ecb7d076d"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "9289c2958f47bbeb6bb97cad668f70fc"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "e317089e77bdfa8a1204a0f6a249fa53"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "459008c479d0acf271cf7bac16174cde"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "394aace3b181d0f47202f8944f114ad9"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "54914181722213e7618ec682b294be21"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "d467e2ebe8082d692b358461b8303313"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "ae349479eb8dbb03bd9ce1abef40ba08"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "3b5af58c35a7d8a9f7ab75e0047678af"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "c7bfb4247231f3aa3dcbd625371062c8"
  },
  {
    "url": "404.html",
    "revision": "8d8fa5f4b5696835827974469a85b971"
  },
  {
    "url": "assets/css/0.styles.efd96594.css",
    "revision": "d17d8d76ffcb7292d00a4754f46f91ae"
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
    "url": "assets/js/11.1f4a4cd5.js",
    "revision": "cfaf8750b16233b54a4753ea2953104e"
  },
  {
    "url": "assets/js/12.c3cbb690.js",
    "revision": "0089231f6eb152348b19bfccbe39bb7b"
  },
  {
    "url": "assets/js/13.cd6ab079.js",
    "revision": "36679dd83118a55e6d5bc23fbc9e03e9"
  },
  {
    "url": "assets/js/14.abfc5b08.js",
    "revision": "08ceffa7f77aad7ba4fb046579695bbc"
  },
  {
    "url": "assets/js/15.5fad334f.js",
    "revision": "264b2850d9339514e3ded986833bfc64"
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
    "url": "assets/js/4.480688b9.js",
    "revision": "68be8d38e676f551564e684cbbae6743"
  },
  {
    "url": "assets/js/5.65bb4197.js",
    "revision": "7139833e2ff84e71cfc339770df77a39"
  },
  {
    "url": "assets/js/6.ee031483.js",
    "revision": "30c91b380b5fc7d76e968266a85cefb3"
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
    "url": "assets/js/9.8fabc0d1.js",
    "revision": "36fd5024322eabacbad0026158e00682"
  },
  {
    "url": "assets/js/app.0a2fba2a.js",
    "revision": "7d31148a3e6e12c25b19aa05ea1553c9"
  },
  {
    "url": "index.html",
    "revision": "1854cdab1fac9ba037262abe702007f4"
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
