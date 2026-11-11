<script setup lang="ts">
import { siteConfig } from '../config/siteConfig'
import iconFacebook from '../assets/2023_Facebook_icon.svg.webp'
import iconInstagram from '../assets/Instagram_icon.png.webp'
import iconTiktok from '../assets/Tiktok_icon.svg.webp'

const socialLinks = [
  { name: 'Instagram', href: siteConfig.business.socials.instagram, icon: iconInstagram },
  { name: 'TikTok', href: siteConfig.business.socials.tiktok, icon: iconTiktok },
  { name: 'Facebook', href: siteConfig.business.socials.facebook, icon: iconFacebook }
]
</script>

<template>
  <section id="ubicacion" class="cv-auto scroll-mt-24 bg-white py-20 text-[#141619] sm:py-28">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <!-- Right Column on Desktop: Minimalist Editorial Content -->
        <div class="lg:order-2 lg:col-span-5">
          <span class="inline-block bg-[#f6892c] px-3 py-1 text-xs font-black uppercase tracking-widest text-white">
            VISÍTANOS
          </span>

          <h2 class="mt-3 text-3xl font-black uppercase leading-[1.12] tracking-tight text-[#141619] sm:text-4xl lg:text-[2.35rem]">
            <span class="block">UBICACIÓN Y</span>
            <span class="block">HORARIOS</span>
          </h2>

          <ul class="mt-6 space-y-4 text-xs leading-relaxed text-neutral-600 sm:text-sm">
            <li class="flex items-start gap-2.5">
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f6892c]"></span>
              <span>
                <strong class="font-bold text-[#141619]">{{ siteConfig.business.mallName }} ({{ siteConfig.business.localNumber }}):</strong>
                Avenida 20 entre calles 40 y 41, Planta Baja, Local 06, Barquisimeto 3001, Edo. Lara.
              </span>
            </li>

            <li class="flex items-start gap-2.5">
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f6892c]"></span>
              <span>
                <strong class="font-bold text-[#141619]">Horario de Atención:</strong>
                Lunes a Sábado de 8:00 AM a 5:00 PM (Horario corrido).
              </span>
            </li>

            <li class="flex items-start gap-2.5">
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f6892c]"></span>
              <span>
                <strong class="font-bold text-[#141619]">Contacto Directo:</strong>
                {{ siteConfig.business.phoneDisplay }}
              </span>
            </li>

            <li class="flex items-center gap-2.5">
              <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-[#f6892c]"></span>
              <strong class="font-bold text-[#141619]">Redes Sociales:</strong>
              <div class="flex items-center gap-3">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="social.name"
                  :title="social.name"
                  class="inline-flex items-center justify-center transition-transform duration-200 hover:scale-110"
                >
                  <img
                    :src="social.icon"
                    :alt="social.name"
                    width="26"
                    height="26"
                    loading="lazy"
                    decoding="async"
                    class="h-6 w-6 object-contain sm:h-6.5 sm:w-6.5"
                  />
                </a>
              </div>
            </li>
          </ul>

          <!-- Compact Rectangular Brand-Orange CTA Button -->
          <div class="mt-8">
            <a
              :href="siteConfig.business.googleMapsDirectionsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-md bg-[#f6892c] px-6 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-white shadow-md shadow-[#f6892c]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#e07519] sm:text-xs"
            >
              <span>Cómo Llegar</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <!-- Left Column on Desktop: Clean Rectangular Map Block -->
        <div class="relative lg:order-1 lg:col-span-7">
          <div class="relative mx-auto h-[270px] w-full max-w-lg overflow-hidden rounded-sm bg-[#16181C] shadow-[0_20px_50px_rgba(0,0,0,0.16)] sm:h-[310px] lg:ml-0 lg:mr-auto lg:h-[330px]">
            <iframe
              :src="siteConfig.business.googleMapsEmbedUrl"
              title="Ubicación de Órbita Marketing en Google Maps"
              class="h-full w-full border-0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
