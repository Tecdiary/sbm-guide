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
    "revision": "4cb34641ae990b3a57421546484481fd"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "fcfbfc366888814206dd5a30c67b3da3"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "cffc1c8462efd95ce17ca6ffad66bd36"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "774f872a53c0d9b05aa49a1753a0857a"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "24b67011139279eb7e270da7d82ee1bf"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "d6a2da50d9f55ef22303f0a9624db6ae"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "b83656bdb5dc29a25057500a5e07041b"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "708d85552b38297e03c4795e441995ee"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "fd1fb1057069097b9cd28afc123eb0eb"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "bfa055fd46658caaa91be00b2938999a"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "6a948369fec1c97d127ed1459be76db5"
  },
  {
    "url": "404.html",
    "revision": "6ae68b7cc14aa1ed6be1e12ee679de69"
  },
  {
    "url": "assets/css/0.styles.3c9d5369.css",
    "revision": "af9852f9aa9bb7b61e122317f0df0a6b"
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
    "url": "assets/js/app.0f24c3ac.js",
    "revision": "653d579d11e813512343d21b2c7bc675"
  },
  {
    "url": "index.html",
    "revision": "68649ca351b7bcccc68f0eec3955519a"
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
