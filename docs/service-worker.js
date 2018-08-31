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
    "revision": "7645b5696b593af06f67ebfff1882945"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "a4d03eb273a0c1c26a2dd4cb7b7ffe30"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "d808f5f90d832acbc2c984197fef085a"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "b258da36d65fbe937f4bfc4963a1778c"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "6371b15361852e5fd0db1bf713be1ac4"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "2a4846d9be8bfb95539c57ff3b68455a"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "7cd5ff504a77b7519cf73de109d1bcc4"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "52b2ebeb3cae90dfd5c00e68a144d536"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "9940180d90248653b77fed9fc73d8fc9"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "229ec052b374ed812e6aab1413ecf3ca"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "8d0ca6b9b40f41f571e1eb95128c30aa"
  },
  {
    "url": "404.html",
    "revision": "3bde0b7180b5922145bbb9fd7155215c"
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
    "url": "assets/js/11.cdece6ed.js",
    "revision": "64dcf72228a44911fd4912f9d04efc62"
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
    "url": "assets/js/app.6b15a1b1.js",
    "revision": "b373c8b7f5ba893489c6096c0ee4a3c6"
  },
  {
    "url": "index.html",
    "revision": "3c1398e7030cacfd09aa9229b9948746"
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
