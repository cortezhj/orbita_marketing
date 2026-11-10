<script setup lang="ts">
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

defineEmits<{
  (e: 'openPrivacy'): void
}>()

const footerWhatsappUrl = buildWhatsAppUrl(siteConfig.defaultWhatsappMessages.header)
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t-4 border-[#FFCC00] bg-[#121417] text-neutral-300">
    <!-- Main Footer Columns -->
    <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
        <!-- Col 1: Brand & Legal Compliance Identity (5 cols) -->
        <div class="lg:col-span-5">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center bg-[#FFCC00] text-[#121417]">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.3">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>
            </div>
            <div>
              <p class="text-lg font-black uppercase text-white">
                {{ siteConfig.business.shortName }} <span class="text-[#FFCC00]">ÓRBITA</span>
              </p>
              <p class="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                {{ siteConfig.business.tagline }}
              </p>
            </div>
          </div>

          <!-- Datos Legales & RIF Card (Meta Business Verification Ready) -->
          <div class="mt-5 border-l-4 border-[#FFCC00] bg-[#181B20] p-4 text-xs leading-relaxed text-neutral-300">
            <p class="font-black uppercase tracking-wider text-[#FFCC00]">
              Datos Fiscales y Razón Social Verificada
            </p>
            <p class="mt-1.5">
              <strong class="text-white">Razón Social:</strong> {{ siteConfig.business.legalName }}
            </p>
            <p class="mt-1">
              <strong class="text-white">RIF / Documento Fiscal:</strong> {{ siteConfig.business.rif }}
            </p>
            <p class="mt-1">
              <strong class="text-white">Domicilio Comercial:</strong> {{ siteConfig.business.fullAddress }}
            </p>
          </div>

          <!-- Social Media Links -->
          <div class="mt-5 flex items-center gap-3">
            <a
              :href="siteConfig.business.socials.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 border border-white/15 bg-[#181B20] px-3.5 py-2 text-xs font-black uppercase tracking-wider text-white transition hover:border-[#FFCC00] hover:text-[#FFCC00]"
            >
              <span>Instagram</span>
            </a>
            <a
              :href="siteConfig.business.socials.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 border border-white/15 bg-[#181B20] px-3.5 py-2 text-xs font-black uppercase tracking-wider text-white transition hover:border-[#FFCC00] hover:text-[#FFCC00]"
            >
              <span>Facebook</span>
            </a>
            <a
              :href="siteConfig.business.socials.tiktok"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 border border-white/15 bg-[#181B20] px-3.5 py-2 text-xs font-black uppercase tracking-wider text-white transition hover:border-[#FFCC00] hover:text-[#FFCC00]"
            >
              <span>TikTok</span>
            </a>
          </div>
        </div>

        <!-- Col 2: Departamentos & Enlaces Rápidos (3 cols) -->
        <div class="lg:col-span-3">
          <h3 class="text-xs font-black uppercase tracking-widest text-[#FFCC00]">
            Secciones y Departamentos
          </h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="#marcas" class="text-neutral-300 transition hover:text-[#FFCC00]">
                Marcas que distribuimos
              </a>
            </li>
            <li>
              <a href="#categorias" class="text-neutral-300 transition hover:text-[#FFCC00]">
                Herramientas Manuales y Eléctricas
              </a>
            </li>
            <li>
              <a href="#categorias" class="text-neutral-300 transition hover:text-[#FFCC00]">
                Electricidad e Iluminación
              </a>
            </li>
            <li>
              <a href="#categorias" class="text-neutral-300 transition hover:text-[#FFCC00]">
                Plomería y Tuberías
              </a>
            </li>
            <li>
              <a href="#categorias" class="text-neutral-300 transition hover:text-[#FFCC00]">
                Pinturas, Adhesivos y Construcción
              </a>
            </li>
            <li>
              <a href="#catalogo" class="text-neutral-300 transition hover:text-[#FFCC00]">
                Catálogo PDF Descargable
              </a>
            </li>
            <li>
              <a
                href="/politica-de-privacidad"
                class="font-black text-[#FFCC00] transition hover:underline"
                @click.prevent="$emit('openPrivacy')"
              >
                Política de Privacidad (/politica-de-privacidad)
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3: Contacto Directo & Atención (4 cols) -->
        <div class="lg:col-span-4">
          <h3 class="text-xs font-black uppercase tracking-widest text-[#FFCC00]">
            Contacto Directo y Mostrador
          </h3>
          <ul class="mt-4 space-y-3 text-sm">
            <li class="flex items-start gap-2.5">
              <span class="font-bold text-white">WhatsApp Ventas:</span>
              <a
                :href="footerWhatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="font-bold text-[#FFCC00] hover:underline"
              >
                {{ siteConfig.business.phoneDisplay }}
              </a>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="font-bold text-white">Teléfono Local:</span>
              <a :href="`tel:${siteConfig.business.landlineDisplay}`" class="text-neutral-300 hover:text-white">
                {{ siteConfig.business.landlineDisplay }}
              </a>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="font-bold text-white">Correo Ventas:</span>
              <a :href="`mailto:${siteConfig.business.email}`" class="text-neutral-300 hover:text-[#FFCC00]">
                {{ siteConfig.business.email }}
              </a>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="font-bold text-white">Ubicación:</span>
              <span class="text-neutral-300">
                {{ siteConfig.business.mallName }}, {{ siteConfig.business.level }}, {{ siteConfig.business.localNumber }}
              </span>
            </li>
          </ul>

          <div class="mt-5">
            <a
              :href="footerWhatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full items-center justify-center gap-2 bg-[#FFCC00] px-4 py-3.5 text-xs font-black uppercase tracking-wider text-[#121417] transition hover:bg-[#FFD633] sm:text-sm"
            >
              <span>Escribir a Atención al Cliente</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Legal Bar -->
    <div class="border-t border-white/10 bg-[#0D0F12] py-5 text-xs text-neutral-400">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {{ currentYear }} <strong class="text-white">{{ siteConfig.business.legalName }}</strong> ({{ siteConfig.business.rif }}). Todos los derechos reservados.
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <a
            href="/politica-de-privacidad"
            class="font-bold text-[#FFCC00] underline-offset-4 hover:underline"
            @click.prevent="$emit('openPrivacy')"
          >
            Política de Privacidad
          </a>
          <span>•</span>
          <a href="#ubicacion" class="hover:text-[#FFCC00]">
            {{ siteConfig.business.mallName }} ({{ siteConfig.business.localNumber }})
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
