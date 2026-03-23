<template>
  <Transition name="slide-up">
    <div
      v-if="!cookiesAccepted"
      class="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-lg p-4 sm:p-6"
      role="banner"
      aria-label="Cookie-Zustimmung"
    >
      <div class="container-custom">
        <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <!-- Text -->
          <div class="flex-1 space-y-2">
            <h3 class="font-semibold text-slate-900 dark:text-white">Datenschutz & Cookies</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">
              Wir nutzen Cookies, um Ihr Erlebnis zu verbessern und Ihre Präferenzen zu speichern. 
              <RouterLink 
                to="/datenschutz" 
                class="text-primary-600 hover:underline dark:text-primary-400"
              >
                Mehr Infos
              </RouterLink>
            </p>
          </div>

          <!-- Buttons -->
          <div class="flex gap-3 flex-shrink-0">
            <button
              @click="rejectCookies"
              class="px-4 py-2 rounded-lg text-sm font-medium bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Cookies ablehnen"
            >
              Ablehnen
            </button>
            <button
              @click="acceptCookies"
              class="px-4 py-2 rounded-lg text-sm font-medium bg-primary-600 text-white hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Alle Cookies akzeptieren"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const cookiesAccepted = ref(true); // Standardmäßig versteckt

const acceptCookies = () => {
  localStorage.setItem('cookies-accepted', 'true');
  localStorage.setItem('cookies-accepted-date', new Date().toISOString());
  cookiesAccepted.value = true;
};

const rejectCookies = () => {
  localStorage.setItem('cookies-accepted', 'false');
  localStorage.setItem('cookies-rejected-date', new Date().toISOString());
  cookiesAccepted.value = true;
};

onMounted(() => {
  // Prüfe ob der Benutzer bereits eine Cookie-Entscheidung getroffen hat
  const accepted = localStorage.getItem('cookies-accepted');
  
  // Wenn noch keine Entscheidung getroffen wurde, zeige das Banner
  if (accepted === null) {
    cookiesAccepted.value = false;
  }
});
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
