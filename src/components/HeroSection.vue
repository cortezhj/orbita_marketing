<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import heroBackgroundUrl from '../assets/hero/hero-background.avif'
import heroElectricidad from '../assets/hero/hero-electricidad.png'
import heroHerramientas from '../assets/hero/hero-herramientas.png'
import heroPinturas from '../assets/hero/hero-pinturas.png'
import heroRevestimientos from '../assets/hero/hero-revestimientos.png'
import { buildWhatsAppUrl } from '../config/siteConfig'

interface HeroSlide {
  shortLabel: string
  alt: string
  image: string
  whatsappMessage: string
  nodeX: number
  nodeY: number
}

const slides: HeroSlide[] = [
  {
    shortLabel: 'REVESTIMIENTOS',
    alt: 'Revestimientos y Wall Panel WPC en Órbita Marketing',
    image: heroRevestimientos,
    whatsappMessage:
      'Hola Órbita Marketing, vi su página y quiero cotizar Revestimientos, Wall Panel, Lavaplatos o Duchas en el C.C. Ciudad Crepuscular.',
    nodeX: 70,
    nodeY: 56
  },
  {
    shortLabel: 'HERRAMIENTAS',
    alt: 'Herramientas y Ferretería en Órbita Marketing',
    image: heroHerramientas,
    whatsappMessage:
      'Hola Órbita Marketing, vi su página y quiero cotizar Herramientas y artículos de Ferretería en el C.C. Ciudad Crepuscular.',
    nodeX: 48,
    nodeY: 140
  },
  {
    shortLabel: 'ELECTRICIDAD',
    alt: 'Electricidad e Iluminación en Órbita Marketing',
    image: heroElectricidad,
    whatsappMessage:
      'Hola Órbita Marketing, vi su página y necesito cotizar materiales de Electricidad e Iluminación en el C.C. Ciudad Crepuscular.',
    nodeX: 72,
    nodeY: 224
  },
  {
    shortLabel: 'PINTURAS',
    alt: 'Pinturas y Acabados en Órbita Marketing',
    image: heroPinturas,
    whatsappMessage:
      'Hola Órbita Marketing, vi su página y quiero cotizar Pinturas, Adhesivos y Acabados en el C.C. Ciudad Crepuscular.',
    nodeX: 124,
    nodeY: 298
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
  <!-- Generous Hero Height Restored (pt-28 / lg:pt-38 and pb-20 / lg:pb-28) -->
  <section class="relative overflow-hidden bg-[#0a0a0a] pt-28 text-white sm:pt-34 lg:pt-38">
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

    <!-- Main Hero Container with Restored Vertical Breathing Room & Balanced Proportions -->
    <div class="relative mx-auto max-w-6xl px-4 pt-8 pb-20 sm:px-6 sm:pt-10 sm:pb-24 lg:px-8 lg:pt-12 lg:pb-28">
      <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        <!-- Left Column: Static Headline & Description about Órbita Marketing -->
        <div class="lg:col-span-5 lg:pr-4">
          <h1 class="font-black tracking-tight text-[#f6892c] drop-shadow-[0_3px_14px_rgba(0,0,0,0.65)]">
            <span class="block text-2xl uppercase sm:text-3xl lg:text-[2.15rem] lg:leading-[1.15]">
              REVESTIMIENTOS, FERRETERÍA Y MÁS
            </span>
            <span class="mt-1.5 block text-lg font-extrabold text-[#f6892c] sm:text-2xl lg:text-[1.55rem] lg:leading-[1.2]">
              Todo para remodelar y equipar tus espacios
            </span>
          </h1>

          <p class="mt-5 max-w-md text-xs leading-relaxed text-neutral-300/90 sm:text-sm">
            En <strong class="font-bold text-white">Órbita Marketing</strong> somos especialistas en Wall Panel WPC, revestimientos decorativos, lavaplatos y duchas modernas, además de contar con ferretería, herramientas, electricidad, pinturas y materiales de construcción al alcance de tu mano.
          </p>

          <!-- Clean, Proportioned Brand-Orange Button -->
          <div class="mt-8">
            <a
              :href="currentWhatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center justify-center gap-2.5 rounded-md bg-[#f6892c] px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-md shadow-black/50 transition duration-200 hover:-translate-y-0.5 hover:bg-[#e07519] active:scale-[0.99]"
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

        <!-- Right Column: Proportioned Orbital Arc + Specialist Portrait Showcase -->
        <div class="relative lg:col-span-7 lg:pl-6">
          <div class="relative ml-auto flex min-h-[320px] w-full max-w-xl items-center justify-end sm:min-h-[360px] lg:min-h-[380px]">
            <!-- Desktop Curved Orbital Arc Positioned Closely Along the Specialist Image -->
            <div class="pointer-events-none absolute inset-y-0 right-[45%] z-20 hidden w-52 sm:block md:right-[44%] lg:right-[43%] lg:w-56">
              <svg
                viewBox="0 0 195 340"
                class="h-full w-full overflow-visible"
                fill="none"
              >
                <!-- Delicate Orbital Curve Path -->
                <path
                  d="M 102 18 Q 6 170 146 322"
                  stroke="rgba(255,255,255,0.22)"
                  stroke-width="1.15"
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
                    r="10"
                    fill="rgba(255, 255, 255, 0.22)"
                  />
                  <!-- Core Dot -->
                  <circle
                    :cx="slide.nodeX"
                    :cy="slide.nodeY"
                    :r="activeIndex === idx ? 4.2 : 3"
                    :fill="activeIndex === idx ? '#FFFFFF' : 'rgba(255,255,255,0.35)'"
                  />
                </g>
              </svg>

              <!-- Refined Category Labels Positioned Next to the 4 Arc Nodes -->
              <button
                v-for="(slide, idx) in slides"
                :key="slide.shortLabel"
                type="button"
                class="pointer-events-auto absolute -translate-y-1/2 text-right text-[10px] font-bold uppercase tracking-[0.12em] transition focus:outline-none sm:text-[11px]"
                :class="
                  activeIndex === idx
                    ? 'text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.65)]'
                    : 'text-neutral-500 hover:text-neutral-300'
                "
                :style="{
                  top: `${(slide.nodeY / 340) * 100}%`,
                  right: `${100 - (slide.nodeX / 195) * 100 + 7}%`
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
                class="rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition"
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

            <!-- Specialist With Product Cutout PNG (Transparent Background) -->
            <div class="relative z-10 flex w-full items-center justify-center sm:w-[64%] lg:w-[62%]">
              <!-- Subtle Warm Ambient Glow -->
              <div class="pointer-events-none absolute inset-10 rounded-full bg-[#f6892c]/12 blur-3xl"></div>

              <img
                :key="currentSlide.image"
                :src="currentSlide.image"
                :alt="currentSlide.alt"
                width="490"
                height="470"
                fetchpriority="high"
                decoding="async"
                class="h-68 w-full object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.75)] transition-all duration-500 sm:h-76 lg:h-[330px] xl:h-[345px]"
                style="
                  -webkit-mask-image: linear-gradient(to bottom, #000 88%, transparent 100%);
                  mask-image: linear-gradient(to bottom, #000 88%, transparent 100%);
                "
              />
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
