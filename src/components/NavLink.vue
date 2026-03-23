<template>
  <RouterLink
    :to="to"
    class="px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500"
    :aria-label="label"
  >
    {{ label }}
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  to: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>
