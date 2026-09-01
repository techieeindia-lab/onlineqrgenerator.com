export interface Translations {
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  dir: 'ltr' | 'rtl';
  nav: {
    generator: string;
    history: string;
    api: string;
    faq: string;
    scanner: string;
    bulk: string;
    industries: string;
    types: string;
    privacyPolicy: string;
    aboutUs: string;
    terms: string;
    contactUs: string;
  };
  types: {
    url: string;
    text: string;
    wifi: string;
    contact: string;
    whatsapp: string;
    email: string;
    phone: string;
    crypto: string;
    social: string;
    feedback: string;
  };
  fields: {
    urlPlaceholder: string;
    textPlaceholder: string;
    wifiSsid: string;
    wifiPassword: string;
    wifiEncryption: string;
    contactName: string;
    contactPhone: string;
    contactEmail: string;
    contactCompany: string;
    contactAddress: string;
    whatsappPhone: string;
    whatsappMessage: string;
    emailTo: string;
    emailSubject: string;
    emailBody: string;
    phonePlaceholder: string;
    cryptoAddress: string;
    cryptoCurrency: string;
    cryptoAmount: string;
  };
  customization: {
    title: string;
    colors: string;
    shapes: string;
    frame: string;
    logo: string;
    advanced: string;
    fgColor: string;
    bgColor: string;
    presets: string;
    bodyStyle: string;
    eyeBorder: string;
    eyeCenter: string;
    logoUpload: string;
    logoPreset: string;
    logoNone: string;
    errorCorrection: string;
    errorCorrectionDesc: string;
    size: string;
    styles: {
      square: string;
      dots: string;
      rounded: string;
      classy: string;
      extraRounded: string;
    };
    colorType: string;
    solid: string;
    gradient: string;
    gradType: string;
    linear: string;
    radial: string;
    gradStart: string;
    gradEnd: string;
    gradAngle: string;
    frameStyle: string;
    frameNone: string;
    frameClassic: string;
    frameCapsule: string;
    frameMinimal: string;
    frameTicket: string;
    framePointer: string;
    framePhone: string;
    frameTopBottom: string;
    frameTopLabel: string;
    frameLabel: string;
    frameColor: string;
    frameGlassmorphic: string;
    frameNeon: string;
    frameViewfinder: string;
    frameStamp: string;
  };
  actions: {
    downloadPng: string;
    downloadSvg: string;
    copySuccess: string;
    historyTitle: string;
    historyEmpty: string;
    historyDate: string;
    historyRecall: string;
    historyDelete: string;
  };
  scanner: {
    title: string;
    uploadDesc: string;
    cameraStart: string;
    cameraStop: string;
    resultTitle: string;
    copyBtn: string;
    copyToast: string;
    noCamera: string;
    scanning: string;
  };
  bulk: {
    title: string;
    inputLabel: string;
    placeholder: string;
    generateBtn: string;
    successToast: string;
    progress: string;
  };
  apiTitle: string;
  apiDesc: string;
  industries: {
    restaurants: string;
    realEstate: string;
    education: string;
    events: string;
    retail: string;
    marketing: string;
  };
  typeDescriptions: {
    url: string;
    text: string;
    wifi: string;
    contact: string;
    whatsapp: string;
    crypto: string;
    email: string;
    phone: string;
    social: string;
    feedback: string;
  };
  industryDescriptions: {
    restaurants: string;
    realEstate: string;
    education: string;
    events: string;
    retail: string;
    marketing: string;
  };
  errors: {
    notFound: {
      badge: string;
      title: string;
      description: string;
      homeBtn: string;
      scanBtn: string;
      exploreTypes: string;
      popularTitle: string;
      helpTitle: string;
      helpDesc: string;
    };
    serverError: {
      badge: string;
      title: string;
      description: string;
      retryBtn: string;
      homeBtn: string;
      contactBtn: string;
      statusTitle: string;
      statusClient: string;
      statusStorage: string;
      statusReady: string;
    };
  };
}

export const translations: Record<string, Translations> = {
  en: {
    title: "Online QR Code Generator",
    subtitle: "Create custom QR codes in a second. No signin or login required.",
    tagline: "Create custom QR codes. Instantly.",
    description: "Generate high-resolution, vector QR codes with custom colors, shapes, and logos in seconds. 100% free with no watermarks.",
    dir: 'ltr',
    nav: {
      generator: "Generator",
      history: "Recent QR Codes",
      api: "API Snippet",
      faq: "FAQ",
      scanner: "Scanner",
      bulk: "Bulk QR",
      industries: "Industries",
      types: "QR Types",
      privacyPolicy: "Privacy Policy",
      aboutUs: "About Us",
      terms: "Terms & Conditions",
      contactUs: "Contact Us"
    },
    types: {
      url: "URL",
      text: "Text",
      wifi: "Wi-Fi",
      contact: "vCard",
      whatsapp: "WhatsApp",
      email: "Email",
      phone: "Phone",
      crypto: "Crypto",
      social: "Social Media",
      feedback: "Feedback"
    },
    fields: {
      urlPlaceholder: "Enter URL (e.g., https://example.com)",
      textPlaceholder: "Enter plain text here...",
      wifiSsid: "Network Name (SSID)",
      wifiPassword: "Password",
      wifiEncryption: "Security Type",
      contactName: "Full Name",
      contactPhone: "Phone Number",
      contactEmail: "Email Address",
      contactCompany: "Company",
      contactAddress: "Address",
      whatsappPhone: "WhatsApp Number (with country code, e.g. +1234567890)",
      whatsappMessage: "Pre-filled Message (optional)",
      emailTo: "To Email Address",
      emailSubject: "Subject",
      emailBody: "Email Body",
      phonePlaceholder: "Phone Number (with country code)",
      cryptoAddress: "Wallet Address",
      cryptoCurrency: "Cryptocurrency",
      cryptoAmount: "Amount (optional)"
    },
    customization: {
      title: "Customize QR Design",
      colors: "1. Colors & Gradients",
      shapes: "2. Design & Shapes",
      frame: "3. Visual Frame",
      logo: "4. Logo Overlay",
      advanced: "5. Advanced Settings",
      fgColor: "Foreground Color",
      bgColor: "Background Color",
      presets: "Color Presets",
      bodyStyle: "Body Pattern",
      eyeBorder: "Eye Frame Style",
      eyeCenter: "Eye Ball Style",
      logoUpload: "Upload Custom Logo (Drag & Drop or click)",
      logoPreset: "Choose Preset Logo",
      logoNone: "No Logo / Clear",
      errorCorrection: "Error Correction Level",
      errorCorrectionDesc: "High is recommended when adding a logo.",
      size: "Size (pixels)",
      styles: {
        square: "Square",
        dots: "Dots",
        rounded: "Rounded",
        classy: "Classy",
        extraRounded: "Extra Rounded"
      },
      colorType: "Color Type",
      solid: "Solid Color",
      gradient: "Gradient",
      gradType: "Gradient Type",
      linear: "Linear",
      radial: "Radial",
      gradStart: "Start Color",
      gradEnd: "End Color",
      gradAngle: "Rotation Angle",
      frameStyle: "Visual Frame",
      frameNone: "No Frame",
      frameClassic: "Classic Tag Border",
      frameCapsule: "Capsule Frame",
      frameMinimal: "Minimalist Frame",
      frameTicket: "Ticket Frame",
      framePointer: "Pointer Frame",
      framePhone: "Phone Mockup",
      frameTopBottom: "Top & Bottom Frame",
      frameTopLabel: "Top Text",
      frameLabel: "Frame Text",
      frameColor: "Frame Color",
      frameGlassmorphic: "Glassmorphic Glow",
      frameNeon: "Neon Cyberpunk",
      frameViewfinder: "Camera Viewfinder",
      frameStamp: "Retro Stamp"
    },
    actions: {
      downloadPng: "Download PNG",
      downloadSvg: "Download SVG",
      copySuccess: "Copied!",
      historyTitle: "Your Local History",
      historyEmpty: "No history found. Generate and download a QR code to save it here!",
      historyDate: "Created on",
      historyRecall: "Edit Code",
      historyDelete: "Remove"
    },
    scanner: {
      title: "Scan QR Code",
      uploadDesc: "Drag & drop a QR code image here, or click to upload",
      cameraStart: "Start Camera Scanner",
      cameraStop: "Stop Camera",
      resultTitle: "Scanned Result",
      copyBtn: "Copy Link",
      copyToast: "Copied result to clipboard!",
      noCamera: "Camera not available or access denied.",
      scanning: "Align QR code in camera frame..."
    },
    bulk: {
      title: "Bulk QR Code Generator",
      inputLabel: "Enter links (One per line)",
      placeholder: "https://example1.com\nhttps://example2.com\nhttps://example3.com",
      generateBtn: "Generate & Download ZIP",
      successToast: "ZIP created and downloaded successfully!",
      progress: "Generating... Please wait"
    },
    apiTitle: "Developer API Integration",
    apiDesc: "Integrate instant QR code generation into your website or application with a simple client-side snippet.",
    industries: {
      restaurants: "Restaurants & Cafes",
      realEstate: "Real Estate",
      education: "Teachers & Education",
      events: "Events & Tickets",
      retail: "Retail & E-commerce",
      marketing: "Marketing Campaigns"
    },
    typeDescriptions: {
      url: "Link to websites and homepages",
      text: "Encode plain text messages",
      wifi: "Connect to Wi-Fi automatically",
      contact: "Share digital contact cards",
      whatsapp: "Send pre-filled WhatsApp messages",
      crypto: "Accept cryptocurrency payments",
      email: "Draft pre-filled email templates",
      phone: "Make calls or send text messages",
      social: "Link to all social media profiles",
      feedback: "Collect reviews and ratings"
    },
    industryDescriptions: {
      restaurants: "Contactless menu cards & table ordering",
      realEstate: "Bridge yard signs to virtual property tours",
      education: "Interactive worksheets and classroom learning",
      events: "Quick ticket check-ins and bookings",
      retail: "Connect customers to products and stores",
      marketing: "Track conversions and grow mailing lists"
    },
    errors: {
      notFound: {
        badge: "404 Error • Page Lost",
        title: "Lost in the Digital Dimension",
        description: "The page or QR code destination you're looking for doesn't exist, was moved, or has expired. Let's get you back on track.",
        homeBtn: "Back to QR Generator",
        scanBtn: "Scan a QR Code",
        exploreTypes: "Explore QR Types",
        popularTitle: "Popular Destinations",
        helpTitle: "Need Assistance?",
        helpDesc: "If you think this is a broken link, feel free to reach out to our team."
      },
      serverError: {
        badge: "500 Error • Glitch Detected",
        title: "Internal System Signal Interrupted",
        description: "An unexpected glitch occurred while rendering this page. Don't worry, your client-side QR generation engine and local data are safe.",
        retryBtn: "Reload Page",
        homeBtn: "Back to QR Generator",
        contactBtn: "Contact Support",
        statusTitle: "System Diagnostics",
        statusClient: "Client Generator: Operational",
        statusStorage: "Local History: Saved & Intact",
        statusReady: "Ready for Recovery"
      }
    }
  },
  es: {
    title: "Generador de Códigos QR Online",
    subtitle: "Crea códigos QR personalizados en un segundo. Sin registros ni inicios de sesión.",
    tagline: "Crea códigos QR personalizados. Al instante.",
    description: "Genera códigos QR vectoriales y de alta resolución con colores, formas y logotipos personalizados en segundos. 100% gratis y sin marcas de agua.",
    dir: 'ltr',
    nav: {
      generator: "Generador",
      history: "Códigos QR Recientes",
      api: "Fragmento API",
      faq: "Preguntas Frecuentes",
      scanner: "Escáner",
      bulk: "QR Masivo",
      industries: "Industrias",
      types: "Tipos de QR",
      privacyPolicy: "Política de Privacidad",
      aboutUs: "Sobre Nosotros",
      terms: "Términos y Condiciones",
      contactUs: "Contacto"
    },
    types: {
      url: "URL",
      text: "Texto",
      wifi: "Wi-Fi",
      contact: "Contacto",
      whatsapp: "WhatsApp",
      email: "Correo",
      phone: "Teléfono",
      crypto: "Cripto",
      social: "Redes Sociales",
      feedback: "Reseña"
    },
    fields: {
      urlPlaceholder: "Ingrese URL (ej. https://ejemplo.com)",
      textPlaceholder: "Ingrese texto sin formato aquí...",
      wifiSsid: "Nombre de Red (SSID)",
      wifiPassword: "Contraseña",
      wifiEncryption: "Tipo de Seguridad",
      contactName: "Nombre Completo",
      contactPhone: "Número de Teléfono",
      contactEmail: "Dirección de Correo",
      contactCompany: "Empresa",
      contactAddress: "Dirección",
      whatsappPhone: "Número de WhatsApp (con código de país, ej. +34600000000)",
      whatsappMessage: "Mensaje predefinido (opcional)",
      emailTo: "Dirección de Destinatario",
      emailSubject: "Asunto",
      emailBody: "Cuerpo del Correo",
      phonePlaceholder: "Número de Teléfono (con código de país)",
      cryptoAddress: "Dirección de Billetera",
      cryptoCurrency: "Criptomoneda",
      cryptoAmount: "Cantidad (opcional)"
    },
    customization: {
      title: "Personalizar Diseño QR",
      colors: "1. Colores y Degradados",
      shapes: "2. Diseño y Formas",
      frame: "3. Marco Visual",
      logo: "4. Logotipo Superpuesto",
      advanced: "5. Ajustes Avanzados",
      fgColor: "Color de Primer Plano",
      bgColor: "Color de Fondo",
      presets: "Ajustes de Color",
      bodyStyle: "Patrón del Cuerpo",
      eyeBorder: "Estilo del Marco del Ojo",
      eyeCenter: "Estilo de la Pupila",
      logoUpload: "Cargar logotipo personalizado (Arrastrar o clic)",
      logoPreset: "Elegir logotipo predefinido",
      logoNone: "Sin Logotipo / Limpiar",
      errorCorrection: "Nivel de Corrección de Errores",
      errorCorrectionDesc: "Se recomienda Alto al añadir un logotipo.",
      size: "Tamaño (píxeles)",
      styles: {
        square: "Cuadrado",
        dots: "Puntos",
        rounded: "Redondeado",
        classy: "Elegante",
        extraRounded: "Súper Redondeado"
      },
      colorType: "Tipo de Color",
      solid: "Color Sólido",
      gradient: "Degradado",
      gradType: "Tipo de Degradado",
      linear: "Lineal",
      radial: "Radial",
      gradStart: "Color Inicial",
      gradEnd: "Color Final",
      gradAngle: "Ángulo de Rotación",
      frameStyle: "Marco Visual",
      frameNone: "Sin Marco",
      frameClassic: "Borde de Etiqueta Clásico",
      frameCapsule: "Borde de Cápsula",
      frameMinimal: "Borde Minimalista",
      frameTicket: "Borde de Ticket",
      framePointer: "Borde con Flecha",
      framePhone: "Diseño de Teléfono",
      frameTopBottom: "Borde Superior/Inferior",
      frameTopLabel: "Texto Superior",
      frameLabel: "Texto del Marco",
      frameColor: "Color del Marco",
      frameGlassmorphic: "Efecto Vidrio Esmerilado",
      frameNeon: "Ciberpunk Neón",
      frameViewfinder: "Buscador de Cámara",
      frameStamp: "Sello Retro"
    },
    actions: {
      downloadPng: "Descargar PNG",
      downloadSvg: "Descargar SVG",
      copySuccess: "¡Copiado!",
      historyTitle: "Tu Historial Local",
      historyEmpty: "No se encontró historial. ¡Genera y descarga un código QR para guardarlo aquí!",
      historyDate: "Creado el",
      historyRecall: "Editar Código",
      historyDelete: "Eliminar"
    },
    scanner: {
      title: "Escanear Código QR",
      uploadDesc: "Arrastra y suelta una imagen de código QR aquí, o haz clic para cargar",
      cameraStart: "Iniciar escáner de cámara",
      cameraStop: "Detener cámara",
      resultTitle: "Resultado escaneado",
      copyBtn: "Copiar resultado",
      copyToast: "¡Resultado copiado al portapapeles!",
      noCamera: "Cámara no disponible o acceso denegado.",
      scanning: "Alinee el código QR en el cuadro de la cámara..."
    },
    bulk: {
      title: "Generador Masivo de Códigos QR",
      inputLabel: "Ingrese enlaces (Uno por línea)",
      placeholder: "https://ejemplo1.com\nhttps://ejemplo2.com\nhttps://ejemplo3.com",
      generateBtn: "Generar y descargar ZIP",
      successToast: "¡Archivo ZIP creado y descargado con éxito!",
      progress: "Generando... Por favor espere"
    },
    apiTitle: "Integración API para Desarrolladores",
    apiDesc: "Integre la generación instantánea de códigos QR en su sitio web o aplicación con un simple código de cliente.",
    industries: {
      restaurants: "Restaurantes y Cafés",
      realEstate: "Bienes Raíces",
      education: "Profesores y Educación",
      events: "Eventos y Entradas",
      retail: "Comercio y E-commerce",
      marketing: "Campañas de Marketing"
    },
    typeDescriptions: {
      url: "Enlace a sitios web y portales",
      text: "Codificar mensajes de texto",
      wifi: "Conectar a Wi-Fi automáticamente",
      contact: "Compartir tarjetas de contacto",
      whatsapp: "Mensajes de WhatsApp predefinidos",
      crypto: "Aceptar cobros en criptomonedas",
      email: "Redactar plantillas de correo",
      phone: "Llamar o enviar mensajes de texto",
      social: "Vincular perfiles de redes sociales",
      feedback: "Recopilar opiniones y valoraciones"
    },
    industryDescriptions: {
      restaurants: "Menús QR interactivos y pedidos en mesa",
      realEstate: "Carteles físicos con visitas virtuales",
      education: "Hojas de trabajo y aprendizaje interactivo",
      events: "Control de entradas y reservas rápidas",
      retail: "Conectar clientes con tiendas y ofertas",
      marketing: "Medir conversiones y captar correos"
    },
    errors: {
      notFound: {
        badge: "Error 404 • Página no encontrada",
        title: "Perdido en la dimensión digital",
        description: "La página o el destino del código QR que buscas no existe, se movió o caducó. Volvamos al camino correcto.",
        homeBtn: "Volver al Generador QR",
        scanBtn: "Escanear un Código QR",
        exploreTypes: "Explorar tipos de QR",
        popularTitle: "Destinos populares",
        helpTitle: "¿Necesitas ayuda?",
        helpDesc: "Si crees que se trata de un enlace roto, no dudes en contactar a nuestro equipo."
      },
      serverError: {
        badge: "Error 500 • Error detectado",
        title: "Señal del sistema interrumpida",
        description: "Ocurrió un error inesperado al cargar esta página. No te preocupes, el motor de generación local y tus datos están seguros.",
        retryBtn: "Recargar página",
        homeBtn: "Volver al Generador QR",
        contactBtn: "Contactar Soporte",
        statusTitle: "Diagnóstico del sistema",
        statusClient: "Generador cliente: Operativo",
        statusStorage: "Historial local: Guardado e intacto",
        statusReady: "Listo para recuperación"
      }
    }
  },
  fr: {
    title: "Générateur de Code QR en Ligne",
    subtitle: "Créez des codes QR personnalisés en une seconde. Sans inscription ni connexion.",
    tagline: "Créez des codes QR personnalisés. Instantanément.",
    description: "Générez des codes QR vectoriels et haute résolution avec des couleurs, formes et logos personnalisés en quelques secondes. 100% gratuit et sans filigrane.",
    dir: 'ltr',
    nav: {
      generator: "Générateur",
      history: "Codes QR Récents",
      api: "Code API",
      faq: "FAQ",
      scanner: "Scanner",
      bulk: "QR Groupé",
      industries: "Secteurs",
      types: "Types de QR",
      privacyPolicy: "Politique de Confidentialité",
      aboutUs: "À Propos de Nous",
      terms: "Conditions d'Utilisation",
      contactUs: "Contactez-nous"
    },
    types: {
      url: "URL",
      text: "Texte",
      wifi: "Wi-Fi",
      contact: "Contact",
      whatsapp: "WhatsApp",
      email: "E-mail",
      phone: "Téléphone",
      crypto: "Crypto",
      social: "Réseaux Sociaux",
      feedback: "Retour"
    },
    fields: {
      urlPlaceholder: "Entrez l'URL (ex: https://exemple.com)",
      textPlaceholder: "Saisissez votre texte ici...",
      wifiSsid: "Nom du réseau (SSID)",
      wifiPassword: "Mot de passe",
      wifiEncryption: "Type de sécurité",
      contactName: "Nom complet",
      contactPhone: "Numéro de téléphone",
      contactEmail: "Adresse e-mail",
      contactCompany: "Entreprise",
      contactAddress: "Adresse",
      whatsappPhone: "Numéro WhatsApp (avec code pays, ex: +33600000000)",
      whatsappMessage: "Message pré-rempli (facultatif)",
      emailTo: "Adresse de destination",
      emailSubject: "Objet",
      emailBody: "Corps du message",
      phonePlaceholder: "Numéro de téléphone (avec code pays)",
      cryptoAddress: "Adresse du portefeuille",
      cryptoCurrency: "Cryptomonnaie",
      cryptoAmount: "Montant (facultatif)"
    },
    customization: {
      title: "Personnaliser le Design QR",
      colors: "1. Couleurs & Dégradés",
      shapes: "2. Design & Formes",
      frame: "3. Cadre Visuel",
      logo: "4. Logo incrusté",
      advanced: "5. Paramètres Avancés",
      fgColor: "Couleur de premier plan",
      bgColor: "Couleur d'arrière-plan",
      presets: "Préréglages de couleurs",
      bodyStyle: "Style du corps",
      eyeBorder: "Style du cadre de l'œil",
      eyeCenter: "Style de la pupille",
      logoUpload: "Télécharger un logo (Glisser-déposer ou cliquer)",
      logoPreset: "Choisir un logo prédéfini",
      logoNone: "Aucun Logo / Effacer",
      errorCorrection: "Correction des erreurs",
      errorCorrectionDesc: "Le niveau élevé est recommandé avec un logo.",
      size: "Taille (pixels)",
      styles: {
        square: "Carré",
        dots: "Points",
        rounded: "Arrondi",
        classy: "Stylisé",
        extraRounded: "Très arrondi"
      },
      colorType: "Type de Couleur",
      solid: "Couleur Unie",
      gradient: "Dégradé",
      gradType: "Type de Dégradé",
      linear: "Linéaire",
      radial: "Radial",
      gradStart: "Couleur de Départ",
      gradEnd: "Couleur de Fin",
      gradAngle: "Angle de Rotation",
      frameStyle: "Cadre Visuel",
      frameNone: "Aucun Cadre",
      frameClassic: "Bordure d'étiquette classique",
      frameCapsule: "Bordure de capsule",
      frameMinimal: "Bordure minimaliste",
      frameTicket: "Bordure de ticket",
      framePointer: "Bordure flèche",
      framePhone: "Maquette téléphone",
      frameTopBottom: "Bordure haut & bas",
      frameTopLabel: "Texte supérieur",
      frameLabel: "Texte du Cadre",
      frameColor: "Couleur du Cadre",
      frameGlassmorphic: "Effet Verre Dépoli",
      frameNeon: "Néon Cyberpunk",
      frameViewfinder: "Viseur Caméra",
      frameStamp: "Timbre Rétro"
    },
    actions: {
      downloadPng: "Télécharger PNG",
      downloadSvg: "Télécharger SVG",
      copySuccess: "Copié !",
      historyTitle: "Votre historique local",
      historyEmpty: "Aucun historique trouvé. Générez et téléchargez un code QR pour l'enregistrer ici !",
      historyDate: "Créé le",
      historyRecall: "Modifier",
      historyDelete: "Supprimer"
    },
    scanner: {
      title: "Scanner Code QR",
      uploadDesc: "Glissez-déposez une image de code QR ici, ou cliquez pour charger",
      cameraStart: "Démarrer le scanner caméra",
      cameraStop: "Arrêter la caméra",
      resultTitle: "Résultat numérisé",
      copyBtn: "Copier le résultat",
      copyToast: "Résultat copié dans le presse-papiers !",
      noCamera: "Caméra indisponible ou accès refusé.",
      scanning: "Alignez le code QR dans le cadre de la caméra..."
    },
    bulk: {
      title: "Générateur de QR codes en vrac",
      inputLabel: "Entrez des liens (Un par ligne)",
      placeholder: "https://exemple1.com\nhttps://exemple2.com\nhttps://exemple3.com",
      generateBtn: "Générer et télécharger ZIP",
      successToast: "Fichier ZIP créé et téléchargé avec succès !",
      progress: "Génération en cours... Veuillez patienter"
    },
    apiTitle: "Intégration API Développeur",
    apiDesc: "Intégrez la génération instantanée de codes QR dans votre site Web ou application avec un simple extrait côté client.",
    industries: {
      restaurants: "Restaurants & Cafés",
      realEstate: "Immobilier",
      education: "Enseignement & Éducation",
      events: "Événements & Billets",
      retail: "Commerce & E-commerce",
      marketing: "Campagnes de Marketing"
    },
    typeDescriptions: {
      url: "Lien vers des sites et pages web",
      text: "Encoder du texte brut",
      wifi: "Connexion Wi-Fi automatique",
      contact: "Partager des fiches de contact",
      whatsapp: "Messages WhatsApp pré-remplis",
      crypto: "Paiements en cryptomonnaie",
      email: "Modèles d'e-mails pré-remplis",
      phone: "Appeler ou envoyer des SMS",
      social: "Regrouper vos réseaux sociaux",
      feedback: "Collecter des avis et évaluations"
    },
    industryDescriptions: {
      restaurants: "Menus sans contact & commandes de table",
      realEstate: "Visites virtuelles depuis vos panneaux",
      education: "Fiches de cours & devoirs interactifs",
      events: "Réservation & billetterie simplifiées",
      retail: "Lier vos clients à vos fiches produits",
      marketing: "Suivre vos campagnes & newsletters"
    },
    errors: {
      notFound: {
        badge: "Erreur 404 • Page introuvable",
        title: "Perdu dans la dimension numérique",
        description: "La page ou la destination QR que vous recherchez n'existe pas, a été déplacée ou a expiré. Revenons sur la bonne voie.",
        homeBtn: "Retour au Générateur QR",
        scanBtn: "Scanner un QR Code",
        exploreTypes: "Explorer les types de QR",
        popularTitle: "Destinations populaires",
        helpTitle: "Besoin d'aide ?",
        helpDesc: "Si vous pensez qu'il s'agit d'un lien brisé, n'hésitez pas à contacter notre équipe."
      },
      serverError: {
        badge: "Erreur 500 • Problème détecté",
        title: "Signal système interrompu",
        description: "Une anomalie inattendue s'est produite lors du rendu. Rassurez-vous, votre moteur de génération local et vos données sont intacts.",
        retryBtn: "Recharger la page",
        homeBtn: "Retour au Générateur QR",
        contactBtn: "Contacter le support",
        statusTitle: "Diagnostics système",
        statusClient: "Générateur client : Opérationnel",
        statusStorage: "Historique local : Sauvegardé et intact",
        statusReady: "Prêt pour la récupération"
      }
    }
  },
  de: {
    title: "Online QR Code Generator",
    subtitle: "Erstellen Sie benutzerdefinierte QR-Codes in Sekundenschnelle. Keine Anmeldung erforderlich.",
    tagline: "Erstellen Sie benutzerdefinierte QR-Codes. Sofort.",
    description: "Generieren Sie hochauflösende, vektorbasierte QR-Codes mit benutzerdefinierten Farben, Formen und Logos. 100 % kostenlos und ohne Wasserzeichen.",
    dir: 'ltr',
    nav: {
      generator: "Generator",
      history: "Letzte QR-Codes",
      api: "API-Snippet",
      faq: "Häufige Fragen",
      scanner: "Scanner",
      bulk: "Bulk QR",
      industries: "Branchen",
      types: "QR-Typen",
      privacyPolicy: "Datenschutzerklärung",
      aboutUs: "Über Uns",
      terms: "Allgemeine Geschäftsbedingungen",
      contactUs: "Kontakt"
    },
    types: {
      url: "URL",
      text: "Text",
      wifi: "WLAN",
      contact: "Kontakt",
      whatsapp: "WhatsApp",
      email: "E-Mail",
      phone: "Telefon",
      crypto: "Krypto",
      social: "Social Media",
      feedback: "Rückmeldung"
    },
    fields: {
      urlPlaceholder: "URL eingeben (z.B. https://beispiel.de)",
      textPlaceholder: "Geben Sie hier Ihren Text ein...",
      wifiSsid: "Netzwerkname (SSID)",
      wifiPassword: "Passwort",
      wifiEncryption: "Sicherheitstyp",
      contactName: "Vollständiger Name",
      contactPhone: "Telefonnummer",
      contactEmail: "E-Mail-Adresse",
      contactCompany: "Unternehmen",
      contactAddress: "Adresse",
      whatsappPhone: "WhatsApp-Nummer (mit Ländervorwahl, z.B. +4917000000)",
      whatsappMessage: "Vorausgefüllte Nachricht (optional)",
      emailTo: "Empfänger-E-Mail-Adresse",
      emailSubject: "Betreff",
      emailBody: "E-Mail-Inhalt",
      phonePlaceholder: "Telefonnummer (mit Ländervorwahl)",
      cryptoAddress: "Wallet-Adresse",
      cryptoCurrency: "Kryptowährung",
      cryptoAmount: "Betrag (optional)"
    },
    customization: {
      title: "QR-Design anpassen",
      colors: "1. Farben & Verläufe",
      shapes: "2. Design & Formen",
      frame: "3. Visueller Rahmen",
      logo: "4. Logo-Overlay",
      advanced: "5. Erweiterte Einstellungen",
      fgColor: "Vordergrundfarbe",
      bgColor: "Hintergrundfarbe",
      presets: "Farbvorlagen",
      bodyStyle: "Körpermuster",
      eyeBorder: "Augenrahmen-Stil",
      eyeCenter: "Pupillen-Stil",
      logoUpload: "Eigenes Logo hochladen (Drag & Drop oder Klick)",
      logoPreset: "Vorgefertigtes Logo wählen",
      logoNone: "Kein Logo / Löschen",
      errorCorrection: "Fehlerkorrektur-Level",
      errorCorrectionDesc: "Hoch wird empfohlen, wenn ein Logo verwendet wird.",
      size: "Größe (Pixel)",
      styles: {
        square: "Quadratisch",
        dots: "Punkte",
        rounded: "Abgerundet",
        classy: "Stilvoll",
        extraRounded: "Stark abgerundet"
      },
      colorType: "Farbtyp",
      solid: "Einfarbig",
      gradient: "Farbverlauf",
      gradType: "Verlaufstyp",
      linear: "Linear",
      radial: "Radial",
      gradStart: "Startfarbe",
      gradEnd: "Endfarbe",
      gradAngle: "Drehwinkel",
      frameStyle: "Visueller Rahmen",
      frameNone: "Kein Rahmen",
      frameClassic: "Klassischer Labelrand",
      frameCapsule: "Kapsel-Rahmen",
      frameMinimal: "Minimalistischer Rahmen",
      frameTicket: "Ticket-Rahmen",
      framePointer: "Zeiger-Rahmen",
      framePhone: "Telefon-Attrappe",
      frameTopBottom: "Oben & Unten Rahmen",
      frameTopLabel: "Oberer Text",
      frameLabel: "Rahmentext",
      frameColor: "Rahmenfarbe",
      frameGlassmorphic: "Milchglas-Effekt",
      frameNeon: "Neon-Cyberpunk",
      frameViewfinder: "Kamera-Sucher",
      frameStamp: "Retro-Stempel"
    },
    actions: {
      downloadPng: "PNG herunterladen",
      downloadSvg: "SVG herunterladen",
      copySuccess: "Kopiert!",
      historyTitle: "Ihr lokaler Verlauf",
      historyEmpty: "Kein Verlauf gefunden. Erstellen Sie einen QR-Code, um ihn hier zu speichern!",
      historyDate: "Erstellt am",
      historyRecall: "Code bearbeiten",
      historyDelete: "Löschen"
    },
    scanner: {
      title: "QR-Code scannen",
      uploadDesc: "Ziehen Sie ein QR-Code-Bild hierher oder klicken Sie zum Hochladen",
      cameraStart: "Kamera-Scanner starten",
      cameraStop: "Kamera stoppen",
      resultTitle: "Scanergebnis",
      copyBtn: "Ergebnis kopieren",
      copyToast: "Ergebnis in die Zwischenablage kopiert!",
      noCamera: "Kamera nicht verfügbar oder Zugriff verweigert.",
      scanning: "QR-Code im Kamerabild ausrichten..."
    },
    bulk: {
      title: "Bulk-QR-Code-Generator",
      inputLabel: "Links eingeben (Einer pro Zeile)",
      placeholder: "https://beispiel1.com\nhttps://beispiel2.com\nhttps://beispiel3.com",
      generateBtn: "Erzeugen & ZIP herunterladen",
      successToast: "ZIP-Datei erfolgreich erstellt und heruntergeladen!",
      progress: "Generiere... Bitte warten"
    },
    apiTitle: "Entwickler-API-Integration",
    apiDesc: "Integrieren Sie die sofortige Generierung von QR-Codes mit einem einfachen clientseitigen Code-Snippet in Ihre Website oder App.",
    industries: {
      restaurants: "Restaurants & Cafés",
      realEstate: "Immobilien",
      education: "Lehrer & Bildung",
      events: "Events & Tickets",
      retail: "Einzelhandel & E-Commerce",
      marketing: "Marketingkampagnen"
    },
    typeDescriptions: {
      url: "Link zu Webseiten und Portalen",
      text: "Klartext-Nachrichten kodieren",
      wifi: "Automatisch mit WLAN verbinden",
      contact: "Digitale Visitenkarten teilen",
      whatsapp: "Vorausgefüllte WhatsApp-Chats",
      crypto: "Kryptozahlungen empfangen",
      email: "E-Mail-Vorlagen vorschreiben",
      phone: "Anrufen oder SMS versenden",
      social: "Soziale Profile verknüpfen",
      feedback: "Kundenfeedback & Sterne sammeln"
    },
    industryDescriptions: {
      restaurants: "Kontaktlose Speisekarten & Bestellungen",
      realEstate: "Virtuelle Touren auf Schildern",
      education: "Interaktive Arbeitsblätter & Lernen",
      events: "Schneller Check-in & Ticketbuchung",
      retail: "Kunden mit Produkten & Shop verbinden",
      marketing: "Konversionen messen & Kontakte sammeln"
    },
    errors: {
      notFound: {
        badge: "Fehler 404 • Seite nicht gefunden",
        title: "In der digitalen Dimension verloren",
        description: "Die gesuchte Seite oder das QR-Ziel existiert nicht, wurde verschoben oder ist abgelaufen. Finden wir den richtigen Weg.",
        homeBtn: "Zurück zum QR-Generator",
        scanBtn: "QR-Code scannen",
        exploreTypes: "QR-Typen entdecken",
        popularTitle: "Beliebte Ziele",
        helpTitle: "Brauchen Sie Hilfe?",
        helpDesc: "Wenn Sie glauben, dass ein Link defekt ist, kontaktieren Sie gerne unser Support-Team."
      },
      serverError: {
        badge: "Fehler 500 • Fehler aufgetreten",
        title: "Internes Systemsignal unterbrochen",
        description: "Beim Laden dieser Seite ist ein unerwarteter Fehler aufgetreten. Keine Sorge: Ihr lokaler Generator und Ihre Daten sind sicher.",
        retryBtn: "Seite neu laden",
        homeBtn: "Zurück zum QR-Generator",
        contactBtn: "Support kontaktieren",
        statusTitle: "Systemdiagnose",
        statusClient: "Client-Generator: Betriebsbereit",
        statusStorage: "Lokaler Verlauf: Gesichert & intakt",
        statusReady: "Bereit zur Wiederherstellung"
      }
    }
  },
  pt: {
    title: "Gerador de Código QR Online",
    subtitle: "Crie códigos QR personalizados em um segundo. Sem necessidade de registro ou login.",
    tagline: "Crie códigos QR personalizados. Instantaneamente.",
    description: "Gere códigos QR de alta resolução e vetoriais com cores, formas e logotipos personalizados em segundos. 100% gratuito e sem marcas d'água.",
    dir: 'ltr',
    nav: {
      generator: "Gerador",
      history: "Códigos QR Recentes",
      api: "Snippet de API",
      faq: "Perguntas Frequentes",
      scanner: "Leitor",
      bulk: "QR em Massa",
      industries: "Setores",
      types: "Tipos de QR",
      privacyPolicy: "Política de Privacidade",
      aboutUs: "Sobre Nós",
      terms: "Termos e Condições",
      contactUs: "Contato"
    },
    types: {
      url: "URL",
      text: "Texto",
      wifi: "Wi-Fi",
      contact: "Contato",
      whatsapp: "WhatsApp",
      email: "E-mail",
      phone: "Telefone",
      crypto: "Cripto",
      social: "Redes Sociais",
      feedback: "Feedback"
    },
    fields: {
      urlPlaceholder: "Digite a URL (ex: https://exemplo.com)",
      textPlaceholder: "Digite o texto aqui...",
      wifiSsid: "Nome da Rede (SSID)",
      wifiPassword: "Senha",
      wifiEncryption: "Tipo de Segurança",
      contactName: "Nome Completo",
      contactPhone: "Número de Telefone",
      contactEmail: "Endereço de E-mail",
      contactCompany: "Empresa",
      contactAddress: "Endereço",
      whatsappPhone: "Número do WhatsApp (com código do país, ex: +5511999999999)",
      whatsappMessage: "Mensagem pré-definida (opcional)",
      emailTo: "Endereço de E-mail do Destinatário",
      emailSubject: "Assunto",
      emailBody: "Corpo do E-mail",
      phonePlaceholder: "Número de Telefone (com código do país)",
      cryptoAddress: "Endereço da Carteira",
      cryptoCurrency: "Criptomoeda",
      cryptoAmount: "Quantidade (opcional)"
    },
    customization: {
      title: "Personalizar Design do QR",
      colors: "1. Cores e Degradês",
      shapes: "2. Design e Formas",
      frame: "3. Moldura Visual",
      logo: "4. Logotipo Sobreposto",
      advanced: "5. Configurações Avançadas",
      fgColor: "Cor do Primeiro Plano",
      bgColor: "Cor do Fundo",
      presets: "Cores Predefinidas",
      bodyStyle: "Padrão do Corpo",
      eyeBorder: "Estilo da Moldura do Olho",
      eyeCenter: "Estilo da Pupila",
      logoUpload: "Carregar logotipo personalizado (Arraste ou clique)",
      logoPreset: "Escolher logotipo predefinido",
      logoNone: "Sem Logotipo / Limpar",
      errorCorrection: "Nível de Correção de Erros",
      errorCorrectionDesc: "Alto é recomendado ao adicionar um logotipo.",
      size: "Tamanho (pixels)",
      styles: {
        square: "Quadrado",
        dots: "Pontos",
        rounded: "Arredondado",
        classy: "Elegante",
        extraRounded: "Muito Arredondado"
      },
      colorType: "Tipo de Cor",
      solid: "Cor Sólida",
      gradient: "Degradê",
      gradType: "Tipo de Degradê",
      linear: "Linear",
      radial: "Radial",
      gradStart: "Cor Inicial",
      gradEnd: "Cor Final",
      gradAngle: "Ângulo de Rotação",
      frameStyle: "Moldura Visual",
      frameNone: "Sem Moldura",
      frameClassic: "Borda de Etiqueta Clássica",
      frameCapsule: "Borda de Cápsula",
      frameMinimal: "Borda Minimalista",
      frameTicket: "Borda de Ticket",
      framePointer: "Borda com Seta",
      framePhone: "Modelo de Telefone",
      frameTopBottom: "Borda Superior/Inferior",
      frameTopLabel: "Texto Superior",
      frameLabel: "Texto da Moldura",
      frameColor: "Cor da Moldura",
      frameGlassmorphic: "Efeito Vidro Fosco",
      frameNeon: "Neon Cyberpunk",
      frameViewfinder: "Visor de Câmera",
      frameStamp: "Selo Retrô"
    },
    actions: {
      downloadPng: "Baixar PNG",
      downloadSvg: "Baixar SVG",
      copySuccess: "Copiado!",
      historyTitle: "Seu Histórico Local",
      historyEmpty: "Nenhum histórico encontrado. Gere e baixe um código QR para salvá-lo aqui!",
      historyDate: "Criado em",
      historyRecall: "Editar Código",
      historyDelete: "Remover"
    },
    scanner: {
      title: "Ler Código QR",
      uploadDesc: "Arraste e solte uma imagem de código QR aqui, ou clique para carregar",
      cameraStart: "Iniciar leitor de câmera",
      cameraStop: "Parar câmera",
      resultTitle: "Resultado lido",
      copyBtn: "Copiar resultado",
      copyToast: "Resultado copiado para a área de transferência!",
      noCamera: "Câmera não disponível ou acesso negado.",
      scanning: "Alinhe o código QR no quadro da câmera..."
    },
    bulk: {
      title: "Gerador de Códigos QR em Lote",
      inputLabel: "Digite links (Um por linha)",
      placeholder: "https://exemplo1.com\nhttps://exemplo2.com\nhttps://exemplo3.com",
      generateBtn: "Gerar e baixar ZIP",
      successToast: "Arquivo ZIP criado e baixado com sucesso!",
      progress: "Gerando... Aguarde"
    },
    apiTitle: "Integração de API para Desenvolvedores",
    apiDesc: "Integre a geração instantânea de códigos QR no seu site ou aplicativo com um snippet simples do lado do cliente.",
    industries: {
      restaurants: "Restaurantes e Cafés",
      realEstate: "Imobiliária",
      education: "Professores e Educação",
      events: "Eventos e Ingressos",
      retail: "Varejo e E-commerce",
      marketing: "Campanhas de Marketing"
    },
    typeDescriptions: {
      url: "Link para sites e páginas web",
      text: "Codificar mensagens de texto",
      wifi: "Conectar ao Wi-Fi automaticamente",
      contact: "Compartilhar contatos digitais",
      whatsapp: "Mensagens de WhatsApp prontas",
      crypto: "Receber pagamentos cripto",
      email: "Modelos de e-mail pré-definidos",
      phone: "Fazer chamadas ou enviar SMS",
      social: "Vincular perfis de redes sociais",
      feedback: "Coletar avaliações e opiniões"
    },
    industryDescriptions: {
      restaurants: "Menus digitais e pedidos na mesa",
      realEstate: "Visitas virtuais a partir de placas",
      education: "Atividades e aprendizado interativo",
      events: "Check-in rápido e venda de ingressos",
      retail: "Conectar clientes a produtos e lojas",
      marketing: "Medir conversões e listas de e-mail"
    },
    errors: {
      notFound: {
        badge: "Erro 404 • Página não encontrada",
        title: "Perdido na dimensão digital",
        description: "A página ou o destino do código QR que procura não existe, foi movido ou expirou. Vamos colocá-lo de volta no caminho certo.",
        homeBtn: "Voltar ao Gerador QR",
        scanBtn: "Escanear Código QR",
        exploreTypes: "Explorar tipos de QR",
        popularTitle: "Destinos populares",
        helpTitle: "Precisa de ajuda?",
        helpDesc: "Se acredita que este link está corrompido, sinta-se à vontade para contactar a nossa equipa."
      },
      serverError: {
        badge: "Erro 500 • Falha detectada",
        title: "Sinal do sistema interrompido",
        description: "Ocorreu uma falha inesperada ao carregar esta página. Não se preocupe, o motor de geração local e os seus dados estão seguros.",
        retryBtn: "Recarregar página",
        homeBtn: "Voltar ao Gerador QR",
        contactBtn: "Contactar suporte",
        statusTitle: "Diagnóstico do sistema",
        statusClient: "Gerador do cliente: Operacional",
        statusStorage: "Histórico local: Salvo e intacto",
        statusReady: "Pronto para recuperação"
      }
    }
  },
  ar: {
    title: "مولد رموز QR المباشر",
    subtitle: "أنشئ رموز QR مخصصة في ثانية. دون الحاجة للتسجيل أو تسجيل الدخول.",
    tagline: "أنشئ رموز QR مخصصة. فوراً.",
    description: "أنشئ رموز QR متجهة وعالية الدقة بألوان وأشكال وشعارات مخصصة في ثوانٍ. مجاني 100٪ بدون علامات مائية.",
    dir: 'rtl',
    nav: {
      generator: "المولد",
      history: "الرموز الأخيرة",
      api: "رمز API",
      faq: "الأسئلة الشائعة",
      scanner: "الماسح الضوئي",
      bulk: "توليد جماعي",
      industries: "القطاعات",
      types: "أنواع الرموز",
      privacyPolicy: "سياسة الخصوصية",
      aboutUs: "من نحن",
      terms: "الشروط والأحكام",
      contactUs: "اتصل بنا"
    },
    types: {
      url: "رابط (URL)",
      text: "نص",
      wifi: "واي فاي",
      contact: "جهة اتصال",
      whatsapp: "واتساب",
      email: "بريد إلكتروني",
      phone: "هاتف",
      crypto: "عملات رقمية",
      social: "وسائل التواصل الاجتماعي",
      feedback: "ملاحظات"
    },
    fields: {
      urlPlaceholder: "أدخل الرابط (مثال: https://example.com)",
      textPlaceholder: "أدخل النص هنا...",
      wifiSsid: "اسم الشبكة (SSID)",
      wifiPassword: "كلمة المرور",
      wifiEncryption: "نوع الأمان",
      contactName: "الاسم الكامل",
      contactPhone: "رقم الهاتف",
      contactEmail: "البريد الإلكتروني",
      contactCompany: "الشركة",
      contactAddress: "العنوان",
      whatsappPhone: "رقم الواتساب (مع رمز الدولة، مثال: +966500000000)",
      whatsappMessage: "نص الرسالة التلقائي (اختياري)",
      emailTo: "المرسل إليه",
      emailSubject: "الموضوع",
      emailBody: "نص الرسالة",
      phonePlaceholder: "رقم الهاتف (مع رمز الدولة)",
      cryptoAddress: "عنوان المحفظة",
      cryptoCurrency: "العملة الرقمية",
      cryptoAmount: "المبلغ (اختياري)"
    },
    customization: {
      title: "تخصيص تصميم رمز QR",
      colors: "1. الألوان والتدرجات",
      shapes: "2. الأشكال والتصميم",
      frame: "3. إطار خارجي",
      logo: "4. إضافة شعار (Logo)",
      advanced: "5. إعدادات متقدمة",
      fgColor: "اللون الأساسي",
      bgColor: "لون الخلفية",
      presets: "ألوان جاهزة",
      bodyStyle: "نمط نقاط الرمز",
      eyeBorder: "نمط إطار العين للزوايا",
      eyeCenter: "نمط مركز عين الزاوية",
      logoUpload: "رفع شعار مخصص (سحب وإفلات أو نقرة)",
      logoPreset: "اختر شعارًا جاهزًا",
      logoNone: "بدون شعار / مسح",
      errorCorrection: "مستوى تصحيح الأخطاء",
      errorCorrectionDesc: "يُنصح بالمستوى العالي (High) عند استخدام شعار.",
      size: "الحجم (بكسل)",
      styles: {
        square: "مربع",
        dots: "نقاط دائرية",
        rounded: "زوايا دائرية",
        classy: "راقي/كلاسيكي",
        extraRounded: "دائري بالكامل"
      },
      colorType: "نوع التلوين",
      solid: "لون واحد مصمت",
      gradient: "تدرج لوني",
      gradType: "نوع التدرج",
      linear: "خطي (Linear)",
      radial: "دائري (Radial)",
      gradStart: "لون البداية",
      gradEnd: "لون النهاية",
      gradAngle: "زاوية الدوران",
      frameStyle: "إطار خارجي",
      frameNone: "بدون إطار",
      frameClassic: "حدود كلاسيكية للنص",
      frameCapsule: "إطار الكبسولة",
      frameMinimal: "إطار مبسط",
      frameTicket: "إطار التذكرة",
      framePointer: "إطار سهم موجه",
      framePhone: "إطار نموذج هاتف",
      frameTopBottom: "إطار علوي وسفلي",
      frameTopLabel: "النص العلوي",
      frameLabel: "نص الإطار",
      frameColor: "لون الإطار",
      frameGlassmorphic: "تأثير الزجاج المصنفر",
      frameNeon: "نيون سايبربانك",
      frameViewfinder: "محدد منظر الكاميرا",
      frameStamp: "طابع عتيق"
    },
    actions: {
      downloadPng: "تحميل PNG",
      downloadSvg: "تحميل SVG",
      copySuccess: "تم النسخ!",
      historyTitle: "سجلك المحلي الخاص",
      historyEmpty: "لا يوجد سجل بعد. قم بإنشاء وتحميل رمز QR ليتم حفظه هنا تلقائياً!",
      historyDate: "تاريخ الإنشاء",
      historyRecall: "تعديل الرمز",
      historyDelete: "حذف"
    },
    scanner: {
      title: "مسح رمز QR",
      uploadDesc: "اسحب وأسقط صورة رمز QR هنا، أو انقر للتحميل",
      cameraStart: "تشغيل ماسح الكاميرا",
      cameraStop: "إيقاف الكاميرا",
      resultTitle: "النتيجة الممسوحة",
      copyBtn: "نسخ النتيجة",
      copyToast: "تم نسخ النتيجة إلى الحافظة!",
      noCamera: "الكاميرا غير متوفرة أو تم رفض الوصول إليها.",
      scanning: "ضع رمز QR في إطار الكاميرا للمسح..."
    },
    bulk: {
      title: "مولد الرموز الجماعي",
      inputLabel: "أدخل الروابط (رابط في كل سطر)",
      placeholder: "https://example1.com\nhttps://example2.com\nhttps://example3.com",
      generateBtn: "توليد وتحميل ZIP",
      successToast: "تم إنشاء وتحميل ملف ZIP بنجاح!",
      progress: "جاري الإنشاء... يرجى الانتظار"
    },
    apiTitle: "تكامل الـ API للمطورين",
    apiDesc: "قم بدمج عملية توليد رموز QR الفورية في موقعك الإلكتروني أو تطبيقك باستخدام مقتطف برمجيات بسيط من جهة العميل.",
    industries: {
      restaurants: "المطاعم والمقاهي",
      realEstate: "العقارات",
      education: "المعلمون والتعليم",
      events: "الفعاليات والتذاكر",
      retail: "التجزئة والتجارة الإلكترونية",
      marketing: "الحملات التسويقية"
    },
    typeDescriptions: {
      url: "ربط المواقع الإلكترونية والصفحات",
      text: "ترميز الرسائل النصية البسيطة",
      wifi: "الاتصال بالواي فاي تلقائياً",
      contact: "مشاركة جهات الاتصال الرقمية",
      whatsapp: "إرسال رسائل واتساب تلقائية",
      crypto: "قبول مدفوعات العملات الرقمية",
      email: "إنشاء مسودات بريد إلكتروني جاهزة",
      phone: "إجراء مكالمات أو إرسال رسائل نصية",
      social: "ربط جميع حسابات التواصل الاجتماعي",
      feedback: "جمع التقييمات وآراء العملاء"
    },
    industryDescriptions: {
      restaurants: "قوائم الطعام الرقمية والطلب من الطاولة",
      realEstate: "ربط اللافتات بجولات افتراضية للعقارات",
      education: "أوراق عمل تفاعلية وتعلم ذكي",
      events: "حجز التذاكر وتسجيل الدخول السريع",
      retail: "ربط العملاء بالمنتجات والمتاجر",
      marketing: "تتبع التحويلات وزيادة القوائم البريدية"
    },
    errors: {
      notFound: {
        badge: "خطأ 404 • الصفحة غير موجودة",
        title: "ضائع في البُعد الرقمي",
        description: "الصفحة أو وجهة رمز الاستجابة السريعة التي تبحث عنها غير موجودة أو تم نقلها أو انتهت صلاحيتها. دعنا نعيدك إلى المسار الصحيح.",
        homeBtn: "العودة إلى منشئ QR",
        scanBtn: "مسح رمز QR",
        exploreTypes: "استكشف أنواع QR",
        popularTitle: "الوجهات الشائعة",
        helpTitle: "هل تحتاج إلى مساعدة؟",
        helpDesc: "إذا كنت تعتقد أن هذا رابط معطل، فلا تتردد في التواصل مع فريق الدعم لدينا."
      },
      serverError: {
        badge: "خطأ 500 • حدث خلل في النظام",
        title: "انقطاع إشارة النظام الداخلي",
        description: "حدث خطأ غير متوقع أثناء معالجة هذه الصفحة. لا تقلق، محرك إنشاء الرموز المحلي وبياناتك في أمان تام.",
        retryBtn: "إعادة تحميل الصفحة",
        homeBtn: "العودة إلى منشئ QR",
        contactBtn: "الاتصال بالدعم",
        statusTitle: "تشخيص النظام",
        statusClient: "محرك العميل: يعمل بنجاح",
        statusStorage: "السجل المحلي: محفوظ وسليم",
        statusReady: "جاهز للاستعادة"
      }
    }
  },
  ru: {
    title: "Онлайн генератор QR-кодов",
    subtitle: "Создавайте уникальные QR-коды за секунду. Без регистрации и входа в аккаунт.",
    tagline: "Создавайте уникальные QR-коды. Мгновенно.",
    description: "Генерируйте векторные QR-коды высокого разрешения с собственными цветами, формами и логотипами за секунды. 100% бесплатно и без водяных знаков.",
    dir: 'ltr',
    nav: {
      generator: "Генератор",
      history: "Последние QR-коды",
      api: "API код",
      faq: "Вопросы и ответы",
      scanner: "Сканер",
      bulk: "Массовый QR",
      industries: "Отрасли",
      types: "Типы QR",
      privacyPolicy: "Политика конфиденциальности",
      aboutUs: "О нас",
      terms: "Условия и положения",
      contactUs: "Контакты"
    },
    types: {
      url: "Ссылка (URL)",
      text: "Текст",
      wifi: "Wi-Fi",
      contact: "Контакт (vCard)",
      whatsapp: "WhatsApp",
      email: "Email",
      phone: "Телефон",
      crypto: "Криптовалюта",
      social: "Социальные сети",
      feedback: "Обратная связь"
    },
    fields: {
      urlPlaceholder: "Введите ссылку (например, https://example.com)",
      textPlaceholder: "Введите ваш текст здесь...",
      wifiSsid: "Имя сети (SSID)",
      wifiPassword: "Пароль",
      wifiEncryption: "Тип безопасности",
      contactName: "Полное имя",
      contactPhone: "Номер телефона",
      contactEmail: "Email адрес",
      contactCompany: "Компания",
      contactAddress: "Адрес",
      whatsappPhone: "Номер WhatsApp (с кодом страны, например, +79000000000)",
      whatsappMessage: "Шаблон сообщения (необязательно)",
      emailTo: "Кому (Email адрес)",
      emailSubject: "Тема",
      emailBody: "Текст письма",
      phonePlaceholder: "Номер телефона (с кодом страны)",
      cryptoAddress: "Адрес кошелька",
      cryptoCurrency: "Криптовалюта",
      cryptoAmount: "Сумма (необязательно)"
    },
    customization: {
      title: "Настройка дизайна QR",
      colors: "1. Цвета и Градиенты",
      shapes: "2. Дизайн и формы",
      frame: "3. Визуальная рамка",
      logo: "4. Наложение логотипа",
      advanced: "5. Дополнительные настройки",
      fgColor: "Основной цвет (передний план)",
      bgColor: "Цвет фона",
      presets: "Цветовые пресеты",
      bodyStyle: "Узор кода",
      eyeBorder: "Форма угловых рамок",
      eyeCenter: "Форма угловых центров",
      logoUpload: "Загрузить свой логотип (Перетащите или нажмите)",
      logoPreset: "Выбрать готовый логотип",
      logoNone: "Без логотипа / Очистить",
      errorCorrection: "Уровень коррекции ошибок",
      errorCorrectionDesc: "При добавлении логотипа рекомендуется высокий (High) уровень.",
      size: "Размер (пиксели)",
      styles: {
        square: "Квадратный",
        dots: "Точки",
        rounded: "Закругленный",
        classy: "Стильный",
        extraRounded: "Сильно закругленный"
      },
      colorType: "Тип цвета",
      solid: "Сплошной цвет",
      gradient: "Градиент",
      gradType: "Тип градиента",
      linear: "Линейный",
      radial: "Радиальный",
      gradStart: "Начальный цвет",
      gradEnd: "Конечный цвет",
      gradAngle: "Угол вращения",
      frameStyle: "Визуальная рамка",
      frameNone: "Без рамки",
      frameClassic: "Классическая рамка с текстом",
      frameCapsule: "Рамка-капсула",
      frameMinimal: "Минималистичная рамка",
      frameTicket: "Рамка-билет",
      framePointer: "Рамка со стрелкой",
      framePhone: "Рамка-телефон",
      frameTopBottom: "Двусторонняя рамка",
      frameTopLabel: "Верхний текст",
      frameLabel: "Текст рамки",
      frameColor: "Цвет рамки",
      frameGlassmorphic: "Матовое стекло с подсветкой",
      frameNeon: "Неоновый киберпанк",
      frameViewfinder: "Видоискатель камеры",
      frameStamp: "Ретро-марка"
    },
    actions: {
      downloadPng: "Скачать PNG",
      downloadSvg: "Скачать SVG",
      copySuccess: "Скопировано!",
      historyTitle: "Ваша локальная история",
      historyEmpty: "История пуста. Создайте и скачайте QR-код, чтобы он сохранился здесь!",
      historyDate: "Создано",
      historyRecall: "Редактировать",
      historyDelete: "Удалить"
    },
    scanner: {
      title: "Сканировать QR-код",
      uploadDesc: "Перетащите изображение QR-кода сюда или нажмите для загрузки",
      cameraStart: "Включить камеру-сканер",
      cameraStop: "Выключить камеру",
      resultTitle: "Результат сканирования",
      copyBtn: "Копировать результат",
      copyToast: "Результат скопирован в буфер обмена!",
      noCamera: "Камера недоступна или доступ запрещен.",
      scanning: "Поместите QR-код в объектив камеры..."
    },
    bulk: {
      title: "Пакетный генератор QR-кодов",
      inputLabel: "Введите ссылки (По одной на строку)",
      placeholder: "https://пример1.com\nhttps://пример2.com\nhttps://пример3.com",
      generateBtn: "Создать и скачать ZIP",
      successToast: "ZIP-архив успешно создан и скачан!",
      progress: "Создание... Пожалуйста, подождите"
    },
    apiTitle: "Интеграция API для разработчиков",
    apiDesc: "Интегрируйте мгновенную генерацию QR-кодов в свой веб-сайт или приложение с помощью простого клиентского фрагмента кода.",
    industries: {
      restaurants: "Рестораны и кафе",
      realEstate: "Недвижимость",
      education: "Учителя и образование",
      events: "Мероприятия и билеты",
      retail: "Розничная торговля и e-commerce",
      marketing: "Маркетинговые кампании"
    },
    typeDescriptions: {
      url: "Ссылка на сайты и веб-страницы",
      text: "Кодирование простого текста",
      wifi: "Автоматическое подключение к Wi-Fi",
      contact: "Поделиться цифровой визиткой vCard",
      whatsapp: "Сообщения WhatsApp с шаблоном",
      crypto: "Прием криптовалютных платежей",
      email: "Шаблоны писем с темой и текстом",
      phone: "Звонки или отправка текстовых SMS",
      social: "Ссылки на все профили в соцсетях",
      feedback: "Сбор отзывов и оценок клиентов"
    },
    industryDescriptions: {
      restaurants: "Беконтакные меню и заказ со стола",
      realEstate: "Виртуальные туры по недвижимости на знаках",
      education: "Интерактивные рабочие листы для классов",
      events: "Быстрая регистрация билетов и бронирование",
      retail: "Связь клиентов с товарами и магазинами",
      marketing: "Отслеживание конверсий и сбор контактов"
    },
    errors: {
      notFound: {
        badge: "Ошибка 404 • Страница не найдена",
        title: "Затерялись в цифровом пространстве",
        description: "Страница или назначение QR-кода не существует, перемещено или устарело. Давайте вернемся в нужное русло.",
        homeBtn: "Вернуться к генератору QR",
        scanBtn: "Сканировать QR-код",
        exploreTypes: "Обзор типов QR",
        popularTitle: "Популярные разделы",
        helpTitle: "Нужна помощь?",
        helpDesc: "Если вы считаете, что ссылка неисправна, свяжитесь с нашей службой поддержки."
      },
      serverError: {
        badge: "Ошибка 500 • Ошибка сервера",
        title: "Внутренний сигнал системы прерван",
        description: "При отображении страницы произошел непредвиденный сбой. Не волнуйтесь, генератор на стороне клиента и ваши данные в безопасности.",
        retryBtn: "Обновить страницу",
        homeBtn: "Вернуться к генератору QR",
        contactBtn: "Служба поддержки",
        statusTitle: "Диагностика системы",
        statusClient: "Клиентский генератор: Работает",
        statusStorage: "Локальная история: Сохранена и в порядке",
        statusReady: "Готов к восстановлению"
      }
    }
  },
  it: {
    title: "Generatore di Codici QR Online",
    subtitle: "Crea codici QR personalizzati in un secondo. Nessuna registrazione richiesta.",
    tagline: "Crea codici QR personalizzati. All'istante.",
    description: "Genera codici QR vettoriali ad alta risoluzione con colori, forme e loghi personalizzati in pochi secondi. 100% gratuito e senza filigrana.",
    dir: 'ltr',
    nav: {
      generator: "Generatore",
      history: "Codici QR Recenti",
      api: "Snippet API",
      faq: "FAQ",
      scanner: "Scanner",
      bulk: "QR Multipli",
      industries: "Settori",
      types: "Tipi di QR",
      privacyPolicy: "Informativa sulla Privacy",
      aboutUs: "Chi Siamo",
      terms: "Termini e Condizioni",
      contactUs: "Contattaci"
    },
    types: {
      url: "URL",
      text: "Testo",
      wifi: "Wi-Fi",
      contact: "vCard",
      whatsapp: "WhatsApp",
      email: "Email",
      phone: "Telefono",
      crypto: "Cripto",
      social: "Social Media",
      feedback: "Feedback"
    },
    fields: {
      urlPlaceholder: "Inserisci URL (es. https://esempio.it)",
      textPlaceholder: "Inserisci qui il testo semplice...",
      wifiSsid: "Nome Rete (SSID)",
      wifiPassword: "Password",
      wifiEncryption: "Tipo di Protezione",
      contactName: "Nome Completo",
      contactPhone: "Numero di Telefono",
      contactEmail: "Indirizzo Email",
      contactCompany: "Azienda",
      contactAddress: "Indirizzo",
      whatsappPhone: "Numero WhatsApp (con prefisso int., es. +393331234567)",
      whatsappMessage: "Messaggio Predefinito (opzionale)",
      emailTo: "Indirizzo Email Destinatario",
      emailSubject: "Oggetto",
      emailBody: "Testo dell'Email",
      phonePlaceholder: "Numero di Telefono (con prefisso int.)",
      cryptoAddress: "Indirizzo Portafoglio",
      cryptoCurrency: "Criptovaluta",
      cryptoAmount: "Importo (opzionale)"
    },
    customization: {
      title: "Personalizza il Design del QR",
      colors: "1. Colori e Gradienti",
      shapes: "2. Design e Forme",
      frame: "3. Cornice Visiva",
      logo: "4. Sovrapposizione Logo",
      advanced: "5. Impostazioni Avanzate",
      fgColor: "Colore Primo Piano",
      bgColor: "Colore di Sfondo",
      presets: "Preimpostazioni Colore",
      bodyStyle: "Motivo del Corpo",
      eyeBorder: "Stile Bordo Occhio",
      eyeCenter: "Stile Centro Occhio",
      logoUpload: "Carica Logo Personalizzato (Trascina o clicca)",
      logoPreset: "Scegli Logo Preimpostato",
      logoNone: "Nessun Logo / Rimuovi",
      errorCorrection: "Livello di Correzione Errori",
      errorCorrectionDesc: "Alto (H) è consigliato quando si aggiunge un logo.",
      size: "Dimensione (pixel)",
      styles: {
        square: "Quadrato",
        dots: "Punti",
        rounded: "Arrotondato",
        classy: "Elegante",
        extraRounded: "Molto Arrotondato"
      },
      colorType: "Tipo di Colore",
      solid: "Tinta Unita",
      gradient: "Gradiente",
      gradType: "Tipo di Gradiente",
      linear: "Lineare",
      radial: "Radiale",
      gradStart: "Colore Iniziale",
      gradEnd: "Colore Finale",
      gradAngle: "Angolo di Rotazione",
      frameStyle: "Cornice Visiva",
      frameNone: "Nessuna Cornice",
      frameClassic: "Bordo Cartellino Classico",
      frameCapsule: "Cornice a Capsula",
      frameMinimal: "Cornice Minimalista",
      frameTicket: "Cornice Biglietto",
      framePointer: "Cornice con Indicatore",
      framePhone: "Mockup Smartphone",
      frameTopBottom: "Cornice Superiore e Inferiore",
      frameTopLabel: "Testo Superiore",
      frameLabel: "Testo Cornice",
      frameColor: "Colore Cornice",
      frameGlassmorphic: "Effetto Vetro Sfumato",
      frameNeon: "Neon Cyberpunk",
      frameViewfinder: "Mirino Fotocamera",
      frameStamp: "Timbro Vintage"
    },
    actions: {
      downloadPng: "Scarica PNG",
      downloadSvg: "Scarica SVG",
      copySuccess: "Copiato!",
      historyTitle: "Cronologia Locale",
      historyEmpty: "Nessuna cronologia trovata. Genera e scarica un codice QR per salvarlo qui!",
      historyDate: "Creato il",
      historyRecall: "Modifica Codice",
      historyDelete: "Rimuovi"
    },
    scanner: {
      title: "Scansiona Codice QR",
      uploadDesc: "Trascina qui un'immagine con codice QR o clicca per caricarla",
      cameraStart: "Avvia Scanner Fotocamera",
      cameraStop: "Ferma Fotocamera",
      resultTitle: "Risultato Scansione",
      copyBtn: "Copia Link",
      copyToast: "Risultato copiato negli appunti!",
      noCamera: "Fotocamera non disponibile o accesso negato.",
      scanning: "Allinea il codice QR nell'inquadratura..."
    },
    bulk: {
      title: "Generatore QR Multiplo",
      inputLabel: "Inserisci i link (uno per riga)",
      placeholder: "https://esempio1.com\nhttps://esempio2.com\nhttps://esempio3.com",
      generateBtn: "Genera e Scarica ZIP",
      successToast: "ZIP creato e scaricato con successo!",
      progress: "Generazione in corso... Attendere"
    },
    apiTitle: "Integrazione API per Sviluppatori",
    apiDesc: "Integra la generazione istantanea di codici QR nel tuo sito o applicazione con un semplice snippet lato client.",
    industries: {
      restaurants: "Ristoranti e Bar",
      realEstate: "Immobiliare",
      education: "Istruzione e Scuole",
      events: "Eventi e Biglietti",
      retail: "Vendita al Dettaglio ed E-commerce",
      marketing: "Campagne di Marketing"
    },
    typeDescriptions: {
      url: "Collega a siti web e pagine",
      text: "Codifica messaggi di testo semplice",
      wifi: "Connessione automatica al Wi-Fi",
      contact: "Condividi biglietti da visita digitali",
      whatsapp: "Invia messaggi WhatsApp precompilati",
      crypto: "Accetta pagamenti in criptovaluta",
      email: "Componi modelli email pronti",
      phone: "Chiama o invia messaggi SMS",
      social: "Collega a tutti i profili social",
      feedback: "Raccogli recensioni e valutazioni"
    },
    industryDescriptions: {
      restaurants: "Menu contactless e ordini al tavolo",
      realEstate: "Collega cartelli immobiliari a tour virtuali",
      education: "Schede didattiche e apprendimento interattivo",
      events: "Check-in rapido per biglietti e prenotazioni",
      retail: "Collega i clienti a prodotti e negozi",
      marketing: "Monitora conversioni e fidelizza clienti"
    },
    errors: {
      notFound: {
        badge: "Errore 404 • Pagina Non Trovata",
        title: "Perso nella Dimensione Digitale",
        description: "La pagina o la destinazione del codice QR che stai cercando non esiste, è stata spostata o è scaduta. Torniamo sulla strada giusta.",
        homeBtn: "Torna al Generatore QR",
        scanBtn: "Scansiona un Codice QR",
        exploreTypes: "Esplora Tipi di QR",
        popularTitle: "Destinazioni Popolari",
        helpTitle: "Hai bisogno di aiuto?",
        helpDesc: "Se ritieni che si tratti di un link interrotto, non esitare a contattare il nostro team."
      },
      serverError: {
        badge: "Errore 500 • Problema Rilevato",
        title: "Segnale di Sistema Interrotto",
        description: "Si è verificato un errore imprevisto durante il rendering della pagina. Il motore di generazione QR lato client e i dati locali sono al sicuro.",
        retryBtn: "Ricarica Pagina",
        homeBtn: "Torna al Generatore QR",
        contactBtn: "Contatta il Supporto",
        statusTitle: "Diagnostica di Sistema",
        statusClient: "Generatore Client: Operativo",
        statusStorage: "Cronologia Locale: Salvata e Intatta",
        statusReady: "Pronto per il Ripristino"
      }
    }
  },
  ja: {
    title: "オンラインQRコード作成ツール",
    subtitle: "登録不要ですぐに作れる、高品質なカスタムQRコードジェネレーター。",
    tagline: "カスタムQRコードを瞬時に作成。",
    description: "お好みのカラー、形状、ロゴを組み合わせて高解像度ベクターQRコードを無料作成。透かしロゴなしで商用利用も可能です。",
    dir: 'ltr',
    nav: {
      generator: "作成ツール",
      history: "履歴",
      api: "開発者API",
      faq: "よくある質問",
      scanner: "QRスキャナー",
      bulk: "一括作成",
      industries: "活用事例",
      types: "QRタイプ一覧",
      privacyPolicy: "プライバシーポリシー",
      aboutUs: "当サイトについて",
      terms: "利用規約",
      contactUs: "お問い合わせ"
    },
    types: {
      url: "URL",
      text: "テキスト",
      wifi: "Wi-Fi接続",
      contact: "連絡先(vCard)",
      whatsapp: "WhatsApp",
      email: "メール",
      phone: "電話・SMS",
      crypto: "仮想通貨",
      social: "SNSリンク",
      feedback: "評価・レビュー"
    },
    fields: {
      urlPlaceholder: "URLを入力 (例: https://example.com)",
      textPlaceholder: "テキストをここに入力...",
      wifiSsid: "ネットワーク名 (SSID)",
      wifiPassword: "パスワード",
      wifiEncryption: "暗号化方式",
      contactName: "氏名",
      contactPhone: "電話番号",
      contactEmail: "メールアドレス",
      contactCompany: "会社名・組織名",
      contactAddress: "住所",
      whatsappPhone: "WhatsApp番号 (国番号付き, 例: +819012345678)",
      whatsappMessage: "定型メッセージ (任意)",
      emailTo: "送信先メールアドレス",
      emailSubject: "件名",
      emailBody: "本文",
      phonePlaceholder: "電話番号 (国番号付き)",
      cryptoAddress: "ウォレットアドレス",
      cryptoCurrency: "暗号資産",
      cryptoAmount: "送金額 (任意)"
    },
    customization: {
      title: "QRコードのデザインカスタマイズ",
      colors: "1. カラー＆グラデーション",
      shapes: "2. デザインと形状",
      frame: "3. フレーム枠",
      logo: "4. ロゴの追加",
      advanced: "5. 詳細設定",
      fgColor: "メインカラー",
      bgColor: "背景カラー",
      presets: "カラープリセット",
      bodyStyle: "コード模様パターン",
      eyeBorder: "角枠の形状",
      eyeCenter: "角の中心形状",
      logoUpload: "ロゴ画像をアップロード (ドラッグ＆ドロップまたはクリック)",
      logoPreset: "プリセットロゴを選択",
      logoNone: "ロゴなし / クリア",
      errorCorrection: "誤り訂正レベル",
      errorCorrectionDesc: "ロゴを追加する場合は「高 (H)」を推奨します。",
      size: "画像サイズ (ピクセル)",
      styles: {
        square: "四角",
        dots: "ドット",
        rounded: "丸角",
        classy: "クラシック",
        extraRounded: "円形"
      },
      colorType: "カラー形式",
      solid: "単色",
      gradient: "グラデーション",
      gradType: "グラデーションタイプ",
      linear: "線形",
      radial: "円形",
      gradStart: "開始色",
      gradEnd: "終了色",
      gradAngle: "角度",
      frameStyle: "ビジュアルフレーム",
      frameNone: "フレームなし",
      frameClassic: "クラシック枠",
      frameCapsule: "カプセル枠",
      frameMinimal: "ミニマル枠",
      frameTicket: "チケット枠",
      framePointer: "ポインター枠",
      framePhone: "スマートフォン風",
      frameTopBottom: "上下フレーム",
      frameTopLabel: "上部テキスト",
      frameLabel: "フレームテキスト",
      frameColor: "フレームカラー",
      frameGlassmorphic: "グラスモーフィズム",
      frameNeon: "ネオンサイバー",
      frameViewfinder: "カメラファインダー",
      frameStamp: "レトロスタンプ"
    },
    actions: {
      downloadPng: "PNG画像を保存",
      downloadSvg: "SVGベクターを保存",
      copySuccess: "コピーしました！",
      historyTitle: "作成履歴",
      historyEmpty: "履歴はありません。QRコードを作成・保存するとここに表示されます。",
      historyDate: "作成日時",
      historyRecall: "再編集",
      historyDelete: "削除"
    },
    scanner: {
      title: "QRコードリーダー・スキャナー",
      uploadDesc: "QRコード画像をここにドラッグ＆ドロップ、またはクリックして選択",
      cameraStart: "カメラで読み取る",
      cameraStop: "カメラを停止",
      resultTitle: "読み取り結果",
      copyBtn: "リンクをコピー",
      copyToast: "クリップボードにコピーしました！",
      noCamera: "カメラが利用できないか、アクセスが拒否されました。",
      scanning: "QRコードを枠に合わせてください..."
    },
    bulk: {
      title: "QRコード一括生成",
      inputLabel: "リンクを入力 (1行に1つ)",
      placeholder: "https://example1.com\nhttps://example2.com\nhttps://example3.com",
      generateBtn: "一括作成してZIP保存",
      successToast: "ZIPファイルが正常に作成・ダウンロードされました！",
      progress: "生成中... しばらくお待ちください"
    },
    apiTitle: "開発者向けAPI連携",
    apiDesc: "軽量なクライアントスクリプトで、Webサイトやアプリに瞬時のQRコード生成機能を組み込めます。",
    industries: {
      restaurants: "飲食店・カフェ",
      realEstate: "不動産",
      education: "教育・学校",
      events: "イベント・チケット",
      retail: "小売・EC店舗",
      marketing: "マーケティング"
    },
    typeDescriptions: {
      url: "WebサイトやLPへの直接リンク",
      text: "テキストメッセージのエンコード",
      wifi: "Wi-Fiネットワークへ自動接続",
      contact: "電子名刺(vCard)の連絡先共有",
      whatsapp: "定型文付きWhatsAppメッセージ",
      crypto: "暗号資産・仮想通貨の支払い受付",
      email: "件名や本文入りのメール作成",
      phone: "電話発信やSMS送信",
      social: "各SNSプロフィールへのリンク",
      feedback: "口コミや顧客アンケートの収集"
    },
    industryDescriptions: {
      restaurants: "非接触テーブルメニューとセルフオーダー",
      realEstate: "看板からバーチャル内覧ツアーへ誘導",
      education: "教材プリントやインタラクティブな学習",
      events: "電子チケットのスムーズな入場受付",
      retail: "商品パッケージから店舗ページへ接続",
      marketing: "キャンペーン効果測定と会員登録の促進"
    },
    errors: {
      notFound: {
        badge: "404 エラー • ページが見つかりません",
        title: "デジタル空間で見失いました",
        description: "お探しのページまたはQRコードのリンク先は存在しないか、移動または期限切れの可能性があります。",
        homeBtn: "QR作成ツールに戻る",
        scanBtn: "QRコードをスキャン",
        exploreTypes: "QRタイプ一覧を見る",
        popularTitle: "よく使われているページ",
        helpTitle: "お困りですか？",
        helpDesc: "リンクの不具合と思われる場合は、サポートまでお気軽にお問い合わせください。"
      },
      serverError: {
        badge: "500 エラー • システムエラー",
        title: "システム信号が中断されました",
        description: "ページの表示中に予期せぬエラーが発生しました。ブラウザ内のQR生成エンジンとお手元のデータは安全です。",
        retryBtn: "ページを再読み込み",
        homeBtn: "QR作成ツールに戻る",
        contactBtn: "サポートへ連絡",
        statusTitle: "システム診断",
        statusClient: "クライアント生成エンジン: 正常稼働中",
        statusStorage: "ローカル保存履歴: 正常に保護されています",
        statusReady: "復旧準備完了"
      }
    }
  },
  ko: {
    title: "온라인 QR 코드 생성기",
    subtitle: "회원가입 없이 1초 만에 맞춤형 QR 코드를 무료로 제작하세요.",
    tagline: "나만의 맞춤 QR 코드를 즉시 생성하세요.",
    description: "원하는 색상, 디자인, 로고를 조합하여 고해상도 벡터 QR 코드를 몇 초 만에 무료로 생성하세요. 워터마크가 없습니다.",
    dir: 'ltr',
    nav: {
      generator: "생성기",
      history: "최근 QR 코드",
      api: "API 스니펫",
      faq: "자주 묻는 질문",
      scanner: "스캐너",
      bulk: "대량 생성",
      industries: "활용 분야",
      types: "QR 종류",
      privacyPolicy: "개인정보처리방침",
      aboutUs: "소개",
      terms: "이용약관",
      contactUs: "문의하기"
    },
    types: {
      url: "웹사이트 URL",
      text: "텍스트",
      wifi: "와이파이",
      contact: "연락처(vCard)",
      whatsapp: "WhatsApp",
      email: "이메일",
      phone: "전화·SMS",
      crypto: "암호화폐",
      social: "소셜 미디어",
      feedback: "피드백·리뷰"
    },
    fields: {
      urlPlaceholder: "URL 입력 (예: https://example.com)",
      textPlaceholder: "텍스트를 입력하세요...",
      wifiSsid: "네트워크 이름 (SSID)",
      wifiPassword: "비밀번호",
      wifiEncryption: "보안 방식",
      contactName: "이름",
      contactPhone: "전화번호",
      contactEmail: "이메일 주소",
      contactCompany: "회사 또는 소속",
      contactAddress: "주소",
      whatsappPhone: "WhatsApp 번호 (국가번호 포함, 예: +821012345678)",
      whatsappMessage: "사전 작성 메시지 (선택 사항)",
      emailTo: "받는 사람 이메일",
      emailSubject: "제목",
      emailBody: "이메일 내용",
      phonePlaceholder: "전화번호 (국가번호 포함)",
      cryptoAddress: "지갑 주소",
      cryptoCurrency: "암호화폐 종류",
      cryptoAmount: "금액 (선택 사항)"
    },
    customization: {
      title: "QR 디자인 맞춤 설정",
      colors: "1. 색상 및 그라데이션",
      shapes: "2. 모양 및 디자인",
      frame: "3. 비주얼 프레임",
      logo: "4. 로고 추가",
      advanced: "5. 고급 설정",
      fgColor: "전경 색상",
      bgColor: "배경 색상",
      presets: "색상 프리셋",
      bodyStyle: "본체 패턴",
      eyeBorder: "모서리 외곽 모양",
      eyeCenter: "모서리 내부 모양",
      logoUpload: "사용자 로고 업로드 (드래그 앤 드롭 또는 클릭)",
      logoPreset: "프리셋 로고 선택",
      logoNone: "로고 없음 / 제거",
      errorCorrection: "오류 복원 수준",
      errorCorrectionDesc: "로고 삽입 시 '높음(H)' 설정을 권장합니다.",
      size: "크기 (픽셀)",
      styles: {
        square: "기본 사각",
        dots: "도트",
        rounded: "둥근 사각",
        classy: "클래식",
        extraRounded: "원형"
      },
      colorType: "색상 유형",
      solid: "단색",
      gradient: "그라데이션",
      gradType: "그라데이션 방향",
      linear: "선형",
      radial: "원형",
      gradStart: "시작 색상",
      gradEnd: "끝 색상",
      gradAngle: "회전 각도",
      frameStyle: "비주얼 프레임",
      frameNone: "프레임 없음",
      frameClassic: "클래식 태그 테두리",
      frameCapsule: "캡슐 프레임",
      frameMinimal: "미니멀 프레임",
      frameTicket: "티켓 프레임",
      framePointer: "포인터 프레임",
      framePhone: "스마트폰 목업",
      frameTopBottom: "상하 프레임",
      frameTopLabel: "상단 문구",
      frameLabel: "프레임 문구",
      frameColor: "프레임 색상",
      frameGlassmorphic: "글래스모피즘",
      frameNeon: "네온 사이버펑크",
      frameViewfinder: "카메라 뷰파인더",
      frameStamp: "레트로 스탬프"
    },
    actions: {
      downloadPng: "PNG 다운로드",
      downloadSvg: "SVG 다운로드",
      copySuccess: "복사되었습니다!",
      historyTitle: "내 로컬 보관함",
      historyEmpty: "저장된 기록이 없습니다. QR 코드를 생성하고 다운로드하면 여기에 보관됩니다!",
      historyDate: "생성일",
      historyRecall: "코드 편집",
      historyDelete: "삭제"
    },
    scanner: {
      title: "QR 코드 스캐너",
      uploadDesc: "QR 코드 이미지를 드래그 앤 드롭하거나 클릭하여 업로드하세요",
      cameraStart: "카메라 스캔 시작",
      cameraStop: "카메라 중지",
      resultTitle: "스캔 결과",
      copyBtn: "링크 복사",
      copyToast: "결과가 클립보드에 복사되었습니다!",
      noCamera: "카메라를 사용할 수 없거나 접근이 거부되었습니다.",
      scanning: "카메라 화면에 QR 코드를 맞춰주세요..."
    },
    bulk: {
      title: "QR 코드 대량 생성기",
      inputLabel: "링크 입력 (한 줄에 하나씩)",
      placeholder: "https://example1.com\nhttps://example2.com\nhttps://example3.com",
      generateBtn: "대량 생성 및 ZIP 다운로드",
      successToast: "ZIP 파일이 성공적으로 생성되어 다운로드되었습니다!",
      progress: "생성 중입니다... 잠시만 기다려주세요"
    },
    apiTitle: "개발자 API 연동",
    apiDesc: "가벼운 클라이언트 스크립트를 통해 웹사이트나 앱에 즉각적인 QR 코드 생성 기능을 손쉽게 연동하세요.",
    industries: {
      restaurants: "식당 및 카페",
      realEstate: "부동산",
      education: "교육 및 학교",
      events: "행사 및 티켓",
      retail: "소매 및 이커머스",
      marketing: "마케팅 캠페인"
    },
    typeDescriptions: {
      url: "웹사이트 및 랜딩페이지 연결",
      text: "일반 텍스트 메시지 인코딩",
      wifi: "비밀번호 없이 Wi-Fi 자동 연결",
      contact: "디지털 명함(vCard) 연락처 공유",
      whatsapp: "사전 작성된 WhatsApp 메시지 전송",
      crypto: "암호화폐 지갑 결제 수령",
      email: "제목과 본문이 포함된 이메일 작성",
      phone: "전화 걸기 또는 SMS 문자 전송",
      social: "모든 소셜 미디어 프로필 연결",
      feedback: "고객 리뷰 및 설문조사 수집"
    },
    industryDescriptions: {
      restaurants: "비접촉 스마트 메뉴판 및 테이블 주문",
      realEstate: "부동산 안내판에서 가상 투어로 바로 연결",
      education: "인터랙티브 학습지 및 스마트 교실 수업",
      events: "빠른 전자 티켓 확인 및 예약 안내",
      retail: "고객을 상품 상세 페이지와 매장으로 연결",
      marketing: "전환율 추적 및 뉴스레터 구독자 확보"
    },
    errors: {
      notFound: {
        badge: "404 오류 • 페이지를 찾을 수 없음",
        title: "디지털 공간에서 길을 잃었습니다",
        description: "찾으시는 페이지 또는 QR 코드 대상이 존재하지 않거나, 이동되었거나 만료되었습니다. 다시 홈으로 안내해 드릴게요.",
        homeBtn: "QR 생성기로 돌아가기",
        scanBtn: "QR 코드 스캔하기",
        exploreTypes: "QR 종류 둘러보기",
        popularTitle: "인기 바로가기",
        helpTitle: "도움이 필요하신가요?",
        helpDesc: "잘못된 링크라고 생각되시면 언제든지 저희 지원팀에 문의해 주세요."
      },
      serverError: {
        badge: "500 오류 • 시스템 문제 발생",
        title: "시스템 신호가 일시 중단되었습니다",
        description: "페이지를 불러오는 중 예상치 못한 문제가 발생했습니다. 브라우저 내 QR 생성 엔진과 보관된 데이터는 안전합니다.",
        retryBtn: "페이지 새로고침",
        homeBtn: "QR 생성기로 돌아가기",
        contactBtn: "고객 지원팀 문의",
        statusTitle: "시스템 진단",
        statusClient: "클라이언트 생성기: 정상 작동 중",
        statusStorage: "로컬 보관함: 안전하게 유지됨",
        statusReady: "복구 준비 완료"
      }
    }
  }
};
