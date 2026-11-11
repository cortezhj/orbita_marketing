<script setup lang="ts">
import { computed, ref } from 'vue'
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

interface HeroSlide {
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
    shortLabel: 'ELECTRICIDAD',
    headlineTop: 'ELECTRICIDAD Y LED',
    headlineBottom: 'para cualquier instalación',
    description:
      'Cables THHN, breakers termomagnéticos, tomacorrientes Bticino, paneles y reflectores LED disponibles hoy en el C.C. Ciudad Crepuscular (Local PB-06).',
    image: '/images/cat-electricidad.webp',
    whatsappMessage:
      'Hola Órbita Marketing, vi su página y quiero cotizar materiales de Electricidad e Iluminación en el C.C. Ciudad Crepuscular.',
    nodeX: 74,
    nodeY: 64
  },
  {
    shortLabel: 'HERRAMIENTAS',
    headlineTop: 'HERRAMIENTAS PRO',
    headlineBottom: 'para cualquier trabajo',
    description:
      'Venta de herramientas eléctricas, manuales, plomería y materiales para todo tipo de trabajos de construcción, remodelación y mantenimiento en el C.C. Ciudad Crepuscular, Barquisimeto.',
    image: '/images/hero-local.webp',
    whatsappMessage: siteConfig.defaultWhatsappMessages.heroPrimary,
    nodeX: 52,
    nodeY: 158
  },
  {
    shortLabel: 'PLOMERÍA',
    headlineTop: 'PLOMERÍA Y TUBERÍAS',
    headlineBottom: 'para cualquier reparación',
    description:
      'Tuberías y conexiones PVC/CPVC, grifería, llaves de paso, herrajes sanitarios y bombas de agua con entrega inmediata en nuestro mostrador del Local PB-06.',
    image: '/images/cat-plomeria.webp',
    whatsappMessage:
      'Hola Órbita Marketing, vi su página y necesito cotizar repuestos o materiales de Plomería y Tuberías en el C.C. Ciudad Crepuscular.',
    nodeX: 76,
    nodeY: 252
  },
  {
    shortLabel: 'PINTURAS',
    headlineTop: 'PINTURAS Y SELLADORES',
    headlineBottom: 'para cualquier acabado',
    description:
      'Pinturas en caucho clase A, esmaltes, impermeabilizantes Sika, siliconas, adhesivos epóxicos y fijaciones para renovar y proteger tu hogar o local.',
    image: '/images/cat-pinturas.webp',
    whatsappMessage:
      'Hola Órbita Marketing, vi su página y quiero cotizar Pinturas, Adhesivos y Construcción Ligera en el C.C. Ciudad Crepuscular.',
    nodeX: 132,
    nodeY: 332
  }
]

const activeIndex = ref(1)

const currentSlide = computed(() => slides[activeIndex.value] ?? slides[1]!)
const currentWhatsappUrl = computed(() =>
  buildWhatsAppUrl(currentSlide.value.whatsappMessage)
)
</script>

<template>
  <!-- Hero extends under the fixed transparent Header & Menu (pt-28 / lg:pt-38) -->
  <section class="relative overflow-hidden bg-[#1e1f21] pt-28 text-white sm:pt-34 lg:pt-38">
    <!-- Authentic Dark Cement / Concrete Wall Texture Backdrop -->
    <div class="pointer-events-none absolute inset-0">
      <!-- Raw Cement Texture Image -->
      <img
        src="/images/hero-bg-texture.webp"
        alt=""
        aria-hidden="true"
        width="1200"
        height="800"
        decoding="async"
        class="h-full w-full object-cover opacity-90 contrast-125 brightness-110"
      />
      <!-- Fine SVG Cement Grain + Subtle Soft Vignette so Cement Texture Stays Clearly Visible -->
      <div
        class="absolute inset-0"
        style="
          background:
            radial-gradient(circle at 65% 50%, rgba(255, 255, 255, 0.06) 0%, rgba(22, 23, 25, 0.35) 55%, rgba(12, 13, 14, 0.78) 100%);
        "
      ></div>
    </div>

    <!-- Main Hero Container -->
    <div class="relative mx-auto max-w-7xl px-4 pt-6 pb-20 sm:px-6 sm:pt-10 sm:pb-24 lg:px-8 lg:pt-12 lg:pb-28">
      <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-4">
        <!-- Left Column: Brand Orange (#f6892c) 2-Line Headline + Description + Clean Modern CTA Button -->
        <div class="lg:col-span-5">
          <h1 class="text-3xl font-black tracking-tight text-[#f6892c] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            <span class="block uppercase">{{ currentSlide.headlineTop }}</span>
            <span class="mt-1 block font-extrabold text-[#f6892c]">
              {{ currentSlide.headlineBottom }}
            </span>
          </h1>

          <p class="mt-6 max-w-md text-xs leading-relaxed text-neutral-200/90 sm:text-sm">
            {{ currentSlide.description }}
          </p>

          <!-- Clean, Refined Brand-Orange Button without harsh yellow glare -->
          <div class="mt-9">
            <a
              :href="currentWhatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#f6892c] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-lg shadow-black/40 transition duration-200 hover:-translate-y-0.5 hover:bg-[#e07519] active:scale-[0.99] sm:text-sm"
            >
              <span>Cotizar Ahora</span>
              <svg
                class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Column: Orbital Arc Selector + Cutout Blended Equipment/Tool (No Numbering) -->
        <div class="relative lg:col-span-7">
          <div class="relative mx-auto flex min-h-[320px] max-w-2xl items-center justify-end sm:min-h-[380px]">
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
                  :key="slide.shortLabel"
                  class="pointer-events-auto cursor-pointer"
                  @click="activeIndex = idx"
                >
                  <!-- Soft Outer Halo Ring when Active -->
                  <circle
                    v-if="activeIndex === idx"
                    :cx="slide.nodeX"
                    :cy="slide.nodeY"
                    r="11"
                    fill="rgba(246, 137, 44, 0.28)"
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
                    : 'text-neutral-400 hover:text-neutral-200'
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
                    ? 'bg-[#f6892c] text-white'
                    : 'bg-white/10 text-neutral-300'
                "
                @click="activeIndex = idx"
              >
                {{ slide.shortLabel }}
              </button>
            </div>

            <!-- Frameless Blended Equipment/Tool Showcase -->
            <div class="relative z-10 w-full sm:w-[72%]">
              <!-- Subtle Warm Spotlight Behind Equipment -->
              <div class="pointer-events-none absolute inset-8 rounded-full bg-[#f6892c]/15 blur-3xl"></div>

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
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Rugged / Torn Paper-Asphalt White Bottom Divider -->
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
