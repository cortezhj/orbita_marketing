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
    nodeX: 74,
    nodeY: 64
  },
  {
    indexLabel: '02',
    shortLabel: 'HERRAMIENTAS',
    headlineTop: 'HERRAMIENTAS PRO',
    headlineBottom: 'para cualquier trabajo',
    description:
      'Ofrecemos venta de herramientas eléctricas, manuales, plomería y materiales para todo tipo de trabajos de construcción, remodelación y mantenimiento en el C.C. Los Aviadores.',
    image: '/images/hero-local.webp',
    whatsappMessage: siteConfig.defaultWhatsappMessages.heroPrimary,
    nodeX: 52,
    nodeY: 158
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
    nodeX: 76,
    nodeY: 252
  },
  {
    indexLabel: '04',
    shortLabel: 'PINTURAS',
    headlineTop: 'PINTURAS Y SELLADORES',
    headlineBottom: 'para cualquier acabado',
    description:
      'Pinturas en caucho clase A, esmaltes, impermeabilizantes Sika, siliconas, adhesivos epóxicos y fijaciones para renovar y proteger tu hogar o local.',
    image: '/images/cat-pinturas.webp',
    whatsappMessage:
      'Hola, vi su página y quiero cotizar Pinturas, Adhesivos y Construcción Ligera en el C.C. Parque Los Aviadores.',
    nodeX: 132,
    nodeY: 332
  }
]

// Default to slide index 1 ("02 / 04 - HERRAMIENTAS") matching the reference image
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
  <!-- Hero extends under the fixed transparent Header & Menu (pt-28 / lg:pt-36) -->
  <section class="relative overflow-hidden bg-[#141414] pt-28 text-white sm:pt-34 lg:pt-38">
    <!-- Exact Dark Grunge Concrete / Slate Wall Texture Backdrop (Like Reference Photo) -->
    <div class="pointer-events-none absolute inset-0">
      <!-- Real compressed dark concrete/slate texture image -->
      <img
        src="/images/hero-bg-texture.webp"
        alt=""
        aria-hidden="true"
        width="1080"
        height="720"
        decoding="async"
        class="h-full w-full object-cover opacity-45 mix-blend-luminosity contrast-125"
      />
      <!-- Dark vignette around edges + smoky lighter charcoal center behind product -->
      <div
        class="absolute inset-0"
        style="
          background:
            radial-gradient(circle at 68% 52%, rgba(75, 75, 75, 0.36) 0%, rgba(22, 22, 22, 0.86) 52%, rgba(10, 10, 10, 0.97) 100%),
            linear-gradient(to bottom, rgba(10, 10, 10, 0.78) 0%, rgba(18, 18, 18, 0.25) 28%, rgba(18, 18, 18, 0.35) 75%, rgba(10, 10, 10, 0.92) 100%);
        "
      ></div>
    </div>

    <!-- Main Hero Container -->
    <div class="relative mx-auto max-w-7xl px-4 pt-6 pb-20 sm:px-6 sm:pt-10 sm:pb-24 lg:px-8 lg:pt-12 lg:pb-28">
      <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-4">
        <!-- Left Column: Bold Golden-Yellow 2-Line Headline + Muted Gray Text + Glowing Yellow Button -->
        <div class="lg:col-span-5">
          <h1 class="text-3xl font-black tracking-tight text-[#FFB800] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            <span class="block uppercase">{{ currentSlide.headlineTop }}</span>
            <span class="mt-1 block font-extrabold text-[#FFB800]">
              {{ currentSlide.headlineBottom }}
            </span>
          </h1>

          <p class="mt-6 max-w-md text-xs leading-relaxed text-neutral-300/85 sm:text-sm">
            {{ currentSlide.description }}
          </p>

          <!-- Glowing Golden-Yellow Rectangular Button (Exact Reference Look) -->
          <div class="mt-10">
            <a
              :href="currentWhatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded bg-gradient-to-b from-[#FFD859] to-[#F5A623] px-11 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#141414] shadow-[0_14px_38px_-4px_rgba(245,166,35,0.58)] transition duration-200 hover:-translate-y-0.5 hover:from-[#FFE074] hover:to-[#FFB800] active:scale-[0.99]"
            >
              <span>COTIZAR AHORA</span>
            </a>
          </div>
        </div>

        <!-- Right Column: Orbital Arc Selector + Cutout Blended Equipment/Tool + < 02/04 > Counter -->
        <div class="relative lg:col-span-7">
          <div class="relative mx-auto flex min-h-[320px] max-w-2xl items-center justify-end sm:min-h-[390px]">
            <!-- Desktop Curved Orbital Arc with 4 Interactive Category Nodes -->
            <div class="pointer-events-none absolute inset-y-0 left-2 z-20 hidden w-72 sm:block lg:left-6">
              <svg
                viewBox="0 0 220 380"
                class="h-full w-full overflow-visible"
                fill="none"
              >
                <!-- Subtle Orbital Curve Path -->
                <path
                  d="M 112 20 Q 6 190 158 360"
                  stroke="rgba(255,255,255,0.22)"
                  stroke-width="1.25"
                />

                <!-- Nodes along the curve -->
                <g
                  v-for="(slide, idx) in slides"
                  :key="slide.indexLabel"
                  class="pointer-events-auto cursor-pointer"
                  @click="activeIndex = idx"
                >
                  <!-- Soft Outer Glow Ring when Active -->
                  <circle
                    v-if="activeIndex === idx"
                    :cx="slide.nodeX"
                    :cy="slide.nodeY"
                    r="11"
                    fill="rgba(255, 255, 255, 0.2)"
                  />
                  <!-- Core Dot -->
                  <circle
                    :cx="slide.nodeX"
                    :cy="slide.nodeY"
                    :r="activeIndex === idx ? 5 : 3.5"
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
                    ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.65)]'
                    : 'text-neutral-500 hover:text-neutral-300'
                "
                :style="{
                  top: `${(slide.nodeY / 380) * 100}%`,
                  right: `${100 - (slide.nodeX / 220) * 100 + 7}%`
                }"
                @click="activeIndex = idx"
              >
                {{ slide.shortLabel }}
              </button>
            </div>

            <!-- Mobile Category Selector Pills -->
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

            <!-- Frameless Blended Equipment/Tool Showcase (No Card Box, Soft Radial Edge Mask) -->
            <div class="relative z-10 w-full sm:w-[72%]">
              <!-- Subtle Smoky Spotlight Behind Equipment -->
              <div class="pointer-events-none absolute inset-8 rounded-full bg-[#FFB800]/12 blur-3xl"></div>

              <div class="relative flex items-center justify-center">
                <img
                  :src="currentSlide.image"
                  :alt="currentSlide.headlineTop"
                  width="720"
                  height="480"
                  fetchpriority="high"
                  decoding="async"
                  class="h-64 w-full object-cover transition duration-300 sm:h-82"
                  style="
                    -webkit-mask-image: radial-gradient(ellipse 78% 74% at 52% 50%, #000 55%, transparent 100%);
                    mask-image: radial-gradient(ellipse 78% 74% at 52% 50%, #000 55%, transparent 100%);
                  "
                />
                <!-- Ground Contact Shadow under the Equipment -->
                <div class="pointer-events-none absolute -bottom-3 h-7 w-4/5 rounded-full bg-black/80 blur-xl"></div>
              </div>

              <!-- Bottom-Right Numeric Slide Counter (< 02/04 > Exact Reference Match) -->
              <div class="mt-4 flex items-center justify-end gap-3 pr-2 select-none">
                <button
                  type="button"
                  aria-label="Anterior categoría"
                  class="flex h-8 w-8 items-center justify-center text-neutral-400 transition hover:text-[#FFB800]"
                  @click="prevSlide"
                >
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
        class="h-7 w-full sm:h-10"
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
