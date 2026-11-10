<script setup lang="ts">
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

const primaryWhatsappUrl = buildWhatsAppUrl(siteConfig.defaultWhatsappMessages.heroPrimary)

const trustPills = [
  {
    title: 'Local Físico Verificado',
    detail: `${siteConfig.business.level} • ${siteConfig.business.localNumber}`
  },
  {
    title: 'Estacionamiento Seguro',
    detail: 'Acceso directo desde Zona B del C.C.'
  },
  {
    title: 'Respuesta en < 5 min',
    detail: 'Confirmamos stock real por WhatsApp'
  }
]
</script>

<template>
  <section class="relative overflow-hidden border-b border-slate-800/80 bg-slate-950 pt-10 pb-16 sm:pt-16 sm:pb-24">
    <!-- Industrial Background Glow & Grid -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div class="absolute -top-32 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl"></div>
      <div class="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"></div>
      <div
        class="absolute inset-0 opacity-[0.04]"
        style="background-image: radial-gradient(#f59e0b 1px, transparent 1px); background-size: 24px 24px;"
      ></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-12">
        <!-- Left Column: Value Proposition & CTAs -->
        <div class="lg:col-span-7">
          <!-- Mall Location Pill -->
          <div class="inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 sm:text-sm">
            <span class="h-2 w-2 rounded-full bg-amber-400"></span>
            <span>Herramientas, plomería y electricidad en el {{ siteConfig.business.mallName }}</span>
          </div>

          <h1 class="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12]">
            Cotiza tus herramientas al instante y retira hoy en el
            <span class="bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
              {{ siteConfig.business.mallShort }}
            </span>
          </h1>

          <p class="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Encuentra repuestos, materiales eléctricos, tuberías, pinturas y herramientas originales sin perder tiempo.
            Escríbenos por WhatsApp para validar disponibilidad inmediata o visítanos directamente en el
            <strong class="font-semibold text-white">{{ siteConfig.business.level }}, {{ siteConfig.business.localNumber }}</strong>.
          </p>

          <!-- Main CTA Buttons -->
          <div class="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              :href="primaryWhatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-7 py-4 text-base font-extrabold text-slate-950 shadow-xl shadow-emerald-500/25 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              <svg class="h-6 w-6 shrink-0 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.535 5.862l-1.535 5.638 5.792-1.519c1.693.902 3.621 1.419 5.675 1.419 6.627 0 12-5.373 12-12s-5.373-12-12.467-11.4z" />
              </svg>
              <span>Contactar por WhatsApp</span>
            </a>

            <a
              href="#ubicacion"
              class="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-slate-700 bg-slate-900/90 px-6 py-4 text-base font-bold text-white transition hover:border-amber-400/60 hover:bg-slate-800"
            >
              <svg class="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Ver Ubicación en el C.C.</span>
            </a>
          </div>

          <!-- Trust Pills -->
          <div class="mt-10 grid gap-3 sm:grid-cols-3">
            <div
              v-for="pill in trustPills"
              :key="pill.title"
              class="rounded-xl border border-slate-800/90 bg-slate-900/60 p-3.5"
            >
              <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <svg class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ pill.title }}</span>
              </div>
              <p class="mt-1 text-xs text-slate-300">{{ pill.detail }}</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Storefront Verification Card -->
        <div class="lg:col-span-5">
          <div class="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-3 shadow-2xl">
            <div class="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=1000&q=80"
                alt="Interior y mostrador de FerreCentro Órbita en el Centro Comercial"
                class="h-72 w-full object-cover sm:h-80"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent"></div>

              <!-- Live Status Badge -->
              <div class="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-slate-950/85 px-3.5 py-1.5 text-xs font-bold text-emerald-400 backdrop-blur-md">
                <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
                Atención presencial y por WhatsApp
              </div>

              <!-- Mall Badge Bottom -->
              <div class="absolute right-4 bottom-4 left-4">
                <span class="inline-block rounded-md bg-amber-400 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-950">
                  {{ siteConfig.business.mallName }}
                </span>
                <p class="mt-1.5 text-lg font-bold text-white">
                  {{ siteConfig.business.level }} • {{ siteConfig.business.localNumber }}
                </p>
                <p class="text-xs text-slate-300">
                  Estacionamiento cómodo, seguridad privada y despacho inmediato en mostrador.
                </p>
              </div>
            </div>

            <!-- Store Quick Metrics -->
            <div class="mt-3 grid grid-cols-3 divide-x divide-slate-800 rounded-2xl bg-slate-950/90 py-3.5 text-center">
              <div class="px-2">
                <p class="text-lg font-extrabold text-amber-400 sm:text-xl">{{ siteConfig.business.skuCount }}</p>
                <p class="text-[11px] text-slate-400">Productos en Stock</p>
              </div>
              <div class="px-2">
                <p class="text-lg font-extrabold text-white sm:text-xl">12+ Marcas</p>
                <p class="text-[11px] text-slate-400">Distribuidor Oficial</p>
              </div>
              <div class="px-2">
                <p class="text-lg font-extrabold text-emerald-400 sm:text-xl">Lun - Dom</p>
                <p class="text-[11px] text-slate-400">Horario C.C.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
