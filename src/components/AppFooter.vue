<template>
  <footer class="bg-slate-900 text-white mt-20">
    <div class="container-custom section-padding">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- About -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">IV</span>
            </div>
            <h3 class="text-lg font-bold">Isola Verda</h3>
          </div>
          <p class="text-slate-300 text-sm leading-relaxed">
            Authentische italienische Küche im Herzen der Stadt. Wir servieren traditionelle Rezepte mit modernem Flair.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Navigation</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <RouterLink
                to="/"
                class="text-slate-300 hover:text-primary-400 transition-colors duration-200"
              >
                Startseite
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/speisekarte"
                class="text-slate-300 hover:text-primary-400 transition-colors duration-200"
              >
                Speisekarte
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/galerie"
                class="text-slate-300 hover:text-primary-400 transition-colors duration-200"
              >
                Galerie
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/kontakt"
                class="text-slate-300 hover:text-primary-400 transition-colors duration-200"
              >
                Kontakt
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Kontakt</h4>
          <ul class="space-y-3 text-sm text-slate-300">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Hauptstraße 42<br />80331 München</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@isolaverda.de" class="hover:text-primary-400 transition-colors">
                info@isolaverda.de
              </a>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+498912345678" class="hover:text-primary-400 transition-colors">
                +49 (0)89 123 456 78
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Folgen Sie uns</h4>
          <div class="flex gap-4">
            <a
              href="https://instagram.com/isolaverda"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-slate-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.521 17.34c-.24.45-.837.72-1.604.84-3.21.529-6.604.129-8.269-.156-.567-.041-.949-.379-1.206-.788-.04-.048-.091-.133-.151-.248-.568-.941-.738-1.32-.562-2.032.562-2.031 2.283-2.948 4.909-2.948h.5a9.52 9.52 0 011.312-.052h.5c2.626 0 4.347.917 4.909 2.948.176.712.006 1.091-.562 2.032-.06.115-.111.2-.151.248-.257.409-.639.747-1.206.788zm-5.521-4.713c-1.562 0-2.833-.104-2.834-2.194.001-2.08 1.272-2.19 2.834-2.19s2.832.11 2.833 2.19c0 2.09-1.271 2.194-2.833 2.194z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/isolaverda"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-slate-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Facebook"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-slate-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="TripAdvisor"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 20.571c-4.723 0-8.571-3.848-8.571-8.571S7.277 3.429 12 3.429s8.571 3.848 8.571 8.571-3.848 8.571-8.571 8.571z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-slate-800 py-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-400 mb-8">
          <RouterLink to="/datenschutz" class="hover:text-primary-400 transition-colors">Datenschutz</RouterLink>
          <RouterLink to="/impressum" class="hover:text-primary-400 transition-colors">Impressum</RouterLink>
          <a href="/impressum#agb" class="hover:text-primary-400 transition-colors">AGB</a>
          <a href="/sitemap.xml" class="hover:text-primary-400 transition-colors">Sitemap</a>
        </div>

        <!-- Copyright -->
        <div class="text-center text-slate-400 text-sm">
          <p>
            &copy; {{ currentYear }} Isola Verda. Alle Rechte vorbehalten. | Made with 
            <span class="text-primary-400">❤️</span> in München
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const currentYear = ref(new Date().getFullYear());
</script>
