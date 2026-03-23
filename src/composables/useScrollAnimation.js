import { onMounted, onUnmounted } from 'vue';

export function useScrollAnimation() {
  let observer = null;

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element ist sichtbar - Animation triggern
          entry.target.classList.add('animate-in');
          // Optional: Observer entfernen nach Animation
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1, // Trigger wenn 10% des Elements sichtbar ist
      rootMargin: '0px 0px -50px 0px', // Etwas vorher starten
    });

    // Alle Elemente mit data-scroll-animate beobachten
    const elements = document.querySelectorAll('[data-scroll-animate]');
    elements.forEach((el) => observer.observe(el));
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });
}
