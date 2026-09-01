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

// Check if a hex color is dark based on perceived luminance
function isDarkHex(hex: string): boolean {
  if (!hex) return false;
  let c = hex.replace('#', '').trim();
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  if (c.length !== 6) return false;
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return false;
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return yiq < 128;
}

// Calculate the appropriate contrast color (white or dark) for monochromatic icons
function getContrastIconColor(): string {
  // If a frame is active, determine contrast based on frame background color
  if (activeLogoFrame === 'circle' || activeLogoFrame === 'square') {
    return isDarkHex(logoFrameColor) ? '#ffffff' : '#171717';
  }
  if (activeLogoFrame === 'glass') {
    return '#171717';
  }
  // If no frame is active, determine contrast based on QR code background color or dark mode
  if (bgColor && bgColor !== 'transparent') {
    return isDarkHex(bgColor) ? '#ffffff' : '#171717';
  }
  const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
  return isDark ? '#ffffff' : '#171717';
}

// Generate dynamic preset SVG data URIs (high-resolution vectors with theme contrast)
function getPresetLogoSvg(preset: string): string | null {
  const iconColor = getContrastIconColor();

  switch (preset) {
    case 'link':
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      `.trim())}`;

    case 'wifi':
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 20h.01" />
          <path d="M8.5 16.9a5 5 0 0 1 7 0" />
          <path d="M5 12.86a10 10 0 0 1 14 0" />
          <path d="M2 8.82a15 15 0 0 1 20 0" />
        </svg>
      `.trim())}`;

    case 'vcard':
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      `.trim())}`;

    case 'whatsapp':
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="#25D366" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z" />
          <path fill="#FFFFFF" d="M17.52 14.33C17.22 14.18 15.76 13.46 15.49 13.36C15.22 13.26 15.02 13.21 14.82 13.51C14.62 13.81 14.05 14.48 13.88 14.68C13.71 14.88 13.54 14.9 13.24 14.75C12.94 14.6 11.98 14.29 10.84 13.28C9.96 12.49 9.36 11.52 9.19 11.22C9.02 10.92 9.17 10.76 9.32 10.61C9.45 10.48 9.61 10.27 9.76 10.1C9.91 9.93 9.96 9.81 10.06 9.61C10.16 9.41 10.11 9.24 10.03 9.09C9.96 8.94 9.36 7.47 9.11 6.88C8.87 6.3 8.63 6.38 8.44 6.37C8.27 6.36 8.07 6.36 7.87 6.36C7.67 6.36 7.35 6.43 7.08 6.73C6.81 7.03 6.04 7.75 6.04 9.21C6.04 10.67 7.1 12.08 7.25 12.28C7.4 12.48 9.34 15.48 12.32 16.77C13.03 17.08 13.58 17.26 14.01 17.4C14.72 17.63 15.37 17.6 15.88 17.52C16.45 17.43 17.64 16.8 17.89 16.1C18.14 15.4 18.14 14.81 18.06 14.68C17.98 14.55 17.78 14.48 17.48 14.33H17.52Z" />
        </svg>
      `.trim())}`;

    case 'email':
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      `.trim())}`;

    case 'phone':
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      `.trim())}`;

    case 'crypto':
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
        </svg>
      `.trim())}`;

    case 'instagram':
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#fdf497" />
              <stop offset="5%" stop-color="#fdf497" />
              <stop offset="45%" stop-color="#fd5949" />
              <stop offset="60%" stop-color="#d6249f" />
              <stop offset="90%" stop-color="#285AEB" />
            </linearGradient>
          </defs>
          <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
          <path fill="#ffffff" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      `.trim())}`;

    case 'facebook':
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
          <path fill="#FFFFFF" d="M16.671 15.563l.532-3.49h-3.328v-2.264c0-.956.465-1.886 1.956-1.886h1.516V4.952s-1.374-.236-2.686-.236c-2.741 0-4.533 1.672-4.533 4.697v2.66H7.078v3.49h3.047V24c.618.097 1.25.147 1.875.147s1.257-.05 1.875-.147v-8.437h2.796z"/>
        </svg>
      `.trim())}`;

    case 'youtube':
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="#FF0000" d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837z" />
          <polygon fill="#FFFFFF" points="9.545,15.568 15.818,12 9.545,8.432" />
        </svg>
      `.trim())}`;

    case 'twitter':
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${iconColor}">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      `.trim())}`;

    case 'linkedin':
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      `.trim())}`;

    case 'google':
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
        </svg>
      `.trim())}`;

    case 'trustpilot':
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <polygon points="12,0.8 15.3,8.7 23.8,9.4 17.3,14.9 19.3,23.2 12,18.7 4.7,23.2 6.7,14.9 0.2,9.4 8.7,8.7" fill="#00b67a"/>
          <polygon points="12,12.5 12,18.7 19.3,23.2 17.3,14.9" fill="#005128"/>
        </svg>
      `.trim())}`;

    case 'yelp':
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D32323">
          <path d="M12 1.3c-.5 0-1 .3-1.2.8l-2.3 4.7-5.2.8c-.6.1-1 .6-.8 1.2l3.8 3.7-.9 5.2c-.1.6.4 1.1 1 .9l4.6-2.4 4.6 2.4c.5.3 1.1-.1 1-.9l-.9-5.2 3.8-3.7c.4-.5.2-1.1-.4-1.2l-5.2-.8-2.3-4.7c-.2-.5-.7-.8-1.2-.8z"/>
        </svg>
      `.trim())}`;

    default:
      return null;
  }
}

// Backward compatible SVG_LOGOS getter
const SVG_LOGOS: Record<string, string> = new Proxy({}, {
  get: (_, prop: string) => getPresetLogoSvg(prop) || ''
});

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
    return getPresetLogoSvg(activeLogoPreset);
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

// Helper to determine readable text contrast against background color
function getContrastColor(hexColor: string): string {
  if (!hexColor || hexColor === 'transparent') return '#ffffff';
  const hex = hexColor.replace('#', '');
  if (hex.length === 6) {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.65 ? '#0c0c14' : '#ffffff';
  } else if (hex.length === 3) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.65 ? '#0c0c14' : '#ffffff';
  }
  return '#ffffff';
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
  frameWrapper.className = "w-full flex flex-col items-center justify-center p-5 rounded-2xl border border-hairline bg-white/70 dark:bg-canvas-soft-2/80 backdrop-blur-md shadow-sm transition-all duration-200";
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

  const labelTextColor = getContrastColor(frameColor);

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
    frameLabel.style.color = labelTextColor;
    frameLabel.classList.remove('hidden');
    frameLabel.style.borderRadius = '0 0 16px 16px';
    frameLabel.style.marginTop = '12px';
    frameLabel.style.letterSpacing = '1px';
    frameLabel.style.fontWeight = 'bold';
    if (frameTopLabel) frameTopLabel.classList.add('hidden');
  } else if (frameStyle === 'capsule') {
    frameWrapper.style.border = '1px solid var(--hairline-strong)';
    frameWrapper.style.borderRadius = '20px';
    frameWrapper.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.04)';
    frameWrapper.style.padding = '24px 20px';
    
    frameLabel.style.backgroundColor = frameColor;
    frameLabel.style.color = labelTextColor;
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
    frameWrapper.style.border = '1px solid var(--hairline)';
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
    frameWrapper.style.border = '1px solid var(--hairline)';
    frameWrapper.style.borderRadius = '16px';
    frameWrapper.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.04)';
    
    frameLabel.style.backgroundColor = frameColor;
    frameLabel.style.color = labelTextColor;
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
    frameWrapper.style.border = `10px solid #1a1a24`;
    frameWrapper.style.borderRadius = '32px';
    frameWrapper.style.padding = '28px 16px 16px 16px';
    frameWrapper.style.boxShadow = '0 15px 45px rgba(0, 0, 0, 0.15)';
    frameWrapper.style.position = 'relative';

    const dynamicIsland = document.createElement('div');
    dynamicIsland.id = 'phone-notch';
    dynamicIsland.className = 'absolute top-2.5 left-1/2 -translate-x-1/2 bg-black h-4 rounded-full select-none';
    dynamicIsland.style.width = '75px';
    dynamicIsland.style.boxShadow = 'inset 0 0 3px rgba(255,255,255,0.1)';
    frameWrapper.appendChild(dynamicIsland);

    const homeIndicator = document.createElement('div');
    homeIndicator.id = 'phone-home-indicator';
    homeIndicator.className = 'absolute bottom-1.5 left-1/2 -translate-x-1/2 bg-neutral-400/60 h-1 rounded-full select-none';
    homeIndicator.style.width = '60px';
    frameWrapper.appendChild(homeIndicator);

    frameLabel.style.backgroundColor = 'transparent';
    frameLabel.style.color = frameColor;
    frameLabel.style.fontWeight = 'bold';
    frameLabel.style.marginTop = '12px';
    frameLabel.style.letterSpacing = '1px';
    frameLabel.classList.remove('hidden');
    if (frameTopLabel) frameTopLabel.classList.add('hidden');
  } else if (frameStyle === 'top-bottom') {
    frameWrapper.style.border = '1px solid var(--hairline)';
    frameWrapper.style.borderRadius = '16px';
    frameWrapper.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.05)';
    frameWrapper.style.padding = '0px';
    
    if (frameTopLabel) {
      frameTopLabel.style.background = `linear-gradient(to right, ${frameColor}, ${frameColor}dd)`;
      frameTopLabel.style.color = labelTextColor;
      frameTopLabel.style.borderRadius = '16px 16px 0 0';
      frameTopLabel.style.margin = '0px';
      frameTopLabel.style.padding = '12px';
      frameTopLabel.style.width = '100%';
      frameTopLabel.classList.remove('hidden');
    }
    
    frameLabel.style.background = `linear-gradient(to right, ${frameColor}, ${frameColor}dd)`;
    frameLabel.style.color = labelTextColor;
    frameLabel.style.borderRadius = '0 0 16px 16px';
    frameLabel.style.margin = '0px';
    frameLabel.style.padding = '12px';
    frameLabel.style.width = '100%';
    frameLabel.classList.remove('hidden');
  } else if (frameStyle === 'glassmorphic') {
    frameWrapper.className = "w-full flex flex-col items-center justify-center p-5 rounded-2xl border border-white/40 dark:border-white/10 bg-white/40 dark:bg-white/[0.04] backdrop-blur-xl shadow-lg transition-all duration-200";
    frameWrapper.style.boxShadow = `0 20px 50px -10px ${frameColor}20, inset 0 1px 0 rgba(255,255,255,0.2)`;
    
    frameLabel.style.backgroundColor = frameColor;
    frameLabel.style.color = labelTextColor;
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
    frameWrapper.style.border = `4px dashed ${frameColor}`;
    frameWrapper.style.borderRadius = '12px';
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

  const isDark = document.documentElement.classList.contains('dark');
  const labelTextColor = getContrastColor(frameColor);
  const cardBgColor = isDark ? '#141420' : '#ffffff';

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

      // Fill background matching preview theme
      let frameBg = isDark ? '#12121c' : '#ffffff';
      if (frameStyle === 'neon') frameBg = '#0a0a0a';
      else if (frameStyle === 'stamp') frameBg = isDark ? '#161622' : '#fdfbf7';
      else if (frameStyle === 'glassmorphic') {
        const glassGrad = ctx.createLinearGradient(0, 0, canvasWidth, canvasHeight);
        if (isDark) {
          glassGrad.addColorStop(0, '#1a1a28');
          glassGrad.addColorStop(1, '#0e0e18');
        } else {
          glassGrad.addColorStop(0, '#f8f9fc');
          glassGrad.addColorStop(1, '#eef1f6');
        }
        ctx.fillStyle = glassGrad;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      }

      if (frameStyle !== 'glassmorphic') {
        ctx.fillStyle = frameBg;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      }

      // Draw card container (matching preview canvas container)
      ctx.fillStyle = cardBgColor;
      ctx.beginPath();
      ctx.roundRect(cardX, cardY, cardSize, cardSize, Math.round(qrRenderSize * 0.03));
      ctx.fill();

      // Draw QR code inside container
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

        ctx.fillStyle = labelTextColor;
        ctx.fillText(frameText, canvasWidth / 2, labelY + (frameHeight / 2));
      } else if (frameStyle === 'capsule') {
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';
        ctx.lineWidth = Math.max(1, Math.round(qrRenderSize * 0.003));
        ctx.beginPath();
        ctx.roundRect(ctx.lineWidth / 2, ctx.lineWidth / 2, canvasWidth - ctx.lineWidth, canvasHeight - ctx.lineWidth, Math.round(qrRenderSize * 0.06));
        ctx.stroke();

        const pillWidth = Math.round(qrRenderSize * 0.65);
        const pillHeight = Math.round(frameHeight * 0.6);
        const pillX = (canvasWidth - pillWidth) / 2;
        const pillY = labelY + (frameHeight - pillHeight) / 2;

        ctx.shadowColor = isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.06)';
        ctx.shadowBlur = Math.round(qrRenderSize * 0.02);
        ctx.shadowOffsetY = Math.round(qrRenderSize * 0.01);

        ctx.fillStyle = frameColor;
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillWidth, pillHeight, pillHeight / 2);
        ctx.fill();

        ctx.shadowColor = 'transparent';
        ctx.fillStyle = labelTextColor;
        ctx.fillText(frameText, canvasWidth / 2, pillY + (pillHeight / 2));
      } else if (frameStyle === 'minimal') {
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.06)';
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
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.06)';
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

        ctx.fillStyle = labelTextColor;
        ctx.fillText(frameText, canvasWidth / 2, bubbleY + (bubbleHeight / 2));
      } else if (frameStyle === 'phone') {
        const bezel = Math.round(qrRenderSize * 0.04);
        const padBottom = Math.round(qrRenderSize * 0.16);

        ctx.lineWidth = bezel;
        ctx.strokeStyle = isDark ? '#262638' : '#1f1f1f';
        ctx.beginPath();
        ctx.roundRect(bezel / 2, bezel / 2, canvasWidth - bezel, canvasHeight - bezel, Math.round(qrRenderSize * 0.08));
        ctx.stroke();

        ctx.fillStyle = '#000000';
        const islandWidth = Math.round(qrRenderSize * 0.22);
        const islandHeight = Math.round(qrRenderSize * 0.04);
        ctx.beginPath();
        ctx.roundRect((canvasWidth - islandWidth) / 2, bezel * 0.8, islandWidth, islandHeight, islandHeight / 2);
        ctx.fill();

        ctx.fillStyle = isDark ? '#4b4b60' : '#d4d4d4';
        const homeWidth = Math.round(qrRenderSize * 0.2);
        const homeHeight = Math.round(qrRenderSize * 0.01);
        ctx.beginPath();
        ctx.roundRect((canvasWidth - homeWidth) / 2, canvasHeight - bezel - Math.round(qrRenderSize * 0.03), homeWidth, homeHeight, homeHeight / 2);
        ctx.fill();

        const phoneLabelY = canvasHeight - bezel - (padBottom / 2);
        ctx.fillStyle = frameColor;
        ctx.fillText(frameText, canvasWidth / 2, phoneLabelY);
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

        ctx.fillStyle = labelTextColor;
        ctx.fillText(frameTopText, canvasWidth / 2, frameHeight / 2);
        ctx.fillText(frameText, canvasWidth / 2, canvasHeight - (frameHeight / 2));
      } else if (frameStyle === 'glassmorphic') {
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = Math.round(qrRenderSize * 0.015);
        ctx.beginPath();
        ctx.roundRect(ctx.lineWidth / 2, ctx.lineWidth / 2, canvasWidth - ctx.lineWidth, canvasHeight - ctx.lineWidth, Math.round(qrRenderSize * 0.05));
        ctx.stroke();

        const pillWidth = Math.round(qrRenderSize * 0.6);
        const pillHeight = Math.round(frameHeight * 0.55);
        const pillX = (canvasWidth - pillWidth) / 2;
        const pillY = labelY + (frameHeight - pillHeight) / 2;

        ctx.fillStyle = frameColor;
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillWidth, pillHeight, pillHeight / 2);
        ctx.fill();

        ctx.fillStyle = labelTextColor;
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
        ctx.font = `bold ${fontSize}px "Courier New", Courier, monospace`;
        ctx.fillText(frameText, canvasWidth / 2, labelY + (frameHeight / 2));
        ctx.shadowColor = 'transparent';
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
    
    let frameBg = isDark ? '#12121c' : '#ffffff';
    if (frameStyle === 'neon') frameBg = '#0a0a0a';
    else if (frameStyle === 'stamp') frameBg = isDark ? '#161622' : '#fdfbf7';
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
      stop1.setAttribute('stop-color', isDark ? '#1a1a28' : '#f8f9fc');
      const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop2.setAttribute('offset', '100%');
      stop2.setAttribute('stop-color', isDark ? '#0e0e18' : '#eef1f6');
      grad.appendChild(stop1);
      grad.appendChild(stop2);
      defs.appendChild(grad);
      newSvg.appendChild(defs);
      bgRect.setAttribute('fill', 'url(#glass-bg-grad)');
    }

    // Draw card container
    const cardRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    cardRect.setAttribute('x', cardX.toString());
    cardRect.setAttribute('y', cardY.toString());
    cardRect.setAttribute('width', cardSize.toString());
    cardRect.setAttribute('height', cardSize.toString());
    cardRect.setAttribute('rx', Math.round(qrRenderSize * 0.03).toString());
    cardRect.setAttribute('ry', Math.round(qrRenderSize * 0.03).toString());
    cardRect.setAttribute('fill', cardBgColor);
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
      svgText.setAttribute('fill', labelTextColor);
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
      outerBorder.setAttribute('stroke', isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)');
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
      svgText.setAttribute('fill', labelTextColor);
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
      outerBorder.setAttribute('stroke', isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.06)');
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
      outerBorder.setAttribute('stroke', isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.06)');
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
      svgText.setAttribute('fill', labelTextColor);
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
      phoneFrame.setAttribute('stroke', isDark ? '#262638' : '#1f1f1f');
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
      homeBar.setAttribute('fill', isDark ? '#4b4b60' : '#d4d4d4');
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
      topSvgText.setAttribute('fill', labelTextColor);
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
      bottomSvgText.setAttribute('fill', labelTextColor);
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
      feDropShadow.setAttribute('flood-opacity', isDark ? '0.3' : '0.08');
      filter.appendChild(feDropShadow);
      defs.appendChild(filter);
      newSvg.appendChild(defs);

      bgRect.setAttribute('stroke', isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.9)');
      bgRect.setAttribute('stroke-width', Math.max(1, Math.round(qrRenderSize * 0.003)).toString());
      bgRect.setAttribute('rx', Math.round(qrRenderSize * 0.04).toString());
      bgRect.setAttribute('ry', Math.round(qrRenderSize * 0.04).toString());
      bgRect.setAttribute('filter', 'url(#glass-shadow)');

      const reflection = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      reflection.setAttribute('x1', '0');
      reflection.setAttribute('y1', '0');
      reflection.setAttribute('x2', totalWidth.toString());
      reflection.setAttribute('y2', totalHeight.toString());
      reflection.setAttribute('stroke', isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.2)');
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
      svgText.setAttribute('fill', labelTextColor);
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

