// Client Side script
import QRCodeStyling from 'qr-code-styling';
import JSZip from 'jszip';
import jsQR from 'jsqr';
import { translations } from '../../i18n/translations';

// State Management
let currentLocale = document.documentElement.lang || 'en';
let t = translations[currentLocale] || translations.en;

// Dynamic Industry overrides configuration
const configEl = document.getElementById('main-page-config');
const landingData = configEl?.getAttribute('data-landing-data')
  ? JSON.parse(configEl.getAttribute('data-landing-data'))
  : null;

// Pre-configured type setup from Astro props
const tabsContainer = document.querySelector('.qr-type-tab[data-type]') as HTMLButtonElement;
let activeType = 'url';

const activeTabEl = document.querySelector('.qr-type-tab.bg-ink') as HTMLButtonElement;
if (activeTabEl) {
  activeType = activeTabEl.getAttribute('data-type') || 'url';
}

let qrCodeInstance: any = null;

// Customization State
let fgColor = '#171717';
let bgColor = '#ffffff';
let activeLogoPreset: string | null = null;
let customLogoDataUrl: string | null = null;

// Gradients State
let colorType = 'solid'; // 'solid' or 'gradient'
let gradType = 'linear';
let gradStart = '#7928ca';
let gradEnd = '#ff0080';
let gradAngle = 0;

// Frames State
let frameStyle = 'none'; // 'none' or 'classic'
let frameText = 'SCAN ME';
let frameColor = '#171717';
let isCustomFrameColor = false;

let dotType = 'square';
let eyeFrameType = 'square';
let eyeBallType = 'square';
let eccLevel = 'H';
let qrSize = 350;

// Track if colors are user-customized
let isCustomColors = false;

// Load default colors depending on theme
function updateDefaultColors() {
  if (!isCustomColors) {
    const isDark = document.documentElement.classList.contains('dark');
    fgColor = isDark ? '#ffffff' : '#171717';
    bgColor = isDark ? '#121212' : '#ffffff';
    
    const fgColorInput = document.getElementById('fg-color') as HTMLInputElement;
    const fgColorHex = document.getElementById('fg-color-hex') as HTMLInputElement;
    const bgColorInput = document.getElementById('bg-color') as HTMLInputElement;
    const bgColorHex = document.getElementById('bg-color-hex') as HTMLInputElement;

    if (fgColorInput && fgColorHex) {
      fgColorInput.value = fgColor;
      fgColorHex.value = fgColor;
    }
    if (bgColorInput && bgColorHex) {
      bgColorInput.value = bgColor;
      bgColorHex.value = bgColor;
    }

    if (!isCustomFrameColor) {
      frameColor = fgColor;
      const frameColorInput = document.getElementById('frame-color-picker') as HTMLInputElement;
      if (frameColorInput) frameColorInput.value = frameColor;
    }
  }
}

// Initialize UI Elements
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initApp();
}

function initApp() {
  if (qrCodeInstance) return; // Prevent double initialization
  
  // Bind accordions
  setupAccordions('.accordion-header', '.accordion-content');
  setupAccordions('.faq-header', '.faq-content');

  // Setup Theme Toggler
  const themeBtn = document.getElementById('theme-toggle');
  themeBtn?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateDefaultColors();
    updateQRCode();
    updateFrameUI();
  });

  updateDefaultColors();

  // Feature tabs switching (Generate, Scan, Bulk)
  const tabBtnGen = document.getElementById('tab-btn-generate');
  const tabBtnScan = document.getElementById('tab-btn-scan');
  const tabBtnBulk = document.getElementById('tab-btn-bulk');

  const viewGen = document.getElementById('view-generate');
  const viewScan = document.getElementById('view-scan');
  const viewBulk = document.getElementById('view-bulk');

  function selectView(activeBtn: HTMLElement, activeView: HTMLElement) {
    [tabBtnGen, tabBtnScan, tabBtnBulk].forEach(b => {
      b?.classList.remove('bg-canvas', 'text-ink', 'shadow-sm', 'font-semibold');
      b?.classList.add('text-body', 'font-medium');
    });
    activeBtn.classList.remove('text-body', 'font-medium');
    activeBtn.classList.add('bg-canvas', 'text-ink', 'shadow-sm', 'font-semibold');

    [viewGen, viewScan, viewBulk].forEach(v => v?.classList.add('hidden'));
    activeView.classList.remove('hidden');

    // Stop camera if leaving scanner
    if (activeBtn !== tabBtnScan) {
      stopScannerCamera();
    }
  }

  tabBtnGen?.addEventListener('click', () => selectView(tabBtnGen, viewGen!));
  tabBtnScan?.addEventListener('click', () => selectView(tabBtnScan, viewScan!));
  tabBtnBulk?.addEventListener('click', () => selectView(tabBtnBulk, viewBulk!));

  // Type Selector tabs
  const tabs = document.querySelectorAll('.qr-type-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('bg-ink', 'text-canvas', 'font-semibold', 'shadow-sm'));
      tabs.forEach(t => t.classList.add('text-body', 'hover:bg-canvas-soft'));
      
      tab.classList.remove('text-body', 'hover:bg-canvas-soft');
      tab.classList.add('bg-ink', 'text-canvas', 'font-semibold', 'shadow-sm');

      const type = tab.getAttribute('data-type') || 'url';
      switchType(type);
    });
  });

  // Solid Color Pickers
  const fgInput = document.getElementById('fg-color') as HTMLInputElement;
  const fgHex = document.getElementById('fg-color-hex') as HTMLInputElement;
  const bgInput = document.getElementById('bg-color') as HTMLInputElement;
  const bgHex = document.getElementById('bg-color-hex') as HTMLInputElement;

  fgInput?.addEventListener('input', (e) => {
    fgColor = (e.target as HTMLInputElement).value;
    fgHex.value = fgColor;
    isCustomColors = true;
    if (!isCustomFrameColor) {
      frameColor = fgColor;
      const frameColorInput = document.getElementById('frame-color-picker') as HTMLInputElement;
      if (frameColorInput) frameColorInput.value = frameColor;
      updateFrameUI();
    }
    updateQRCode();
  });
  fgHex?.addEventListener('change', () => {
    fgColor = fgHex.value.startsWith('#') ? fgHex.value : '#' + fgHex.value;
    fgInput.value = fgColor;
    isCustomColors = true;
    if (!isCustomFrameColor) {
      frameColor = fgColor;
      const frameColorInput = document.getElementById('frame-color-picker') as HTMLInputElement;
      if (frameColorInput) frameColorInput.value = frameColor;
      updateFrameUI();
    }
    updateQRCode();
  });

  bgInput?.addEventListener('input', (e) => {
    bgColor = (e.target as HTMLInputElement).value;
    bgHex.value = bgColor;
    isCustomColors = true;
    updateQRCode();
  });
  bgHex?.addEventListener('change', () => {
    bgColor = bgHex.value.startsWith('#') ? bgHex.value : '#' + bgHex.value;
    bgInput.value = bgColor;
    isCustomColors = true;
    updateQRCode();
  });

  // Color Pickers type Solid vs Gradient toggle
  const colorTypeSelect = document.getElementById('color-type-select') as HTMLSelectElement;
  const solidColorCtrls = document.getElementById('solid-color-controls');
  const gradColorCtrls = document.getElementById('gradient-color-controls');
  const presetsContainer = document.getElementById('presets-container');

  colorTypeSelect?.addEventListener('change', (e) => {
    colorType = (e.target as HTMLSelectElement).value;
    if (colorType === 'gradient') {
      solidColorCtrls?.classList.add('hidden');
      presetsContainer?.classList.add('hidden');
      gradColorCtrls?.classList.remove('hidden');
    } else {
      solidColorCtrls?.classList.remove('hidden');
      presetsContainer?.classList.remove('hidden');
      gradColorCtrls?.classList.add('hidden');
    }
    updateQRCode();
  });

  // Gradient properties inputs
  const gradColorStartInput = document.getElementById('grad-color-start') as HTMLInputElement;
  const gradColorEndInput = document.getElementById('grad-color-end') as HTMLInputElement;
  const gradTypeSelect = document.getElementById('grad-type-select') as HTMLSelectElement;
  const gradAngleInput = document.getElementById('grad-angle') as HTMLInputElement;
  const gradAngleVal = document.getElementById('grad-angle-val');
  const gradAngleWrapper = document.getElementById('grad-angle-wrapper');

  gradColorStartInput?.addEventListener('input', (e) => {
    gradStart = (e.target as HTMLInputElement).value;
    updateQRCode();
  });
  gradColorEndInput?.addEventListener('input', (e) => {
    gradEnd = (e.target as HTMLInputElement).value;
    updateQRCode();
  });
  gradTypeSelect?.addEventListener('change', (e) => {
    gradType = (e.target as HTMLSelectElement).value;
    if (gradType === 'radial') {
      gradAngleWrapper?.classList.add('opacity-40', 'pointer-events-none');
    } else {
      gradAngleWrapper?.classList.remove('opacity-40', 'pointer-events-none');
    }
    updateQRCode();
  });
  gradAngleInput?.addEventListener('input', (e) => {
    gradAngle = parseInt((e.target as HTMLInputElement).value);
    if (gradAngleVal) gradAngleVal.innerText = `${gradAngle}°`;
    updateQRCode();
  });

  // Preset color clickers
  const presetBtns = document.querySelectorAll('.preset-color');
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      fgColor = btn.getAttribute('data-fg') || '#171717';
      bgColor = btn.getAttribute('data-bg') || '#ffffff';
      isCustomColors = true;
      
      fgInput.value = fgColor;
      fgHex.value = fgColor;
      bgInput.value = bgColor;
      bgHex.value = bgColor;

      if (!isCustomFrameColor) {
        frameColor = fgColor;
        const frameColorInput = document.getElementById('frame-color-picker') as HTMLInputElement;
        if (frameColorInput) frameColorInput.value = frameColor;
        updateFrameUI();
      }

      updateQRCode();
    });
  });

  // Frame controls
  const frameStyleSelect = document.getElementById('frame-style-select') as HTMLSelectElement;
  const frameCustomCtrls = document.getElementById('frame-custom-controls');
  const frameTextInput = document.getElementById('frame-text-input') as HTMLInputElement;
  const frameColorPicker = document.getElementById('frame-color-picker') as HTMLInputElement;
  const syncFrameColorBtn = document.getElementById('sync-frame-color');

  frameStyleSelect?.addEventListener('change', (e) => {
    frameStyle = (e.target as HTMLSelectElement).value;
    if (frameStyle === 'none') {
      frameCustomCtrls?.classList.add('hidden');
    } else {
      frameCustomCtrls?.classList.remove('hidden');
    }
    updateFrameUI();
  });

  frameTextInput?.addEventListener('input', (e) => {
    frameText = (e.target as HTMLInputElement).value;
    updateFrameUI();
  });

  frameColorPicker?.addEventListener('input', (e) => {
    frameColor = (e.target as HTMLInputElement).value;
    isCustomFrameColor = true;
    updateFrameUI();
  });

  syncFrameColorBtn?.addEventListener('click', () => {
    frameColor = fgColor;
    frameColorPicker.value = frameColor;
    isCustomFrameColor = false;
    updateFrameUI();
  });

  // Input listeners for real time regeneration
  const realTimeInputs = [
    'input-url', 'input-text', 'wifi-ssid', 'wifi-password', 'wifi-encryption',
    'contact-name', 'contact-phone', 'contact-email', 'contact-company', 'contact-address',
    'whatsapp-phone', 'whatsapp-message', 'email-to', 'email-subject', 'email-body',
    'phone-number', 'crypto-type', 'crypto-amount', 'crypto-address',
    'social-platform', 'social-username', 'feedback-platform', 'feedback-url'
  ];

  realTimeInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => updateQRCode());
      el.addEventListener('change', () => updateQRCode());
    }
  });

  // Shapes selectors
  document.getElementById('body-style')?.addEventListener('change', (e) => {
    dotType = (e.target as HTMLSelectElement).value;
    updateQRCode();
  });
  document.getElementById('eye-border-style')?.addEventListener('change', (e) => {
    eyeFrameType = (e.target as HTMLSelectElement).value;
    updateQRCode();
  });
  document.getElementById('eye-center-style')?.addEventListener('change', (e) => {
    eyeBallType = (e.target as HTMLSelectElement).value;
    updateQRCode();
  });

  // Platform switcher interactions for feedback
  document.getElementById('feedback-platform')?.addEventListener('change', (e) => {
    const platform = (e.target as HTMLSelectElement).value;
    const label = document.getElementById('feedback-label');
    const input = document.getElementById('feedback-url') as HTMLInputElement;
    const logoPresets = document.querySelectorAll('.preset-logo');

    // 1. Update text & placeholders
    if (label && input) {
      if (platform === 'google') {
        label.textContent = "Google Place ID or Review URL";
        input.placeholder = landingData?.types?.feedback?.placeholders?.['feedback-url'] || "ChIJT6E-google-place-id";
      } else if (platform === 'trustpilot') {
        label.textContent = "Trustpilot Business Domain";
        input.placeholder = "yourbusiness.com";
      } else if (platform === 'yelp') {
        label.textContent = "Yelp Business Slug";
        input.placeholder = "yelp-business-slug";
      } else {
        label.textContent = "Custom Survey / Feedback URL";
        input.placeholder = "https://yourwebsite.com/feedback";
      }
    }

    // 2. Auto-apply branded logo preset
    logoPresets.forEach(b => b.classList.remove('border-ink', 'bg-canvas-soft-2'));
    if (platform !== 'custom') {
      const matchingLogoBtn = document.querySelector(`.preset-logo[data-preset="${platform}"]`) as HTMLButtonElement;
      if (matchingLogoBtn) {
        matchingLogoBtn.classList.add('border-ink', 'bg-canvas-soft-2');
        activeLogoPreset = platform;
        customLogoDataUrl = null;
      }
    } else {
      activeLogoPreset = null;
    }
    updateQRCode();
  });

  // Dropdown / size ranges
  document.getElementById('ecc-level')?.addEventListener('change', (e) => {
    eccLevel = (e.target as HTMLSelectElement).value;
    updateQRCode();
  });
  const sizeRange = document.getElementById('size-range') as HTMLInputElement;
  const sizeVal = document.getElementById('size-val');
  sizeRange?.addEventListener('input', (e) => {
    qrSize = parseInt((e.target as HTMLInputElement).value);
    if (sizeVal) sizeVal.innerText = `${qrSize}px`;
    updateQRCode();
  });

  // Logo Upload Logic
  const dropZone = document.getElementById('drop-zone');
  const logoFile = document.getElementById('logo-file') as HTMLInputElement;
  
  dropZone?.addEventListener('click', () => logoFile?.click());
  dropZone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('border-ink', 'bg-canvas-soft');
  });
  dropZone?.addEventListener('dragleave', () => {
    dropZone.classList.remove('border-ink', 'bg-canvas-soft');
  });
  dropZone?.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('border-ink', 'bg-canvas-soft');
    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      handleLogoFile(files[0]);
    }
  });
  logoFile?.addEventListener('change', (e) => {
    const files = (e.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      handleLogoFile(files[0]);
    }
  });

  // Preset Logo clickers
  const logoPresets = document.querySelectorAll('.preset-logo');
  logoPresets.forEach(btn => {
    btn.addEventListener('click', () => {
      logoPresets.forEach(b => b.classList.remove('border-ink', 'bg-canvas-soft-2'));
      btn.classList.add('border-ink', 'bg-canvas-soft-2');

      const preset = btn.getAttribute('data-preset');
      if (preset) {
        activeLogoPreset = preset;
        customLogoDataUrl = null; // Override custom
        updateQRCode();
      }
    });
  });

  // Clear logo clicker
  document.getElementById('clear-logo')?.addEventListener('click', () => {
    logoPresets.forEach(b => b.classList.remove('border-ink', 'bg-canvas-soft-2'));
    activeLogoPreset = null;
    customLogoDataUrl = null;
    logoFile.value = '';
    updateQRCode();
  });

  // Downloads
  document.getElementById('download-png-btn')?.addEventListener('click', () => {
    downloadQR('png');
  });
  document.getElementById('download-svg-btn')?.addEventListener('click', () => {
    downloadQR('svg');
  });

  // Initialize QR Code Styling instance
  const payload = getPayload();
  qrCodeInstance = new QRCodeStyling({
    width: 240,
    height: 240,
    type: 'svg',
    data: payload,
    qrOptions: {
      errorCorrectionLevel: eccLevel
    },
    dotsOptions: {
      color: fgColor,
      type: dotType as any
    },
    backgroundOptions: {
      color: bgColor
    },
    cornersSquareOptions: {
      color: fgColor,
      type: eyeFrameType as any
    },
    cornersDotOptions: {
      color: fgColor,
      type: eyeBallType as any
    },
    imageOptions: {
      crossOrigin: 'anonymous',
      margin: 6,
      imageSize: 0.35
    }
  });

  const canvasContainer = document.getElementById('canvas-container');
  if (canvasContainer) {
    qrCodeInstance.append(canvasContainer);
  }

  // Initialize Scanner UI events
  setupScanner();

  // Initialize Bulk Generator UI events
  setupBulkGenerator();

  applyIndustryOverrides(activeType);
  renderHistory();
}

// Apply dynamic overrides based on active industry and QR type
function applyIndustryOverrides(type: string) {
  if (!landingData) return;
  
  const headlineEl = document.getElementById('hero-headline');
  const descEl = document.getElementById('hero-description');

  let updated = false;

  if (landingData.types && landingData.types[type]) {
    const override = landingData.types[type];
    
    if (headlineEl && override.headline) {
      headlineEl.textContent = override.headline;
    }
    if (descEl && override.description) {
      descEl.textContent = override.description;
    }

    // Apply placeholders and default values
    if (override.placeholders) {
      Object.entries(override.placeholders).forEach(([fieldId, placeholderText]) => {
        const inputEl = document.getElementById(fieldId) as HTMLInputElement | HTMLTextAreaElement | null;
        if (inputEl) {
          inputEl.placeholder = placeholderText as string;
          // For url, if it has default generic value or empty, set it
          if (fieldId === 'input-url' && (inputEl.value === 'https://onlineqrgenerator.com' || inputEl.value === '')) {
            inputEl.value = placeholderText as string;
            updated = true;
          }
           // For social username, if it has default generic value or empty, set it
          if (fieldId === 'social-username' && (inputEl.value === 'username' || inputEl.value === '')) {
            inputEl.value = placeholderText as string;
            updated = true;
          }
          // For feedback url, if it has default generic value or empty, set it
          if (fieldId === 'feedback-url' && (inputEl.value === 'ChIJT6E-google-place-id' || inputEl.value === '')) {
            inputEl.value = placeholderText as string;
            updated = true;

            // Auto-select platform based on URL patterns
            const fbPlatformSelect = document.getElementById('feedback-platform') as HTMLSelectElement | null;
            if (fbPlatformSelect) {
              const val = inputEl.value;
              if (val.includes('trustpilot.com')) {
                fbPlatformSelect.value = 'trustpilot';
              } else if (val.includes('yelp.com')) {
                fbPlatformSelect.value = 'yelp';
              } else if (val.includes('search.google.com') || val.length === 27) {
                fbPlatformSelect.value = 'google';
              } else if (val.startsWith('http://') || val.startsWith('https://')) {
                fbPlatformSelect.value = 'custom';
              } else {
                fbPlatformSelect.value = 'google';
              }
              // Dispatch change event to update label, placeholder and preset logo!
              fbPlatformSelect.dispatchEvent(new Event('change'));
            }
          }
        }
      });
    }
  } else {
    // Revert to default headline and description
    if (headlineEl) headlineEl.textContent = landingData.headline;
    if (descEl) descEl.textContent = landingData.description;
  }

  if (updated) {
    updateQRCode();
  }
}

// Switch Active Config Form Panel
function switchType(type: string) {
  activeType = type;
  const panels = document.querySelectorAll('.qr-form-panel');
  panels.forEach(p => p.classList.add('hidden'));

  const activePanel = document.getElementById(`form-${type}`);
  if (activePanel) {
    activePanel.classList.remove('hidden');
  }

  applyIndustryOverrides(type);
  updateQRCode();
}

// File handler
function handleLogoFile(file: File) {
  if (file.size > 1024 * 1024) {
    showToast('File is too large. Max 1MB allowed.', true);
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    customLogoDataUrl = e.target?.result as string;
    activeLogoPreset = null; // Clear presets
    
    // Clear preset visual borders
    const logoPresets = document.querySelectorAll('.preset-logo');
    logoPresets.forEach(b => b.classList.remove('border-ink', 'bg-canvas-soft-2'));

    updateQRCode();
    showToast('Logo loaded successfully!');
  };
  reader.readAsDataURL(file);
}

// Resolve preset logo to raw URLs/data
function getLogoPath(): string | null {
  if (customLogoDataUrl) return customLogoDataUrl;
  if (activeLogoPreset) {
    switch (activeLogoPreset) {
      case 'google': return 'https://www.google.com/favicon.ico';
      case 'yelp': return 'https://www.yelp.com/favicon.ico';
      case 'trustpilot': return 'https://www.trustpilot.com/favicon.ico';
      case 'github': return 'https://github.com/favicon.ico';
      case 'linkedin': return 'https://www.linkedin.com/favicon.ico';
    }
  }
  return null;
}

// Format QR payload string
function getPayload(): string {
  switch (activeType) {
    case 'url':
      const urlEl = document.getElementById('input-url') as HTMLInputElement;
      return urlEl?.value || 'https://onlineqrgenerator.com';

    case 'social':
      const platform = (document.getElementById('social-platform') as HTMLSelectElement)?.value || 'instagram';
      const username = (document.getElementById('social-username') as HTMLInputElement)?.value || '';
      if (platform === 'custom') {
        return username.trim();
      }
      let baseUrl = '';
      switch (platform) {
        case 'instagram': baseUrl = 'https://instagram.com/'; break;
        case 'facebook': baseUrl = 'https://facebook.com/'; break;
        case 'youtube': baseUrl = 'https://youtube.com/@'; break;
        case 'tiktok': baseUrl = 'https://tiktok.com/@'; break;
        case 'linkedin': baseUrl = 'https://linkedin.com/in/'; break;
        case 'twitter': baseUrl = 'https://x.com/'; break;
      }
      return `${baseUrl}${username.trim()}`;
    case 'feedback':
      const fbPlatform = (document.getElementById('feedback-platform') as HTMLSelectElement)?.value || 'custom';
      const fbUrlInput = document.getElementById('feedback-url') as HTMLInputElement;
      const fbInput = fbUrlInput?.value || '';
      let trimmed = fbInput.trim();
      if (!trimmed && fbUrlInput) {
        trimmed = (fbUrlInput.placeholder || '').trim();
      }
      if (!trimmed) {
        if (fbPlatform === 'google') {
          trimmed = 'ChIJT6E-google-place-id';
        } else if (fbPlatform === 'yelp') {
          trimmed = 'yelp-business-slug';
        } else if (fbPlatform === 'trustpilot') {
          trimmed = 'yourbusiness.com';
        } else {
          trimmed = 'https://onlineqrgenerator.com/feedback';
        }
      }

      // If a full link is pasted directly, bypass the slug parser
      if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
        return trimmed;
      }

      // Auto-resolve slug / ID to platform endpoints
      switch (fbPlatform) {
        case 'google':
          return `https://search.google.com/local/writereview?placeid=${trimmed}`;
        case 'yelp':
          return `https://www.yelp.com/writeareview/biz/${trimmed}`;
        case 'trustpilot':
          return `https://www.trustpilot.com/evaluate/${trimmed}`;
        default:
          return trimmed;
      }
    
    case 'text':
      const textEl = document.getElementById('input-text') as HTMLTextAreaElement;
      let textVal = textEl?.value || '';
      if (!textVal && textEl) {
        textVal = textEl.placeholder || 'Scan this QR code';
      }
      return textVal;
    
    case 'wifi':
      const ssid = (document.getElementById('wifi-ssid') as HTMLInputElement)?.value || '';
      const pass = (document.getElementById('wifi-password') as HTMLInputElement)?.value || '';
      const enc = (document.getElementById('wifi-encryption') as HTMLSelectElement)?.value || 'WPA';
      return `WIFI:S:${ssid};T:${enc};P:${pass};;`;

    case 'contact':
      const name = (document.getElementById('contact-name') as HTMLInputElement)?.value || '';
      const phone = (document.getElementById('contact-phone') as HTMLInputElement)?.value || '';
      const email = (document.getElementById('contact-email') as HTMLInputElement)?.value || '';
      const comp = (document.getElementById('contact-company') as HTMLInputElement)?.value || '';
      const addr = (document.getElementById('contact-address') as HTMLInputElement)?.value || '';
      return `BEGIN:VCARD\nVERSION:3.0\nN:${name};;;;\nFN:${name}\nORG:${comp}\nTEL;TYPE=CELL:${phone}\nEMAIL;TYPE=PREF,INTERNET:${email}\nADR;TYPE=WORK:;;${addr};;;;\nEND:VCARD`;

    case 'whatsapp':
      const waPhone = (document.getElementById('whatsapp-phone') as HTMLInputElement)?.value || '';
      const waMsg = (document.getElementById('whatsapp-message') as HTMLTextAreaElement)?.value || '';
      return `https://wa.me/${waPhone.replace(/[^\d+]/g, '')}?text=${encodeURIComponent(waMsg)}`;

    case 'email':
      const mailTo = (document.getElementById('email-to') as HTMLInputElement)?.value || '';
      const mailSub = (document.getElementById('email-subject') as HTMLInputElement)?.value || '';
      const mailBody = (document.getElementById('email-body') as HTMLTextAreaElement)?.value || '';
      return `mailto:${mailTo}?subject=${encodeURIComponent(mailSub)}&body=${encodeURIComponent(mailBody)}`;

    case 'phone':
      const pNum = (document.getElementById('phone-number') as HTMLInputElement)?.value || '';
      return `tel:${pNum.replace(/[^\d+]/g, '')}`;

    case 'crypto':
      const cType = (document.getElementById('crypto-type') as HTMLSelectElement)?.value || 'bitcoin';
      const cAddr = (document.getElementById('crypto-address') as HTMLInputElement)?.value || '';
      const cAmt = (document.getElementById('crypto-amount') as HTMLInputElement)?.value || '';
      return `${cType}:${cAddr}${cAmt ? `?amount=${cAmt}` : ''}`;
    
    default:
      return '';
  }
}

// Update styling options
function updateQRCode() {
  if (!qrCodeInstance) return;

  const payload = getPayload();
  const logo = getLogoPath();

  // Prepare color/gradient parameter
  let dotColorParam: any = {};
  if (colorType === 'gradient') {
    const angleRad = (gradAngle * Math.PI) / 180;
    dotColorParam = {
      gradient: {
        type: gradType,
        rotation: angleRad,
        colorStops: [
          { offset: 0, color: gradStart },
          { offset: 1, color: gradEnd }
        ]
      }
    };
  } else {
    dotColorParam = {
      color: fgColor
    };
  }

  qrCodeInstance.update({
    data: payload,
    qrOptions: {
      errorCorrectionLevel: eccLevel
    },
    dotsOptions: {
      ...dotColorParam,
      type: dotType
    },
    backgroundOptions: {
      color: bgColor
    },
    cornersSquareOptions: {
      color: colorType === 'solid' ? fgColor : gradStart,
      type: eyeFrameType
    },
    cornersDotOptions: {
      color: colorType === 'solid' ? fgColor : gradEnd,
      type: eyeBallType
    },
    image: logo || undefined
  });
}

// Live CSS visual frame pre-viewer updates
function updateFrameUI() {
  const frameWrapper = document.getElementById('preview-frame-wrapper');
  const frameLabel = document.getElementById('preview-frame-label');
  if (!frameWrapper || !frameLabel) return;

  if (frameStyle === 'classic') {
    frameWrapper.style.border = `4px solid ${frameColor}`;
    frameWrapper.style.borderBottom = '0';
    frameLabel.innerText = frameText;
    frameLabel.style.backgroundColor = frameColor;
    frameLabel.classList.remove('hidden');
  } else {
    frameWrapper.style.border = '1px solid var(--hairline)';
    frameLabel.classList.add('hidden');
  }
}

// Composite frames drawing compositor during download
async function downloadQR(format: 'png' | 'svg') {
  if (!qrCodeInstance) return;

  // Trigger save to local history first
  saveToHistory();

  const finalName = `qr-code-${activeType}`;

  // If no frame is selected, perform raw download
  if (frameStyle === 'none') {
    qrCodeInstance.download({ name: finalName, extension: format });
    return;
  }

  // Set high-resolution size multiplier for export
  const exportSize = qrSize;

  // Re-render QR Code at export resolution temporarily
  const tempInstance = new QRCodeStyling({
    width: exportSize,
    height: exportSize,
    type: 'svg',
    data: getPayload(),
    qrOptions: {
      errorCorrectionLevel: eccLevel
    },
    dotsOptions: qrCodeInstance.options.dotsOptions,
    backgroundOptions: qrCodeInstance.options.backgroundOptions,
    cornersSquareOptions: qrCodeInstance.options.cornersSquareOptions,
    cornersDotOptions: qrCodeInstance.options.cornersDotOptions,
    image: getLogoPath() || undefined,
    imageOptions: qrCodeInstance.options.imageOptions
  });

  if (format === 'png') {
    // composite on canvas
    const rawBlob = await tempInstance.getRawData('png');
    const img = new Image();
    img.onload = () => {
      const compositeCanvas = document.createElement('canvas');
      const frameHeight = Math.round(exportSize * 0.2); // Taller bottom frame based on size
      compositeCanvas.width = exportSize;
      compositeCanvas.height = exportSize + frameHeight;
      
      const ctx = compositeCanvas.getContext('2d');
      if (!ctx) return;

      // Fill background
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, exportSize, exportSize + frameHeight);

      // Draw QR
      ctx.drawImage(img, 0, 0, exportSize, exportSize);

      // Draw outer borders
      ctx.lineWidth = Math.round(exportSize * 0.02);
      ctx.strokeStyle = frameColor;
      ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, exportSize - ctx.lineWidth, exportSize + frameHeight - ctx.lineWidth);

      // Draw Bottom Solid Rect
      ctx.fillStyle = frameColor;
      ctx.fillRect(0, exportSize, exportSize, frameHeight);

      // Draw text
      ctx.fillStyle = '#ffffff'; // Always white text on colored frames
      ctx.font = `bold ${Math.round(exportSize * 0.05)}px Inter, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(frameText, exportSize / 2, exportSize + (frameHeight / 2));

      // Trigger file download
      const link = document.createElement('a');
      link.download = `${finalName}.png`;
      link.href = compositeCanvas.toDataURL('image/png');
      link.click();
    };
    img.src = URL.createObjectURL(rawBlob);
  } else {
    // SVG Serialization
    const rawBlob = await tempInstance.getRawData('svg');
    const text = await rawBlob.text();
    
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(text, 'image/svg+xml');
    const qrSvg = svgDoc.documentElement;

    const frameHeight = Math.round(exportSize * 0.2);
    const totalWidth = exportSize;
    const totalHeight = exportSize + frameHeight;

    const newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newSvg.setAttribute('width', totalWidth.toString());
    newSvg.setAttribute('height', totalHeight.toString());
    newSvg.setAttribute('viewBox', `0 0 ${totalWidth} ${totalHeight}`);

    // Background Rect
    const bgRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    bgRect.setAttribute('width', '100%');
    bgRect.setAttribute('height', '100%');
    bgRect.setAttribute('fill', bgColor);
    newSvg.appendChild(bgRect);

    // QR Contents Group
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.innerHTML = qrSvg.innerHTML;
    newSvg.appendChild(g);

    // Bottom Bar Rect
    const frameBar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    frameBar.setAttribute('y', exportSize.toString());
    frameBar.setAttribute('width', totalWidth.toString());
    frameBar.setAttribute('height', frameHeight.toString());
    frameBar.setAttribute('fill', frameColor);
    newSvg.appendChild(frameBar);

    // Outer border path
    const borderStrokeWidth = Math.round(exportSize * 0.02);
    const outerBorder = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    outerBorder.setAttribute('x', (borderStrokeWidth / 2).toString());
    outerBorder.setAttribute('y', (borderStrokeWidth / 2).toString());
    outerBorder.setAttribute('width', (totalWidth - borderStrokeWidth).toString());
    outerBorder.setAttribute('height', (totalHeight - borderStrokeWidth).toString());
    outerBorder.setAttribute('fill', 'none');
    outerBorder.setAttribute('stroke', frameColor);
    outerBorder.setAttribute('stroke-width', borderStrokeWidth.toString());
    newSvg.appendChild(outerBorder);

    // Text Element
    const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    svgText.setAttribute('x', (totalWidth / 2).toString());
    svgText.setAttribute('y', (exportSize + (frameHeight / 2)).toString());
    svgText.setAttribute('fill', '#ffffff');
    svgText.setAttribute('font-family', 'Inter, sans-serif');
    svgText.setAttribute('font-weight', 'bold');
    svgText.setAttribute('font-size', Math.round(exportSize * 0.05).toString());
    svgText.setAttribute('text-anchor', 'middle');
    svgText.setAttribute('dominant-baseline', 'middle');
    svgText.textContent = frameText;
    newSvg.appendChild(svgText);

    // Serialize and download
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(newSvg);
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    
    const link = document.createElement('a');
    link.download = `${finalName}.svg`;
    link.href = URL.createObjectURL(svgBlob);
    link.click();
  }
}

// --------------------------------------------------
// QR CODE SCANNING SUITE (jsQR)
// --------------------------------------------------
let scanCameraStream: MediaStream | null = null;
let scanCameraLoopId: number | null = null;

function setupScanner() {
  const toggleUpload = document.getElementById('scan-toggle-upload');
  const toggleCamera = document.getElementById('scan-toggle-camera');

  const uploadZone = document.getElementById('scan-upload-zone');
  const cameraZone = document.getElementById('scan-camera-zone');

  const fileInput = document.getElementById('scan-image-file') as HTMLInputElement;

  function switchScanMode(mode: 'upload' | 'camera') {
    [toggleUpload, toggleCamera].forEach(b => {
      b?.classList.remove('bg-canvas', 'text-ink', 'shadow-sm', 'font-semibold');
      b?.classList.add('text-body', 'font-medium');
    });

    if (mode === 'upload') {
      toggleUpload?.classList.remove('text-body', 'font-medium');
      toggleUpload?.classList.add('bg-canvas', 'text-ink', 'shadow-sm', 'font-semibold');
      uploadZone?.classList.remove('hidden');
      cameraZone?.classList.add('hidden');
      stopScannerCamera();
    } else {
      toggleCamera?.classList.remove('text-body', 'font-medium');
      toggleCamera?.classList.add('bg-canvas', 'text-ink', 'shadow-sm', 'font-semibold');
      uploadZone?.classList.add('hidden');
      cameraZone?.classList.remove('hidden');
    }
  }

  toggleUpload?.addEventListener('click', () => switchScanMode('upload'));
  toggleCamera?.addEventListener('click', () => switchScanMode('camera'));

  // Image Upload triggers
  uploadZone?.addEventListener('click', () => fileInput.click());
  uploadZone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('border-ink', 'bg-canvas-soft');
  });
  uploadZone?.addEventListener('dragleave', () => {
    uploadZone.classList.remove('border-ink', 'bg-canvas-soft');
  });
  uploadZone?.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('border-ink', 'bg-canvas-soft');
    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      decodeQRFile(files[0]);
    }
  });
  fileInput?.addEventListener('change', (e) => {
    const files = (e.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      decodeQRFile(files[0]);
    }
  });

  // Camera Start Stop buttons
  const btnStart = document.getElementById('btn-camera-start');
  const btnStop = document.getElementById('btn-camera-stop');

  btnStart?.addEventListener('click', () => startScannerCamera());
  btnStop?.addEventListener('click', () => stopScannerCamera());

  // Result Copy button
  const copyResultBtn = document.getElementById('scan-result-copy-btn');
  const resultInput = document.getElementById('scan-result-text') as HTMLInputElement;

  copyResultBtn?.addEventListener('click', () => {
    if (resultInput.value) {
      navigator.clipboard.writeText(resultInput.value);
      showToast(t.scanner.copyToast);
    }
  });
}

// Decode uploaded image
function decodeQRFile(file: File) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);

      const imgData = ctx.getImageData(0, 0, img.width, img.height);
      const code = jsQR(imgData.data, imgData.width, imgData.height);
      
      if (code) {
        showScanResult(code.data);
      } else {
        showToast('No QR code detected in image.', true);
      }
    };
    img.src = e.target?.result as string;
  };
  reader.readAsDataURL(file);
}

// Camera scan streaming loops
async function startScannerCamera() {
  const video = document.getElementById('scan-video') as HTMLVideoElement;
  const btnStart = document.getElementById('btn-camera-start');
  const btnStop = document.getElementById('btn-camera-stop');
  const viewfinder = document.getElementById('scanner-viewfinder');

  if (!video) return;

  try {
    scanCameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    video.srcObject = scanCameraStream;
    video.setAttribute('playsinline', 'true');
    video.play();
    
    btnStart?.classList.add('hidden');
    btnStop?.classList.remove('hidden');
    viewfinder?.classList.remove('hidden');

    // Boot frame loop
    scanCameraLoopId = requestAnimationFrame(scanCameraFrame);
  } catch (err) {
    console.error(err);
    showToast(t.scanner.noCamera, true);
  }
}

// Stop camera streaming
function stopScannerCamera() {
  const video = document.getElementById('scan-video') as HTMLVideoElement;
  const btnStart = document.getElementById('btn-camera-start');
  const btnStop = document.getElementById('btn-camera-stop');
  const viewfinder = document.getElementById('scanner-viewfinder');

  if (scanCameraLoopId) {
    cancelAnimationFrame(scanCameraLoopId);
    scanCameraLoopId = null;
  }

  if (scanCameraStream) {
    scanCameraStream.getTracks().forEach(track => track.stop());
    scanCameraStream = null;
  }

  if (video) video.srcObject = null;

  btnStart?.classList.remove('hidden');
  btnStop?.classList.add('hidden');
  viewfinder?.classList.add('hidden');
}

// Read frame of camera stream
function scanCameraFrame() {
  const video = document.getElementById('scan-video') as HTMLVideoElement;
  if (video && video.readyState === video.HAVE_ENOUGH_DATA) {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imgData.data, imgData.width, imgData.height);
      if (code) {
        // Success! Trigger haptic vibration & stop camera
        if (navigator.vibrate) navigator.vibrate(100);
        showScanResult(code.data);
        stopScannerCamera();
        return;
      }
    }
  }
  // Keep looping
  scanCameraLoopId = requestAnimationFrame(scanCameraFrame);
}

// Display scan result UI
function showScanResult(text: string) {
  const panel = document.getElementById('scan-result-panel');
  const input = document.getElementById('scan-result-text') as HTMLInputElement;
  if (panel && input) {
    input.value = text;
    panel.classList.remove('hidden');
    panel.scrollIntoView({ behavior: 'smooth' });
  }
}

// --------------------------------------------------
// BULK GENERATOR INTEGRATION (jszip)
// --------------------------------------------------
function setupBulkGenerator() {
  const generateBtn = document.getElementById('bulk-generate-btn') as HTMLButtonElement;
  const btnText = document.getElementById('bulk-btn-text');
  const bulkInput = document.getElementById('bulk-input-links') as HTMLTextAreaElement;

  generateBtn?.addEventListener('click', async () => {
    const textValue = bulkInput?.value || '';
    const lines = textValue.split('\n').map(l => l.trim()).filter(l => l.length > 0);

    if (lines.length === 0) {
      showToast('Please enter at least one link.', true);
      return;
    }

    try {
      generateBtn.disabled = true;
      if (btnText) btnText.innerText = t.bulk.progress;

      const zip = new JSZip();

      // Generate each item
      for (let i = 0; i < lines.length; i++) {
        const content = lines[i];
        
        // Re-instantiate a standalone styling manager
        // Use default options if qrCodeInstance not yet available
        const defaultDotsOptions = { color: fgColor, type: dotType };
        const defaultBackgroundOptions = { color: bgColor };
        const defaultCornersSquareOptions = { color: fgColor, type: eyeFrameType };
        const defaultCornersDotOptions = { color: fgColor, type: eyeBallType };
        
        const bulkItemQr = new QRCodeStyling({
          width: qrSize,
          height: qrSize,
          type: 'svg',
          data: content,
          qrOptions: {
            errorCorrectionLevel: eccLevel
          },
          dotsOptions: qrCodeInstance?.options?.dotsOptions || defaultDotsOptions,
          backgroundOptions: qrCodeInstance?.options?.backgroundOptions || defaultBackgroundOptions,
          cornersSquareOptions: qrCodeInstance?.options?.cornersSquareOptions || defaultCornersSquareOptions,
          cornersDotOptions: qrCodeInstance?.options?.cornersDotOptions || defaultCornersDotOptions,
          image: getLogoPath() || undefined,
          imageOptions: qrCodeInstance?.options?.imageOptions || { crossOrigin: 'anonymous', margin: 6, imageSize: 0.35 }
        });

        // Grab raw PNG blob
        const pngBlob = await bulkItemQr.getRawData('png');
        
        // Safe file index name
        const fileName = `qr_code_${i + 1}_${encodeURIComponent(content.substring(0, 15).replace(/[^\w]/g, '_'))}.png`;
        zip.file(fileName, pngBlob);
      }

      // Package and trigger download
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.download = `bulk-qr-codes.zip`;
      link.href = URL.createObjectURL(zipBlob);
      link.click();

      showToast(t.bulk.successToast);
    } catch (err) {
      console.error(err);
      showToast('An error occurred during ZIP creation.', true);
    } finally {
      generateBtn.disabled = false;
      if (btnText) btnText.innerText = t.bulk.generateBtn;
    }
  });
}

// Show Toast Popup
function showToast(text: string, isError = false) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.innerText = text;
  
  // Style check
  const dot = toast.querySelector('span');
  if (dot) {
    dot.className = `w-1.5 h-1.5 rounded-full ${isError ? 'bg-error' : 'bg-success'}`;
  }

  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3000);
}

// Local Storage History management
function saveToHistory() {
  try {
    const historyStr = localStorage.getItem('qr_history') || '[]';
    const history = JSON.parse(historyStr);
    
    const payload = getPayload();
    
    const existingIdx = history.findIndex((item: any) => item.data === payload && item.type === activeType);
    if (existingIdx !== -1) {
      history.splice(existingIdx, 1);
    }

    const newItem = {
      id: Date.now().toString(),
      data: payload,
      type: activeType,
      date: new Date().toLocaleDateString(currentLocale, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      config: {
        fgColor,
        bgColor,
        colorType,
        gradType,
        gradStart,
        gradEnd,
        gradAngle,
        frameStyle,
        frameText,
        frameColor,
        dotType,
        eyeFrameType,
        eyeBallType,
        eccLevel,
        logoPreset: activeLogoPreset,
        logoData: customLogoDataUrl
      }
    };

    history.unshift(newItem);
    localStorage.setItem('qr_history', JSON.stringify(history.slice(0, 12)));
    renderHistory();
  } catch (e) {
    console.error('History save error', e);
  }
}

function renderHistory() {
  const container = document.getElementById('history-container');
  const emptyState = document.getElementById('history-empty');
  if (!container) return;

  const historyCards = container.querySelectorAll('.history-card');
  historyCards.forEach(c => c.remove());

  const historyStr = localStorage.getItem('qr_history') || '[]';
  const history = JSON.parse(historyStr);

  if (history.length === 0) {
    emptyState?.classList.remove('hidden');
    return;
  }

  emptyState?.classList.add('hidden');

  history.forEach((item: any) => {
    const card = document.createElement('div');
    card.className = 'history-card bg-canvas border border-hairline rounded-lg shadow-sm p-4 flex gap-4 items-center group hover:border-hairline-strong transition-all duration-200';
    card.innerHTML = `
      <div class="w-16 h-16 rounded border border-hairline-strong/10 p-1 bg-white flex items-center justify-center shrink-0">
        <div class="history-qr-thumb w-full h-full" id="thumb-${item.id}"></div>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-1.5">
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-canvas-soft border border-hairline text-body uppercase tracking-wider scale-95">${t.types[item.type as keyof typeof t.types] || item.type}</span>
          <span class="text-[10px] text-mute">${item.date}</span>
        </div>
        <p class="text-xs text-body truncate mt-1 w-full font-mono">${item.data}</p>
        <div class="flex items-center gap-4 mt-2">
          <button class="history-edit-btn text-xs font-semibold text-link hover:text-link-deep cursor-pointer" data-id="${item.id}">${t.actions.historyRecall}</button>
          <button class="history-del-btn text-xs font-semibold text-error/80 hover:text-error cursor-pointer" data-id="${item.id}">${t.actions.historyDelete}</button>
        </div>
      </div>
    `;

    container.appendChild(card);

    // Render miniature QR thumbnail
    setTimeout(() => {
      try {
        let dotColorParam: any = {};
        if (item.config.colorType === 'gradient') {
          const angleRad = ((item.config.gradAngle || 0) * Math.PI) / 180;
          dotColorParam = {
            gradient: {
              type: item.config.gradType || 'linear',
              rotation: angleRad,
              colorStops: [
                { offset: 0, color: item.config.gradStart || '#7928ca' },
                { offset: 1, color: item.config.gradEnd || '#ff0080' }
              ]
            }
          };
        } else {
          dotColorParam = {
            color: item.config.fgColor || '#171717'
          };
        }

        const miniQr = new QRCodeStyling({
          width: 56,
          height: 56,
          type: 'svg',
          data: item.data,
          qrOptions: {
            errorCorrectionLevel: item.config.eccLevel || 'H'
          },
          dotsOptions: {
            ...dotColorParam,
            type: (item.config.dotType || 'square') as any
          },
          backgroundOptions: {
            color: item.config.bgColor || '#ffffff'
          },
          cornersSquareOptions: {
            color: item.config.colorType === 'gradient' ? (item.config.gradStart || '#7928ca') : (item.config.fgColor || '#171717'),
            type: (item.config.eyeFrameType || 'square') as any
          },
          cornersDotOptions: {
            color: item.config.colorType === 'gradient' ? (item.config.gradEnd || '#ff0080') : (item.config.fgColor || '#171717'),
            type: (item.config.eyeBallType || 'square') as any
          },
          image: item.config.logoData || (item.config.logoPreset ? (
            item.config.logoPreset === 'google' ? 'https://www.google.com/favicon.ico' :
            item.config.logoPreset === 'github' ? 'https://github.com/favicon.ico' :
            item.config.logoPreset === 'linkedin' ? 'https://www.linkedin.com/favicon.ico' : undefined
          ) : undefined),
          imageOptions: {
            crossOrigin: 'anonymous',
            margin: 1,
            imageSize: 0.35
          }
        });
        const thumbEl = document.getElementById(`thumb-${item.id}`);
        if (thumbEl) {
          miniQr.append(thumbEl);
        }
      } catch (err) {
        console.error(err);
      }
    }, 50);
  });

  // Bind recall trigger
  const editBtns = container.querySelectorAll('.history-edit-btn');
  editBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = history.find((h: any) => h.id === id);
      if (item) {
        recallQRItem(item);
      }
    });
  });

  // Bind delete trigger
  const delBtns = container.querySelectorAll('.history-del-btn');
  delBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const newHistory = history.filter((h: any) => h.id !== id);
      localStorage.setItem('qr_history', JSON.stringify(newHistory));
      renderHistory();
      showToast('Item removed from history');
    });
  });
}

// Restore configuration from historical snapshot
function recallQRItem(item: any) {
  const tabBtnGen = document.getElementById('tab-btn-generate');
  const viewGen = document.getElementById('view-generate');
  if (tabBtnGen && viewGen) {
    tabBtnGen.click(); // Switch to generator view if scanner/bulk is open
  }

  const tabBtn = document.querySelector(`.qr-type-tab[data-type="${item.type}"]`) as HTMLButtonElement;
  if (tabBtn) {
    tabBtn.click();
  }

  setTimeout(() => {
    switch (item.type) {
      case 'url':
        const urlInput = document.getElementById('input-url') as HTMLInputElement;
        if (urlInput) urlInput.value = item.data;
        break;
      case 'text':
        const textInput = document.getElementById('input-text') as HTMLTextAreaElement;
        if (textInput) textInput.value = item.data;
        break;
      case 'wifi':
        const matchWifi = item.data.match(/WIFI:S:(.*?);T:(.*?);P:(.*?);;/);
        if (matchWifi) {
          const ssidEl = document.getElementById('wifi-ssid') as HTMLInputElement;
          const passEl = document.getElementById('wifi-password') as HTMLInputElement;
          const encEl = document.getElementById('wifi-encryption') as HTMLSelectElement;
          if (ssidEl) ssidEl.value = matchWifi[1];
          if (encEl) encEl.value = matchWifi[2];
          if (passEl) passEl.value = matchWifi[3];
        }
        break;
      case 'contact':
        const matchName = item.data.match(/FN:(.*?)\n/);
        const matchPhone = item.data.match(/TEL;TYPE=CELL:(.*?)\n/);
        const matchEmail = item.data.match(/EMAIL;TYPE=PREF,INTERNET:(.*?)\n/);
        const matchOrg = item.data.match(/ORG:(.*?)\n/);
        const matchAdr = item.data.match(/ADR;TYPE=WORK:;;(.*?);;;;\n/);
        
        if (matchName) (document.getElementById('contact-name') as HTMLInputElement).value = matchName[1];
        if (matchPhone) (document.getElementById('contact-phone') as HTMLInputElement).value = matchPhone[1];
        if (matchEmail) (document.getElementById('contact-email') as HTMLInputElement).value = matchEmail[1];
        if (matchOrg) (document.getElementById('contact-company') as HTMLInputElement).value = matchOrg[1];
        if (matchAdr) (document.getElementById('contact-address') as HTMLInputElement).value = matchAdr[1];
        break;
      case 'whatsapp':
        const matchWa = item.data.match(/https:\/\/wa\.me\/(.*?)\?text=(.*)/);
        if (matchWa) {
          const phEl = document.getElementById('whatsapp-phone') as HTMLInputElement;
          const msgEl = document.getElementById('whatsapp-message') as HTMLTextAreaElement;
          if (phEl) phEl.value = '+' + matchWa[1];
          if (msgEl) msgEl.value = decodeURIComponent(matchWa[2]);
        }
        break;
      case 'email':
        const matchMail = item.data.match(/mailto:(.*?)\?subject=(.*?)&body=(.*)/);
        if (matchMail) {
          const toEl = document.getElementById('email-to') as HTMLInputElement;
          const subEl = document.getElementById('email-subject') as HTMLInputElement;
          const bodyEl = document.getElementById('email-body') as HTMLTextAreaElement;
          if (toEl) toEl.value = matchMail[1];
          if (subEl) subEl.value = decodeURIComponent(matchMail[2]);
          if (bodyEl) bodyEl.value = decodeURIComponent(matchMail[3]);
        }
        break;
      case 'phone':
        const pEl = document.getElementById('phone-number') as HTMLInputElement;
        if (pEl) pEl.value = item.data.replace('tel:', '');
        break;
      case 'crypto':
        const matchCrypto = item.data.match(/(.*?):(.*?)(?:\?amount=(.*))?$/);
        if (matchCrypto) {
          const typeEl = document.getElementById('crypto-type') as HTMLSelectElement;
          const addrEl = document.getElementById('crypto-address') as HTMLInputElement;
          const amtEl = document.getElementById('crypto-amount') as HTMLInputElement;
          if (typeEl) typeEl.value = matchCrypto[1];
          if (addrEl) addrEl.value = matchCrypto[2];
          if (amtEl) amtEl.value = matchCrypto[3] || '';
        }
        break;
      case 'social':
        const socialInput = document.getElementById('social-username') as HTMLInputElement;
        const socialPlatform = document.getElementById('social-platform') as HTMLSelectElement;
        const sData = item.data;
        if (socialInput) socialInput.value = sData;
        if (socialPlatform) {
          if (sData.includes('instagram.com/')) {
            socialPlatform.value = 'instagram';
            socialInput.value = sData.split('instagram.com/')[1] || '';
          } else if (sData.includes('facebook.com/')) {
            socialPlatform.value = 'facebook';
            socialInput.value = sData.split('facebook.com/')[1] || '';
          } else if (sData.includes('youtube.com/@')) {
            socialPlatform.value = 'youtube';
            socialInput.value = sData.split('youtube.com/@')[1] || '';
          } else if (sData.includes('tiktok.com/@')) {
            socialPlatform.value = 'tiktok';
            socialInput.value = sData.split('tiktok.com/@')[1] || '';
          } else if (sData.includes('linkedin.com/in/')) {
            socialPlatform.value = 'linkedin';
            socialInput.value = sData.split('linkedin.com/in/')[1] || '';
          } else if (sData.includes('x.com/')) {
            socialPlatform.value = 'twitter';
            socialInput.value = sData.split('x.com/')[1] || '';
          } else {
            socialPlatform.value = 'custom';
          }
        }
        break;
      case 'feedback':
        const fbUrlInput = document.getElementById('feedback-url') as HTMLInputElement;
        const fbPlatformSelect = document.getElementById('feedback-platform') as HTMLSelectElement;
        const fbData = item.data;
        
        if (fbUrlInput) fbUrlInput.value = fbData;
        if (fbPlatformSelect) {
          if (fbData.includes('search.google.com/local/writereview')) {
            fbPlatformSelect.value = 'google';
            const matchGoogle = fbData.match(/placeid=(.*)/);
            if (matchGoogle && fbUrlInput) fbUrlInput.value = matchGoogle[1];
          } else if (fbData.includes('yelp.com/writeareview/biz/')) {
            fbPlatformSelect.value = 'yelp';
            const matchYelp = fbData.match(/yelp\.com\/writeareview\/biz\/(.*)/);
            if (matchYelp && fbUrlInput) fbUrlInput.value = matchYelp[1];
          } else if (fbData.includes('trustpilot.com/evaluate/')) {
            fbPlatformSelect.value = 'trustpilot';
            const matchTrustpilot = fbData.match(/trustpilot\.com\/evaluate\/(.*)/);
            if (matchTrustpilot && fbUrlInput) fbUrlInput.value = matchTrustpilot[1];
          } else {
            fbPlatformSelect.value = 'custom';
          }
        }
        break;
    }

    // Restore layout styling configurations
    fgColor = item.config.fgColor || '#171717';
    bgColor = item.config.bgColor || '#ffffff';
    colorType = item.config.colorType || 'solid';
    gradType = item.config.gradType || 'linear';
    gradStart = item.config.gradStart || '#7928ca';
    gradEnd = item.config.gradEnd || '#ff0080';
    gradAngle = item.config.gradAngle || 0;
    frameStyle = item.config.frameStyle || 'none';
    frameText = item.config.frameText || 'SCAN ME';
    frameColor = item.config.frameColor || '#171717';

    dotType = item.config.dotType || 'square';
    eyeFrameType = item.config.eyeFrameType || 'square';
    eyeBallType = item.config.eyeBallType || 'square';
    eccLevel = item.config.eccLevel || 'H';
    activeLogoPreset = item.config.logoPreset || null;
    customLogoDataUrl = item.config.logoData || null;

    // Update forms values
    isCustomColors = true;
    (document.getElementById('fg-color') as HTMLInputElement).value = fgColor;
    (document.getElementById('fg-color-hex') as HTMLInputElement).value = fgColor;
    (document.getElementById('bg-color') as HTMLInputElement).value = bgColor;
    (document.getElementById('bg-color-hex') as HTMLInputElement).value = bgColor;
    (document.getElementById('body-style') as HTMLSelectElement).value = dotType;
    (document.getElementById('eye-border-style') as HTMLSelectElement).value = eyeFrameType;
    (document.getElementById('eye-center-style') as HTMLSelectElement).value = eyeBallType;
    (document.getElementById('ecc-level') as HTMLSelectElement).value = eccLevel;

    // Restore gradient values
    const colorTypeSelect = document.getElementById('color-type-select') as HTMLSelectElement;
    if (colorTypeSelect) colorTypeSelect.value = colorType;

    const solidColorCtrls = document.getElementById('solid-color-controls');
    const gradColorCtrls = document.getElementById('gradient-color-controls');
    const presetsContainer = document.getElementById('presets-container');

    if (colorType === 'gradient') {
      solidColorCtrls?.classList.add('hidden');
      presetsContainer?.classList.add('hidden');
      gradColorCtrls?.classList.remove('hidden');
    } else {
      solidColorCtrls?.classList.remove('hidden');
      presetsContainer?.classList.remove('hidden');
      gradColorCtrls?.classList.add('hidden');
    }

    (document.getElementById('grad-color-start') as HTMLInputElement).value = gradStart;
    (document.getElementById('grad-color-end') as HTMLInputElement).value = gradEnd;
    (document.getElementById('grad-type-select') as HTMLSelectElement).value = gradType;
    (document.getElementById('grad-angle') as HTMLInputElement).value = gradAngle.toString();
    const gradAngleVal = document.getElementById('grad-angle-val');
    if (gradAngleVal) gradAngleVal.innerText = `${gradAngle}°`;

    // Restore frame values
    const frameStyleSelect = document.getElementById('frame-style-select') as HTMLSelectElement;
    if (frameStyleSelect) frameStyleSelect.value = frameStyle;
    
    const frameCustomCtrls = document.getElementById('frame-custom-controls');
    if (frameStyle === 'none') {
      frameCustomCtrls?.classList.add('hidden');
    } else {
      frameCustomCtrls?.classList.remove('hidden');
    }
    (document.getElementById('frame-text-input') as HTMLInputElement).value = frameText;
    (document.getElementById('frame-color-picker') as HTMLInputElement).value = frameColor;
    isCustomFrameColor = true;

    // Reset preset logos
    const logoPresets = document.querySelectorAll('.preset-logo');
    logoPresets.forEach(b => {
      if (b.getAttribute('data-preset') === activeLogoPreset) {
        b.classList.add('border-ink', 'bg-canvas-soft-2');
      } else {
        b.classList.remove('border-ink', 'bg-canvas-soft-2');
      }
    });

    updateQRCode();
    updateFrameUI();
    showToast('Configuration recalled!');
    window.scrollTo({ top: document.getElementById('generator')?.offsetTop, behavior: 'smooth' });
  }, 100);
}

// Collapsible Accordion logic helper
function setupAccordions(headerSelector: string, contentSelector: string) {
  const headers = document.querySelectorAll(headerSelector);
  headers.forEach(header => {
    if (header.getAttribute('data-accordion-bound') === 'true') return;
    header.setAttribute('data-accordion-bound', 'true');

    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item?.querySelector(contentSelector);
      const icon = header.querySelector('svg');

      if (content) {
        const isHidden = content.classList.contains('hidden');
        
        if (isHidden) {
          content.classList.remove('hidden');
          icon?.classList.add('rotate-180');
        } else {
          content.classList.add('hidden');
          icon?.classList.remove('rotate-180');
        }
      }
    });
  });
}
