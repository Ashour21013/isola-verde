<template>
  <section class="section-padding">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">Unsere Speisekarte</h1>
        <p class="text-lg text-slate-600 dark:text-slate-300">
          Entdecken Sie unsere Auswahl an traditionellen italienischen Gerichten
        </p>
      </div>

      <!-- Filters (Sticky on Mobile) -->
      <div class="sticky top-0 z-40 bg-white dark:bg-slate-900 py-4 mb-8 -mx-4 px-4 sm:relative sm:bg-transparent sm:py-0 sm:mb-12 sm:mx-0 sm:px-0">
        <!-- View Toggle (Mobile Only) + Dietary Filters -->
        <div class="flex flex-wrap justify-center gap-2 mb-4 items-center">
          <!-- View Toggle (Mobile Only) -->
          <div class="sm:hidden flex gap-1 bg-slate-200 dark:bg-slate-700 rounded-full p-1">
            <button
              @click="mobileViewMode = 'list'"
              :class="[
                'px-3 py-1 rounded-full text-xs font-medium transition-all',
                mobileViewMode === 'list'
                  ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow'
                  : 'text-slate-600 dark:text-slate-400'
              ]"
              title="Listenansicht"
            >
              📋 Liste
            </button>
            <button
              @click="mobileViewMode = 'grid'"
              :class="[
                'px-3 py-1 rounded-full text-xs font-medium transition-all',
                mobileViewMode === 'grid'
                  ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow'
                  : 'text-slate-600 dark:text-slate-400'
              ]"
              title="Gitteransicht"
            >
              🔲 Gitter
            </button>
          </div>

          <!-- Dietary Filters -->
          <div class="flex flex-wrap justify-center gap-2 flex-1">
            <button
              v-for="filter in dietaryFilters"
              :key="filter.id"
              @click="activeDietaryFilter = filter.id"
              :class="[
                'px-3 py-1 rounded-full font-medium transition-all duration-200 text-xs sm:text-sm',
                activeDietaryFilter === filter.id
                  ? 'bg-accent-600 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
              ]"
              :aria-pressed="activeDietaryFilter === filter.id"
            >
              {{ filter.label }}
            </button>
          </div>
        </div>

        <!-- Category Filters (Multi-Select) -->
        <div class="flex flex-wrap justify-center gap-2">
          <!-- Reset Button -->
          <button
            v-if="selectedCategories.size > 0"
            @click="clearCategoryFilter"
            class="px-3 py-1 rounded-full font-medium transition-all duration-200 text-xs sm:text-sm bg-red-600 text-white hover:bg-red-700"
            title="Kategoriefilter zurücksetzen"
          >
            ✕ Alle
          </button>

          <!-- Category Filters -->
          <button
            v-for="category in uniqueCategories"
            :key="category"
            @click="toggleCategory(category)"
            :class="[
              'px-3 py-1 rounded-full font-medium transition-all duration-200 text-xs sm:text-sm',
              selectedCategories.has(category)
                ? 'bg-primary-600 text-white'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
            ]"
            :aria-pressed="selectedCategories.has(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Mobile View (List or Accordion based on selection) -->
      <div class="sm:hidden space-y-4">
        <div v-for="category in filteredCategories" :key="category" class="bg-white dark:bg-slate-800 rounded-lg shadow">
          <!-- Category Header -->
          <button
            @click="toggleMobileCategory(category)"
            class="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <h2 class="text-lg font-bold text-slate-900 dark:text-white">
              {{ category }}
            </h2>
            <svg
              :class="['w-5 h-5 text-primary-600 transition-transform', expandedCategories.has(category) ? 'rotate-180' : '']"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          <!-- Category Items (List View) -->
          <transition
            enter-active-class="transition duration-200"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="expandedCategories.has(category)" class="border-t border-slate-200 dark:border-slate-700">
              <!-- List View -->
              <div v-if="mobileViewMode === 'list'" class="divide-y divide-slate-200 dark:divide-slate-700">
                <div
                  v-for="item in getItemsByCategory(category)"
                  :key="item.id"
                  class="px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <div class="flex justify-between items-start gap-3">
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-2">
                        <h3 class="font-semibold text-slate-900 dark:text-white text-sm">
                          {{ item.name }}
                        </h3>
                        <!-- Show portion size for drinks -->
                        <span v-if="isDrinkCategory(category) && item.portion" class="text-xs text-slate-500 dark:text-slate-400 font-normal">
                          {{ item.portion }}
                        </span>
                      </div>
                      <p v-if="item.description" class="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                        {{ item.description }}
                      </p>
                      <!-- Only show dietary labels for non-beverage categories -->
                      <div v-if="!isDrinkCategory(category)" class="flex gap-2 mt-2">
                        <span v-if="item.vegetarian" class="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                          🥗 V
                        </span>
                        <span v-if="item.vegan" class="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
                          🌱 VG
                        </span>
                      </div>
                    </div>
                    <div class="flex-shrink-0 text-right">
                      <p class="font-bold text-primary-600 dark:text-primary-400 text-sm whitespace-nowrap">
                        €{{ item.price.toFixed(2) }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Grid View -->
              <div v-else class="px-6 py-4 space-y-4">
                <MenuCard
                  v-for="item in getItemsByCategory(category)"
                  :key="item.id"
                  :item="item"
                />
              </div>

              <!-- Pizza Info Section -->
              <div v-if="category === 'Pizza'" class="px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-accent-50 dark:bg-accent-900/20">
                <h3 class="font-bold text-accent-900 dark:text-accent-200 mb-3 text-sm">ℹ️ Pizza Größen & Zusätze</h3>
                <div class="space-y-2 text-xs text-accent-800 dark:text-accent-300">
                  <div>
                    <p class="font-semibold">Jede kleine Pizza</p>
                    <p>- 1,00 €</p>
                  </div>
                  <div>
                    <p class="font-semibold">Knoblauchöl - gehackte scharfe Chilischoten in Olivenöl</p>
                    <p>+ 1,00 €</p>
                  </div>
                  <div>
                    <p class="font-semibold">Zusätzliche Auflagen</p>
                    <p>+ 2,20 €</p>
                  </div>
                  <div>
                    <p class="font-semibold">Porcini, Prosciutto di Parma, Shrimps B</p>
                    <p>+ 3,70 €</p>
                  </div>
                  <div>
                    <p class="font-semibold">Hühnerfleisch, Frutti di mare BDR</p>
                    <p>+ 3,70 €</p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- Desktop View (Original Grid Layout) -->
      <div class="hidden sm:block space-y-16">
        <div v-for="category in filteredCategories" :key="category">
          <h2 class="text-3xl font-bold mb-8 pb-4 border-b-2 border-primary-600">
            {{ category }}
          </h2>

          <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <MenuCard
              v-for="item in getItemsByCategory(category)"
              :key="item.id"
              :item="item"
            />
          </div>

          <!-- Pizza Info Section (after Pizza category) -->
          <div v-if="category === 'Pizza'" class="mt-12 p-6 bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-600 rounded-lg">
            <h3 class="text-xl font-bold text-accent-900 dark:text-accent-200 mb-4">ℹ️ Pizza Größen & Zusätze</h3>
            <div class="space-y-3 text-sm text-accent-800 dark:text-accent-300">
              <div>
                <p class="font-semibold mb-2">Jede kleine Pizza</p>
                <p>- 1,00 €</p>
              </div>
              <div>
                <p class="font-semibold mb-2">Knoblauchöl - gehackte scharfe Chilischoten in Olivenöl</p>
                <p>+ 1,00 €</p>
              </div>
              <div>
                <p class="font-semibold mb-2">Zusätzliche Auflagen</p>
                <p>+ 2,20 €</p>
              </div>
              <div>
                <p class="font-semibold mb-2">Porcini, Prosciutto di Parma, Shrimps B</p>
                <p>+ 3,70 €</p>
              </div>
              <div>
                <p class="font-semibold mb-2">Hühnerfleisch, Frutti di mare BDR</p>
                <p>+ 3,70 €</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="uniqueCategories.length === 0" class="text-center py-12">
        <p class="text-lg text-slate-600 dark:text-slate-300">
          Es gibt keine Gerichte, die Ihren Filterkriterien entsprechen.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import menuData from '@/data/menu.json';
import MenuCard from '@/components/MenuCard.vue';

const selectedCategories = ref(new Set());
const activeDietaryFilter = ref('all');
const expandedCategories = ref(new Set());
const mobileViewMode = ref('list'); // 'list' or 'grid'

const dietaryFilters = [
  { id: 'all', label: 'Alle Gerichte' },
  { id: 'vegetarian', label: '🥗 Vegetarisch' },
  { id: 'vegan', label: '🌱 Vegan' },
];

// Get all unique categories in order
const allCategories = [
  'Aperitivi',
  'Bevande - Getränke',
  'Biere',
  'Caffè',
  'Insalate',
  'Antipasti Caldi',
  'Zuppe',
  'Pasta',
  'Risotto',
  'Pizza',
  'Pesce',
  'Carne',
  'Contorni',
  'Al Forno',
  'Dolci',
];

// Apply dietary filter first
const filteredByDiet = computed(() => {
  if (activeDietaryFilter.value === 'all') {
    return menuData;
  } else if (activeDietaryFilter.value === 'vegetarian') {
    return menuData.filter((item) => item.vegetarian);
  } else if (activeDietaryFilter.value === 'vegan') {
    return menuData.filter((item) => item.vegan);
  }
  return menuData;
});

// Get unique categories that have items after dietary filter
const uniqueCategories = computed(() => {
  const cats = new Set();
  filteredByDiet.value.forEach((item) => {
    cats.add(item.category);
  });
  return allCategories.filter((cat) => cats.has(cat));
});

// If no category selected, show all; otherwise show selected categories
const filteredCategories = computed(() => {
  if (selectedCategories.value.size === 0) {
    return uniqueCategories.value;
  }
  return Array.from(selectedCategories.value).filter((cat) =>
    uniqueCategories.value.includes(cat)
  );
});

const toggleCategory = (category) => {
  if (selectedCategories.value.has(category)) {
    selectedCategories.value.delete(category);
  } else {
    selectedCategories.value.add(category);
  }
};

const toggleMobileCategory = (category) => {
  if (expandedCategories.value.has(category)) {
    expandedCategories.value.delete(category);
  } else {
    expandedCategories.value.add(category);
  }
};

const clearCategoryFilter = () => {
  selectedCategories.value.clear();
};

const getItemsByCategory = (category) => {
  return filteredByDiet.value.filter((item) => item.category === category);
};

const isDrinkCategory = (category) => {
  return ['Aperitivi', 'Bevande - Getränke', 'Biere', 'Caffè'].includes(category);
};
</script>
