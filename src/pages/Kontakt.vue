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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
              Hauptstraße 42<br />80331 München<br />Deutschland
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
            <a href="tel:+498912345678" class="text-primary-600 dark:text-primary-400 hover:underline text-lg font-semibold">
              +49 (0)89 123 456 78
            </a>
            <p class="text-slate-600 dark:text-slate-300 text-sm mt-2">Montag - Sonntag, 11:30 - 23:00</p>
          </div>

          <!-- Email -->
          <div class="card p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">E-Mail</h3>
            <a href="mailto:info@isolaverda.de" class="text-primary-600 dark:text-primary-400 hover:underline font-semibold break-all">
              info@isolaverda.de
            </a>
            <p class="text-slate-600 dark:text-slate-300 text-sm mt-2">Wir antworten innerhalb von 24h</p>
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
    <section class="section-padding bg-white dark:bg-slate-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Opening Hours -->
          <div>
            <h2 class="text-3xl font-bold mb-8">Öffnungszeiten</h2>
            <div class="space-y-4">
              <div v-for="(hours, day) in openingHours" :key="day" class="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-700">
                <span class="font-semibold text-slate-700 dark:text-slate-200">{{ formatDay(day) }}</span>
                <span class="text-slate-600 dark:text-slate-300">{{ hours }}</span>
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
                  Kostenlose Parkplätze in unmittelbarer Nähe. Die nächsten Parkhäuser sind nur 5 Minuten Fußweg entfernt.
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
                  U-Bahn: Linie U2, U7 Station "Marienplatz" (5 Min. Fußweg)<br />
                  S-Bahn: Alle Linien bis "Marienplatz" (5 Min. Fußweg)
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

const openingHours = {
  monday: '11:30 - 14:30, 17:30 - 23:00',
  tuesday: '11:30 - 14:30, 17:30 - 23:00',
  wednesday: '11:30 - 14:30, 17:30 - 23:00',
  thursday: '11:30 - 14:30, 17:30 - 23:00',
  friday: '11:30 - 14:30, 17:30 - 23:30',
  saturday: '11:30 - 14:30, 17:30 - 23:30',
  sunday: '11:30 - 23:00',
};

const dayNames = {
  monday: 'Montag',
  tuesday: 'Dienstag',
  wednesday: 'Mittwoch',
  thursday: 'Donnerstag',
  friday: 'Freitag',
  saturday: 'Samstag',
  sunday: 'Sonntag',
};

const formatDay = (day) => dayNames[day];
</script>
