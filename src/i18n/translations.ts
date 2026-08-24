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
    frameLabel: string;
    frameColor: string;
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
      types: "QR Types"
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
      logo: "3. Logo Overlay",
      advanced: "4. Advanced Settings",
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
      frameLabel: "Frame Text",
      frameColor: "Frame Color"
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
      types: "Tipos de QR"
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
      logo: "3. Logotipo Superpuesto",
      advanced: "4. Ajustes Avanzados",
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
      frameLabel: "Texto del Marco",
      frameColor: "Color del Marco"
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
      types: "Types de QR"
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
      logo: "3. Logo incrusté",
      advanced: "4. Paramètres Avancés",
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
      frameLabel: "Texte du Cadre",
      frameColor: "Couleur du Cadre"
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
      types: "QR-Typen"
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
      logo: "3. Logo-Overlay",
      advanced: "4. Erweiterte Einstellungen",
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
      frameLabel: "Rahmentext",
      frameColor: "Rahmenfarbe"
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
      types: "Tipos de QR"
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
      logo: "3. Logotipo Sobreposto",
      advanced: "4. Configurações Avançadas",
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
      frameLabel: "Texto da Moldura",
      frameColor: "Cor da Moldura"
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
    }
  },
  zh: {
    title: "在线二维码生成器",
    subtitle: "秒级创建自定义二维码。无需注册或登录。",
    tagline: "即刻创建自定义二维码。",
    description: "数秒内生成具有自定义颜色、形状和徽标的高分辨率矢量二维码。100% 免费，无水印。",
    dir: 'ltr',
    nav: {
      generator: "生成器",
      history: "历史记录",
      api: "API 接口",
      faq: "常见问题",
      scanner: "扫码器",
      bulk: "批量生成",
      industries: "行业应用",
      types: "二维码分类"
    },
    types: {
      url: "网址",
      text: "文本",
      wifi: "Wi-Fi",
      contact: "名片",
      whatsapp: "WhatsApp",
      email: "电子邮件",
      phone: "电话",
      crypto: "加密货币",
      social: "社交媒体",
      feedback: "反馈"
    },
    fields: {
      urlPlaceholder: "输入网址（例如：https://example.com）",
      textPlaceholder: "在此处输入纯文本...",
      wifiSsid: "网络名称 (SSID)",
      wifiPassword: "密码",
      wifiEncryption: "安全类型",
      contactName: "姓名",
      contactPhone: "电话号码",
      contactEmail: "电子邮件地址",
      contactCompany: "公司",
      contactAddress: "地址",
      whatsappPhone: "WhatsApp 号码（带国家代码，例如：+8613800000000）",
      whatsappMessage: "预填消息（可选）",
      emailTo: "收件人邮箱",
      emailSubject: "主题",
      emailBody: "邮件正文",
      phonePlaceholder: "电话号码（带国家代码）",
      cryptoAddress: "钱包地址",
      cryptoCurrency: "加密货币类型",
      cryptoAmount: "金额（可选）"
    },
    customization: {
      title: "自定义二维码设计",
      colors: "1. 颜色与渐变",
      shapes: "2. 形状与样式",
      logo: "3. 插入徽标 (Logo)",
      advanced: "4. 高级设置",
      fgColor: "前景色",
      bgColor: "背景色",
      presets: "预设颜色",
      bodyStyle: "二维码码点样式",
      eyeBorder: "定位角边框样式",
      eyeCenter: "定位角中心样式",
      logoUpload: "上传自定义 Logo（拖拽或点击）",
      logoPreset: "选择预设 Logo",
      logoNone: "无 Logo / 清除",
      errorCorrection: "容错级别 (ECC)",
      errorCorrectionDesc: "使用 Logo 时，建议选择 High 级别。",
      size: "尺寸大小 (像素)",
      styles: {
        square: "直角方形",
        dots: "圆点样式",
        rounded: "圆角方形",
        classy: "艺术化",
        extraRounded: "超圆角"
      },
      colorType: "着色模式",
      solid: "单色/纯色",
      gradient: "渐变色",
      gradType: "渐变模式",
      linear: "线性渐变",
      radial: "径向渐变",
      gradStart: "起点颜色",
      gradEnd: "终点颜色",
      gradAngle: "旋转角度",
      frameStyle: "视觉外框",
      frameNone: "无外框",
      frameClassic: "经典标签边框",
      frameLabel: "标签文字",
      frameColor: "外框颜色"
    },
    actions: {
      downloadPng: "下载 PNG",
      downloadSvg: "下载 SVG",
      copySuccess: "已复制!",
      historyTitle: "本地保存的历史记录",
      historyEmpty: "暂无历史记录。生成并下载二维码后将自动保存在这里！",
      historyDate: "创建时间",
      historyRecall: "编辑此码",
      historyDelete: "删除"
    },
    scanner: {
      title: "在线扫描二维码",
      uploadDesc: "拖入二维码图片到此，或点击上传文件",
      cameraStart: "打开摄像头扫描",
      cameraStop: "关闭摄像头",
      resultTitle: "扫描结果",
      copyBtn: "复制内容",
      copyToast: "结果已复制到剪贴板！",
      noCamera: "无法使用摄像头或已被拒绝访问。",
      scanning: "请将二维码放入摄像头对焦框中..."
    },
    bulk: {
      title: "批量二维码生成器",
      inputLabel: "输入链接（一行一个）",
      placeholder: "https://example1.com\nhttps://example2.com\nhttps://example3.com",
      generateBtn: "生成并下载 ZIP",
      successToast: "ZIP 压缩包已成功生成并下载！",
      progress: "生成中... 请稍候"
    },
    apiTitle: "开发者 API 集成",
    apiDesc: "通过简单的客户端代码片段，在您的网站或应用程序中集成即时二维码生成功能。",
    industries: {
      restaurants: "餐饮与咖啡馆",
      realEstate: "房地产",
      education: "教师与教育",
      events: "活动与门票",
      retail: "零售与电子商务",
      marketing: "营销活动"
    },
    typeDescriptions: {
      url: "链接到网站和在线网页",
      text: "编码纯文本和离线消息",
      wifi: "扫码自动连接 Wi-Fi 网络",
      contact: "分享电子名片和联系方式",
      whatsapp: "发送预填内容的聊天消息",
      crypto: "扫码接收加密货币付款",
      email: "起草预填的主题与邮件正文",
      phone: "拨打电话号码或发送短信",
      social: "聚合跳转所有社交媒体主页",
      feedback: "收集客户评价和星级打分"
    },
    industryDescriptions: {
      restaurants: "无接触数字化菜单与餐桌扫码点餐",
      realEstate: "将实体指示牌桥接到虚拟房产看房",
      education: "互动式课堂学习、作业与电子讲义",
      events: "快捷的电子门票验票签到与活动预订",
      retail: "无缝引导顾客查看商品详情与店铺促销",
      marketing: "精准追踪广告效果并扩大邮件订阅列表"
    }
  },
  hi: {
    title: "ऑनलाइन क्यूआर कोड जनरेटर",
    subtitle: "एक सेकंड में कस्टमाइज़्ड क्यूआर कोड बनाएं। बिना किसी साइनइन या लॉगिन के।",
    tagline: "तुरंत बनाएं कस्टमाइज़्ड क्यूआर कोड।",
    description: "कुछ ही सेकंड में कस्टम रंगों, आकारों और लोगो के साथ उच्च-रिज़ॉल्यूशन,  क्यूआर कोड जेनरेट करें। बिना किसी वॉटरमार्क के 100% मुफ़्त।",
    dir: 'ltr',
    nav: {
      generator: "जनरेटर",
      history: "हाल के क्यूआर कोड",
      api: "API कोड",
      faq: "सामान्य प्रश्न",
      scanner: "स्कैनर",
      bulk: "थोक क्यूआर",
      industries: "उद्योग",
      types: "क्यूआर प्रकार"
    },
    types: {
      url: "यूआरएल",
      text: "टेक्स्ट",
      wifi: "वाई-फाई",
      contact: "संपर्क (vCard)",
      whatsapp: "व्हाट्सएप",
      email: "ईमेल",
      phone: "फ़ोन",
      crypto: "क्रिप्टो",
      social: "सोशल मीडिया",
      feedback: "प्रतिक्रिया"
    },
    fields: {
      urlPlaceholder: "यूआरएल दर्ज करें (जैसे, https://example.com)",
      textPlaceholder: "यहाँ अपना टेक्स्ट लिखें...",
      wifiSsid: "नेटवर्क का नाम (SSID)",
      wifiPassword: "पासवर्ड",
      wifiEncryption: "सुरक्षा का प्रकार",
      contactName: "पूरा नाम",
      contactPhone: "फ़ोन नंबर",
      contactEmail: "ईमेल पता",
      contactCompany: "कंपनी",
      contactAddress: "पता",
      whatsappPhone: "व्हाट्सएप नंबर (देश कोड के साथ, जैसे, +919876543210)",
      whatsappMessage: "पहले से लिखा संदेश (वैकल्पिक)",
      emailTo: "प्राप्तकर्ता का ईमेल",
      emailSubject: "विषय",
      emailBody: "ईमेल का मुख्य भाग",
      phonePlaceholder: "फ़ोन नंबर (देश कोड के साथ)",
      cryptoAddress: "वॉलेट का पता",
      cryptoCurrency: "क्रिप्टोकरेंसी",
      cryptoAmount: "राशि (वैकल्पिक)"
    },
    customization: {
      title: "क्यूआर डिज़ाइन बदलें",
      colors: "1. रंग और ग्रेडिएंट",
      shapes: "2. डिज़ाइन और आकार",
      logo: "3. लोगो लगाएं",
      advanced: "4. उन्नत सेटिंग्स",
      fgColor: "मुख्य रंग (Foreground)",
      bgColor: "पृष्ठभूमि रंग (Background)",
      presets: "रंग के प्रीसेट",
      bodyStyle: "डॉट का पैटर्न",
      eyeBorder: "आई फ्रेम की शैली",
      eyeCenter: "आई बॉल की शैली",
      logoUpload: "कस्टम लोगो अपलोड करें (ड्रैग करें या क्लिक करें)",
      logoPreset: "पहले से मौजूद लोगो चुनें",
      logoNone: "कोई लोगो नहीं / हटाएं",
      errorCorrection: "त्रुटि सुधार स्तर (ECC)",
      errorCorrectionDesc: "लोगो जोड़ते समय 'High' सुधार स्तर की अनुशंसा की जाती है।",
      size: "आकार (पिक्सेल)",
      styles: {
        square: "चौकोर",
        dots: "बिंदु (Dots)",
        rounded: "घूमा हुआ चौकोर",
        classy: "क्लासी",
        extraRounded: "ज्यादा घूमा हुआ"
      },
      colorType: "रंग का प्रकार",
      solid: "सॉलिड रंग",
      gradient: "ग्रेडिएंट (रंग मिश्रण)",
      gradType: "ग्रेडिएंट का प्रकार",
      linear: "रेखीय (Linear)",
      radial: "त्रिज्यीय (Radial)",
      gradStart: "शुरुआती रंग",
      gradEnd: "अंतिम रंग",
      gradAngle: "घूर्णन कोण",
      frameStyle: "विजुअल फ्रेम",
      frameNone: "कोई फ्रेम नहीं",
      frameClassic: "क्लासिक टैग बॉर्डर",
      frameLabel: "फ्रेम का टेक्स्ट",
      frameColor: "फ्रेम का रंग"
    },
    actions: {
      downloadPng: "PNG डाउनलोड करें",
      downloadSvg: "SVG डाउनलोड करें",
      copySuccess: "कॉपी हो गया!",
      historyTitle: "आपका स्थानीय इतिहास",
      historyEmpty: "कोई इतिहास नहीं मिला। इसे यहाँ सहेजने के लिए एक क्यूआर कोड बनाएं और डाउनलोड करें!",
      historyDate: "बनाने की तारीख",
      historyRecall: "कोड बदलें",
      historyDelete: "हटाएं"
    },
    scanner: {
      title: "क्यूआर कोड स्कैन करें",
      uploadDesc: "यहाँ एक क्यूआर कोड इमेज खींचकर लाएँ, या अपलोड करने के लिए क्लिक करें",
      cameraStart: "कैमरा स्कैनर शुरू करें",
      cameraStop: "कैमरा बंद करें",
      resultTitle: "स्कैन किया परिणाम",
      copyBtn: "परिणाम कॉपी करें",
      copyToast: "परिणाम क्लिपबोर्ड पर कॉपी हो गया!",
      noCamera: "कैमरा उपलब्ध नहीं है या अनुमति नहीं है।",
      scanning: "कैमरा फ्रेम में क्यूआर कोड लाएँ..."
    },
    bulk: {
      title: "थोक क्यूआर कोड जनरेटर",
      inputLabel: "लिंक दर्ज करें (प्रति पंक्ति एक)",
      placeholder: "https://example1.com\nhttps://example2.com\nhttps://example3.com",
      generateBtn: "बनाएं और ZIP डाउनलोड करें",
      successToast: "ZIP फाइल सफलतापूर्वक बनाई और डाउनलोड की गई!",
      progress: "बन रहा है... कृपया प्रतीक्षा करें"
    },
    apiTitle: "डेवलपर API एकीकरण",
    apiDesc: "एक साधारण क्लाइंट-साइड स्निपेट के साथ अपनी वेबसाइट या एप्लिकेशन में त्वरित क्यूआर कोड जनरेशन को एकीकृत करें।",
    industries: {
      restaurants: "रेस्तरां और कैफे",
      realEstate: "रियल एस्टेट",
      education: "शिक्षक और शिक्षा",
      events: "इवेंट और टिकट",
      retail: "रिटेल और ई-कॉमर्स",
      marketing: "मार्केटिंग अभियान"
    },
    typeDescriptions: {
      url: "वेबसाइटों और ऑनलाइन पेजों के लिए लिंक",
      text: "सादा पाठ संदेश कोड करें",
      wifi: "वाई-फाई से स्वचालित रूप से कनेक्ट करें",
      contact: "डिजिटल संपर्क कार्ड साझा करें",
      whatsapp: "पहले से लिखे संदेश भेजें",
      crypto: "क्रिप्टोकरेंसी भुगतान स्वीकार करें",
      email: "पहले से भरे हुए ईमेल ड्राफ्ट करें",
      phone: "कॉल करें या एसएमएस भेजें",
      social: "सोशल मीडिया प्रोफाइल लिंक करें",
      feedback: "समीक्षाएं और रेटिंग एकत्र करें"
    },
    industryDescriptions: {
      restaurants: "संपर्क रहित मेनू और टेबल ऑर्डरिंग",
      realEstate: "वर्चुअल प्रॉपर्टी टूर के लिए क्यूआर",
      education: "इंटरैक्टिव वर्कशीट और क्लासरूम लर्निंग",
      events: "त्वरित टिकट चेक-इन और बुकिंग",
      retail: "ग्राहकों को उत्पाद और स्टोर से जोड़ें",
      marketing: "रूपांतरण ट्रैक करें और मेलिंग सूची बढ़ाएं"
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
      types: "أنواع الرموز"
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
      logo: "3. إضافة شعار (Logo)",
      advanced: "4. إعدادات متقدمة",
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
      frameLabel: "نص الإطار",
      frameColor: "لون الإطار"
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
      types: "Типы QR"
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
      logo: "3. Наложение логотипа",
      advanced: "4. Дополнительные настройки",
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
      frameLabel: "Текст на рамке",
      frameColor: "Цвет рамки"
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
    }
  }
};
