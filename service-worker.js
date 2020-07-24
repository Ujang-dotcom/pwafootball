importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

    workbox.precaching.precacheAndRoute([
    {
        url: '/',
        revision: '1'
    },
    {
        url: '/pwafootball/manifest.json',
        revision: '1'
    },
    
    {
        url: '/pwafootball/index.html',
        revision: '1'
    },
    {
        url: '/pwafootball/nav.html',
        revision: '1'
    },
    {
        url: '/pwafootball/pages/detail-pages/detailtim.html',
        revision: '1'
    },
    {
        url: '/pwafootball/pages/detail-pages/detailplayer.html',
        revision: '1'
    },
    {
        url: '/pwafootball/pages/competition.html',
        revision: '1'
    },
    {
        url: '/pwafootballpages/home.html',
        revision: '1'
    },
    {
        url: '/pwafootball/pages/league.html',
        revision: '1'
    },
    {
        url: '/pwafootball/pages/match.html',
        revision: '1'
    },
    {
        url: '/pwafootball/pages/myfavorite.html',
        revision: '1'
    },
    {
        url: '/pwafootball/css/materialize.min.css',
        revision: '1'
    },
    {
        url: '/pwafootball/css/style.css',
        revision: '1'
    },
    {
        url: '/pwafootball/js/api.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/competition.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/database.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/db.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/favoriteData.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/favPlayer.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/favTeam.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/idb.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/match.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/materialize.min.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/myScript.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/nav.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/notification.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/preloader.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/resultData.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/serviceWorker.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/standing.js',
        revision: '1'
    },
    {
        url: '/pwafootball/js/topScore.js',
        revision: '1'
    },
    {
        url: '/pwafootball/img/slider/1.jpg',
        revision: '1'
    },
    {
        url: '/pwafootball/img/slider/2.jpg',
        revision: '1'
    },
    {
        url: '/pwafootball/img/slider/3.jpg',
        revision: '1'
    },
    {
        url: '/pwafootball/img/icon-72x72.png',
        revision: '1'
    },
    {
        url: '/pwafootball/img/icon-96x96.png',
        revision: '1'
    },
    {
        url: '/pwafootball/img/icon-128x128.png',
        revision: '1'
    },
    {
        url: '/pwafootball/img/icon-144x144.png',
        revision: '1'
    },
    {
        url: '/pwafootball/img/icon-152x152.png',
        revision: '1'
    },
    {
        url: '/pwafootball/img/icon-192x192.png',
        revision: '1'
    },
    {
        url: '/pwafootball/img/icon-384x384.png',
        revision: '1'
    },
    {
        url: '/pwafootball/img/icon-512x512.png',
        revision: '1'
    },
    {
        url: '/pwafootball/img/icon.png',
        revision: '1'
    },
    {
        url: '/pwafootball/img/icon-white.png',
        revision: '1'
    },
    {
        url: '/pwafootball/img/pl-white.png',
        revision: '1'
    },
    {
        url: '/pwafootball/img/pl.png',
        revision: '1'
    },
    {
        url: '/pwafootball/img/premiere-league.jpg',
        revision: '1'
    },
],  {
        // Ignore all URL parameters.
        ignoreURLParametersMatching: [/.*/]
});


// Menyimpan cache dari CSS Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    })
);



// Menyimpan cache dari jquery
workbox.routing.registerRoute(
    /^https:\/\/code\.jquery\.com\/jquery-3\.3\.1\.m\.js/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'jquery-cache',
    })
);

// Menyimpan cache dari ajax
workbox.routing.registerRoute(
    /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/popper\.js\/1\.14\.6\/umd\/popper\.min\.js/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'ajax-cache',
    })
);

// Menyimpan cache dari snarkdown
workbox.routing.registerRoute(
   /^https:\/\/unpkg\.com\/snarkdown@1\.0\.2\/dist\/snarkdown\.umd\.js/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'snarkdown-cache',
    })
);

// Menyimpan cache dari materialize
workbox.routing.registerRoute(
   /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/materialize\/1\.0\.0-beta\/js\/materialize\.min\.js/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'materialize-cache',
    })
);

// Menyimpan cache untuk file font selama 1 tahun
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    workbox.strategies.cacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    new RegExp("/pwafootball/pages/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "pages"
    })
);

workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/v2/'),
    workbox.strategies.staleWhileRevalidate()
)


workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
            }),
        ],
    }),
);

workbox.routing.registerRoute(
    new RegExp('.*\.css'),
    workbox.strategies.cacheFirst()
);


workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.cacheFirst()
);


workbox.routing.registerRoute(
    new RegExp('.*\.png'),
    workbox.strategies.cacheFirst()
);

self.addEventListener('push', function(event) {
  let body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  let options = {
    body: body,
    icon: 'img/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
