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
    "revision": "dc996ea1442924e4f03819fd69b03160"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "d70cdcedfe47c8e84244aa0a032499b6"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "3e4ef0a6434edcb19223541243c746da"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "d1a73102dff71f8e490e65515f874b55"
  },
  {
    "url": "1.0/guide/customers-vendors.html",
    "revision": "81a3adadbe84eee891f3b03a08e08809"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "a7e222857f9ff16b75a513b51e1be00d"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "6be122f3b9b0c13c95917f474ed46d5f"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "aafc3dd928e865d37d290e8caf894b34"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "18e488c43cd813ab56ca432886f899cb"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "a49087abdff71e28fb6d8fa8a3ff912b"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "ce9f124c09a570da1dd492c82bfe9358"
  },
  {
    "url": "404.html",
    "revision": "3b063e15997bb5240a9670f81a6defdd"
  },
  {
    "url": "assets/css/0.styles.8b34dfaf.css",
    "revision": "4909b5d1d9a8927a99028ffc5a3fdabc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2e809696.js",
    "revision": "b155a2a9a2765277b65af378790ae2bc"
  },
  {
    "url": "assets/js/11.e63305d1.js",
    "revision": "10a6d52978831349c6efe0812c8f4001"
  },
  {
    "url": "assets/js/12.a180667a.js",
    "revision": "f770512e952321337265bbcf180d5266"
  },
  {
    "url": "assets/js/13.cd6ab079.js",
    "revision": "36679dd83118a55e6d5bc23fbc9e03e9"
  },
  {
    "url": "assets/js/14.d267276b.js",
    "revision": "991e8d4bc8910cbb790903a9f1b133ea"
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
    "url": "assets/js/7.2424702c.js",
    "revision": "21a55be6428e0c25e27db2f6201b4a13"
  },
  {
    "url": "assets/js/8.a545bf1e.js",
    "revision": "d5744d63173d8cd3bc9e1a1a0ea090a4"
  },
  {
    "url": "assets/js/9.6e0cc592.js",
    "revision": "f2826ff13aec9a695454593d435807c8"
  },
  {
    "url": "assets/js/app.b01675f8.js",
    "revision": "7a2ab19108b7d78ed3fc26c77aef0ead"
  },
  {
    "url": "index.html",
    "revision": "0e3e8787d1abcaadfd578c28f982be57"
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
