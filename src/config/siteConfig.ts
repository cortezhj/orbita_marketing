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
  theme: 'light' | 'dark'
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
    brandName: 'Orbita Marketing',
    shortName: 'ORBITA',
    legalName: 'Orbita Marketing, C.A.',
    rif: 'J500390335',
    logoUrl: '/Logo.png',
    tagline: 'REVESTIMIENTOS, FERRETERÍA Y CONSTRUCCIÓN',
    mallName: 'Centro Comercial Ciudad Crepuscular',
    mallShort: 'C.C. Ciudad Crepuscular',
    level: 'Planta Baja',
    localNumber: 'Local PB-06',
    headerLocationSub: 'Local PB-06 • Lun-Sáb 8:30am - 6:30pm',
    shortAddress: 'Av. 20 entre calles 40 y 41 • Local PB-06',
    referencePoints: [
      'Avenida 20 entre calles 40 y 41, Barquisimeto 3001',
      'Centro Comercial Ciudad Crepuscular, Planta Baja, Local PB-06',
      'Fácil acceso peatonal y vehicular en pleno centro de Barquisimeto'
    ],
    city: 'Barquisimeto 3001, Edo. Lara',
    fullAddress:
      'Avenida 20 entre calles 40 y 41, Centro Comercial Ciudad Crepuscular, Local Planta Baja 06, Órbita Marketing, Barquisimeto 3001, Edo. Lara.',
    phoneDisplay: '+58 412-3682831',
    landlineDisplay: '+58 412-3682831',
    whatsappNumber: '584123682831',
    email: 'ventas@orbitamarketingve.com',
    complianceEmail: 'ventas@orbitamarketingve.com',
    foundedYear: 2018,
    skuCount: '+4,500',
    responseMinutes: '< 5 min',
    heroImage: '/images/hero-local.webp',
    catalogUrl: '/catalogo-ferreteria.pdf',
    catalogVersion: 'Edición 2026 • PDF Optimizado',
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Centro+Comercial+Ciudad+Crepuscular,+Avenida+20,+Barquisimeto,+Lara,+Venezuela',
    googleMapsEmbedUrl:
      'https://maps.google.com/maps?q=Centro+Comercial+Ciudad+Crepuscular,+Avenida+20,+Barquisimeto,+Lara,+Venezuela&hl=es&z=17&output=embed',
    socials: {
      instagram: 'https://instagram.com/orbitamarketing',
      facebook: 'https://facebook.com/orbitamarketing',
      tiktok: 'https://tiktok.com/@orbitamarketing'
    }
  },

  defaultWhatsappMessages: {
    header:
      'Hola Órbita Marketing, vi su página web y quiero consultar disponibilidad de un producto en el C.C. Ciudad Crepuscular (Local PB-06).',
    heroPrimary:
      'Hola Órbita Marketing, vi su página y quiero cotizar revestimientos, wall panel, artefactos o materiales de ferretería en el C.C. Ciudad Crepuscular (Local PB-06).',
    catalogRequest:
      'Hola Órbita Marketing, vi su página y me gustaría recibir el catálogo actualizado de revestimientos, artefactos y ferretería por WhatsApp.',
    locationHelp:
      'Hola Órbita Marketing, voy en camino al C.C. Ciudad Crepuscular en la Av. 20. ¿Me confirman la ubicación del Local PB-06?'
  },

  schedule: [
    {
      days: 'Lunes a Sábado',
      hours: '8:30 AM – 6:30 PM',
      note: 'Horario corrido en C.C. Ciudad Crepuscular'
    },
    {
      days: 'Domingos y Feriados',
      hours: '9:00 AM – 3:00 PM',
      note: 'Atención previa cita y despacho rápido'
    }
  ] as ScheduleItem[],

  brands: [
    {
      id: 'wallpanel',
      name: 'WALL PANEL & WPC',
      category: 'Revestimientos y Decoración Interior/Exterior',
      badge: 'Tendencia 2026',
      accentColor: '#f6892c',
      description: 'Paneles acanalados WPC, láminas tipo mármol UV, jardines verticales y perfiles.'
    },
    {
      id: 'artefactos',
      name: 'LAVAPLATOS Y DUCHAS',
      category: 'Artefactos de Cocina y Baño',
      badge: 'Exhibición en Local',
      accentColor: '#f6892c',
      description: 'Lavaplatos multifuncionales e inoxidables, duchas tipo lluvia, columnas y grifería.'
    },
    {
      id: 'dewalt',
      name: 'DeWALT',
      category: 'Herramientas Eléctricas Industriales',
      badge: 'Garantía Oficial',
      accentColor: '#f6892c',
      description: 'Taladros percutores, esmeriles inalámbricos, baterías 20V MAX y accesorios.'
    },
    {
      id: 'truper',
      name: 'TRUPER',
      category: 'Herramientas y Ferretería General',
      badge: 'Stock Permanente',
      accentColor: '#f6892c',
      description: 'Línea completa de herramientas manuales, eléctricas, corte y medición.'
    },
    {
      id: 'ingco',
      name: 'INGCO',
      category: 'Maquinaria y Herramientas Pro',
      badge: 'Alto Desempeño',
      accentColor: '#f6892c',
      description: 'Taladros, compresores, pistolas de pintar y kits de herramientas profesionales.'
    },
    {
      id: 'sika',
      name: 'SIKA',
      category: 'Adhesivos, Pego e Impermeabilizantes',
      badge: 'Línea Construcción',
      accentColor: '#f6892c',
      description: 'Sikaflex, aditivos para concreto, selladores de poliuretano para wall panel y obra.'
    },
    {
      id: 'vp',
      name: 'VENEZOLANA DE PINTURAS',
      category: 'Pinturas y Recubrimientos',
      badge: 'Mezcla y Stock',
      accentColor: '#14171C',
      description: 'Caucho clase A y B, esmaltes anticorrosivos, fondos y selladores antialcalinos.'
    },
    {
      id: 'cemento',
      name: 'CEMENTO Y BLOQUES',
      category: 'Obra Gris y Construcción',
      badge: 'Despacho Rápido',
      accentColor: '#14171C',
      description: 'Cemento gris, pego blanco/gris, bloques de arcilla y concreto, cal y agregados.'
    }
  ] as BrandItem[],

  categories: [
    {
      id: 'revestimientos-wall-panel-decoracion',
      title: 'REVESTIMIENTOS Y WALL PANEL',
      subtitle: 'LAVAPLATOS, DUCHAS Y DECORACIÓN PARA EL HOGAR',
      badge: 'DISEÑO, CONFORT, MODERNIDAD',
      description:
        'Wall Panel WPC interior y exterior, láminas UV tipo mármol, lavaplatos multifuncionales tipo cascada, columnas de ducha y grifería.',
      highlights: [
        'Wall Panel WPC y láminas UV tipo mármol',
        'Lavaplatos inteligentes multifuncionales',
        'Columnas de ducha y regaderas modernas',
        'Adhesivos de montaje y perfiles decorativos'
      ],
      popularBrands: ['WPC Wall Panel', 'Láminas UV', 'Lavaplatos Cascada', 'Duchas Pro'],
      whatsappMessage:
        'Hola Órbita Marketing, vi su página y quiero cotizar Revestimientos, Wall Panel, Lavaplatos o Duchas en el C.C. Ciudad Crepuscular.',
      image: '/images/prod-revestimientos.jpg',
      theme: 'light',
      iconName: 'droplet'
    },
    {
      id: 'ferreteria-herramientas',
      title: 'HERRAMIENTAS Y FERRETERÍA',
      subtitle: 'HERRAMIENTAS DE CALIDAD PARA CADA TRABAJO',
      badge: 'CONSTRUYE, REPARA, CREA',
      description:
        'Taladros percutores, esmeriles, juegos de llaves, martillos, alicates, destornilladores, discos de corte, tornillería y fijaciones.',
      highlights: [
        'Taladros, esmeriles y herramientas eléctricas',
        'Llaves, martillos, alicates y destornilladores',
        'Discos de corte, mechas, cintas y niveles',
        'Tornillería, chazos y ferretería general'
      ],
      popularBrands: ['Stanley', 'Tolsen', 'Bellota', 'Emtop', 'Uyustools'],
      whatsappMessage:
        'Hola Órbita Marketing, vi su página y quiero consultar disponibilidad y precio de Herramientas y Ferretería.',
      image: '/images/prod-herramientas.jpg',
      theme: 'dark',
      iconName: 'wrench'
    },
    {
      id: 'electricidad-iluminacion',
      title: 'ELECTRICIDAD E ILUMINACIÓN',
      subtitle: 'INSTALACIONES SEGURAS, PROTECCIÓN Y LED',
      badge: 'POTENCIA, SEGURIDAD, ILUMINACIÓN',
      description:
        'Cables eléctricos THHN/TW, breakers termomagnéticos, protectores de voltaje, paneles LED, reflectores, cintas LED y tomacorrientes.',
      highlights: [
        'Cables THHN / TW por metro o por rollo',
        'Breakers, tableros y protectores de voltaje',
        'Paneles LED, reflectores y cintas LED',
        'Tomacorrientes, interruptores y canaletas'
      ],
      popularBrands: ['3M', 'Exceline', 'Bticino', 'Osram'],
      whatsappMessage:
        'Hola Órbita Marketing, vi su página y quiero consultar disponibilidad y precio en Electricidad e Iluminación.',
      image: '/images/prod-electricidad.jpg',
      theme: 'light',
      iconName: 'bolt'
    },
    {
      id: 'pinturas-acabados-construccion',
      title: 'PINTURAS Y CONSTRUCCIÓN',
      subtitle: 'ACABADOS, ADHESIVOS, CEMENTO Y OBRA GRIS',
      badge: 'RENUEVA, IMPERMEABILIZA, CONSTRUYE',
      description:
        'Pinturas en caucho, esmaltes, impermeabilizantes, siliconas, adhesivos para Wall Panel, cemento gris, pego, bloques, rodillos y brochas.',
      highlights: [
        'Pinturas en caucho, esmaltes y selladores',
        'Adhesivos de montaje, siliconas e impermeabilizantes',
        'Cemento gris, pego, bloques y pasta profesional',
        'Rodillos antigota, brochas y espátulas'
      ],
      popularBrands: ['Manpica', 'Quimicolor', 'Sika', '3M'],
      whatsappMessage:
        'Hola Órbita Marketing, vi su página y quiero cotizar Pinturas, Adhesivos y Materiales de Construcción.',
      image: '/images/prod-pinturas.jpg',
      theme: 'dark',
      iconName: 'paint'
    }
  ] as ProductCategory[],

  storePhotos: [
    {
      id: 'fachada-cc',
      title: 'Showroom y Tienda en Planta Baja - Local PB-06',
      caption:
        'Ubicados en el C.C. Ciudad Crepuscular (Barquisimeto) con exhibición real de Wall Panel, lavaplatos, duchas y ferretería.',
      badge: 'Local Verificado',
      image: '/images/local-fachada.webp'
    },
    {
      id: 'pasillo-herramientas',
      title: 'Área de Ferretería y Herramientas',
      caption:
        'Stock real a la vista de herramientas manuales, eléctricas, adhesivos y fijaciones listas para entrega inmediata.',
      badge: 'Inventario Real',
      image: '/images/local-pasillo.webp'
    },
    {
      id: 'mostrador-asesoria',
      title: 'Asesoría en Revestimientos, Pinturas y Construcción',
      caption:
        'Te ayudamos a calcular la cantidad exacta de paneles, pintura, cemento, bloques o materiales para tu remodelación.',
      badge: 'Asesoría Técnica',
      image: '/images/local-mostrador.webp'
    }
  ] as StorePhoto[]
}

export function buildWhatsAppUrl(customMessage?: string): string {
  const message =
    customMessage || siteConfig.defaultWhatsappMessages.heroPrimary
  return `https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(message)}`
}
