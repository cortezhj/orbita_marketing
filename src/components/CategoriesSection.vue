<script setup lang="ts">
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'
</script>

<template>
  <section id="categorias" class="cv-auto scroll-mt-24 border-b border-neutral-200 bg-[#F4F5F7] py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header (DeWalt / Tool Shop Editorial Style) -->
      <div class="mx-auto max-w-3xl text-center">
        <span class="inline-block bg-[#FFCC00] px-4 py-1 text-xs font-black uppercase tracking-widest text-[#121417]">
          DEPARTAMENTOS EN TIENDA
        </span>
        <h2 class="mt-3 text-3xl font-black uppercase tracking-tight text-[#121417] sm:text-5xl">
          Categorías de Productos
        </h2>
        <p class="mt-3 text-base font-medium text-neutral-600">
          Selecciona el departamento que necesitas para cotizar al instante por WhatsApp y retirar hoy en el
          <strong class="font-black text-[#121417]">{{ siteConfig.business.mallName }}</strong>.
        </p>
      </div>

      <!-- Alternating Dark & Light Industrial Category Showcase (Inspired by Photos 1, 2 & 3) -->
      <div class="mt-14 space-y-10">
        <article
          v-for="(cat, idx) in siteConfig.categories"
          :key="cat.id"
          :class="[
            'relative overflow-hidden border-2 transition duration-300 shadow-xl',
            cat.theme === 'dark'
              ? 'border-[#121417] bg-[#121417] text-white'
              : 'border-neutral-200 bg-white text-[#121417]'
          ]"
        >
          <!-- Industrial Corner Screws (Photo 3 DeWalt Plate Detail) -->
          <span
            class="pointer-events-none absolute top-3 left-3 h-2 w-2 rounded-full"
            :class="cat.theme === 'dark' ? 'bg-white/25' : 'bg-neutral-300'"
          ></span>
          <span
            class="pointer-events-none absolute top-3 right-3 h-2 w-2 rounded-full"
            :class="cat.theme === 'dark' ? 'bg-white/25' : 'bg-neutral-300'"
          ></span>
          <span
            class="pointer-events-none absolute bottom-3 left-3 h-2 w-2 rounded-full"
            :class="cat.theme === 'dark' ? 'bg-white/25' : 'bg-neutral-300'"
          ></span>
          <span
            class="pointer-events-none absolute right-3 bottom-3 h-2 w-2 rounded-full"
            :class="cat.theme === 'dark' ? 'bg-white/25' : 'bg-neutral-300'"
          ></span>

          <div
            class="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12"
          >
            <!-- Image Column with Yellow Geometric Offset Square (Photo 1 Style) -->
            <div
              :class="[
                'lg:col-span-5',
                idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
              ]"
            >
              <div class="relative mx-auto max-w-md lg:max-w-none">
                <!-- Offset Yellow Square Block -->
                <div
                  class="absolute -top-3 h-full w-4/5 bg-[#FFCC00]"
                  :class="idx % 2 === 1 ? '-right-3' : '-left-3'"
                ></div>

                <div class="relative overflow-hidden border-2 border-[#121417] bg-[#181B20]">
                  <img
                    :src="cat.image"
                    :alt="cat.title"
                    width="640"
                    height="360"
                    loading="lazy"
                    decoding="async"
                    class="h-60 w-full object-cover transition duration-500 hover:scale-105 sm:h-72"
                  />
                  <!-- Top Badge -->
                  <div class="absolute top-3 left-3 bg-[#FFCC00] px-3 py-1 text-[11px] font-black uppercase tracking-widest text-[#121417]">
                    {{ cat.code }} • {{ cat.badge }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Content Column (Photo 2 "TOOL SHOP / QUALITY TOOLS FOR EVERY JOB" Style) -->
            <div
              :class="[
                'lg:col-span-7',
                idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
              ]"
            >
              <p
                class="text-xs font-black uppercase tracking-[0.2em]"
                :class="cat.theme === 'dark' ? 'text-[#FFCC00]' : 'text-amber-600'"
              >
                {{ cat.subtitle }}
              </p>

              <h3 class="mt-2 text-2xl font-black uppercase tracking-tight sm:text-4xl">
                {{ cat.title }}
              </h3>

              <p
                class="mt-3 text-sm leading-relaxed sm:text-base"
                :class="cat.theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'"
              >
                {{ cat.description }}
              </p>

              <!-- 2-Column Bullet List (Like Photo 1 Warehouse / Manufacturer bullets) -->
              <ul class="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <li
                  v-for="item in cat.highlights"
                  :key="item"
                  class="flex items-start gap-2.5 text-xs font-medium sm:text-sm"
                  :class="cat.theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'"
                >
                  <span class="mt-1 h-2 w-2 shrink-0 bg-[#FFCC00]"></span>
                  <span>{{ item }}</span>
                </li>
              </ul>

              <!-- Brands + Action Row -->
              <div
                class="mt-7 flex flex-col items-start justify-between gap-4 border-t pt-5 sm:flex-row sm:items-center"
                :class="cat.theme === 'dark' ? 'border-white/15' : 'border-neutral-200'"
              >
                <div class="flex flex-wrap items-center gap-1.5">
                  <span
                    class="text-xs font-extrabold uppercase tracking-wider"
                    :class="cat.theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'"
                  >
                    Marcas:
                  </span>
                  <span
                    v-for="brand in cat.popularBrands"
                    :key="brand"
                    class="px-2.5 py-0.5 text-xs font-black uppercase"
                    :class="
                      cat.theme === 'dark'
                        ? 'bg-white/10 text-[#FFCC00]'
                        : 'bg-[#121417] text-[#FFCC00]'
                    "
                  >
                    {{ brand }}
                  </span>
                </div>

                <!-- Solid Construction Yellow WhatsApp Button -->
                <a
                  :href="buildWhatsAppUrl(cat.whatsappMessage)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex w-full items-center justify-center gap-2.5 bg-[#FFCC00] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-[#121417] shadow-md transition hover:bg-[#FFD633] active:scale-[0.99] sm:w-auto sm:text-sm"
                >
                  <span>Consultar por WhatsApp</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
