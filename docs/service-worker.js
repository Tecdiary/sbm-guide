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
    "revision": "3d35c4cf13ca73faf035ab20c9b3c0ed"
  },
  {
    "url": "1.0/developer-guide/index.html",
    "revision": "7217c149f50e9de6c041411a356067a3"
  },
  {
    "url": "1.0/faqs/index.html",
    "revision": "2f210472bf1c412acb0163d3f7cf3409"
  },
  {
    "url": "1.0/guide/accounts-transfers.html",
    "revision": "2c8c18cb0b1a303eebabc2506ecb58d7"
  },
  {
    "url": "1.0/guide/expenses-incomes.html",
    "revision": "d6e157d9165cd8c6ba1c3c1b21c228af"
  },
  {
    "url": "1.0/guide/index.html",
    "revision": "69e777289fef8946551655c703904e79"
  },
  {
    "url": "1.0/guide/invoices-purchases.html",
    "revision": "760793764f7c2395a4d8118928ba00f6"
  },
  {
    "url": "1.0/guide/products-customers-vendors.html",
    "revision": "e79989dbd8738785bebc57290187ff68"
  },
  {
    "url": "1.0/guide/users-settings.html",
    "revision": "953ebefbf322caa0c348113e6b058e37"
  },
  {
    "url": "1.0/install/index.html",
    "revision": "12421db3a0b57a1ba4308c63eff44a4a"
  },
  {
    "url": "1.0/install/service.html",
    "revision": "cdcee4f51a65b86e1d0c016b63c1dca4"
  },
  {
    "url": "404.html",
    "revision": "ed6a1477d76e88fd6e365ea24ef1e668"
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
    "url": "assets/js/15.69ddf72e.js",
    "revision": "105621f66b9da6fa705eb1c90ae5d72e"
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
    "url": "assets/js/app.e54a0271.js",
    "revision": "0bf584c30f7fc8daca30209e56322a2b"
  },
  {
    "url": "index.html",
    "revision": "23a60cd7d4bd750690607099d8ec827d"
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
