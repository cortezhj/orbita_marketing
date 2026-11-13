<template>
  <section class="border-b border-neutral-200 bg-[#f6f6f5] py-16 text-[#141619] sm:py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center sm:text-left">
        <span class="inline-block bg-[#f6892c] px-3 py-1 text-xs font-black uppercase tracking-widest text-white">
          FACILIDADES DE COMPRA Y DESPACHO
        </span>
        <h2 class="mt-3 text-2xl font-black uppercase tracking-tight text-[#141619] sm:text-4xl">
          Métodos de Pago, Cashea y Envíos
        </h2>
      </div>

      <!-- 4-Column Clean Editorial Strip -->
      <div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-neutral-300">
        <!-- 1. Cashea -->
        <div class="flex flex-col items-center text-center sm:items-start sm:text-left lg:pr-7">
          <div class="flex h-11 w-11 items-center justify-center rounded-md bg-[#141619] text-[#f6892c]">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span class="mt-4 text-[11px] font-black uppercase tracking-[0.12em] text-[#f6892c]">
            CUOTAS SIN INTERÉS
          </span>
          <h3 class="mt-1 text-base font-black uppercase tracking-tight text-[#141619] sm:text-lg">
            Compra con Cashea
          </h3>
          <p class="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
            Lleva tus revestimientos, herramientas y productos hoy pagando tu inicial y el resto en cuotas sin interés en nuestra tienda física.
          </p>
        </div>

        <!-- 2. Métodos de Pago -->
        <div class="flex flex-col items-center text-center sm:items-start sm:text-left lg:px-7">
          <div class="flex h-11 w-11 items-center justify-center rounded-md bg-[#141619] text-[#f6892c]">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <span class="mt-4 text-[11px] font-black uppercase tracking-[0.12em] text-[#f6892c]">
            FLEXIBILIDAD TOTAL
          </span>
          <h3 class="mt-1 text-base font-black uppercase tracking-tight text-[#141619] sm:text-lg">
            Métodos de Pago
          </h3>
          <p class="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
            Aceptamos Punto de Venta, Pago Móvil, Transferencias Bancarias, Efectivo y Divisas / Zelle con atención rápida en tienda.
          </p>
        </div>

        <!-- 3. Delivery en Barquisimeto -->
        <div class="flex flex-col items-center text-center sm:items-start sm:text-left lg:px-7">
          <div class="flex h-11 w-11 items-center justify-center rounded-md bg-[#141619] text-[#f6892c]">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
          </div>
          <span class="mt-4 text-[11px] font-black uppercase tracking-[0.12em] text-[#f6892c]">
            DESPACHO LOCAL
          </span>
          <h3 class="mt-1 text-base font-black uppercase tracking-tight text-[#141619] sm:text-lg">
            Delivery en Barquisimeto
          </h3>
          <p class="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
            Entregamos tu pedido directamente hasta la puerta de tu hogar, remodelación u obra en Barquisimeto y Cabudare.
          </p>
        </div>

        <!-- 4. Envíos Nacionales -->
        <div class="flex flex-col items-center text-center sm:items-start sm:text-left lg:pl-7">
          <div class="flex h-11 w-11 items-center justify-center rounded-md bg-[#141619] text-[#f6892c]">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <span class="mt-4 text-[11px] font-black uppercase tracking-[0.12em] text-[#f6892c]">
            COBERTURA NACIONAL
          </span>
          <h3 class="mt-1 text-base font-black uppercase tracking-tight text-[#141619] sm:text-lg">
            Envíos a Todo el País
          </h3>
          <p class="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
            Despachamos de forma segura y protegida a cualquier estado de Venezuela a través de las principales agencias de encomienda.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
