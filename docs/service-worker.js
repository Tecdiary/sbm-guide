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
    "revision": "1905c1c0e9d7895df2b352b2866a9b6d"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "06af5d8f5dffc1d6a558057166bde59d"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "d9242b70b82e47e812f4147e2a7f74f7"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "d27c2ec38e3f1fef591bf3f85afd13fc"
  },
  {
    "url": "1.0/guide/customers-vendors.html",
    "revision": "11e11cad7498b2f81287e9bb4dd66fd6"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "5def1f380ded4c7e805964b38b3ff522"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "88f2530a3a056e74903da63f3b09e23e"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "49a3ae36f5e122c6986490136e429c56"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "452f08dc398de287c4a35ef06daeb2c2"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "6178772d3b7c49cefa3dbf9d3191355e"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "1cfff5d4ca50bbb2dc55f442b8972c48"
  },
  {
    "url": "404.html",
    "revision": "21120b640d86482d2fd87407ed5f3045"
  },
  {
    "url": "assets/css/0.styles.51fe9e73.css",
    "revision": "118f8b7a0c34ce696d07b0c194a6bdad"
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
    "url": "assets/js/app.4a05f135.js",
    "revision": "620b15b202d42c7b63a608217dc7c6da"
  },
  {
    "url": "index.html",
    "revision": "bd0f135e190c4efa724369df2cc53e6f"
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
