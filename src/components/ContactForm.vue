<template>
  <div class="card p-6 sm:p-8">
    <h3 class="text-2xl font-bold mb-6">Kontaktformular</h3>

    <form @submit.prevent="handleSubmit" class="space-y-5" novalidate>
      <!-- Name -->
      <div>
        <label for="name" class="block text-sm font-medium mb-2">
          Name <span class="text-red-600" aria-label="erforderlich">*</span>
        </label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          class="input-field"
          placeholder="Ihr Name"
          required
          aria-required="true"
          @blur="validateField('name')"
        />
        <span v-if="errors.name" class="text-red-600 text-sm mt-1 block" role="alert">
          {{ errors.name }}
        </span>
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium mb-2">
          E-Mail <span class="text-red-600" aria-label="erforderlich">*</span>
        </label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          class="input-field"
          placeholder="ihre.email@example.com"
          required
          aria-required="true"
          @blur="validateField('email')"
        />
        <span v-if="errors.email" class="text-red-600 text-sm mt-1 block" role="alert">
          {{ errors.email }}
        </span>
      </div>

      <!-- Phone (optional) -->
      <div>
        <label for="phone" class="block text-sm font-medium mb-2">Telefon (optional)</label>
        <input
          id="phone"
          v-model="formData.phone"
          type="tel"
          class="input-field"
          placeholder="+49 (0)123 456789"
        />
      </div>

      <!-- Subject -->
      <div>
        <label for="subject" class="block text-sm font-medium mb-2">
          Betreff <span class="text-red-600" aria-label="erforderlich">*</span>
        </label>
        <input
          id="subject"
          v-model="formData.subject"
          type="text"
          class="input-field"
          placeholder="Worum geht es?"
          required
          aria-required="true"
          @blur="validateField('subject')"
        />
        <span v-if="errors.subject" class="text-red-600 text-sm mt-1 block" role="alert">
          {{ errors.subject }}
        </span>
      </div>

      <!-- Message -->
      <div>
        <label for="message" class="block text-sm font-medium mb-2">
          Nachricht <span class="text-red-600" aria-label="erforderlich">*</span>
        </label>
        <textarea
          id="message"
          v-model="formData.message"
          class="input-field resize-none"
          rows="5"
          placeholder="Ihre Nachricht..."
          required
          aria-required="true"
          @blur="validateField('message')"
        />
        <span v-if="errors.message" class="text-red-600 text-sm mt-1 block" role="alert">
          {{ errors.message }}
        </span>
      </div>

      <!-- Privacy Agreement -->
      <div class="flex items-start gap-3">
        <input
          id="privacy"
          v-model="formData.privacy"
          type="checkbox"
          class="mt-1 accent-primary-600"
          required
          aria-required="true"
        />
        <label for="privacy" class="text-sm text-slate-600 dark:text-slate-400">
          Ich akzeptiere die
          <a href="#" class="text-primary-600 hover:underline">Datenschutzerklärung</a>
          <span class="text-red-600" aria-label="erforderlich">*</span>
        </label>
      </div>
      <span v-if="errors.privacy" class="text-red-600 text-sm block" role="alert">
        {{ errors.privacy }}
      </span>

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        :aria-label="isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'"
      >
        <span v-if="!isSubmitting">Nachricht senden</span>
        <span v-else>Wird gesendet...</span>
      </button>

      <!-- Success Message -->
      <transition name="fade">
        <div
          v-if="submitSuccess"
          class="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 rounded-lg"
          role="status"
        >
          ✓ Vielen Dank! Ihre Nachricht wurde erfolgreich versendet. Wir melden uns bald bei Ihnen.
        </div>
      </transition>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacy: false,
});

const errors = ref({});
const isSubmitting = ref(false);
const submitSuccess = ref(false);

const validateField = (field) => {
  errors.value[field] = '';

  switch (field) {
    case 'name':
      if (!formData.value.name.trim()) {
        errors.value.name = 'Bitte geben Sie Ihren Namen ein';
      } else if (formData.value.name.trim().length < 2) {
        errors.value.name = 'Der Name muss mindestens 2 Zeichen lang sein';
      }
      break;

    case 'email':
      if (!formData.value.email.trim()) {
        errors.value.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
        errors.value.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
      }
      break;

    case 'subject':
      if (!formData.value.subject.trim()) {
        errors.value.subject = 'Bitte geben Sie einen Betreff ein';
      } else if (formData.value.subject.trim().length < 5) {
        errors.value.subject = 'Der Betreff muss mindestens 5 Zeichen lang sein';
      }
      break;

    case 'message':
      if (!formData.value.message.trim()) {
        errors.value.message = 'Bitte geben Sie eine Nachricht ein';
      } else if (formData.value.message.trim().length < 10) {
        errors.value.message = 'Die Nachricht muss mindestens 10 Zeichen lang sein';
      }
      break;

    case 'privacy':
      if (!formData.value.privacy) {
        errors.value.privacy = 'Bitte akzeptieren Sie die Datenschutzerklärung';
      }
      break;
  }
};

const validateForm = () => {
  Object.keys(formData.value).forEach((field) => {
    validateField(field);
  });
  return Object.keys(errors.value).length === 0;
};

const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData.value);

    submitSuccess.value = true;

    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      privacy: false,
    };

    // Hide success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false;
    }, 5000);
  } catch (error) {
    console.error('Form submission error:', error);
  } finally {
    isSubmitting.value = false;
  }
};
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
