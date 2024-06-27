'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1370b905d8da9504d04f2e7e9a54c249",
"index.html": "e9d3a572841abea7a81866bd5bf1e03c",
"/": "e9d3a572841abea7a81866bd5bf1e03c",
"main.dart.js": "1696490a27133c43c38a4b8897335ad9",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e58bbb5f56490af84ee334a809aebe03",
"assets/AssetManifest.json": "df3cfa85d8f9e9e3b09f17a3e1d9122b",
"assets/NOTICES": "9b434d683c3c538573b30d9747d5d864",
"assets/FontManifest.json": "a9f1794ddacb90790f2717d17e4e1157",
"assets/AssetManifest.bin.json": "4075b9a646bde112e5e204b2727d0670",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "26a9a6d4512da2a834fc929d20577152",
"assets/fonts/MaterialIcons-Regular.otf": "ae83dfa7e3b43449c0207feb9790bc20",
"assets/assets/logo_bank/muamalat.png": "3852edb6fc1da57c108c011eb4d44c01",
"assets/assets/logo_bank/permata.png": "d544382bb7caf548dbad25d8acd0ef8e",
"assets/assets/logo_bank/bca.png": "54017c95ecb0b36e0f97693389a79bac",
"assets/assets/logo_bank/mandiri_syariah.png": "a81206304323f316aebcaaa99f7f834d",
"assets/assets/logo_bank/sinarmas.png": "7b6aea90b2ba783d800db55aca665b2c",
"assets/assets/logo_bank/mega.png": "a4307e7ae5e5a77cf3cc2465893d5961",
"assets/assets/logo_bank/btn.png": "31fb0a52b6e9989fda941d9ea31e24bd",
"assets/assets/logo_bank/bri.png": "540e0fd651fd3826ab975909582afaa3",
"assets/assets/logo_bank/danamon.png": "e8ea37f46161b4e3ca7351f77222c825",
"assets/assets/logo_bank/btpn.png": "fa718aaab813b0f71200bed37bfe1a83",
"assets/assets/logo_bank/mandiri.png": "ebcab95bea32485e570a04526883d71b",
"assets/assets/logo_bank/bcai_syariah.png": "3df3273cf79d853bbde93eeb4cc90788",
"assets/assets/logo_bank/ocbc.png": "18f114b34c32f407f1a95cec45b4d567",
"assets/assets/logo_bank/cimb.png": "9060ba88402966294b467146449f9ad6",
"assets/assets/logo_bank/panin.png": "427a1f261496cb741ef9bb0ace3f30b4",
"assets/assets/logo_bank/maybank.png": "e489439ffa75010000db5e255b9690d1",
"assets/assets/logo_bank/bni_syariah.png": "e2a812fe9ff71807bf9846f871a1a84f",
"assets/assets/logo_bank/bri_syaria.png": "a2758293bdcd99403ee4c60c2bf3fd61",
"assets/assets/logo_bank/bukopin.png": "ee4ce283df48bd2e47c3936e633933ac",
"assets/assets/logo_bank/bni.png": "d4c88d75568298ca3b309cbd95191199",
"assets/assets/images/defaultPhoto.png": "82bdc7ea45e38e64c5e21b580a6edf82",
"assets/assets/images/forgot_password.png": "d95bd9093742aee6a9f43af7705772f2",
"assets/assets/images/background_dashboard.png": "421679ca05c56ea2f389771b0670d1f9",
"assets/assets/images/empty_street.png": "f484a09bb2d5a917d080e637fc1dcabc",
"assets/assets/images/delivery_sent.png": "ca76926d91d2529f82a2f0a7b315ad87",
"assets/assets/images/background_onboarding.png": "a0281338a8b5ff4f61941ff538604417",
"assets/assets/images/order_received.png": "c2bec88753a5fd887c71ed2beeb1b4dd",
"assets/assets/images/cancel.png": "0ccecdd4f713e8241e4146ef43ba0b4e",
"assets/assets/images/background_details.png": "6d1e3f4f589ce149f8bc53b13f6aca64",
"assets/assets/images/bg_list_item.png": "5b1dc97184fcfcb5cac1dbd799ae6104",
"assets/assets/images/done.png": "6e61d6fa62e7e8dcf4dd7ea548f6460b",
"assets/assets/images/confirmed.png": "dea32ed29c96fef7696b607f511685a9",
"assets/assets/images/delete.png": "abc7dace26e6c3ec950a6ed9874711ef",
"assets/assets/images/select.png": "a602406821a2d13a83021b87cf287b67",
"assets/assets/images/waktoo_ecommorce.png": "080b786718cf4f70a210c34bf209a4a1",
"assets/assets/images/or.png": "121be025d3775211d42ff8972ebfa51b",
"assets/assets/images/internal_server_error.png": "1936380bbc8fb140ff7c0985af244537",
"assets/assets/images/multi_device.png": "d21d0429dadfbe4fa48c7ac4193553ec",
"assets/assets/images/validation_payment.png": "a8b914b7508cb728d0d672544a9d69e8",
"assets/assets/images/background_splashscreen.png": "75328de60cf91e5917bfef9a72258288",
"assets/assets/builder_assets/cart.png": "e67f3187ef973134ba63f132363ff71a",
"assets/assets/builder_assets/success_order.png": "6e811b3970eac75afb89c2c9c586cc61",
"assets/assets/builder_assets/fb.png": "09cd14e295a9ff921f26005f631ae9a8",
"assets/assets/builder_assets/waiting_order.png": "b028522c9098845f15d7dcfc299e3d77",
"assets/assets/builder_assets/home.png": "03c26d394874a7eb7f8f85d41ff45468",
"assets/assets/builder_assets/person.png": "a646e57fe74632593946995c5676edf6",
"assets/assets/builder_assets/delivery_order.png": "5c2e5c35066cd37eeb22779f5889e9d6",
"assets/assets/builder_assets/proses_order.png": "6378a074e4ae81913d13e852b8ad7996",
"assets/assets/builder_assets/notif.png": "6de4767533eda6bd392499f3200475ef",
"assets/assets/builder_assets/like.png": "4a00bfd961af700ff86cf76240e06ade",
"assets/assets/builder_assets/search.png": "3e242f7045a210264f0ceba7df6155df",
"assets/assets/builder_assets/ig.png": "d5cfe81d8bcea885766d0a945dafbea7",
"assets/assets/builder_assets/heart.png": "7fc904254daa718f3f5afe37498705ff",
"assets/assets/builder_assets/tiktok.png": "c05f520cae2f28ea37a99e546c22eec7",
"assets/assets/builder_assets/filter.png": "69aff59b993f1a7cc95691e365c8feb8",
"assets/assets/builder_assets/twitter.png": "4461fadf168ae4f921641deee6f27e78",
"assets/assets/builder_assets/settings_sliders.png": "176aa7eaa7d2f955fccbfaa230ec331a",
"assets/assets/builder_assets/setting.png": "d8a1feadc1a95b401dd32429051fd700",
"assets/assets/logos/waktoo_commerce_logo.png": "42e4267514355f80e1ebc109508e1d3e",
"assets/assets/logos/logoWaktoo.png": "4c6f31be272e70139e8d8b602eaeb145",
"assets/assets/logos/logo_waktoo.png": "ec08a465779d2596f73971a0d618da89",
"assets/assets/logo.png": "690f55e5cd00553f3289d859dc486180",
"assets/assets/icons/email.png": "3ad5cc46a9ac03e1ae11d46b8c75c98d",
"assets/assets/icons/document.png": "f921574ace4d66b55e39319751e8afd7",
"assets/assets/icons/category.png": "6250a8264440df28f8502b85310aed83",
"assets/assets/icons/shipping.png": "dbc01721dc9556ecbaf0581e3acae6be",
"assets/assets/icons/tickets.png": "42a1e4defc6a600e784b9cc9f2bd33fd",
"assets/assets/icons/shop.png": "10a610d8981e2e0b80fd19123a1c3585",
"assets/assets/icons/apple.png": "b449a795561361c23f74909c8bd572b6",
"assets/assets/icons/contats.png": "b37163b9355276dceea7de4f27d9e0f5",
"assets/assets/icons/products.png": "f2d86527ea6c9b5b5fc6911effce5d08",
"assets/assets/icons/invoices.png": "dd26b8bc391084f1e26a886abf01db5f",
"assets/assets/icons/more.png": "f2f9fe2d5f4263537fdb60e2f4495125",
"assets/assets/icons/whatsapp.png": "2bf5f8eb5856ea56c9b6daa0c18804a6",
"assets/assets/icons/google.png": "422e85a04418e322bd46a7bf99249323",
"assets/assets/icons/contracts.png": "8ac8511a43df4310c2682c40d28fc0e8",
"assets/assets/icons/orders.png": "6a59f2fb421a9ddbb9b43d333194c189",
"assets/assets/lottie/downloads.json": "4e3c9a271c6d24f40da52f082b01aa2b",
"assets/assets/fonts/proxima_nova_light.ttf": "1f9b474fa4456216df9d6065dfa1df8f",
"assets/assets/fonts/proxima_nova_regular.ttf": "90e60fb9be7c5698d332c19aec7dd361",
"assets/assets/fonts/proxima_nova_semibold.ttf": "11339c2083ba497d59fa068d025ebbce",
"assets/assets/onboarding/onboarding_1.png": "6546f6452cf06feeb16529a0198c5e5b",
"assets/assets/onboarding/onboarding_2.png": "14762a7c57bc0f58d6cfcf0d90d479bb",
"assets/assets/onboarding/on_boarding_3.png": "86f92afcfe4d01aacdda64b6b16db510",
"assets/assets/onboarding/on_boarding_4.png": "2f50d8e07caf3fe3da37540e50a01812",
"assets/assets/onboarding/on_boarding_5.png": "8ab72ea11bb69f5be545cabd07868eb5",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
