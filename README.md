# FerreCentro Órbita — Landing Page de Alto Rendimiento

Landing Page de alta conversión construida con **Vue 3 + TypeScript + Vite + Tailwind CSS v4** para una ferretería física ubicada dentro de un Centro Comercial. Diseñada específicamente para validar la existencia comercial del negocio (cumplimiento con Meta Ads / Business Suite), exhibir disponibilidad real de marcas reconocidas y canalizar clientes directamente al local físico o a WhatsApp.

## Estructura de Secciones

```text
├── Header (Logo, horario de atención, botón directo a WhatsApp)
├── Hero Section (Propuesta de valor: "Herramientas, plomería y electricidad en [Centro Comercial]")
├── Marcas que distribuyen (Logotipos e insignias de marcas reconocidas en stock)
├── Categorías de productos (Cards visuales con botón de consulta predeterminado a WhatsApp)
├── Catálogo descargable (PDF optimizado descargable y enlace dinámico)
├── Ubicación y cómo llegar (Mapa interactivo, horarios Lun-Dom, referencias y fotos del local comercial)
└── Footer (Datos legales, Razón Social, RIF/ID fiscal, redes sociales y /politica-de-privacidad)
```

## Personalización Rápida

Todos los datos comerciales (nombre de la ferretería, Centro Comercial, número de local, teléfono/WhatsApp, mensajes predeterminados por categoría, marcas, horarios y datos fiscales RIF) están centralizados en:

- `src/config/siteConfig.ts`

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción (TypeScript + Vite)
npm run build
```
