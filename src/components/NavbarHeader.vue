<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)
const headerWhatsappUrl = buildWhatsAppUrl(siteConfig.defaultWhatsappMessages.header)

const navLinks = [
  { label: 'INICIO', href: '#', hasArrow: false },
  { label: 'NUESTROS PRODUCTOS', href: '#categorias', hasArrow: true },
  { label: 'MARCAS EN STOCK', href: '#marcas', hasArrow: false },
  { label: 'UBICACIÓN Y HORARIOS', href: '#ubicacion', hasArrow: false }
]

function handleScroll() {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-50 text-white transition-all duration-300"
    :class="
      isScrolled || mobileMenuOpen
        ? 'bg-[#121212]/95 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md'
        : 'bg-transparent'
    "
  >
    <!-- Row 1: Larger Logo Image (Left) + Location (Local + Schedule) & Phone (Phone + RIF) (Right) -->
    <div class="border-b border-white/15">
      <div
        class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8"
        :class="isScrolled ? 'py-2' : 'py-3 sm:py-3.5'"
      >
        <!-- Left: Larger Logo Image from /Logo.png -->
        <a href="#" class="group flex items-center focus:outline-none">
          <img
            :src="siteConfig.business.logoUrl"
            :alt="siteConfig.business.legalName"
            class="w-auto object-contain transition-all duration-200 group-hover:scale-[1.02]"
            :class="isScrolled ? 'h-11 sm:h-13' : 'h-13 sm:h-16 md:h-18'"
          />
        </a>

        <!-- Right: Location (Local + Horario) + Phone (+ RIF J500390335) -->
        <div class="flex items-center gap-6 lg:gap-10">
          <!-- Location Pin Item: C.C. Ciudad Crepuscular / Local + Horario -->
          <a
            href="#ubicacion"
            class="hidden items-start gap-2.5 text-left transition hover:opacity-90 md:flex"
          >
            <svg class="mt-0.5 h-5 w-5 shrink-0 text-[#f6892c]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
            </svg>
            <div>
              <span class="block text-sm font-bold leading-tight text-white">
                {{ siteConfig.business.mallShort }}
              </span>
              <span class="mt-0.5 block text-[11px] font-semibold text-[#f6892c]">
                {{ siteConfig.business.headerLocationSub }}
              </span>
            </div>
          </a>

          <!-- Phone & RIF J500390335 Underneath -->
          <div class="flex items-start gap-2.5">
            <svg class="mt-0.5 hidden h-5 w-5 shrink-0 text-[#f6892c] sm:block" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <div class="text-right sm:text-left">
              <a
                :href="headerWhatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="block text-sm font-extrabold tracking-wide text-white transition hover:text-[#f6892c] sm:text-base"
              >
                {{ siteConfig.business.phoneDisplay }}
              </a>
              <span class="block text-[11px] font-bold tracking-wider text-[#f6892c]">
                RIF: {{ siteConfig.business.rif }}
              </span>
            </div>
          </div>

          <!-- Mobile Hamburger -->
          <button
            type="button"
            class="inline-flex items-center justify-center rounded border border-white/15 bg-white/5 p-2 text-white hover:border-[#f6892c] hover:text-[#f6892c] md:hidden"
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

    <!-- Row 2: Left-Aligned Navigation Bar with Thin White Line on Top and Bottom -->
    <div
      class="hidden border-b border-white/15 transition-colors duration-300 md:block"
      :class="isScrolled ? 'bg-[#0D0D0D]/90' : 'bg-transparent'"
    >
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-8" aria-label="Navegación principal">
          <a
            v-for="item in navLinks"
            :key="item.label"
            :href="item.href"
            class="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-neutral-200 transition hover:text-[#f6892c]"
          >
            <span>{{ item.label }}</span>
            <svg
              v-if="item.hasArrow"
              class="h-3 w-3 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </nav>
      </div>
    </div>

    <!-- Mobile Menu Drawer -->
    <div
      v-if="mobileMenuOpen"
      class="border-b border-white/15 bg-[#141414]/98 px-4 py-4 md:hidden"
    >
      <div class="flex flex-col gap-2.5">
        <a
          v-for="item in navLinks"
          :key="item.label"
          :href="item.href"
          class="flex items-center justify-between border-l-2 border-transparent px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-white hover:border-[#f6892c] hover:bg-white/5 hover:text-[#f6892c]"
          @click="mobileMenuOpen = false"
        >
          <span>{{ item.label }}</span>
          <span class="text-[#f6892c]">→</span>
        </a>
        <div class="mt-2 rounded border border-[#f6892c]/30 bg-black/60 p-3 text-xs text-neutral-300">
          <p class="font-bold text-[#f6892c]">
            📍 {{ siteConfig.business.mallShort }} — {{ siteConfig.business.headerLocationSub }}
          </p>
          <p class="mt-1">Tel: {{ siteConfig.business.phoneDisplay }} • RIF: {{ siteConfig.business.rif }}</p>
        </div>
      </div>
    </div>
  </header>
</template>
