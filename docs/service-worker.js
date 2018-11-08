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
    "revision": "ad52e20eb00ac4ae60fee278352b2213"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "7f9d12ab58b65de54ddea917d420615c"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "3402b691c14c18a1f1a58aac1eb76bed"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "1586ac05ce9c90f8dd69bbd215ad8d87"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "9a7f0ba415f959266afe8bc6660ca1d5"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "6942c68b2e09910fcf426ffc6a7bdaeb"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "769af9ce3642e39f5148cee4d8eb1149"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "e3bf0ce12a7ff9b1022e29292024d7de"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "653e7e841bd4db5bb96f7caac9b7a50c"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "dda3006c26b8d9b7b2104ecab429d3ab"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "9ca1e96907df243177ededcfe603577a"
  },
  {
    "url": "404.html",
    "revision": "a6c8d641f400fc3b4036d003a1e8a1bf"
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
    "url": "assets/js/12.9fc6abee.js",
    "revision": "fcc5366bd1a14124bbdc0b22a2cf4f67"
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
    "url": "assets/js/15.d0fb6686.js",
    "revision": "a7b32c398413917cc976edd66733ed61"
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
    "url": "assets/js/5.8f78fb9e.js",
    "revision": "7283b05dbc1d523f494f5d9b4106f566"
  },
  {
    "url": "assets/js/6.91e9edd7.js",
    "revision": "dbc8a8908ecfd26a0a50af0a237f8327"
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
    "url": "assets/js/app.101baa82.js",
    "revision": "35c6457710af45287ef21c3b8e50ee38"
  },
  {
    "url": "index.html",
    "revision": "3bf125a431a13a7a7e20a905b9d0813d"
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
