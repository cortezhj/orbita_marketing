<script setup lang="ts">
import { buildWhatsAppUrl, siteConfig } from '../config/siteConfig'

defineEmits<{
  (e: 'openPrivacy'): void
}>()

const footerWhatsappUrl = buildWhatsAppUrl(siteConfig.defaultWhatsappMessages.header)
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t-4 border-[#f6892c] bg-[#121417] text-neutral-300">
    <!-- Main Footer Columns -->
    <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
        <!-- Col 1: Brand Logo & Legal Compliance Identity (5 cols) -->
        <div class="lg:col-span-5">
          <div class="flex items-center gap-3">
            <img
              :src="siteConfig.business.logoUrl"
              :alt="siteConfig.business.legalName"
              class="h-10 w-auto object-contain"
              loading="lazy"
            />
          </div>

          <!-- Datos Legales & RIF Card (Meta Business Verification Ready) -->
          <div class="mt-5 border-l-4 border-[#f6892c] bg-[#181B20] p-4 text-xs leading-relaxed text-neutral-300">
            <p class="font-black uppercase tracking-wider text-[#f6892c]">
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
              class="inline-flex items-center gap-2 border border-white/15 bg-[#181B20] px-3.5 py-2 text-xs font-black uppercase tracking-wider text-white transition hover:border-[#f6892c] hover:text-[#f6892c]"
            >
              <span>Instagram</span>
            </a>
            <a
              :href="siteConfig.business.socials.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 border border-white/15 bg-[#181B20] px-3.5 py-2 text-xs font-black uppercase tracking-wider text-white transition hover:border-[#f6892c] hover:text-[#f6892c]"
            >
              <span>Facebook</span>
            </a>
            <a
              :href="siteConfig.business.socials.tiktok"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 border border-white/15 bg-[#181B20] px-3.5 py-2 text-xs font-black uppercase tracking-wider text-white transition hover:border-[#f6892c] hover:text-[#f6892c]"
            >
              <span>TikTok</span>
            </a>
          </div>
        </div>

        <!-- Col 2: Departamentos & Enlaces Rápidos (3 cols) -->
        <div class="lg:col-span-3">
          <h3 class="text-xs font-black uppercase tracking-widest text-[#f6892c]">
            Secciones y Departamentos
          </h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="#marcas" class="text-neutral-300 transition hover:text-[#f6892c]">
                Marcas que distribuimos
              </a>
            </li>
            <li>
              <a href="#categorias" class="text-neutral-300 transition hover:text-[#f6892c]">
                Herramientas Manuales y Eléctricas
              </a>
            </li>
            <li>
              <a href="#categorias" class="text-neutral-300 transition hover:text-[#f6892c]">
                Electricidad e Iluminación
              </a>
            </li>
            <li>
              <a href="#categorias" class="text-neutral-300 transition hover:text-[#f6892c]">
                Plomería y Tuberías
              </a>
            </li>
            <li>
              <a href="#categorias" class="text-neutral-300 transition hover:text-[#f6892c]">
                Pinturas, Adhesivos y Construcción
              </a>
            </li>
            <li>
              <a href="#catalogo" class="text-neutral-300 transition hover:text-[#f6892c]">
                Catálogo PDF Descargable
              </a>
            </li>
            <li>
              <a
                href="/politica-de-privacidad"
                class="font-black text-[#f6892c] transition hover:underline"
                @click.prevent="$emit('openPrivacy')"
              >
                Política de Privacidad (/politica-de-privacidad)
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3: Contacto Directo & Atención (4 cols) -->
        <div class="lg:col-span-4">
          <h3 class="text-xs font-black uppercase tracking-widest text-[#f6892c]">
            Contacto Directo y Mostrador
          </h3>
          <ul class="mt-4 space-y-3 text-sm">
            <li class="flex items-start gap-2.5">
              <span class="font-bold text-white">WhatsApp / Teléfono:</span>
              <a
                :href="footerWhatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="font-bold text-[#f6892c] hover:underline"
              >
                {{ siteConfig.business.phoneDisplay }}
              </a>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="font-bold text-white">Correo Ventas:</span>
              <a :href="`mailto:${siteConfig.business.email}`" class="text-neutral-300 hover:text-[#f6892c]">
                {{ siteConfig.business.email }}
              </a>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="font-bold text-white">Ubicación:</span>
              <span class="text-neutral-300">
                {{ siteConfig.business.mallShort }} — {{ siteConfig.business.shortAddress }}, Barquisimeto
              </span>
            </li>
          </ul>

          <div class="mt-5">
            <a
              :href="footerWhatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#f6892c] px-4 py-3.5 text-xs font-black uppercase tracking-wider text-white transition hover:bg-[#e07519] sm:text-sm"
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
            class="font-bold text-[#f6892c] underline-offset-4 hover:underline"
            @click.prevent="$emit('openPrivacy')"
          >
            Política de Privacidad
          </a>
          <span>•</span>
          <a href="#ubicacion" class="hover:text-[#f6892c]">
            {{ siteConfig.business.mallShort }} ({{ siteConfig.business.localNumber }})
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
