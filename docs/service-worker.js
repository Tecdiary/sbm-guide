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
    "revision": "59fb21bbf675e44d326d1781f848106f"
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
    "url": "assets/js/10.bfd2abbc.js",
    "revision": "16edbd25c7299e47301b4cfc74707014"
  },
  {
    "url": "assets/js/11.50f6df27.js",
    "revision": "e1f257475286ce5ee09ae5027c476c02"
  },
  {
    "url": "assets/js/12.a9be1b61.js",
    "revision": "edf223bd97e7093072e955db8c75785b"
  },
  {
    "url": "assets/js/13.ffc5395f.js",
    "revision": "da8bcb2e86a32ff268b8d7bcc10317b5"
  },
  {
    "url": "assets/js/14.712d120a.js",
    "revision": "bd4670b7208e20cb8b866f882967420a"
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
    "url": "assets/js/4.788fb4dd.js",
    "revision": "52e1fc3e0a95fe2e956f4b75f036d9e0"
  },
  {
    "url": "assets/js/5.4edaf5d2.js",
    "revision": "89ff2995276535328a681fb9428eb854"
  },
  {
    "url": "assets/js/6.dd50751f.js",
    "revision": "a4e5c1f137c8f362a07d83b0332f09da"
  },
  {
    "url": "assets/js/7.d2e9721f.js",
    "revision": "48e5869cb0e13e59a0bc283f29649b05"
  },
  {
    "url": "assets/js/8.9603ee58.js",
    "revision": "422a3fd3991ad03cda5fb4bb2b9170ee"
  },
  {
    "url": "assets/js/9.196888a2.js",
    "revision": "14658c9ebadc906f7d24809058835aab"
  },
  {
    "url": "assets/js/app.f350642f.js",
    "revision": "747aa21ca338a43ffdb9d0d618a1e1bd"
  },
  {
    "url": "index.html",
    "revision": "85fdcc3f4a2d4055400eb1c96bf41ed7"
  },
  {
    "url": "v1/credit/index.html",
    "revision": "14c68ff0c7c9315a7d4abf294945da72"
  },
  {
    "url": "v1/developer-guide/index.html",
    "revision": "1ff374b8f712abd2449c03d994868f56"
  },
  {
    "url": "v1/faqs/index.html",
    "revision": "1005e182dc5a19004b83501fe2980ebf"
  },
  {
    "url": "v1/guide/accounts-transfers.html",
    "revision": "4039b5564d13a3334b6e62d8cfb0f406"
  },
  {
    "url": "v1/guide/expenses-incomes.html",
    "revision": "50d089a777931b7e8e51e3cc81b5fd34"
  },
  {
    "url": "v1/guide/index.html",
    "revision": "9ba48c87f57100df4592b5860830617f"
  },
  {
    "url": "v1/guide/invoices-purchases.html",
    "revision": "51e276363de0fc60d5c8ad6a357481ca"
  },
  {
    "url": "v1/guide/products-customers-vendors.html",
    "revision": "88a12f26ba97d6c95a37c34844477664"
  },
  {
    "url": "v1/guide/users-settings.html",
    "revision": "eb1d0ef3cf53fadf9fdff20376900872"
  },
  {
    "url": "v1/install/index.html",
    "revision": "74d79e9b4fd5af68e4c09112af09ac7a"
  },
  {
    "url": "v1/install/service.html",
    "revision": "310d155b98fc06b9dbe2af24c46b7b78"
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
