<script setup lang="ts">
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

const bandBgColors = ['#dcdbd7', '#25292d', '#e5e5e5', '#1a1f23']
</script>

<template>
  <section id="categorias" class="cv-auto scroll-mt-24 bg-white py-14 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Title Header -->
      <div class="pb-10 text-center sm:pb-14">
        <span class="inline-block rounded-sm bg-[#f6892c] px-4 py-1 text-xs font-black uppercase tracking-widest text-white">
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

      <!-- Contained Alternating Left/Right & Light/Dark Product Banners -->
      <div class="flex flex-col overflow-hidden rounded-xl shadow-[0_18px_40px_rgba(0,0,0,0.14)]">
        <article
          v-for="(cat, idx) in siteConfig.categories"
          :key="cat.id"
          :style="{
            zIndex: siteConfig.categories.length - idx,
            backgroundColor: bandBgColors[idx] || (cat.theme === 'dark' ? '#1a1f23' : '#e5e5e5')
          }"
          :class="[
            'group relative w-full overflow-hidden shadow-[0_14px_30px_rgba(0,0,0,0.18)]',
            cat.theme === 'dark' ? 'text-white' : 'text-[#141619]'
          ]"
        >
          <div class="grid items-center gap-8 lg:min-h-[340px] lg:grid-cols-12 lg:gap-16 xl:gap-20">
            <!-- Product Image Column (Left on Even 0/2, Right on Odd 1/3) -->
            <div
              :class="[
                'flex h-64 w-full items-center overflow-hidden sm:h-76 lg:col-span-5 lg:h-[340px]',
                idx % 2 === 0
                  ? 'lg:order-1 justify-start'
                  : 'lg:order-2 justify-end'
              ]"
            >
              <img
                :src="cat.image"
                :alt="cat.title"
                width="680"
                height="650"
                loading="lazy"
                decoding="async"
                class="h-full w-full max-w-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.02] lg:max-w-none"
                :class="idx % 2 === 0 ? 'object-left' : 'ml-auto object-right'"
              />
            </div>

            <!-- Content Column (Right on Even 0/2, Left on Odd 1/3) with Clear Separation -->
            <div
              :class="[
                'flex flex-col justify-center px-6 pb-10 sm:px-10 lg:col-span-7 lg:py-12',
                idx % 2 === 0
                  ? 'lg:order-2 lg:pl-6 lg:pr-14'
                  : 'lg:order-1 lg:pl-14 lg:pr-6'
              ]"
            >
              <!-- Bold Industrial Uppercase Headline -->
              <h3
                class="text-2xl font-black uppercase tracking-tight sm:text-4xl lg:text-[2.35rem] lg:leading-[1.08]"
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
                class="mt-3 max-w-lg text-xs leading-relaxed sm:text-sm"
                :class="cat.theme === 'dark' ? 'text-neutral-300/90' : 'text-neutral-700'"
              >
                {{ cat.description }}
              </p>

              <!-- Button with Subtle Border Radius (rounded-md) -->
              <div class="mt-6">
                <a
                  :href="buildWhatsAppUrl(cat.whatsappMessage)"
                  target="_blank"
                  rel="noopener noreferrer"
                  :class="[
                    'inline-flex items-center justify-center gap-2 rounded-md border-[1.5px] px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] transition duration-200 sm:text-xs',
                    cat.theme === 'dark'
                      ? 'border-[#f6892c] text-white hover:bg-[#f6892c] hover:text-white'
                      : idx === 0
                        ? 'border-[#f6892c] bg-white/60 text-[#141619] hover:bg-[#f6892c] hover:text-white'
                        : 'border-[#141619] bg-white/60 text-[#141619] hover:bg-[#141619] hover:text-white'
                  ]"
                >
                  <span>Cotizar Ahora</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
