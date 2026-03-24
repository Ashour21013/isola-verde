<template>
  <section class="section-padding bg-slate-100 dark:bg-slate-800">
    <div class="container-custom">
      <h2 class="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">Öffnungszeiten</h2>

      <div class="max-w-2xl mx-auto bg-white dark:bg-slate-700 rounded-2xl shadow-lg p-8 sm:p-12">
        <div class="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8">
          <!-- Icon -->
          <div class="flex-shrink-0 flex justify-center sm:justify-start">
            <svg class="w-12 h-12 sm:w-16 sm:h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <!-- Content -->
          <div class="flex-1 text-center sm:text-left">
            <p class="text-slate-600 dark:text-slate-300 text-sm mb-2 uppercase tracking-wide font-semibold">{{ restaurantData.openingHours.note }}</p>
            <p class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">{{ restaurantData.openingHours.standard }}</p>
            <p class="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-medium mb-4 sm:mb-6">Montag - Sonntag</p>

            <!-- Notice -->
            <div class="p-3 bg-slate-50 dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded-lg">
              <p class="text-sm text-slate-700 dark:text-slate-100">
                <strong>Hinweis:</strong> An Feiertagen gelten möglicherweise abweichende Öffnungszeiten. Bitte kontaktieren Sie uns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import restaurantData from '@/data/restaurant.json';
</script>
