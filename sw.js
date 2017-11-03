"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/assets/favicon.ico","665fdae43ffa4aec72007c8283afb2e1"],["/assets/fonts/orbitron-bold-webfont.woff","c4df658eeece93f241bb6a82ff4fdabe"],["/assets/fonts/orbitron-bold-webfont.woff2","dd7fecfc2e1310836028ec21cb968972"],["/assets/fonts/sourcesanspro-regular-webfont.woff","e61a6ddf1bd2b7f165568e240c05848b"],["/assets/fonts/sourcesanspro-regular-webfont.woff2","4379dffd63e71c5dfac4e2ba8c07231e"],["/assets/fonts/teko-regular-webfont.woff","8b803dff187e6e92ffe761f8b45ad826"],["/assets/fonts/teko-regular-webfont.woff2","e49074a5570f6775ab49a600cb874bdf"],["/assets/icons/android-chrome-192x192.png","82eb420cbca3bb61064cb1e1749ad0b8"],["/assets/icons/android-chrome-256x256.png","2e56d5587840b63c8f784889292a22f7"],["/assets/icons/apple-touch-icon.png","66437a751ebf21db983c0f462d64273a"],["/assets/icons/browserconfig.xml","5078101b882c5e965b7089fd8a1c43fe"],["/assets/icons/favicon-16x16.png","aeb02f7b895203c06ab56019e0ffddfd"],["/assets/icons/favicon-32x32.png","076e42609918fe50e739e317fee00ed8"],["/assets/icons/favicon.ico","665fdae43ffa4aec72007c8283afb2e1"],["/assets/icons/manifest.json","6736c93ece17044559d030b34ab4efc9"],["/assets/icons/mstile-150x150.png","b4259ed8841033599a269dbf1b60610b"],["/assets/icons/safari-pinned-tab.svg","3c10ddea5a152fea6d8808dfd3d5b716"],["/assets/images/dapps-comp-1.png","1070a397ffac23cd5f8f3df79260763b"],["/assets/images/facebook.png","0256e180290b12f4538bf81e244b9e6e"],["/assets/images/github.png","56c430b711d429010dc92d0ce5aa52ad"],["/assets/images/internal-docs.jpg","9a9d8958b08a17f831b722d0c8b205dc"],["/assets/images/medium.png","2d95fb75ed0928f2b02d5760930629e1"],["/assets/images/more-to-come.jpg","60de21d2fd33c1351bbfd47add5a0844"],["/assets/images/neo-monitor.jpg","2d0e5973a96587b285814764b6e71f52"],["/assets/images/neo-portal.jpg","907292a384943ceb1089d1908786fa46"],["/assets/images/neo-scan.jpg","85204d5f16e5373404f3cbac2e38875d"],["/assets/images/neo-tracker.png","d3b3bee171a9985775ce6f535aa99afc"],["/assets/images/neon-wallet.jpg","586d514217f9e246072d14a90efeb7af"],["/assets/images/page-bg.jpg","55179b1d8b3eeec31045d666d1d6424b"],["/assets/images/reddit.png","d57c13fb88a5490eb45aa145f515d77c"],["/assets/images/resources.svg","b94c7ad5e0d4a9d4c25680dd1e6a3f39"],["/assets/images/slack.png","fe169331908d818055dbc79fe8b3f2de"],["/assets/images/twitter.png","85e9e42c9e5eebe93d5b5e206506f1eb"],["/assets/root/CNAME","4919f94944670c2e5e01461f3b956d00"],["/assets/root/LICENSE","edc773b1ab609065fb22ebc28c061ae3"],["/assets/root/README.md","69296b917dfa46d733b9c7d9bcc9abbc"],["/assets/root/dapps/1.html","0751abaa0e060c39a7d643b391386931"],["/assets/root/dapps/css/competition-styles.css","4e0d515ee1ca2d45b7ba2117c690037e"],["/assets/root/dapps/images/Background-texture.jpg","8e9448c9b3a9154068cb66adc874575a"],["/assets/root/dapps/images/Coz-logo.svg","86c4d9a42728c31d4b9ffe041a0d41d1"],["/assets/root/dapps/images/ICON_Calendar.svg","d835da3aec630efab4ca66f32b67724e"],["/assets/root/dapps/images/ICON_Downarrow.svg","baa13a4d5a38e18cc7d5ddba46cd4e15"],["/assets/root/dapps/images/ICON_Individual_Checked.svg","f233036e2b35b47601f7bffdb20b1c98"],["/assets/root/dapps/images/ICON_Individual_Unchecked.svg","8ec2b4ff0522a2b3aba976b4e9c21100"],["/assets/root/dapps/images/ICON_Team_Checked.svg","6ddc080c63bc194a6abe5265b2719e7b"],["/assets/root/dapps/images/ICON_Team_Unchecked.svg","1c145ef4e7d4e6bc32ec52c7d7f14763"],["/assets/root/dapps/images/ICON_Winner.svg","b6765e27a754722de95cab06b52334a4"],["/assets/root/dapps/images/Prize-noise.png","8c2136680bd9b29e503567158271bbea"],["/assets/root/dapps/images/Smaller-ribbon.png","6d632d968c7ff2cec0c56b543a09743b"],["/assets/root/dapps/images/stats-background-image-mobile.png","9ce8d43717512f6b8eb97e36b43b4bd3"],["/assets/root/dapps/images/stats-background-image.png","183f2b91a13f018b6aa61352d6cb6de6"],["/bundle.b4e0b.js","353955d04b4034cd4d0329742868104b"],["/favicon.ico","665fdae43ffa4aec72007c8283afb2e1"],["/index.html","a457919ea4bcda41886fd47af42edc48"],["/manifest.json","c7888cd56c60940ef753aee3866fdf70"],["/route-home.chunk.7d1fd.js","1390add49d139e210d9b994ad3d8bc78"],["/style.737b3.css","a4d5aae3c190a0431481105c43feeb2e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,s){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=s),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(s){return new Response(s,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,s,a,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(s)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,s){if(0===e.length)return!0;var a=new URL(s).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,s){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return s.every(function(s){return!s.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var s=e[0],a=e[1],t=new URL(s,self.location),n=createCacheKey(t,hashParamName,a,!1);return[t.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(s){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!s.has(a)){var t=new Request(a,{credentials:"same-origin"});return fetch(t).then(function(s){if(!s.ok)throw new Error("Request for "+a+" returned a response with status "+s.status);return cleanResponse(s).then(function(s){return e.put(a,s)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var s=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!s.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var s,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(s=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),s=urlsToCacheKeys.has(a));!s&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("index.html",self.location).toString(),s=urlsToCacheKeys.has(a)),s&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(s){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,s),fetch(e.request)}))}});