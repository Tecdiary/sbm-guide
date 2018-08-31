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
    "revision": "f16948995114d0857e512584d4f78fb6"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "cbf9ad6f8e46f889df91380df1d3f0e5"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "24843ffcd25950e5ca02f97f540b8d8a"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "1b9b25f8c61cd1de7a64fadaec6a0d7d"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "70c336fb4cb48f761925eb0d0cf85ea8"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "17b40838dee090615e8cf337344f9dae"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "4331e2e3115dd41042b74c35f981ed6a"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "31010806ae6ae0a807a2332e5ada3869"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "41779df0d2beaf9e1900452d8c812552"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "606555cb54f45f5a5e74a9ab9b08acef"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "e8f2dbd8ceba2a25987ba48cf8cc738a"
  },
  {
    "url": "404.html",
    "revision": "55bd3636603e8565f8cdadcd41abd0c7"
  },
  {
    "url": "assets/css/0.styles.7ed270c8.css",
    "revision": "db41133e3ec8234eb7b26fa3eeddf634"
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
    "url": "assets/js/4.91973575.js",
    "revision": "54bdeeb6b3665c739e4f0feba78eb562"
  },
  {
    "url": "assets/js/5.65bb4197.js",
    "revision": "7139833e2ff84e71cfc339770df77a39"
  },
  {
    "url": "assets/js/6.5b9c12a9.js",
    "revision": "64f9032e88ed21de3ebf7460d8c516b8"
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
    "url": "assets/js/app.c27e9c38.js",
    "revision": "4c607889a77723fd51107d8c413f27ce"
  },
  {
    "url": "index.html",
    "revision": "b3eeb25229041587c3f617bba663e376"
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
