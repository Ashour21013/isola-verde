<template>
  <header
    class="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 shadow-sm transition-colors duration-300"
    role="banner"
  >
    <nav class="container-custom h-16 flex items-center justify-between" role="navigation" aria-label="Hauptnavigation">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg px-2 py-1"
        aria-label="Isola Verda - Startseite"
      >
        <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-sm">IV</span>
        </div>
        <span class="hidden sm:inline font-bold text-lg text-slate-900 dark:text-white">Isola Verda</span>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8" aria-label="Desktop Navigation">
        <NavLink to="/" label="Startseite" />
        <NavLink to="/speisekarte" label="Speisekarte" />
        <NavLink to="/galerie" label="Galerie" />
        <NavLink to="/kontakt" label="Kontakt" />
      </nav>

      <!-- Right Side Controls -->
      <div class="flex items-center gap-4">
        <!-- Dark Mode Toggle -->
        <button
          @click="toggleDarkMode"
          class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          :aria-label="isDark ? 'Zum hellen Modus wechseln' : 'Zum dunklen Modus wechseln'"
          :title="isDark ? 'Heller Modus' : 'Dunkler Modus'"
        >
          <svg v-if="isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 13.536l.707.707a1 1 0 001.414-1.414l-.707-.707zm0 2.828a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>

        <!-- Mobile Menu Button -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          :aria-label="isMenuOpen ? 'Menü schließen' : 'Menü öffnen'"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
      >
        <div class="container-custom py-4 space-y-2">
          <MobileNavLink to="/" label="Startseite" @click="isMenuOpen = false" />
          <MobileNavLink to="/speisekarte" label="Speisekarte" @click="isMenuOpen = false" />
          <MobileNavLink to="/galerie" label="Galerie" @click="isMenuOpen = false" />
          <MobileNavLink to="/kontakt" label="Kontakt" @click="isMenuOpen = false" />
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import NavLink from './NavLink.vue';
import MobileNavLink from './MobileNavLink.vue';

const router = useRouter();
const isMenuOpen = ref(false);
const isDark = ref(false);

// Schließe das Menü, wenn die Route sich ändert
watch(() => router.currentRoute.value.path, () => {
  isMenuOpen.value = false;
});

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

const initializeDarkMode = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  isDark.value = savedTheme === 'dark' || (savedTheme === null && prefersDark);
  
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

onMounted(() => {
  initializeDarkMode();
  
  // Close menu on escape
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      isMenuOpen.value = false;
    }
  };
  document.addEventListener('keydown', handleEscape);
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape);
  });
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
