// Client Side script
import QRCodeStyling from 'qr-code-styling';
import JSZip from 'jszip';
import jsQR from 'jsqr';
import { translations } from '../../i18n/translations';
import { getUiStrings } from '../../i18n/uiStrings';

// State Management
let currentLocale = document.documentElement.lang || 'en';
let t = translations[currentLocale] || translations.en;
let ui = getUiStrings(currentLocale);

// Dynamic Industry overrides configuration
const configEl = document.getElementById('main-page-config');
const landingData = configEl?.getAttribute('data-landing-data')
  ? JSON.parse(configEl.getAttribute('data-landing-data'))
  : null;

// Pre-configured type setup from Astro props
const tabsContainer = document.querySelector('.qr-type-tab[data-type]') as HTMLButtonElement;
let activeType = 'url';

const activeTabEl = document.querySelector('.qr-type-tab.text-white') as HTMLButtonElement;
if (activeTabEl) {
  activeType = activeTabEl.getAttribute('data-type') || 'url';
}

let qrCodeInstance: any = null;

// Customization State
let fgColor = '#171717';
let bgColor = '#ffffff';
let activeLogoPreset: string | null = null;
let customLogoDataUrl: string | null = null;
let activeLogoFrame = 'none'; // 'none', 'circle', 'square', 'glass'
let logoFrameColor = '#ffffff';
let logoSize = 0.33;
let logoHasShadow = true;
let processedLogoDataUrl: string | null = null;

// Gradients State
let colorType = 'solid'; // 'solid' or 'gradient'
let gradType = 'linear';
let gradStart = '#7928ca';
let gradEnd = '#ff0080';
let gradAngle = 0;

// Frames State
let frameStyle = 'none'; // 'none' or 'classic'
let frameText = 'SCAN ME';
let frameTopText = 'SCAN CODE';
let frameColor = '#171717';
let isCustomFrameColor = false;

let dotType = 'rounded';
let eyeFrameType = 'extra-rounded';
let eyeBallType = 'rounded';
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

function setupVisualButtonSelectors() {
  const syncSelectWithButtons = (selectId: string, btnGroupId: string) => {
    const selectEl = document.getElementById(selectId) as HTMLSelectElement;
    const btnGroup = document.getElementById(btnGroupId);
    if (!selectEl || !btnGroup) return;

    const buttons = btnGroup.querySelectorAll('button');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-value');
        if (val) {
          selectEl.value = val;
          selectEl.dispatchEvent(new Event('change'));
        }
      });
    });

    const updateActiveButton = () => {
      buttons.forEach(b => {
        if (b.getAttribute('data-value') === selectEl.value) {
          b.classList.add('active', 'border-ink', 'bg-canvas-soft-2');
        } else {
          b.classList.remove('active', 'border-ink', 'bg-canvas-soft-2');
        }
      });
    };

    updateActiveButton();
    selectEl.addEventListener('change', updateActiveButton);
  };

  syncSelectWithButtons('body-style', 'body-style-buttons');
  syncSelectWithButtons('eye-border-style', 'eye-border-style-buttons');
  syncSelectWithButtons('eye-center-style', 'eye-center-style-buttons');
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
      const ind = b?.querySelector('.tab-indicator');
      if (ind) ind.classList.add('opacity-0');
    });
    activeBtn.classList.remove('text-body', 'font-medium');
    activeBtn.classList.add('bg-canvas', 'text-ink', 'shadow-sm', 'font-semibold');
    const activeInd = activeBtn.querySelector('.tab-indicator');
    if (activeInd) activeInd.classList.remove('opacity-0');

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
      tabs.forEach(t => t.classList.remove('bg-gradient-to-r', 'from-[#ff1b6b]', 'to-[#eca0ff]', 'text-white', 'font-semibold', 'shadow-md', 'border-transparent'));
      tabs.forEach(t => t.classList.add('text-body', 'hover:bg-canvas-soft-2', 'transition-all'));
      
      tab.classList.remove('text-body', 'hover:bg-canvas-soft-2', 'transition-all');
      tab.classList.add('bg-gradient-to-r', 'from-[#ff1b6b]', 'to-[#eca0ff]', 'text-white', 'font-semibold', 'shadow-md', 'border-transparent');

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
      const type = btn.getAttribute('data-type') || 'solid';
      isCustomColors = true;

      if (type === 'gradient') {
        const gradStartVal = btn.getAttribute('data-grad-start') || '#ff1b6b';
        const gradEndVal = btn.getAttribute('data-grad-end') || '#eca0ff';

        gradStart = gradStartVal;
        gradEnd = gradEndVal;

        if (colorTypeSelect) {
          colorTypeSelect.value = 'gradient';
          const event = new Event('change');
          colorTypeSelect.dispatchEvent(event);
        }

        if (gradColorStartInput) gradColorStartInput.value = gradStart;
        if (gradColorEndInput) gradColorEndInput.value = gradEnd;
      } else {
        fgColor = btn.getAttribute('data-fg') || '#171717';
        bgColor = btn.getAttribute('data-bg') || '#ffffff';
        
        if (colorTypeSelect) {
          colorTypeSelect.value = 'solid';
          const event = new Event('change');
          colorTypeSelect.dispatchEvent(event);
        }

        if (fgInput) fgInput.value = fgColor;
        if (fgHex) fgHex.value = fgColor;
        if (bgInput) bgInput.value = bgColor;
        if (bgHex) bgHex.value = bgColor;
      }

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
  const frameTopTextInput = document.getElementById('frame-top-text-input') as HTMLInputElement;
  const frameTopTextContainer = document.getElementById('frame-top-text-container');
  const frameColorPicker = document.getElementById('frame-color-picker') as HTMLInputElement;
  const syncFrameColorBtn = document.getElementById('sync-frame-color');

  frameStyleSelect?.addEventListener('change', (e) => {
    frameStyle = (e.target as HTMLSelectElement).value;
    if (frameStyle === 'none') {
      frameCustomCtrls?.classList.add('hidden');
    } else {
      frameCustomCtrls?.classList.remove('hidden');
    }
    
    // Toggle top text input visibility
    if (frameStyle === 'top-bottom') {
      frameTopTextContainer?.classList.remove('hidden');
    } else {
      frameTopTextContainer?.classList.add('hidden');
    }
    
    updateFrameUI();
  });

  frameTextInput?.addEventListener('input', (e) => {
    frameText = (e.target as HTMLInputElement).value;
    updateFrameUI();
  });

  frameTopTextInput?.addEventListener('input', (e) => {
    frameTopText = (e.target as HTMLInputElement).value;
    updateFrameUI();
  });

  frameColorPicker?.addEventListener('input', (e) => {
    frameColor = (e.target as HTMLInputElement).value;
    isCustomFrameColor = true;
    updateFrameUI();
  });

  // visual selectors binding
  setupVisualButtonSelectors();

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

  // Platform switcher interactions for social media
  document.getElementById('social-platform')?.addEventListener('change', (e) => {
    if (activeType === 'social') {
      // Only auto-apply logo if a preset logo was already active
      if (activeLogoPreset !== null) {
        autoApplyPresetLogo('social');
      }
      updateQRCode();
    }
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

    // 2. Auto-apply branded logo preset ONLY if a preset logo was already active
    if (activeLogoPreset !== null) {
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
      const preset = btn.getAttribute('data-preset');
      if (activeLogoPreset === preset) {
        // Toggle off if clicking the currently active preset logo
        btn.classList.remove('border-ink', 'bg-canvas-soft-2');
        activeLogoPreset = null;
      } else {
        logoPresets.forEach(b => b.classList.remove('border-ink', 'bg-canvas-soft-2'));
        btn.classList.add('border-ink', 'bg-canvas-soft-2');
        activeLogoPreset = preset;
        customLogoDataUrl = null; // Override custom
      }
      updateQRCode();
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

  // Logo Frame Clickers
  const frameBtns = document.querySelectorAll('.logo-frame-btn');
  frameBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      frameBtns.forEach(b => b.classList.remove('border-ink', 'bg-canvas-soft-2'));
      btn.classList.add('border-ink', 'bg-canvas-soft-2');
      activeLogoFrame = btn.getAttribute('data-frame') || 'none';
      updateQRCode();
    });
  });

  // Logo Frame Color Picker
  const logoFrameColorPicker = document.getElementById('logo-frame-color') as HTMLInputElement;
  const logoFrameColorHex = document.getElementById('logo-frame-color-hex');
  logoFrameColorPicker?.addEventListener('input', (e) => {
    logoFrameColor = (e.target as HTMLInputElement).value;
    if (logoFrameColorHex) logoFrameColorHex.textContent = logoFrameColor.toUpperCase();
    updateQRCode();
  });

  // Logo Size Select
  const logoSizeSelect = document.getElementById('logo-size-select') as HTMLSelectElement;
  logoSizeSelect?.addEventListener('change', () => {
    logoSize = parseFloat(logoSizeSelect.value) || 0.33;
    updateQRCode();
  });

  // Logo Shadow Toggle
  const logoShadowToggle = document.getElementById('logo-shadow-toggle') as HTMLInputElement;
  logoShadowToggle?.addEventListener('change', () => {
    logoHasShadow = logoShadowToggle.checked;
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
      imageSize: logoSize
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

  // autoApplyPresetLogo(activeType); // Don't auto-apply preset logo by default
  applyIndustryOverrides(activeType);
  updatePreviewTypeBadge();
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

// Dynamic preview badge update
function updatePreviewTypeBadge() {
  const previewTypeBadge = document.getElementById('preview-type-badge');
  if (previewTypeBadge) {
    previewTypeBadge.textContent = t.types[activeType as keyof typeof t.types] || activeType;
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

  // autoApplyPresetLogo(type); // Don't auto-apply preset logo by default when switching generator tabs
  applyIndustryOverrides(type);
  updatePreviewTypeBadge();
  updateQRCode();
}

// File handler
function handleLogoFile(file: File) {
  if (file.size > 1024 * 1024) {
    showToast(ui.generator.logoTooLarge, true);
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
    showToast(ui.generator.logoLoaded);
  };
  reader.readAsDataURL(file);
}

// Preset SVG logo data URIs (high-resolution vectors)
const SVG_LOGOS: Record<string, string> = {
  link: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE3MTcxNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEzLjE5IDguNjRhNC41IDQuNSAwIDAxMS4yNDIgNy4yNDRsLTQuNSA0LjVhNC41IDQuNSAwIDAxLTYuMzY0LTYuMzY0bDEuNzU3LTEuNzU3bTEzLjM1LS42MjJsMS43NTctMS43NTdhNC41IDQuNSAwIDAwLTYuMzY0LTYuMzY0bC00LjUgNC41YTQuNSA0LjUgMCAwMDEuMjQyIDcuMjQ0IiAvPjwvc3ZnPg==',
  wifi: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE3MTcxNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMjBoLjAxIiAvPjxwYXRoIGQ9Ik04LjUgMTYuOWE1IDUgMCAwIDEgNyAwIiAvPjxwYXRoIGQ9Ik01IDEyLjg2YTEwIDEwIDAgMCAxIDE0IDAiIC8+PHBhdGggZD0iTTIgOC44MmExNSAxNSAwIDAgMSAyMCAwIiAvPjwvc3ZnPg==',
  vcard: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTcxNzE3IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTkgMjF2LTJhNCA0IDAgMCAwLTQtNEg5YTQgNCAwIDAgMC00IDR2MiIgLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiIC8+PC9zdmc+',
  whatsapp: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzI1RDM2NiIgZD0iTTEyLjAxNCAwQzUuMzc2IDAgMCA1LjM3NiAwIDEyLjAxNGMwIDIuMTM4LjU1OCA0LjIyMyAxLjYwNiA2LjA0NUwyIDIzLjQ4OWw1LjY3LTEuNjg1YTEyLjAzNCAxMi4wMzQgMCAwMCA2LjM0NCAxLjgxMmguMDA4YzYuNjM4IDAgMTIuMDE0LTUuMzc2IDEyLjAxNC0xMi4wMTRTMjAuNjUyIDAgMTIuMDE0IDB6bTcuMDIgMTYuOTY0Yy0uMjg3Ljc4Ni0xLjY2MyAxLjQ3Ny0yLjI4MyAxLjU4NS0uNTY1LjEwNS0xLjI4NC4xNDgtMi4wNjItLjE2N2ExMC4wNDggMTAuMDQ4IDAgMDEtNC42ODEtMi43NTIgMTAuNDY2IDEwLjQ2NiAwIDAxLTIuOTIxLTQuNzg1Yy0uMzMtLjcyNC0uMjEtMS4xMTMuMzEyLTEuNjE5LjMyMS0uMzEyLjcxNC0uNTEzLDEuMDYyLS44NzRzLjM3NS0uNTgyLjU2MS0uOTg4LjA4OS0uNzgxLS4xMzItMS4xMTctLjIyMy0uMzMyLS45NzEtMS42ODMtLjY0My0uNjA3LTEuMzc2LS41NzItMS4zNzYuMDU0LTEuMzc2LjE5NmMuMzQzLjQ4Ny41MzUgMS4wNDIuNzQ5IDEuMzM1LjU3MS44MzMgMS4yOTcgMS41MzMgMS45NTIgMi4xMTEuODg1Ljc4OCAxLjc3MyAxLjQxIDIuODMzIDEuOTAzLjU0Ny4yNDkgMS4wNTQuNDAzIDEuNDg1LjUxNC41MjIuMTQxIDEuMTk2LjExNyAxLjY0My0uMDc0LjU0NS0uMjM1LjgzNS0uNTg0IDEuMTUtMS4wNDguMzEzLS40NjUuNTM5LS44MzYuNjQ2LTEuMDgxLjEwNi0uMjQ4LjM0Ny0uMzU0LjY5Ni0uNTE4LjM0OC0uMTY0IDEuNDg4LS43NDIgMS43MTYtLjg0OC4yMjgtLjEwNS4zOTYtLjE1OS41NzQtLjE1OS4xNzggMCAuNjE4LjA0My45OTMuMjEuMzc2LjE2OC42MjQuNDg4LjcwNS44MTguMDgxLjMzLjA1Ni42NzMtLjEwMSAxLjAwNnptMCAwIi8+PC9zdmc+',
  email: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTcxNzE3IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHg9IjIiIHk9IjQiIHJ4PSIyIiAvPjxwYXRoIGQ9Im0yMiA3LTguOTcgNS43YTEuOTQgMS45NCAwIDAgMS0yLjA2IDBMMiA3IiAvPjwvc3ZnPg==',
  phone: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTcxNzE3IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjIgMTYuOTJ2M2EyIDIgMCAwIDEtMi4xOCAyIDE5Ljc5IDE5Ljc5IDAgMCAxLTguNjMtMy4wNyAxOS41IDE5LjUgMCAwIDEtNi02IDE5Ljc5IDE5Ljc5IDAgMCAxLTMuMDctOC42N0EyIDIgMCAwIDEgNC4xMSAyaDNhMiAyIDAgMCAxIDIgMS43MiAxMi44NCAxMi44NCAwIDAgMCAuNyAyLjgxIDIgMiAwIDAgMS0uNDUgMi4xMUw4LjA5IDkuOTFhMTYgMTYgMCAwIDAgNiA2bDEuMjctMS4yN2EyIDIgMCAwIDEgMi4xMS0uNDUgMTIuODQgMTIuODQgMCAwIDAgMi44MS43QTIgMiAwIDAgMSAyMiAxNi45MnptMCAwIi8+PC9zdmc+',
  crypto: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE3MTcxNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjEgMTJWN0g1YTIgMiAwIDAgMSAwLTRoMTR2NCIgLz48cGF0aCBkPSJNMyA1djE0YTIgMiAwIDAgMCAyIDJoMTZ2LTUiIC8+PHBhdGggZD0iTTE4IDEyYTIgMiAwIDAgMCAwIDRoNHYtNFoiIC8+PC9zdmc+',
  instagram: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNFMTMwNkMiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDIuMTYzYzMuMjA0IDAgMy41ODQuMDEyIDQuODUuMDcgMy4yNTIuMTQ4IDQuNzcxIDEuNjkxIDQuOTE5IDQuOTE5LjA1OCAxLjI2NS5wYXRoIGQ9Ik01LjgzOCAxMi4zMjRhNi4xNjIgNi4xNjIgMCAxMDAtMTIuMzI0IDYuMTYyIDYuMTYyIDAwMDAtMTIuMzI0ek0xMiAxNmE0IDQgMCAxMTAtOCA0IDQgMCAwMTAgOHptNi40MDYtMTEuODQ1YTEuNDQgMS40NCAwIDEwMCAyLjg4MSAxLjQ0IDEuNDQgMCAwMDAtMi44ODF6IiAvPjwvc3ZnPg==',
  facebook: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMxODc3RjIiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTI0IDEyLjA3M2MwLTYuNjI3LTUuMzczLTEyLTEyLTEycy0xMiA1LjM3My0xMiAxMmMwIDUuOTkgNC4zODggMTAuOTU0IDEwLjEyNSAxMS44NTR2LTguMzg1SDcuMDc4di0zLjQ3aDMuMDQ3VjkuNDNjMC0zLjAwNyAxLjc5Mi00LjY2OSA0LjUzMy00LjY2OSAxLjMxMiAwIDIuNjg2LjIzNSAyLjY4Ni4yMzV2Mi45NTNIMTUuODNjLTEuNDkxIDAtMS45NTYuOTI1LTEuOTU2IDEuODc0djIuMjVoMy4zMjhsLS41MzIgMy40N2gtMi43OTZ2OC4zODVDMTkuNjEyIDIzLjAyNyAyNCAxOC4wNjIgMjQgMTIuMDczeiIgLz48L3N2Zz4=',
  youtube: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNGRjAwMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIzLjQ5OCA2LjE2M2EzLjAwMyAzLjAwMyAwIDAwLTIuMTEtMi4xMUMxOS41MTcgMy41NDUgMTIgMy41NDUgMTIgMy41NDVzLTcuNTE3IDAtOS4zODguNTA4YTMuMDAzIDMuMDAzIDAgMDAtMi4xMSAyLjExQzAgOC4wMzMgMCAxMiAwIDEyczAgMy45NjcuNTAyIDUuODM3YTMuMDAzIDMuMDAzIDAgMDAyLjExIDIuMTFjMS44NzEuNTA4IDkuMzg4LjUwOCA5LjM4OC41MDhzNy41MTcgMCA5LjM4OC0uNTA4YTMuMDAzIDMuMDAzIDAgMDAyLjExLTIuMTFDMjQgMTUuOTY3IDI0IDEyIDI0IDEyczAgMy45NjctLjUwMi01LjgzN3pNOS41NDUgMTUuNTY4VjguNDMyTDE1LjgxOCAxMmwtNi4yNzMgMy41Njh6IiAvPjwvc3ZnPg==',
  twitter: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMxNzE3MTciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE4LjI0NCAyLjI1aDMuMzA4bC03LjIyNyA4LjI2IDguNTAyIDExLjI0SDE2LjE3bC01LjIxNC02LjgxN0w0Ljk5IDIxLjc1SDEuNjhsNy43My04LjgzNUwxLjI1NCAyLjI1SDguMDhsNC43MTMgNi4yMzF6bS0xLjE2MSAxNy41MmgxLjgzM0w3LjA4NCA0LjEyNkg1LjExN3oiIC8+PC9zdmc+',
  linkedin: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMwQTY2QzIiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIwLjQ0NyAyMC40NTJyLTMuNTU0di01LjU2OWMwLTEuMzI4LS4wMjctMy4wMzctMS44NTItMy4wMzctMS44NTMgMC0yLjEzNiAxLjQ0NS0yLjEzNiAyLjkzOXY1LjY2N0g5LjM1MVY5aDMuMDQ2di4wNDZjLjQ3Ny0uOSAxLjYzNy0xLjg1IDMuMzctMS44NSAzLjYwMSAwIDQuMjY3IDIuMzcgNC4yNjcgNS40NTV2Ni4yODZ6TTUuMzM3IDcuNDMzYy0xLjE0NCAwLTIuMDYzLS45MjYtMi4wNjMtMi4wNjUgMC0xLjEzOC45Mi0yLjA2MyAyLjA2My0yLjA2MyAxLjE0IDAgMi4wNjQuOTI1IDIuMDY0IDIuMDYzIDAgMS4xMzktLjkyNSAyLjA2NS0yLjA2NCAyLjA2NXptMS43ODIgMTMuMDE5SDMuNTU1VjloMy41NjR2MTEuNDUyek0yMi4yMjUgMEgxLjc3MUMuNzkyIDAgMCAuNzc0IDAgMS43Mjl2MjAuNTQyQzAgMjMuMjI3Ljc5MiAyNCAxLjc3MSAyNGgyMC40NTFDMjMuMiAyNCAyNCAyMy4yMjcgMjQgMjIuMjcxVjEuNzI5QzI0IC43NzQgMjMuMiAwIDIyLjIyMiAwaC4wMDN6IiAvPjwvc3ZnPg==',
  google: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIyLjU2IDEyLjI1YzAtLjc4LS4wNy0xLjUzLS4yLTIuMjVIMTJ2NC4yNmg1LjkyYy0uMjYgMS4zNy0xLjA0IDIuNTMtMi4yMSAzLjMxdjIuNzdoMy41N2MyLjA4LTEuOTIgMy4yOC00Ljc0IDMuMjgtOC4wOXoiIGZpbGw9IiM0Mjg1RjQiLz48cGF0aCBkPSJNMTIgMjNjMi45NyAwIDUuNDYtLjk4IDcuMjgtMi42NmwtMy41Ny0yLjc3Yy0uOTguNjYtMi4yMyAxLjA2LTMuNzEgMS4wNi0yLjg2IDAtNS4yOS0xLjkzLTYuMTYtNC41M0gyLjE4djIuODRDMy45OSAyMC41MyA3LjcgMjMgMTIgMjN6IiBmaWxsPSIjMzRBMDUzIi8+PHBhdGggZD0iTTUuODQgMTQuMDljLS4yMi0uNjYtLjM1LTEuMzYtLjM1LTIuMDlzLjEzLTEuNDMuMzUtMi4wOVY3LjA2SDIuMThDMS40MyA4LjU1IDEgMTAuMjIgMSAxMnMuNDMgMy40NSAxLjE4IDQuOTRsMi44NS0yLjIyLjgxLS42M3oiIGZpbGw9IiNGQkJDMDUiLz48cGF0aCBkPSJNMTIgNS4zOGMxLjYyIDAgMy4wNi41NiA0LjIxIDEuNjRsMy4xNS0zLjE1QzE3LjQ1IDIuMDkgMTQuOTcgMSAxMiAxIDcuNyAxIDMuOTkgMy40NyAyLjE4IDcuMDZsMy42NiAyLjg0Yy44Ny0yLjYgMy4zLTQuNTIgNi4xNi00LjUyeiIgZmlsbD0iI0VBNDMzNSIvPjwvc3ZnPg==',
  trustpilot: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMwMEI2N0EiPjxwYXRoIGQ9Ik0xMiAxNy4yN0wxOC4xOCAyMWwtMS42NC03LjAzTDIyIDkuMjRsLTcuMTktLjYxTDEyIDJMOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMXoiLz48L3N2Zz4=',
  yelp: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNEMzIzMjMiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDEuM2MtLjUgMC0xIC4zLTEuMi44bC0yLjMgNC43LTUuMiAuOGMtLjYuMS0xIC42LS44IDEuMmwzLjggMy43LS45IDUuMmMtLjEuNi40IDEuMSAxIC45bDQuNi0yLjQgNC42IDIuNGMuNS4zIDEuMS0uMSAxLC0uOWwtLjktNS4yIDMuOC0zLjdjLjQtLjUuMi0xLjEtLjQtMS4ybC01LjItLjgtMi4zLTQuN2MtLjItLjUtLjctLjgtMS4yLS44eiIvPjwvc3ZnPg=='
};

// Validate required inputs based on active type
function validateInputs(): { isValid: boolean; message: string } {
  switch (activeType) {
    case 'url': {
      const val = (document.getElementById('input-url') as HTMLInputElement)?.value || '';
      if (!val.trim()) {
        return { isValid: false, message: 'Please enter a valid URL.' };
      }
      break;
    }
    case 'text': {
      const val = (document.getElementById('input-text') as HTMLTextAreaElement)?.value || '';
      if (!val.trim()) {
        return { isValid: false, message: 'Please enter some text.' };
      }
      break;
    }
    case 'wifi': {
      const ssid = (document.getElementById('wifi-ssid') as HTMLInputElement)?.value || '';
      if (!ssid.trim()) {
        return { isValid: false, message: 'Please enter the Wi-Fi network name (SSID).' };
      }
      break;
    }
    case 'contact': {
      const name = (document.getElementById('contact-name') as HTMLInputElement)?.value || '';
      const phone = (document.getElementById('contact-phone') as HTMLInputElement)?.value || '';
      if (!name.trim() && !phone.trim()) {
        return { isValid: false, message: 'Please enter at least a name or phone number for the contact.' };
      }
      break;
    }
    case 'whatsapp': {
      const phone = (document.getElementById('whatsapp-phone') as HTMLInputElement)?.value || '';
      if (!phone.trim()) {
        return { isValid: false, message: 'Please enter a WhatsApp phone number.' };
      }
      break;
    }
    case 'email': {
      const mailTo = (document.getElementById('email-to') as HTMLInputElement)?.value || '';
      if (!mailTo.trim()) {
        return { isValid: false, message: 'Please enter the recipient email address.' };
      }
      break;
    }
    case 'phone': {
      const pNum = (document.getElementById('phone-number') as HTMLInputElement)?.value || '';
      if (!pNum.trim()) {
        return { isValid: false, message: 'Please enter a phone number.' };
      }
      break;
    }
    case 'crypto': {
      const cAddr = (document.getElementById('crypto-address') as HTMLInputElement)?.value || '';
      if (!cAddr.trim()) {
        return { isValid: false, message: 'Please enter a cryptocurrency wallet address.' };
      }
      break;
    }
    case 'social': {
      const username = (document.getElementById('social-username') as HTMLInputElement)?.value || '';
      if (!username.trim()) {
        return { isValid: false, message: 'Please enter a social media username or profile URL.' };
      }
      break;
    }
    case 'feedback': {
      const fbUrl = (document.getElementById('feedback-url') as HTMLInputElement)?.value || '';
      if (!fbUrl.trim()) {
        return { isValid: false, message: 'Please enter the review URL or Place ID.' };
      }
      break;
    }
  }
  return { isValid: true, message: '' };
}

// Automatically apply corresponding default preset logo based on type
function autoApplyPresetLogo(type: string) {
  if (customLogoDataUrl) return; // Do not overwrite user-uploaded logo

  let preset: string | null = null;
  switch (type) {
    case 'url':
      preset = 'link';
      break;
    case 'wifi':
      preset = 'wifi';
      break;
    case 'contact':
      preset = 'vcard';
      break;
    case 'whatsapp':
      preset = 'whatsapp';
      break;
    case 'email':
      preset = 'email';
      break;
    case 'phone':
      preset = 'phone';
      break;
    case 'crypto':
      preset = 'crypto';
      break;
    case 'social': {
      const sPlatform = (document.getElementById('social-platform') as HTMLSelectElement)?.value || 'instagram';
      preset = sPlatform === 'custom' ? null : sPlatform;
      break;
    }
    case 'feedback': {
      const fPlatform = (document.getElementById('feedback-platform') as HTMLSelectElement)?.value || 'google';
      preset = fPlatform === 'custom' ? null : fPlatform;
      break;
    }
    default:
      preset = null;
      break;
  }

  activeLogoPreset = preset;

  // Sync UI selector
  const logoPresets = document.querySelectorAll('.preset-logo');
  logoPresets.forEach(b => {
    if (preset && b.getAttribute('data-preset') === preset) {
      b.classList.add('border-ink', 'bg-canvas-soft-2');
    } else {
      b.classList.remove('border-ink', 'bg-canvas-soft-2');
    }
  });
};

// Resolve preset logo to raw URLs/data
function getRawLogoSrc(): string | null {
  if (customLogoDataUrl) return customLogoDataUrl;
  if (activeLogoPreset) {
    return SVG_LOGOS[activeLogoPreset] || null;
  }
  return null;
}

async function refreshProcessedLogo() {
  const rawSrc = getRawLogoSrc();
  if (!rawSrc) {
    processedLogoDataUrl = null;
    return;
  }
  
  if (activeLogoFrame === 'none') {
    processedLogoDataUrl = rawSrc;
    return;
  }
  
  processedLogoDataUrl = await new Promise<string>((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const size = 512;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(rawSrc);
        return;
      }
      
      const padding = size * 0.18;
      const center = size / 2;
      const radius = size / 2 - 12;
      
      if (logoHasShadow) {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.16)';
        ctx.shadowBlur = 16;
        ctx.shadowOffsetY = 8;
      }
      
      if (activeLogoFrame === 'circle') {
        ctx.fillStyle = logoFrameColor;
        ctx.beginPath();
        ctx.arc(center, center, radius, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.shadowColor = 'transparent';
        ctx.strokeStyle = 'rgba(0,0,0,0.03)';
        ctx.lineWidth = 2;
        ctx.stroke();
      } else if (activeLogoFrame === 'square') {
        ctx.fillStyle = logoFrameColor;
        ctx.beginPath();
        ctx.roundRect(12, 12, size - 24, size - 24, size * 0.15);
        ctx.fill();
        
        ctx.shadowColor = 'transparent';
        ctx.strokeStyle = 'rgba(0,0,0,0.03)';
        ctx.lineWidth = 2;
        ctx.stroke();
      } else if (activeLogoFrame === 'glass') {
        const grad = ctx.createLinearGradient(0, 0, size, size);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0.4)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(12, 12, size - 24, size - 24, size * 0.15);
        ctx.fill();
        
        ctx.shadowColor = 'transparent';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.roundRect(12, 12, size - 24, size - 24, size * 0.15);
        ctx.stroke();
      }
      
      ctx.shadowColor = 'transparent';
      const destSize = size - (padding * 2);
      ctx.drawImage(img, padding, padding, destSize, destSize);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => {
      resolve(rawSrc);
    };
    img.src = rawSrc;
  });
}

function getLogoPath(): string | null {
  return processedLogoDataUrl;
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
async function updateQRCode() {
  if (!qrCodeInstance) return;

  const payload = getPayload();
  await refreshProcessedLogo();
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
    image: logo || undefined,
    imageOptions: {
      crossOrigin: 'anonymous',
      margin: 6,
      imageSize: logoSize
    }
  });
}

// Live CSS visual frame pre-viewer updates
function updateFrameUI() {
  const frameWrapper = document.getElementById('preview-frame-wrapper');
  const frameLabel = document.getElementById('preview-frame-label');
  const frameTopLabel = document.getElementById('preview-frame-top-label');
  if (!frameWrapper || !frameLabel) return;

  // Clean up dynamic frame overlay elements
  const oldOverlay = document.getElementById('viewfinder-overlay');
  if (oldOverlay) oldOverlay.remove();
  const oldBarcode = document.getElementById('ticket-barcode');
  if (oldBarcode) oldBarcode.remove();
  const oldNotch = document.getElementById('phone-notch');
  if (oldNotch) oldNotch.remove();
  const oldHome = document.getElementById('phone-home-indicator');
  if (oldHome) oldHome.remove();

  // Reset defaults first
  frameWrapper.className = "w-full flex flex-col items-center justify-center p-4 rounded-md border border-hairline bg-white shadow-sm transition-all duration-200";
  frameWrapper.style.border = '';
  frameWrapper.style.borderBottom = '';
  frameWrapper.style.borderRadius = '';
  frameWrapper.style.padding = '';
  frameWrapper.style.boxShadow = '';
  frameWrapper.style.backdropFilter = '';
  frameWrapper.style.webkitBackdropFilter = '';
  frameWrapper.style.backgroundImage = '';
  frameWrapper.style.backgroundOrigin = '';
  frameWrapper.style.backgroundClip = '';
  frameWrapper.style.backgroundPosition = '';
  frameWrapper.style.backgroundSize = '';
  frameWrapper.style.backgroundRepeat = '';
  frameWrapper.style.background = '';

  frameLabel.className = "w-full py-2.5 mt-2 font-bold text-center text-sm rounded-sm hidden select-none uppercase tracking-wide";
  frameLabel.style.backgroundColor = '';
  frameLabel.style.color = '';
  frameLabel.style.marginTop = '';
  frameLabel.style.borderRadius = '';
  frameLabel.style.padding = '';
  frameLabel.style.width = '';
  frameLabel.style.display = '';
  frameLabel.style.borderTop = '';
  frameLabel.style.border = '';
  frameLabel.style.textShadow = '';
  frameLabel.style.fontWeight = '';
  frameLabel.style.fontFamily = '';
  frameLabel.style.letterSpacing = '';
  frameLabel.innerText = frameText;

  if (frameTopLabel) {
    frameTopLabel.className = "w-full py-2 mb-2 font-bold text-center text-sm rounded-sm hidden select-none uppercase tracking-wide";
    frameTopLabel.style.backgroundColor = '';
    frameTopLabel.style.color = '';
    frameTopLabel.style.borderRadius = '';
    frameTopLabel.innerText = frameTopText;
  }

  if (frameStyle === 'none') {
    frameWrapper.style.border = '1px solid var(--hairline)';
    frameLabel.classList.add('hidden');
    if (frameTopLabel) frameTopLabel.classList.add('hidden');
    return;
  }

  if (frameStyle === 'classic') {
    frameWrapper.style.border = `3px solid ${frameColor}`;
    frameWrapper.style.borderBottom = '0';
    frameWrapper.style.borderRadius = '16px 16px 0 0';
    frameWrapper.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.05)';
    frameLabel.style.backgroundColor = frameColor;
    frameLabel.style.color = '#ffffff';
    frameLabel.classList.remove('hidden');
    frameLabel.style.borderRadius = '0 0 16px 16px';
    frameLabel.style.marginTop = '12px';
    frameLabel.style.letterSpacing = '1px';
    frameLabel.style.fontWeight = 'bold';
    if (frameTopLabel) frameTopLabel.classList.add('hidden');
  } else if (frameStyle === 'capsule') {
    frameWrapper.style.border = '1px solid rgba(0, 0, 0, 0.08)';
    frameWrapper.style.borderRadius = '20px';
    frameWrapper.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.04)';
    frameWrapper.style.padding = '24px 20px';
    
    frameLabel.style.backgroundColor = frameColor;
    frameLabel.style.color = '#ffffff';
    frameLabel.style.borderRadius = '9999px';
    frameLabel.style.padding = '8px 24px';
    frameLabel.style.width = 'auto';
    frameLabel.style.display = 'inline-block';
    frameLabel.style.marginTop = '16px';
    frameLabel.style.boxShadow = `0 4px 14px ${frameColor}30`;
    frameLabel.innerHTML = `<span class="inline-flex items-center gap-1.5 justify-center"><svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M4 4h4v2H6v2H4V4zm16 0h-4v2h2v2h2V4zM4 20h4v-2H6v-2H4v4zm16 0h-4v-2h2v-2h2v4z"/></svg>${frameText}</span>`;
    frameLabel.classList.remove('hidden');
    if (frameTopLabel) frameTopLabel.classList.add('hidden');
  } else if (frameStyle === 'minimal') {
    frameWrapper.style.border = '1px solid rgba(0, 0, 0, 0.06)';
    frameWrapper.style.borderRadius = '16px';
    frameWrapper.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.02)';
    
    frameLabel.style.backgroundColor = 'transparent';
    frameLabel.style.color = frameColor;
    frameLabel.style.width = '100%';
    frameLabel.style.fontFamily = 'monospace';
    frameLabel.style.letterSpacing = '1px';
    frameLabel.innerText = `● ${frameText} ●`;
    frameLabel.classList.remove('hidden');
    if (frameTopLabel) frameTopLabel.classList.add('hidden');
  } else if (frameStyle === 'ticket') {
    frameWrapper.style.border = `2px dashed ${frameColor}`;
    frameWrapper.style.borderRadius = '12px';
    frameWrapper.style.padding = '20px';
    
    frameLabel.style.backgroundColor = 'transparent';
    frameLabel.style.color = frameColor;
    frameLabel.style.borderTop = `2px dashed ${frameColor}`;
    frameLabel.style.paddingTop = '12px';
    frameLabel.style.marginTop = '16px';
    frameLabel.style.letterSpacing = '2px';
    frameLabel.style.fontWeight = 'bold';
    frameLabel.classList.remove('hidden');
    if (frameTopLabel) frameTopLabel.classList.add('hidden');
  } else if (frameStyle === 'pointer') {
    frameWrapper.style.border = '1px solid rgba(0, 0, 0, 0.06)';
    frameWrapper.style.borderRadius = '16px';
    frameWrapper.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.04)';
    
    frameLabel.style.backgroundColor = frameColor;
    frameLabel.style.color = '#ffffff';
    frameLabel.style.borderRadius = '8px';
    frameLabel.style.padding = '8px 16px';
    frameLabel.style.width = 'auto';
    frameLabel.style.display = 'inline-block';
    frameLabel.style.marginTop = '16px';
    frameLabel.style.position = 'relative';
    frameLabel.innerText = frameText;
    
    const arrow = document.createElement('span');
    arrow.style.position = 'absolute';
    arrow.style.top = '-6px';
    arrow.style.left = '50%';
    arrow.style.transform = 'translateX(-50%)';
    arrow.style.width = '0';
    arrow.style.height = '0';
    arrow.style.borderLeft = '6px solid transparent';
    arrow.style.borderRight = '6px solid transparent';
    arrow.style.borderBottom = `6px solid ${frameColor}`;
    frameLabel.appendChild(arrow);
    
    frameLabel.classList.remove('hidden');
    if (frameTopLabel) frameTopLabel.classList.add('hidden');
  } else if (frameStyle === 'phone') {
    frameWrapper.style.border = `10px solid #1f1f1f`;
    frameWrapper.style.borderRadius = '32px';
    frameWrapper.style.padding = '28px 16px 16px 16px';
    frameWrapper.style.boxShadow = '0 15px 45px rgba(0, 0, 0, 0.12)';
    frameWrapper.style.position = 'relative';

    const dynamicIsland = document.createElement('div');
    dynamicIsland.id = 'phone-notch';
    dynamicIsland.className = 'absolute top-2.5 left-1/2 -translate-x-1/2 bg-black h-4 rounded-full select-none';
    dynamicIsland.style.width = '75px';
    dynamicIsland.style.boxShadow = 'inset 0 0 3px rgba(255,255,255,0.1)';
    frameWrapper.appendChild(dynamicIsland);

    const homeIndicator = document.createElement('div');
    homeIndicator.id = 'phone-home-indicator';
    homeIndicator.className = 'absolute bottom-1.5 left-1/2 -translate-x-1/2 bg-neutral-300 h-1 rounded-full select-none';
    homeIndicator.style.width = '60px';
    frameWrapper.appendChild(homeIndicator);

    frameLabel.style.backgroundColor = 'transparent';
    frameLabel.style.color = frameColor;
    frameLabel.style.fontWeight = 'bold';
    frameLabel.style.marginTop = '12px';
    frameLabel.style.letterSpacing = '1px';
    frameLabel.classList.remove('hidden');
    if (frameTopLabel) frameTopLabel.classList.add('hidden');
  } else if (frameStyle === 'shadow') {
    frameWrapper.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.02), 0 10px 15px -3px rgba(0,0,0,0.03), 0 25px 50px -12px rgba(0,0,0,0.07)';
    frameWrapper.style.border = '1px solid rgba(0, 0, 0, 0.04)';
    frameWrapper.style.borderRadius = '20px';
    frameLabel.style.backgroundColor = 'transparent';
    frameLabel.style.color = frameColor;
    frameLabel.style.fontWeight = 'bold';
    frameLabel.style.letterSpacing = '1px';
    frameLabel.style.marginTop = '12px';
    frameLabel.classList.remove('hidden');
    if (frameTopLabel) frameTopLabel.classList.add('hidden');
  } else if (frameStyle === 'top-bottom') {
    frameWrapper.style.border = 'none';
    frameWrapper.style.borderRadius = '16px';
    frameWrapper.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.05)';
    frameWrapper.style.padding = '0px';
    
    if (frameTopLabel) {
      frameTopLabel.style.background = `linear-gradient(to right, ${frameColor}, ${frameColor}dd)`;
      frameTopLabel.style.color = '#ffffff';
      frameTopLabel.style.borderRadius = '16px 16px 0 0';
      frameTopLabel.style.margin = '0px';
      frameTopLabel.style.padding = '12px';
      frameTopLabel.style.width = '100%';
      frameTopLabel.classList.remove('hidden');
    }
    
    frameLabel.style.background = `linear-gradient(to right, ${frameColor}, ${frameColor}dd)`;
    frameLabel.style.color = '#ffffff';
    frameLabel.style.borderRadius = '0 0 16px 16px';
    frameLabel.style.margin = '0px';
    frameLabel.style.padding = '12px';
    frameLabel.style.width = '100%';
    frameLabel.classList.remove('hidden');
  } else if (frameStyle === 'glassmorphic') {
    frameWrapper.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.15) 100%)';
    frameWrapper.style.backdropFilter = 'blur(12px)';
    frameWrapper.style.webkitBackdropFilter = 'blur(12px)';
    frameWrapper.style.border = '1px solid rgba(255, 255, 255, 0.5)';
    frameWrapper.style.boxShadow = `0 20px 50px -10px ${frameColor}20, inset 0 1px 0 rgba(255,255,255,0.3)`;
    frameWrapper.style.borderRadius = '16px';
    
    frameLabel.style.backgroundColor = frameColor;
    frameLabel.style.color = '#ffffff';
    frameLabel.style.borderRadius = '30px';
    frameLabel.style.padding = '8px 24px';
    frameLabel.style.width = 'auto';
    frameLabel.style.display = 'inline-block';
    frameLabel.style.marginTop = '12px';
    frameLabel.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    frameLabel.classList.remove('hidden');
    if (frameTopLabel) frameTopLabel.classList.add('hidden');
  } else if (frameStyle === 'neon') {
    frameWrapper.style.background = '#0a0a0a';
    frameWrapper.style.border = `3px solid ${frameColor}`;
    frameWrapper.style.borderRadius = '16px';
    frameWrapper.style.boxShadow = `0 0 15px ${frameColor}50, 0 0 35px ${frameColor}25, inset 0 0 15px ${frameColor}30`;
    
    frameLabel.style.backgroundColor = 'transparent';
    frameLabel.style.color = '#ffffff';
    frameLabel.style.textShadow = `0 0 5px ${frameColor}, 0 0 15px ${frameColor}`;
    frameLabel.style.fontWeight = 'bold';
    frameLabel.style.fontFamily = 'monospace';
    frameLabel.style.letterSpacing = '3px';
    frameLabel.style.marginTop = '12px';
    frameLabel.classList.remove('hidden');
    if (frameTopLabel) frameTopLabel.classList.add('hidden');
  } else if (frameStyle === 'viewfinder') {
    frameWrapper.style.border = 'none';
    frameWrapper.style.boxShadow = 'none';
    frameWrapper.style.borderRadius = '0px';
    frameWrapper.style.background = 'none';
    frameWrapper.style.backgroundImage = `
      linear-gradient(to right, ${frameColor} 4px, transparent 4px),
      linear-gradient(to bottom, ${frameColor} 4px, transparent 4px),
      linear-gradient(to left, ${frameColor} 4px, transparent 4px),
      linear-gradient(to bottom, ${frameColor} 4px, transparent 4px),
      linear-gradient(to right, ${frameColor} 4px, transparent 4px),
      linear-gradient(to top, ${frameColor} 4px, transparent 4px),
      linear-gradient(to left, ${frameColor} 4px, transparent 4px),
      linear-gradient(to top, ${frameColor} 4px, transparent 4px)
    `;
    frameWrapper.style.backgroundPosition = '0 0, 0 0, 100% 0, 100% 0, 0 100%, 0 100%, 100% 100%, 100% 100%';
    frameWrapper.style.backgroundSize = '24px 24px';
    frameWrapper.style.backgroundRepeat = 'no-repeat';
    frameWrapper.style.position = 'relative';

    const overlay = document.createElement('div');
    overlay.id = 'viewfinder-overlay';
    overlay.className = 'absolute inset-0 pointer-events-none flex flex-col justify-between p-4 text-[9px] font-mono text-mute select-none';
    overlay.innerHTML = `
      <div class="flex justify-between w-full opacity-65">
        <span class="text-rose-500 font-bold flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>REC</span>
        <span>RAW 12-BIT</span>
      </div>
      <div class="flex justify-between w-full opacity-65">
        <span>F:1.8</span>
        <span>ISO 200</span>
        <span>1/125s</span>
      </div>
    `;
    frameWrapper.appendChild(overlay);
    
    frameLabel.style.backgroundColor = 'transparent';
    frameLabel.style.color = frameColor;
    frameLabel.style.fontFamily = 'monospace';
    frameLabel.style.letterSpacing = '2px';
    frameLabel.style.marginTop = '12px';
    frameLabel.innerText = `[○] ${frameText}`;
    frameLabel.classList.remove('hidden');
    if (frameTopLabel) frameTopLabel.classList.add('hidden');
  } else if (frameStyle === 'stamp') {
    frameWrapper.style.background = '#fdfbf7';
    frameWrapper.style.border = `6px dotted ${frameColor}`;
    frameWrapper.style.borderRadius = '4px';
    frameWrapper.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
    frameWrapper.style.position = 'relative';
    
    const barcode = document.createElement('div');
    barcode.id = 'ticket-barcode';
    barcode.className = 'w-full flex items-center justify-center gap-[2px] mt-2.5 opacity-60 h-6 select-none';
    let lines = '';
    for (let i = 0; i < 28; i++) {
      const w = (i % 3 === 0) ? '3px' : (i % 5 === 0) ? '1px' : '2px';
      lines += `<span class="h-full block" style="width: ${w}; background-color: ${frameColor};"></span>`;
    }
    barcode.innerHTML = lines;
    frameLabel.parentNode.insertBefore(barcode, frameLabel);

    frameLabel.style.backgroundColor = 'transparent';
    frameLabel.style.color = frameColor;
    frameLabel.style.fontWeight = 'bold';
    frameLabel.style.marginTop = '8px';
    frameLabel.classList.remove('hidden');
    if (frameTopLabel) frameTopLabel.classList.add('hidden');
  }
}

// Composite frames drawing compositor during download
// Composite frames drawing compositor during download
async function downloadQR(format: 'png' | 'svg') {
  if (!qrCodeInstance) return;

  // Validate inputs before download
  const validation = validateInputs();
  if (!validation.isValid) {
    showToast(validation.message, true);
    return;
  }

  // Trigger save to local history first
  saveToHistory();

  const finalName = `qr-code-${activeType}`;

  // If no frame is selected, perform raw download
  if (frameStyle === 'none') {
    // Render using correct type (canvas for png, svg for svg) to ensure reliable download/conversion
    const options = qrCodeInstance._options || qrCodeInstance.options || {};
    const tempInstance = new QRCodeStyling({
      width: qrSize,
      height: qrSize,
      type: format === 'png' ? 'canvas' : 'svg',
      data: getPayload(),
      qrOptions: {
        errorCorrectionLevel: eccLevel
      },
      dotsOptions: options.dotsOptions,
      backgroundOptions: options.backgroundOptions,
      cornersSquareOptions: options.cornersSquareOptions,
      cornersDotOptions: options.cornersDotOptions,
      image: getLogoPath() || undefined,
      imageOptions: options.imageOptions
    });
    tempInstance.download({ name: finalName, extension: format });
    return;
  }

  // Set high-resolution size multiplier for export
  const exportSize = qrSize;

  // Re-render QR Code at export resolution temporarily
  const options = qrCodeInstance._options || qrCodeInstance.options || {};
  const tempInstance = new QRCodeStyling({
    width: exportSize,
    height: exportSize,
    type: format === 'png' ? 'canvas' : 'svg', // Ensure canvas type for PNG export
    data: getPayload(),
    qrOptions: {
      errorCorrectionLevel: eccLevel
    },
    dotsOptions: options.dotsOptions,
    backgroundOptions: options.backgroundOptions,
    cornersSquareOptions: options.cornersSquareOptions,
    cornersDotOptions: options.cornersDotOptions,
    image: getLogoPath() || undefined,
    imageOptions: options.imageOptions
  });
  const qrRenderSize = exportSize;
  const cardPadding = Math.round(qrRenderSize * 0.03);
  const cardSize = qrRenderSize + (cardPadding * 2);
  const outerPadding = Math.round(qrRenderSize * 0.08);
  const gap = Math.round(qrRenderSize * 0.04);
  const frameHeight = Math.round(qrRenderSize * 0.2);

  if (format === 'png') {
    // composite on canvas
    const rawBlob = await tempInstance.getRawData('png');
    const img = new Image();
    img.onload = () => {
      const compositeCanvas = document.createElement('canvas');
      const ctx = compositeCanvas.getContext('2d');
      if (!ctx) return;

      let canvasWidth = cardSize + (outerPadding * 2);
      let canvasHeight = outerPadding + cardSize + gap + frameHeight + outerPadding;
      let qrX = outerPadding + cardPadding;
      let qrY = outerPadding + cardPadding;
      let cardX = outerPadding;
      let cardY = outerPadding;
      let labelY = outerPadding + cardSize + gap;

      if (frameStyle === 'phone') {
        const bezel = Math.round(qrRenderSize * 0.04);
        const padTop = Math.round(qrRenderSize * 0.11);
        const padSides = Math.round(qrRenderSize * 0.06);
        const padBottom = Math.round(qrRenderSize * 0.16);
        canvasWidth = cardSize + (padSides * 2) + (bezel * 2);
        canvasHeight = cardSize + padTop + padBottom + (bezel * 2);
        qrX = bezel + padSides + cardPadding;
        qrY = bezel + padTop + cardPadding;
        cardX = bezel + padSides;
        cardY = bezel + padTop;
      } else if (frameStyle === 'top-bottom') {
        canvasWidth = cardSize + (outerPadding * 2);
        canvasHeight = frameHeight + outerPadding + cardSize + outerPadding + frameHeight;
        qrX = outerPadding + cardPadding;
        qrY = frameHeight + outerPadding + cardPadding;
        cardX = outerPadding;
        cardY = frameHeight + outerPadding;
      } else if (frameStyle === 'viewfinder') {
        canvasWidth = cardSize + (outerPadding * 2);
        canvasHeight = cardSize + (outerPadding * 2) + frameHeight;
        qrX = outerPadding + cardPadding;
        qrY = outerPadding + cardPadding;
        cardX = outerPadding;
        cardY = outerPadding;
        labelY = outerPadding + cardSize + gap;
      }

      compositeCanvas.width = canvasWidth;
      compositeCanvas.height = canvasHeight;

      // Fill background
      let frameBg = '#ffffff';
      if (frameStyle === 'neon') frameBg = '#0a0a0a';
      else if (frameStyle === 'stamp') frameBg = '#fdfbf7';
      else if (frameStyle === 'glassmorphic') {
        const glassGrad = ctx.createLinearGradient(0, 0, canvasWidth, canvasHeight);
        glassGrad.addColorStop(0, 'rgba(255, 255, 255, 0.75)');
        glassGrad.addColorStop(1, 'rgba(255, 255, 255, 0.35)');
        ctx.fillStyle = glassGrad;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      }

      if (frameStyle !== 'glassmorphic') {
        ctx.fillStyle = frameBg;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      }

      // Draw white card container (matching preview bg-white)
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.roundRect(cardX, cardY, cardSize, cardSize, Math.round(qrRenderSize * 0.025));
      ctx.fill();

      // Draw QR
      ctx.drawImage(img, qrX, qrY, qrRenderSize, qrRenderSize);

      ctx.fillStyle = frameColor;
      ctx.strokeStyle = frameColor;

      const fontSize = Math.round(qrRenderSize * 0.045);
      ctx.font = `bold ${fontSize}px Inter, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (frameStyle === 'classic') {
        const r = Math.round(qrRenderSize * 0.045);
        ctx.lineWidth = Math.round(qrRenderSize * 0.012);
        ctx.strokeStyle = frameColor;
        ctx.beginPath();
        // Rounded top corners, open bottom
        ctx.roundRect(ctx.lineWidth / 2, ctx.lineWidth / 2, canvasWidth - ctx.lineWidth, labelY - ctx.lineWidth / 2, [r, r, 0, 0]);
        ctx.stroke();

        ctx.fillStyle = frameColor;
        ctx.beginPath();
        ctx.roundRect(0, labelY, canvasWidth, frameHeight, [0, 0, r, r]);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.fillText(frameText, canvasWidth / 2, labelY + (frameHeight / 2));
      } else if (frameStyle === 'capsule') {
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.lineWidth = Math.max(1, Math.round(qrRenderSize * 0.003));
        ctx.beginPath();
        ctx.roundRect(ctx.lineWidth / 2, ctx.lineWidth / 2, canvasWidth - ctx.lineWidth, canvasHeight - ctx.lineWidth, Math.round(qrRenderSize * 0.06));
        ctx.stroke();

        const pillWidth = Math.round(qrRenderSize * 0.65);
        const pillHeight = Math.round(frameHeight * 0.6);
        const pillX = (canvasWidth - pillWidth) / 2;
        const pillY = labelY + (frameHeight - pillHeight) / 2;

        ctx.shadowColor = 'rgba(0, 0, 0, 0.06)';
        ctx.shadowBlur = Math.round(qrRenderSize * 0.02);
        ctx.shadowOffsetY = Math.round(qrRenderSize * 0.01);

        ctx.fillStyle = frameColor;
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillWidth, pillHeight, pillHeight / 2);
        ctx.fill();

        ctx.shadowColor = 'transparent';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(frameText, canvasWidth / 2, pillY + (pillHeight / 2));
      } else if (frameStyle === 'minimal') {
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.06)';
        ctx.lineWidth = Math.max(1, Math.round(qrRenderSize * 0.003));
        ctx.beginPath();
        ctx.roundRect(ctx.lineWidth / 2, ctx.lineWidth / 2, canvasWidth - ctx.lineWidth, canvasHeight - ctx.lineWidth, Math.round(qrRenderSize * 0.05));
        ctx.stroke();

        ctx.fillStyle = frameColor;
        ctx.font = `bold ${fontSize}px "Courier New", Courier, monospace`;
        ctx.fillText(`● ${frameText} ●`, canvasWidth / 2, labelY + (frameHeight / 2));
      } else if (frameStyle === 'ticket') {
        ctx.strokeStyle = frameColor;
        ctx.lineWidth = Math.round(qrRenderSize * 0.006);
        ctx.beginPath();
        ctx.roundRect(ctx.lineWidth / 2, ctx.lineWidth / 2, canvasWidth - ctx.lineWidth, canvasHeight - ctx.lineWidth, Math.round(qrRenderSize * 0.04));
        ctx.stroke();

        ctx.beginPath();
        ctx.setLineDash([Math.round(qrRenderSize * 0.02), Math.round(qrRenderSize * 0.015)]);
        ctx.moveTo(outerPadding, labelY - gap / 2);
        ctx.lineTo(canvasWidth - outerPadding, labelY - gap / 2);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = frameColor;
        ctx.fillText(frameText, canvasWidth / 2, labelY + (frameHeight / 2));
      } else if (frameStyle === 'pointer') {
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.06)';
        ctx.lineWidth = Math.max(1, Math.round(qrRenderSize * 0.003));
        ctx.beginPath();
        ctx.roundRect(ctx.lineWidth / 2, ctx.lineWidth / 2, canvasWidth - ctx.lineWidth, canvasHeight - ctx.lineWidth, Math.round(qrRenderSize * 0.05));
        ctx.stroke();

        const bubbleWidth = Math.round(qrRenderSize * 0.7);
        const bubbleHeight = Math.round(frameHeight * 0.6);
        const bubbleX = (canvasWidth - bubbleWidth) / 2;
        const bubbleY = labelY + (frameHeight - bubbleHeight) / 2;

        ctx.fillStyle = frameColor;
        ctx.beginPath();
        ctx.roundRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight, Math.round(bubbleHeight * 0.25));
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(canvasWidth / 2 - Math.round(qrRenderSize * 0.025), bubbleY);
        ctx.lineTo(canvasWidth / 2, bubbleY - Math.round(qrRenderSize * 0.02));
        ctx.lineTo(canvasWidth / 2 + Math.round(qrRenderSize * 0.025), bubbleY);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.fillText(frameText, canvasWidth / 2, bubbleY + (bubbleHeight / 2));
      } else if (frameStyle === 'phone') {
        const bezel = Math.round(qrRenderSize * 0.04);
        const padBottom = Math.round(qrRenderSize * 0.16);

        ctx.lineWidth = bezel;
        ctx.strokeStyle = '#1f1f1f';
        ctx.beginPath();
        ctx.roundRect(bezel / 2, bezel / 2, canvasWidth - bezel, canvasHeight - bezel, Math.round(qrRenderSize * 0.08));
        ctx.stroke();

        ctx.fillStyle = '#000000';
        const islandWidth = Math.round(qrRenderSize * 0.22);
        const islandHeight = Math.round(qrRenderSize * 0.04);
        ctx.beginPath();
        ctx.roundRect((canvasWidth - islandWidth) / 2, bezel * 0.8, islandWidth, islandHeight, islandHeight / 2);
        ctx.fill();

        ctx.fillStyle = '#d4d4d4';
        const homeWidth = Math.round(qrRenderSize * 0.2);
        const homeHeight = Math.round(qrRenderSize * 0.01);
        ctx.beginPath();
        ctx.roundRect((canvasWidth - homeWidth) / 2, canvasHeight - bezel - Math.round(qrRenderSize * 0.03), homeWidth, homeHeight, homeHeight / 2);
        ctx.fill();

        const phoneLabelY = canvasHeight - bezel - (padBottom / 2);
        ctx.fillStyle = frameColor;
        ctx.fillText(frameText, canvasWidth / 2, phoneLabelY);
      } else if (frameStyle === 'shadow') {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.03)';
        ctx.shadowBlur = Math.round(qrRenderSize * 0.06);
        ctx.shadowOffsetY = Math.round(qrRenderSize * 0.03);

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.roundRect(0, 0, canvasWidth, canvasHeight, Math.round(qrRenderSize * 0.05));
        ctx.fill();
        ctx.shadowColor = 'transparent';

        ctx.strokeStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(0, 0, canvasWidth, canvasHeight, Math.round(qrRenderSize * 0.05));
        ctx.stroke();

        ctx.fillStyle = frameColor;
        ctx.fillText(frameText, canvasWidth / 2, labelY + (frameHeight / 2));
      } else if (frameStyle === 'top-bottom') {
        const r = Math.round(qrRenderSize * 0.04);
        const bannerGrad = ctx.createLinearGradient(0, 0, canvasWidth, 0);
        bannerGrad.addColorStop(0, frameColor);
        bannerGrad.addColorStop(1, frameColor + 'dd');

        ctx.fillStyle = bannerGrad;
        ctx.beginPath();
        ctx.roundRect(0, 0, canvasWidth, frameHeight, [r, r, 0, 0]);
        ctx.fill();

        ctx.beginPath();
        ctx.roundRect(0, canvasHeight - frameHeight, canvasWidth, frameHeight, [0, 0, r, r]);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.fillText(frameTopText, canvasWidth / 2, frameHeight / 2);
        ctx.fillText(frameText, canvasWidth / 2, canvasHeight - (frameHeight / 2));
      } else if (frameStyle === 'glassmorphic') {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
        ctx.lineWidth = Math.round(qrRenderSize * 0.015);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(canvasWidth, canvasHeight);
        ctx.stroke();

        const pillWidth = Math.round(qrRenderSize * 0.6);
        const pillHeight = Math.round(frameHeight * 0.55);
        const pillX = (canvasWidth - pillWidth) / 2;
        const pillY = labelY + (frameHeight - pillHeight) / 2;

        ctx.fillStyle = frameColor;
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillWidth, pillHeight, pillHeight / 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.fillText(frameText, canvasWidth / 2, pillY + (pillHeight / 2));
      } else if (frameStyle === 'neon') {
        ctx.shadowColor = frameColor;
        ctx.shadowBlur = Math.round(qrRenderSize * 0.04);
        ctx.lineWidth = Math.round(qrRenderSize * 0.012);

        const grad = ctx.createLinearGradient(0, 0, canvasWidth, canvasHeight);
        grad.addColorStop(0, frameColor);
        grad.addColorStop(1, '#00f2fe');
        ctx.strokeStyle = grad;

        ctx.beginPath();
        ctx.roundRect(ctx.lineWidth / 2, ctx.lineWidth / 2, canvasWidth - ctx.lineWidth, canvasHeight - ctx.lineWidth, Math.round(qrRenderSize * 0.04));
        ctx.stroke();
        ctx.shadowColor = 'transparent';

        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = frameColor;
        ctx.shadowBlur = Math.round(qrRenderSize * 0.015);
        ctx.font = `bold ${fontSize}px Courier New, Courier, monospace`;
        ctx.letterSpacing = '3px';
        ctx.fillText(frameText, canvasWidth / 2, labelY + (frameHeight / 2));
        ctx.shadowColor = 'transparent';
        ctx.letterSpacing = '0px';
      } else if (frameStyle === 'viewfinder') {
        const bracketSize = Math.round(qrRenderSize * 0.08);
        const bracketWidth = Math.max(2, Math.round(qrRenderSize * 0.012));

        const vx1 = cardX - cardPadding / 2;
        const vy1 = cardY - cardPadding / 2;
        const vx2 = cardX + cardSize + cardPadding / 2;
        const vy2 = cardY + cardSize + cardPadding / 2;

        ctx.strokeStyle = frameColor;
        ctx.lineWidth = bracketWidth;
        ctx.lineCap = 'round';

        // Top-Left
        ctx.beginPath();
        ctx.moveTo(vx1 + bracketSize, vy1);
        ctx.lineTo(vx1, vy1);
        ctx.lineTo(vx1, vy1 + bracketSize);
        ctx.stroke();

        // Top-Right
        ctx.beginPath();
        ctx.moveTo(vx2 - bracketSize, vy1);
        ctx.lineTo(vx2, vy1);
        ctx.lineTo(vx2, vy1 + bracketSize);
        ctx.stroke();

        // Bottom-Left
        ctx.beginPath();
        ctx.moveTo(vx1 + bracketSize, vy2);
        ctx.lineTo(vx1, vy2);
        ctx.lineTo(vx1, vy2 - bracketSize);
        ctx.stroke();

        // Bottom-Right
        ctx.beginPath();
        ctx.moveTo(vx2 - bracketSize, vy2);
        ctx.lineTo(vx2, vy2);
        ctx.lineTo(vx2, vy2 - bracketSize);
        ctx.stroke();

        ctx.fillStyle = '#f43f5e';
        ctx.beginPath();
        ctx.arc(vx1 + cardPadding, vy1 + cardPadding, Math.round(qrRenderSize * 0.012), 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = frameColor;
        ctx.font = `bold ${Math.round(qrRenderSize * 0.03)}px "Courier New", Courier, monospace`;
        ctx.textAlign = 'left';
        ctx.fillText('REC', vx1 + cardPadding * 2.2, vy1 + cardPadding);

        ctx.textAlign = 'right';
        ctx.fillText('RAW 12-BIT', vx2 - cardPadding, vy1 + cardPadding);

        ctx.textAlign = 'left';
        ctx.fillText('F:1.8', vx1 + cardPadding, vy2 - cardPadding);

        ctx.textAlign = 'center';
        ctx.fillText('ISO 200', canvasWidth / 2, vy2 - cardPadding);

        ctx.textAlign = 'right';
        ctx.fillText('1/125s', vx2 - cardPadding, vy2 - cardPadding);

        ctx.fillStyle = frameColor;
        ctx.font = `bold ${fontSize}px "Courier New", Courier, monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(`[○] ${frameText}`, canvasWidth / 2, labelY + (frameHeight / 2));
      } else if (frameStyle === 'stamp') {
        ctx.strokeStyle = frameColor;
        ctx.lineWidth = Math.round(qrRenderSize * 0.015);
        ctx.setLineDash([Math.round(qrRenderSize * 0.005), Math.round(qrRenderSize * 0.02)]);
        ctx.beginPath();
        ctx.roundRect(ctx.lineWidth / 2, ctx.lineWidth / 2, canvasWidth - ctx.lineWidth, canvasHeight - ctx.lineWidth, Math.round(qrRenderSize * 0.02));
        ctx.stroke();
        ctx.setLineDash([]);

        const barcodeY = labelY + Math.round(frameHeight * 0.1);
        const barcodeH = Math.round(frameHeight * 0.35);
        const barcodeW = Math.round(qrRenderSize * 0.6);
        const startX = (canvasWidth - barcodeW) / 2;

        ctx.fillStyle = frameColor;
        let currX = startX;
        let index = 0;
        while (currX < startX + barcodeW) {
          const w = (index % 3 === 0) ? Math.round(qrRenderSize * 0.008) : (index % 5 === 0) ? Math.round(qrRenderSize * 0.003) : Math.round(qrRenderSize * 0.005);
          ctx.fillRect(currX, barcodeY, w, barcodeH);
          currX += w + Math.round(qrRenderSize * 0.005);
          index++;
        }

        ctx.fillStyle = frameColor;
        ctx.fillText(frameText, canvasWidth / 2, labelY + Math.round(frameHeight * 0.75));
      }

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

    let totalWidth = cardSize + (outerPadding * 2);
    let totalHeight = outerPadding + cardSize + gap + frameHeight + outerPadding;
    let qrX = outerPadding + cardPadding;
    let qrY = outerPadding + cardPadding;
    let cardX = outerPadding;
    let cardY = outerPadding;
    let labelY = outerPadding + cardSize + gap;
    
    if (frameStyle === 'phone') {
      const bezel = Math.round(qrRenderSize * 0.04);
      const padTop = Math.round(qrRenderSize * 0.11);
      const padSides = Math.round(qrRenderSize * 0.06);
      const padBottom = Math.round(qrRenderSize * 0.16);
      totalWidth = cardSize + (padSides * 2) + (bezel * 2);
      totalHeight = cardSize + padTop + padBottom + (bezel * 2);
      qrX = bezel + padSides + cardPadding;
      qrY = bezel + padTop + cardPadding;
      cardX = bezel + padSides;
      cardY = bezel + padTop;
    } else if (frameStyle === 'top-bottom') {
      totalWidth = cardSize + (outerPadding * 2);
      totalHeight = frameHeight + outerPadding + cardSize + outerPadding + frameHeight;
      qrX = outerPadding + cardPadding;
      qrY = frameHeight + outerPadding + cardPadding;
      cardX = outerPadding;
      cardY = frameHeight + outerPadding;
    } else if (frameStyle === 'viewfinder') {
      totalWidth = cardSize + (outerPadding * 2);
      totalHeight = cardSize + (outerPadding * 2) + frameHeight;
      qrX = outerPadding + cardPadding;
      qrY = outerPadding + cardPadding;
      cardX = outerPadding;
      cardY = outerPadding;
      labelY = outerPadding + cardSize + gap;
    }

    const newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newSvg.setAttribute('width', totalWidth.toString());
    newSvg.setAttribute('height', totalHeight.toString());
    newSvg.setAttribute('viewBox', `0 0 ${totalWidth} ${totalHeight}`);

    // Background Rect
    const bgRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    bgRect.setAttribute('width', '100%');
    bgRect.setAttribute('height', '100%');
    
    let frameBg = '#ffffff';
    if (frameStyle === 'neon') frameBg = '#0a0a0a';
    else if (frameStyle === 'stamp') frameBg = '#fdfbf7';
    bgRect.setAttribute('fill', frameBg);
    newSvg.appendChild(bgRect);

    if (frameStyle === 'glassmorphic') {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
      grad.setAttribute('id', 'glass-bg-grad');
      grad.setAttribute('x1', '0%');
      grad.setAttribute('y1', '0%');
      grad.setAttribute('x2', '100%');
      grad.setAttribute('y2', '100%');
      const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop1.setAttribute('offset', '0%');
      stop1.setAttribute('stop-color', 'rgba(255, 255, 255, 0.75)');
      const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop2.setAttribute('offset', '100%');
      stop2.setAttribute('stop-color', 'rgba(255, 255, 255, 0.35)');
      grad.appendChild(stop1);
      grad.appendChild(stop2);
      defs.appendChild(grad);
      newSvg.appendChild(defs);
      bgRect.setAttribute('fill', 'url(#glass-bg-grad)');
    }

    // Draw white card container
    const cardRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    cardRect.setAttribute('x', cardX.toString());
    cardRect.setAttribute('y', cardY.toString());
    cardRect.setAttribute('width', cardSize.toString());
    cardRect.setAttribute('height', cardSize.toString());
    cardRect.setAttribute('rx', Math.round(qrRenderSize * 0.025).toString());
    cardRect.setAttribute('ry', Math.round(qrRenderSize * 0.025).toString());
    cardRect.setAttribute('fill', '#ffffff');
    newSvg.appendChild(cardRect);

    // QR Contents Group
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${qrX}, ${qrY})`);
    g.innerHTML = qrSvg.innerHTML;
    newSvg.appendChild(g);

    const fontSize = Math.round(qrRenderSize * 0.045);

    if (frameStyle === 'classic') {
      const r = Math.round(qrRenderSize * 0.045);
      const sw = Math.round(qrRenderSize * 0.012);
      const half = sw / 2;
      const pathD = `M ${half} ${labelY} L ${half} ${r} A ${r - half} ${r - half} 0 0 1 ${r} ${half} L ${totalWidth - r} ${half} A ${r - half} ${r - half} 0 0 1 ${totalWidth - half} ${r} L ${totalWidth - half} ${labelY}`;
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathD);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', frameColor);
      path.setAttribute('stroke-width', sw.toString());
      newSvg.appendChild(path);

      const labelD = `M 0 ${labelY} L ${totalWidth} ${labelY} L ${totalWidth} ${labelY + frameHeight - r} A ${r} ${r} 0 0 1 ${totalWidth - r} ${labelY + frameHeight} L ${r} ${labelY + frameHeight} A ${r} ${r} 0 0 1 0 ${labelY + frameHeight - r} Z`;
      const labelPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      labelPath.setAttribute('d', labelD);
      labelPath.setAttribute('fill', frameColor);
      newSvg.appendChild(labelPath);

      const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      svgText.setAttribute('x', (totalWidth / 2).toString());
      svgText.setAttribute('y', (labelY + (frameHeight / 2)).toString());
      svgText.setAttribute('fill', '#ffffff');
      svgText.setAttribute('font-family', 'Inter, sans-serif');
      svgText.setAttribute('font-weight', 'bold');
      svgText.setAttribute('font-size', fontSize.toString());
      svgText.setAttribute('text-anchor', 'middle');
      svgText.setAttribute('dominant-baseline', 'middle');
      svgText.textContent = frameText;
      newSvg.appendChild(svgText);
    } else if (frameStyle === 'capsule') {
      const borderStrokeWidth = Math.max(1, Math.round(qrRenderSize * 0.003));
      const outerBorder = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      outerBorder.setAttribute('x', (borderStrokeWidth / 2).toString());
      outerBorder.setAttribute('y', (borderStrokeWidth / 2).toString());
      outerBorder.setAttribute('width', (totalWidth - borderStrokeWidth).toString());
      outerBorder.setAttribute('height', (totalHeight - borderStrokeWidth).toString());
      outerBorder.setAttribute('rx', Math.round(qrRenderSize * 0.06).toString());
      outerBorder.setAttribute('ry', Math.round(qrRenderSize * 0.06).toString());
      outerBorder.setAttribute('fill', 'none');
      outerBorder.setAttribute('stroke', 'rgba(0,0,0,0.08)');
      outerBorder.setAttribute('stroke-width', borderStrokeWidth.toString());
      newSvg.appendChild(outerBorder);

      const pillWidth = Math.round(qrRenderSize * 0.65);
      const pillHeight = Math.round(frameHeight * 0.6);
      const pillX = (totalWidth - pillWidth) / 2;
      const pillY = labelY + (frameHeight - pillHeight) / 2;
      
      const pill = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      pill.setAttribute('x', pillX.toString());
      pill.setAttribute('y', pillY.toString());
      pill.setAttribute('width', pillWidth.toString());
      pill.setAttribute('height', pillHeight.toString());
      pill.setAttribute('rx', (pillHeight / 2).toString());
      pill.setAttribute('ry', (pillHeight / 2).toString());
      pill.setAttribute('fill', frameColor);
      newSvg.appendChild(pill);
      
      const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      svgText.setAttribute('x', (totalWidth / 2).toString());
      svgText.setAttribute('y', (pillY + (pillHeight / 2)).toString());
      svgText.setAttribute('fill', '#ffffff');
      svgText.setAttribute('font-family', 'Inter, sans-serif');
      svgText.setAttribute('font-weight', 'bold');
      svgText.setAttribute('font-size', fontSize.toString());
      svgText.setAttribute('text-anchor', 'middle');
      svgText.setAttribute('dominant-baseline', 'middle');
      svgText.textContent = frameText;
      newSvg.appendChild(svgText);
    } else if (frameStyle === 'minimal') {
      const borderStrokeWidth = Math.max(1, Math.round(qrRenderSize * 0.003));
      const outerBorder = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      outerBorder.setAttribute('x', (borderStrokeWidth / 2).toString());
      outerBorder.setAttribute('y', (borderStrokeWidth / 2).toString());
      outerBorder.setAttribute('width', (totalWidth - borderStrokeWidth).toString());
      outerBorder.setAttribute('height', (totalHeight - borderStrokeWidth).toString());
      outerBorder.setAttribute('rx', Math.round(qrRenderSize * 0.05).toString());
      outerBorder.setAttribute('ry', Math.round(qrRenderSize * 0.05).toString());
      outerBorder.setAttribute('fill', 'none');
      outerBorder.setAttribute('stroke', 'rgba(0,0,0,0.06)');
      outerBorder.setAttribute('stroke-width', borderStrokeWidth.toString());
      newSvg.appendChild(outerBorder);

      const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      svgText.setAttribute('x', (totalWidth / 2).toString());
      svgText.setAttribute('y', (labelY + (frameHeight / 2)).toString());
      svgText.setAttribute('fill', frameColor);
      svgText.setAttribute('font-family', 'Courier New, Courier, monospace');
      svgText.setAttribute('font-weight', 'bold');
      svgText.setAttribute('font-size', fontSize.toString());
      svgText.setAttribute('text-anchor', 'middle');
      svgText.setAttribute('dominant-baseline', 'middle');
      svgText.textContent = `● ${frameText} ●`;
      newSvg.appendChild(svgText);
    } else if (frameStyle === 'ticket') {
      const borderStrokeWidth = Math.round(qrRenderSize * 0.006);
      const outerBorder = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      outerBorder.setAttribute('x', (borderStrokeWidth / 2).toString());
      outerBorder.setAttribute('y', (borderStrokeWidth / 2).toString());
      outerBorder.setAttribute('width', (totalWidth - borderStrokeWidth).toString());
      outerBorder.setAttribute('height', (totalHeight - borderStrokeWidth).toString());
      outerBorder.setAttribute('rx', Math.round(qrRenderSize * 0.04).toString());
      outerBorder.setAttribute('ry', Math.round(qrRenderSize * 0.04).toString());
      outerBorder.setAttribute('fill', 'none');
      outerBorder.setAttribute('stroke', frameColor);
      outerBorder.setAttribute('stroke-width', borderStrokeWidth.toString());
      newSvg.appendChild(outerBorder);
      
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', outerPadding.toString());
      line.setAttribute('y1', (labelY - gap / 2).toString());
      line.setAttribute('x2', (totalWidth - outerPadding).toString());
      line.setAttribute('y2', (labelY - gap / 2).toString());
      line.setAttribute('stroke', frameColor);
      line.setAttribute('stroke-width', borderStrokeWidth.toString());
      line.setAttribute('stroke-dasharray', `${Math.round(qrRenderSize * 0.02)}, ${Math.round(qrRenderSize * 0.015)}`);
      newSvg.appendChild(line);
      
      const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      svgText.setAttribute('x', (totalWidth / 2).toString());
      svgText.setAttribute('y', (labelY + (frameHeight / 2)).toString());
      svgText.setAttribute('fill', frameColor);
      svgText.setAttribute('font-family', 'Inter, sans-serif');
      svgText.setAttribute('font-weight', 'bold');
      svgText.setAttribute('font-size', fontSize.toString());
      svgText.setAttribute('text-anchor', 'middle');
      svgText.setAttribute('dominant-baseline', 'middle');
      svgText.textContent = frameText;
      newSvg.appendChild(svgText);
    } else if (frameStyle === 'pointer') {
      const borderStrokeWidth = Math.max(1, Math.round(qrRenderSize * 0.003));
      const outerBorder = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      outerBorder.setAttribute('x', (borderStrokeWidth / 2).toString());
      outerBorder.setAttribute('y', (borderStrokeWidth / 2).toString());
      outerBorder.setAttribute('width', (totalWidth - borderStrokeWidth).toString());
      outerBorder.setAttribute('height', (totalHeight - borderStrokeWidth).toString());
      outerBorder.setAttribute('rx', Math.round(qrRenderSize * 0.05).toString());
      outerBorder.setAttribute('ry', Math.round(qrRenderSize * 0.05).toString());
      outerBorder.setAttribute('fill', 'none');
      outerBorder.setAttribute('stroke', 'rgba(0,0,0,0.06)');
      outerBorder.setAttribute('stroke-width', borderStrokeWidth.toString());
      newSvg.appendChild(outerBorder);

      const bubbleWidth = Math.round(qrRenderSize * 0.7);
      const bubbleHeight = Math.round(frameHeight * 0.6);
      const bubbleX = (totalWidth - bubbleWidth) / 2;
      const bubbleY = labelY + (frameHeight - bubbleHeight) / 2;

      const bubble = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      bubble.setAttribute('x', bubbleX.toString());
      bubble.setAttribute('y', bubbleY.toString());
      bubble.setAttribute('width', bubbleWidth.toString());
      bubble.setAttribute('height', bubbleHeight.toString());
      bubble.setAttribute('rx', (bubbleHeight * 0.25).toString());
      bubble.setAttribute('ry', (bubbleHeight * 0.25).toString());
      bubble.setAttribute('fill', frameColor);
      newSvg.appendChild(bubble);

      const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      const x1 = totalWidth / 2 - Math.round(qrRenderSize * 0.025);
      const x2 = totalWidth / 2;
      const x3 = totalWidth / 2 + Math.round(qrRenderSize * 0.025);
      const y1 = bubbleY;
      const y2 = bubbleY - Math.round(qrRenderSize * 0.02);
      const y3 = bubbleY;
      arrow.setAttribute('points', `${x1},${y1} ${x2},${y2} ${x3},${y3}`);
      arrow.setAttribute('fill', frameColor);
      newSvg.appendChild(arrow);

      const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      svgText.setAttribute('x', (totalWidth / 2).toString());
      svgText.setAttribute('y', (bubbleY + (bubbleHeight / 2)).toString());
      svgText.setAttribute('fill', '#ffffff');
      svgText.setAttribute('font-family', 'Inter, sans-serif');
      svgText.setAttribute('font-weight', 'bold');
      svgText.setAttribute('font-size', fontSize.toString());
      svgText.setAttribute('text-anchor', 'middle');
      svgText.setAttribute('dominant-baseline', 'middle');
      svgText.textContent = frameText;
      newSvg.appendChild(svgText);
    } else if (frameStyle === 'phone') {
      const bezel = Math.round(qrRenderSize * 0.04);
      const padBottom = Math.round(qrRenderSize * 0.16);
      
      const phoneFrame = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      phoneFrame.setAttribute('x', (bezel / 2).toString());
      phoneFrame.setAttribute('y', (bezel / 2).toString());
      phoneFrame.setAttribute('width', (totalWidth - bezel).toString());
      phoneFrame.setAttribute('height', (totalHeight - bezel).toString());
      phoneFrame.setAttribute('rx', Math.round(qrRenderSize * 0.08).toString());
      phoneFrame.setAttribute('ry', Math.round(qrRenderSize * 0.08).toString());
      phoneFrame.setAttribute('fill', 'none');
      phoneFrame.setAttribute('stroke', '#1f1f1f');
      phoneFrame.setAttribute('stroke-width', bezel.toString());
      newSvg.appendChild(phoneFrame);

      const islandWidth = Math.round(qrRenderSize * 0.22);
      const islandHeight = Math.round(qrRenderSize * 0.04);
      const island = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      island.setAttribute('x', ((totalWidth - islandWidth) / 2).toString());
      island.setAttribute('y', (bezel * 0.8).toString());
      island.setAttribute('width', islandWidth.toString());
      island.setAttribute('height', islandHeight.toString());
      island.setAttribute('rx', (islandHeight / 2).toString());
      island.setAttribute('ry', (islandHeight / 2).toString());
      island.setAttribute('fill', '#000000');
      newSvg.appendChild(island);

      const homeWidth = Math.round(qrRenderSize * 0.2);
      const homeHeight = Math.round(qrRenderSize * 0.01);
      const homeBar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      homeBar.setAttribute('x', ((totalWidth - homeWidth) / 2).toString());
      homeBar.setAttribute('y', (totalHeight - bezel - Math.round(qrRenderSize * 0.03)).toString());
      homeBar.setAttribute('width', homeWidth.toString());
      homeBar.setAttribute('height', homeHeight.toString());
      homeBar.setAttribute('rx', (homeHeight / 2).toString());
      homeBar.setAttribute('ry', (homeHeight / 2).toString());
      homeBar.setAttribute('fill', '#d4d4d4');
      newSvg.appendChild(homeBar);
      
      const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      svgText.setAttribute('x', (totalWidth / 2).toString());
      svgText.setAttribute('y', (totalHeight - bezel - (padBottom / 2)).toString());
      svgText.setAttribute('fill', frameColor);
      svgText.setAttribute('font-family', 'Inter, sans-serif');
      svgText.setAttribute('font-weight', 'bold');
      svgText.setAttribute('font-size', fontSize.toString());
      svgText.setAttribute('text-anchor', 'middle');
      svgText.setAttribute('dominant-baseline', 'middle');
      svgText.textContent = frameText;
      newSvg.appendChild(svgText);
    } else if (frameStyle === 'shadow') {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
      filter.setAttribute('id', 'shadow-filter');
      
      const feDropShadow = document.createElementNS('http://www.w3.org/2000/svg', 'feDropShadow');
      feDropShadow.setAttribute('dx', '0');
      feDropShadow.setAttribute('dy', Math.round(qrRenderSize * 0.03).toString());
      feDropShadow.setAttribute('stdDeviation', Math.round(qrRenderSize * 0.04).toString());
      feDropShadow.setAttribute('flood-color', '#000000');
      feDropShadow.setAttribute('flood-opacity', '0.06');
      
      filter.appendChild(feDropShadow);
      defs.appendChild(filter);
      newSvg.appendChild(defs);
      
      bgRect.setAttribute('filter', 'url(#shadow-filter)');
      bgRect.setAttribute('stroke', 'rgba(0,0,0,0.04)');
      bgRect.setAttribute('stroke-width', '1');
      bgRect.setAttribute('rx', Math.round(qrRenderSize * 0.05).toString());
      bgRect.setAttribute('ry', Math.round(qrRenderSize * 0.05).toString());
      
      const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      svgText.setAttribute('x', (totalWidth / 2).toString());
      svgText.setAttribute('y', (labelY + (frameHeight / 2)).toString());
      svgText.setAttribute('fill', frameColor);
      svgText.setAttribute('font-family', 'Inter, sans-serif');
      svgText.setAttribute('font-weight', 'bold');
      svgText.setAttribute('font-size', fontSize.toString());
      svgText.setAttribute('text-anchor', 'middle');
      svgText.setAttribute('dominant-baseline', 'middle');
      svgText.textContent = frameText;
      newSvg.appendChild(svgText);
    } else if (frameStyle === 'top-bottom') {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const r = Math.round(qrRenderSize * 0.04);
      
      const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
      grad.setAttribute('id', 'tb-banner-grad');
      grad.setAttribute('x1', '0%');
      grad.setAttribute('y1', '0%');
      grad.setAttribute('x2', '100%');
      grad.setAttribute('y2', '0%');
      const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop1.setAttribute('offset', '0%');
      stop1.setAttribute('stop-color', frameColor);
      const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop2.setAttribute('offset', '100%');
      stop2.setAttribute('stop-color', frameColor + 'dd');
      grad.appendChild(stop1);
      grad.appendChild(stop2);
      defs.appendChild(grad);
      newSvg.appendChild(defs);

      bgRect.setAttribute('rx', r.toString());
      bgRect.setAttribute('ry', r.toString());

      const topBarDPath = `M 0 ${frameHeight} L 0 ${r} A ${r} ${r} 0 0 1 ${r} 0 L ${totalWidth - r} 0 A ${r} ${r} 0 0 1 ${totalWidth} ${r} L ${totalWidth} ${frameHeight} Z`;
      const topBar = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      topBar.setAttribute('d', topBarDPath);
      topBar.setAttribute('fill', 'url(#tb-banner-grad)');
      newSvg.appendChild(topBar);
      
      const bottomBarDPath = `M 0 ${totalHeight - frameHeight} L ${totalWidth} ${totalHeight - frameHeight} L ${totalWidth} ${totalHeight - r} A ${r} ${r} 0 0 1 ${totalWidth - r} ${totalHeight} L ${r} ${totalHeight} A ${r} ${r} 0 0 1 0 ${totalHeight - r} Z`;
      const bottomBar = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      bottomBar.setAttribute('d', bottomBarDPath);
      bottomBar.setAttribute('fill', 'url(#tb-banner-grad)');
      newSvg.appendChild(bottomBar);
      
      const topSvgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      topSvgText.setAttribute('x', (totalWidth / 2).toString());
      topSvgText.setAttribute('y', (frameHeight / 2).toString());
      topSvgText.setAttribute('fill', '#ffffff');
      topSvgText.setAttribute('font-family', 'Inter, sans-serif');
      topSvgText.setAttribute('font-weight', 'bold');
      topSvgText.setAttribute('font-size', fontSize.toString());
      topSvgText.setAttribute('text-anchor', 'middle');
      topSvgText.setAttribute('dominant-baseline', 'middle');
      topSvgText.textContent = frameTopText;
      newSvg.appendChild(topSvgText);
      
      const bottomSvgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      bottomSvgText.setAttribute('x', (totalWidth / 2).toString());
      bottomSvgText.setAttribute('y', (totalHeight - (frameHeight / 2)).toString());
      bottomSvgText.setAttribute('fill', '#ffffff');
      bottomSvgText.setAttribute('font-family', 'Inter, sans-serif');
      bottomSvgText.setAttribute('font-weight', 'bold');
      bottomSvgText.setAttribute('font-size', fontSize.toString());
      bottomSvgText.setAttribute('text-anchor', 'middle');
      bottomSvgText.setAttribute('dominant-baseline', 'middle');
      bottomSvgText.textContent = frameText;
      newSvg.appendChild(bottomSvgText);
    } else if (frameStyle === 'glassmorphic') {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
      filter.setAttribute('id', 'glass-shadow');
      const feDropShadow = document.createElementNS('http://www.w3.org/2000/svg', 'feDropShadow');
      feDropShadow.setAttribute('dx', '0');
      feDropShadow.setAttribute('dy', Math.round(qrRenderSize * 0.02).toString());
      feDropShadow.setAttribute('stdDeviation', Math.round(qrRenderSize * 0.03).toString());
      feDropShadow.setAttribute('flood-color', '#000000');
      feDropShadow.setAttribute('flood-opacity', '0.08');
      filter.appendChild(feDropShadow);
      defs.appendChild(filter);
      newSvg.appendChild(defs);

      bgRect.setAttribute('stroke', 'rgba(255, 255, 255, 0.9)');
      bgRect.setAttribute('stroke-width', Math.max(1, Math.round(qrRenderSize * 0.003)).toString());
      bgRect.setAttribute('rx', Math.round(qrRenderSize * 0.04).toString());
      bgRect.setAttribute('ry', Math.round(qrRenderSize * 0.04).toString());
      bgRect.setAttribute('filter', 'url(#glass-shadow)');

      const reflection = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      reflection.setAttribute('x1', '0');
      reflection.setAttribute('y1', '0');
      reflection.setAttribute('x2', totalWidth.toString());
      reflection.setAttribute('y2', totalHeight.toString());
      reflection.setAttribute('stroke', 'rgba(255, 255, 255, 0.2)');
      reflection.setAttribute('stroke-width', Math.round(qrRenderSize * 0.015).toString());
      newSvg.appendChild(reflection);

      const pillWidth = Math.round(qrRenderSize * 0.6);
      const pillHeight = Math.round(frameHeight * 0.55);
      const pillX = (totalWidth - pillWidth) / 2;
      const pillY = labelY + (frameHeight - pillHeight) / 2;
      const pill = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      pill.setAttribute('x', pillX.toString());
      pill.setAttribute('y', pillY.toString());
      pill.setAttribute('width', pillWidth.toString());
      pill.setAttribute('height', pillHeight.toString());
      pill.setAttribute('rx', (pillHeight / 2).toString());
      pill.setAttribute('ry', (pillHeight / 2).toString());
      pill.setAttribute('fill', frameColor);
      newSvg.appendChild(pill);

      const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      svgText.setAttribute('x', (totalWidth / 2).toString());
      svgText.setAttribute('y', (pillY + (pillHeight / 2)).toString());
      svgText.setAttribute('fill', '#ffffff');
      svgText.setAttribute('font-family', 'Inter, sans-serif');
      svgText.setAttribute('font-weight', 'bold');
      svgText.setAttribute('font-size', fontSize.toString());
      svgText.setAttribute('text-anchor', 'middle');
      svgText.setAttribute('dominant-baseline', 'middle');
      svgText.textContent = frameText;
      newSvg.appendChild(svgText);
    } else if (frameStyle === 'neon') {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      
      const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
      grad.setAttribute('id', 'neon-grad');
      grad.setAttribute('x1', '0%');
      grad.setAttribute('y1', '0%');
      grad.setAttribute('x2', '100%');
      grad.setAttribute('y2', '100%');
      const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop1.setAttribute('offset', '0%');
      stop1.setAttribute('stop-color', frameColor);
      const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop2.setAttribute('offset', '100%');
      stop2.setAttribute('stop-color', '#00f2fe');
      grad.appendChild(stop1);
      grad.appendChild(stop2);
      defs.appendChild(grad);
      
      const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
      filter.setAttribute('id', 'neon-glow');
      const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
      feGaussianBlur.setAttribute('stdDeviation', Math.round(qrRenderSize * 0.015).toString());
      feGaussianBlur.setAttribute('result', 'coloredBlur');
      const feMerge = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
      const node1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
      node1.setAttribute('in', 'coloredBlur');
      const node2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
      node2.setAttribute('in', 'SourceGraphic');
      feMerge.appendChild(node1);
      feMerge.appendChild(node2);
      filter.appendChild(feGaussianBlur);
      filter.appendChild(feMerge);
      defs.appendChild(filter);
      
      newSvg.appendChild(defs);

      bgRect.setAttribute('rx', Math.round(qrRenderSize * 0.04).toString());
      bgRect.setAttribute('ry', Math.round(qrRenderSize * 0.04).toString());

      const neonBorderWidth = Math.round(qrRenderSize * 0.012);
      const neonRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      neonRect.setAttribute('x', (neonBorderWidth / 2).toString());
      neonRect.setAttribute('y', (neonBorderWidth / 2).toString());
      neonRect.setAttribute('width', (totalWidth - neonBorderWidth).toString());
      neonRect.setAttribute('height', (totalHeight - neonBorderWidth).toString());
      neonRect.setAttribute('rx', Math.round(qrRenderSize * 0.04).toString());
      neonRect.setAttribute('ry', Math.round(qrRenderSize * 0.04).toString());
      neonRect.setAttribute('fill', 'none');
      neonRect.setAttribute('stroke', 'url(#neon-grad)');
      neonRect.setAttribute('stroke-width', neonBorderWidth.toString());
      neonRect.setAttribute('filter', 'url(#neon-glow)');
      newSvg.appendChild(neonRect);

      const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      svgText.setAttribute('x', (totalWidth / 2).toString());
      svgText.setAttribute('y', (labelY + (frameHeight / 2)).toString());
      svgText.setAttribute('fill', '#ffffff');
      svgText.setAttribute('font-family', 'Courier New, Courier, monospace');
      svgText.setAttribute('font-weight', 'bold');
      svgText.setAttribute('font-size', fontSize.toString());
      svgText.setAttribute('letter-spacing', '3');
      svgText.setAttribute('text-anchor', 'middle');
      svgText.setAttribute('dominant-baseline', 'middle');
      svgText.setAttribute('filter', 'url(#neon-glow)');
      svgText.textContent = frameText;
      newSvg.appendChild(svgText);
    } else if (frameStyle === 'viewfinder') {
      const bracketSize = Math.round(qrRenderSize * 0.08);
      const bracketWidth = Math.max(2, Math.round(qrRenderSize * 0.012));
      
      const vx1 = cardX - cardPadding / 2;
      const vy1 = cardY - cardPadding / 2;
      const vx2 = cardX + cardSize + cardPadding / 2;
      const vy2 = cardY + cardSize + cardPadding / 2;

      const corners = [
        `M ${vx1 + bracketSize} ${vy1} L ${vx1} ${vy1} L ${vx1} ${vy1 + bracketSize}`,
        `M ${vx2 - bracketSize} ${vy1} L ${vx2} ${vy1} L ${vx2} ${vy1 + bracketSize}`,
        `M ${vx1 + bracketSize} ${vy2} L ${vx1} ${vy2} L ${vx1} ${vy2 - bracketSize}`,
        `M ${vx2 - bracketSize} ${vy2} L ${vx2} ${vy2} L ${vx2} ${vy2 - bracketSize}`
      ];
      
      corners.forEach(dVal => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', dVal);
        path.setAttribute('stroke', frameColor);
        path.setAttribute('stroke-width', bracketWidth.toString());
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('fill', 'none');
        newSvg.appendChild(path);
      });

      const recDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      recDot.setAttribute('cx', (vx1 + cardPadding).toString());
      recDot.setAttribute('cy', (vy1 + cardPadding).toString());
      recDot.setAttribute('r', Math.round(qrRenderSize * 0.012).toString());
      recDot.setAttribute('fill', '#f43f5e');
      newSvg.appendChild(recDot);

      const recText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      recText.setAttribute('x', (vx1 + cardPadding * 2.2).toString());
      recText.setAttribute('y', (vy1 + cardPadding).toString());
      recText.setAttribute('fill', frameColor);
      recText.setAttribute('font-family', 'Courier New, Courier, monospace');
      recText.setAttribute('font-size', Math.round(qrRenderSize * 0.03).toString());
      recText.setAttribute('dominant-baseline', 'middle');
      recText.textContent = 'REC';
      newSvg.appendChild(recText);

      const rawText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      rawText.setAttribute('x', (vx2 - cardPadding).toString());
      rawText.setAttribute('y', (vy1 + cardPadding).toString());
      rawText.setAttribute('fill', frameColor);
      rawText.setAttribute('font-family', 'Courier New, Courier, monospace');
      rawText.setAttribute('font-size', Math.round(qrRenderSize * 0.03).toString());
      rawText.setAttribute('text-anchor', 'end');
      rawText.setAttribute('dominant-baseline', 'middle');
      rawText.textContent = 'RAW 12-BIT';
      newSvg.appendChild(rawText);

      const fText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      fText.setAttribute('x', (vx1 + cardPadding).toString());
      fText.setAttribute('y', (vy2 - cardPadding).toString());
      fText.setAttribute('fill', frameColor);
      fText.setAttribute('font-family', 'Courier New, Courier, monospace');
      fText.setAttribute('font-size', Math.round(qrRenderSize * 0.03).toString());
      fText.setAttribute('dominant-baseline', 'middle');
      fText.textContent = 'F:1.8';
      newSvg.appendChild(fText);

      const isoText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      isoText.setAttribute('x', (totalWidth / 2).toString());
      isoText.setAttribute('y', (vy2 - cardPadding).toString());
      isoText.setAttribute('fill', frameColor);
      isoText.setAttribute('font-family', 'Courier New, Courier, monospace');
      isoText.setAttribute('font-size', Math.round(qrRenderSize * 0.03).toString());
      isoText.setAttribute('text-anchor', 'middle');
      isoText.setAttribute('dominant-baseline', 'middle');
      isoText.textContent = 'ISO 200';
      newSvg.appendChild(isoText);

      const expText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      expText.setAttribute('x', (vx2 - cardPadding).toString());
      expText.setAttribute('y', (vy2 - cardPadding).toString());
      expText.setAttribute('fill', frameColor);
      expText.setAttribute('font-family', 'Courier New, Courier, monospace');
      expText.setAttribute('font-size', Math.round(qrRenderSize * 0.03).toString());
      expText.setAttribute('text-anchor', 'end');
      expText.setAttribute('dominant-baseline', 'middle');
      expText.textContent = '1/125s';
      newSvg.appendChild(expText);

      const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      svgText.setAttribute('x', (totalWidth / 2).toString());
      svgText.setAttribute('y', (labelY + (frameHeight / 2)).toString());
      svgText.setAttribute('fill', frameColor);
      svgText.setAttribute('font-family', 'Courier New, Courier, monospace');
      svgText.setAttribute('font-weight', 'bold');
      svgText.setAttribute('font-size', fontSize.toString());
      svgText.setAttribute('text-anchor', 'middle');
      svgText.setAttribute('dominant-baseline', 'middle');
      svgText.textContent = `[○] ${frameText}`;
      newSvg.appendChild(svgText);
    } else if (frameStyle === 'stamp') {
      const stampStroke = Math.round(qrRenderSize * 0.015);
      const stampRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      stampRect.setAttribute('x', (stampStroke / 2).toString());
      stampRect.setAttribute('y', (stampStroke / 2).toString());
      stampRect.setAttribute('width', (totalWidth - stampStroke).toString());
      stampRect.setAttribute('height', (totalHeight - stampStroke).toString());
      stampRect.setAttribute('rx', Math.round(qrRenderSize * 0.02).toString());
      stampRect.setAttribute('ry', Math.round(qrRenderSize * 0.02).toString());
      stampRect.setAttribute('fill', 'none');
      stampRect.setAttribute('stroke', frameColor);
      stampRect.setAttribute('stroke-width', stampStroke.toString());
      stampRect.setAttribute('stroke-dasharray', `${Math.round(qrRenderSize * 0.005)}, ${Math.round(qrRenderSize * 0.02)}`);
      newSvg.appendChild(stampRect);

      const barcodeY = labelY + Math.round(frameHeight * 0.1);
      const barcodeH = Math.round(frameHeight * 0.35);
      const barcodeW = Math.round(qrRenderSize * 0.6);
      const startX = (totalWidth - barcodeW) / 2;

      const barcodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      let currX = startX;
      let index = 0;
      while (currX < startX + barcodeW) {
        const w = (index % 3 === 0) ? Math.round(qrRenderSize * 0.008) : (index % 5 === 0) ? Math.round(qrRenderSize * 0.003) : Math.round(qrRenderSize * 0.005);
        const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bar.setAttribute('x', currX.toString());
        bar.setAttribute('y', barcodeY.toString());
        bar.setAttribute('width', w.toString());
        bar.setAttribute('height', barcodeH.toString());
        bar.setAttribute('fill', frameColor);
        barcodeGroup.appendChild(bar);
        currX += w + Math.round(qrRenderSize * 0.005);
        index++;
      }
      newSvg.appendChild(barcodeGroup);

      const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      svgText.setAttribute('x', (totalWidth / 2).toString());
      svgText.setAttribute('y', (labelY + Math.round(frameHeight * 0.75)).toString());
      svgText.setAttribute('fill', frameColor);
      svgText.setAttribute('font-family', 'Inter, sans-serif');
      svgText.setAttribute('font-weight', 'bold');
      svgText.setAttribute('font-size', fontSize.toString());
      svgText.setAttribute('text-anchor', 'middle');
      svgText.setAttribute('dominant-baseline', 'middle');
      svgText.textContent = frameText;
      newSvg.appendChild(svgText);
    }

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
        showToast(ui.scanner.noQrDetected, true);
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
      showToast(ui.bulk.emptyError, true);
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
        
        const options = qrCodeInstance?._options || qrCodeInstance?.options;
        const bulkItemQr = new QRCodeStyling({
          width: qrSize,
          height: qrSize,
          type: 'canvas', // Use canvas to ensure raw PNG blob generation is reliable
          data: content,
          qrOptions: {
            errorCorrectionLevel: eccLevel
          },
          dotsOptions: options?.dotsOptions || defaultDotsOptions,
          backgroundOptions: options?.backgroundOptions || defaultBackgroundOptions,
          cornersSquareOptions: options?.cornersSquareOptions || defaultCornersSquareOptions,
          cornersDotOptions: options?.cornersDotOptions || defaultCornersDotOptions,
          imageOptions: options?.imageOptions || { crossOrigin: 'anonymous', margin: 6, imageSize: logoSize }
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
      showToast(ui.bulk.zipError, true);
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
  const clearBtn = document.getElementById('clear-all-history-btn');
  if (!container) return;

  const historyCards = container.querySelectorAll('.history-card');
  historyCards.forEach(c => c.remove());

  const historyStr = localStorage.getItem('qr_history') || '[]';
  const history = JSON.parse(historyStr);

  if (history.length === 0) {
    emptyState?.classList.remove('hidden');
    clearBtn?.classList.add('hidden');
    return;
  }

  emptyState?.classList.add('hidden');
  clearBtn?.classList.remove('hidden');

  history.forEach((item: any) => {
    const card = document.createElement('div');
    card.className = 'history-card glass-card rounded-xl p-4 flex gap-4 items-center group premium-hover border border-hairline';
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
      showToast(ui.history.itemRemovedToast);
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
    showToast(ui.history.configRecalled);
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

// Bulk CSV/TXT file drop & parser initialization
const bulkDropZone = document.getElementById('bulk-drop-zone');
const bulkFileInput = document.getElementById('bulk-file-input') as HTMLInputElement;
const bulkInputLinks = document.getElementById('bulk-input-links') as HTMLTextAreaElement;
const bulkFileName = document.getElementById('bulk-file-name');

if (bulkDropZone && bulkFileInput && bulkInputLinks && bulkFileName) {
  bulkDropZone.addEventListener('click', () => bulkFileInput.click());

  bulkFileInput.addEventListener('change', (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) handleBulkFile(file);
  });

  bulkDropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    bulkDropZone.classList.add('border-[#ff1b6b]', 'bg-canvas-soft-2');
  });

  ['dragleave', 'dragend'].forEach(evt => {
    bulkDropZone.addEventListener(evt, () => {
      bulkDropZone.classList.remove('border-[#ff1b6b]', 'bg-canvas-soft-2');
    });
  });

  bulkDropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    bulkDropZone.classList.remove('border-[#ff1b6b]', 'bg-canvas-soft-2');
    const file = e.dataTransfer?.files?.[0];
    if (file) handleBulkFile(file);
  });

  function handleBulkFile(file: File) {
    if (!file.name.endsWith('.txt') && !file.name.endsWith('.csv')) {
      showToast(ui.bulk.invalidFile, true);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      if (text) {
        bulkInputLinks.value = text;
        const count = text.split(/\r?\n/).filter(Boolean).length;
        bulkFileName.textContent = `Uploaded: ${file.name} (${count} items found)`;
        showToast(ui.bulk.fileLoaded);
      }
    };
    reader.readAsText(file);
  }
}

// Clear all history listener
const clearHistoryBtn = document.getElementById('clear-all-history-btn');
if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener('click', () => {
    if (confirm(ui.history.confirmClear)) {
      localStorage.removeItem('qr_history');
      renderHistory();
      showToast(ui.history.clearedToast);
    }
  });
}

// Developer API mockup language tab switcher
const apiTabs = document.querySelectorAll('.api-lang-tab');
const codeBlocks = document.querySelectorAll('.api-code-block');
const activeFileSpan = document.getElementById('api-active-filename');

const filenames: Record<string, string> = {
  js: 'qr-generator-client.js',
  python: 'generate_qr.py',
  curl: 'request_qr.sh',
  go: 'main.go'
};

apiTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    apiTabs.forEach(t => {
      t.classList.remove('text-[#ff1b6b]', 'border-b-2', 'border-[#ff1b6b]');
      t.classList.add('text-mute');
    });
    tab.classList.remove('text-mute');
    tab.classList.add('text-[#ff1b6b]', 'border-b-2', 'border-[#ff1b6b]');

    const lang = tab.getAttribute('data-lang') || 'js';
    if (activeFileSpan) activeFileSpan.textContent = filenames[lang];

    codeBlocks.forEach(block => {
      if (block.getAttribute('data-lang') === lang) {
        block.classList.remove('hidden');
      } else {
        block.classList.add('hidden');
      }
    });
  });
});

