<script setup lang="ts">
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

function getBrandWhatsappUrl(brandName: string) {
  return buildWhatsAppUrl(
    `Hola ${siteConfig.business.brandName}, quisiera consultar qué productos o repuestos de la marca *${brandName}* tienen disponibles hoy en su local del ${siteConfig.business.mallName}.`
  )
}
</script>

<template>
  <section id="marcas" class="scroll-mt-24 border-b border-slate-800/80 bg-slate-900/40 py-14 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span class="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
            Respaldo y Garantía Original
          </span>
          <h2 class="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Marcas Aliadas Disponibles en Stock
          </h2>
          <p class="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
            Trabajamos directamente con fabricantes y distribuidores autorizados para garantizar herramientas originales, repuestos certificados y respaldo en tienda.
          </p>
        </div>

        <div class="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-300">
          <span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
          <span>Inventario verificado en {{ siteConfig.business.localNumber }}</span>
        </div>
      </div>

      <!-- Infinite Carousel / Marquee of Recognized Brand Wordmarks -->
      <div class="relative mt-8 overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950/90 py-5">
        <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-950 to-transparent"></div>
        <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-950 to-transparent"></div>

        <div class="animate-marquee flex items-center gap-6 px-4">
          <div
            v-for="(brand, idx) in [...siteConfig.brands, ...siteConfig.brands]"
            :key="`${brand.id}-${idx}`"
            class="flex shrink-0 items-center gap-3 rounded-xl border border-slate-800/80 bg-slate-900/80 px-5 py-3"
          >
            <span
              class="h-3 w-3 rounded-sm"
              :style="{ backgroundColor: brand.accentColor }"
            ></span>
            <span class="text-sm font-black tracking-wider text-white sm:text-base">
              {{ brand.name }}
            </span>
            <span class="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
              {{ brand.badge }}
            </span>
          </div>
        </div>
      </div>

      <!-- Brand Authority Grid -->
      <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="brand in siteConfig.brands"
          :key="brand.id"
          class="group flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/70 p-5 transition hover:-translate-y-0.5 hover:border-amber-400/50 hover:bg-slate-900"
        >
          <div>
            <!-- Styled Industrial Brand Badge / Logo Box -->
            <div class="flex items-center justify-between gap-2">
              <div
                class="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-black tracking-wider text-slate-950 shadow-sm"
                :style="{ backgroundColor: brand.accentColor }"
              >
                <span class="text-white mix-blend-difference">{{ brand.name }}</span>
              </div>
              <span class="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                {{ brand.badge }}
              </span>
            </div>

            <p class="mt-3 text-xs font-bold uppercase tracking-wider text-amber-400/90">
              {{ brand.category }}
            </p>
            <p class="mt-1.5 text-xs leading-relaxed text-slate-300">
              {{ brand.description }}
            </p>
          </div>

          <div class="mt-4 border-t border-slate-800/80 pt-3">
            <a
              :href="getBrandWhatsappUrl(brand.name)"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full items-center justify-between text-xs font-bold text-slate-200 transition group-hover:text-emerald-400"
            >
              <span>Consultar stock {{ brand.name }}</span>
              <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
