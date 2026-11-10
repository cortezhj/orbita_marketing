<script setup lang="ts">
import { siteConfig } from '../config/siteConfig'

defineProps<{
  open: boolean
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div
    v-if="open"
    class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/85 p-4 backdrop-blur-md"
    role="dialog"
    aria-modal="true"
    aria-labelledby="privacy-policy-title"
  >
    <div class="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900 p-6 text-slate-200 shadow-2xl sm:p-10">
      <!-- Top Bar -->
      <div class="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span class="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
            Cumplimiento Legal • /politica-de-privacidad
          </span>
          <h2 id="privacy-policy-title" class="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
            Política de Privacidad y Tratamiento de Datos
          </h2>
          <p class="mt-1 text-xs text-slate-400">
            {{ siteConfig.business.legalName }} • RIF: {{ siteConfig.business.rif }}
          </p>
        </div>

        <button
          type="button"
          class="rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-bold text-slate-200 hover:bg-slate-700"
          @click="$emit('close')"
        >
          Cerrar ✕
        </button>
      </div>

      <!-- Content -->
      <div class="mt-6 space-y-5 text-sm leading-relaxed text-slate-300">
        <section>
          <h3 class="font-bold text-white">1. Identificación del Responsable</h3>
          <p class="mt-1">
            El presente sitio web es operado por <strong>{{ siteConfig.business.legalName }}</strong>, identificada con el
            documento fiscal <strong>RIF {{ siteConfig.business.rif }}</strong>, con domicilio comercial físico en:
            {{ siteConfig.business.fullAddress }}
          </p>
        </section>

        <section>
          <h3 class="font-bold text-white">2. Datos que Recopilamos</h3>
          <p class="mt-1">
            Nuestra página web funciona como portal informativo y de validación comercial. Solo tratamos los datos que el usuario decide compartir voluntariamente al iniciar una conversación a través de nuestro canal oficial de WhatsApp Business (nombre de perfil, número telefónico y requerimientos de cotización de productos ferreteros).
          </p>
        </section>

        <section>
          <h3 class="font-bold text-white">3. Finalidad del Tratamiento</h3>
          <ul class="mt-1 list-disc space-y-1 pl-5">
            <li>Confirmar disponibilidad real de inventario y precios en nuestro local del {{ siteConfig.business.mallName }}.</li>
            <li>Reservar pedidos para retiro en mostrador ({{ siteConfig.business.localNumber }}).</li>
            <li>Enviar nuestro catálogo técnico en formato PDF cuando el cliente lo solicite.</li>
            <li>Brindar soporte postventa y tramitar garantías de fábrica.</li>
          </ul>
        </section>

        <section>
          <h3 class="font-bold text-white">4. Confidencialidad y No Cesión a Terceros</h3>
          <p class="mt-1">
            <strong>{{ siteConfig.business.brandName }}</strong> no vende, alquila ni cede números telefónicos ni datos personales a terceros. Toda comunicación se realiza bajo las políticas de privacidad y mensajería de WhatsApp Business y Meta Platforms, Inc.
          </p>
        </section>

        <section>
          <h3 class="font-bold text-white">5. Derechos del Usuario y Contacto Legal</h3>
          <p class="mt-1">
            Usted puede solicitar en cualquier momento la eliminación de sus datos de contacto de nuestro registro de atención escribiendo a
            <a :href="`mailto:${siteConfig.business.complianceEmail}`" class="font-semibold text-amber-400 underline">
              {{ siteConfig.business.complianceEmail }}
            </a>
            o directamente en nuestro local físico ubicado en el {{ siteConfig.business.mallName }}, {{ siteConfig.business.level }}, {{ siteConfig.business.localNumber }}.
          </p>
        </section>
      </div>

      <div class="mt-8 flex justify-end border-t border-slate-800 pt-5">
        <button
          type="button"
          class="rounded-xl bg-amber-400 px-6 py-2.5 text-sm font-extrabold text-slate-950 hover:bg-amber-300"
          @click="$emit('close')"
        >
          Volver a la Ferretería
        </button>
      </div>
    </div>
  </div>
</template>

