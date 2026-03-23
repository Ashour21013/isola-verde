<template>
  <div class="w-full h-96 rounded-lg overflow-hidden shadow-lg">
    <iframe
      title="Google Maps - Isola Verda Restaurant"
      width="100%"
      height="100%"
      style="border: 0"
      :src="embedUrl"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const embedUrl = computed(
  () =>
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.647491516404!2d11.5747!3d48.1372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e74e3a3a3a3a3%3A0x3a3a3a3a3a3a3a3a!2sHauptstra%C3%9Fe%2042%2C%2080331%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1234567890'
);
</script>
