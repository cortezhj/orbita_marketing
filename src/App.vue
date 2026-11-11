<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BrandsSection from './components/BrandsSection.vue'
import CategoriesSection from './components/CategoriesSection.vue'
import FooterSection from './components/FooterSection.vue'
import HeroSection from './components/HeroSection.vue'
import LocationSection from './components/LocationSection.vue'
import NavbarHeader from './components/NavbarHeader.vue'
import PrivacyPolicyModal from './components/PrivacyPolicyModal.vue'
import { buildWhatsAppUrl, siteConfig } from './config/siteConfig'

const showPrivacyPolicy = ref(false)
const floatingWhatsappUrl = buildWhatsAppUrl(siteConfig.defaultWhatsappMessages.heroPrimary)

function openPrivacyPolicy() {
  showPrivacyPolicy.value = true
  window.history.pushState({}, '', '/politica-de-privacidad')
}

function closePrivacyPolicy() {
  showPrivacyPolicy.value = false
  if (window.location.pathname === '/politica-de-privacidad') {
    window.history.pushState({}, '', '/')
  }
}

onMounted(() => {
  if (window.location.pathname === '/politica-de-privacidad') {
    showPrivacyPolicy.value = true
  }

  window.addEventListener('popstate', () => {
    showPrivacyPolicy.value = window.location.pathname === '/politica-de-privacidad'
  })
})
</script>

<template>
  <!-- min-h-dvh and bottom padding prevent Meta In-App Browser bottom toolbar from covering content -->
  <div class="min-h-dvh bg-white pb-20 text-[#121417] sm:pb-0">
    <!-- 1. Header (Logo, dirección corta, teléfono y WhatsApp) -->
    <NavbarHeader />

    <!-- Main Content -->
    <main>
      <!-- 2. Hero Section -->
      <HeroSection />

      <!-- 3. Marcas que distribuyen (Logotipos de marcas reconocidas) -->
      <BrandsSection />

      <!-- 4. Nuestros Productos -->
      <CategoriesSection />

      <!-- 5. Ubicación y cómo llegar (Mapa interactivo y fotos del local comercial) -->
      <LocationSection />
    </main>

    <!-- 7. Footer (Datos legales, RIF/ID fiscal, redes sociales y Política de Privacidad) -->
    <FooterSection @open-privacy="openPrivacyPolicy" />

    <!-- Modal / Ruta de Política de Privacidad (/politica-de-privacidad) -->
    <PrivacyPolicyModal :open="showPrivacyPolicy" @close="closePrivacyPolicy" />

    <!-- Floating Quick-Action WhatsApp Button (#f6892c Brand Orange, Safe-area offset for Meta In-App Browser) -->
    <a
      :href="floatingWhatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      class="fixed right-4 bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] z-40 inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-[#f6892c] px-5 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-xl transition duration-200 hover:-translate-y-0.5 hover:bg-[#e07519] active:scale-95 sm:right-6 sm:bottom-6 sm:text-sm"
    >
      <svg class="h-5 w-5 shrink-0 fill-current" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.535 5.862l-1.535 5.638 5.792-1.519c1.693.902 3.621 1.419 5.675 1.419 6.627 0 12-5.373 12-12s-5.373-12-12.467-11.4z" />
      </svg>
      <span>Cotizar por WhatsApp</span>
    </a>
  </div>
</template>
