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
    brandName: 'Órbita Marketing',
    shortName: 'ÓRBITA',
    legalName: 'Órbita Marketing, C.A.',
    rif: 'J-41298456-0',
    logoUrl: '/Logo.png',
    tagline: 'FERRETERÍA, HERRAMIENTAS Y SUMINISTROS',
    mallName: 'Centro Comercial Ciudad Crepuscular',
    mallShort: 'C.C. Ciudad Crepuscular',
    level: 'Planta Baja',
    localNumber: 'Local PB-06',
    shortAddress: 'Av. 20 entre calles 40 y 41 • Local PB-06',
    referencePoints: [
      'Avenida 20 entre calles 40 y 41, Barquisimeto 3001',
      'Centro Comercial Ciudad Crepuscular, Planta Baja, Local PB-06',
      'Fácil acceso peatonal y vehicular en pleno centro comercial de Barquisimeto'
    ],
    city: 'Barquisimeto 3001, Edo. Lara',
    fullAddress:
      'Avenida 20 entre calles 40 y 41, Centro Comercial Ciudad Crepuscular, Local Planta Baja 06, Órbita Marketing, Barquisimeto 3001, Edo. Lara.',
    phoneDisplay: '+58 412-3682831',
    landlineDisplay: '+58 412-3682831',
    whatsappNumber: '584123682831',
    email: 'ventas@orbitamarketing.com',
    complianceEmail: 'legal@orbitamarketing.com',
    foundedYear: 2018,
    skuCount: '+4,500',
    responseMinutes: '< 5 min',
    heroImage: '/images/hero-local.webp',
    catalogUrl: '/catalogo-ferreteria.pdf',
    catalogVersion: 'Edición 2026 • PDF Optimizado',
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Centro+Comercial+Ciudad+Crepuscular+Avenida+20+Barquisimeto',
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.3742!2d-69.3275!3d10.0678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e87671b78555555%3A0x1!2sBarquisimeto%203001%2C%20Lara!5e0!3m2!1ses!2sve!4v1700000000000!5m2!1ses!2sve',
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
      'Hola Órbita Marketing, vi su página y quiero cotizar unas herramientas y materiales para retirar en el C.C. Ciudad Crepuscular (Local PB-06).',
    catalogRequest:
      'Hola Órbita Marketing, vi su página y me gustaría recibir el catálogo actualizado con lista de precios por WhatsApp.',
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
      note: 'Atención presencial y despacho rápido'
    }
  ] as ScheduleItem[],

  brands: [
    {
      id: 'dewalt',
      name: 'DeWALT',
      category: 'Herramientas Eléctricas Industriales',
      badge: 'Garantía Oficial',
      accentColor: '#f6892c',
      description: 'Taladros percutores, esmeriles inalámbricos, baterías 20V MAX y accesorios.'
    },
    {
      id: 'stanley',
      name: 'STANLEY',
      category: 'Herramientas Manuales y Precisión',
      badge: 'En Stock',
      accentColor: '#f6892c',
      description: 'Cintas métricas, juegos de llaves, destornilladores y cajas organizadoras.'
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
      description: 'Bombas periféricas, compresores, pistolas de pintar y kits para el hogar.'
    },
    {
      id: 'bosch',
      name: 'BOSCH',
      category: 'Equipos Eléctricos y Brocas',
      badge: 'Original Certificado',
      accentColor: '#14171C',
      description: 'Rotomartillos, discos diamantados, mechas para concreto/metal y lijadoras.'
    },
    {
      id: 'bticino',
      name: 'BTICINO',
      category: 'Material Eléctrico Residencial',
      badge: 'Alta Rotación',
      accentColor: '#f6892c',
      description: 'Tomacorrientes, interruptores, breakers, tableros y protección eléctrica.'
    },
    {
      id: 'pavco',
      name: 'PAVCO WAVIN',
      category: 'Tuberías y Conexiones PVC / CPVC',
      badge: 'Línea Completa',
      accentColor: '#14171C',
      description: 'Tuberías de aguas blancas, aguas servidas, conexiones y soldadura líquida.'
    },
    {
      id: 'sika',
      name: 'SIKA',
      category: 'Adhesivos e Impermeabilizantes',
      badge: 'Línea Construcción',
      accentColor: '#f6892c',
      description: 'Sikaflex, aditivos para concreto, selladores de poliuretano y epóxicos.'
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
      id: 'coflex',
      name: 'COFLEX',
      category: 'Plomería y Grifería',
      badge: 'Repuestos Originales',
      accentColor: '#f6892c',
      description: 'Mangueras flexibles, herrajes para WC, sifones, desagües y llaves de arresto.'
    },
    {
      id: 'osram',
      name: 'OSRAM / LEDVANCE',
      category: 'Iluminación LED Comercial y Hogar',
      badge: 'Ahorro Energético',
      accentColor: '#f6892c',
      description: 'Paneles LED empotrables/superficiales, reflectores IP65, tubos y bombillos.'
    },
    {
      id: '3m',
      name: '3M INDUSTRIAL',
      category: 'Cintas Eléctricas, Abrasivos y EPP',
      badge: 'Calidad Industrial',
      accentColor: '#14171C',
      description: 'Teipe eléctrico Scotch Super 33+, lijas al agua, mascarillas y adhesivos.'
    }
  ] as BrandItem[],

  categories: [
    {
      id: 'herramientas-manuales-electricas',
      title: 'Herramientas Manuales y Eléctricas',
      subtitle: 'POTENCIA Y PRECISIÓN • USO PROFESIONAL Y HOGAR',
      badge: 'GARANTÍA EN TIENDA',
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
        'Hola Órbita Marketing, vi su página y quiero consultar disponibilidad y precio de Herramientas Manuales y Eléctricas.',
      image: '/images/cat-herramientas.webp',
      theme: 'dark',
      iconName: 'wrench'
    },
    {
      id: 'electricidad-iluminacion',
      title: 'Electricidad e Iluminación',
      subtitle: 'INSTALACIONES SEGURAS • PROTECCIÓN Y LED',
      badge: 'STOCK INMEDIATO',
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
        'Hola Órbita Marketing, vi su página y quiero consultar disponibilidad y precio en la categoría de Electricidad e Iluminación.',
      image: '/images/cat-electricidad.webp',
      theme: 'light',
      iconName: 'bolt'
    },
    {
      id: 'plomeria-tuberias',
      title: 'Plomería y Tuberías',
      subtitle: 'SOLUCIONES CERO FUGAS • AGUA Y PRESIÓN',
      badge: 'REPUESTOS Y CONEXIONES',
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
        'Hola Órbita Marketing, vi su página y necesito cotizar repuestos o materiales de Plomería y Tuberías.',
      image: '/images/cat-plomeria.webp',
      theme: 'light',
      iconName: 'droplet'
    },
    {
      id: 'pinturas-adhesivos-construccion',
      title: 'Pinturas, Adhesivos y Construcción Ligera',
      subtitle: 'ACABADOS DURADEROS • IMPERMEABILIZACIÓN Y FIJACIÓN',
      badge: 'ALTA DEMANDA',
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
        'Hola Órbita Marketing, vi su página y quiero cotizar productos de Pinturas, Adhesivos y Construcción Ligera.',
      image: '/images/cat-pinturas.webp',
      theme: 'dark',
      iconName: 'paint'
    }
  ] as ProductCategory[],

  storePhotos: [
    {
      id: 'fachada-cc',
      title: 'Fachada Principal en Planta Baja - Local PB-06',
      caption:
        'Ubicados en el C.C. Ciudad Crepuscular (Av. 20 entre calles 40 y 41, Barquisimeto) con atención directa en mostrador.',
      badge: 'Local Verificado',
      image: '/images/local-fachada.webp'
    },
    {
      id: 'pasillo-herramientas',
      title: 'Exhibición de Herramientas y Equipos Eléctricos',
      caption:
        'Stock real a la vista de marcas líderes como DeWalt, Truper, Bosch y Stanley listas para entrega inmediata.',
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

export function buildWhatsAppUrl(customMessage?: string): string {
  const message =
    customMessage || siteConfig.defaultWhatsappMessages.heroPrimary
  return `https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(message)}`
}
