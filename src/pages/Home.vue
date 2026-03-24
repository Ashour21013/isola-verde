<template>
  <main class="overflow-x-hidden">
    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section -->
    <section class="section-padding bg-white dark:bg-slate-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h2 class="text-3xl sm:text-4xl font-bold">Willkommen bei Isola Verde</h2>
            <p class="text-lg text-slate-600 dark:text-slate-300">
              Seit 2010 servieren wir authentische italienische Küche in Wien. Unsere Leidenschaft für
              traditionelle Rezepte und frische Zutaten spiegelt sich in jedem Gericht wider.
            </p>
            <p class="text-lg text-slate-600 dark:text-slate-300">
              In unserem gemütlichen Restaurant erleben Sie nicht nur exquisite Speisen, sondern auch eine warme und
              einladende Atmosphäre, die zum Verweilen einlädt.
            </p>

            <div class="flex flex-wrap gap-4 pt-4">
              <RouterLink to="/speisekarte" class="btn-primary"> Speisekarte entdecken </RouterLink>
              <a :href="`tel:${restaurantData.phone}`" class="btn-secondary"> Reservieren </a>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?w=400&h=300&fit=crop"
              alt="Gemütliches Restaurant"
              class="rounded-lg shadow-lg"
              loading="lazy"
            />
            <img
              src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=400&h=300&fit=crop"
              alt="Italienische Pasta Carbonara"
              class="rounded-lg shadow-lg"
              loading="lazy"
            />
            <img
              src="https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=400&h=300&fit=crop"
              alt="Frische italienische Pizza"
              class="rounded-lg shadow-lg"
              loading="lazy"
            />
            <img
              src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?w=400&h=300&fit=crop"
              alt="Frischer Fisch und Meeresfrüchte"
              class="rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Opening Hours Section -->
    <OpeningHours />

    <!-- Features Section -->
    <section class="section-padding bg-white dark:bg-slate-900">
      <div class="container-custom">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">Warum Isola Verde?</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-8 text-center hover:shadow-xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
              <svg
                class="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Authentische Rezepte</h3>
            <p class="text-slate-600 dark:text-slate-300">
              Traditionelle italienische Gerichte, zubereitet nach zeitlosen Rezepten mit modernem Twist.
            </p>
          </div>

          <div class="card p-8 text-center hover:shadow-xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
              <svg
                class="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Faire Preise</h3>
            <p class="text-slate-600 dark:text-slate-300">
              Premium-Qualität zu angemessenen Preisen. Wir glauben an ehrliche Geschäfte.
            </p>
          </div>

          <div class="card p-8 text-center hover:shadow-xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
              <svg
                class="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h-2m0 0H10m2 0h2m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Warmherziger Service</h3>
            <p class="text-slate-600 dark:text-slate-300">
              Unser Team behandelt jeden Gast wie Familie. Ihre Zufriedenheit ist unsere Priorität.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <ReviewsSection />

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div class="container-custom text-center space-y-8">
        <h2 class="text-3xl sm:text-4xl font-bold">Bereit für ein kulinarisches Abenteuer?</h2>
        <p class="text-lg text-primary-100 max-w-2xl mx-auto">
          Reservieren Sie jetzt einen Tisch und erleben Sie das beste italienische Essen der Stadt.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink
            to="/speisekarte"
            class="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
          >
            Speisekarte ansehen
          </RouterLink>
          <a
            :href="`tel:${restaurantData.phone}`"
            class="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
          >
            {{ restaurantData.phone }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import HeroSection from '@/components/HeroSection.vue';
import OpeningHours from '@/components/OpeningHours.vue';
import ReviewsSection from '@/components/ReviewsSection.vue';
import restaurantData from '@/data/restaurant.json';
</script>

<style scoped>
</style>
