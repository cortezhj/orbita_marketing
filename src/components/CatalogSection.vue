<script setup lang="ts">
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

const catalogWhatsappUrl = buildWhatsAppUrl(siteConfig.defaultWhatsappMessages.catalogRequest)

const catalogFeatures = [
  'Referencias organizadas por departamento (Electricidad, Plomería, Herramientas y Pinturas)',
  'Especificaciones técnicas, calibres, medidas de tuberías y equivalencias de repuestos',
  'Descuentos especiales para contratistas, condominios, técnicos y compras por volumen',
  'Enlace directo desde cada página para apartar tu pedido y retirar sin cola en el local'
]
</script>

<template>
  <section id="catalogo" class="cv-auto scroll-mt-24 bg-[#121417] py-16 text-white sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Top Label -->
      <div class="text-center">
        <span class="text-xs font-black uppercase tracking-[0.25em] text-[#f6892c]">
          CATÁLOGO DESCARGABLE • LISTA TÉCNICA
        </span>
      </div>

      <!-- White Industrial Plate with Corner Bolts -->
      <div class="relative mt-6 border-2 border-[#f6892c] bg-white p-6 text-[#121417] shadow-2xl sm:p-10 lg:p-12">
        <!-- Corner Bolts -->
        <span class="absolute top-3.5 left-3.5 h-2.5 w-2.5 rounded-full bg-neutral-400"></span>
        <span class="absolute top-3.5 right-3.5 h-2.5 w-2.5 rounded-full bg-neutral-400"></span>
        <span class="absolute bottom-3.5 left-3.5 h-2.5 w-2.5 rounded-full bg-neutral-400"></span>
        <span class="absolute right-3.5 bottom-3.5 h-2.5 w-2.5 rounded-full bg-neutral-400"></span>

        <div class="grid items-center gap-8 lg:grid-cols-12">
          <!-- Left Info -->
          <div class="lg:col-span-7">
            <span class="inline-block bg-[#121417] px-3 py-1 text-xs font-black uppercase tracking-widest text-[#f6892c]">
              PDF OPTIMIZADO Y LIGERO
            </span>
            <h2 class="mt-4 text-2xl font-black uppercase tracking-tight text-[#121417] sm:text-4xl">
              Descarga Nuestro Catálogo General 2026
            </h2>
            <p class="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
              Revisa las líneas completas de inventario que manejamos en el
              <strong class="font-bold text-[#121417]">{{ siteConfig.business.mallShort }} ({{ siteConfig.business.localNumber }})</strong>.
              Ideal para maestros de obra, técnicos electricistas, plomeros, juntas de condominio y compras del hogar.
            </p>

            <ul class="mt-6 space-y-2.5">
              <li
                v-for="feat in catalogFeatures"
                :key="feat"
                class="flex items-start gap-2.5 text-xs font-medium text-neutral-800 sm:text-sm"
              >
                <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f6892c] text-xs font-black text-white">
                  ✓
                </span>
                <span>{{ feat }}</span>
              </li>
            </ul>

            <div class="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                :href="siteConfig.business.catalogUrl"
                download="Catalogo-Orbita-Marketing-2026.pdf"
                target="_blank"
                class="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#f6892c] px-7 py-4 text-xs font-black uppercase tracking-wider text-white shadow-md transition hover:bg-[#e07519] sm:text-sm"
              >
                <svg class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Descargar Catálogo PDF</span>
              </a>

              <a
                :href="catalogWhatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2.5 rounded-lg border-2 border-[#121417] bg-[#121417] px-6 py-4 text-xs font-black uppercase tracking-wider text-white transition hover:bg-neutral-800 sm:text-sm"
              >
                <span>Pedir Lista de Precios por WhatsApp</span>
              </a>
            </div>
            <p class="mt-3 text-xs font-semibold text-neutral-500">
              {{ siteConfig.business.catalogVersion }} • Descarga directa sin registro
            </p>
          </div>

          <!-- Right Visual Mockup -->
          <div class="lg:col-span-5">
            <div class="border-2 border-[#121417] bg-[#121417] p-6 text-white shadow-xl">
              <div class="flex items-center justify-between border-b border-white/15 pb-4">
                <div class="flex items-center gap-3">
                  <div class="flex h-11 w-11 items-center justify-center bg-[#f6892c] text-xs font-black text-white">
                    PDF
                  </div>
                  <div>
                    <p class="text-sm font-black uppercase text-white">Catálogo_Orbita_2026.pdf</p>
                    <p class="text-xs text-neutral-400">Optimizado para lectura rápida en móvil</p>
                  </div>
                </div>
              </div>

              <div class="mt-4 space-y-2.5">
                <div
                  v-for="cat in siteConfig.categories"
                  :key="cat.id"
                  class="flex items-center justify-between border border-white/10 bg-[#181B20] px-3.5 py-2.5 text-xs"
                >
                  <div class="flex items-center gap-2.5">
                    <span class="h-2 w-2 bg-[#f6892c]"></span>
                    <span class="font-bold text-white">{{ cat.title }}</span>
                  </div>
                  <span class="text-[11px] font-semibold text-neutral-400">{{ cat.popularBrands.slice(0, 2).join(' • ') }}</span>
                </div>
              </div>

              <div class="mt-5 border-l-4 border-[#f6892c] bg-[#181B20] p-3.5 text-xs text-neutral-200">
                <strong class="text-[#f6892c]">¿Tienes una lista escrita a mano?</strong> Envíala en foto por WhatsApp y te armamos el presupuesto completo en minutos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
