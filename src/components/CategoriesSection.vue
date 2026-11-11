<script setup lang="ts">
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

const bandBgColors = ['#dcdbd7', '#25292d', '#e5e5e5', '#1a1f23']
</script>

<template>
  <section id="categorias" class="cv-auto scroll-mt-24 bg-white pt-14 sm:pt-20">
    <!-- Section Title Header -->
    <div class="mx-auto max-w-7xl px-4 pb-10 text-center sm:px-6 sm:pb-14 lg:px-8">
      <span class="inline-block bg-[#f6892c] px-4 py-1 text-xs font-black uppercase tracking-widest text-white">
        LÍNEAS DISPONIBLES EN TIENDA
      </span>
      <h2 class="mt-3 text-3xl font-black uppercase tracking-tight text-[#121417] sm:text-5xl">
        Nuestros Productos
      </h2>
      <p class="mx-auto mt-3 max-w-2xl text-sm font-medium text-neutral-600 sm:text-base">
        Explora nuestras líneas de productos y cotiza al instante por WhatsApp con retiro inmediato en el
        <strong class="font-black text-[#121417]">{{ siteConfig.business.mallShort }} ({{ siteConfig.business.localNumber }})</strong>.
      </p>
    </div>

    <!-- Full-Width Stacked Alternating Left/Right & Light/Dark Horizontal Product Banners -->
    <div class="flex flex-col">
      <article
        v-for="(cat, idx) in siteConfig.categories"
        :key="cat.id"
        :style="{
          zIndex: siteConfig.categories.length - idx,
          backgroundColor: bandBgColors[idx] || (cat.theme === 'dark' ? '#1a1f23' : '#e5e5e5')
        }"
        :class="[
          'group relative w-full overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.22)]',
          cat.theme === 'dark' ? 'text-white' : 'text-[#141619]'
        ]"
      >
        <!-- Desktop Full-Bleed Studio Flat-Lay Banner Background -->
        <div class="pointer-events-none absolute inset-0 hidden lg:block">
          <img
            :src="cat.image"
            :alt="cat.title"
            width="1200"
            height="672"
            loading="lazy"
            decoding="async"
            class="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.015]"
          />
        </div>

        <!-- Mobile / Tablet Product Half View (Cropped to the Product Side) -->
        <div class="relative h-60 w-full overflow-hidden sm:h-72 lg:hidden">
          <img
            :src="cat.image"
            :alt="cat.title"
            width="1200"
            height="672"
            loading="lazy"
            decoding="async"
            class="h-full w-[175%] max-w-none object-cover"
            :class="idx % 2 === 0 ? 'object-left' : 'ml-auto object-right'"
          />
        </div>

        <!-- Content Grid (Alternating Right on Even 0/2, Left on Odd 1/3) -->
        <div class="relative z-10 mx-auto grid max-w-7xl items-center lg:min-h-[380px] lg:grid-cols-12 xl:min-h-[420px]">
          <div
            :class="[
              'flex flex-col justify-center px-6 py-9 sm:px-12 lg:col-span-6 lg:py-14',
              idx % 2 === 0
                ? 'lg:col-start-7 lg:pl-12 lg:pr-10'
                : 'lg:col-start-1 lg:pl-12 lg:pr-10'
            ]"
          >
            <!-- Bold Industrial Uppercase Headline (Matching Reference Photo) -->
            <h3
              class="text-2xl font-black uppercase tracking-tight sm:text-4xl lg:text-[2.45rem] lg:leading-[1.06]"
              :class="cat.theme === 'dark' ? 'text-white' : 'text-[#141619]'"
            >
              {{ cat.title }}
            </h3>

            <!-- Clean Uppercase Subtitle -->
            <p
              class="mt-2.5 text-xs font-extrabold uppercase tracking-[0.06em] sm:text-sm"
              :class="cat.theme === 'dark' ? 'text-neutral-100' : 'text-[#1E2229]'"
            >
              {{ cat.subtitle }}
            </p>

            <!-- Brand Orange Uppercase Tagline -->
            <p class="mt-1 text-xs font-black uppercase tracking-[0.08em] text-[#f6892c] sm:text-sm">
              {{ cat.badge }}
            </p>

            <!-- Concise Product Line Description -->
            <p
              class="mt-3 max-w-md text-xs leading-relaxed sm:text-sm"
              :class="cat.theme === 'dark' ? 'text-neutral-300/90' : 'text-neutral-700'"
            >
              {{ cat.description }}
            </p>

            <!-- Rectangular Outline Button Matching Reference Photo -->
            <div class="mt-5">
              <a
                :href="buildWhatsAppUrl(cat.whatsappMessage)"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                  'inline-flex items-center justify-center gap-2 border-[1.5px] px-5 py-2 text-[11px] font-black uppercase tracking-[0.12em] transition duration-200 sm:text-xs',
                  cat.theme === 'dark'
                    ? 'border-[#f6892c] text-white hover:bg-[#f6892c] hover:text-white'
                    : idx === 0
                      ? 'border-[#f6892c] bg-white/50 text-[#141619] hover:bg-[#f6892c] hover:text-white'
                      : 'border-[#141619] bg-white/50 text-[#141619] hover:bg-[#141619] hover:text-white'
                ]"
              >
                <span>Cotizar Ahora</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
