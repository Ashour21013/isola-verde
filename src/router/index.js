import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    meta: {
      title: 'Isola Verda - Italienisches Restaurant',
      description: 'Willkommen bei Isola Verda. Authentische italienische Küche im Herzen der Stadt.',
    },
  },
  {
    path: '/speisekarte',
    name: 'Speisekarte',
    component: () => import('../pages/Speisekarte.vue'),
    meta: {
      title: 'Speisekarte - Isola Verda',
      description: 'Entdecken Sie unsere köstliche Speisekarte mit traditionellen italienischen Gerichten.',
    },
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: () => import('../pages/Kontakt.vue'),
    meta: {
      title: 'Kontakt & Anfahrt - Isola Verda',
      description: 'Kontaktieren Sie uns oder besuchen Sie uns. Öffnungszeiten, Adresse und Kontaktformular.',
    },
  },
  {
    path: '/galerie',
    name: 'Galerie',
    component: () => import('../pages/Galerie.vue'),
    meta: {
      title: 'Galerie - Isola Verda',
      description: 'Schauen Sie sich unsere schöne Galerie an. Bilder unseres Restaurants und unserer Gerichte.',
    },
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: () => import('../pages/Datenschutz.vue'),
    meta: {
      title: 'Datenschutzerklärung - Isola Verda',
      description: 'Lesen Sie unsere Datenschutzerklärung und erfahren Sie, wie wir Ihre Daten schützen.',
    },
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('../pages/Impressum.vue'),
    meta: {
      title: 'Impressum & AGB - Isola Verda',
      description: 'Rechtliche Informationen zu Isola Verda, Impressum und Allgemeine Geschäftsbedingungen.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue'),
    meta: {
      title: '404 - Seite nicht gefunden',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Update meta tags on route change
router.afterEach((to) => {
  document.title = to.meta.title || 'Isola Verda';
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || 'Isola Verda - Italienisches Restaurant');
  }

  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', to.meta.title || 'Isola Verda');
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', to.meta.description || 'Isola Verda - Italienisches Restaurant');
  }
});

export default router;
