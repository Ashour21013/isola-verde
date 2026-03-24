<template>
  <div class="w-full h-96 rounded-lg overflow-hidden shadow-lg">
    <iframe
      title="Google Maps - Isola Verde Restaurant Wien"
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
import restaurantData from '@/data/restaurant.json';

const embedUrl = computed(() => restaurantData.googleMapsEmbed);
</script>
