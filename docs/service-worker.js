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
    "revision": "cbd8c350ee6c16d913d4d258c8f4334c"
  },
  {
    "url": "assets/css/0.styles.080c6e14.css",
    "revision": "62af800868f88d1a279b5f463d2c3feb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.6dda9b1b.js",
    "revision": "62743958309dab2c52ea9a790514ef3b"
  },
  {
    "url": "assets/js/4.6391e260.js",
    "revision": "176f9cacb5350a435e39aebed5f114d7"
  },
  {
    "url": "assets/js/5.58a60f62.js",
    "revision": "cda3db658fa98469992a8cc4fcff29b3"
  },
  {
    "url": "assets/js/6.04400dfe.js",
    "revision": "a8022329ce87b66588cc22220a9ea268"
  },
  {
    "url": "assets/js/7.8a9d3040.js",
    "revision": "cd5327c6c4cf2923c144b1278ff689e2"
  },
  {
    "url": "assets/js/8.ab11d132.js",
    "revision": "a6240759ffa5caddddde3270d17309ab"
  },
  {
    "url": "assets/js/9.83202407.js",
    "revision": "6d6178741f2b160d50ee2b984aaa784e"
  },
  {
    "url": "assets/js/app.46556982.js",
    "revision": "e1493ce2f18ad3217185467aec4c7f7a"
  },
  {
    "url": "credit/index.html",
    "revision": "291b49a77159335c1a361b92dfebaccf"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "8baee2d788f1622cd30140873a7254fa"
  },
  {
    "url": "guide/index.html",
    "revision": "3e9e37fc1fe3f7ea76f41ec24358ecc2"
  },
  {
    "url": "guide/installation-guide.html",
    "revision": "0dd2fcaa1082b2a81f726eefd207aa3f"
  },
  {
    "url": "guide/update-guide.html",
    "revision": "a172c9f5a2be0e9d6528aabfeb99b6d7"
  },
  {
    "url": "index.html",
    "revision": "868df6d5574a40d0bd6417a2b4090c51"
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
