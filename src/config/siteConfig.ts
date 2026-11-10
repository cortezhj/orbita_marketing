export interface BrandItem {
  id: string
  name: string
  category: string
  badge: string
  accentColor: string
  description: string
}

export interface ProductCategory {
  id: string
  title: string
  subtitle: string
  badge: string
  description: string
  highlights: string[]
  popularBrands: string[]
  whatsappMessage: string
  image: string
  iconName: 'bolt' | 'droplet' | 'wrench' | 'paint'
}

export interface StorePhoto {
  id: string
  title: string
  caption: string
  badge: string
  image: string
}

export interface ScheduleItem {
  days: string
  hours: string
  note?: string
}

export const siteConfig = {
  business: {
    brandName: 'FerreCentro Órbita',
    shortName: 'FerreCentro',
    legalName: 'Inversiones y Suministros FerreCentro Órbita, C.A.',
    rif: 'J-41298456-0',
    tagline: 'Ferretería Técnica y Suministros en Centro Comercial',
    mallName: 'C.C. Parque Los Aviadores',
    mallShort: 'C.C. Los Aviadores',
    level: 'Nivel Planta Baja (PB)',
    localNumber: 'Local PB-114',
    referencePoints: [
      'Entrada Este (Acceso directo desde el Estacionamiento Techado Zona B)',
      'A 30 metros de la Feria de Comida y frente a las escaleras mecánicas centrales',
      'Zona de carga rápida habilitada para clientes con compras de volumen'
    ],
    city: 'Maracay, Edo. Aragua - Venezuela',
    fullAddress:
      'Av. Intercomunal Turmero - Maracay, Centro Comercial Parque Los Aviadores, Nivel PB, Local PB-114, Palo Negro, Edo. Aragua, Zona Postal 2117.',
    phoneDisplay: '+58 (412) 890-4520',
    landlineDisplay: '+58 (243) 267-8891',
    whatsappNumber: '584128904520',
    email: 'ventas@ferrecentroorbita.com',
    complianceEmail: 'legal@ferrecentroorbita.com',
    foundedYear: 2018,
    skuCount: '+4,500',
    responseMinutes: '< 5 min',
    heroImage: '/images/hero-local.webp',
    catalogUrl: '/catalogo-ferreteria.pdf',
    catalogVersion: 'Edición Noviembre 2026 • PDF Optimizado (1.4 KB)',
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=10.2038,-67.5514',
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.557941328372!2d-67.5539749!3d10.2038001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e803b9a720262df%3A0x8c250134c70a1c7!2sMaracay%2C%20Aragua!5e0!3m2!1ses!2sve!4v1700000000000!5m2!1ses!2sve',
    socials: {
      instagram: 'https://instagram.com/ferrecentroorbita',
      facebook: 'https://facebook.com/ferrecentroorbita',
      tiktok: 'https://tiktok.com/@ferrecentroorbita'
    }
  },

  defaultWhatsappMessages: {
    header:
      'Hola, vi su página y quiero consultar disponibilidad de un producto en el local del Centro Comercial.',
    heroPrimary:
      'Hola, vi su página y quiero cotizar unas herramientas y materiales para retirar en el C.C. Parque Los Aviadores.',
    catalogRequest:
      'Hola, vi su página y me gustaría recibir el catálogo actualizado con lista de precios por WhatsApp.',
    locationHelp:
      'Hola, voy en camino al Centro Comercial. ¿Me confirman la ubicación exacta del Local PB-114?'
  },

  schedule: [
    {
      days: 'Lunes a Sábado',
      hours: '9:00 AM – 8:00 PM',
      note: 'Horario corrido en el Centro Comercial'
    },
    {
      days: 'Domingos y Feriados',
      hours: '10:00 AM – 7:00 PM',
      note: 'Atención presencial y despacho rápido'
    }
  ] as ScheduleItem[],

  brands: [
    {
      id: 'truper',
      name: 'TRUPER',
      category: 'Herramientas y Ferretería General',
      badge: 'Stock Permanente',
      accentColor: '#FF6B00',
      description: 'Línea completa de herramientas manuales, eléctricas, corte y medición.'
    },
    {
      id: 'dewalt',
      name: 'DeWALT',
      category: 'Herramientas Eléctricas Industriales',
      badge: 'Garantía Oficial',
      accentColor: '#FEBD17',
      description: 'Taladros percutores, esmeriles inalámbricos, baterías 20V MAX y accesorios.'
    },
    {
      id: 'stanley',
      name: 'STANLEY',
      category: 'Herramientas Manuales y Precisión',
      badge: 'En Stock',
      accentColor: '#F5C400',
      description: 'Cintas métricas, juegos de llaves, destornilladores y cajas organizadoras.'
    },
    {
      id: 'bosch',
      name: 'BOSCH',
      category: 'Equipos Eléctricos y Brocas',
      badge: 'Original Certificado',
      accentColor: '#005691',
      description: 'Rotomartillos, discos diamantados, mechas para concreto/metal y lijadoras.'
    },
    {
      id: 'bticino',
      name: 'BTICINO',
      category: 'Material Eléctrico Residencial',
      badge: 'Alta Rotación',
      accentColor: '#E85C0D',
      description: 'Tomacorrientes, interruptores, breakers, tableros y protección eléctrica.'
    },
    {
      id: 'pavco',
      name: 'PAVCO WAVIN',
      category: 'Tuberías y Conexiones PVC / CPVC',
      badge: 'Línea Completa',
      accentColor: '#0072CE',
      description: 'Tuberías de aguas blancas, aguas servidas, conexiones y soldadura líquida.'
    },
    {
      id: 'sika',
      name: 'SIKA',
      category: 'Adhesivos e Impermeabilizantes',
      badge: 'Línea Construcción',
      accentColor: '#E30613',
      description: 'Sikaflex, aditivos para concreto, selladores de poliuretano y epóxicos.'
    },
    {
      id: 'vp',
      name: 'VENEZOLANA DE PINTURAS',
      category: 'Pinturas y Recubrimientos',
      badge: 'Mezcla y Stock',
      accentColor: '#10B981',
      description: 'Caucho clase A y B, esmaltes anticorrosivos, fondos y selladores antialcalinos.'
    },
    {
      id: 'coflex',
      name: 'COFLEX',
      category: 'Plomería y Grifería',
      badge: 'Repuestos Originales',
      accentColor: '#0284C7',
      description: 'Mangueras flexibles, herrajes para WC, sifones, desagües y llaves de arresto.'
    },
    {
      id: 'osram',
      name: 'OSRAM / LEDVANCE',
      category: 'Iluminación LED Comercial y Hogar',
      badge: 'Ahorro Energético',
      accentColor: '#F97316',
      description: 'Paneles LED empotrables/superficiales, reflectores IP65, tubos y bombillos.'
    },
    {
      id: 'ingco',
      name: 'INGCO',
      category: 'Maquinaria y Herramientas Pro',
      badge: 'Mejor Relación Precio/Calidad',
      accentColor: '#F59E0B',
      description: 'Bombas periféricas, compresores, pistolas de pintar y kits para el hogar.'
    },
    {
      id: '3m',
      name: '3M INDUSTRIAL',
      category: 'Cintas Eléctricas, Abrasivos y EPP',
      badge: 'Calidad Industrial',
      accentColor: '#DC2626',
      description: 'Teipe eléctrico Scotch Super 33+, lijas al agua, mascarillas y adhesivos.'
    }
  ] as BrandItem[],

  categories: [
    {
      id: 'electricidad-iluminacion',
      title: 'Electricidad e Iluminación',
      subtitle: 'Instalaciones seguras, protección y luz LED de alto rendimiento',
      badge: 'Stock Inmediato',
      description:
        'Todo para remodelaciones residenciales y locales comerciales: cableado certificado, protección térmica e iluminación LED decorativa e industrial.',
      highlights: [
        'Cables THHN / TW #8, #10, #12 y #14 (por metro o rollo)',
        'Breakers termomagnéticos, tableros y protectores de voltaje 110V/220V',
        'Paneles LED, reflectores exteriores IP65, cintas LED y sensores',
        'Tomacorrientes, interruptores modernos, cajetines y canaletas'
      ],
      popularBrands: ['Bticino', 'Osram', 'Exceline', '3M'],
      whatsappMessage:
        'Hola, vi su página y quiero consultar disponibilidad y precio en la categoría de Electricidad e Iluminación.',
      image: '/images/cat-electricidad.webp',
      iconName: 'bolt'
    },
    {
      id: 'plomeria-tuberias',
      title: 'Plomería y Tuberías',
      subtitle: 'Soluciones cero fugas en agua potable, drenaje y presión',
      badge: 'Repuestos y Conexiones',
      description:
        'Encuentra desde el empaque o herraje específico para una emergencia doméstica hasta sistemas completos de tuberías, llaves de paso y bombas de agua.',
      highlights: [
        'Tuberías y conexiones en PVC, CPVC y Termofusión (1/2", 3/4", 1", 2", 4")',
        'Grifería para lavamanos, fregaderos, duchas y llaves de arresto',
        'Herrajes universales para sanitarios, canillas flexibles y sifones',
        'Bombas periféricas, presurizadores automáticos, teflón y pega PVC'
      ],
      popularBrands: ['Pavco', 'Coflex', 'Ingco', 'Griven'],
      whatsappMessage:
        'Hola, vi su página y necesito cotizar repuestos o materiales de Plomería y Tuberías.',
      image: '/images/cat-plomeria.webp',
      iconName: 'droplet'
    },
    {
      id: 'herramientas-manuales-electricas',
      title: 'Herramientas Manuales y Eléctricas',
      subtitle: 'Potencia y precisión para profesionales, técnicos y el hogar',
      badge: 'Garantía en Tienda',
      description:
        'Equípate con herramientas originales de alto desempeño. Asesoría técnica en mostrador para elegir el equipo y consumible exacto para tu trabajo.',
      highlights: [
        'Taladros percutores, rotomartillos, esmeriles de 4-1/2" y atornilladores',
        'Juegos de llaves combinadas, dados, alicates, destornilladores y niveles',
        'Discos de corte para metal/concreto, mechas SDS/HSS y puntas imantadas',
        'Cajas de herramientas, multímetros digitales y equipos de protección'
      ],
      popularBrands: ['DeWalt', 'Truper', 'Bosch', 'Stanley'],
      whatsappMessage:
        'Hola, vi su página y quiero consultar disponibilidad y precio de Herramientas Manuales y Eléctricas.',
      image: '/images/cat-herramientas.webp',
      iconName: 'wrench'
    },
    {
      id: 'pinturas-adhesivos-construccion',
      title: 'Pinturas, Adhesivos y Construcción Ligera',
      subtitle: 'Acabados duraderos, impermeabilización y fijación profesional',
      badge: 'Alta Demanda',
      description:
        'Renueva y protege cualquier espacio con pinturas lavables, selladores de alto agarre, impermeabilizantes y accesorios para tabiquería y fijación.',
      highlights: [
        'Pinturas en caucho mate/satinado, esmaltes sintéticos y fondos anticorrosivos',
        'Siliconas acéticas/neutras, Sikaflex, epóxicos de 2 componentes y pega amarilla',
        'Impermeabilizantes acrílicos, manto asfáltico en frío y pasta profesional',
        'Brochas, rodillos antigota, cintas de enmascarar, chazos, tornillería y drywall'
      ],
      popularBrands: ['Sika', 'Venezolana de Pinturas', '3M', 'Truper'],
      whatsappMessage:
        'Hola, vi su página y quiero cotizar productos de Pinturas, Adhesivos y Construcción Ligera.',
      image: '/images/cat-pinturas.webp',
      iconName: 'paint'
    }
  ] as ProductCategory[],

  storePhotos: [
    {
      id: 'fachada-cc',
      title: 'Fachada Principal en Nivel PB - Local PB-114',
      caption:
        'Pasillo climatizado con exhibición iluminada y atención directa en mostrador dentro del C.C. Parque Los Aviadores.',
      badge: 'Local Verificado',
      image: '/images/local-fachada.webp'
    },
    {
      id: 'pasillo-herramientas',
      title: 'Exhibición de Herramientas y Equipos Eléctricos',
      caption:
        'Stock real a la vista de marcas líderes como DeWalt, Truper, Bosch y Stanley listas para prueba y entrega inmediata.',
      badge: 'Inventario Real',
      image: '/images/local-pasillo.webp'
    },
    {
      id: 'mostrador-asesoria',
      title: 'Mostrador Técnico de Electricidad y Plomería',
      caption:
        'Trae tu muestra o lista de materiales: nuestros asesores te ayudan a encontrar la conexión, breaker o repuesto exacto.',
      badge: 'Asesoría Técnica',
      image: '/images/local-mostrador.webp'
    }
  ] as StorePhoto[]
}

/**
 * Construye el enlace universal oficial de WhatsApp (https://wa.me/58XXXXXXXXXX?text=...)
 * evitando esquemas whatsapp://send que fallan en el navegador integrado (in-app browser) de Instagram y Facebook.
 */
export function buildWhatsAppUrl(customMessage?: string): string {
  const message =
    customMessage || siteConfig.defaultWhatsappMessages.heroPrimary
  return `https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(message)}`
}
