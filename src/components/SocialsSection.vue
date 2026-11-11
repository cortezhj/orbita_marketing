<script setup lang="ts">
import { siteConfig } from '../config/siteConfig'
import iconFacebook from '../assets/2023_Facebook_icon.svg.webp'
import iconInstagram from '../assets/Instagram_icon.png.webp'
import iconTiktok from '../assets/Tiktok_icon.svg.webp'

const socialNetworks = [
  {
    name: 'Instagram',
    handle: '@orbita_marketyngca',
    description: 'Novedades en Wall Panel, revestimientos, lavaplatos, duchas y promociones en tienda.',
    href: siteConfig.business.socials.instagram,
    icon: iconInstagram
  },
  {
    name: 'TikTok',
    handle: '@orbitamarketyngca',
    description: 'Videos reales de nuestros productos, instalaciones, herramientas y llegadas de mercancía.',
    href: siteConfig.business.socials.tiktok,
    icon: iconTiktok
  },
  {
    name: 'Facebook',
    handle: 'Órbita Marketing C.A.',
    description: 'Catálogo de productos disponibles, atención directa y novedades en Barquisimeto.',
    href: siteConfig.business.socials.facebook,
    icon: iconFacebook
  }
]
</script>

<template>
  <section id="redes" class="cv-auto border-t border-neutral-200 bg-[#F4F5F7] py-16 text-[#141619] sm:py-22">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mx-auto max-w-2xl text-center">
        <span class="inline-block bg-[#f6892c] px-3 py-1 text-xs font-black uppercase tracking-widest text-white">
          COMUNIDAD DIGITAL
        </span>
        <h2 class="mt-3 text-3xl font-black uppercase tracking-tight text-[#141619] sm:text-4xl">
          Síguenos en Nuestras Redes Sociales
        </h2>
        <p class="mt-2.5 text-xs leading-relaxed text-neutral-600 sm:text-sm">
          Descubre nuevos ingresos de revestimientos, herramientas y acabados todos los días en nuestras cuentas oficiales.
        </p>
      </div>

      <!-- Social Cards Grid -->
      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <a
          v-for="item in socialNetworks"
          :key="item.name"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center rounded-lg border border-neutral-200/80 bg-white p-7 text-center shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#f6892c] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)]"
        >
          <div class="flex h-16 w-16 items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <img
              :src="item.icon"
              :alt="item.name"
              width="64"
              height="64"
              loading="lazy"
              decoding="async"
              class="h-14 w-14 object-contain"
            />
          </div>

          <h3 class="mt-4 text-lg font-black uppercase tracking-tight text-[#141619]">
            {{ item.name }}
          </h3>

          <span class="mt-0.5 text-xs font-extrabold text-[#f6892c]">
            {{ item.handle }}
          </span>

          <p class="mt-2.5 text-xs leading-relaxed text-neutral-600">
            {{ item.description }}
          </p>

          <span
            class="mt-5 inline-flex items-center gap-1.5 rounded-md border border-[#141619]/15 bg-[#F4F5F7] px-4 py-2 text-[11px] font-black uppercase tracking-wider text-[#141619] transition duration-200 group-hover:border-[#f6892c] group-hover:bg-[#f6892c] group-hover:text-white"
          >
            <span>Ver Perfil</span>
            <span>→</span>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
