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
  <header class="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
    <!-- Top Info Bar: Horario de atención + Ubicación rápida -->
    <div class="border-b border-slate-800/70 bg-slate-900/90 text-xs text-slate-300">
      <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span class="inline-flex items-center gap-1.5 font-semibold text-emerald-400">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Abiertos de Lunes a Domingo
          </span>
          <span class="hidden text-slate-600 sm:inline">|</span>
          <span class="inline-flex items-center gap-1.5 text-slate-300">
            <svg class="h-3.5 w-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Lun-Sáb: 9:00 AM - 8:00 PM • Dom: 10:00 AM - 7:00 PM
          </span>
        </div>

        <div class="hidden items-center gap-4 md:flex">
          <a
            href="#ubicacion"
            class="inline-flex items-center gap-1.5 text-slate-300 transition hover:text-amber-400"
          >
            <svg class="h-3.5 w-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{{ siteConfig.business.mallName }} • <strong>{{ siteConfig.business.localNumber }}</strong></span>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Header Bar -->
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
      <!-- Brand Logo -->
      <a href="#" class="group flex items-center gap-3 focus:outline-none">
        <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20 transition group-hover:scale-105">
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
            <span class="text-lg font-extrabold tracking-tight text-white sm:text-xl">
              {{ siteConfig.business.brandName }}
            </span>
            <span class="hidden rounded-md border border-amber-400/30 bg-amber-400/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-300 sm:inline-block">
              Tienda Física
            </span>
          </div>
          <p class="text-xs text-slate-400">
            {{ siteConfig.business.mallShort }} • {{ siteConfig.business.localNumber }}
          </p>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
        <a
          v-for="item in navLinks"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-slate-300 transition hover:text-amber-400"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Direct WhatsApp CTA & Mobile Toggle -->
      <div class="flex items-center gap-3">
        <a
          :href="headerWhatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 sm:text-sm"
        >
          <svg class="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.535 5.862l-1.535 5.638 5.792-1.519c1.693.902 3.621 1.419 5.675 1.419 6.627 0 12-5.373 12-12s-5.373-12-12.467-11.4z" />
          </svg>
          <span>WhatsApp Directo</span>
        </a>

        <button
          type="button"
          class="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 p-2.5 text-slate-300 hover:border-slate-700 hover:text-white lg:hidden"
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
      class="border-t border-slate-800 bg-slate-900/95 px-4 py-4 lg:hidden"
    >
      <div class="flex flex-col gap-3">
        <a
          v-for="item in navLinks"
          :key="item.href"
          :href="item.href"
          class="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </a>
        <div class="mt-2 rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs text-slate-300">
          <p class="font-semibold text-amber-400">{{ siteConfig.business.mallName }} — {{ siteConfig.business.localNumber }}</p>
          <p class="mt-1">Lun a Sáb: 9:00 AM – 8:00 PM | Dom: 10:00 AM – 7:00 PM</p>
        </div>
      </div>
    </div>
  </header>
</template>
