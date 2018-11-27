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
    "revision": "d6f1cca2b9b493d5c17388b420a5a929"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "8886db9233b0a35940c3945300a4f817"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "ee3a0715fe3209adda09da7a9538c917"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "6881b003d6e7021cb4df02d1ea8073a7"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "edb5dd352856e50d49dbe03ce7b60204"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "c3285924a449f21da8cfb1cfb6d142bb"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "db6bb218eb83cc3ae28042896dcf2933"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "494fa74537f0b80f872d3670221a9acf"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "f0c5aeaa2f1093f5826852de6a6a5a26"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "86b06759d022d3c9992c1621eb03e77e"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "58aeaf0d6087efee4972fb043fe90677"
  },
  {
    "url": "404.html",
    "revision": "67cbd132510519d260ca2647959b8cae"
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
    "url": "assets/js/15.d8911ede.js",
    "revision": "fff4a592e454b356fd3d81a7b9f310fe"
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
    "url": "assets/js/app.b15795b8.js",
    "revision": "9cd3232300814a5b22467d7f1a470ba8"
  },
  {
    "url": "index.html",
    "revision": "e1f22ea22b667626c4179247e9446565"
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
