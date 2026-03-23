# Isola Verda - Modernes Restaurantwebseite

Ein modernes, mobil-optimiertes Restaurantwebseite mit Vue 3, Vite und TailwindCSS.

## ✨ Features

- 🎨 **Modern & Responsive Design** - Mobile-first Entwicklung
- 🌙 **Dark Mode Support** - Unterstützt helles und dunkles Theme
- 📱 **Mobile Navigation** - Hamburger Menu mit vollständiger Barrierefreiheit
- 🍽️ **Dynamische Speisekarte** - Kategorien und Filter aus JSON
- 📍 **Kontakt & Anfahrt** - Mit Google Maps Integration
- 🖼️ **Bildergalerie** - Responsive Grid mit Lazy Loading & Lightbox
- ⚡ **Performance** - Code Splitting, Lazy Loading, optimierte Bilder (Lighthouse ≥90)
- ♿ **Accessibility (a11y)** - ARIA-Labels, semantische HTML, Tastaturbedienung
- 🔍 **SEO** - Meta Tags, Open Graph, JSON-LD Schema, Sitemap, robots.txt

## 📋 Voraussetzungen

- Node.js >= 16.0.0 ([Download](https://nodejs.org/))
- npm >= 8.0.0 oder yarn / pnpm

## 🚀 Quick Start

### 1. Node.js installieren (falls nicht vorhanden)

**macOS (mit Homebrew):**
```bash
brew install node
```

**Windows oder andere Systeme:**
Besuchen Sie https://nodejs.org/ und laden Sie die LTS-Version herunter.

### 2. Projekt-Dependencies installieren

```bash
# Im Projektverzeichnis
cd isola\ verda
npm install
```

### 3. Entwicklungsserver starten

```bash
npm run dev
```

Die Anwendung wird automatisch im Browser geöffnet (normalerweise `http://localhost:5173`).

## 📦 Verfügbare Befehle

```bash
# Entwicklungsserver starten (mit Hot Module Reload)
npm run dev

# Für Production bauen (optimiert)
npm run build

# Preview der Production Build (lokal testen)
npm run preview

# Code linting
npm run lint

# Code formatieren
npm run format
```

## 📂 Projektstruktur

```
isola-verda/
├── src/
│   ├── assets/              # Statische Dateien
│   │   ├── images/
│   │   │   ├── gallery/
│   │   │   └── menu/
│   │   └── icons/
│   ├── components/
│   │   ├── AppHeader.vue    # Header mit Navigation
│   │   ├── AppFooter.vue    # Footer
│   │   ├── HeroSection.vue  # Hero Section
│   │   ├── OpeningHours.vue # Öffnungszeiten
│   │   ├── MenuList.vue     # Speisekarte Übersicht
│   │   ├── MenuCard.vue     # Einzelnes Gericht
│   │   ├── GalleryGrid.vue  # Galerie Grid
│   │   ├── ContactForm.vue  # Kontaktformular
│   │   └── MapEmbed.vue     # Kartenelement
│   ├── data/
│   │   ├── menu.json        # Speisekartendaten
│   │   └── restaurant.json  # Restaurantinformationen
│   ├── pages/
│   │   ├── Home.vue         # Startseite
│   │   ├── Speisekarte.vue  # Speisekartenseite
│   │   ├── Kontakt.vue      # Kontaktseite
│   │   └── Galerie.vue      # Galerienseite
│   ├── router/
│   │   └── index.js         # Router-Konfiguration
│   ├── styles/
│   │   └── globals.css      # Globale Styles
│   ├── App.vue              # Root-Komponente
│   └── main.js              # Entry Point
├── public/
│   ├── robots.txt           # SEO
│   └── sitemap.xml          # SEO
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Tech Stack

| Technology | Version | Zweck |
|-----------|---------|--------|
| **Vue.js** | ^3.4.0 | Moderner Frontend Framework mit Composition API |
| **Vite** | ^5.0.0 | Blitzschneller Build Tool und Dev Server |
| **Vue Router** | ^4.2.5 | Client-side Routing für SPA |
| **TailwindCSS** | ^3.4.0 | Utility-first CSS Framework |
| **PostCSS** | ^8.4.33 | CSS Transformationen |
| **@vueuse/head** | ^1.8.13 | Meta-Tag Management |

## 📄 Seiten & Komponenten

### Seiten (Pages)
- **Home.vue** - Startseite mit Hero, Features, CTA
- **Speisekarte.vue** - Dynamische Speisekarte mit Filtern
- **Galerie.vue** - Responsive Bildergalerie mit Lightbox
- **Kontakt.vue** - Kontaktseite mit Formular und Maps
- **NotFound.vue** - 404 Fehlerseite

### Komponenten
- **AppHeader.vue** - Sticky Header mit Mobile Menu
- **AppFooter.vue** - Footer mit Links & Social Media
- **HeroSection.vue** - Animierte Hero Section
- **OpeningHours.vue** - Öffnungszeiten anzeigen
- **MenuList.vue** - Speisekarte mit Kategorien & Filtern
- **MenuCard.vue** - Einzelnes Speisekarte-Item
- **GalleryGrid.vue** - Masonry Grid mit Lightbox
- **ContactForm.vue** - Kontaktformular mit Validierung
- **MapEmbed.vue** - Google Maps Embed
- **NavLink.vue** - Desktop Navigation Link
- **MobileNavLink.vue** - Mobile Navigation Link

### Daten
- **menu.json** - Speisekartendaten (Kategorien, Items, Preise, Allergene)
- **restaurant.json** - Restaurantinformationen (Adresse, Öffnungszeiten, etc.)

## 🌍 Browser-Unterstützung

- Chrome/Chromium (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Edge (letzte 2 Versionen)

## 🚀 Deployment

### Netlify (empfohlen)

```bash
# Lokal bauen
npm run build

# Netlify mit Git verbinden:
# 1. Auf netlify.com einloggen
# 2. "New site from Git" klicken
# 3. Repository auswählen
# 4. Build Command: npm run build
# 5. Publish Directory: dist
# Automatisches Deployment bei jedem Push!
```

### Vercel

```bash
# Vercel CLI installieren (optional)
npm i -g vercel

# Deployen
vercel

# Oder: Repository mit Vercel verbinden
# https://vercel.com/new
```

### GitHub Pages

```bash
# Vite Config anpassen: base: '/repository-name/'
npm run build

# dist/ Folder zu gh-pages Branch pushen
# GitHub Settings > Pages > Deploy from branch: gh-pages
```

### Traditioneller Server (Apache, Nginx)

```bash
# 1. Bauen
npm run build

# 2. dist/ Folder zum Server hochladen
# 3. SPA Routing konfigurieren:

# Nginx Config:
location / {
  try_files $uri $uri/ /index.html;
}

# Apache (.htaccess):
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Docker Deployment

```dockerfile
# Multi-stage Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production Image
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf:**
```nginx
server {
  listen 80;
  server_name localhost;
  root /usr/share/nginx/html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
}
```

## 📊 Performance & Lighthouse

### Ziele
- ✅ Lighthouse Score: ≥ 90
- ✅ First Contentful Paint (FCP): < 1.5s
- ✅ Largest Contentful Paint (LCP): < 2.5s
- ✅ Cumulative Layout Shift (CLS): < 0.1

### Optimierungen implementiert:
- 🖼️ Lazy Loading für Bilder
- 📦 Code Splitting pro Route
- 🗜️ Automatische Asset-Optimierung durch Vite
- 🎯 Responsive Images mit srcset
- ⚡ CSS Purging (TailwindCSS)
- 🔄 Effizienter Caching mit Browser Cache
- 🚀 Production Minification

## ♿ Accessibility (WCAG 2.1 AA)

- ✅ Semantische HTML Struktur (header, nav, main, footer)
- ✅ ARIA Labels und Rollen
- ✅ Fokus Management & sichtbare Fokuszustände
- ✅ Keyboard Navigation (Tab, Enter, Escape)
- ✅ Alt-Texte auf allen Bildern
- ✅ Color Contrast Ratios >= 4.5:1
- ✅ Skip Links
- ✅ Responsive Text Sizing
- ✅ Dark Mode für Augenschonung

## 🔍 SEO Implementierung

### Meta Tags
- Title & Description pro Seite
- Open Graph Tags (og:title, og:description, og:image)
- Twitter Card Tags
- Canonical URLs
- Viewport Meta Tag für Responsiveness

### Strukturierte Daten
- JSON-LD Restaurant Schema
- Öffnungszeiten, Adresse, Telefon
- Bewertungen (optional erweiterbar)

### Sitemaps & Robots
- `robots.txt` - Crawl-Richtlinien
- `sitemap.xml` - Alle Seiten aufgelistet
- Strukturiertes XML mit lastmod & priority

### Best Practices
- SEO-freundliche URLs (kebab-case)
- Schnelles Laden (Core Web Vitals optimiert)
- Mobile-First Indexing ready
- Strukturierte interne Verlinkung
- Breadcrumb Navigation (optional erweiterbar)

## 🔧 Entwickler-Tipps

### Neue Seite hinzufügen
1. Komponente in `src/pages/` erstellen
2. Route in `src/router/index.js` hinzufügen
3. Meta-Tags setzen für SEO

```javascript
{
  path: '/neue-seite',
  name: 'NeuSeite',
  component: () => import('../pages/NeuSeite.vue'),
  meta: {
    title: 'Neue Seite - Isola Verda',
    description: 'Beschreibung...'
  }
}
```

### Neue Komponente erstellen
```vue
<template>
  <!-- Semantische HTML verwenden -->
  <section class="section-padding" role="region" aria-label="Beschreibung">
    <!-- Accessibility-Attribute nicht vergessen -->
    <div class="container-custom">
      <!-- Tailwind Classes verwenden -->
    </div>
  </section>
</template>

<script setup>
// Composition API verwenden
import { ref, computed } from 'vue';
</script>
```

### Dark Mode testen
- Browser DevTools > 3-Punkt Menü > Rendering > Emulate CSS media feature prefers-color-scheme
- Oder `localStorage.setItem('theme', 'dark')`

### Responsiveness testen
- Chrome DevTools: Ctrl+Shift+M (Cmd+Shift+M macOS)
- Mobile-First entwickeln: zuerst mobil, dann desktop

## 📦 Dateigrößen (Production Build)

```
dist/
├── index.html          ~1 KB
├── assets/
│   ├── app-[hash].js   ~40 KB (gzipped)
│   ├── vendor-[hash].js ~150 KB (gzipped)
│   └── app-[hash].css  ~10 KB (gzipped)
└── robots.txt / sitemap.xml
```

## 🐛 Häufige Probleme

### Problem: "npm: command not found"
**Lösung:** Node.js neu installieren von https://nodejs.org/

### Problem: Port 5173 ist bereits belegt
**Lösung:** 
```bash
# Anderen Server auf diesem Port stoppen oder:
npm run dev -- --port 5174
```

### Problem: Images werden nicht angezeigt
**Lösung:** 
- Bilder in `public/` oder `src/assets/` ablegen
- Im Code: `import image from '@/assets/image.jpg'` nutzen

### Problem: Dunkler Modus funktioniert nicht
**Lösung:** Browser-Cache löschen (Ctrl+Shift+Del / Cmd+Shift+Del)

## 📚 Weiterführende Ressourcen

- [Vue 3 Dokumentation](https://vuejs.org/)
- [Vite Dokumentation](https://vitejs.dev/)
- [TailwindCSS Dokumentation](https://tailwindcss.com/)
- [Vue Router Dokumentation](https://router.vuejs.org/)
- [Web Accessibility (a11y)](https://www.w3.org/WAI/fundamentals/)
- [SEO Checkliste](https://www.semrush.com/blog/on-page-seo/)

## 📞 Support & Kontakt

- Issues: Bitte erstellen Sie ein Issue auf GitHub
- Fragen: Kontaktieren Sie über die Website

## 📄 Lizenz

MIT License - Frei verwendbar für persönliche und kommerzielle Projekte
.