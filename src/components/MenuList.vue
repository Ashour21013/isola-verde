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

      <!-- Filters -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <!-- Reset Category Filter Button -->
        <button
          v-if="selectedCategories.size > 0"
          @click="clearCategoryFilter"
          class="px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm bg-red-600 text-white hover:bg-red-700"
          title="Kategoriefilter zurücksetzen"
        >
          ✕ Filter zurücksetzen
        </button>

        <!-- Category Filters (Multi-Select) -->
        <button
          v-for="category in uniqueCategories"
          :key="category"
          @click="toggleCategory(category)"
          :class="[
            'px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm',
            selectedCategories.has(category)
              ? 'bg-primary-600 text-white'
              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
          ]"
          :aria-pressed="selectedCategories.has(category)"
        >
          {{ category }}
        </button>
      </div>

      <!-- Dietary Filters -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="filter in dietaryFilters"
          :key="filter.id"
          @click="activeDietaryFilter = filter.id"
          :class="[
            'px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm',
            activeDietaryFilter === filter.id
              ? 'bg-accent-600 text-white'
              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
          ]"
          :aria-pressed="activeDietaryFilter === filter.id"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Categories -->
      <div class="space-y-16">
        <div v-for="category in filteredCategories" :key="category">
          <h2 class="text-3xl font-bold mb-8 pb-4 border-b-2 border-primary-600">
            {{ category }}
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

const clearCategoryFilter = () => {
  selectedCategories.value.clear();
};

const getItemsByCategory = (category) => {
  return filteredByDiet.value.filter((item) => item.category === category);
};

// Reset category when dietary filter changes
import { watch } from 'vue';
watch(activeDietaryFilter, () => {
  // No need to reset categories when dietary filter changes
});
</script>
