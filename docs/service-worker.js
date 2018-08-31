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
    "revision": "ca7459d507d814be14a4c6a29b2a7a67"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "26ae6928448c776d8bd10d57a433cf48"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "a1e35aa6fa0250bc04046fbf8e5861e2"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "e6f67bf301ec0e74652dd3ad31f525f8"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "d7f35d0c922b14581b895c75b394db80"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "093dc77e0fef5d5faf1c9c4e1cbe0138"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "d6f49740d2e283f34b625b7bc105aca8"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "085ccec48742563fc1598c0eddd4dfa6"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "52e88a66168db3a0be4ee56adb2aa349"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "25f4e2ed542232851ba0fb8aee3aabc0"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "d16ea5ea219cee804441a91412677529"
  },
  {
    "url": "404.html",
    "revision": "eb4da23cf817bc20edad5083a3f81808"
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
    "url": "assets/js/11.779c4242.js",
    "revision": "fc32a6d6491ee15008a9029c58bd05cd"
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
    "url": "assets/js/9.817a946c.js",
    "revision": "f143203901c193aa9714a4ee9dc4fcd5"
  },
  {
    "url": "assets/js/app.ebaa29a0.js",
    "revision": "abe6aefc5c528c45a39c75636f627c2d"
  },
  {
    "url": "index.html",
    "revision": "7acb65a7bced8493f9e22291a3560874"
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
