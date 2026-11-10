<script setup lang="ts">
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

const primaryWhatsappUrl = buildWhatsAppUrl(siteConfig.defaultWhatsappMessages.heroPrimary)

const featureStrip = [
  {
    title: 'Local Físico en C.C.',
    detail: `${siteConfig.business.level} • ${siteConfig.business.localNumber}`
  },
  {
    title: 'Atención Lun a Dom',
    detail: 'Horario corrido con estacionamiento'
  },
  {
    title: 'Cotización < 5 Min',
    detail: 'Confirmamos stock real por WhatsApp'
  }
]
</script>

<template>
  <section class="relative bg-[#121417] text-white">
    <!-- Subtle Industrial Texture & Vertical Reference Line -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.04]"
        style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 64px 64px;"
      ></div>
    </div>

    <!-- Main Hero Container -->
    <div class="relative mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-12">
        <!-- Left Column: High-Contrast White + Yellow Typography (Photos 4 & 5 Style) -->
        <div class="lg:col-span-7">
          <div class="inline-flex items-center gap-2 border-l-4 border-[#FFCC00] bg-white/5 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#FFCC00]">
            <span>{{ siteConfig.business.mallName }} • {{ siteConfig.business.localNumber }}</span>
          </div>

          <h1 class="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.6rem] lg:leading-[1.08]">
             Soluciones y repuestos en
            <span class="block text-[#FFCC00]">
              herramientas, plomería y electricidad.
            </span>
          </h1>

          <p class="mt-5 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Cotiza tus materiales al instante por WhatsApp y retira hoy mismo sin perder tiempo en nuestro local del
            <strong class="font-bold text-white">{{ siteConfig.business.mallName }} ({{ siteConfig.business.level }}, {{ siteConfig.business.localNumber }})</strong>.
          </p>

          <!-- Yellow Primary CTA + Clean Outlined Secondary CTA -->
          <div class="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              :href="primaryWhatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-3 rounded-lg bg-[#FFCC00] px-7 py-4 text-sm font-black uppercase tracking-wider text-[#121417] shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#FFD633] active:scale-[0.99] sm:text-base"
            >
              <svg class="h-5 w-5 shrink-0 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.535 5.862l-1.535 5.638 5.792-1.519c1.693.902 3.621 1.419 5.675 1.419 6.627 0 12-5.373 12-12s-5.373-12-12.467-11.4z" />
              </svg>
              <span>Cotizar por WhatsApp</span>
            </a>

            <a
              href="#ubicacion"
              class="inline-flex items-center justify-center gap-2.5 rounded-lg border-2 border-white/25 bg-transparent px-6 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:border-[#FFCC00] hover:text-[#FFCC00] sm:text-base"
            >
              <span>Ubicación en el C.C.</span>
              <span>→</span>
            </a>
          </div>

          <!-- Editorial Quote / Trust Block (Inspired by Photo 5 "HomeMaster") -->
          <div class="mt-10 flex items-start gap-4 border-t border-white/10 pt-6">
            <span class="font-serif text-5xl leading-none font-black text-[#FFCC00] select-none">“</span>
            <div>
              <p class="text-sm font-bold text-white sm:text-base">
                Atención inmediata en mostrador y stock real garantizado.
              </p>
              <p class="mt-1 text-xs text-neutral-400">
                Estacionamiento techado seguro en el {{ siteConfig.business.mallName }} • Despacho rápido para técnicos, contratistas y el hogar.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column: Yellow Geometric Offset Block + Industrial Showcase (Photo 1 & 3 Style) -->
        <div class="lg:col-span-5">
          <div class="relative mx-auto max-w-md lg:max-w-none">
            <!-- Solid Construction Yellow Backdrop Square (Photo 1 Style) -->
            <div class="absolute -top-4 -right-4 h-4/5 w-4/5 bg-[#FFCC00] sm:-top-6 sm:-right-6"></div>

            <!-- Main Industrial Visual Card -->
            <div class="relative border-2 border-[#121417] bg-[#181B20] shadow-2xl">
              <div class="relative overflow-hidden">
                <img
                  :src="siteConfig.business.heroImage"
                  alt="Herramientas profesionales y suministros en FerreCentro Órbita"
                  width="720"
                  height="480"
                  fetchpriority="high"
                  decoding="async"
                  class="h-72 w-full object-cover sm:h-88"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#121417] via-[#121417]/20 to-transparent"></div>

                <!-- Top Left Industrial Tag -->
                <div class="absolute top-4 left-4 bg-[#FFCC00] px-3 py-1 text-[11px] font-black uppercase tracking-widest text-[#121417]">
                  TIENDA FÍSICA VERIFICADA
                </div>

                <!-- Bottom Info Overlay -->
                <div class="absolute right-5 bottom-4 left-5">
                  <p class="text-xs font-extrabold uppercase tracking-widest text-[#FFCC00]">
                    {{ siteConfig.business.mallName }}
                  </p>
                  <p class="mt-0.5 text-xl font-black text-white">
                    {{ siteConfig.business.level }} • {{ siteConfig.business.localNumber }}
                  </p>
                </div>
              </div>

              <!-- Dark Metrics Bar with Yellow Highlights -->
              <div class="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-[#121417] py-4 text-center">
                <div class="px-2">
                  <p class="text-lg font-black text-[#FFCC00] sm:text-xl">{{ siteConfig.business.skuCount }}</p>
                  <p class="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">Referencias</p>
                </div>
                <div class="px-2">
                  <p class="text-lg font-black text-white sm:text-xl">12+ Marcas</p>
                  <p class="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">Originales</p>
                </div>
                <div class="px-2">
                  <p class="text-lg font-black text-[#FFCC00] sm:text-xl">Lun - Dom</p>
                  <p class="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">Horario C.C.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Industrial Ticker Strip (Like Photo 4 "HIGH VOLTAGE • INSPECTION & TEST") -->
    <div class="border-y border-white/10 bg-[#181B20] py-2.5 text-[11px] font-black uppercase tracking-[0.22em] text-neutral-400">
      <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-4 px-4">
        <span>HERRAMIENTAS ELÉCTRICAS</span>
        <span class="text-[#FFCC00]">•</span>
        <span>PLOMERÍA Y TUBERÍAS</span>
        <span class="text-[#FFCC00]">•</span>
        <span class="hidden sm:inline">MATERIAL ELÉCTRICO E ILUMINACIÓN</span>
        <span class="hidden text-[#FFCC00] sm:inline">•</span>
        <span class="hidden md:inline">PINTURAS E IMPERMEABILIZANTES</span>
      </div>
    </div>

    <!-- White Overlapping 3-Pillar Strip with Yellow Icon Squares (Photo 4 Style) -->
    <div class="bg-[#F4F5F7] py-8 text-[#121417] border-b border-neutral-200">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div
            v-for="item in featureStrip"
            :key="item.title"
            class="flex items-center gap-4 border border-neutral-200 bg-white p-4 shadow-sm"
          >
            <div class="flex h-12 w-12 shrink-0 items-center justify-center bg-[#FFCC00] text-[#121417]">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h2 class="text-sm font-black uppercase tracking-wide text-[#121417]">
                {{ item.title }}
              </h2>
              <p class="mt-0.5 text-xs font-medium text-neutral-600">
                {{ item.detail }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
