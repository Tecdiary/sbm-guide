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
    "revision": "53472ffc6cb9676f305039ef31d6741c"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "0ff2f700fde08181d2ea661cc48e0aa6"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "73577f8cae70d23b037c6b3266ce6d67"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "4a6d8148f67e669021d19a8f74358634"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "56ba84add340a5286d79d02d457b7109"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "eb93d15d762cdaca4be7880595205cca"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "ea5dcbf812cc98264a68eca99e6e5820"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "1cc2f6ba7a144d897caf9ced214f6280"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "e321039b36d1d5b5790e238c7b9a24e9"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "af430789ee5b85d8b7d43b1fb63407e1"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "4a34fdb4de5669036d9880844f755f2b"
  },
  {
    "url": "404.html",
    "revision": "dc2368f9217e911c178d9aee253e145f"
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
    "url": "assets/js/13.1045fcbc.js",
    "revision": "4136a901790a695e40071b2b61b9c929"
  },
  {
    "url": "assets/js/14.177f7518.js",
    "revision": "d9b81e595359c03fa4596fb1c6a85afb"
  },
  {
    "url": "assets/js/15.16242dee.js",
    "revision": "b20fcdc2a8240ea9e80ea83cc7a4cba5"
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
    "url": "assets/js/app.98071be6.js",
    "revision": "2aa78e316512f6fc4e3b1a0c8cf46b72"
  },
  {
    "url": "index.html",
    "revision": "a2d77663f7e030a5c3493b31dd7ebf92"
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
