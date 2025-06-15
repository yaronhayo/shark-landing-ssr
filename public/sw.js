const CACHE_NAME = 'shark-duct-v2';
const STATIC_CACHE = 'shark-duct-static-v2';
const DYNAMIC_CACHE = 'shark-duct-dynamic-v2';
const IMAGE_CACHE = 'shark-duct-images-v2';

const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/images/logo-1.webp',
  '/images/favicon.webp',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&display=swap'
];

const CACHE_STRATEGIES = {
  // Cache first for static assets
  CACHE_FIRST: 'cache-first',
  // Network first for dynamic content
  NETWORK_FIRST: 'network-first',
  // Stale while revalidate for images
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)),
      caches.open(DYNAMIC_CACHE),
      caches.open(IMAGE_CACHE)
    ]).then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheName.includes('v2')) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Helper function to determine cache strategy
function getCacheStrategy(request) {
  const url = new URL(request.url);
  
  // Static assets - cache first
  if (url.pathname.match(/\.(js|css|woff2?|ttf)$/)) {
    return CACHE_STRATEGIES.CACHE_FIRST;
  }
  
  // Images - stale while revalidate
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
    return CACHE_STRATEGIES.STALE_WHILE_REVALIDATE;
  }
  
  // API calls and dynamic content - network first
  if (url.pathname.startsWith('/api') || url.search.includes('utm_')) {
    return CACHE_STRATEGIES.NETWORK_FIRST;
  }
  
  // Default to network first for HTML
  return CACHE_STRATEGIES.NETWORK_FIRST;
}

// Cache first strategy
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    throw error;
  }
}

// Network first strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.status === 200) {
      const cache = caches.open(cacheName);
      cache.then((c) => c.put(request, networkResponse.clone()));
    }
    return networkResponse;
  }).catch(() => cachedResponse);
  
  return cachedResponse || fetchPromise;
}

// Fetch event - intelligent caching
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other protocols
  if (!event.request.url.startsWith('http')) {
    return;
  }
  
  const strategy = getCacheStrategy(event.request);
  const url = new URL(event.request.url);
  
  let cacheName = DYNAMIC_CACHE;
  let handler;
  
  switch (strategy) {
    case CACHE_STRATEGIES.CACHE_FIRST:
      cacheName = STATIC_CACHE;
      handler = cacheFirst(event.request, cacheName);
      break;
      
    case CACHE_STRATEGIES.STALE_WHILE_REVALIDATE:
      cacheName = IMAGE_CACHE;
      handler = staleWhileRevalidate(event.request, cacheName);
      break;
      
    case CACHE_STRATEGIES.NETWORK_FIRST:
    default:
      handler = networkFirst(event.request, cacheName);
      break;
  }
  
  event.respondWith(
    handler.catch(() => {
      // Offline fallback
      if (event.request.destination === 'document') {
        return caches.match('/');
      }
      
      // Return a placeholder for images
      if (event.request.destination === 'image') {
        return new Response(
          '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af">Image unavailable</text></svg>',
          { headers: { 'Content-Type': 'image/svg+xml' } }
        );
      }
    })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'booking-form') {
    event.waitUntil(
      // Handle offline form submissions
      self.registration.sync.register('booking-form')
    );
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/images/logo-1.webp',
    badge: '/images/favicon.webp',
    vibrate: [200, 100, 200],
    data: data.data || {},
    actions: data.actions || []
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});
