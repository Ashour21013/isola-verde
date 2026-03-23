<template>
  <div class="card overflow-hidden hover:shadow-xl transition-all duration-300 group">
    <!-- Vegetarian/Vegan Badge (no image) -->
    <div v-if="item.vegan || item.vegetarian" class="px-6 pt-6 pb-2 flex gap-2">
      <span
        v-if="item.vegan"
        class="px-2 py-1 bg-green-600 text-white text-xs font-semibold rounded-full"
        title="Vegan"
      >
        🌱 Vegan
      </span>
      <span
        v-else-if="item.vegetarian"
        class="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full"
        title="Vegetarisch"
      >
        🥗 Vegetarisch
      </span>
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Header -->
      <div class="flex justify-between items-start gap-4 mb-3">
        <h3 class="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white flex-1">
          {{ item.name }}
        </h3>
        <span class="text-lg sm:text-xl font-bold text-primary-600 dark:text-primary-400 flex-shrink-0">
          € {{ item.price.toFixed(2) }}
        </span>
      </div>

      <!-- Portion Info -->
      <p v-if="item.portion" class="text-xs text-slate-500 dark:text-slate-400 mb-2">
        {{ item.portion }}
      </p>

      <!-- Description -->
      <p v-if="item.description" class="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
        {{ item.description }}
      </p>

      <!-- Allergenes -->
      <div v-if="item.allergenes && item.allergenes.length > 0" class="mt-4">
        <p class="text-xs font-semibold text-slate-700 dark:text-slate-200 mb-2">Allergene:</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="allergen in item.allergenes"
            :key="allergen"
            class="px-2.5 py-0.5 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs rounded-full"
          >
            {{ allergen }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
    validator: (item) => {
      return item.id && item.name && item.price !== undefined;
    },
  },
});
</script>
