<template>
  <main class="min-h-[calc(100vh-200px)] flex items-center justify-center">
    <div class="container-custom text-center space-y-8 py-12">
      <div class="space-y-4">
        <div class="text-8xl sm:text-9xl font-bold text-primary-600 dark:text-primary-400">404</div>
        <h1 class="text-4xl sm:text-5xl font-bold">Seite nicht gefunden</h1>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto">
          Die angeforderte Seite existiert leider nicht. Bitte überprüfen Sie die URL oder kommen Sie zur Startseite zurück.
        </p>
      </div>

      <RouterLink to="/" class="btn-primary inline-block"> Zurück zur Startseite </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
