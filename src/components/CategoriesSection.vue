<script setup lang="ts">
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'
</script>

<template>
  <section id="categorias" class="cv-auto scroll-mt-24 border-b border-slate-800/80 bg-slate-950 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center">
        <span class="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
          Departamentos en Tienda
        </span>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Categorías de Productos y Repuestos
        </h2>
        <p class="mt-3 text-base text-slate-300">
          Selecciona la línea que necesitas para abrir una consulta directa en WhatsApp con nuestro mostrador en el
          <strong class="text-white">{{ siteConfig.business.mallName }}</strong>.
        </p>
      </div>

      <!-- 4 Visual Cards Grid -->
      <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <article
          v-for="cat in siteConfig.categories"
          :key="cat.id"
          class="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/75 shadow-xl transition duration-300 hover:border-amber-400/50 hover:bg-slate-900"
        >
          <!-- Visual Header with Compressed WebP Image (< 75 KB) + Lazy Loading -->
          <div class="relative h-56 overflow-hidden bg-slate-900">
            <img
              :src="cat.image"
              :alt="cat.title"
              width="640"
              height="360"
              loading="lazy"
              decoding="async"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent"></div>

            <!-- Top Status Pill -->
            <div class="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 px-3 py-1 text-xs font-bold text-emerald-400 backdrop-blur-md">
              <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
              {{ cat.badge }}
            </div>

            <!-- Icon + Title Overlay -->
            <div class="absolute right-5 bottom-4 left-5 flex items-end justify-between gap-3">
              <div>
                <h3 class="text-xl font-extrabold text-white sm:text-2xl">
                  {{ cat.title }}
                </h3>
                <p class="mt-0.5 text-xs text-slate-200 sm:text-sm">
                  {{ cat.subtitle }}
                </p>
              </div>
              <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-950 shadow-lg">
                <!-- Bolt -->
                <svg v-if="cat.iconName === 'bolt'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <!-- Droplet -->
                <svg v-else-if="cat.iconName === 'droplet'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                </svg>
                <!-- Wrench -->
                <svg v-else-if="cat.iconName === 'wrench'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <!-- Paint -->
                <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 5a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8 5v4m0 0h-2v6h4v-6h-2z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Card Body -->
          <div class="flex flex-1 flex-col justify-between p-6">
            <div>
              <p class="text-sm leading-relaxed text-slate-300">
                {{ cat.description }}
              </p>

              <!-- Bullet Highlights -->
              <ul class="mt-4 space-y-2">
                <li
                  v-for="item in cat.highlights"
                  :key="item"
                  class="flex items-start gap-2.5 text-xs text-slate-200 sm:text-sm"
                >
                  <svg class="mt-0.5 h-4 w-4 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ item }}</span>
                </li>
              </ul>

              <!-- Featured Brands in Category -->
              <div class="mt-5 flex flex-wrap items-center gap-1.5">
                <span class="text-xs font-semibold text-slate-400">Marcas clave:</span>
                <span
                  v-for="brand in cat.popularBrands"
                  :key="brand"
                  class="rounded-md border border-slate-700/80 bg-slate-800/80 px-2 py-0.5 text-xs font-bold text-amber-300"
                >
                  {{ brand }}
                </span>
              </div>
            </div>

            <!-- Pre-filled Universal wa.me Inquiry Button -->
            <div class="mt-6 border-t border-slate-800 pt-4">
              <a
                :href="buildWhatsAppUrl(cat.whatsappMessage)"
                target="_blank"
                rel="noopener noreferrer"
                class="flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-emerald-500/15 transition hover:bg-emerald-400 active:scale-[0.99]"
              >
                <svg class="h-5 w-5 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.535 5.862l-1.535 5.638 5.792-1.519c1.693.902 3.621 1.419 5.675 1.419 6.627 0 12-5.373 12-12s-5.373-12-12.467-11.4z" />
                </svg>
                <span>Consultar {{ cat.title }} por WhatsApp</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
