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
  <section id="catalogo" class="scroll-mt-24 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/60 to-slate-950 py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-slate-900 p-6 shadow-2xl sm:p-10 lg:p-12">
        <!-- Decorative Accent -->
        <div class="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl"></div>

        <div class="relative grid items-center gap-8 lg:grid-cols-12">
          <!-- Left Info -->
          <div class="lg:col-span-7">
            <span class="inline-flex items-center gap-2 rounded-full bg-amber-400/15 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-300">
              Catálogo Digital y Lista Técnica
            </span>
            <h2 class="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
              Descarga Nuestro Catálogo General Optimizado en PDF
            </h2>
            <p class="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Revisa las líneas completas de inventario que manejamos en el
              <strong class="text-white">{{ siteConfig.business.mallName }} ({{ siteConfig.business.localNumber }})</strong>.
              Ideal para maestros de obra, técnicos electricistas, plomeros, juntas de condominio y compras del hogar.
            </p>

            <ul class="mt-6 space-y-2.5">
              <li
                v-for="feat in catalogFeatures"
                :key="feat"
                class="flex items-start gap-2.5 text-xs text-slate-200 sm:text-sm"
              >
                <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-300">
                  ✓
                </span>
                <span>{{ feat }}</span>
              </li>
            </ul>

            <div class="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                :href="siteConfig.business.catalogUrl"
                download="Catalogo-FerreCentro-Orbita-2026.pdf"
                target="_blank"
                class="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-amber-400 px-6 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-400/20 transition hover:bg-amber-300 sm:text-base"
              >
                <svg class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Descargar Catálogo PDF</span>
              </a>

              <a
                :href="catalogWhatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-slate-700 bg-slate-950 px-6 py-4 text-sm font-bold text-white transition hover:border-emerald-400/60 hover:text-emerald-300 sm:text-base"
              >
                <span>Solicitar Lista de Precios por WhatsApp</span>
              </a>
            </div>
            <p class="mt-3 text-xs text-slate-400">
              {{ siteConfig.business.catalogVersion }} • Descarga directa sin registro
            </p>
          </div>

          <!-- Right Visual Mockup of the PDF Catalog -->
          <div class="lg:col-span-5">
            <div class="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-xl">
              <div class="flex items-center justify-between border-b border-slate-800 pb-4">
                <div class="flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-xs font-black text-red-400 border border-red-500/30">
                    PDF
                  </div>
                  <div>
                    <p class="text-sm font-bold text-white">Catálogo_FerreCentro_2026.pdf</p>
                    <p class="text-xs text-slate-400">Optimizado para lectura en móvil</p>
                  </div>
                </div>
                <span class="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-bold text-emerald-400">
                  Verificado
                </span>
              </div>

              <div class="mt-4 space-y-2.5">
                <div
                  v-for="(cat, index) in siteConfig.categories"
                  :key="cat.id"
                  class="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/70 px-3.5 py-2.5 text-xs"
                >
                  <div class="flex items-center gap-2.5">
                    <span class="font-mono font-bold text-amber-400">0{{ index + 1 }}</span>
                    <span class="font-semibold text-slate-200">{{ cat.title }}</span>
                  </div>
                  <span class="text-[11px] text-slate-400">{{ cat.popularBrands.slice(0, 2).join(' • ') }}</span>
                </div>
              </div>

              <div class="mt-4 rounded-xl bg-amber-400/10 p-3 text-xs text-amber-200">
                <strong>¿Tienes una lista escrita a mano o en foto?</strong> Envíala por WhatsApp y te armamos el presupuesto completo en minutos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
