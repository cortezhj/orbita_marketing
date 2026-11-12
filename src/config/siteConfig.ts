import logoOrbitaMarketing from '../assets/logo-orbita-marketing.png'
import productoElectricidad from '../assets/products/producto-electricidad.jpg'
import productoHerramientas from '../assets/products/producto-herramientas.jpg'
import productoPinturas from '../assets/products/producto-pinturas.jpg'
import productoRevestimientos from '../assets/products/producto-revestimientos.jpg'
import iconFacebook from '../assets/socials/icon-facebook.webp'
import iconInstagram from '../assets/socials/icon-instagram.png'
import iconTiktok from '../assets/socials/icon-tiktok.png'

export interface ProductCategory {
  id: string
  title: string
  subtitle: string
  badge: string
  description: string
  whatsappMessage: string
  image: string
  theme: 'light' | 'dark'
  bgColor: string
}

export interface NavItem {
  label: string
  footerLabel: string
  path: string
  sectionId: string
  hasArrow?: boolean
}

export interface SocialItem {
  name: string
  href: string
  icon: string
}

export const siteConfig = {
  business: {
    brandName: 'Órbita Marketing',
    legalName: 'Órbita Marketing, C.A.',
    rif: 'J500390335',
    logoUrl: logoOrbitaMarketing,
    mallName: 'Centro Comercial Ciudad Crepuscular',
    mallShort: 'C.C. Ciudad Crepuscular',
    localNumber: 'Local PB-06',
    headerLocationSub: 'Local PB-06 • Lun-Sáb 8:00am - 5:00pm',
    shortAddress: 'Av. 20 entre calles 40 y 41 • Local PB-06',
    fullAddress:
      'Avenida 20 entre calles 40 y 41, Centro Comercial Ciudad Crepuscular, Local Planta Baja 06, Órbita Marketing, Barquisimeto 3001, Edo. Lara.',
    phoneDisplay: '+58 412-3682831',
    whatsappNumber: '584123682831',
    email: 'ventas@orbitamarketingve.com',
    complianceEmail: 'ventas@orbitamarketingve.com',
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Centro+Comercial+Ciudad+Crepuscular,+Avenida+20,+Barquisimeto,+Lara,+Venezuela',
    googleMapsEmbedUrl:
      'https://maps.google.com/maps?q=Centro+Comercial+Ciudad+Crepuscular,+Avenida+20,+Barquisimeto,+Lara,+Venezuela&hl=es&z=17&output=embed'
  },

  defaultWhatsappMessages: {
    header:
      'Hola Órbita Marketing, vi su página web y quiero consultar disponibilidad de un producto en el C.C. Ciudad Crepuscular (Local PB-06).',
    heroPrimary:
      'Hola Órbita Marketing, vi su página y quiero cotizar revestimientos, wall panel, artefactos o materiales de ferretería en el C.C. Ciudad Crepuscular (Local PB-06).'
  },

  navLinks: [
    { label: 'INICIO', footerLabel: 'Inicio', path: '/', sectionId: '', hasArrow: false },
    { label: 'NUESTROS PRODUCTOS', footerLabel: 'Nuestros Productos', path: '/productos', sectionId: 'categorias', hasArrow: true },
    { label: 'MARCAS EN STOCK', footerLabel: 'Marcas que Distribuimos', path: '/marcas', sectionId: 'marcas', hasArrow: false },
    { label: 'UBICACIÓN Y HORARIOS', footerLabel: 'Ubicación y Horarios', path: '/ubicacion', sectionId: 'ubicacion', hasArrow: false }
  ] as NavItem[],

  socialLinks: [
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61554849213439', icon: iconFacebook },
    { name: 'Instagram', href: 'https://www.instagram.com/orbita_marketyngca/', icon: iconInstagram },
    { name: 'TikTok', href: 'https://www.tiktok.com/@orbitamarketyngca', icon: iconTiktok }
  ] as SocialItem[],

  categories: [
    {
      id: 'revestimientos-wall-panel-decoracion',
      title: 'REVESTIMIENTOS Y WALL PANEL',
      subtitle: 'LAVAPLATOS, DUCHAS Y DECORACIÓN PARA EL HOGAR',
      badge: 'DISEÑO, CONFORT, MODERNIDAD',
      description:
        'Wall Panel WPC interior y exterior, láminas UV tipo mármol, lavaplatos multifuncionales tipo cascada, columnas de ducha y grifería.',
      whatsappMessage:
        'Hola Órbita Marketing, vi su página y quiero cotizar Revestimientos, Wall Panel, Lavaplatos o Duchas en el C.C. Ciudad Crepuscular.',
      image: productoRevestimientos,
      theme: 'light',
      bgColor: '#e5e5e3'
    },
    {
      id: 'ferreteria-herramientas',
      title: 'HERRAMIENTAS Y FERRETERÍA',
      subtitle: 'HERRAMIENTAS DE CALIDAD PARA CADA TRABAJO',
      badge: 'CONSTRUYE, REPARA, CREA',
      description:
        'Taladros percutores, esmeriles, juegos de llaves, martillos, alicates, destornilladores, discos de corte, tornillería y fijaciones.',
      whatsappMessage:
        'Hola Órbita Marketing, vi su página y quiero consultar disponibilidad y precio de Herramientas y Ferretería.',
      image: productoHerramientas,
      theme: 'dark',
      bgColor: '#24272c'
    },
    {
      id: 'electricidad-iluminacion',
      title: 'ELECTRICIDAD E ILUMINACIÓN',
      subtitle: 'INSTALACIONES SEGURAS, PROTECCIÓN Y LED',
      badge: 'POTENCIA, SEGURIDAD, ILUMINACIÓN',
      description:
        'Cables eléctricos THHN/TW, breakers termomagnéticos, protectores de voltaje, paneles LED, reflectores, cintas LED y tomacorrientes.',
      whatsappMessage:
        'Hola Órbita Marketing, vi su página y quiero consultar disponibilidad y precio en Electricidad e Iluminación.',
      image: productoElectricidad,
      theme: 'light',
      bgColor: '#e7e7e7'
    },
    {
      id: 'pinturas-acabados-construccion',
      title: 'PINTURAS Y CONSTRUCCIÓN',
      subtitle: 'ACABADOS, ADHESIVOS, CEMENTO Y OBRA GRIS',
      badge: 'RENUEVA, IMPERMEABILIZA, CONSTRUYE',
      description:
        'Pinturas en caucho, esmaltes, impermeabilizantes, siliconas, adhesivos para Wall Panel, cemento gris, pego, bloques, rodillos y brochas.',
      whatsappMessage:
        'Hola Órbita Marketing, vi su página y quiero cotizar Pinturas, Adhesivos y Materiales de Construcción.',
      image: productoPinturas,
      theme: 'dark',
      bgColor: '#1b1e23'
    }
  ] as ProductCategory[]
}

export function buildWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || siteConfig.defaultWhatsappMessages.heroPrimary
  return `https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function navigateToSection(sectionId?: string, path = '/'): void {
  if (window.location.pathname !== path || window.location.hash) {
    window.history.pushState({}, '', path)
  }

  if (!sectionId) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
