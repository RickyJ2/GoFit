'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5a4a29424b689090b877ea6428bb645d",
".git/config": "7fe07ab4a0bf1f7f38ba499c56c42bb8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f41b16c7e62b311443b82bdc009d1c84",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4975c2ba6158c31a4a43ae19866dc921",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ab391ca28a2d0b8ed5ec94cd08535591",
".git/logs/refs/heads/main": "ab391ca28a2d0b8ed5ec94cd08535591",
".git/logs/refs/remotes/gofit/main": "ec8d5bee2947f8fd0ef12507aaffdcde",
".git/objects/01/12e7da626ca2f959eca850c806779ba55dbfbd": "c094fa0b00e6ea2120d2a30cd1da087e",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/6b86124ddeca13a301a6deb1353c5e43d4a859": "04789850ee61fcb334fd2b65f0d2904b",
".git/objects/08/4f9c0f5365952d4d860431a1c2dca147e4a9b5": "dab2b7ce77b85dd7850aef2e03638cf6",
".git/objects/09/4f71cb6c49685a2b5ed486a3223fe05c301a76": "3ce162929009c75fe3d7ed9cf06ef3f5",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/bffbae6eefd0aee6058e0416ce805318762a6d": "c48024a21e8fb785fee2be582a42e9ea",
".git/objects/10/bce2a518ccd12e8c94b44b73201de751a89791": "d235f0a4fd939ae2acb870f9fe435334",
".git/objects/11/d387315712a3a0da7b0438c8d47ab52ab5dbf7": "a4f4301dc73da29a953dd86c11c7effa",
".git/objects/15/4c7e56fffda5efddfb14e989a8672bcbfbd3ac": "085762bdd05f2c60e62929b0ba67072f",
".git/objects/1a/042ef9d8475c8d1a6946e952435ae16ea8a3eb": "a5b231961b8049a11a90aa38537c355c",
".git/objects/1b/5eaa361c7306b4246c48497c79475c0e05c5e2": "797c30b38f4b43082bf674ed21553c74",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/27/1a1c4413fd7736c1790918c5c6b55345d34c7c": "efa8169db27365c9777eaed4261263e1",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/2d/277afb231f7613a49d983217c1aba871741433": "9047448a3d09251b8161710e65810e36",
".git/objects/2e/0dee6a833c4b568d44ac99727f7e0c17c6eb67": "c7ad2d2981af735bdf2421a44b61acb1",
".git/objects/35/5ac1277aa8aec839a7af070738cfe735e910a6": "38aa74fc3fc02b0905a3ca66c6c5cf53",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/04a7bbf8bace85c378e66b6412e57ea45e5191": "2c3e8cd85500974a7a5d2902d1662ca6",
".git/objects/3c/492eacaa2e4433fa382506defb7ae89112b909": "33710ad0a09013c3c08a6b151aeab54d",
".git/objects/3c/5c0cf4d9283f4c10466aea5a97b55103ab8974": "c8634216479e139cf38da0f77f2299b8",
".git/objects/3f/3183ab76424d6d8f3b3c20c9cf023475d48e6c": "5fc1b935334214f0a0f31c7b4cb308be",
".git/objects/40/a8dbd0abedc45aebeca82395b0be8e7f296af6": "3f822b0e647569b4c2814a89887077ab",
".git/objects/41/1123c405e22faa2a07fd5968c569dd2b5db1e7": "b49242b2dc1bb5fd057d95e9b4d87a3a",
".git/objects/43/da14d84ecb949ca5f5e8ecca3a514aa7fe1c7d": "d970b955bbe605c4f81533fde279992d",
".git/objects/48/3b29bdbc4904f04acff3019e1769c71ae06eb9": "7d0cb7dc4fee7e7e7b0d9339906d20ac",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/69/d539323882a0d2a04cbad37ddda3907159369a": "ca89fcffe621b2cce86a0a256543b593",
".git/objects/6f/7869363fd7d72196aa798f24f0a7ed13118d1d": "dd8f0f12b81c6f27c9453d6d45979e00",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/35d7ac00c931d282e4f9cf697e7a9bbe21f873": "5c64638051d537290535502f8337af0b",
".git/objects/73/b4a682f8e0d51f01dfddc14c4939cd30008056": "76a711adf7fafab844f35c0cafabfff9",
".git/objects/75/35bb4c7e2c9aab16d6bf8227b84171b1bc92e6": "22335706f8207f211188a36c1d31209d",
".git/objects/79/82c973efa1c8ce03b17d77c848a177117b268f": "589d5926c4ef5d3dc69b16ee3070d74c",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/a3/395fa3b94d34227f94886317c6c910c18a0f84": "553d12e2a15f6e79850b1e09fbffa97c",
".git/objects/ac/0f908b9c9c73da558b45d65cc5c6094874d3e8": "36f70284c45d845ee774c46e7288afe5",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/c6aca57bc0d92ab3197d595766bf9285deea00": "a9be37e0f080009d8095a09eb2a7a1c8",
".git/objects/b8/f515c0660bdd3d62012c6883087169a6368f18": "cc43bc6fc0f604a3753dc2c805fa9144",
".git/objects/bb/0144ecd2a0ee57bb14bdd25216caeec2309f8c": "d954edc32d6f6f8923f9cf04e3555cd6",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/fdab4311f2201f45b341b36310e1cdb8051e34": "0b0600863ba421ab0448fd6eb8546d41",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/4183d3d13e1ba715fb6cf4c537184087c9db68": "0fa9bd25f857588c272c39d0acf52566",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/e7/307e72c5e7bced5d36c776d0986bf71b605f15": "e493f8bfd12abe75c70dc4782e5beae0",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/f8/3250b3a9e90c114b910b3deae6a981b84b3680": "e331b51c3e0b93ee26801b21a5e7a6e9",
".git/objects/fc/36a4785c50c04c9b18260e4709cda077ed352d": "ab0d50fcc4cfcaba8a0f3772db0b5fed",
".git/ORIG_HEAD": "a2b56cdc80a26adebec33e9b35388aee",
".git/refs/heads/main": "a2b56cdc80a26adebec33e9b35388aee",
".git/refs/remotes/gofit/main": "a2b56cdc80a26adebec33e9b35388aee",
"assets/AssetManifest.json": "53a6fd0e21c56de11c27091320a32db4",
"assets/AssetManifest.smcbin": "4ac50a37cf2b9813e555742f1b4b6955",
"assets/assets/fonts/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/fonts/SchibstedGrotesk-Italic-VariableFont_wght.ttf": "24ed568684f85f5da283e56a3261516b",
"assets/assets/fonts/SchibstedGrotesk-VariableFont_wght.ttf": "33b0b48b18ec4b100fd1e4c13fa51310",
"assets/assets/images/interior_gym.jpg": "0f7d3cfd7e51d039843b7b46620f6a22",
"assets/FontManifest.json": "cfc08233d97576ff54f4d8f737d82e4a",
"assets/fonts/MaterialIcons-Regular.otf": "63e39b089b00d9f7f6ebdd3db5d2c581",
"assets/NOTICES": "ecca7a0fa2bd6f5a5f3b99da7fa47947",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "52f2fe7028ee9c064c68c7ff46fe7216",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-chrome-192x192.png": "02bfad99ac7d9d58c23229c3180e9bce",
"icons/android-chrome-512x512.png": "acb395a524b15e79e9e130792a880391",
"icons/apple-touch-icon.png": "139738dcbcf64f76928446c21e338f3c",
"index.html": "06ef4de4c4cb73b65b76d588329aea9a",
"/": "06ef4de4c4cb73b65b76d588329aea9a",
"main.dart.js": "6d2012bc197f666b7dd52003d4d35b15",
"manifest.json": "31481df200446147d3ee32357a5eefc3",
"version.json": "b9c3a8b0d84f611677c94408faa1ebbe"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
