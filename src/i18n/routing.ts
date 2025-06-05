import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'zh', 'ja'],

  // Used when no locale matches
  defaultLocale: 'en',
  
  // The prefix for all routes
  pathnames: {
    '/': '/',
    '/restaurants': {
      en: '/restaurants',
      zh: '/restaurants',
      ja: '/restaurants'
    },
    '/itineraries': {
      en: '/itineraries', 
      zh: '/itineraries',
      ja: '/itineraries'
    },
    '/itineraries/taipei-shopping-food': {
      en: '/itineraries/taipei-shopping-food',
      zh: '/itineraries/taipei-shopping-food',
      ja: '/itineraries/taipei-shopping-food'
    },
    '/community': {
      en: '/community',
      zh: '/community', 
      ja: '/community'
    }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);