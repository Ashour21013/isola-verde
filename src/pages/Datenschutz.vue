<template>
  <main class="overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white overflow-hidden">
      <div class="container-custom text-center">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">Datenschutzerklärung</h1>
        <p class="text-lg text-slate-200">
          Datenschutz ist uns wichtig. Lesen Sie, wie wir Ihre Daten schützen.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="section-padding bg-white dark:bg-slate-900">
      <div class="container-custom max-w-3xl space-y-8">
        <!-- Last Updated -->
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p class="text-sm text-blue-900 dark:text-blue-200">
            <strong>Zuletzt aktualisiert:</strong> 23. März 2026
          </p>
        </div>

        <!-- 1. Verantwortlicher -->
        <section>
          <h2 class="text-3xl font-bold mb-4">1. Verantwortlicher</h2>
          <div class="space-y-2 text-slate-600 dark:text-slate-300">
            <p><strong>{{ restaurantData.name }}</strong></p>
            <p>{{ restaurantData.address }}</p>
            <p>Telefon: <a :href="`tel:${restaurantData.phone}`" class="text-primary-600 hover:underline">{{ restaurantData.phone }}</a></p>
          </div>
        </section>

        <!-- 2. Arten der Datenverarbeitung -->
        <section>
          <h2 class="text-3xl font-bold mb-4">2. Arten der Datenverarbeitung</h2>
          <div class="space-y-4 text-slate-600 dark:text-slate-300">
            <div>
              <h3 class="font-semibold text-lg text-slate-900 dark:text-white mb-2">Automatisch erfasste Daten:</h3>
              <ul class="list-disc list-inside space-y-1 ml-2">
                <li>IP-Adresse</li>
                <li>Browser-Typ und -Version</li>
                <li>Betriebssystem</li>
                <li>Referrer-URL</li>
                <li>Besuchte Seiten und Verweilzeiten</li>
                <li>Zeitstempel von Besuchen</li>
              </ul>
            </div>

            <div>
              <h3 class="font-semibold text-lg text-slate-900 dark:text-white mb-2">Von Ihnen bereitgestellte Daten:</h3>
              <ul class="list-disc list-inside space-y-1 ml-2">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (optional)</li>
                <li>Nachrichteninhalt (über Kontaktformular)</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 3. Rechtsgrundlage -->
        <section>
          <h2 class="text-3xl font-bold mb-4">3. Rechtsgrundlage</h2>
          <div class="space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              <strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Die Verarbeitung erfolgt mit Ihrer Zustimmung (z.B. für Cookies).
            </p>
            <p>
              <strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Die Verarbeitung erfolgt zur Wahrung unserer berechtigten Interessen (z.B. Sicherheit, Marketing).
            </p>
            <p>
              <strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Die Verarbeitung ist für die Erfüllung eines Vertrags erforderlich (z.B. Reservierungen).
            </p>
          </div>
        </section>

        <!-- 4. Cookies -->
        <section>
          <h2 class="text-3xl font-bold mb-4">4. Cookies</h2>
          <div class="space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden.
            </p>

            <div>
              <h3 class="font-semibold text-lg text-slate-900 dark:text-white mb-2">Arten von Cookies:</h3>
              <ul class="space-y-3">
                <li>
                  <strong>Notwendige Cookies:</strong> Erforderlich für die Funktionalität der Website (z.B. Sitzungsverwaltung)
                </li>
                <li>
                  <strong>Funktionale Cookies:</strong> Merken Sie sich Ihre Präferenzen (z.B. Dark Mode)
                </li>
                <li>
                  <strong>Analyse-Cookies:</strong> Helfen uns, die Website zu verbessern (mit Ihrer Zustimmung)
                </li>
                <li>
                  <strong>Marketing-Cookies:</strong> Verwendet für Werbung (mit Ihrer Zustimmung)
                </li>
              </ul>
            </div>

            <p>
              Sie können Cookies in Ihren Browser-Einstellungen verwalten oder ablehnen. Beachten Sie, dass das Deaktivieren von Cookies die Funktionalität beeinträchtigen kann.
            </p>
          </div>
        </section>

        <!-- 5. Externe Dienste -->
        <section>
          <h2 class="text-3xl font-bold mb-4">5. Externe Dienste</h2>
          <div class="space-y-4 text-slate-600 dark:text-slate-300">
            <div>
              <h3 class="font-semibold text-lg text-slate-900 dark:text-white mb-2">Google Maps:</h3>
              <p>
                Unsere Website integriert Google Maps. Dabei werden Ihre IP-Adresse und möglicherweise weitere Informationen an Google übermittelt.
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:underline">
                  Google Datenschutzerklärung
                </a>
              </p>
            </div>
          </div>
        </section>

        <!-- 6. Ihre Rechte -->
        <section>
          <h2 class="text-3xl font-bold mb-4">6. Ihre Rechte (DSGVO & Österreich)</h2>
          <div class="space-y-2 text-slate-600 dark:text-slate-300">
            <ul class="list-disc list-inside space-y-2">
              <li><strong>Auskunftsrecht:</strong> Sie können jederzeit erfahren, welche Daten wir von Ihnen speichern</li>
              <li><strong>Berichtigungsrecht:</strong> Sie können fehlerhafte Daten korrigieren lassen</li>
              <li><strong>Löschungsrecht:</strong> Sie können Ihre Daten löschen lassen ("Recht auf Vergessenwerden")</li>
              <li><strong>Einschränkungsrecht:</strong> Sie können die Verarbeitung einschränken</li>
              <li><strong>Datenportabilität:</strong> Sie können Ihre Daten in strukturierter Form erhalten</li>
              <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung widersprechen</li>
              <li><strong>Widerrufsrecht:</strong> Sie können jederzeit Ihre Zustimmung widerrufen</li>
            </ul>
          </div>
        </section>

        <!-- 7. Kontakt -->
        <section>
          <h2 class="text-3xl font-bold mb-4">7. Kontakt & Datenschutzbeauftrager</h2>
          <div class="space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              Um eine dieser Rechte auszuüben oder bei Fragen zum Datenschutz, kontaktieren Sie uns:
            </p>
            <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg space-y-2">
              <p><strong>Email:</strong> <a href="mailto:datenschutz@isolaverda.de" class="text-primary-600 hover:underline">datenschutz@isolaverda.de</a></p>
              <p><strong>Adresse:</strong> Isola Verda, Hauptstraße 42, 80331 München</p>
              <p><strong>Telefon:</strong> <a :href="`tel:${restaurantData.phone}`" class="text-primary-600 hover:underline">{{ restaurantData.phone }}</a></p>
            </div>
          </div>
        </section>

        <!-- 8. Beschwerde -->
        <section>
          <h2 class="text-3xl font-bold mb-4">8. Recht auf Beschwerde</h2>
          <div class="space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              Sie haben das Recht, eine Beschwerde bei einer Datenschutzbehörde einzureichen, besonders in dem Land, in dem Sie wohnen, arbeiten oder wo die mutmaßliche Verletzung stattgefunden hat.
            </p>
            <p>
              <strong>Österreichische Datenschutzbehörde:</strong><br/>
              Österreichische Datenschutzbehörde (DSB)<br/>
              Wickenburggasse 8<br/>
              1080 Wien<br/>
              <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:underline">
                www.dsb.gv.at
              </a>
            </p>
          </div>
        </section>

        <!-- 9. Änderungen -->
        <section>
          <h2 class="text-3xl font-bold mb-4">9. Änderungen dieser Datenschutzerklärung</h2>
          <div class="space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu aktualisieren. Die aktuelle Version finden Sie immer auf dieser Seite.
            </p>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import restaurantData from '@/data/restaurant.json';
</script>
