<script setup lang="ts">
import { buildWhatsAppUrl, navigateToSection, siteConfig } from '../config/siteConfig'

defineEmits<{
  (e: 'openPrivacy'): void
}>()

const footerWhatsappUrl = buildWhatsAppUrl(siteConfig.defaultWhatsappMessages.header)
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/10 bg-[#121417] text-neutral-300">
    <!-- Main Footer Content -->
    <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
        <!-- Col 1: Logo, Brief Identity & Social Icons (5 cols) -->
        <div class="md:col-span-5">
          <a href="/" class="inline-block" @click.prevent="navigateToSection('', '/')">
            <img
              :src="siteConfig.business.logoUrl"
              :alt="siteConfig.business.legalName"
              class="h-14 w-auto object-contain sm:h-16"
              loading="lazy"
            />
          </a>

          <p class="mt-4 max-w-sm text-xs leading-relaxed text-neutral-400 sm:text-sm">
            Especialistas en Revestimientos, Wall Panel WPC, decoración, artefactos para el hogar, ferretería, herramientas, electricidad y pinturas en Barquisimeto.
          </p>

          <p class="mt-3 text-xs font-bold tracking-wider text-neutral-300">
            {{ siteConfig.business.legalName }} • <span class="text-[#f6892c]">RIF: {{ siteConfig.business.rif }}</span>
          </p>

          <!-- Social Media Icons -->
          <div class="mt-5 flex items-center gap-3">
            <a
              v-for="social in siteConfig.socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              :title="social.name"
              class="inline-flex items-center justify-center transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110"
            >
              <img
                :src="social.icon"
                :alt="social.name"
                width="32"
                height="32"
                loading="lazy"
                decoding="async"
                class="h-8 w-8 object-contain"
              />
            </a>
          </div>
        </div>

        <!-- Col 2: Enlaces Rápidos y Productos (3 cols) -->
        <div class="md:col-span-3">
          <h3 class="text-xs font-black uppercase tracking-[0.14em] text-[#f6892c]">
            Navegación
          </h3>
          <ul class="mt-4 space-y-2.5 text-xs sm:text-sm">
            <li v-for="item in siteConfig.navLinks" :key="item.path">
              <a
                :href="item.path"
                class="cursor-pointer text-neutral-300 transition hover:text-[#f6892c]"
                @click.prevent="navigateToSection(item.sectionId, item.path)"
              >
                {{ item.footerLabel }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3: Contacto y Ubicación (4 cols) -->
        <div class="md:col-span-4">
          <h3 class="text-xs font-black uppercase tracking-[0.14em] text-[#f6892c]">
            Contacto y Tienda
          </h3>
          <ul class="mt-4 space-y-2.5 text-xs leading-relaxed text-neutral-300 sm:text-sm">
            <li>
              <strong class="font-bold text-white">Dirección:</strong>
              {{ siteConfig.business.mallName }}, {{ siteConfig.business.shortAddress }}, Barquisimeto 3001.
            </li>
            <li>
              <strong class="font-bold text-white">Horario:</strong>
              Lunes a Sábado, 8:00 AM – 5:00 PM
            </li>
            <li>
              <strong class="font-bold text-white">Teléfono / WhatsApp:</strong>
              <a
                :href="footerWhatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-1 font-bold text-[#f6892c] hover:underline"
              >
                {{ siteConfig.business.phoneDisplay }}
              </a>
            </li>
            <li>
              <strong class="font-bold text-white">Correo:</strong>
              <a
                :href="`mailto:${siteConfig.business.email}`"
                class="ml-1 text-neutral-300 transition hover:text-[#f6892c]"
              >
                {{ siteConfig.business.email }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Legal Bar -->
    <div class="border-t border-white/10 bg-[#0D0F12] pt-4 pb-16 text-xs text-neutral-400 sm:py-5">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center sm:flex-row sm:pl-6 sm:pr-40 sm:text-left lg:pl-8 lg:pr-44 xl:pr-36">
        <p>
          © {{ currentYear }} <strong class="text-white">{{ siteConfig.business.legalName }}</strong> ({{ siteConfig.business.rif }}). Todos los derechos reservados.
        </p>
        <div class="flex items-center gap-4">
          <a
            href="/politica-de-privacidad"
            class="font-semibold text-neutral-300 transition hover:text-[#f6892c]"
            @click.prevent="$emit('openPrivacy')"
          >
            Política de Privacidad
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
