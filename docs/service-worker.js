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
    "revision": "9ec3e6c61f63d2243f2aebd93f09cbbc"
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
    "url": "assets/js/10.958124f2.js",
    "revision": "0e154d0129553f9c2c5c44d825d42cd5"
  },
  {
    "url": "assets/js/11.1a21f1f0.js",
    "revision": "cf22f992a45e9e39511de35eff5572e1"
  },
  {
    "url": "assets/js/12.0776c25b.js",
    "revision": "47414c9d86d7215a2d269bc6ac33d304"
  },
  {
    "url": "assets/js/13.a352071f.js",
    "revision": "280d04b413e3d4ea705b5e2ba85f4e3e"
  },
  {
    "url": "assets/js/14.9ff53560.js",
    "revision": "be8513230f3223fe5d19966c24500653"
  },
  {
    "url": "assets/js/15.1898bd6b.js",
    "revision": "2d6a17fcd37e119dd950b4fe25bc3199"
  },
  {
    "url": "assets/js/16.4b6283d6.js",
    "revision": "f4cdba6612cc5fc0d474a5a36b3463fe"
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
    "url": "assets/js/4.7d6372c8.js",
    "revision": "e1f78ee2d2003fd4bb8f7bbb9ba2703e"
  },
  {
    "url": "assets/js/5.e6d70a72.js",
    "revision": "2a7102b8a7a8e28981a1629d595d22b4"
  },
  {
    "url": "assets/js/6.36506809.js",
    "revision": "c8cd3d56c0a3c887a614ec23a328cf12"
  },
  {
    "url": "assets/js/7.52e1b306.js",
    "revision": "d2d4ce3fa7a9c2f9d37cd0a72a481bcc"
  },
  {
    "url": "assets/js/8.5820a9f9.js",
    "revision": "9661a2426355742730e656c978d5cbe0"
  },
  {
    "url": "assets/js/9.a6183e1d.js",
    "revision": "c766e126a5aeb9f65deba5913314ef0c"
  },
  {
    "url": "assets/js/app.ca7d56e2.js",
    "revision": "01c5fb3b0d7ee758f3939b2426f507a5"
  },
  {
    "url": "index.html",
    "revision": "ec1da83c3436b9e361627860226b6eca"
  },
  {
    "url": "v1/credit/index.html",
    "revision": "5731f2077160eca5915f6a1bb62f46ab"
  },
  {
    "url": "v1/developer-guide/index.html",
    "revision": "631f84082e83734d70963c8a7c329dcb"
  },
  {
    "url": "v1/faqs/index.html",
    "revision": "6872bfbd3cf42827a07c9ac7bd19307e"
  },
  {
    "url": "v1/guide/accounts-transfers.html",
    "revision": "9ed9ff1654c3a991556ee079a3b57900"
  },
  {
    "url": "v1/guide/expenses-incomes.html",
    "revision": "7becc054f7cf77b5010f6b36e31bcbe1"
  },
  {
    "url": "v1/guide/index.html",
    "revision": "27a7ced9ff2787942b78875503a419be"
  },
  {
    "url": "v1/guide/invoices-purchases.html",
    "revision": "0eaed068aaf6318d23119b3cc6d41484"
  },
  {
    "url": "v1/guide/products-customers-vendors.html",
    "revision": "7888cde7bb78b44e8911162a9ee5b376"
  },
  {
    "url": "v1/guide/users-settings.html",
    "revision": "fbf24a669f8d6de86cd2a3fdee74699e"
  },
  {
    "url": "v1/install/index.html",
    "revision": "09e59ded7fc21a1f8d7a296db4a508ad"
  },
  {
    "url": "v1/install/service.html",
    "revision": "311f1bac0ac734a6a7f41c14c2629587"
  },
  {
    "url": "v1/update/index.html",
    "revision": "2b080f1e5619f5aaa644a46f61ea19c6"
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
