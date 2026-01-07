// sw.js - Archivo necesario para que Chrome permita instalar la App
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Permite que la app funcione online/offline
});