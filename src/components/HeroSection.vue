<script setup lang="ts">
import { computed, ref } from 'vue'
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

interface HeroSlide {
  indexLabel: string
  shortLabel: string
  headlineTop: string
  headlineBottom: string
  description: string
  image: string
  whatsappMessage: string
  tag: string
  nodeX: number
  nodeY: number
}

const slides: HeroSlide[] = [
  {
    indexLabel: '01',
    shortLabel: 'ELECTRICIDAD',
    headlineTop: 'ELECTRICIDAD Y LED',
    headlineBottom: 'para cualquier instalación',
    description:
      'Cables THHN, breakers termomagnéticos, tomacorrientes Bticino, paneles y reflectores LED disponibles hoy en el C.C. Parque Los Aviadores (Local PB-114).',
    image: '/images/cat-electricidad.webp',
    whatsappMessage:
      'Hola, vi su página y quiero cotizar materiales de Electricidad e Iluminación en su local del C.C. Parque Los Aviadores.',
    tag: 'Bticino • Osram • 3M',
    nodeX: 72,
    nodeY: 72
  },
  {
    indexLabel: '02',
    shortLabel: 'HERRAMIENTAS',
    headlineTop: 'HERRAMIENTAS PRO',
    headlineBottom: 'para cualquier trabajo',
    description:
      'Taladros percutores, esmeriles, juegos de llaves y herramientas manuales y eléctricas originales en el C.C. Parque Los Aviadores. Cotiza al instante por WhatsApp.',
    image: '/images/hero-local.webp',
    whatsappMessage: siteConfig.defaultWhatsappMessages.heroPrimary,
    tag: 'DeWalt • Truper • Bosch • Stanley',
    nodeX: 54,
    nodeY: 162
  },
  {
    indexLabel: '03',
    shortLabel: 'PLOMERÍA',
    headlineTop: 'PLOMERÍA Y TUBERÍAS',
    headlineBottom: 'para cualquier reparación',
    description:
      'Tuberías y conexiones PVC/CPVC, grifería, llaves de paso, herrajes sanitarios y bombas de agua con entrega inmediata en nuestro mostrador del Centro Comercial.',
    image: '/images/cat-plomeria.webp',
    whatsappMessage:
      'Hola, vi su página y necesito cotizar repuestos o materiales de Plomería y Tuberías en el C.C. Parque Los Aviadores.',
    tag: 'Pavco • Coflex • Ingco',
    nodeX: 78,
    nodeY: 252
  },
  {
    indexLabel: '04',
    shortLabel: 'PINTURAS Y ADHESIVOS',
    headlineTop: 'PINTURAS Y SELLADORES',
    headlineBottom: 'para cualquier acabado',
    description:
      'Pinturas en caucho clase A, esmaltes, impermeabilizantes Sika, siliconas, adhesivos epóxicos y fijaciones para renovar y proteger tu hogar o local.',
    image: '/images/cat-pinturas.webp',
    whatsappMessage:
      'Hola, vi su página y quiero cotizar Pinturas, Adhesivos y Construcción Ligera en el C.C. Parque Los Aviadores.',
    tag: 'Sika • Venezolana de Pinturas • 3M',
    nodeX: 132,
    nodeY: 326
  }
]

// Default to slide index 1 ("02 / 04 - HERRAMIENTAS") just like the reference image!
const activeIndex = ref(1)

const currentSlide = computed(() => slides[activeIndex.value] ?? slides[1]!)
const currentWhatsappUrl = computed(() =>
  buildWhatsAppUrl(currentSlide.value.whatsappMessage)
)

function prevSlide() {
  activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length
}

function nextSlide() {
  activeIndex.value = (activeIndex.value + 1) % slides.length
}
</script>

<template>
  <section class="relative overflow-hidden bg-[#141414] text-white">
    <!-- Dark Textured Charcoal Background + Warm Spotlight Behind Equipment -->
    <div class="pointer-events-none absolute inset-0">
      <!-- Subtle concrete/asphalt radial vignette -->
      <div
        class="absolute inset-0"
        style="background: radial-gradient(circle at 72% 46%, rgba(255, 184, 0, 0.16) 0%, rgba(20, 20, 20, 0.92) 55%, #111111 100%);"
      ></div>
      <!-- Fine industrial grain grid -->
      <div
        class="absolute inset-0 opacity-[0.035]"
        style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 18px 18px;"
      ></div>
    </div>

    <!-- Main Hero Content -->
    <div class="relative mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 sm:pt-14 sm:pb-24 lg:px-8 lg:pt-16 lg:pb-28">
      <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
        <!-- Left Column: Bold Golden-Yellow 2-Line Headline + Description + Glowing Yellow CTA Button -->
        <div class="lg:col-span-6">
          <div class="inline-flex items-center gap-2 rounded bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-neutral-300 ring-1 ring-white/10">
            <span class="h-2 w-2 rounded-full bg-[#FFB800]"></span>
            <span>{{ siteConfig.business.mallName }} • {{ siteConfig.business.localNumber }}</span>
          </div>

          <h1 class="mt-5 text-3xl font-black tracking-tight text-[#FFB800] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12]">
            <span class="block uppercase">{{ currentSlide.headlineTop }}</span>
            <span class="mt-1 block font-extrabold text-[#FFB800]">
              {{ currentSlide.headlineBottom }}
            </span>
          </h1>

          <p class="mt-5 max-w-md text-sm leading-relaxed text-neutral-300/90 sm:text-base">
            {{ currentSlide.description }}
          </p>

          <!-- Glowing Golden-Yellow Rectangular Button (Exact Reference Look) -->
          <div class="mt-9 flex flex-wrap items-center gap-5">
            <a
              :href="currentWhatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-3 rounded bg-gradient-to-b from-[#FFD859] to-[#F5A623] px-9 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#141414] shadow-[0_12px_35px_-4px_rgba(245,166,35,0.55)] transition duration-200 hover:-translate-y-0.5 hover:from-[#FFE074] hover:to-[#FFB800] active:scale-[0.99] sm:text-sm"
            >
              <span>COTIZAR POR WHATSAPP</span>
            </a>

            <a
              href="#ubicacion"
              class="text-xs font-bold uppercase tracking-widest text-neutral-300 underline-offset-8 transition hover:text-[#FFB800] hover:underline"
            >
              Ver ubicación en el C.C. →
            </a>
          </div>
        </div>

        <!-- Right Column: Interactive Curved Orbital Arc + Product/Tool Showcase + < 02/04 > Counter -->
        <div class="relative lg:col-span-6">
          <div class="relative mx-auto flex min-h-[340px] max-w-xl items-center justify-end sm:min-h-[390px]">
            <!-- Desktop Curved Orbital Arc with 4 Interactive Category Nodes -->
            <div class="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-64 sm:block">
              <svg
                viewBox="0 0 220 380"
                class="h-full w-full overflow-visible"
                fill="none"
              >
                <!-- Subtle Orbital Curve Path -->
                <path
                  d="M 110 25 Q 10 190 155 355"
                  stroke="rgba(255,255,255,0.18)"
                  stroke-width="1.5"
                />

                <!-- Nodes along the curve -->
                <g
                  v-for="(slide, idx) in slides"
                  :key="slide.indexLabel"
                  class="pointer-events-auto cursor-pointer"
                  @click="activeIndex = idx"
                >
                  <!-- Outer Halo Ring when Active -->
                  <circle
                    v-if="activeIndex === idx"
                    :cx="slide.nodeX"
                    :cy="slide.nodeY"
                    r="13"
                    fill="rgba(255, 255, 255, 0.15)"
                    stroke="rgba(255, 184, 0, 0.7)"
                    stroke-width="1.5"
                  />
                  <!-- Core Dot -->
                  <circle
                    :cx="slide.nodeX"
                    :cy="slide.nodeY"
                    :r="activeIndex === idx ? 5.5 : 4"
                    :fill="activeIndex === idx ? '#FFFFFF' : 'rgba(255,255,255,0.35)'"
                  />
                </g>
              </svg>

              <!-- Text Labels Positioned Next to the 4 Arc Nodes -->
              <button
                v-for="(slide, idx) in slides"
                :key="slide.shortLabel"
                type="button"
                class="pointer-events-auto absolute -translate-y-1/2 text-right text-[11px] font-extrabold uppercase tracking-wider transition focus:outline-none"
                :class="
                  activeIndex === idx
                    ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                    : 'text-neutral-500 hover:text-neutral-300'
                "
                :style="{
                  top: `${(slide.nodeY / 380) * 100}%`,
                  right: `${100 - (slide.nodeX / 220) * 100 + 8}%`
                }"
                @click="activeIndex = idx"
              >
                {{ slide.shortLabel }}
              </button>
            </div>

            <!-- Mobile Category Pills (Visible on small screens where arc is compact) -->
            <div class="mb-4 flex flex-wrap gap-1.5 sm:hidden">
              <button
                v-for="(slide, idx) in slides"
                :key="slide.shortLabel"
                type="button"
                class="rounded px-2.5 py-1 text-[10px] font-black uppercase tracking-wider transition"
                :class="
                  activeIndex === idx
                    ? 'bg-[#FFB800] text-[#141414]'
                    : 'bg-white/10 text-neutral-300'
                "
                @click="activeIndex = idx"
              >
                {{ slide.shortLabel }}
              </button>
            </div>

            <!-- Spotlighted Yellow Equipment / Tool Visual -->
            <div class="relative z-10 w-full sm:w-[76%]">
              <!-- Ambient Yellow Backlight Glow -->
              <div class="pointer-events-none absolute inset-6 rounded-full bg-[#FFB800]/20 blur-3xl"></div>

              <div class="relative overflow-hidden rounded-xl border border-white/15 bg-[#1B1B1B] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
                <img
                  :src="currentSlide.image"
                  :alt="currentSlide.headlineTop"
                  width="720"
                  height="480"
                  fetchpriority="high"
                  decoding="async"
                  class="h-64 w-full object-cover transition duration-300 sm:h-80"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>

                <!-- Brand Tag Overlay -->
                <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span class="rounded bg-[#FFB800] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#141414]">
                    {{ currentSlide.tag }}
                  </span>
                  <span class="text-[11px] font-bold text-neutral-200">
                    Stock en {{ siteConfig.business.localNumber }}
                  </span>
                </div>
              </div>

              <!-- Bottom-Right Numeric Slide Counter (< 02/04 > Exact Reference Match) -->
              <div class="mt-5 flex items-center justify-end gap-3 select-none">
                <button
                  type="button"
                  aria-label="Anterior categoría"
                  class="flex h-8 w-8 items-center justify-center text-neutral-400 transition hover:text-[#FFB800]"
                  @click="prevSlide"
                >
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div class="flex items-baseline font-black tracking-tight">
                  <span class="text-3xl text-[#FFB800] sm:text-4xl">{{ currentSlide.indexLabel }}</span>
                  <span class="ml-0.5 text-xs text-neutral-400">/04</span>
                </div>

                <button
                  type="button"
                  aria-label="Siguiente categoría"
                  class="flex h-8 w-8 items-center justify-center text-neutral-400 transition hover:text-[#FFB800]"
                  @click="nextSlide"
                >
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Rugged / Torn Paper-Asphalt White Bottom Divider (Exact Reference Bottom Transition) -->
    <div class="relative z-20 -mb-px w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-full preserve-3d sm:h-10"
        preserveAspectRatio="none"
      >
        <path
          d="M0 24L28 16L58 27L92 14L126 26L162 18L198 29L235 15L271 25L310 17L348 28L385 14L422 25L458 19L495 30L532 16L570 26L608 15L644 27L682 18L720 29L758 14L796 26L834 17L872 28L910 16L948 25L986 15L1024 28L1062 18L1100 27L1138 14L1176 26L1214 17L1252 29L1290 15L1328 25L1366 18L1404 27L1440 16V44H0V24Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  </section>
</template>
