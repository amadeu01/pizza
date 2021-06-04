'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e26be4298419aed8f93b6d0b9addb7ec",
"index.html": "f79df87ee1b41c0506c2cc951dade592",
"/": "f79df87ee1b41c0506c2cc951dade592",
"CNAME": "5d981467b8d21574d80539716361e7a4",
"main.dart.js": "232b21abc3ae697477ff63495c25354c",
"readme.md": "d41d8cd98f00b204e9800998ecf8427e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1ffc45bbf7acfdc9b22a742f7a59d93d",
".git/ORIG_HEAD": "737d46bee0f0798af62a9e7d1f8ec946",
".git/config": "eb35e5afbe2778cda994da33895e8c94",
".git/objects/68/0265258be9a9e858d5b6c0d8197eb1904519d8": "c89d88384c6b62a8c201a0f5bcb69845",
".git/objects/6f/2d4bb19008d0f07612730e4961dcc6e2bda11d": "8aab1522b50b16e15a4e6b8452566875",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/2f496f6980cc78b948960a8236a1ae1b73b66c": "f5e3c3e1e0689b3ea0c7a62b9fd57e4b",
".git/objects/5f/b5d9ccea3760524cc07643d8767b29e58d011f": "acf34f5e860d6b23eae5aeae1162c208",
".git/objects/d1/8107ca09788974fd28301b1ce0744d0ac7996a": "3f87e89b8911ee6a21a9bd0a183f9dc8",
".git/objects/bc/271ec0f25ec933fd74bb0bc6360629c2ef1429": "a524edce54642291c3913b49fe5d6d81",
".git/objects/ae/49dfa683465f2c1ec3c91a47203bd56da6301c": "2d43c91483dad589998b8611a366f4ff",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fc/522dafac5bb3e38671b4cd0c1a5d3309a5c98f": "34d86bb60b1b43afb2aad913abd96c5d",
".git/objects/ca/caf5958cebb634c1e41ccbe147405a89840c9e": "6e8444a1187f4711c29aabdc06311b78",
".git/objects/4b/0a944d0f0e7d3838576982f9f76406dc16e00f": "d6e0ec9c3a4883036a047d6e4fe2de63",
".git/objects/pack/pack-37ade62eb54d34ea45bdc5a46287ca039ab223bc.pack": "552a1e792b00e7ae9cf133d4b5d07d61",
".git/objects/pack/pack-37ade62eb54d34ea45bdc5a46287ca039ab223bc.idx": "0dc541c61f119330e4507b1f628079a8",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/1a/f6012923d04f6388ed07263bef420e119ecde4": "47cd4d7edbc1584759b3324ee625d3ca",
".git/objects/9a/141df8f674a40dbfdff82bc2e5036836abe8b3": "63faea65c5dfba0ad60ce22b2813d5b2",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/98/fceac32a2892179f32ed7c9c3d90cfb84b73bd": "64a67f60209575db3af40524bb6390e2",
".git/objects/3f/07d1d06b98626800e324eba1e1b6bbb93ce3b9": "45275dcb7400e9e21b14dffa0f0fdf10",
".git/objects/6d/1ee2846d109f2944da24735f13b88372559835": "a8a81988be58bfe124a2465b52667deb",
".git/objects/01/610d9c811fe19968128abfa482772bbb6ad641": "adf18eefe200e53c39253ce3da1c0065",
".git/objects/0a/31a7611a2e5a4a5b4bb019840952e3e458f0d2": "185fa5ab301478646aad1e494e6086c1",
".git/objects/b8/f3d903e64501713d59c791b4e6137b061fb2df": "3e89f64724ee3cd1a526818485a8742a",
".git/objects/af/fcfbd877b618b79148e6670301743727850b87": "9de305d55c0eca4a6edf2bc15250c0ad",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/71/6357442be7b8b1ab6ef13961134875e8302bec": "c6ca2059d111995609733f1652deb3dd",
".git/objects/71/6800e229824bca202aee20e2315a538527eb3a": "264370f9458abeedd3ed290d078c4702",
".git/objects/2b/80f5674bd286565b4c59777808b2dc5e29a7cf": "8323f25c405f29a488aa4d2b9f6c7ee6",
".git/objects/25/1cf3655584f9eb6c94b83d2e9737b0fede13a1": "32286a66c709cc85db4870a720a1999b",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f5d93657c7d6210bcd6bc2d9981a8afa",
".git/logs/refs/heads/gh-pages": "e5ea6a4a3c860025c05bfa8068a1e29c",
".git/logs/refs/remotes/origin/gh-pages": "72c18371a41cb9aa6067bd56b6b60752",
".git/logs/refs/remotes/origin/main": "4cacb77ce881d4d9796ea91e5e5802c3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "57e8ab64354b9963f04447a567a36fdb",
".git/refs/remotes/origin/gh-pages": "57e8ab64354b9963f04447a567a36fdb",
".git/refs/remotes/origin/main": "1fb3b8f7bc52e756cd07a6cf8363e632",
".git/index": "117f1aafc18e21f4a3ac6d88f256c7a3",
".git/COMMIT_EDITMSG": "f64305a1eaa06db4124358725c22fd64",
".git/FETCH_HEAD": "f35ee4a9d6c654e6d998922c0a7cd6cb",
"assets/images/manjericao1.png": "e74b9e3c3f588db74f350cc520055c63",
"assets/images/manjericao3.png": "d76ae8106a4440894d68f2582806a8e8",
"assets/images/pizza.png": "af72670244d4b02e994e480d67221dff",
"assets/AssetManifest.json": "44eaf2054c86705434e5969ac5d40d5c",
"assets/NOTICES": "6f03b166c6167db38ee26ea63ba9cd64",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
