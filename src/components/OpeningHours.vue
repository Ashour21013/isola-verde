<template>
  <section class="section-padding bg-slate-50 dark:bg-slate-800">
    <div class="container-custom">
      <h2 class="text-3xl font-bold text-center mb-12">Öffnungszeiten</h2>

      <div class="max-w-2xl mx-auto bg-white dark:bg-slate-700 rounded-lg shadow-md p-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div v-for="(hours, day) in openingHours" :key="day" class="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-600 last:border-b-0">
            <span class="font-semibold text-slate-700 dark:text-slate-200">{{ formatDay(day) }}</span>
            <span class="text-slate-600 dark:text-slate-300">{{ hours }}</span>
          </div>
        </div>

        <!-- Notice -->
        <div class="mt-8 p-4 bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-800 rounded-lg">
          <p class="text-sm text-accent-900 dark:text-accent-200">
            <strong>Hinweis:</strong> An Feiertagen gelten möglicherweise abweichende Öffnungszeiten. Bitte kontaktieren Sie uns zur Bestätigung.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

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
