<script setup lang="ts">
import { siteConfig } from '../config/siteConfig'
import logoManpica from '../assets/3.png'
import logo3M from '../assets/3M_wordmark.svg.webp'
import logoBellota from '../assets/bellota-logo-png_seeklogo-474288.png'
import logoUyustools from '../assets/images (1).png'
import logoEmtop from '../assets/images (2).png'
import logoTolsen from '../assets/images.png'
import logoStanley from '../assets/logo_stanley.png'
import logoQuimicolor from '../assets/quimicolor-logo-png_seeklogo-294365.png'

const brandLogos = [
  { name: 'Stanley', src: logoStanley },
  { name: 'Tolsen', src: logoTolsen },
  { name: 'Bellota', src: logoBellota },
  { name: 'Emtop', src: logoEmtop },
  { name: 'Uyustools', src: logoUyustools },
  { name: 'Manpica', src: logoManpica },
  { name: 'Quimicolor', src: logoQuimicolor },
  { name: '3M', src: logo3M }
]
</script>

<template>
  <section id="marcas" class="scroll-mt-24 border-b border-neutral-200 bg-white py-14 text-[#121417] sm:py-18">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Industrial Section Title -->
      <div class="border-b-1 border-neutral-400 pb-6">
        <span class="inline-block bg-[#f6892c] px-3 py-1 text-xs font-black uppercase tracking-widest text-white">
          RESPALDO Y GARANTÍA ORIGINAL
        </span>
        <h2 class="mt-3 text-3xl font-black uppercase tracking-tight text-[#121417] sm:text-4xl">
          Marcas que Distribuimos en Tienda
        </h2>
        <p class="mt-2 text-sm font-medium text-neutral-600 sm:text-base">
          Disponibilidad inmediata de marcas líderes en revestimientos, herramientas, electricidad y pinturas en nuestro local del {{ siteConfig.business.mallShort }}.
        </p>
      </div>
    </div>

    <!-- Tall, Background-Free Infinite Brand Logo Marquee -->
    <div class="relative mt-10 w-full overflow-hidden py-6 sm:mt-12 sm:py-8">
      <div class="animate-marquee flex items-center">
        <div
          v-for="copy in 2"
          :key="copy"
          class="flex shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20 lg:gap-24 lg:pr-24"
        >
          <div
            v-for="brand in brandLogos"
            :key="`${copy}-${brand.name}`"
            class="flex shrink-0 items-center justify-center transition duration-300 hover:scale-105"
          >
            <img
              :src="brand.src"
              :alt="`Logo ${brand.name}`"
              loading="lazy"
              decoding="async"
              class="h-12 w-auto max-w-[170px] object-contain sm:h-16 sm:max-w-[210px] lg:h-20 lg:max-w-[240px]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
