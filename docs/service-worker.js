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
    "revision": "b954f112df51a2cc6b504827b449ffa3"
  },
  {
    "url": "assets/css/0.styles.74de196f.css",
    "revision": "eb4e27d35c14133d0971e7076822e5e1"
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
    "url": "assets/js/app.9df57e13.js",
    "revision": "bf3a2de63c2d28ef5f74012dbac6c56c"
  },
  {
    "url": "credit/index.html",
    "revision": "618c09fbad0099e1a450097f6c09b355"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "c3030a09415cf149d1932fe15c23e6d3"
  },
  {
    "url": "guide/index.html",
    "revision": "da1814d547c92abb2693ac8c83fbb956"
  },
  {
    "url": "guide/installation-guide.html",
    "revision": "1dfb6e162076696c6cd7918dddc5dbe9"
  },
  {
    "url": "guide/update-guide.html",
    "revision": "d8765687480787f84e613a6a0218ad77"
  },
  {
    "url": "index.html",
    "revision": "c46e37ba9eb90dda7708fa71f3a0048a"
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
