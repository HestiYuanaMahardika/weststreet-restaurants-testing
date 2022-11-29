/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-extraneous-dependencies */
import { precacheAndRoute } from 'workbox-precaching';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', () => {
  console.log('Service Worker: Pushed');
});
