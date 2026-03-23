📦 ISOLA VERDA - VOLLSTÄNDIGE DATEISTRUKTUR

```
isola verda/
│
├── 📄 ROOT-DATEIEN
│   ├── package.json                 # Dependencies & Scripts
│   ├── vite.config.js               # Vite Konfiguration
│   ├── tailwind.config.js           # TailwindCSS Konfiguration
│   ├── postcss.config.js            # PostCSS Konfiguration
│   ├── index.html                   # HTML Entry Point (mit SEO Meta-Tags)
│   ├── .gitignore                   # Git ignore rules
│   ├── .env.example                 # Environment Variables Template
│   │
│   └── 📚 DOKUMENTATION
│       ├── README.md                # Hauptdokumentation (LESEN!)
│       ├── QUICKSTART.md            # Quick Start Anleitung
│       └── DEVELOPMENT.md           # Developer Guide
│
├── 📁 src/                          # HAUPTPROJEKTVERZEICHNIS
│   │
│   ├── 🎯 main.js                  # Vue App Entry Point
│   ├── 🎨 App.vue                  # Root-Komponente (Header, Router, Footer)
│   │
│   ├── 📁 components/              # WIEDERVERWENDBARE KOMPONENTEN
│   │   ├── AppHeader.vue           # Sticky Header mit Navigation
│   │   │                           # - Desktop Menu
│   │   │                           # - Mobile Hamburger Menu
│   │   │                           # - Dark Mode Toggle
│   │   │
│   │   ├── AppFooter.vue           # Footer-Komponente
│   │   │                           # - Kontaktinfo
│   │   │                           # - Social Media Links
│   │   │                           # - Navigation Links
│   │   │
│   │   ├── HeroSection.vue         # Große Hero Section
│   │   │                           # - Animated Background
│   │   │                           # - CTA Buttons
│   │   │
│   │   ├── OpeningHours.vue        # Öffnungszeiten Anzeige
│   │   │                           # - Tabellenlayout
│   │   │                           # - Feiertags-Hinweis
│   │   │
│   │   ├── MenuCard.vue            # Einzelnes Speisekarte-Item
│   │   │                           # - Bild
│   │   │                           # - Titel, Beschreibung, Preis
│   │   │                           # - Vegetarisch/Vegan Badge
│   │   │                           # - Allergene
│   │   │
│   │   ├── MenuList.vue            # Speisekarte Overview
│   │   │                           # - Kategorien
│   │   │                           # - Filter (vegetarisch/vegan)
│   │   │                           # - Grid von MenuCard
│   │   │
│   │   ├── GalleryGrid.vue         # Responsive Bildergalerie
│   │   │                           # - Masonry Layout
│   │   │                           # - Lightbox Modal
│   │   │                           # - Keyboard Navigation
│   │   │
│   │   ├── ContactForm.vue         # Kontaktformular
│   │   │                           # - Name, Email, Message
│   │   │                           # - Client-side Validierung
│   │   │                           # - Success/Error Messages
│   │   │
│   │   ├── MapEmbed.vue            # Google Maps Embed
│   │   │                           # - Responsive iframe
│   │   │                           # - Lazy Loading
│   │   │
│   │   ├── NavLink.vue             # Desktop Navigation Link
│   │   │                           # - Router Link
│   │   │                           # - Hover/Active States
│   │   │
│   │   └── MobileNavLink.vue       # Mobile Navigation Link
│   │                               # - Für Hamburger Menu
│   │
│   ├── 📁 pages/                   # SEITEN/VIEWS
│   │   ├── Home.vue                # 🏠 Startseite
│   │   │                           # - Hero Section
│   │   │                           # - About Us
│   │   │                           # - Opening Hours
│   │   │                           # - Features
│   │   │                           # - CTA Section
│   │   │
│   │   ├── Speisekarte.vue         # 🍽️ Menü Seite
│   │   │                           # - MenuList Komponente verwenden
│   │   │
│   │   ├── Galerie.vue             # 🖼️ Galerie Seite
│   │   │                           # - GalleryGrid Komponente verwenden
│   │   │
│   │   ├── Kontakt.vue             # 📍 Kontakt Seite
│   │   │                           # - Kontaktinfo (Adresse, Tel, Email)
│   │   │                           # - Google Maps
│   │   │                           # - ContactForm
│   │   │                           # - Öffnungszeiten
│   │   │                           # - Anfahrt Info
│   │   │
│   │   └── NotFound.vue            # 404 Fehlerseite
│   │
│   ├── 📁 router/                  # ROUTING
│   │   └── index.js                # Vue Router Konfiguration
│   │                               # - Alle Routes definiert
│   │                               # - Meta-Tags für SEO
│   │                               # - Lazy Loading
│   │
│   ├── 📁 styles/                  # STYLING
│   │   └── globals.css             # Globale Styles
│   │                               # - @tailwind imports
│   │                               # - @layer components
│   │                               # - Custom Classes (btn-primary, card, etc.)
│   │                               # - Utilities
│   │
│   ├── 📁 data/                    # STATISCHE DATEN
│   │   ├── menu.json               # Speisekartendaten
│   │   │                           # - 4 Kategorien
│   │   │                           # - ~18 Items mit Details
│   │   │                           # - Preise, Allergene
│   │   │                           # - Vegetarisch/Vegan Flags
│   │   │
│   │   └── restaurant.json         # Restaurantinformationen
│   │                               # - Name, Adresse, Kontakt
│   │                               # - Öffnungszeiten
│   │                               # - Social Media
│   │                               # - Google Maps URL
│   │
│   └── 📁 assets/                  # BILDER & ICONS
│       ├── images/
│       │   ├── gallery/            # Galeriebilder
│       │   └── menu/               # Speisekartbilder
│       └── icons/                  # SVG Icons (falls nötig)
│
├── 📁 public/                      # STATISCHE PUBLIC FILES
│   ├── robots.txt                  # SEO - Crawl Richtlinien
│   ├── sitemap.xml                 # SEO - Sitemap
│   └── manifest.json               # PWA - Web App Manifest
│
├── 🚀 NODE_MODULES (nach npm install)
│   └── [Alle Dependencies]
│
└── 📦 dist/ (nach npm run build)
    ├── index.html                  # Optimiertes HTML
    └── assets/
        ├── app-[hash].js           # Minified Vue App
        ├── vendor-[hash].js        # Dependencies
        └── style-[hash].css        # Minified CSS
```

---

## 📊 STATISTIK

```
Components:     10+ wiederverwendbare Komponenten
Pages:          5 Seiten (Home, Speisekarte, Galerie, Kontakt, 404)
Routes:         4 öffentliche Routes + 404
Data:           2 JSON Dateien (Menu + Restaurant Info)
CSS:            TailwindCSS + Custom Components
Komponenten:    ~1200 Zeilen Vue 3 Code
Styling:        ~150 Zeilen TailwindCSS/CSS
JSON Data:      ~400 Zeilen Menü- und Infodaten
```

---

## 🎯 QUICK FILE GUIDE

### "Ich will die Speisekarte ändern"
→ Bearbeite: `src/data/menu.json`

### "Ich will Restaurantinfos ändern"
→ Bearbeite: `src/data/restaurant.json`

### "Ich will eine neue Seite hinzufügen"
→ Erstelle: `src/pages/NeuSeite.vue`
→ Registriere Route: `src/router/index.js`

### "Ich will eine neue Komponente hinzufügen"
→ Erstelle: `src/components/NewComponent.vue`
→ Importiere Sie: in Pages/Components

### "Ich will Styling ändern"
→ Bearbeite: `tailwind.config.js` oder `src/styles/globals.css`

### "Ich will Header/Footer ändern"
→ Bearbeite: `src/components/AppHeader.vue` oder `AppFooter.vue`

### "Ich will Dark Mode ausschalten"
→ Bearbeite: `src/components/AppHeader.vue` (Dark Mode Toggle)
→ Oder: `tailwind.config.js` (darkMode: false)

---

## 🔗 ABHÄNGIGKEITEN ZWISCHEN DATEIEN

```
index.html
    ↓
src/main.js
    ↓
src/App.vue
    ├── src/components/AppHeader.vue
    ├── src/router/index.js
    │   ├── src/pages/Home.vue
    │   │   ├── src/components/HeroSection.vue
    │   │   ├── src/components/OpeningHours.vue
    │   │   └── src/data/restaurant.json
    │   ├── src/pages/Speisekarte.vue
    │   │   ├── src/components/MenuList.vue
    │   │   │   ├── src/components/MenuCard.vue
    │   │   │   └── src/data/menu.json
    │   ├── src/pages/Galerie.vue
    │   │   └── src/components/GalleryGrid.vue
    │   └── src/pages/Kontakt.vue
    │       ├── src/components/MapEmbed.vue
    │       ├── src/components/ContactForm.vue
    │       └── src/data/restaurant.json
    └── src/components/AppFooter.vue
```

---

## 💾 DATEIGRÖSSEN (UNGEFÄHR)

```
package.json              ~1 KB
vite.config.js            ~1 KB
tailwind.config.js        ~2 KB
src/App.vue               ~1 KB
src/main.js              <1 KB
src/router/index.js       ~2 KB
src/styles/globals.css    ~4 KB

Components (insgesamt):   ~25 KB
  - AppHeader.vue         ~2.5 KB
  - AppFooter.vue         ~3 KB
  - HeroSection.vue       ~2 KB
  - MenuCard.vue          ~2 KB
  - MenuList.vue          ~1.5 KB
  - GalleryGrid.vue       ~3 KB
  - ContactForm.vue       ~3 KB
  - ... etc

Pages (insgesamt):        ~12 KB
  - Home.vue              ~4 KB
  - Speisekarte.vue      <1 KB
  - Galerie.vue          <1 KB
  - Kontakt.vue           ~4 KB

Data (insgesamt):         ~15 KB
  - menu.json             ~12 KB
  - restaurant.json       ~2 KB

Docs (insgesamt):         ~30 KB
  - README.md             ~12 KB
  - DEVELOPMENT.md        ~15 KB
  - QUICKSTART.md         ~3 KB
```

---

✅ **ALLES IST READY TO USE - HAPPY CODING! 🚀**
