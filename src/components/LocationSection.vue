<script setup lang="ts">
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

const locationHelpWhatsappUrl = buildWhatsAppUrl(siteConfig.defaultWhatsappMessages.locationHelp)
</script>

<template>
  <section id="ubicacion" class="scroll-mt-24 border-b border-slate-800/80 bg-slate-950 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mx-auto max-w-3xl text-center">
        <span class="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
          Visítanos Hoy Mismo
        </span>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ubicación Exacta, Horarios y Cómo Llegar
        </h2>
        <p class="mt-3 text-base text-slate-300">
          Compra con total seguridad dentro del <strong class="text-white">{{ siteConfig.business.mallName }}</strong>:
          estacionamiento vigilado, ambiente climatizado y atención inmediata en mostrador.
        </p>
      </div>

      <!-- Storefront Photos (Fotos del Local Comercial) -->
      <div class="mt-12">
        <div class="mb-5 flex flex-wrap items-center justify-between gap-2">
          <h3 class="text-lg font-extrabold text-white sm:text-xl">
            Conoce Nuestro Local Comercial
          </h3>
          <span class="text-xs font-semibold text-emerald-400">
            ✓ Existencia física validada en {{ siteConfig.business.mallShort }}
          </span>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div
            v-for="photo in siteConfig.storePhotos"
            :key="photo.id"
            class="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/75"
          >
            <div class="relative h-52 overflow-hidden">
              <img
                :src="photo.image"
                :alt="photo.title"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span class="absolute top-3 left-3 rounded-full bg-slate-950/85 px-3 py-1 text-[11px] font-bold text-amber-300 backdrop-blur-md">
                {{ photo.badge }}
              </span>
            </div>
            <div class="p-4">
              <h4 class="text-sm font-bold text-white">{{ photo.title }}</h4>
              <p class="mt-1.5 text-xs leading-relaxed text-slate-300">{{ photo.caption }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Exact Location Details + Interactive Google Maps -->
      <div class="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <!-- Left Details Card -->
        <div class="flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 lg:col-span-5">
          <div class="space-y-6">
            <!-- Mall, Level & Local Number -->
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-amber-400">
                Dirección en el Centro Comercial
              </span>
              <h3 class="mt-1 text-2xl font-extrabold text-white">
                {{ siteConfig.business.mallName }}
              </h3>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="rounded-lg bg-amber-400 px-3 py-1 text-xs font-extrabold text-slate-950">
                  {{ siteConfig.business.level }}
                </span>
                <span class="rounded-lg border border-amber-400/40 bg-amber-400/15 px-3 py-1 text-xs font-extrabold text-amber-300">
                  {{ siteConfig.business.localNumber }}
                </span>
              </div>
              <p class="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {{ siteConfig.business.fullAddress }}
              </p>
            </div>

            <!-- Puntos de Referencia -->
            <div class="border-t border-slate-800 pt-5">
              <h4 class="text-xs font-bold uppercase tracking-wider text-amber-400">
                Puntos de Referencia para Llegar Rápido
              </h4>
              <ul class="mt-3 space-y-2">
                <li
                  v-for="refPoint in siteConfig.business.referencePoints"
                  :key="refPoint"
                  class="flex items-start gap-2.5 text-xs text-slate-200 sm:text-sm"
                >
                  <svg class="mt-0.5 h-4 w-4 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{{ refPoint }}</span>
                </li>
              </ul>
            </div>

            <!-- Horarios de Apertura y Cierre (Lunes a Domingo) -->
            <div class="border-t border-slate-800 pt-5">
              <div class="flex items-center justify-between">
                <h4 class="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Horario de Atención (Lun - Dom)
                </h4>
                <span class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
                  Horario Corrido
                </span>
              </div>

              <div class="mt-3 space-y-2.5">
                <div
                  v-for="item in siteConfig.schedule"
                  :key="item.days"
                  class="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3"
                >
                  <div>
                    <p class="text-xs font-bold text-white sm:text-sm">{{ item.days }}</p>
                    <p v-if="item.note" class="text-[11px] text-slate-400">{{ item.note }}</p>
                  </div>
                  <span class="rounded-lg bg-emerald-500/15 px-2.5 py-1 text-xs font-extrabold text-emerald-300">
                    {{ item.hours }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons: Open Route in Google Maps & Ask Directions on WhatsApp -->
          <div class="mt-6 space-y-3 border-t border-slate-800 pt-5">
            <a
              :href="siteConfig.business.googleMapsDirectionsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex w-full items-center justify-center gap-2.5 rounded-xl bg-amber-400 px-5 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
            >
              <svg class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span>Abrir Ruta en Google Maps</span>
            </a>

            <a
              :href="locationHelpWhatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-xs font-bold text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-300 sm:text-sm"
            >
              <span>¿Estás en el Centro Comercial? Pedir ubicación por WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- Right Interactive Map Card -->
        <div class="flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-3 lg:col-span-7">
          <div class="relative min-h-[380px] flex-1 overflow-hidden rounded-2xl bg-slate-950">
            <iframe
              :src="siteConfig.business.googleMapsEmbedUrl"
              title="Ubicación de FerreCentro Órbita en Google Maps"
              class="h-full min-h-[380px] w-full border-0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div class="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-950 px-4 py-3 text-xs text-slate-300">
            <div class="flex items-center gap-2">
              <span class="inline-block h-2.5 w-2.5 rounded-full bg-amber-400"></span>
              <span>
                <strong>{{ siteConfig.business.mallName }}</strong> — {{ siteConfig.business.level }}, {{ siteConfig.business.localNumber }}
              </span>
            </div>
            <a
              :href="siteConfig.business.googleMapsDirectionsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="font-bold text-amber-400 underline-offset-4 hover:underline"
            >
              Iniciar navegación GPS desde el móvil →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
