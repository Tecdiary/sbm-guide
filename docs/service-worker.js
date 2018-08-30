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
    "revision": "0bf2554aee556705875e23aeadb9702b"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "d67e07f773ef452c847842378402d92b"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "f10b982ffc56d4436766146a10ab1ee9"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "0105857a2cd99eda557a4ef240dcbc45"
  },
  {
    "url": "1.0/guide/customers-vendors.html",
    "revision": "e63e49c796863763cb45b61a2d44f056"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "5ed93fd50936575eade1125a4a328092"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "74272018dc6ed60274a7d75bfd951c8a"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "0541066026594e44e43ae13d9cc17e7c"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "b589bedde85d76abeb612b0f15d41549"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "b977afbe8067870e1acf990cbf705ae5"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "d0f9a9b773e87bef4f6d1eaec12903a4"
  },
  {
    "url": "404.html",
    "revision": "f16c5ebd5f5ee4f6c620a4aca846bea9"
  },
  {
    "url": "assets/css/0.styles.a49bb256.css",
    "revision": "d556cafb6287641ae3b202db5b4fd439"
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
    "url": "assets/js/app.00549adf.js",
    "revision": "e9c64c00ed9a319b9b5a1ead9105fb79"
  },
  {
    "url": "index.html",
    "revision": "c567e1e0de5ee6e962d9e48485213f76"
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
