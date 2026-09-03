export interface QRTemplate {
  id: string;
  name: string;
  category: 'modern' | 'luxury' | 'gradients' | 'social' | 'cafe' | string;
  industry?: 'restaurants' | 'real-estate' | 'education' | 'events' | 'retail' | 'marketing' | string;
  badge?: string;
  previewBg: string;
  config: {
    colorType: 'solid' | 'gradient';
    fgColor: string;
    bgColor: string;
    gradType?: 'linear' | 'radial';
    gradStart?: string;
    gradEnd?: string;
    gradAngle?: number;
    matrixShape?: 'square' | 'circle';
    dotType: 'square' | 'dots' | 'rounded' | 'classy' | 'classy-rounded' | 'extra-rounded';
    eyeFrameType: 'square' | 'dot' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded';
    eyeBallType: 'square' | 'dot' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded';
    frameStyle: 'none' | 'classic' | 'capsule' | 'minimal' | 'ticket' | 'pointer' | 'phone' | 'top-bottom' | 'glassmorphic' | 'neon' | 'viewfinder' | 'stamp';
    frameText?: string;
    frameTopText?: string;
    frameColor?: string;
    eccLevel: 'L' | 'M' | 'Q' | 'H';
    logoPreset?: string | null;
    logoFrame?: 'none' | 'circle' | 'square' | 'glass' | 'gold-ring' | 'shield';
    logoFrameColor?: string;
    logoSize?: number;
  };
}

export interface IndustryEmblem {
  id: string;
  name: string;
  industry: 'restaurants' | 'real-estate' | 'education' | 'events' | 'retail' | 'marketing';
  iconSvg: string;
}

// 18+ Handcrafted Vector Industry Emblems (Crisp SVG paths)
export const INDUSTRY_EMBLEMS: IndustryEmblem[] = [
  // Restaurants & Cafes
  {
    id: 'cloche-gold',
    name: 'Gourmet Cloche',
    industry: 'restaurants',
    iconSvg: `<path fill="#D4AF37" d="M12 3a2 2 0 0 0-2 2c0 .2.03.38.08.56A8.01 8.01 0 0 0 4 13.5V15h16v-1.5a8.01 8.01 0 0 0-6.08-7.94c.05-.18.08-.36.08-.56a2 2 0 0 0-2-2zm0 2.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM5.5 13.5c.3-3.6 3.1-6.5 6.5-6.5s6.2 2.9 6.5 6.5H5.5z"/><path fill="#D4AF37" d="M2 17h20v2H2z"/><circle cx="12" cy="10" r="1" fill="#CA8A04"/>`
  },
  {
    id: 'chef-cutlery',
    name: 'Chef Cutlery',
    industry: 'restaurants',
    iconSvg: `<path fill="#D4AF37" d="M7 2v7a2 2 0 0 0 2 2h.5v9a1.5 1.5 0 0 0 3 0V11H13a2 2 0 0 0 2-2V2h-1.5v5h-1V2h-1.5v5h-1V2H7zM16 2v18a1.5 1.5 0 0 0 3 0V8h1V2h-4z"/>`
  },
  {
    id: 'wine-goblet',
    name: 'Sommelier Goblet',
    industry: 'restaurants',
    iconSvg: `<path fill="#D4AF37" d="M6 3v5a6 6 0 0 0 5 5.91V19H8v2h8v-2h-3v-5.09A6 6 0 0 0 18 8V3H6zm2 2h8v3a4 4 0 0 1-8 0V5z"/><path fill="#831843" d="M8 7h8a4 4 0 0 1-4 4 4 4 0 0 1-4-4z"/>`
  },
  {
    id: 'artisan-coffee',
    name: 'Artisan Roast',
    industry: 'restaurants',
    iconSvg: `<path fill="#D4AF37" d="M4 19h16v2H4zM18 8h-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5v-1h1a3 3 0 0 0 3-3V9a1 1 0 0 0-1-1h-4zm-3 5a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7h10v6zm4-3v2a1 1 0 0 1-1 1h-1v-4h1a1 1 0 0 1 1 1zM7 1h2v3H7zm4 0h2v3h-2z"/>`
  },

  // Real Estate
  {
    id: 'luxury-villa',
    name: 'Château Villa',
    industry: 'real-estate',
    iconSvg: `<path fill="#D4AF37" d="M12 2 2 8h3v12h14V8h3L12 2zm0 3.2L16.5 8H7.5L12 5.2zM7 10h2v8H7v-8zm4 0h2v8h-2v-8zm4 0h2v8h-2v-8z"/>`
  },
  {
    id: 'penthouse-key',
    name: 'Penthouse Key',
    industry: 'real-estate',
    iconSvg: `<circle cx="7.5" cy="12" r="4.5" fill="none" stroke="#D4AF37" stroke-width="2.5"/><circle cx="7.5" cy="12" r="1.5" fill="#D4AF37"/><path fill="#D4AF37" d="M12 11h9v2h-2v3h-2v-3h-1.5v2h-2v-2H12v-2z"/>`
  },
  {
    id: 'skyline-tower',
    name: 'Prestige Tower',
    industry: 'real-estate',
    iconSvg: `<path fill="#D4AF37" d="M11 2h2v4h-2zM8 6h8l1 16H7L8 6zm2 3v2h4V9h-4zm0 4v2h4v-2h-4zm0 4v2h4v-2h-4z"/>`
  },

  // Education
  {
    id: 'academic-crest',
    name: 'Chancellor Shield',
    industry: 'education',
    iconSvg: `<path fill="#D4AF37" d="M12 2 4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3zm0 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4 11.2a6.96 6.96 0 0 1-4 1.8 6.96 6.96 0 0 1-4-1.8V15h8v2.2zM16 13H8v-1.5c0-1.33 2.67-2 4-2s4 .67 4 2V13z"/>`
  },
  {
    id: 'graduation-cap',
    name: 'Summa Cap',
    industry: 'education',
    iconSvg: `<path fill="#D4AF37" d="m12 3 10 5-10 5L2 8l10-5zm-7 8.5v4.2c0 2.5 3.1 4.5 7 4.5s7-2 7-4.5v-4.2l-7 3.5-7-3.5zm16-2.3v6.8h2V9.2l-2 0z"/>`
  },
  {
    id: 'stem-atom',
    name: 'STEM Orbital',
    industry: 'education',
    iconSvg: `<circle cx="12" cy="12" r="2.5" fill="#D4AF37"/><ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#D4AF37" stroke-width="1.8" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#D4AF37" stroke-width="1.8" transform="rotate(-30 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#D4AF37" stroke-width="1.8" transform="rotate(90 12 12)"/>`
  },

  // Events & Ticketing
  {
    id: 'vip-star',
    name: 'VIP Medallion',
    industry: 'events',
    iconSvg: `<path fill="#D4AF37" d="M12 2l2.9 6.2 6.8.8-5 4.7 1.4 6.7L12 17.1 6 20.4l1.3-6.7-5-4.7 6.8-.8L12 2z"/><circle cx="12" cy="12" r="8" fill="none" stroke="#CA8A04" stroke-width="1.2" stroke-dasharray="2 2"/>`
  },
  {
    id: 'golden-ticket',
    name: 'Admission Pass',
    industry: 'events',
    iconSvg: `<path fill="#D4AF37" d="M20 4H4a2 2 0 0 0-2 2v3.5a2.5 2.5 0 0 1 0 5V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3.5a2.5 2.5 0 0 1 0-5V6a2 2 0 0 0-2-2zm-9 11H9V9h2v6zm4 0h-2V9h2v6z"/>`
  },
  {
    id: 'music-live',
    name: 'Acoustic Note',
    industry: 'events',
    iconSvg: `<path fill="#D4AF37" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>`
  },

  // Retail & E-commerce
  {
    id: 'diamond-gem',
    name: 'Brilliant Diamond',
    industry: 'retail',
    iconSvg: `<path fill="#D4AF37" d="m6 3 12 0 4 6-10 12L2 9l4-6zm.8 2-2.7 4h3.6L9.3 5H6.8zm4.7 0-1.6 4h4.2l-1.6-4h-1zm4.7 0 1.6 4h3.6l-2.7-4h-2.5zM4.1 11l6.9 8.3v-8.3H4.1zm8.9 8.3 6.9-8.3h-6.9v8.3z"/>`
  },
  {
    id: 'boutique-bag',
    name: 'Haute Atelier Bag',
    industry: 'retail',
    iconSvg: `<path fill="#D4AF37" d="M19 6h-3c0-2.21-1.79-4-4-4S8 3.79 8 6H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-7-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm7 16H5V8h3v2a1 1 0 0 0 2 0V8h4v2a1 1 0 0 0 2 0V8h3v12z"/>`
  },
  {
    id: 'luxury-tag',
    name: 'Brand Seal Tag',
    industry: 'retail',
    iconSvg: `<path fill="#D4AF37" d="M21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7a2 2 0 0 0 0-2.83zM6.5 8A1.5 1.5 0 1 1 8 6.5 1.5 1.5 0 0 1 6.5 8z"/>`
  },

  // Marketing Campaigns
  {
    id: 'royal-crown',
    name: 'Imperial Crown',
    industry: 'marketing',
    iconSvg: `<path fill="#D4AF37" d="M5 16 3 5l5.5 5L12 3l3.5 7L21 5l-2 11H5zm0 2h14v2H5v-2z"/><circle cx="12" cy="2" r="1.5" fill="#CA8A04"/><circle cx="3" cy="4" r="1.2" fill="#CA8A04"/><circle cx="21" cy="4" r="1.2" fill="#CA8A04"/>`
  },
  {
    id: 'award-trophy',
    name: 'Grand Trophy',
    industry: 'marketing',
    iconSvg: `<path fill="#D4AF37" d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V19H8v2h8v-2h-3v-3.1c1.94-.38 3.51-1.78 3.96-3.64C19.26 11.75 21 9.61 21 7V6c0-1.1-.9-1-2-1zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>`
  },
  {
    id: 'growth-rocket',
    name: 'Apex Rocket',
    industry: 'marketing',
    iconSvg: `<path fill="#D4AF37" d="M12 2.5c0 0-5 3.5-5 9.5 0 2 .5 3.8 1.4 5.3l-2.4 2.4 1.4 1.4 2.4-2.4c1.5.9 3.3 1.4 5.2 1.4 2 0 3.8-.5 5.3-1.4l2.4 2.4 1.4-1.4-2.4-2.4c.9-1.5 1.4-3.3 1.4-5.3 0-6-5-9.5-5-9.5zm0 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>`
  }
];

// 12 Base / Universal Templates
export const QR_TEMPLATES: QRTemplate[] = [
  {
    id: 'sunset-horizon',
    name: 'Sunset Horizon',
    category: 'gradients',
    badge: 'Popular',
    previewBg: 'linear-gradient(135deg, #ff1b6b 0%, #eca0ff 100%)',
    config: {
      colorType: 'gradient',
      fgColor: '#ff1b6b',
      bgColor: '#ffffff',
      gradType: 'linear',
      gradStart: '#ff1b6b',
      gradEnd: '#eca0ff',
      gradAngle: 45,
      matrixShape: 'square',
      dotType: 'rounded',
      eyeFrameType: 'extra-rounded',
      eyeBallType: 'rounded',
      frameStyle: 'capsule',
      frameText: 'SCAN ME',
      frameColor: '#ff1b6b',
      eccLevel: 'H',
      logoPreset: null,
      logoFrame: 'none'
    }
  },
  {
    id: 'cyber-neon',
    name: 'Cyber Neon',
    category: 'modern',
    badge: 'New',
    previewBg: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
    config: {
      colorType: 'gradient',
      fgColor: '#00f2fe',
      bgColor: '#ffffff',
      gradType: 'linear',
      gradStart: '#00f2fe',
      gradEnd: '#4facfe',
      gradAngle: 90,
      matrixShape: 'circle',
      dotType: 'dots',
      eyeFrameType: 'dot',
      eyeBallType: 'dot',
      frameStyle: 'neon',
      frameText: 'CONNECT',
      frameColor: '#00f2fe',
      eccLevel: 'H',
      logoPreset: null,
      logoFrame: 'none'
    }
  },
  {
    id: 'noir-gold',
    name: 'Noir Luxury',
    category: 'luxury',
    badge: 'VIP',
    previewBg: 'linear-gradient(135deg, #262626 0%, #b45309 100%)',
    config: {
      colorType: 'solid',
      fgColor: '#171717',
      bgColor: '#faf8f5',
      matrixShape: 'square',
      dotType: 'classy',
      eyeFrameType: 'classy',
      eyeBallType: 'classy',
      frameStyle: 'minimal',
      frameText: 'SCAN TO VIEW',
      frameColor: '#b45309',
      eccLevel: 'H',
      logoPreset: null,
      logoFrame: 'none'
    }
  },
  {
    id: 'fintech-sapphire',
    name: 'FinTech Sapphire',
    category: 'modern',
    badge: 'Pro',
    previewBg: 'linear-gradient(135deg, #0f172a 0%, #2563eb 100%)',
    config: {
      colorType: 'gradient',
      fgColor: '#0f172a',
      bgColor: '#ffffff',
      gradType: 'linear',
      gradStart: '#0f172a',
      gradEnd: '#2563eb',
      gradAngle: 135,
      matrixShape: 'square',
      dotType: 'square',
      eyeFrameType: 'square',
      eyeBallType: 'square',
      frameStyle: 'glassmorphic',
      frameText: 'PAY SECURELY',
      frameColor: '#2563eb',
      eccLevel: 'H',
      logoPreset: null,
      logoFrame: 'none'
    }
  },
  {
    id: 'artisan-cafe',
    name: 'Artisan Cafe',
    category: 'cafe',
    badge: 'Popular',
    previewBg: 'linear-gradient(135deg, #451a03 0%, #78350f 100%)',
    config: {
      colorType: 'solid',
      fgColor: '#2b1810',
      bgColor: '#fffdf9',
      matrixShape: 'square',
      dotType: 'rounded',
      eyeFrameType: 'rounded',
      eyeBallType: 'rounded',
      frameStyle: 'stamp',
      frameText: 'ORDER & MENU',
      frameColor: '#2b1810',
      eccLevel: 'H',
      logoPreset: null,
      logoFrame: 'none'
    }
  },
  {
    id: 'aurora-violet',
    name: 'Aurora Violet',
    category: 'gradients',
    badge: 'Pro',
    previewBg: 'linear-gradient(135deg, #7928ca 0%, #ff0080 100%)',
    config: {
      colorType: 'gradient',
      fgColor: '#7928ca',
      bgColor: '#ffffff',
      gradType: 'linear',
      gradStart: '#7928ca',
      gradEnd: '#ff0080',
      gradAngle: 0,
      matrixShape: 'square',
      dotType: 'classy-rounded',
      eyeFrameType: 'extra-rounded',
      eyeBallType: 'classy-rounded',
      frameStyle: 'top-bottom',
      frameTopText: 'EXPERIENCE',
      frameText: 'SCAN NOW',
      frameColor: '#7928ca',
      eccLevel: 'H',
      logoPreset: null,
      logoFrame: 'none'
    }
  },
  {
    id: 'emerald-luxury',
    name: 'Emerald Club',
    category: 'luxury',
    badge: 'VIP',
    previewBg: 'linear-gradient(135deg, #064e3b 0%, #10b981 100%)',
    config: {
      colorType: 'gradient',
      fgColor: '#064e3b',
      bgColor: '#f0fdf4',
      gradType: 'linear',
      gradStart: '#064e3b',
      gradEnd: '#10b981',
      gradAngle: 45,
      matrixShape: 'square',
      dotType: 'classy-rounded',
      eyeFrameType: 'classy-rounded',
      eyeBallType: 'classy-rounded',
      frameStyle: 'minimal',
      frameText: 'VIP ACCESS',
      frameColor: '#059669',
      eccLevel: 'H',
      logoPreset: null,
      logoFrame: 'none'
    }
  },
  {
    id: 'matcha-sage',
    name: 'Matcha & Sage',
    category: 'cafe',
    badge: 'New',
    previewBg: 'linear-gradient(135deg, #14532d 0%, #22c55e 100%)',
    config: {
      colorType: 'gradient',
      fgColor: '#14532d',
      bgColor: '#fafdf7',
      gradType: 'linear',
      gradStart: '#14532d',
      gradEnd: '#22c55e',
      gradAngle: 90,
      matrixShape: 'square',
      dotType: 'rounded',
      eyeFrameType: 'classy-rounded',
      eyeBallType: 'dot',
      frameStyle: 'ticket',
      frameText: 'FRESH MENU',
      frameColor: '#16a34a',
      eccLevel: 'H',
      logoPreset: null,
      logoFrame: 'none'
    }
  },
  {
    id: 'creator-sunset',
    name: 'Creator Glow',
    category: 'social',
    badge: 'Popular',
    previewBg: 'linear-gradient(135deg, #d946ef 0%, #f97316 100%)',
    config: {
      colorType: 'gradient',
      fgColor: '#d946ef',
      bgColor: '#ffffff',
      gradType: 'linear',
      gradStart: '#d946ef',
      gradEnd: '#f97316',
      gradAngle: 45,
      matrixShape: 'square',
      dotType: 'dots',
      eyeFrameType: 'extra-rounded',
      eyeBallType: 'dot',
      frameStyle: 'capsule',
      frameText: 'FOLLOW US',
      frameColor: '#d946ef',
      eccLevel: 'H',
      logoPreset: 'instagram',
      logoFrame: 'circle'
    }
  },
  {
    id: 'monolith-pro',
    name: 'Monolith Pro',
    category: 'modern',
    badge: 'Pro',
    previewBg: 'linear-gradient(135deg, #18181b 0%, #000000 100%)',
    config: {
      colorType: 'solid',
      fgColor: '#09090b',
      bgColor: '#ffffff',
      matrixShape: 'square',
      dotType: 'extra-rounded',
      eyeFrameType: 'extra-rounded',
      eyeBallType: 'extra-rounded',
      frameStyle: 'pointer',
      frameText: 'SCAN CODE',
      frameColor: '#09090b',
      eccLevel: 'H',
      logoPreset: null,
      logoFrame: 'none'
    }
  },
  {
    id: 'electric-ocean',
    name: 'Electric Ocean',
    category: 'gradients',
    badge: 'New',
    previewBg: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
    config: {
      colorType: 'gradient',
      fgColor: '#00c6ff',
      bgColor: '#ffffff',
      gradType: 'linear',
      gradStart: '#00c6ff',
      gradEnd: '#0072ff',
      gradAngle: 90,
      matrixShape: 'square',
      dotType: 'classy-rounded',
      eyeFrameType: 'rounded',
      eyeBallType: 'classy',
      frameStyle: 'classic',
      frameText: 'DISCOVER',
      frameColor: '#0072ff',
      eccLevel: 'H',
      logoPreset: null,
      logoFrame: 'none'
    }
  },
  {
    id: 'social-whatsapp',
    name: 'WhatsApp Connect',
    category: 'social',
    badge: 'Popular',
    previewBg: 'linear-gradient(135deg, #075e54 0%, #25d366 100%)',
    config: {
      colorType: 'solid',
      fgColor: '#075e54',
      bgColor: '#f4fbf7',
      matrixShape: 'square',
      dotType: 'dots',
      eyeFrameType: 'rounded',
      eyeBallType: 'dot',
      frameStyle: 'capsule',
      frameText: 'CHAT ON WHATSAPP',
      frameColor: '#25d366',
      eccLevel: 'H',
      logoPreset: 'whatsapp',
      logoFrame: 'circle'
    }
  }
];

// Curated Industry-Specific Luxury & High-Aesthetic Presets (with Embedded Emblems)
export const INDUSTRY_TEMPLATES: Record<string, QRTemplate[]> = {
  restaurants: [
    {
      id: 'bistro-menu',
      name: 'Imperial Cloche Gold',
      category: 'luxury',
      industry: 'restaurants',
      badge: '✨ Luxury Edition',
      previewBg: 'linear-gradient(135deg, #18181b 0%, #d4af37 100%)',
      config: {
        colorType: 'solid',
        fgColor: '#18181b',
        bgColor: '#fffdf9',
        matrixShape: 'square',
        dotType: 'classy-rounded',
        eyeFrameType: 'classy-rounded',
        eyeBallType: 'rounded',
        frameStyle: 'capsule',
        frameText: 'VIEW MENU',
        frameColor: '#ca8a04',
        eccLevel: 'H',
        logoPreset: 'cloche-gold',
        logoFrame: 'gold-ring',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'wine-dine',
      name: 'Sommelier Reserve',
      category: 'luxury',
      industry: 'restaurants',
      badge: 'VIP Wine',
      previewBg: 'linear-gradient(135deg, #4a044e 0%, #be123c 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#581c87',
        bgColor: '#faf5ff',
        gradType: 'linear',
        gradStart: '#581c87',
        gradEnd: '#be123c',
        gradAngle: 135,
        matrixShape: 'square',
        dotType: 'classy',
        eyeFrameType: 'classy',
        eyeBallType: 'classy',
        frameStyle: 'minimal',
        frameText: 'DIGITAL MENU',
        frameColor: '#831843',
        eccLevel: 'H',
        logoPreset: 'wine-goblet',
        logoFrame: 'gold-ring',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'chef-crest',
      name: 'Chef Cutlery Crest',
      category: 'luxury',
      industry: 'restaurants',
      badge: '👑 Royal Dining',
      previewBg: 'linear-gradient(135deg, #09090b 0%, #b45309 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#171717',
        bgColor: '#fffdf5',
        gradType: 'linear',
        gradStart: '#171717',
        gradEnd: '#ca8a04',
        gradAngle: 45,
        matrixShape: 'square',
        dotType: 'classy-rounded',
        eyeFrameType: 'classy',
        eyeBallType: 'classy-rounded',
        frameStyle: 'top-bottom',
        frameTopText: 'FINE DINING',
        frameText: 'TABLE RESERVATION',
        frameColor: '#ca8a04',
        eccLevel: 'H',
        logoPreset: 'chef-cutlery',
        logoFrame: 'gold-ring',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'artisan-roast',
      name: 'Artisan Espresso',
      category: 'cafe',
      industry: 'restaurants',
      badge: 'Popular',
      previewBg: 'linear-gradient(135deg, #451a03 0%, #78350f 100%)',
      config: {
        colorType: 'solid',
        fgColor: '#38220f',
        bgColor: '#fdfbf7',
        matrixShape: 'square',
        dotType: 'rounded',
        eyeFrameType: 'rounded',
        eyeBallType: 'rounded',
        frameStyle: 'stamp',
        frameText: 'ORDER & MENU',
        frameColor: '#451a03',
        eccLevel: 'H',
        logoPreset: 'artisan-coffee',
        logoFrame: 'circle',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'fresh-bites',
      name: 'Fresh & Organic',
      category: 'modern',
      industry: 'restaurants',
      badge: 'Healthy',
      previewBg: 'linear-gradient(135deg, #14532d 0%, #16a34a 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#14532d',
        bgColor: '#f0fdf4',
        gradType: 'linear',
        gradStart: '#14532d',
        gradEnd: '#16a34a',
        gradAngle: 90,
        matrixShape: 'square',
        dotType: 'dots',
        eyeFrameType: 'rounded',
        eyeBallType: 'dot',
        frameStyle: 'ticket',
        frameText: 'TABLE MENU',
        frameColor: '#15803d',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    },
    {
      id: 'neon-cocktail',
      name: 'Cocktail Lounge',
      category: 'modern',
      industry: 'restaurants',
      badge: 'Night',
      previewBg: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#ec4899',
        bgColor: '#ffffff',
        gradType: 'linear',
        gradStart: '#ec4899',
        gradEnd: '#8b5cf6',
        gradAngle: 45,
        matrixShape: 'circle',
        dotType: 'dots',
        eyeFrameType: 'dot',
        eyeBallType: 'dot',
        frameStyle: 'neon',
        frameText: 'BAR MENU',
        frameColor: '#d946ef',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    }
  ],

  'real-estate': [
    {
      id: 'luxury-estate',
      name: 'Château Villa Crest',
      category: 'luxury',
      industry: 'real-estate',
      badge: '✨ Luxury Edition',
      previewBg: 'linear-gradient(135deg, #18181b 0%, #ca8a04 100%)',
      config: {
        colorType: 'solid',
        fgColor: '#18181b',
        bgColor: '#faf8f5',
        matrixShape: 'square',
        dotType: 'classy',
        eyeFrameType: 'classy',
        eyeBallType: 'classy',
        frameStyle: 'minimal',
        frameText: 'VIRTUAL TOUR',
        frameColor: '#ca8a04',
        eccLevel: 'H',
        logoPreset: 'luxury-villa',
        logoFrame: 'gold-ring',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'penthouse-key-tmpl',
      name: 'Penthouse Ornate Key',
      category: 'luxury',
      industry: 'real-estate',
      badge: '👑 Private Key',
      previewBg: 'linear-gradient(135deg, #09090b 0%, #d4af37 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#09090b',
        bgColor: '#fdfbf7',
        gradType: 'linear',
        gradStart: '#09090b',
        gradEnd: '#ca8a04',
        gradAngle: 135,
        matrixShape: 'square',
        dotType: 'classy-rounded',
        eyeFrameType: 'classy-rounded',
        eyeBallType: 'classy',
        frameStyle: 'capsule',
        frameText: 'EXCLUSIVE ACCESS',
        frameColor: '#ca8a04',
        eccLevel: 'H',
        logoPreset: 'penthouse-key',
        logoFrame: 'gold-ring',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'skyline-realty',
      name: 'Skyline Realtor',
      category: 'modern',
      industry: 'real-estate',
      badge: 'Pro Tower',
      previewBg: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#0284c7',
        bgColor: '#f0f9ff',
        gradType: 'linear',
        gradStart: '#0284c7',
        gradEnd: '#06b6d4',
        gradAngle: 45,
        matrixShape: 'square',
        dotType: 'classy-rounded',
        eyeFrameType: 'rounded',
        eyeBallType: 'classy-rounded',
        frameStyle: 'capsule',
        frameText: 'VIEW LISTING',
        frameColor: '#0284c7',
        eccLevel: 'H',
        logoPreset: 'skyline-tower',
        logoFrame: 'glass',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'open-house',
      name: 'Open House',
      category: 'modern',
      industry: 'real-estate',
      badge: 'Signboard',
      previewBg: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#0f172a',
        bgColor: '#ffffff',
        gradType: 'linear',
        gradStart: '#0f172a',
        gradEnd: '#1d4ed8',
        gradAngle: 90,
        matrixShape: 'square',
        dotType: 'square',
        eyeFrameType: 'square',
        eyeBallType: 'square',
        frameStyle: 'pointer',
        frameText: 'OPEN HOUSE',
        frameColor: '#1d4ed8',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    },
    {
      id: 'yard-sign',
      name: 'Yard Signboard',
      category: 'modern',
      industry: 'real-estate',
      badge: 'Print',
      previewBg: 'linear-gradient(135deg, #14532d 0%, #047857 100%)',
      config: {
        colorType: 'solid',
        fgColor: '#14532d',
        bgColor: '#f7fee7',
        matrixShape: 'square',
        dotType: 'rounded',
        eyeFrameType: 'extra-rounded',
        eyeBallType: 'rounded',
        frameStyle: 'top-bottom',
        frameTopText: 'FOR SALE',
        frameText: 'PROPERTY SPECS',
        frameColor: '#15803d',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    },
    {
      id: 'agent-showcase',
      name: 'Agent Contact',
      category: 'modern',
      industry: 'real-estate',
      badge: 'vCard',
      previewBg: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#1e293b',
        bgColor: '#ffffff',
        gradType: 'linear',
        gradStart: '#1e293b',
        gradEnd: '#3b82f6',
        gradAngle: 135,
        matrixShape: 'square',
        dotType: 'extra-rounded',
        eyeFrameType: 'rounded',
        eyeBallType: 'dot',
        frameStyle: 'glassmorphic',
        frameText: 'CONTACT AGENT',
        frameColor: '#2563eb',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    }
  ],

  education: [
    {
      id: 'smart-classroom',
      name: 'Chancellor Ivy Shield',
      category: 'luxury',
      industry: 'education',
      badge: '✨ Luxury Crest',
      previewBg: 'linear-gradient(135deg, #172554 0%, #ca8a04 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#172554',
        bgColor: '#faf8f5',
        gradType: 'linear',
        gradStart: '#172554',
        gradEnd: '#ca8a04',
        gradAngle: 45,
        matrixShape: 'square',
        dotType: 'classy',
        eyeFrameType: 'classy',
        eyeBallType: 'classy',
        frameStyle: 'capsule',
        frameText: 'CAMPUS PORTAL',
        frameColor: '#ca8a04',
        eccLevel: 'H',
        logoPreset: 'academic-crest',
        logoFrame: 'gold-ring',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'summa-cap-tmpl',
      name: 'Summa Cum Laude',
      category: 'luxury',
      industry: 'education',
      badge: '👑 Honors',
      previewBg: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#1e1b4b',
        bgColor: '#eff6ff',
        gradType: 'linear',
        gradStart: '#1e1b4b',
        gradEnd: '#4338ca',
        gradAngle: 90,
        matrixShape: 'square',
        dotType: 'classy-rounded',
        eyeFrameType: 'classy-rounded',
        eyeBallType: 'rounded',
        frameStyle: 'minimal',
        frameText: 'HONORS DIPLOMA',
        frameColor: '#4338ca',
        eccLevel: 'H',
        logoPreset: 'graduation-cap',
        logoFrame: 'gold-ring',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'stem-lab',
      name: 'STEM Quantum',
      category: 'modern',
      industry: 'education',
      badge: 'Interactive',
      previewBg: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#059669',
        bgColor: '#ecfdf5',
        gradType: 'linear',
        gradStart: '#059669',
        gradEnd: '#10b981',
        gradAngle: 45,
        matrixShape: 'circle',
        dotType: 'dots',
        eyeFrameType: 'dot',
        eyeBallType: 'dot',
        frameStyle: 'neon',
        frameText: 'SCAN FOR QUIZ',
        frameColor: '#059669',
        eccLevel: 'H',
        logoPreset: 'stem-atom',
        logoFrame: 'glass',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'homework-portal',
      name: 'Homework Link',
      category: 'modern',
      industry: 'education',
      badge: 'Tasks',
      previewBg: 'linear-gradient(135deg, #334155 0%, #64748b 100%)',
      config: {
        colorType: 'solid',
        fgColor: '#334155',
        bgColor: '#f8fafc',
        matrixShape: 'square',
        dotType: 'classy-rounded',
        eyeFrameType: 'square',
        eyeBallType: 'classy',
        frameStyle: 'classic',
        frameText: 'HOMEWORK LINK',
        frameColor: '#475569',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    },
    {
      id: 'digital-library',
      name: 'Digital Library',
      category: 'cafe',
      industry: 'education',
      badge: 'Books',
      previewBg: 'linear-gradient(135deg, #451a03 0%, #b45309 100%)',
      config: {
        colorType: 'solid',
        fgColor: '#451a03',
        bgColor: '#fffbeb',
        matrixShape: 'square',
        dotType: 'rounded',
        eyeFrameType: 'rounded',
        eyeBallType: 'rounded',
        frameStyle: 'stamp',
        frameText: 'READ E-BOOK',
        frameColor: '#78350f',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    },
    {
      id: 'lecture-slides',
      name: 'Lecture Slides',
      category: 'gradients',
      industry: 'education',
      badge: 'Slides',
      previewBg: 'linear-gradient(135deg, #4338ca 0%, #7c3aed 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#4338ca',
        bgColor: '#ffffff',
        gradType: 'linear',
        gradStart: '#4338ca',
        gradEnd: '#7c3aed',
        gradAngle: 135,
        matrixShape: 'square',
        dotType: 'extra-rounded',
        eyeFrameType: 'extra-rounded',
        eyeBallType: 'extra-rounded',
        frameStyle: 'ticket',
        frameText: 'VIEW SLIDES',
        frameColor: '#6366f1',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    }
  ],

  events: [
    {
      id: 'vip-ticket',
      name: 'Black Tie VIP Medallion',
      category: 'luxury',
      industry: 'events',
      badge: '✨ Luxury Edition',
      previewBg: 'linear-gradient(135deg, #18181b 0%, #d97706 100%)',
      config: {
        colorType: 'solid',
        fgColor: '#171717',
        bgColor: '#fffdf5',
        matrixShape: 'square',
        dotType: 'classy',
        eyeFrameType: 'classy',
        eyeBallType: 'classy',
        frameStyle: 'ticket',
        frameText: 'VIP ACCESS',
        frameColor: '#d97706',
        eccLevel: 'H',
        logoPreset: 'vip-star',
        logoFrame: 'gold-ring',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'golden-gala-tmpl',
      name: 'Golden Gala Pass',
      category: 'luxury',
      industry: 'events',
      badge: '👑 Golden Pass',
      previewBg: 'linear-gradient(135deg, #09090b 0%, #ca8a04 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#09090b',
        bgColor: '#faf8f5',
        gradType: 'linear',
        gradStart: '#09090b',
        gradEnd: '#ca8a04',
        gradAngle: 90,
        matrixShape: 'square',
        dotType: 'classy-rounded',
        eyeFrameType: 'classy',
        eyeBallType: 'classy',
        frameStyle: 'capsule',
        frameText: 'GALA ADMISSION',
        frameColor: '#ca8a04',
        eccLevel: 'H',
        logoPreset: 'golden-ticket',
        logoFrame: 'gold-ring',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'concert-glow',
      name: 'Live Festival Glow',
      category: 'modern',
      industry: 'events',
      badge: 'Live Pass',
      previewBg: 'linear-gradient(135deg, #d946ef 0%, #8b5cf6 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#d946ef',
        bgColor: '#ffffff',
        gradType: 'linear',
        gradStart: '#d946ef',
        gradEnd: '#8b5cf6',
        gradAngle: 90,
        matrixShape: 'circle',
        dotType: 'dots',
        eyeFrameType: 'dot',
        eyeBallType: 'dot',
        frameStyle: 'neon',
        frameText: 'GET TICKETS',
        frameColor: '#d946ef',
        eccLevel: 'H',
        logoPreset: 'music-live',
        logoFrame: 'glass',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'tech-summit',
      name: 'Tech Summit',
      category: 'modern',
      industry: 'events',
      badge: 'Badge',
      previewBg: 'linear-gradient(135deg, #0f172a 0%, #2563eb 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#0f172a',
        bgColor: '#ffffff',
        gradType: 'linear',
        gradStart: '#0f172a',
        gradEnd: '#2563eb',
        gradAngle: 135,
        matrixShape: 'square',
        dotType: 'classy-rounded',
        eyeFrameType: 'rounded',
        eyeBallType: 'classy-rounded',
        frameStyle: 'capsule',
        frameText: 'EVENT BADGE',
        frameColor: '#2563eb',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    },
    {
      id: 'festival-sunset',
      name: 'Festival Sunset',
      category: 'gradients',
      industry: 'events',
      badge: 'Fest',
      previewBg: 'linear-gradient(135deg, #f97316 0%, #db2777 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#f97316',
        bgColor: '#fffaf5',
        gradType: 'linear',
        gradStart: '#f97316',
        gradEnd: '#db2777',
        gradAngle: 45,
        matrixShape: 'square',
        dotType: 'rounded',
        eyeFrameType: 'extra-rounded',
        eyeBallType: 'rounded',
        frameStyle: 'pointer',
        frameText: 'RSVP NOW',
        frameColor: '#f97316',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    },
    {
      id: 'expo-guide',
      name: 'Expo Badge',
      category: 'modern',
      industry: 'events',
      badge: 'Expo',
      previewBg: 'linear-gradient(135deg, #0284c7 0%, #6366f1 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#0284c7',
        bgColor: '#f0f9ff',
        gradType: 'linear',
        gradStart: '#0284c7',
        gradEnd: '#6366f1',
        gradAngle: 90,
        matrixShape: 'square',
        dotType: 'extra-rounded',
        eyeFrameType: 'extra-rounded',
        eyeBallType: 'extra-rounded',
        frameStyle: 'top-bottom',
        frameTopText: 'AGENDA',
        frameText: 'SCAN BADGE',
        frameColor: '#4f46e5',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    }
  ],

  retail: [
    {
      id: 'flash-sale',
      name: 'Haute Joaillerie Diamond',
      category: 'luxury',
      industry: 'retail',
      badge: '✨ Luxury Edition',
      previewBg: 'linear-gradient(135deg, #09090b 0%, #d4af37 100%)',
      config: {
        colorType: 'solid',
        fgColor: '#18181b',
        bgColor: '#faf8f5',
        matrixShape: 'square',
        dotType: 'classy',
        eyeFrameType: 'classy',
        eyeBallType: 'classy',
        frameStyle: 'minimal',
        frameText: 'FINE JEWELRY',
        frameColor: '#ca8a04',
        eccLevel: 'H',
        logoPreset: 'diamond-gem',
        logoFrame: 'gold-ring',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'maison-atelier-tmpl',
      name: 'Maison Atelier Bag',
      category: 'luxury',
      industry: 'retail',
      badge: '👑 Atelier',
      previewBg: 'linear-gradient(135deg, #27272a 0%, #b45309 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#171717',
        bgColor: '#fffdf7',
        gradType: 'linear',
        gradStart: '#171717',
        gradEnd: '#b45309',
        gradAngle: 135,
        matrixShape: 'square',
        dotType: 'classy-rounded',
        eyeFrameType: 'classy',
        eyeBallType: 'classy',
        frameStyle: 'capsule',
        frameText: 'NEW COLLECTION',
        frameColor: '#b45309',
        eccLevel: 'H',
        logoPreset: 'boutique-bag',
        logoFrame: 'gold-ring',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'luxury-tag-tmpl',
      name: 'Prestige Brand Tag',
      category: 'luxury',
      industry: 'retail',
      badge: 'VIP Deal',
      previewBg: 'linear-gradient(135deg, #dc2626 0%, #f97316 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#dc2626',
        bgColor: '#ffffff',
        gradType: 'linear',
        gradStart: '#dc2626',
        gradEnd: '#f97316',
        gradAngle: 45,
        matrixShape: 'square',
        dotType: 'extra-rounded',
        eyeFrameType: 'extra-rounded',
        eyeBallType: 'extra-rounded',
        frameStyle: 'capsule',
        frameText: 'GET 20% OFF',
        frameColor: '#dc2626',
        eccLevel: 'H',
        logoPreset: 'luxury-tag',
        logoFrame: 'circle',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'product-label',
      name: 'Product Label',
      category: 'modern',
      industry: 'retail',
      badge: 'Packaging',
      previewBg: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#0f766e',
        bgColor: '#f0fdfa',
        gradType: 'linear',
        gradStart: '#0f766e',
        gradEnd: '#0d9488',
        gradAngle: 90,
        matrixShape: 'square',
        dotType: 'rounded',
        eyeFrameType: 'rounded',
        eyeBallType: 'rounded',
        frameStyle: 'classic',
        frameText: 'SCAN FOR SPECS',
        frameColor: '#0f766e',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    },
    {
      id: 'loyalty-rewards',
      name: 'Club Rewards',
      category: 'gradients',
      industry: 'retail',
      badge: 'Discounts',
      previewBg: 'linear-gradient(135deg, #7c3aed 0%, #f43f5e 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#7c3aed',
        bgColor: '#ffffff',
        gradType: 'linear',
        gradStart: '#7c3aed',
        gradEnd: '#f43f5e',
        gradAngle: 135,
        matrixShape: 'square',
        dotType: 'dots',
        eyeFrameType: 'extra-rounded',
        eyeBallType: 'dot',
        frameStyle: 'ticket',
        frameText: 'CLAIM DISCOUNT',
        frameColor: '#7c3aed',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    },
    {
      id: 'storefront-display',
      name: 'Storefront Window',
      category: 'modern',
      industry: 'retail',
      badge: 'In-Store',
      previewBg: 'linear-gradient(135deg, #1d4ed8 0%, #06b6d4 100%)',
      config: {
        colorType: 'solid',
        fgColor: '#1d4ed8',
        bgColor: '#eff6ff',
        matrixShape: 'square',
        dotType: 'classy-rounded',
        eyeFrameType: 'rounded',
        eyeBallType: 'classy-rounded',
        frameStyle: 'pointer',
        frameText: 'SHOP IN-STORE',
        frameColor: '#1d4ed8',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    }
  ],

  marketing: [
    {
      id: 'billboard-glow',
      name: 'Sovereign Crown Gold',
      category: 'luxury',
      industry: 'marketing',
      badge: '✨ Luxury Edition',
      previewBg: 'linear-gradient(135deg, #09090b 0%, #ca8a04 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#09090b',
        bgColor: '#fdfbf7',
        gradType: 'linear',
        gradStart: '#09090b',
        gradEnd: '#ca8a04',
        gradAngle: 45,
        matrixShape: 'square',
        dotType: 'classy',
        eyeFrameType: 'classy',
        eyeBallType: 'classy',
        frameStyle: 'capsule',
        frameText: 'ROYAL BRAND',
        frameColor: '#ca8a04',
        eccLevel: 'H',
        logoPreset: 'royal-crown',
        logoFrame: 'gold-ring',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'grand-prix-tmpl',
      name: 'Grand Prix Trophy',
      category: 'luxury',
      industry: 'marketing',
      badge: '👑 Gold Trophy',
      previewBg: 'linear-gradient(135deg, #0f172a 0%, #d4af37 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#0f172a',
        bgColor: '#f8fafc',
        gradType: 'linear',
        gradStart: '#0f172a',
        gradEnd: '#ca8a04',
        gradAngle: 135,
        matrixShape: 'square',
        dotType: 'classy-rounded',
        eyeFrameType: 'classy-rounded',
        eyeBallType: 'classy',
        frameStyle: 'minimal',
        frameText: 'WINNER CIRCLE',
        frameColor: '#ca8a04',
        eccLevel: 'H',
        logoPreset: 'award-trophy',
        logoFrame: 'gold-ring',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'apex-rocket-tmpl',
      name: 'Apex Rocket Launch',
      category: 'modern',
      industry: 'marketing',
      badge: 'Viral Launch',
      previewBg: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#ff0844',
        bgColor: '#ffffff',
        gradType: 'linear',
        gradStart: '#ff0844',
        gradEnd: '#ffb199',
        gradAngle: 90,
        matrixShape: 'square',
        dotType: 'dots',
        eyeFrameType: 'rounded',
        eyeBallType: 'dot',
        frameStyle: 'pointer',
        frameText: 'EXPLORE NOW',
        frameColor: '#ff0844',
        eccLevel: 'H',
        logoPreset: 'growth-rocket',
        logoFrame: 'glass',
        logoFrameColor: '#ffffff',
        logoSize: 0.28
      }
    },
    {
      id: 'brand-authority',
      name: 'Brand Authority',
      category: 'luxury',
      industry: 'marketing',
      badge: 'Trust',
      previewBg: 'linear-gradient(135deg, #0f172a 0%, #0284c7 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#0f172a',
        bgColor: '#ffffff',
        gradType: 'linear',
        gradStart: '#0f172a',
        gradEnd: '#0284c7',
        gradAngle: 135,
        matrixShape: 'square',
        dotType: 'classy',
        eyeFrameType: 'square',
        eyeBallType: 'classy',
        frameStyle: 'classic',
        frameText: 'OFFICIAL SITE',
        frameColor: '#0284c7',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    },
    {
      id: 'exclusive-drop',
      name: 'Exclusive Drop',
      category: 'modern',
      industry: 'marketing',
      badge: 'Drop',
      previewBg: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#00f2fe',
        bgColor: '#ffffff',
        gradType: 'linear',
        gradStart: '#00f2fe',
        gradEnd: '#4facfe',
        gradAngle: 90,
        matrixShape: 'circle',
        dotType: 'rounded',
        eyeFrameType: 'dot',
        eyeBallType: 'dot',
        frameStyle: 'neon',
        frameText: 'EARLY ACCESS',
        frameColor: '#00f2fe',
        eccLevel: 'H',
        logoPreset: null,
        logoFrame: 'none'
      }
    },
    {
      id: 'social-follow',
      name: 'Brand Social',
      category: 'social',
      industry: 'marketing',
      badge: 'Connect',
      previewBg: 'linear-gradient(135deg, #d946ef 0%, #f97316 100%)',
      config: {
        colorType: 'gradient',
        fgColor: '#d946ef',
        bgColor: '#ffffff',
        gradType: 'linear',
        gradStart: '#d946ef',
        gradEnd: '#f97316',
        gradAngle: 45,
        matrixShape: 'square',
        dotType: 'dots',
        eyeFrameType: 'extra-rounded',
        eyeBallType: 'dot',
        frameStyle: 'top-bottom',
        frameTopText: 'STAY CONNECTED',
        frameText: 'FOLLOW US',
        frameColor: '#d946ef',
        eccLevel: 'H',
        logoPreset: 'instagram',
        logoFrame: 'circle'
      }
    }
  ]
};

// Returns templates for a specific industry slug, or base templates if slug is not matched
export function getTemplatesForIndustry(industrySlug?: string): QRTemplate[] {
  if (industrySlug && industrySlug in INDUSTRY_TEMPLATES) {
    return INDUSTRY_TEMPLATES[industrySlug];
  }
  return QR_TEMPLATES;
}

// Returns the primary default template for an industry
export function getDefaultTemplateForIndustry(industrySlug?: string): QRTemplate | undefined {
  if (industrySlug && industrySlug in INDUSTRY_TEMPLATES) {
    return INDUSTRY_TEMPLATES[industrySlug][0];
  }
  return QR_TEMPLATES[0];
}

// Returns all templates (industry + base templates combined) with unique IDs
export function getAllTemplates(): QRTemplate[] {
  const allIndustryTemplates = Object.values(INDUSTRY_TEMPLATES).flat();
  return [...allIndustryTemplates, ...QR_TEMPLATES];
}

// Returns emblems for a specific industry
export function getEmblemsForIndustry(industrySlug?: string): IndustryEmblem[] {
  if (!industrySlug) return INDUSTRY_EMBLEMS;
  return INDUSTRY_EMBLEMS.filter(e => e.industry === industrySlug);
}
