<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import heroBackgroundUrl from '../assets/background.avif'
import { buildWhatsAppUrl } from '../config/siteConfig'

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
    shortLabel: 'WALL PANEL Y DECO',
    headlineTop: 'WALL PANEL Y DECORACIÓN',
    headlineBottom: 'revestimientos, lavaplatos y duchas',
    description:
      'Transforma tus espacios con nuestra línea de revestimientos, Wall Panel WPC, láminas decorativas, lavaplatos multifuncionales, duchas y grifería moderna en el C.C. Ciudad Crepuscular (Local PB-06).',
    image: '/images/hero-wallpanel.png',
    whatsappMessage:
      'Hola Órbita Marketing, vi su página y quiero cotizar Revestimientos, Wall Panel, Lavaplatos o Duchas en el C.C. Ciudad Crepuscular.',
    nodeX: 74,
    nodeY: 64
  },
  {
    shortLabel: 'HERRAMIENTAS',
    headlineTop: 'FERRETERÍA Y HERRAMIENTAS',
    headlineBottom: 'para cualquier proyecto',
    description:
      'Ahora también somos tu ferretería de confianza en Barquisimeto: taladros, esmeriles, herramientas manuales y eléctricas, electricidad, iluminación LED y fijaciones.',
    image: '/images/hero-herramientas.png',
    whatsappMessage:
      'Hola Órbita Marketing, vi su página y quiero cotizar Herramientas y artículos de Ferretería en el C.C. Ciudad Crepuscular.',
    nodeX: 52,
    nodeY: 158
  },
  {
    shortLabel: 'CEMENTO Y BLOQUES',
    headlineTop: 'CEMENTO Y BLOQUES',
    headlineBottom: 'materiales de construcción',
    description:
      'Todo para tu obra y remodelación en un solo lugar: sacos de cemento, pego, bloques, aditivos e impermeabilizantes con atención directa en el C.C. Ciudad Crepuscular.',
    image: '/images/hero-cemento.png',
    whatsappMessage:
      'Hola Órbita Marketing, vi su página y necesito cotizar Cemento, Bloques y Materiales de Construcción.',
    nodeX: 76,
    nodeY: 252
  },
  {
    shortLabel: 'PINTURAS',
    headlineTop: 'PINTURAS Y ACABADOS',
    headlineBottom: 'para renovar tus espacios',
    description:
      'Pinturas en caucho, esmaltes, impermeabilizantes Sika, siliconas, adhesivos para Wall Panel, rodillos y brochas con disponibilidad inmediata en nuestro local PB-06.',
    image: '/images/hero-pinturas.png',
    whatsappMessage:
      'Hola Órbita Marketing, vi su página y quiero cotizar Pinturas, Adhesivos y Acabados en el C.C. Ciudad Crepuscular.',
    nodeX: 132,
    nodeY: 332
  }
]

const activeIndex = ref(0)
let autoplayTimer: ReturnType<typeof setInterval> | null = null

const currentSlide = computed(() => slides[activeIndex.value] ?? slides[0]!)
const currentWhatsappUrl = computed(() =>
  buildWhatsAppUrl(currentSlide.value.whatsappMessage)
)

function selectSlide(idx: number) {
  activeIndex.value = idx
  restartAutoplay()
}

function startAutoplay() {
  autoplayTimer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % slides.length
  }, 4200)
}

function restartAutoplay() {
  if (autoplayTimer) clearInterval(autoplayTimer)
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  if (autoplayTimer) clearInterval(autoplayTimer)
})
</script>

<template>
  <!-- Exact Screen-Sized Hero (h-dvh) with Fixed Header Clearance and Bottom Jagged Divider -->
  <section class="relative flex min-h-[580px] flex-col justify-between overflow-hidden bg-[#0a0a0a] pt-26 text-white sm:pt-30 lg:h-dvh lg:max-h-dvh lg:pt-32">
    <!-- Background Image from src/assets/background.avif with Dark Black Overlay -->
    <div class="pointer-events-none absolute inset-0">
      <img
        :src="heroBackgroundUrl"
        alt=""
        aria-hidden="true"
        fetchpriority="high"
        decoding="async"
        class="h-full w-full object-cover opacity-40 brightness-75 contrast-125"
      />
      <!-- Rich dark black overlay + vignette -->
      <div
        class="absolute inset-0 bg-black/55"
        style="
          background: radial-gradient(ellipse 85% 80% at 55% 50%, rgba(10, 10, 10, 0.55) 0%, rgba(5, 5, 5, 0.88) 100%);
        "
      ></div>
    </div>

    <!-- Main Hero Container (Centered Vertically Inside Screen Height) -->
    <div class="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-4 sm:px-6 lg:px-8">
      <div class="grid w-full items-center gap-6 lg:grid-cols-12 lg:gap-4">
        <!-- Left Column: Brand Orange (#f6892c) Headline + Description + Clean Modern CTA Button -->
        <div class="lg:col-span-6">
          <h1 class="text-3xl font-black tracking-tight text-[#f6892c] drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)] sm:text-4xl lg:text-[3.1rem] lg:leading-[1.1]">
            <span class="block uppercase">{{ currentSlide.headlineTop }}</span>
            <span class="mt-1 block font-extrabold text-[#f6892c]">
              {{ currentSlide.headlineBottom }}
            </span>
          </h1>

          <p class="mt-4 max-w-lg text-xs leading-relaxed text-neutral-200/90 sm:text-sm">
            {{ currentSlide.description }}
          </p>

          <!-- Clean, Refined Brand-Orange Button -->
          <div class="mt-7">
            <a
              :href="currentWhatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#f6892c] px-8 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-lg shadow-black/45 transition duration-200 hover:-translate-y-0.5 hover:bg-[#e07519] active:scale-[0.99] sm:text-sm"
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

        <!-- Right Column: Orbital Arc Selector + Half-Body Cutout Worker from Assets -->
        <div class="relative lg:col-span-6">
          <div class="relative mx-auto flex max-w-xl items-center justify-end">
            <!-- Desktop Curved Orbital Arc with 4 Auto-Rotating & Clickable Category Nodes -->
            <div class="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-68 sm:block">
              <svg
                viewBox="0 0 220 380"
                class="h-full w-full overflow-visible"
                fill="none"
              >
                <!-- Subtle Orbital Curve Path -->
                <path
                  d="M 112 20 Q 6 190 158 360"
                  stroke="rgba(255,255,255,0.24)"
                  stroke-width="1.25"
                />

                <!-- Nodes along the curve -->
                <g
                  v-for="(slide, idx) in slides"
                  :key="slide.shortLabel"
                  class="pointer-events-auto cursor-pointer"
                  @click="selectSlide(idx)"
                >
                  <!-- Soft Outer Halo Ring when Active -->
                  <circle
                    v-if="activeIndex === idx"
                    :cx="slide.nodeX"
                    :cy="slide.nodeY"
                    r="12"
                    fill="rgba(246, 137, 44, 0.32)"
                  />
                  <!-- Core Dot -->
                  <circle
                    :cx="slide.nodeX"
                    :cy="slide.nodeY"
                    :r="activeIndex === idx ? 5.5 : 3.5"
                    :fill="activeIndex === idx ? '#FFFFFF' : 'rgba(255,255,255,0.38)'"
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
                    ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.75)]'
                    : 'text-neutral-400 hover:text-neutral-200'
                "
                :style="{
                  top: `${(slide.nodeY / 380) * 100}%`,
                  right: `${100 - (slide.nodeX / 220) * 100 + 7}%`
                }"
                @click="selectSlide(idx)"
              >
                {{ slide.shortLabel }}
              </button>
            </div>

            <!-- Mobile Category Selector Pills -->
            <div class="mb-3 flex flex-wrap gap-1.5 sm:hidden">
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
                @click="selectSlide(idx)"
              >
                {{ slide.shortLabel }}
              </button>
            </div>

            <!-- Half-Body Cutout Image from Assets (Transparent Background) -->
            <div class="relative z-10 flex w-full items-center justify-center sm:w-[70%]">
              <!-- Subtle Warm Spotlight Behind Cutout -->
              <div class="pointer-events-none absolute inset-8 rounded-full bg-[#f6892c]/12 blur-3xl"></div>

              <img
                :key="currentSlide.image"
                :src="currentSlide.image"
                :alt="currentSlide.headlineTop"
                width="650"
                height="540"
                fetchpriority="high"
                decoding="async"
                class="h-64 w-auto max-w-full object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.85)] transition-all duration-500 sm:h-80 lg:h-[360px]"
                style="
                  -webkit-mask-image: linear-gradient(to bottom, #000 84%, transparent 100%);
                  mask-image: linear-gradient(to bottom, #000 84%, transparent 100%);
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Rugged / Torn Paper-Asphalt White Bottom Divider -->
    <div class="relative z-20 -mb-px w-full shrink-0 overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-full sm:h-8"
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
