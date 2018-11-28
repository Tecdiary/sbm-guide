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
    "revision": "8db4487f96a3e1c2d561ed67c94b61e0"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "c975e843cc16aae95d2dfcd27b409ad5"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "c3bb71eb9ccea08c7a917f62c2feafcc"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "b011a34671aca3e2bbaef30e6c89550b"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "e9cff22393ae0aa977468fb56ed6904b"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "8c7c7356353bf90b0b2a3adadb5a0780"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "02e3c57f08e5ae591dd01c4b38388e69"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "0a6ab1359f60ce93f11fb9e1bcdfd4a9"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "77cd87198c805375099a50c840385abd"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "128fc01ded960b3e2f87d6dc1509a82d"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "26b19adce74f931e940dd0f051b91404"
  },
  {
    "url": "404.html",
    "revision": "ef64659a21ae74c9203da7c357fea415"
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
    "url": "assets/js/13.f2cbbca8.js",
    "revision": "d8db6c75a32527a1fe160071f92673ad"
  },
  {
    "url": "assets/js/14.f11e5493.js",
    "revision": "f245082443cd39ce178790de8a3e0585"
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
    "url": "assets/js/app.c58175ec.js",
    "revision": "1677ee406c8dabf18e02f36f47636b9d"
  },
  {
    "url": "index.html",
    "revision": "5f3500dc76a70e9310bd9b509b26c0fe"
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
