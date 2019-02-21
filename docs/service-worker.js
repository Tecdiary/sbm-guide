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
    "url": "404.html",
    "revision": "7b21fce68d5aa9843681c076813242e1"
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
    "url": "assets/js/10.4cba37f1.js",
    "revision": "3bc3427b1d2db32ce310c10a9392c317"
  },
  {
    "url": "assets/js/11.56d44a51.js",
    "revision": "8f32be968ef91e25ea2b8725b8112983"
  },
  {
    "url": "assets/js/12.c843d95f.js",
    "revision": "3adc7611f814cc5d7e0305445a1a6e46"
  },
  {
    "url": "assets/js/13.ffc5395f.js",
    "revision": "da8bcb2e86a32ff268b8d7bcc10317b5"
  },
  {
    "url": "assets/js/14.5825d4f8.js",
    "revision": "8e1ac8ccc1683546c2e9207dd4972654"
  },
  {
    "url": "assets/js/15.eb9520b9.js",
    "revision": "dcfc96f921b5ddf9fb1a82af37505645"
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
    "url": "assets/js/4.0e180d88.js",
    "revision": "3023c14e4c7083f4fb192e7e039731a7"
  },
  {
    "url": "assets/js/5.261a12d8.js",
    "revision": "206c808341a2416a453e833f2bd27db1"
  },
  {
    "url": "assets/js/6.09d6d382.js",
    "revision": "a8a8e438acd30b0e9fd18c4484ff98af"
  },
  {
    "url": "assets/js/7.9d783509.js",
    "revision": "6b184dfb40fd8c44d46c0dbae4a2b572"
  },
  {
    "url": "assets/js/8.b36a2ef6.js",
    "revision": "0dbf4857f18047ff522e7ef4e401bc62"
  },
  {
    "url": "assets/js/9.6f329644.js",
    "revision": "588725b72bbdab5359c026067860b4f0"
  },
  {
    "url": "assets/js/app.dea59225.js",
    "revision": "d0c59b4ac5f86d2e7e973945848fdfa5"
  },
  {
    "url": "index.html",
    "revision": "0703468b1146dcd4555fc91c75735b6c"
  },
  {
    "url": "v1/credit/index.html",
    "revision": "9dc9f2d866890ad39095c08848e6961f"
  },
  {
    "url": "v1/developer-guide/index.html",
    "revision": "2122e13825957414809bf4a5ef6d1550"
  },
  {
    "url": "v1/faqs/index.html",
    "revision": "f48952b71357e85ef5090da85441c24f"
  },
  {
    "url": "v1/guide/accounts-transfers.html",
    "revision": "9ffaa18ea3eee7d36100ac7e668e0d98"
  },
  {
    "url": "v1/guide/expenses-incomes.html",
    "revision": "603d3b6991e9075ccd770f0ca90a25b1"
  },
  {
    "url": "v1/guide/index.html",
    "revision": "d827fc0c3b6db24baa7961bc53905741"
  },
  {
    "url": "v1/guide/invoices-purchases.html",
    "revision": "1c2753f3c064bd1e41bb15859b15f895"
  },
  {
    "url": "v1/guide/products-customers-vendors.html",
    "revision": "9221c5632de6de27c85f88c50cb5ef4b"
  },
  {
    "url": "v1/guide/users-settings.html",
    "revision": "04ad314ae367b3e79b720113b8d67111"
  },
  {
    "url": "v1/install/index.html",
    "revision": "1a5521827bbd6f9db8356e230a661765"
  },
  {
    "url": "v1/install/service.html",
    "revision": "601bb84f8a83dcc7c95731d3a323f2f6"
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
