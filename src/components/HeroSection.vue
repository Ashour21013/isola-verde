<template>
  <section
    class="relative w-full min-h-screen md:min-h-[600px] bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 overflow-hidden flex items-center justify-center"
    role="region"
    aria-label="Hero Section"
  >
    <!-- Animated Background Elements (Italienische Farben) -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Animated Blobs - Green (italienisch) -->
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-green-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <!-- Animated Blobs - Red (italienisch) -->
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob-delay"></div>
      <!-- Animated Blobs - Primary -->
      <div class="absolute top-1/2 left-1/2 w-80 h-80 bg-primary-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob-slow"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container-custom text-center text-white space-y-6 py-12 sm:py-20">
      <!-- Badge with Animation -->
      <span class="inline-block px-4 py-2 bg-gradient-to-r from-primary-600/30 to-red-600/30 border border-primary-400/40 rounded-full text-sm font-medium text-primary-200 backdrop-blur-sm animate-fade-in shadow-lg hover:shadow-primary-600/50 transition-all duration-300">
        🇮🇹 Willkommen bei Isola Verde
      </span>

      <!-- Animated Headline with Gradient -->
      <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight max-w-4xl mx-auto animate-fade-in" style="animation-delay: 0.1s">
        <span class="bg-gradient-to-r from-white via-primary-200 to-red-300 bg-clip-text text-transparent animate-gradient">
          Authentische italienische Küche
        </span>
        <br />
        <span class="text-green-400">in Wien</span>
      </h1>

      <!-- Subheading -->
      <p class="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed animate-fade-in" style="animation-delay: 0.2s">
        Entdecken Sie authentische italienische Rezepte, frische Zutaten und ein unvergessliches kulinarisches Erlebnis.
      </p>

      <!-- CTA Buttons with Enhanced Styling -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fade-in" style="animation-delay: 0.3s">
        <!-- Primary CTA with Shine Effect -->
        <RouterLink
          to="/speisekarte"
          class="group relative px-8 py-4 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-lg hover:shadow-primary-600/50"
        >
          <!-- Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transition-all duration-300 group-hover:from-primary-500 group-hover:to-primary-600"></div>
          
          <!-- Shine Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

          <!-- Content -->
          <div class="relative flex items-center gap-2">
            <span>🍽️ Speisekarte ansehen</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>

          <!-- Glow Shadow -->
          <div class="absolute inset-0 rounded-lg bg-primary-600 -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </RouterLink>

        <!-- Secondary CTA - Red for Reserve (italienisch) -->
        <a
          :href="`tel:${restaurantData.phone}`"
          class="group relative px-8 py-4 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-lg hover:shadow-red-600/50"
        >
          <!-- Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transition-all duration-300 group-hover:from-red-500 group-hover:to-red-600"></div>
          
          <!-- Shine Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

          <!-- Content -->
          <div class="relative flex items-center gap-2">
            <span>📞 Reservieren</span>
          </div>

          <!-- Glow Shadow -->
          <div class="absolute inset-0 rounded-lg bg-red-600 -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>

      <!-- Scroll Indicator with Animation -->
      <div class="pt-12 cursor-pointer animate-bounce" @click="scrollToNext" role="button" tabindex="0" @keydown.enter="scrollToNext" @keydown.space="scrollToNext" aria-label="Zur nächsten Sektion scrollen">
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm text-slate-300">Scrollen zum Erkunden</span>
          <svg class="w-6 h-6 text-primary-300 hover:text-primary-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import restaurantData from '@/data/restaurant.json';

const scrollToNext = () => {
  // Scrolle zur nächsten Sektion (About Section)
  const nextSection = document.querySelector('section:nth-of-type(2)');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
/* Text Animation */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Gradient Text Animation */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Blob Animations (italienische Farbaktionen) */
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes floatDelay {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-25px) rotate(-5deg);
  }
}

@keyframes floatSlow {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Animation Classes */
.animate-fade-in {
  animation: fadeInDown 0.8s ease-out forwards;
  opacity: 0;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-blob-delay {
  animation: blob 7s infinite;
  animation-delay: 2s;
}

.animate-blob-slow {
  animation: blob 8s infinite;
  animation-delay: 1s;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* Button Glow Effects */
:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
</style>
