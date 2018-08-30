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
    "revision": "ea80235886fcd5fee2f61260701d7ba0"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "a9faafa4af7a6d501809d79cbe8bc037"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "71619ee7be3bfb5b4845152c732cb518"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "0e629c610d90d86f1eff9dcfcaaa7a6c"
  },
  {
    "url": "1.0/guide/customers-vendors.html",
    "revision": "46ec6f3e2d59adebb5f72dfde581877a"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "4ffddff32411b0a34bdcca221e46dc68"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "c3d573f8be6ff53a72ab090b65a96652"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "72437ae358d8ed3bdc887cdba854c4e8"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "1f27cfecd9666e649c781dea6094ce55"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "e301b078d0eb0385d4fbf9ec326221c8"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "709fcfdb8d5a796e1600e1147a148b90"
  },
  {
    "url": "404.html",
    "revision": "c65c082449d65da81494a8bb7bac4466"
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
    "url": "assets/js/app.9caee01f.js",
    "revision": "7e5864f0bc93d1abb8b7e993c35ac2fc"
  },
  {
    "url": "index.html",
    "revision": "22768d627984670225bf2e6e82d58702"
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
