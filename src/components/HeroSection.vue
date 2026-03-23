<template>
  <section
    class="relative w-full min-h-screen md:min-h-[600px] bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 overflow-hidden flex items-center justify-center"
    role="region"
    aria-label="Hero Section"
  >


    <!-- Content -->
    <div class="relative z-10 container-custom text-center text-white space-y-6 py-12 sm:py-20">
      <span class="inline-block px-4 py-2 bg-primary-600/20 border border-primary-400/30 rounded-full text-sm font-medium text-primary-200 backdrop-blur-sm">
        Willkommen bei Isola Verda
      </span>

      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">
        Authentische italienische Küche in Wien
      </h1>

      <p class="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
        Entdecken Sie authentische italienische Rezepte, frische Zutaten und ein unvergessliches kulinarisches Erlebnis.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
        <RouterLink
          to="/speisekarte"
          class="btn-primary group"
          aria-label="Zur Speisekarte"
        >
          <span>Speisekarte ansehen</span>
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </RouterLink>

        <a
          :href="`tel:${restaurantData.phone}`"
          class="btn-secondary group"
          aria-label="Tisch reservieren"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Reservieren</span>
        </a>
      </div>

      <!-- Scroll Indicator -->
      <div class="pt-12 cursor-pointer" @click="scrollToNext" role="button" tabindex="0" @keydown.enter="scrollToNext" @keydown.space="scrollToNext" aria-label="Zur nächsten Sektion scrollen">
        <svg class="w-6 h-6 mx-auto text-primary-300 hover:text-primary-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
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

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
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

@keyframes floatDelay2 {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(-8deg);
  }
}

.animate-fade-in {
  animation: fadeInDown 0.6s ease-out forwards;
}

.animate-fade-in:nth-child(2) {
  animation-delay: 0.1s;
}

.animate-fade-in:nth-child(3) {
  animation-delay: 0.2s;
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

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delay {
  animation: floatDelay 7s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-float-slow {
  animation: floatSlow 8s ease-in-out infinite;
  animation-delay: 0.5s;
}

.animate-float-delay-2 {
  animation: floatDelay2 7s ease-in-out infinite;
  animation-delay: 2s;
}
</style>
