<script setup lang="ts">
import { ref } from 'vue'
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

const mobileMenuOpen = ref(false)
const headerWhatsappUrl = buildWhatsAppUrl(siteConfig.defaultWhatsappMessages.header)

const navLinks = [
  { label: 'Marcas', href: '#marcas' },
  { label: 'Categorías', href: '#categorias' },
  { label: 'Catálogo PDF', href: '#catalogo' },
  { label: 'Ubicación y Horarios', href: '#ubicacion' }
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-[#121417] text-white shadow-lg">
    <!-- Top Yellow Industrial Bar: Horario de atención + Ubicación en el C.C. -->
    <div class="bg-[#FFCC00] text-[#121417]">
      <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-[11px] font-bold tracking-wide sm:px-6 sm:text-xs lg:px-8">
        <div class="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span class="inline-flex items-center gap-1.5 uppercase font-black">
            <span class="inline-block h-2 w-2 bg-[#121417]"></span>
            ABIERTOS LUNES A DOMINGO
          </span>
          <span class="hidden opacity-40 sm:inline">|</span>
          <span>
            Lun-Sáb: 9:00 AM - 8:00 PM • Dom: 10:00 AM - 7:00 PM
          </span>
        </div>

        <a
          href="#ubicacion"
          class="hidden items-center gap-1.5 font-extrabold uppercase tracking-wider underline-offset-4 hover:underline md:inline-flex"
        >
          <span>{{ siteConfig.business.mallName }} • {{ siteConfig.business.localNumber }}</span>
          <span>→</span>
        </a>
      </div>
    </div>

    <!-- Main Dark Industrial Navbar (HomeMaster / MJS Team / DeWalt Style) -->
    <div class="mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 px-4 py-3.5 sm:px-6 lg:px-8">
      <!-- Industrial Framed Logo -->
      <a href="#" class="group flex items-center gap-3 focus:outline-none">
        <div class="flex h-11 w-11 items-center justify-center border-2 border-[#FFCC00] bg-[#181B20] text-[#FFCC00] transition group-hover:bg-[#FFCC00] group-hover:text-[#121417]">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
            />
          </svg>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-lg font-black uppercase tracking-tight text-white sm:text-xl">
              {{ siteConfig.business.shortName }}
              <span class="text-[#FFCC00]">ÓRBITA</span>
            </span>
          </div>
          <p class="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
            {{ siteConfig.business.mallShort }} • {{ siteConfig.business.localNumber }}
          </p>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
        <a
          v-for="item in navLinks"
          :key="item.href"
          :href="item.href"
          class="text-xs font-bold uppercase tracking-widest text-neutral-300 transition hover:text-[#FFCC00]"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Solid Yellow CTA Button (Photo 5 "Call us" / WhatsApp Directo) -->
      <div class="flex items-center gap-3">
        <a
          :href="headerWhatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2.5 rounded-lg bg-[#FFCC00] px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#121417] shadow-md transition hover:bg-[#FFD633] active:scale-[0.99] sm:px-5 sm:text-xs"
        >
          <svg class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.3">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>WhatsApp: {{ siteConfig.business.phoneDisplay }}</span>
        </a>

        <button
          type="button"
          class="inline-flex items-center justify-center border border-white/20 bg-[#181B20] p-2.5 text-white hover:border-[#FFCC00] hover:text-[#FFCC00] lg:hidden"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Abrir menú"
        >
          <svg v-if="!mobileMenuOpen" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Drawer -->
    <div
      v-if="mobileMenuOpen"
      class="border-b border-white/10 bg-[#181B20] px-4 py-4 lg:hidden"
    >
      <div class="flex flex-col gap-2">
        <a
          v-for="item in navLinks"
          :key="item.href"
          :href="item.href"
          class="border-l-2 border-transparent px-3 py-2 text-xs font-bold uppercase tracking-widest text-white hover:border-[#FFCC00] hover:bg-white/5 hover:text-[#FFCC00]"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </a>
        <div class="mt-2 border border-[#FFCC00]/40 bg-[#121417] p-3 text-xs text-neutral-300">
          <p class="font-black uppercase text-[#FFCC00]">
            {{ siteConfig.business.mallName }} — {{ siteConfig.business.localNumber }}
          </p>
          <p class="mt-1">Lun a Sáb: 9:00 AM – 8:00 PM | Dom: 10:00 AM – 7:00 PM</p>
        </div>
      </div>
    </div>
  </header>
</template>
