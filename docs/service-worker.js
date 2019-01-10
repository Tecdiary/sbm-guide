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
    "revision": "7007c7939fd7d0ad172b9a368ef82dc5"
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
    "url": "assets/js/14.d7c5bea3.js",
    "revision": "866d0ca0c267f56cdc6e8bd8ceb6042d"
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
    "url": "assets/js/4.a7cd725c.js",
    "revision": "f7547d4a4b17e7a614ddc1ca9d66a4d9"
  },
  {
    "url": "assets/js/5.261a12d8.js",
    "revision": "206c808341a2416a453e833f2bd27db1"
  },
  {
    "url": "assets/js/6.97a48381.js",
    "revision": "46639931a86ed29a0fb5bb7b8a4aa5dd"
  },
  {
    "url": "assets/js/7.ac2ed0cf.js",
    "revision": "86c93abfc506b10e597317c5dcc658b6"
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
    "url": "assets/js/app.ecaf410b.js",
    "revision": "c11c3f15e5108574750ecd9d63dac51c"
  },
  {
    "url": "index.html",
    "revision": "aa5eca30f41d04be59ff3c8967995ae3"
  },
  {
    "url": "v1/credit/index.html",
    "revision": "b4ae5aedd8be0bbe75308acdc4c15d72"
  },
  {
    "url": "v1/developer-guide/index.html",
    "revision": "1ceef04fddaaeb8520f4cf284cac6d25"
  },
  {
    "url": "v1/faqs/index.html",
    "revision": "36d998a972d2e0b3e10faab918654f95"
  },
  {
    "url": "v1/guide/accounts-transfers.html",
    "revision": "0942e97b1bbe7547d9c1cbbd1f81b55f"
  },
  {
    "url": "v1/guide/expenses-incomes.html",
    "revision": "da8e1c1152b91606d6e48cfbefbf6a36"
  },
  {
    "url": "v1/guide/index.html",
    "revision": "f874052b2831baf676ead996a313af2a"
  },
  {
    "url": "v1/guide/invoices-purchases.html",
    "revision": "015abb908c621ddc23c6de3d2a1d7bc8"
  },
  {
    "url": "v1/guide/products-customers-vendors.html",
    "revision": "6790800507dea2404a312d19d859607d"
  },
  {
    "url": "v1/guide/users-settings.html",
    "revision": "6895d78d0333e4f3d8500bd93da80cd2"
  },
  {
    "url": "v1/install/index.html",
    "revision": "a61e9cfe12daf1a20459acdccd9e667e"
  },
  {
    "url": "v1/install/service.html",
    "revision": "3e26adc5f3dae4b424f228972335acfd"
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
