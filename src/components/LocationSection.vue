<script setup lang="ts">
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

const locationHelpWhatsappUrl = buildWhatsAppUrl(siteConfig.defaultWhatsappMessages.locationHelp)
</script>

<template>
  <section id="ubicacion" class="cv-auto scroll-mt-24 border-b border-neutral-200 bg-white py-16 text-[#121417] sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mx-auto max-w-3xl text-center">
        <span class="inline-block bg-[#f6892c] px-4 py-1 text-xs font-black uppercase tracking-widest text-white">
          VISÍTANOS HOY MISMO
        </span>
        <h2 class="mt-3 text-3xl font-black uppercase tracking-tight text-[#121417] sm:text-5xl">
          Ubicación y Horarios
        </h2>
        <p class="mt-3 text-base font-medium text-neutral-600">
          Compra con total seguridad en el <strong class="font-black text-[#121417]">{{ siteConfig.business.mallShort }}</strong>:
          {{ siteConfig.business.shortAddress }}, Barquisimeto.
        </p>
      </div>

      <!-- Storefront Photos -->
      <div class="mt-12">
        <div class="mb-5 flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#121417] pb-3">
          <h3 class="text-lg font-black uppercase tracking-wide text-[#121417] sm:text-xl">
            Conoce Nuestro Local Comercial
          </h3>
          <span class="bg-[#121417] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#f6892c]">
            ✓ EXISTENCIA FÍSICA VALIDADA EN {{ siteConfig.business.mallShort }}
          </span>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div
            v-for="photo in siteConfig.storePhotos"
            :key="photo.id"
            class="group flex flex-col justify-between overflow-hidden border-2 border-[#121417] bg-[#121417] text-white shadow-lg"
          >
            <div>
              <div class="relative h-52 overflow-hidden bg-neutral-900">
                <img
                  :src="photo.image"
                  :alt="photo.title"
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span class="absolute top-3 left-3 bg-[#f6892c] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white">
                  {{ photo.badge }}
                </span>
              </div>
              <div class="p-5">
                <h4 class="text-sm font-black uppercase tracking-wide text-white">{{ photo.title }}</h4>
                <p class="mt-2 text-xs leading-relaxed text-neutral-300">{{ photo.caption }}</p>
              </div>
            </div>
            <!-- Bottom Orange Accent Bar -->
            <div class="h-2 w-full bg-[#f6892c]"></div>
          </div>
        </div>
      </div>

      <!-- Exact Location Details + Interactive Google Maps -->
      <div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <!-- Left Details Card -->
        <div class="flex flex-col justify-between border-2 border-[#121417] bg-[#121417] p-6 text-white shadow-xl sm:p-8 lg:col-span-5">
          <div class="space-y-6">
            <!-- Mall, Level & Local Number -->
            <div>
              <span class="text-xs font-black uppercase tracking-widest text-[#f6892c]">
                DIRECCIÓN EN EL CENTRO COMERCIAL
              </span>
              <h3 class="mt-1 text-2xl font-black uppercase text-white">
                {{ siteConfig.business.mallShort }}
              </h3>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="bg-[#f6892c] px-3 py-1 text-xs font-black uppercase text-white">
                  {{ siteConfig.business.level }}
                </span>
                <span class="border border-[#f6892c] bg-[#181B20] px-3 py-1 text-xs font-black uppercase text-[#f6892c]">
                  {{ siteConfig.business.localNumber }}
                </span>
              </div>
              <p class="mt-3 text-xs leading-relaxed text-neutral-300 sm:text-sm">
                {{ siteConfig.business.fullAddress }}
              </p>
            </div>

            <!-- Puntos de Referencia -->
            <div class="border-t border-white/15 pt-5">
              <h4 class="text-xs font-black uppercase tracking-widest text-[#f6892c]">
                PUNTOS DE REFERENCIA
              </h4>
              <ul class="mt-3 space-y-2.5">
                <li
                  v-for="refPoint in siteConfig.business.referencePoints"
                  :key="refPoint"
                  class="flex items-start gap-2.5 text-xs text-neutral-200 sm:text-sm"
                >
                  <span class="mt-1 h-2 w-2 shrink-0 bg-[#f6892c]"></span>
                  <span>{{ refPoint }}</span>
                </li>
              </ul>
            </div>

            <!-- Horarios de Apertura y Cierre -->
            <div class="border-t border-white/15 pt-5">
              <div class="flex items-center justify-between">
                <h4 class="text-xs font-black uppercase tracking-widest text-[#f6892c]">
                  HORARIO DE ATENCIÓN
                </h4>
                <span class="bg-[#f6892c]/20 px-2 py-0.5 text-[10px] font-black uppercase text-[#f6892c]">
                  HORARIO CORRIDO
                </span>
              </div>

              <div class="mt-3 space-y-2.5">
                <div
                  v-for="item in siteConfig.schedule"
                  :key="item.days"
                  class="flex items-center justify-between border border-white/15 bg-[#181B20] px-4 py-3"
                >
                  <div>
                    <p class="text-xs font-black uppercase text-white sm:text-sm">{{ item.days }}</p>
                    <p v-if="item.note" class="text-[11px] text-neutral-400">{{ item.note }}</p>
                  </div>
                  <span class="bg-[#f6892c] px-2.5 py-1 text-xs font-black text-white">
                    {{ item.hours }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="mt-6 space-y-3 border-t border-white/15 pt-5">
            <a
              :href="siteConfig.business.googleMapsDirectionsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#f6892c] px-5 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-md transition hover:bg-[#e07519] sm:text-sm"
            >
              <svg class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span>Abrir Ruta en Google Maps</span>
            </a>

            <a
              :href="locationHelpWhatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/25 bg-transparent px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:border-[#f6892c] hover:text-[#f6892c]"
            >
              <span>Pedir Ubicación Exacta por WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- Right Interactive Map Card -->
        <div class="flex flex-col border-2 border-[#121417] bg-[#F4F5F7] p-3 shadow-xl lg:col-span-7">
          <div class="relative min-h-[380px] flex-1 overflow-hidden border border-[#121417] bg-neutral-200">
            <iframe
              :src="siteConfig.business.googleMapsEmbedUrl"
              title="Ubicación de Órbita Marketing en Google Maps"
              class="h-full min-h-[380px] w-full border-0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div class="mt-3 flex flex-wrap items-center justify-between gap-3 bg-[#121417] px-4 py-3 text-xs text-white">
            <div class="flex items-center gap-2">
              <span class="inline-block h-2.5 w-2.5 bg-[#f6892c]"></span>
              <span>
                <strong>{{ siteConfig.business.mallShort }}</strong> — {{ siteConfig.business.shortAddress }}
              </span>
            </div>
            <a
              :href="siteConfig.business.googleMapsDirectionsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="font-black uppercase tracking-wider text-[#f6892c] underline-offset-4 hover:underline"
            >
              Iniciar navegación GPS →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
