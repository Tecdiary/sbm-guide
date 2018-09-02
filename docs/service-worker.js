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
    "revision": "5b29f1a2e4e53beb3f081b34b6b8d6f7"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "db4c6bbe20164617c2fe1a5d66d09d2e"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "0925e8e0d92ec3e0bac1f0f39655a5e0"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "2b8f16c9bc9af1a52d8e97614de1f20d"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "d1d6118ce19aa85148b9c19ec52784f2"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "cfe1dd6d76b4071f470510a64fe8cffd"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "ce244056a2607f7655ff5b7d27be9dc3"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "52d1acc80f6b6fe9717039cfc4bbf8a9"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "3d7119da69d10b9019a51ad663e27161"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "59b8df488ef08f25e7430adaa101f411"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "56edef33c1ce724db205796f6eb875f1"
  },
  {
    "url": "404.html",
    "revision": "dffa615b97dfd3f14db65c6894ab3741"
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
    "url": "assets/js/12.c3cbb690.js",
    "revision": "0089231f6eb152348b19bfccbe39bb7b"
  },
  {
    "url": "assets/js/13.8d29b377.js",
    "revision": "0cdecf7cbbbaee5b7513aa360854da40"
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
    "url": "assets/js/5.8f78fb9e.js",
    "revision": "7283b05dbc1d523f494f5d9b4106f566"
  },
  {
    "url": "assets/js/6.a18180e9.js",
    "revision": "801c7613d5440623b5b383364b3031de"
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
    "url": "assets/js/app.55e43835.js",
    "revision": "893fda191c0c358df6275324813047d8"
  },
  {
    "url": "index.html",
    "revision": "cf87e24a21005c1f4e079f78d1d33c74"
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
