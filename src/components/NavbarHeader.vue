<script setup lang="ts">
import { ref } from 'vue'
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

const mobileMenuOpen = ref(false)
const headerWhatsappUrl = buildWhatsAppUrl(siteConfig.defaultWhatsappMessages.header)

const navLinks = [
  { label: 'INICIO', href: '#', hasArrow: false },
  { label: 'CATÁLOGO', href: '#catalogo', hasArrow: true },
  { label: 'CATEGORÍAS', href: '#categorias', hasArrow: true },
  { label: 'MARCAS EN STOCK', href: '#marcas', hasArrow: false },
  { label: 'UBICACIÓN Y HORARIOS', href: '#ubicacion', hasArrow: false }
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-[#141414]/95 text-white backdrop-blur-md">
    <!-- Row 1: Brand Emblem (Left) + Location & Phone/WhatsApp Callout (Right) -->
    <div class="border-b border-white/10">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <!-- Left: Yellow Industrial Icon + Brand Name & Yellow Subtitle -->
        <a href="#" class="group flex items-center gap-3.5 focus:outline-none">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-[#FFB800]/15 text-[#FFB800] ring-1 ring-[#FFB800]/40 transition group-hover:bg-[#FFB800] group-hover:text-[#141414]">
            <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>
          </div>
          <div>
            <span class="block text-lg font-extrabold tracking-tight text-white sm:text-xl">
              {{ siteConfig.business.brandName }}
            </span>
            <span class="block text-[11px] font-semibold tracking-wide text-[#FFB800]">
              Ferretería y Suministros • Lun-Dom
            </span>
          </div>
        </a>

        <!-- Right: Location Pin Block + Phone / WhatsApp Callback Block -->
        <div class="flex items-center gap-6 lg:gap-10">
          <!-- Location Pin Item -->
          <a
            href="#ubicacion"
            class="hidden items-start gap-2.5 text-left transition hover:opacity-90 md:flex"
          >
            <svg class="mt-0.5 h-5 w-5 shrink-0 text-[#FFB800]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
            </svg>
            <div>
              <span class="block text-sm font-bold leading-tight text-white">
                {{ siteConfig.business.mallShort }}
              </span>
              <span class="mt-0.5 block text-[11px] font-medium text-[#FFB800]">
                {{ siteConfig.business.localNumber }} • 9:00 AM - 8:00 PM
              </span>
            </div>
          </a>

          <!-- Phone & WhatsApp Direct Action -->
          <div class="flex items-start gap-2.5">
            <svg class="mt-0.5 hidden h-5 w-5 shrink-0 text-[#FFB800] sm:block" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <div class="text-right sm:text-left">
              <a
                :href="headerWhatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="block text-sm font-extrabold tracking-wide text-white transition hover:text-[#FFB800] sm:text-base"
              >
                {{ siteConfig.business.phoneDisplay }}
              </a>
              <a
                :href="headerWhatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block border-b border-[#FFB800]/70 pb-0.5 text-[11px] font-bold text-[#FFB800] transition hover:border-[#FFB800] hover:text-amber-300"
              >
                 escribir al WhatsApp directo
              </a>
            </div>
          </div>

          <!-- Mobile Hamburger -->
          <button
            type="button"
            class="inline-flex items-center justify-center rounded border border-white/15 bg-white/5 p-2 text-white hover:border-[#FFB800] hover:text-[#FFB800] md:hidden"
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
    </div>

    <!-- Row 2: Left-Aligned Navigation Bar (Exact Reference Layout) -->
    <div class="hidden border-b border-white/5 bg-[#111111]/90 md:block">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-8" aria-label="Navegación principal">
          <a
            v-for="item in navLinks"
            :key="item.label"
            :href="item.href"
            class="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-neutral-200 transition hover:text-[#FFB800]"
          >
            <span>{{ item.label }}</span>
            <svg
              v-if="item.hasArrow"
              class="h-3 w-3 text-[#FFB800]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </nav>

        <span class="text-[11px] font-semibold text-neutral-400">
          Horario Centro Comercial: <strong class="text-white">Lun a Dom • {{ siteConfig.business.localNumber }}</strong>
        </span>
      </div>
    </div>

    <!-- Mobile Menu Drawer -->
    <div
      v-if="mobileMenuOpen"
      class="border-b border-white/10 bg-[#181818] px-4 py-4 md:hidden"
    >
      <div class="flex flex-col gap-2.5">
        <a
          v-for="item in navLinks"
          :key="item.label"
          :href="item.href"
          class="flex items-center justify-between border-l-2 border-transparent px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-white hover:border-[#FFB800] hover:bg-white/5 hover:text-[#FFB800]"
          @click="mobileMenuOpen = false"
        >
          <span>{{ item.label }}</span>
          <span class="text-[#FFB800]">→</span>
        </a>
        <div class="mt-2 rounded border border-[#FFB800]/30 bg-[#121212] p-3 text-xs text-neutral-300">
          <p class="font-bold text-[#FFB800]">
            📍 {{ siteConfig.business.mallName }} — {{ siteConfig.business.localNumber }}
          </p>
          <p class="mt-1">Lun a Sáb: 9:00 AM – 8:00 PM | Dom: 10:00 AM – 7:00 PM</p>
        </div>
      </div>
    </div>
  </header>
</template>
