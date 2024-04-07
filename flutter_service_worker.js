'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/assets/images/tea.webp": "6bbb67374fe6769190bbd87ac72d7aa9",
"assets/assets/images/sp_falooda.webp": "66c624049574a6a756f91266153a0de3",
"assets/assets/images/boost.webp": "f2afe40d4c14945a9406ca8d4803b298",
"assets/assets/images/horlicks.webp": "76ea3a183331852e69622877211e8530",
"assets/assets/images/3cafe_main_image.webp": "d992c242c52001571b2a91e5ea03d88a",
"assets/assets/images/avil_milk.webp": "87dab9527fda104e328c7f5307fea068",
"assets/assets/images/milk_shake.webp": "89ca978091a06c580ff6e61c2fbcba7d",
"assets/assets/images/fried2.webp": "a2b31b8b079948047d04e12d5f1e8b04",
"assets/assets/images/1cafe_main_image.webp": "a4786bca78fe2e41b77209688e6d048f",
"assets/assets/images/royal_falooda.webp": "fd1acd640efe5d01c392985a718f1684",
"assets/assets/images/mojito.webp": "5e21ee545771e9de26ee741ddb3a2df7",
"assets/assets/images/flavoured_fruit_salad.webp": "175bb992d5fa216e95cd17255e87891a",
"assets/assets/images/addcontactlogo.webp": "7ccf256df864fe03962530d985089483",
"assets/assets/images/19cafe_main_image.webp": "ccb77ce8dfaae82775165212e73df574",
"assets/assets/images/salad2.webp": "c22aa440fee9d71f373e6648b1af4383",
"assets/assets/images/scoop.webp": "84e2b64c3b3f41bc556866dc5723c2c9",
"assets/assets/images/fruit_cut.webp": "e18087d0bb743012edd223fd50382dd4",
"assets/assets/images/juice.webp": "d74883370c83f86997d31a0db43ac475",
"assets/assets/images/soda2.webp": "52c7886c4b8d1ac507fe7e5435e6f391",
"assets/assets/images/9cafe_main_image.webp": "066ec0acafffca6b2e85be3deee0ab01",
"assets/assets/images/4cafe_main_image.webp": "b5048ec84862e74b017d7dece393e711",
"assets/assets/images/sandwich.webp": "0ad24f2089bd4960c39a7f0baa618293",
"assets/assets/images/fruit_salad.webp": "26beeb4138a87c5460c01e4ed91459d5",
"assets/assets/images/flavoured_falooda.webp": "219053443857cfbc257a21d13d83158f",
"assets/assets/images/fried.webp": "a5e2bbd7d9f51d64292b402576df88be",
"assets/assets/images/coffee.webp": "1233fb5fba3ce47099ed9b7010c4e286",
"assets/assets/images/club_sandwich.webp": "d65be18e88f4ea32c2904b41ad44b747",
"assets/assets/images/chicken_neggutsqq.webp": "688394166cdf873e78e5a5e4e389144d",
"assets/assets/images/25cafe_main_image.webp": "b8540358ecc6fa876a57c2e59e898986",
"assets/assets/images/burger2.webp": "60c541b7d3b7488e04c5e5faa6aa0a4c",
"assets/assets/images/2cafe_main_image.webp": "e54bef05a7a44103fdf3e4a723b140ba",
"assets/assets/images/stick.webp": "0ee60cc600bf5a82bb680bd159b7576b",
"assets/assets/images/6cafe_main_image.webp": "d24e50f09d0b21a778059caa467c9963",
"assets/assets/images/lime.webp": "4f1f8c49e84f5f2c6a86bd7f479595f3",
"assets/assets/images/horlicks2.webp": "be27ee991a03a75540ca1a0868e7d558",
"assets/assets/images/fries_shawarma_image.webp": "6e6e4e096d38472a5da6f3feaa942ac5",
"assets/assets/images/popcorn.webp": "523ec830c57487f92cfdc8be99202b79",
"assets/assets/images/normal_falooda.webp": "1ba4dbce0374c7ccdd7d375b279fff65",
"assets/assets/images/falooda2.webp": "a49eb29e237fc498788c3d62a7a2b38f",
"assets/assets/images/black_tea.webp": "35d497266dd111414162384b045d2d5f",
"assets/assets/images/burger.webp": "42c299d01cc7c3edb192ba82483b6ab9",
"assets/assets/images/7cafe_main_image.webp": "fa15e565f3d28f89d39cb632f8c1e448",
"assets/assets/images/8cafe_main_image.webp": "e55a4445236648ed25c8ac9c60237eaf",
"assets/assets/images/42cafe_main_image.webp": "3008f3f8253c0985db9d4197c459a045",
"assets/assets/images/dryfruit_falooda.webp": "5c70b188ca7a46eebf4e54d46fba4a02",
"assets/assets/images/Shawarma_shawaya_logo_dimmed.webp": "5cdc95fe77ab98ac018697d0bb6ee2a0",
"assets/assets/images/hot_badam.webp": "9313318740efba86102b310148bc8d62",
"assets/assets/images/soda.webp": "1346e053dee3c495a92640cf29ac2852",
"assets/assets/images/nuts_falooda.webp": "b144e0cc3b0852ad85a0a58a283abcff",
"assets/assets/images/10cafe_main_image.webp": "a3c3d12b558e15b25755a7e029a4cfaf",
"assets/assets/images/5cafe_main_image.webp": "10de17d8772bf28c28e5b2215a49d025",
"assets/AssetManifest.bin": "97cbb65898fc0b2ada729a3fea7156b5",
"assets/AssetManifest.json": "de2e49cf5807eb708a70dfc507bd264f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "667422501785cfe65bb51ab3687e6b45",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "8539aef9e49060c3744b203446dbdcd2",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"index.html": "3abf8e5e4f0d09a714f3c1684f895e47",
"/": "3abf8e5e4f0d09a714f3c1684f895e47",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js": "7bb861db5d90210e95a95353425e7a99",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"manifest.json": "746fadccd28ffa955824d80d70aeddca",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "c56741140bbe2b4d3843290042925983"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
