<script setup lang="ts">
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

function getBrandWhatsappUrl(brandName: string) {
  return buildWhatsAppUrl(
    `Hola, vi su página y quisiera consultar qué productos o repuestos de la marca ${brandName} tienen disponibles hoy en su local del ${siteConfig.business.mallName}.`
  )
}
</script>

<template>
  <section id="marcas" class="scroll-mt-24 border-b border-neutral-200 bg-white py-16 text-[#121417] sm:py-22">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Industrial Section Title -->
      <div class="flex flex-col items-start justify-between gap-4 border-b-2 border-[#121417] pb-6 md:flex-row md:items-end">
        <div>
          <span class="inline-block bg-[#FFCC00] px-3 py-1 text-xs font-black uppercase tracking-widest text-[#121417]">
            RESPALDO Y GARANTÍA ORIGINAL
          </span>
          <h2 class="mt-3 text-3xl font-black uppercase tracking-tight text-[#121417] sm:text-4xl">
            Marcas que Distribuimos en Tienda
          </h2>
          <p class="mt-2 max-w-2xl text-sm font-medium text-neutral-600 sm:text-base">
            Disponibilidad inmediata de marcas líderes en herramientas, electricidad, plomería y construcción en nuestro local del {{ siteConfig.business.mallName }}.
          </p>
        </div>

        <div class="inline-flex items-center gap-2 border-2 border-[#121417] bg-[#F4F5F7] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#121417]">
          <span class="h-2.5 w-2.5 bg-[#FFCC00] border border-[#121417]"></span>
          <span>STOCK REAL EN {{ siteConfig.business.localNumber }}</span>
        </div>
      </div>

      <!-- High-Contrast Dark & Yellow Brand Marquee -->
      <div class="relative mt-8 overflow-hidden bg-[#121417] py-4 text-white shadow-md">
        <div class="animate-marquee flex items-center gap-6 px-4">
          <div
            v-for="(brand, idx) in [...siteConfig.brands, ...siteConfig.brands]"
            :key="`${brand.id}-${idx}`"
            class="flex shrink-0 items-center gap-3 border border-white/15 bg-[#181B20] px-5 py-2.5"
          >
            <span class="h-3 w-3 bg-[#FFCC00]"></span>
            <span class="text-sm font-black uppercase tracking-wider text-white sm:text-base">
              {{ brand.name }}
            </span>
            <span class="bg-[#FFCC00] px-2 py-0.5 text-[10px] font-black uppercase text-[#121417]">
              {{ brand.badge }}
            </span>
          </div>
        </div>
      </div>

      <!-- Industrial Brand Grid (Clean White Cards with Yellow & Black Accents) -->
      <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="brand in siteConfig.brands"
          :key="brand.id"
          class="group flex flex-col justify-between border-2 border-neutral-200 bg-[#F9FAFB] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#121417] hover:bg-white hover:shadow-lg"
        >
          <div>
            <!-- Brand Header Plate -->
            <div class="flex items-center justify-between gap-2">
              <span class="bg-[#121417] px-3 py-1.5 text-sm font-black uppercase tracking-wider text-[#FFCC00]">
                {{ brand.name }}
              </span>
              <span class="border border-[#121417]/20 bg-[#FFCC00]/25 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#121417]">
                {{ brand.badge }}
              </span>
            </div>

            <p class="mt-3 text-xs font-extrabold uppercase tracking-wider text-neutral-500">
              {{ brand.category }}
            </p>
            <p class="mt-1.5 text-xs leading-relaxed text-neutral-700">
              {{ brand.description }}
            </p>
          </div>

          <div class="mt-4 border-t border-neutral-200 pt-3">
            <a
              :href="getBrandWhatsappUrl(brand.name)"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full items-center justify-between text-xs font-black uppercase tracking-wider text-[#121417] transition group-hover:text-amber-600"
            >
              <span>Consultar {{ brand.name }}</span>
              <span class="flex h-6 w-6 items-center justify-center bg-[#FFCC00] text-[#121417] transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
