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
    "revision": "a7288219ca2ce7b998c0217187578eee"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "8e07ce486b4c8ed2034f8b02ecba243a"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "dcd7b6c65ba595bca536b06462f539ec"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "06bf0706988375166f25525e58191338"
  },
  {
    "url": "1.0/guide/customers-vendors.html",
    "revision": "fbe2e991b21104e144211d8d02f4ad66"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "73ec6b9761651f4d1c7c9f86de9a4d36"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "39c299786ae78809a3960b1b8cbc268a"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "ddbc1c9e6e50116a93553ca5a541ea37"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "005649102864f0ad153a6ff56ba5af06"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "9a84beb2e3c6b3931ebffbbf30e853b1"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "d692a13d744f65bfd5f8412205281c7b"
  },
  {
    "url": "404.html",
    "revision": "1b5f8e0b95a31e292fc5d212f1d39954"
  },
  {
    "url": "assets/css/0.styles.274c4b23.css",
    "revision": "bf3353edcd2fe9cc3fa3457b31278be2"
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
    "url": "assets/js/app.73f61e91.js",
    "revision": "82639e2cfe2ba3288603728f79c7f497"
  },
  {
    "url": "index.html",
    "revision": "b1261404afcd0d2265ca884e704b067f"
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
