# 🚀 Entwicklungs-Leitfaden

## Projektsetup & Konfiguration

### Initial Setup nach Clone

```bash
# 1. Node.js und npm überprüfen
node --version  # v16.0.0 oder höher
npm --version   # 8.0.0 oder höher

# 2. Dependencies installieren
npm install

# 3. Development Server starten
npm run dev

# 4. Öffnen Sie http://localhost:5173 im Browser
```

## Dateistruktur verstehen

```
src/
├── assets/              # Statische Ressourcen
│   ├── images/
│   │   ├── gallery/     # Galerie-Bilder
│   │   └── menu/        # Speisekarte-Bilder
│   └── icons/           # SVG Icons
├── components/          # Wiederverwendbare Komponenten
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── HeroSection.vue
│   ├── MenuCard.vue
│   ├── ContactForm.vue
│   └── ...
├── data/                # Statische JSON-Daten
│   ├── menu.json
│   └── restaurant.json
├── pages/               # Seiten/Views
│   ├── Home.vue
│   ├── Speisekarte.vue
│   ├── Kontakt.vue
│   ├── Galerie.vue
│   └── NotFound.vue
├── router/
│   └── index.js         # Vue Router Konfiguration
├── styles/
│   └── globals.css      # Globale Styles & TailwindCSS
├── App.vue              # Root-Komponente
└── main.js              # Entry Point
```

## Vue 3 Composition API Tipps

### Komponente mit `<script setup>` erstellen

```vue
<template>
  <div class="component">
    <p>{{ message }}</p>
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Reaktive Variablen
const count = ref(0);
const message = ref('Hallo Vue 3!');

// Computed Properties
const doubled = computed(() => count.value * 2);

// Lifecycle Hooks
import { onMounted } from 'vue';
onMounted(() => {
  console.log('Komponente montiert');
});

// Props & Emits
defineProps({
  title: String,
  disabled: Boolean
});

defineEmits(['custom-event']);
</script>

<style scoped>
/* Scoped Styles - nur für diese Komponente */
.component {
  padding: 1rem;
}
</style>
```

### Reactive State Management

```javascript
// Einfache Reaktivität
const count = ref(0);
count.value++;  // `.value` ist notwendig!

// In Template automatisch ausgepackt
const state = reactive({
  user: {
    name: 'Max',
    email: 'max@example.de'
  }
});
// Template: {{ state.user.name }}

// Computed Properties
const fullName = computed(() => {
  return `${state.firstName} ${state.lastName}`;
});

// Watch für Änderungen
import { watch } from 'vue';
watch(() => count.value, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`);
});
```

## Styling mit TailwindCSS

### Best Practices

```vue
<template>
  <!-- Mobile-first approach -->
  <div class="
    w-full
    px-4 sm:px-6 lg:px-8
    py-4 sm:py-6 lg:py-8
    bg-white dark:bg-slate-900
    text-slate-900 dark:text-white
    hover:shadow-lg transition-shadow duration-300
  ">
    <!-- Responsive Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Dark Mode Support -->
      <div class="
        rounded-lg
        bg-white dark:bg-slate-800
        border border-slate-200 dark:border-slate-700
      ">
      </div>
    </div>
  </div>
</template>
```

### Custom CSS mit @apply

```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-primary-600 text-white rounded-lg 
           hover:bg-primary-700 transition-colors duration-200
           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500;
  }

  .card {
    @apply bg-white dark:bg-slate-800 rounded-lg shadow-md 
           hover:shadow-lg transition-shadow duration-300;
  }
}
```

## Router & Navigation

### Route hinzufügen

```javascript
// src/router/index.js
const routes = [
  {
    path: '/neue-seite',
    name: 'NeuSeite',
    component: () => import('../pages/NeuSeite.vue'),
    meta: {
      title: 'Neue Seite - Isola Verda',
      description: 'Seitenbeschreibung für SEO'
    }
  }
];
```

### Link Navigation

```vue
<template>
  <!-- Zu Route linken -->
  <RouterLink to="/" class="btn-primary">Home</RouterLink>

  <!-- Mit Parametern -->
  <RouterLink :to="{ name: 'Post', params: { id: 123 } }">
    Post ansehen
  </RouterLink>

  <!-- Programmativ navigieren -->
  <button @click="$router.push('/kontakt')">
    Zur Kontaktseite
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigate = () => {
  router.push({
    name: 'Speisekarte',
    query: { category: 'vegan' }
  });
};
</script>
```

## Komponenten-Kommunikation

### Props (Parent → Child)

```vue
<!-- Parent -->
<MenuCard :item="menuItem" />

<!-- Child MenuCard.vue -->
<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>
```

### Emits (Child → Parent)

```vue
<!-- Child -->
<script setup>
const emit = defineEmits(['order', 'delete']);

const handleOrder = () => {
  emit('order', { itemId: 123 });
};
</script>

<!-- Parent -->
<MenuCard @order="handleOrder" />

<script setup>
const handleOrder = (data) => {
  console.log('Order:', data);
};
</script>
```

### Provide/Inject (Deep Nesting)

```vue
<!-- Root Component -->
<script setup>
import { provide } from 'vue';

provide('restaurantInfo', {
  name: 'Isola Verda',
  email: 'info@isolaverda.de'
});
</script>

<!-- Deep Nested Component -->
<script setup>
import { inject } from 'vue';

const restaurant = inject('restaurantInfo');
</script>
```

## Form Handling & Validierung

### Formular mit Validierung

```vue
<template>
  <form @submit.prevent="handleSubmit" novalidate>
    <div>
      <label for="email">E-Mail</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        @blur="validateField('email')"
      />
      <span v-if="errors.email" class="error">{{ errors.email }}</span>
    </div>

    <button type="submit" :disabled="isSubmitting">
      {{ isSubmitting ? 'Wird gesendet...' : 'Senden' }}
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  email: '',
  message: ''
});

const errors = ref({});
const isSubmitting = ref(false);

const validateField = (field) => {
  errors.value[field] = '';

  if (field === 'email') {
    if (!form.value.email) {
      errors.value.email = 'E-Mail erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
      errors.value.email = 'Ungültige E-Mail';
    }
  }
};

const handleSubmit = async () => {
  Object.keys(form.value).forEach(field => validateField(field));

  if (Object.keys(errors.value).length > 0) return;

  isSubmitting.value = true;
  try {
    // API Call
    await submitForm(form.value);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
```

## Asynchrone Operationen

### API Calls & Data Fetching

```javascript
import { ref, onMounted } from 'vue';

const data = ref(null);
const loading = ref(false);
const error = ref(null);

const fetchData = async () => {
  loading.value = true;
  try {
    const response = await fetch('/api/menu');
    data.value = await response.json();
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
```

### Mit AbortController (Clean-up)

```javascript
import { onMounted, onUnmounted, ref } from 'vue';

const controller = ref(new AbortController());

const fetchData = async () => {
  try {
    const response = await fetch('/api/menu', {
      signal: controller.value.signal
    });
    // ...
  } catch (e) {
    if (e.name !== 'AbortError') {
      console.error(e);
    }
  }
};

onMounted(() => fetchData());

onUnmounted(() => {
  controller.value.abort();
});
```

## Debugging

### Console Logging

```javascript
// Debug-Infos ausgeben
console.log('Normal:', data);
console.warn('Warnung:', message);
console.error('Fehler:', error);
console.table(arrayOfObjects);

// Vue Komponente inspizieren
console.log(this.$el);
console.log(this.$data);
```

### DevTools

```javascript
// Vue DevTools installieren
// https://devtools.vuejs.org/

// Im Browser:
// 1. Öffne DevTools (F12)
// 2. Gehe zum "Vue" Tab
// 3. Inspiziere Komponenten-Hierarchie
// 4. Ändere Props/State live
```

### Performance-Debugging

```javascript
// Komponenten Render-Zeit messen
performance.mark('render-start');
// ... Code ...
performance.mark('render-end');
performance.measure('render', 'render-start', 'render-end');

const measures = performance.getEntriesByName('render');
console.log(measures[0].duration, 'ms');
```

## Testing (Optional)

### Vitest Setup (in Zukunft)

```bash
npm install -D vitest @vue/test-utils jsdom
```

```javascript
// __tests__/MenuCard.spec.js
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MenuCard from '@/components/MenuCard.vue';

describe('MenuCard', () => {
  it('rendert das Item-Titel', () => {
    const wrapper = mount(MenuCard, {
      props: {
        item: { id: 1, name: 'Pizza', price: 12 }
      }
    });

    expect(wrapper.text()).toContain('Pizza');
  });
});
```

## Environment Variables

### .env.local anlegen

```
VITE_APP_TITLE=Isola Verda
VITE_API_BASE_URL=http://localhost:3000
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

### Im Code verwenden

```javascript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const title = import.meta.env.VITE_APP_TITLE;

console.log(`Verbindung zu: ${apiUrl}`);
```

## Performance Optimierungen

### Lazy Loading für Komponenten

```vue
<script setup>
// Nur laden wenn nötig
const HeavyComponent = defineAsyncComponent(() =>
  import('./HeavyComponent.vue')
);
</script>

<template>
  <Suspense>
    <template #default>
      <HeavyComponent />
    </template>
    <template #fallback>
      <div>Lädt...</div>
    </template>
  </Suspense>
</template>
```

### Bilder optimieren

```vue
<template>
  <!-- Responsive Images -->
  <img
    src="image.jpg"
    srcset="
      image-small.jpg 640w,
      image-medium.jpg 1024w,
      image-large.jpg 1920w
    "
    sizes="(max-width: 640px) 100vw, 50vw"
    alt="Beschreibung"
    loading="lazy"
  />
</template>
```

## Checkliste vor Deployment

- [ ] `npm run build` erfolgreich ausgeführt
- [ ] `npm run preview` getestet
- [ ] Alle Routen funktionieren
- [ ] Mobile Ansicht getestet
- [ ] Dark Mode funktioniert
- [ ] Links überprüft (keine 404er)
- [ ] Images laden
- [ ] Form-Validierung funktioniert
- [ ] Accessibility überprüft (WAVE, Lighthouse)
- [ ] SEO Meta-Tags überprüft
- [ ] Performance Score ≥ 90
- [ ] Keine Console-Fehler
- [ ] Environment Variables gesetzt

## Häufige Fehler beheben

### "Cannot find module"

```javascript
// Falsch:
import MenuCard from './components/MenuCard.vue';

// Richtig:
import MenuCard from '@/components/MenuCard.vue';
```

### Reaktivität funktioniert nicht

```javascript
// Falsch:
const user = { name: 'Max' };
user.name = 'Moritz'; // wird nicht reaktiv

// Richtig:
const user = ref({ name: 'Max' });
user.value.name = 'Moritz'; // reaktiv!

// Oder:
const user = reactive({ name: 'Max' });
user.name = 'Moritz'; // reaktiv!
```

### Props werden nicht aktualisiert

```vue
<script setup>
// Falsch: direkte Mutation
const props = defineProps({ count: Number });
props.count = 5; // ❌

// Richtig: mit Emits
const emit = defineEmits(['update:count']);
const handleClick = () => {
  emit('update:count', 5); // ✅
};
</script>
```

## Weitere Ressourcen

- [Vue 3 Docs](https://vuejs.org/)
- [Vite Docs](https://vitejs.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/)
- [Web.dev Performance](https://web.dev/)
