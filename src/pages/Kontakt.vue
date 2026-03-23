<template>
  <main class="overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white overflow-hidden">
      <div class="container-custom text-center">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">Kontakt & Anfahrt</h1>
        <p class="text-lg text-slate-200 max-w-2xl mx-auto">
          Haben Sie Fragen? Reservieren Sie einen Tisch oder besuchen Sie uns!
        </p>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="section-padding bg-white dark:bg-slate-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
          <!-- Address -->
          <div class="card p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Adresse</h3>
            <p class="text-slate-600 dark:text-slate-300">
              {{ restaurantData.address }}
            </p>
          </div>

          <!-- Phone -->
          <div class="card p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Telefon</h3>
            <a :href="`tel:${restaurantData.phone}`" class="text-primary-600 dark:text-primary-400 hover:underline text-lg font-semibold">
              {{ restaurantData.phone }}
            </a>
            <p class="text-slate-600 dark:text-slate-300 text-sm mt-2">Montag - Sonntag, 11:30 - 23:00</p>
          </div>
        </div>

        <!-- Map -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold mb-6">Standort</h2>
          <MapEmbed />
        </div>
      </div>
    </section>

    <!-- Opening Hours Extended Section -->
    <section class="section-padding bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Opening Hours -->
          <div>
            <h2 class="text-3xl font-bold mb-8">Öffnungszeiten</h2>
            <div class="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0">
                  <svg class="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-slate-600 dark:text-slate-300 text-sm mb-2">{{ openingHours.note }}</p>
                  <p class="text-3xl font-bold text-slate-900 dark:text-white mb-1">{{ openingHours.standard }}</p>
                  <p class="text-slate-500 dark:text-slate-400 text-sm">Montag - Sonntag</p>
                </div>
              </div>
            </div>

            <div class="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p class="text-sm text-blue-900 dark:text-blue-200">
                <strong>Hinweis:</strong> An Feiertagen können die Öffnungszeiten abweichen. Bitte rufen Sie uns an.
              </p>
            </div>
          </div>

          <!-- Parking & Access -->
          <div>
            <h2 class="text-3xl font-bold mb-8">Anfahrt & Parken</h2>
            <div class="space-y-6">
              <div>
                <h3 class="font-semibold text-lg mb-2 flex items-center gap-2">
                  <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Mit dem Auto
                </h3>
                <p class="text-slate-600 dark:text-slate-300">
                  Kostenlose Parkplätze in unmittelbarer Nähe der Silbergasse. Mehrere Parkhäuser sind in der Umgebung verfügbar und zu Fuß schnell erreichbar.
                </p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2 flex items-center gap-2">
                  <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zm0-5a2 2 0 10-4 0 2 2 0 004 0M5 10a7 7 0 1014 0 7 7 0 01-14 0z" />
                  </svg>
                  Öffentliche Verkehrsmittel
                </h3>
                <p class="text-slate-600 dark:text-slate-300">
                  U-Bahn: Linie U6 "Währinger Straße" oder "Nussdorfer Straße"<br />
                  Straßenbahn: Linie 5 und 33 (Station Silbergasse)<br />
                  Bus: Mehrere Buslinien in der direkten Umgebung
                </p>
              </div>

              <div>
                <h3 class="font-semibold text-lg mb-2 flex items-center gap-2">
                  <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12c0 1.657-.895 3-2 3s-2-1.343-2-3 .895-3 2-3 2 1.343 2 3zm12 0c0 1.657-.895 3-2 3s-2-1.343-2-3 .895-3 2-3 2 1.343 2 3z" />
                  </svg>
                  Barrierefreiheit
                </h3>
                <p class="text-slate-600 dark:text-slate-300">
                  Unser Restaurant ist barrierefrei zugänglich. Rollstuhlfahrer und Menschen mit Mobilitätseinschränkungen sind herzlich willkommen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import MapEmbed from '@/components/MapEmbed.vue';
import restaurantData from '@/data/restaurant.json';

const openingHours = restaurantData.openingHours;
</script>
