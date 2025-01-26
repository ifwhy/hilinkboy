// NAVIGATION
import { Home, HelpCircle, Settings, Phone, Instagram, Facebook, Github, Linkedin, Award } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/#home', key: 'home', label: 'Beranda', icon: Home },
  { href: '/#contact-us', key: 'how_hilink_work', label: 'Tanya Hilinkboy', icon: HelpCircle },
  { href: '/#services', key: 'services', label: 'Layanan', icon: Settings },
  { href: '/#superiority', key: 'advantages', label: 'Keunggulan', icon: Award },
  { href: '/#contact-us', key: 'contact_us', label: 'Hubungi Kami', icon: Phone },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Peta nyata dapat digunakan offline',
    icon: '/map.svg',
    variant: 'green',
    description:
        'Kami memberikan solusi agar Anda tetap dapat menggunakan aplikasi kami saat mendaki, ya peta offline bisa digunakan kapan saja meskipun tidak ada sinyal di lokasi',
  },
  {
    title: 'Jadwalkan petualangan',
    icon: '/calendar.svg',
    variant: 'green',
    description:
        'Jadwalkan petualangan bersama teman. Saat liburan, banyak penawaran menarik dari Hilink. Dengan begitu, tidak ada lagi perdebatan',
  },
  {
    title: 'Teknologi dengan augmented reality',
    icon: '/tech.svg',
    variant: 'green',
    description:
        'Teknologi menggunakan augmented reality sebagai panduan jalur pendakian Anda di hutan hingga puncak gunung. Sudah didukung teknologi terbaru tanpa koneksi internet',
  },
  {
    title: 'Banyak lokasi baru setiap bulan',
    icon: '/location.svg',
    variant: 'orange',
    description:
        'Banyak lokasi baru setiap bulan, karena kami memiliki komunitas pendaki di seluruh dunia yang berbagi pengalaman mendaki terbaik mereka',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Pelajari Lebih Lanjut',
    links: [
      'Tentang Hilinkboy',
      'Siaran Pers',
      'Lingkungan',
      'Karir',
      'Kebijakan Privasi',
      'Hubungi Kami',
    ],
  },
  {
    title: 'Komunitas Kami',
    links: ['Pendaki Selo', 'Jalur Pendakian Merbabu', 'Komunitas Hilinkboy Selo'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Hubungi Kami',
  links: [
    { label: 'Admin Officer', value: '0812-3456-7890' },
    { label: 'Email Officer', value: 'hilinkboy@selo.com' },
  ],
};

export const SOCIALS = {
  title: 'Sosial Media',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};

export const MEDIA_SOCIALS = [
  {
    'name': 'Instagram',
    'link': 'https://www.instagram.com/ifwhy._/',
    'icon': Instagram
  },
  {
    'name': 'Facebook',
    'link': 'https://www.facebook.com/ivan.w.nugroho.73/',
    'icon': Facebook
  },
  {
    'name': 'Github',
    'link': 'https://github.com/akintundeakinthil',
    'icon': Github
  },
  {
    'name': 'Linkedin',
    'link': 'https://www.linkedin.com/in/ivan-wahyu-nugroho-584ab0243/',
    'icon': Linkedin
  }
];
