<template>
  <section class="section-padding">
    <div class="container-custom">
      <h1 class="text-4xl sm:text-5xl font-bold text-center mb-12">Galerie</h1>

      <!-- Masonry Grid -->
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="break-inside-avoid overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
          @click="openLightbox(index)"
          role="button"
          :tabindex="0"
          :aria-label="`Galeriebild ${index + 1}`"
          @keydown.enter="openLightbox(index)"
          @keydown.space="openLightbox(index)"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            loading="lazy"
            class="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      <!-- Lightbox Modal -->
      <Teleport to="body">
        <transition name="fade">
          <div v-if="showLightbox" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" @click="closeLightbox">
            <div class="relative w-full max-w-5xl mx-auto" @click.stop>
              <!-- Header with Close Button -->
              <div class="flex justify-between items-center mb-4">
                <span class="text-white text-sm font-medium">
                  {{ currentImageIndex + 1 }} / {{ galleryImages.length }}
                </span>
                <button
                  @click="closeLightbox"
                  class="bg-red-600 hover:bg-red-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg p-2"
                  aria-label="Schließen"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Image Container -->
              <div class="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-2xl max-h-[70vh] flex items-center justify-center">
                <img
                  :src="galleryImages[currentImageIndex].src"
                  :alt="galleryImages[currentImageIndex].alt"
                  class="w-full h-full object-contain"
                />
              </div>

              <!-- Navigation -->
              <div class="flex justify-between items-center mt-6">
                <button
                  @click="previousImage"
                  class="text-white hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-3 bg-slate-700/50 hover:bg-slate-700"
                  aria-label="Vorheriges Bild"
                >
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  @click="nextImage"
                  class="text-white hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-3 bg-slate-700/50 hover:bg-slate-700"
                  aria-label="Nächstes Bild"
                >
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </transition>
      </Teleport>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, Teleport } from 'vue';

const showLightbox = ref(false);
const currentImageIndex = ref(0);

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?w=600&h=600&fit=crop',
    alt: 'Restaurant Interior - Elegante Einrichtung',
  },
  {
    src: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=600&h=600&fit=crop',
    alt: 'Leckere Pasta Carbonara',
  },
  {
    src: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?w=600&h=600&fit=crop',
    alt: 'Italienische Pizza aus dem Ofen',
  },
  {
    src: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=600&h=600&fit=crop',
    alt: 'Frische Zutaten und Gemüse',
  },
  {
    src: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?w=600&h=600&fit=crop',
    alt: 'Köstliche Meeresfrüchte Risotto',
  },
  {
    src: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?w=600&h=600&fit=crop',
    alt: 'Fein zubereiteter Fisch mit Kräutern',
  },
  {
    src: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?w=600&h=600&fit=crop',
    alt: 'Hausgemachte Ravioli mit Sauce',
  },
  {
    src: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=600&h=600&fit=crop',
    alt: 'Mediterrane Salatkomposition',
  },
  {
    src: 'https://images.pexels.com/photos/2313699/pexels-photo-2313699.jpeg?w=600&h=600&fit=crop',
    alt: 'Gemütliche Esecke mit Kerzen',
  },
];

const openLightbox = (index) => {
  currentImageIndex.value = index;
  showLightbox.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  showLightbox.value = false;
  document.body.style.overflow = '';
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % galleryImages.length;
};

const previousImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + galleryImages.length) % galleryImages.length;
};

const handleKeydown = (e) => {
  if (!showLightbox.value) return;

  if (e.key === 'ArrowRight') {
    nextImage();
  } else if (e.key === 'ArrowLeft') {
    previousImage();
  } else if (e.key === 'Escape') {
    closeLightbox();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
