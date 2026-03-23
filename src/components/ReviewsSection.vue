<template>
  <section class="section-padding bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">Was unsere Gäste sagen</h2>
        <div class="flex items-center justify-center gap-2 mb-4">
          <div class="flex gap-1">
            <span v-for="i in 5" :key="i" class="text-yellow-400 text-2xl">★</span>
          </div>
          <span class="text-lg font-semibold text-slate-700 dark:text-slate-300">{{ restaurantData.reviews.rating }} / 5</span>
          <span class="text-slate-600 dark:text-slate-400">({{ restaurantData.reviews.totalReviews }} Rezensionen)</span>
        </div>
        <p class="text-slate-600 dark:text-slate-300">
          Lesen Sie, warum unsere Gäste Isola Verda lieben
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Review Card -->
        <div v-for="review in restaurantData.reviews.items" :key="review.id" class="card p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
              {{ review.initials }}
            </div>
            <div>
              <h4 class="font-semibold text-slate-900 dark:text-white">{{ review.name }}</h4>
              <div class="flex gap-1 text-yellow-400 text-sm">
                <span v-for="i in review.rating" :key="i">★</span>
              </div>
            </div>
          </div>
          <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            "{{ review.text }}"
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <a 
          href="https://www.google.com/maps/place/Isola+Verde/@48.2467005,16.3496191,17.32z/data=!4m7!3m6!1s0x476d06267d6e63cb:0xa446474592591b9f!4b1!8m2!3d48.2466667!4d16.3499999!16s%2Fg%2F1tdnd17b?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
        >
          Alle Rezensionen auf Google Maps ansehen
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import restaurantData from '@/data/restaurant.json';
</script>
