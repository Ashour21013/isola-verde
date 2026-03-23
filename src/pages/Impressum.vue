<template>
  <main class="overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white overflow-hidden">
      <div class="container-custom text-center">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">Impressum & AGB</h1>
        <p class="text-lg text-slate-200">
          Rechtliche Informationen zu Isola Verda
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="section-padding bg-white dark:bg-slate-900">
      <div class="container-custom max-w-3xl space-y-8">
        <!-- IMPRESSUM -->
        <section>
          <h2 class="text-3xl font-bold mb-6 pb-4 border-b-2 border-primary-600">Impressum</h2>

          <div class="space-y-6">
            <!-- Angaben gemäß § 5 TMG -->
            <div>
              <h3 class="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Angaben gemäß § 5 TMG</h3>
              <div class="space-y-2 text-slate-600 dark:text-slate-300">
                <p><strong>Name:</strong> {{ restaurantData.name }}</p>
                <p><strong>Anschrift:</strong><br/>
                {{ restaurantData.address }}</p>
                <p><strong>Telefon:</strong> <a :href="`tel:${restaurantData.phone}`" class="text-primary-600 hover:underline">{{ restaurantData.phone }}</a></p>
              </div>
            </div>

            <!-- Geschäftsführer -->
            <div>
              <h3 class="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Geschäftsführer</h3>
              <p class="text-slate-600 dark:text-slate-300">Max Mustermann</p>
            </div>

            <!-- Haftungsausschluss -->
            <div>
              <h3 class="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Haftungsausschluss</h3>
              <div class="space-y-3 text-slate-600 dark:text-slate-300 text-sm">
                <p>
                  Die Inhalte unserer Website wurden mit großer Sorgfalt erstellt. 
                  Für die Korrektheit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.
                </p>
                <p>
                  Haftungsansprüche gegen uns für Schäden, die aus der Nutzung der Website entstehen, 
                  sind ausgeschlossen, soweit der Schaden nicht durch Vorsatz oder grobe Fahrlässigkeit entstanden ist.
                </p>
              </div>
            </div>

            <!-- Haftung für Links -->
            <div>
              <h3 class="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Haftung für externe Links</h3>
              <div class="space-y-3 text-slate-600 dark:text-slate-300 text-sm">
                <p>
                  Unsere Website enthält möglicherweise Links zu externen Websites. 
                  Für den Inhalt dieser externen Seiten sind wir nicht verantwortlich.
                </p>
                <p>
                  Der Betreiber der verlinkten Seiten ist allein verantwortlich für die dort angebotenen Inhalte.
                </p>
              </div>
            </div>

            <!-- Urheberrechte -->
            <div>
              <h3 class="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Urheberrechte</h3>
              <p class="text-slate-600 dark:text-slate-300 text-sm">
                Die Inhalte dieser Website sind urheberrechtlich geschützt. 
                Jede Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Nutzung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung.
              </p>
            </div>
          </div>
        </section>

        <!-- AGB -->
        <section>
          <h2 class="text-3xl font-bold mb-6 pb-4 border-b-2 border-primary-600">Allgemeine Geschäftsbedingungen (AGB)</h2>

          <div class="space-y-6">
            <!-- 1. Geltungsbereich -->
            <div>
              <h3 class="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">1. Geltungsbereich</h3>
              <p class="text-slate-600 dark:text-slate-300 text-sm">
                Diese AGB gelten für alle Reservierungen und Bestellungen über unsere Website.
              </p>
            </div>

            <!-- 2. Reservierungen -->
            <div>
              <h3 class="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">2. Reservierungen</h3>
              <div class="space-y-3 text-slate-600 dark:text-slate-300 text-sm">
                <p>
                  <strong>a) Tischreservierungen:</strong> Reservierungen sind kostenlos und müssen spätestens 48 Stunden vor dem gewünschten Termin erfolgen.
                </p>
                <p>
                  <strong>b) Reservierungsbedingungen:</strong> Wir behhalten uns das Recht vor, eine Reservierung abzulehnen, falls diese Bedingungen nicht erfüllt sind.
                </p>
                <p>
                  <strong>c) Stornierung:</strong> Stornierungen müssen spätestens 24 Stunden vorher erfolgen.
                </p>
              </div>
            </div>

            <!-- 3. Preise & Zahlungsbedingungen -->
            <div>
              <h3 class="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">3. Preise & Zahlungsbedingungen</h3>
              <div class="space-y-3 text-slate-600 dark:text-slate-300 text-sm">
                <p>
                  Alle Preise sind in EUR und inklusive Mehrwertsteuer angegeben.
                </p>
                <p>
                  Zahlungen müssen bar oder mit EC/Kreditkarte erfolgen. Online-Zahlungen erfolgen über sichere Zahlungsmethoden.
                </p>
              </div>
            </div>

            <!-- 4. Haftung -->
            <div>
              <h3 class="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">4. Haftung</h3>
              <p class="text-slate-600 dark:text-slate-300 text-sm">
                Wir haften nicht für Schäden, die durch Ihr Verhalten oder Handeln entstehen. 
                Unsere Haftung ist auf direkte, unmittelbare Schäden begrenzt.
              </p>
            </div>

            <!-- 5. Änderungen -->
            <div>
              <h3 class="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">5. Änderungen von AGB</h3>
              <p class="text-slate-600 dark:text-slate-300 text-sm">
                Wir behalten uns das Recht vor, diese AGB jederzeit zu ändern. 
                Änderungen werden auf dieser Seite veröffentlicht.
              </p>
            </div>

            <!-- 6. Geltend Recht -->
            <div>
              <h3 class="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">6. Geltend Recht & Gerichtsstand</h3>
              <div class="space-y-3 text-slate-600 dark:text-slate-300 text-sm">
                <p>
                  Diese AGB unterliegen den Gesetzen der Republik Österreich.
                </p>
                <p>
                  Gerichtsstand für alle Streitigkeiten ist Wien, Österreich.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup>
import restaurantData from '@/data/restaurant.json';
</script>
