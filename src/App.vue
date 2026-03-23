<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
    <!-- Skip to Content Link (Accessibility) -->
    <a href="#main-content" class="skip-to-content">Zum Hauptinhalt springen</a>

    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <div id="main-content" class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition mode="out-in" name="fade">
          <component :is="Component" :key="$route.path" />
        </Transition>
      </RouterView>
    </div>

    <!-- Footer -->
    <AppFooter />

    <!-- Cookie Consent Banner -->
    <CookieConsent />
  </div>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import CookieConsent from '@/components/CookieConsent.vue'

const $route = useRoute()
</script>

<style scoped>
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-to-content:focus {
  top: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
