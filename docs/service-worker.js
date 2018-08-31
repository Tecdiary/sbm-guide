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
    "revision": "5f85b3233bdc38c037c9797a837e38ee"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "14ffcc16191883794bda6da320eb0f4b"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "6eb98bc92f587ac7b991e4ed2ea53538"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "39a29341f7f9df216716fed4b9cc9016"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "4b856cd97fef1543234ea5e574a61428"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "98fd65fb1881862ba929cc79186ce66d"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "e580da4ad8cfc692c8ebc19696e35334"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "cd8de3232edee951032448387aa8a414"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "41eb56b2c60d8b404434f934424d0b54"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "5a3cfd8236f1d0e237646918a4f9c56f"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "c43ec9cade74e8da7589c32c298ead17"
  },
  {
    "url": "404.html",
    "revision": "a1eb29647c73c23fc0752725f46e7db5"
  },
  {
    "url": "assets/css/0.styles.3c9d5369.css",
    "revision": "af9852f9aa9bb7b61e122317f0df0a6b"
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
    "url": "assets/js/6.ee031483.js",
    "revision": "30c91b380b5fc7d76e968266a85cefb3"
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
    "url": "assets/js/app.da8ce6a1.js",
    "revision": "504d0b916893fd7ce438b646dece2702"
  },
  {
    "url": "index.html",
    "revision": "4f32065edc43b3d0b146edea7bd4138c"
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
