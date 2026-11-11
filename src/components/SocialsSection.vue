<script setup lang="ts">
import { siteConfig } from '../config/siteConfig'
import iconFacebook from '../assets/2023_Facebook_icon.svg.webp'
import iconInstagram from '../assets/Instagram_icon.png.webp'
import iconTiktok from '../assets/Tiktok_icon.svg.webp'

const socialNetworks = [
  {
    name: 'Instagram',
    handle: '@orbita_marketyngca',
    href: siteConfig.business.socials.instagram,
    icon: iconInstagram
  },
  {
    name: 'TikTok',
    handle: '@orbitamarketyngca',
    href: siteConfig.business.socials.tiktok,
    icon: iconTiktok
  },
  {
    name: 'Facebook',
    handle: 'Órbita Marketing C.A.',
    href: siteConfig.business.socials.facebook,
    icon: iconFacebook
  }
]
</script>

<template>
  <section id="redes" class="bg-white pt-4 pb-20 text-[#141619] sm:pt-6 sm:pb-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Title Only -->
      <div class="text-center">
        <h2 class="text-2xl font-black uppercase tracking-tight text-[#141619] sm:text-3xl">
          Síguenos en Nuestras Redes Sociales
        </h2>
      </div>

      <!-- Clean Card-Free Social Items (Icon + Network Name + Handle Only) -->
      <div class="mt-8 flex flex-wrap items-center justify-center gap-12 sm:mt-10 sm:gap-20 lg:gap-28">
        <a
          v-for="item in socialNetworks"
          :key="item.name"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center text-center transition duration-200 hover:-translate-y-0.5"
        >
          <img
            :src="item.icon"
            :alt="item.name"
            width="56"
            height="56"
            loading="lazy"
            decoding="async"
            class="h-13 w-13 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14"
          />

          <span class="mt-3 text-base font-black uppercase tracking-tight text-[#141619] transition-colors group-hover:text-[#f6892c]">
            {{ item.name }}
          </span>

          <span class="mt-0.5 text-xs font-bold text-neutral-600">
            {{ item.handle }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
