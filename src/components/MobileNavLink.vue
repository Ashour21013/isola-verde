<template>
  <RouterLink
    :to="to"
    class="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200 font-medium"
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

defineEmits(['click']);
</script>
