export interface FaqItem {
  id: string;
  tag: 'free' | 'logo' | 'safe' | 'api';
  question: string;
  answer: string;
}

export interface FaqLocaleData {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  showMore: string;
  showLess: string;
  tags: {
    all: string;
    free: string;
    logo: string;
    safe: string;
    api: string;
  };
  items: FaqItem[];
}

export const faqData: Record<string, FaqLocaleData> = {
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Have questions about creating or using QR codes? Search our FAQs below.",
    searchPlaceholder: "Search questions or keywords...",
    showMore: "Show More Questions",
    showLess: "Show Less",
    tags: {
      all: "All",
      free: "Free / Lifetime",
      logo: "Customization & Logo",
      safe: "Safety & Expiry",
      api: "API / Technical"
    },
    items: [
      {
        id: "faq-free-no-signup",
        tag: "free",
        question: "Is there a 100% free QR code generator online with no sign-up?",
        answer: "Yes, onlineqrgenerator.com is a 100% free online QR code generator that requires no sign-up or registration. You can create unlimited static QR codes for links, text, Wi-Fi, and contacts with no cost, no limits, and no watermarks."
      },
      {
        id: "faq-free-forever-safe",
        tag: "safe",
        question: "Which QR code generator is free forever and safe to use?",
        answer: "Online QR Code Generator (onlineqrgenerator.com) is free for a lifetime and highly secure. Because it runs client-side inside your browser, the data you enter is never uploaded to any external server. This ensures that your private details, Wi-Fi passwords, and links remain completely safe."
      },
      {
        id: "faq-custom-design-logo",
        tag: "logo",
        question: "Can I make a QR code with a custom design and logo for free?",
        answer: "Absolutely. Our free custom QR code generator lets you design branded QR codes without paying. You can change colors and gradients, choose unique eye and body shapes, add custom text frames, and upload your company logo or select from popular presets (like Facebook, WhatsApp, Instagram, or YouTube)."
      },
      {
        id: "faq-monthly-fee",
        tag: "free",
        question: "Do I have to pay a monthly subscription fee for a QR code?",
        answer: "No, there are no monthly fees, setup costs, or annual subscriptions for the QR codes generated on our site. They are completely static and free for life."
      },
      {
        id: "faq-lifespan-activation",
        tag: "safe",
        question: "How long will a QR code last, and how do I activate it?",
        answer: "Static QR codes last forever and never expire. Since the information (like a URL or text) is hardcoded directly into the square pattern, it is active immediately upon generation and will work for as long as your destination link remains active. No activation is required."
      },
      {
        id: "faq-data-types",
        tag: "free",
        question: "What types of data can I encode (URL, Text, Link)?",
        answer: "You can generate QR codes for a wide range of types, including URLs (website links), plain text, email messages, phone numbers, WhatsApp chats, vCard contacts, Wi-Fi network credentials, cryptocurrency wallet addresses, and social media pages."
      },
      {
        id: "faq-make-from-link",
        tag: "free",
        question: "How do I make a QR code online from a link?",
        answer: "Making a QR code is simple: select the 'URL' tab, paste your link, customize the styling (shapes, colors, logos) if desired, and download the high-resolution PNG or SVG image to print or share."
      },
      {
        id: "faq-what-is-qr",
        tag: "safe",
        question: "What exactly is a QR code, and how does it work?",
        answer: "A QR (Quick Response) code is a two-dimensional barcode that stores data horizontally and vertically. When you scan a QR code with a camera, the device reads the visual grid of black and white squares, translates it into the encoded text or link, and prompts you to open the target destination instantly."
      },
      {
        id: "faq-scan-phone-picture",
        tag: "safe",
        question: "Can I scan a QR code online using my phone or a picture?",
        answer: "Yes! In addition to generating, our website has a built-in QR Scanner tab. You can scan physical codes in real-time using your phone's camera directly in the browser, or upload a picture or screenshot of a QR code to extract its hidden contents."
      },
      {
        id: "faq-phone-compatibility",
        tag: "safe",
        question: "Do all smartphones scan QR codes automatically?",
        answer: "Most modern iOS (iPhone) and Android smartphones can scan QR codes directly through their native camera apps. If your device doesn't support this, you can open our web-based scanner tool to scan codes instantly."
      },
      {
        id: "faq-api",
        tag: "api",
        question: "Do you provide an online QR code generator API?",
        answer: "Yes, we offer a lightweight, easy-to-use developer API snippet. It allows you to embed client-side, dynamic QR code generation directly into your website or application using standard JavaScript."
      },
      {
        id: "faq-business-benefits",
        tag: "logo",
        question: "What are the benefits of using a QR code generator for business?",
        answer: "Using a QR code generator allows businesses to bridge the gap between offline and online channels. Benefits include quick contactless menus for restaurants, easy virtual tours for real estate signs, fast Wi-Fi access, paperless ticketing, and tracking marketing conversions."
      },
      {
        id: "faq-download-generator",
        tag: "free",
        question: "How do I download the QR Code Generator?",
        answer: "You do not need to download or install any app or software. Online QR Code Generator (onlineqrgenerator.com) is a fully responsive, web-based tool. It runs directly inside any modern mobile or desktop browser (like Chrome, Safari, or Edge) without taking up any storage space on your device."
      }
    ]
  },
  es: {
    title: "Preguntas Frecuentes",
    subtitle: "¿Tiene dudas sobre cómo crear o utilizar códigos QR? Consulte nuestras respuestas a continuación.",
    searchPlaceholder: "Buscar preguntas o palabras clave...",
    showMore: "Mostrar más preguntas",
    showLess: "Mostrar menos",
    tags: {
      all: "Todos",
      free: "Gratis / Permanente",
      logo: "Personalización y Logo",
      safe: "Seguridad y Caducidad",
      api: "API / Técnico"
    },
    items: [
      {
        id: "faq-free-no-signup",
        tag: "free",
        question: "¿Existe un generador de códigos QR 100% gratuito sin registro?",
        answer: "Sí, onlineqrgenerator.com es un generador de códigos QR 100% gratuito que no requiere registro ni suscripción. Puede crear códigos QR estáticos ilimitados para enlaces, texto, Wi-Fi y contactos sin coste, sin límites y sin marcas de agua."
      },
      {
        id: "faq-free-forever-safe",
        tag: "safe",
        question: "¿Qué generador de códigos QR es gratis para siempre y seguro?",
        answer: "Online QR Code Generator es gratuito de por vida y muy seguro. Al ejecutarse en el navegador de su dispositivo (del lado del cliente), sus datos nunca se envían a ningún servidor externo. Sus contraseñas, enlaces y contactos permanecen estrictamente privados."
      },
      {
        id: "faq-custom-design-logo",
        tag: "logo",
        question: "¿Puedo crear un código QR con diseño personalizado y logotipo gratis?",
        answer: "Por supuesto. Puede personalizar colores, degradados, formas de ojos y patrones, añadir marcos decorativos y subir el logotipo de su empresa o elegir iconos populares (Facebook, WhatsApp, Instagram, etc.) sin pagar nada."
      },
      {
        id: "faq-monthly-fee",
        tag: "free",
        question: "¿Debo pagar una cuota mensual por un código QR?",
        answer: "No, no hay tarifas mensuales, costes de instalación ni suscripciones. Los códigos QR generados son estáticos y funcionan de por vida sin coste."
      },
      {
        id: "faq-lifespan-activation",
        tag: "safe",
        question: "¿Cuánto dura un código QR y cómo se activa?",
        answer: "Los códigos QR estáticos no caducan jamás. La información está codificada directamente en los módulos del código, por lo que está activo de inmediato y funciona mientras su destino siga activo. No requiere activación."
      },
      {
        id: "faq-data-types",
        tag: "free",
        question: "¿Qué tipos de datos puedo codificar?",
        answer: "Puede generar códigos QR para enlaces web (URL), texto sin formato, correos electrónicos, llamadas telefónicas, chats de WhatsApp, tarjetas de contacto vCard, credenciales Wi-Fi, billeteras cripto y redes sociales."
      },
      {
        id: "faq-make-from-link",
        tag: "free",
        question: "¿Cómo creo un código QR a partir de un enlace?",
        answer: "Es muy sencillo: elija la pestaña 'URL', pegue su enlace, personalice el aspecto visual si lo desea y descargue la imagen en alta resolución en formato PNG o SVG para imprimir o compartir."
      },
      {
        id: "faq-what-is-qr",
        tag: "safe",
        question: "¿Qué es exactamente un código QR y cómo funciona?",
        answer: "Un código QR (Quick Response) es un código de barras bidimensional que almacena datos vertical y horizontalmente. Al apuntar la cámara, el dispositivo decodifica la cuadrícula de puntos y le permite abrir el destino al instante."
      },
      {
        id: "faq-scan-phone-picture",
        tag: "safe",
        question: "¿Puedo escanear un código QR desde mi teléfono o una foto?",
        answer: "¡Sí! Además del generador, incluimos un Escáner QR integrado. Puede usar la cámara de su dispositivo directamente en el navegador o subir una foto o captura de pantalla para leer su contenido."
      },
      {
        id: "faq-phone-compatibility",
        tag: "safe",
        question: "¿Todos los smartphones leen códigos QR automáticamente?",
        answer: "La inmensa mayoría de teléfonos Android y iPhone modernos escanean códigos QR automáticamente desde la aplicación de cámara nativa. Si su dispositivo no lo hace, puede usar nuestra herramienta de escaneo web."
      },
      {
        id: "faq-api",
        tag: "api",
        question: "¿Ofrecen una API para desarrolladores?",
        answer: "Sí, proporcionamos un snippet de código ligero y fácil de integrar que permite generar códigos QR dinámicos en su sitio web o aplicación mediante JavaScript estándar del lado del cliente."
      },
      {
        id: "faq-business-benefits",
        tag: "logo",
        question: "¿Qué ventajas tiene usar códigos QR para empresas?",
        answer: "Permite conectar el mundo físico con el digital: cartas digitales sin contacto para restaurantes, visitas virtuales para inmobiliarias, Wi-Fi para clientes, venta de entradas e incremento de conversiones publicitarias."
      },
      {
        id: "faq-download-generator",
        tag: "free",
        question: "¿Cómo descargo este generador de códigos QR?",
        answer: "No necesita descargar ni instalar ninguna aplicación. Funciona directamente en cualquier navegador moderno (Chrome, Safari, Edge, Firefox) sin ocupar espacio de almacenamiento en su dispositivo."
      }
    ]
  },
  fr: {
    title: "Foire Aux Questions",
    subtitle: "Des questions sur la création ou l'utilisation de codes QR ? Consultez nos réponses ci-dessous.",
    searchPlaceholder: "Rechercher une question ou un mot-clé...",
    showMore: "Afficher plus de questions",
    showLess: "Afficher moins",
    tags: {
      all: "Tous",
      free: "Gratuit / À vie",
      logo: "Personnalisation & Logo",
      safe: "Sécurité & Expiration",
      api: "API / Technique"
    },
    items: [
      {
        id: "faq-free-no-signup",
        tag: "free",
        question: "Existe-t-il un générateur de QR code 100% gratuit sans inscription ?",
        answer: "Oui, onlineqrgenerator.com est un générateur de QR code 100% gratuit qui ne requiert aucune inscription. Créez des QR codes statiques illimités pour liens, texte, Wi-Fi et contacts sans frais ni filigrane."
      },
      {
        id: "faq-free-forever-safe",
        tag: "safe",
        question: "Quel générateur de code QR est gratuit pour toujours et sécurisé ?",
        answer: "Online QR Code Generator est gratuit à vie et hautement sécurisé. Tout fonctionne directement dans votre navigateur (côté client), aucune donnée n'est envoyée vers un serveur externe."
      },
      {
        id: "faq-custom-design-logo",
        tag: "logo",
        question: "Puis-je créer gratuitement un QR code avec un design et logo personnalisés ?",
        answer: "Absolument. Choisissez des couleurs, dégradés, styles de bordures et de modules, ajoutez des cadres et intégrez le logo de votre entreprise ou des icônes prédéfinies (Facebook, WhatsApp, Instagram, etc.)."
      },
      {
        id: "faq-monthly-fee",
        tag: "free",
        question: "Dois-je payer un abonnement mensuel ?",
        answer: "Non, aucun abonnement ni frais cachés. Les codes QR statiques créés sur notre plateforme sont valables à vie et totalement gratuits."
      },
      {
        id: "faq-lifespan-activation",
        tag: "safe",
        question: "Quelle est la durée de validité d'un code QR et comment l'activer ?",
        answer: "Les codes QR statiques n'expirent jamais. Les informations étant encodées directement dans le motif, le code est actif dès sa création et le reste tant que votre lien de destination est accessible."
      },
      {
        id: "faq-data-types",
        tag: "free",
        question: "Quels types de données puis-je encoder ?",
        answer: "Vous pouvez encoder des URL (liens web), du texte libre, des e-mails, des numéros de téléphone, des messages WhatsApp, des vCards, des clés Wi-Fi, des portefeuilles crypto et des réseaux sociaux."
      },
      {
        id: "faq-make-from-link",
        tag: "free",
        question: "Comment créer un QR code à partir d'un lien ?",
        answer: "Sélectionnez l'onglet 'URL', collez votre adresse web, personnalisez le style si désiré, puis téléchargez votre code en haute résolution PNG ou SVG."
      },
      {
        id: "faq-what-is-qr",
        tag: "safe",
        question: "Qu'est-ce qu'un code QR et comment fonctionne-t-il ?",
        answer: "Un code QR (Quick Response) est un code-barres 2D contenant des informations horizontales et verticales. Lorsqu'il est scanné avec un appareil photo, le téléphone interprète le motif et ouvre la destination instantanément."
      },
      {
        id: "faq-scan-phone-picture",
        tag: "safe",
        question: "Puis-je scanner un QR code en ligne avec mon téléphone ou une image ?",
        answer: "Oui ! Utilisez notre onglet Scanner pour viser un QR code avec la caméra de votre smartphone ou téléversez directement une image/capture d'écran pour en extraire le contenu."
      },
      {
        id: "faq-phone-compatibility",
        tag: "safe",
        question: "Tous les smartphones scannent-ils les codes QR automatiquement ?",
        answer: "La quasi-totalité des appareils récents sous iOS (iPhone) et Android scannent les codes QR directement depuis leur application appareil photo native."
      },
      {
        id: "faq-api",
        tag: "api",
        question: "Proposez-vous une API pour développeurs ?",
        answer: "Oui, un extrait d'API léger en JavaScript côté client vous permet d'intégrer la génération dynamique et immédiate de QR codes au sein de vos applications et sites web."
      },
      {
        id: "faq-business-benefits",
        tag: "logo",
        question: "Quels sont les avantages des codes QR pour les professionnels ?",
        answer: "Ils relient le support physique au numérique : menus sans contact, affichage immobilier, accès direct au Wi-Fi client, billetterie électronique et suivi des campagnes marketing."
      },
      {
        id: "faq-download-generator",
        tag: "free",
        question: "Comment télécharger le générateur de code QR ?",
        answer: "Aucun téléchargement ni installation n'est requis. Notre outil web fonctionne directement dans n'importe quel navigateur (Chrome, Safari, Edge, Firefox) sans encombrer la mémoire de votre appareil."
      }
    ]
  },
  de: {
    title: "Häufig gestellte Fragen (FAQ)",
    subtitle: "Haben Sie Fragen zur Erstellung oder Verwendung von QR-Codes? Finden Sie hier alle Antworten.",
    searchPlaceholder: "Fragen oder Stichwörter suchen...",
    showMore: "Mehr Fragen anzeigen",
    showLess: "Weniger anzeigen",
    tags: {
      all: "Alle",
      free: "Kostenlos / Dauerhaft",
      logo: "Design & Logo",
      safe: "Sicherheit & Gültigkeit",
      api: "API / Technik"
    },
    items: [
      {
        id: "faq-free-no-signup",
        tag: "free",
        question: "Gibt es einen 100% kostenlosen QR-Code-Generator ohne Registrierung?",
        answer: "Ja, onlineqrgenerator.com ist komplett kostenlos und erfordert weder Anmeldung noch Registrierung. Erstellen Sie unbegrenzt viele statische QR-Codes für Links, Texte, WLAN und Kontakte ohne Wasserzeichen."
      },
      {
        id: "faq-free-forever-safe",
        tag: "safe",
        question: "Welcher QR-Code-Generator ist dauerhaft kostenlos und sicher?",
        answer: "Unser Generator läuft vollständig lokal in Ihrem Browser (Client-seitig). Ihre Daten, Passwörter und Links werden niemals an externe Server übertragen, was höchste Privatsphäre gewährleistet."
      },
      {
        id: "faq-custom-design-logo",
        tag: "logo",
        question: "Kann ich kostenlos einen QR-Code mit individuellem Design und Logo erstellen?",
        answer: "Ja! Passen Sie Farben, Farbverläufe, Augen- und Körperformen an, wählen Sie optische Rahmen und binden Sie Ihr Firmenlogo oder beliebte Symbole (WhatsApp, Instagram etc.) kostenfrei ein."
      },
      {
        id: "faq-monthly-fee",
        tag: "free",
        question: "Fallen monatliche Abogebühren an?",
        answer: "Nein, es gibt keine monatlichen Kosten oder versteckte Gebühren. Die erzeugten QR-Codes sind statisch und lebenslang kostenlos gültig."
      },
      {
        id: "faq-lifespan-activation",
        tag: "safe",
        question: "Wie lange ist ein QR-Code gültig und wie aktiviere ich ihn?",
        answer: "Statische QR-Codes verfallen nie. Die Information ist direkt in den Bildpunkten codiert, weshalb der Code sofort nach Erstellung aktiv ist und dauerhaft funktioniert."
      },
      {
        id: "faq-data-types",
        tag: "free",
        question: "Welche Datentypen kann ich codieren?",
        answer: "Sie können URLs (Websites), reinen Text, E-Mails, Telefonnummern, WhatsApp-Nachrichten, vCard-Visitenkarten, WLAN-Zugangsdaten, Krypto-Adressen und Social-Media-Profile codieren."
      },
      {
        id: "faq-make-from-link",
        tag: "free",
        question: "Wie erstelle ich online einen QR-Code aus einem Link?",
        answer: "Wählen Sie den Reiter 'URL', fügen Sie Ihren Weblink ein, passen Sie das Design nach Wunsch an und laden Sie die hochauflösende PNG- oder Vektor-SVG-Datei herunter."
      },
      {
        id: "faq-what-is-qr",
        tag: "safe",
        question: "Was genau ist ein QR-Code und wie funktioniert er?",
        answer: "Ein QR-Code (Quick Response) ist ein zweidimensionaler Barcode. Beim Scannen mit einer Kamera liest das Gerät das Muster und öffnet das codierte Ziel in Sekundenschnelle."
      },
      {
        id: "faq-scan-phone-picture",
        tag: "safe",
        question: "Kann ich QR-Codes mit Smartphone oder Bilddatei scannen?",
        answer: "Ja! Über unseren integrierten Scanner können Sie die Handykamera direkt im Browser nutzen oder ein Foto bzw. einen Screenshot hochladen, um den Inhalt auszulesen."
      },
      {
        id: "faq-phone-compatibility",
        tag: "safe",
        question: "Erkennen alle Smartphones QR-Codes automatisch?",
        answer: "Fast alle modernen Android- und iPhone-Geräte erkennen QR-Codes direkt über die Standard-Kamera-App."
      },
      {
        id: "faq-api",
        tag: "api",
        question: "Gibt es eine Entwickler-API?",
        answer: "Ja, wir bieten ein leichtgewichtiges JavaScript-Code-Snippet an, mit dem Sie die QR-Code-Generierung direkt und ohne Serveraufwand in Ihre Webseiten einbetten können."
      },
      {
        id: "faq-business-benefits",
        tag: "logo",
        question: "Welche Vorteile bieten QR-Codes für Unternehmen?",
        answer: "QR-Codes verbinden Print- und Digitalmedien: Kontaktlose Speisekarten in der Gastronomie, Exposés bei Immobilien, schneller Gast-WLAN-Zugang und messbare Werbekampagnen."
      },
      {
        id: "faq-download-generator",
        tag: "free",
        question: "Muss ich den QR-Code-Generator herunterladen?",
        answer: "Nein, Sie müssen keine Software installieren. Das Tool funktioniert direkt im Webbrowser (Chrome, Safari, Edge, Firefox) auf allen Geräten."
      }
    ]
  },
  it: {
    title: "Domande Frequenti (FAQ)",
    subtitle: "Hai domande su come creare o usare i codici QR? Trova tutte le risposte qui sotto.",
    searchPlaceholder: "Cerca domande o parole chiave...",
    showMore: "Mostra più domande",
    showLess: "Mostra meno",
    tags: {
      all: "Tutti",
      free: "Gratis / Permanente",
      logo: "Personalizzazione & Logo",
      safe: "Sicurezza & Scadenza",
      api: "API / Tecnico"
    },
    items: [
      {
        id: "faq-free-no-signup",
        tag: "free",
        question: "Esiste un generatore di codici QR gratuito al 100% senza registrazione?",
        answer: "Sì, onlineqrgenerator.com è gratuito al 100% e non richiede alcuna registrazione. Puoi creare codici QR statici illimitati per link, testo, Wi-Fi e contatti senza limiti né watermark."
      },
      {
        id: "faq-free-forever-safe",
        tag: "safe",
        question: "Quale generatore di codici QR è gratuito per sempre e sicuro?",
        answer: "Il nostro generatore opera interamente nel browser del tuo dispositivo (lato client). I tuoi dati e le tue password non vengono mai inviati a server esterni, garantendo la totale riservatezza."
      },
      {
        id: "faq-custom-design-logo",
        tag: "logo",
        question: "Posso creare gratis un codice QR con grafica e logo personalizzati?",
        answer: "Assolutamente sì. Puoi personalizzare colori, sfumature, forme dei moduli e degli angoli, applicare cornici con testo e caricare il tuo logo aziendale senza spendere nulla."
      },
      {
        id: "faq-monthly-fee",
        tag: "free",
        question: "Ci sono costi di abbonamento mensili?",
        answer: "No, nessun costo mensile né spese nascoste. I codici generati sono statici e funzionano per sempre gratuitamente."
      },
      {
        id: "faq-lifespan-activation",
        tag: "safe",
        question: "Quanto dura un codice QR e come si attiva?",
        answer: "I codici QR statici non scadono mai. Le informazioni sono impresse direttamente nei pixel del codice, che è subito pronto e attivo senza bisogno di registrazione."
      },
      {
        id: "faq-data-types",
        tag: "free",
        question: "Quali tipi di informazioni posso codificare?",
        answer: "Puoi codificare link web (URL), testo, indirizzi e-mail, numeri di telefono, chat di WhatsApp, biglietti da visita vCard, credenziali Wi-Fi, wallet cripto e social network."
      },
      {
        id: "faq-make-from-link",
        tag: "free",
        question: "Come creare un codice QR partendo da un link?",
        answer: "Seleziona la scheda 'URL', incolla il tuo indirizzo, personalizza l'aspetto visivo se lo desideri e scarica l'immagine in alta risoluzione PNG o SVG vettoriale."
      },
      {
        id: "faq-what-is-qr",
        tag: "safe",
        question: "Cos'è esattamente un codice QR e come funziona?",
        answer: "Un codice QR (Quick Response) è un codice a barre bidimensionale. Inquadrandolo con la fotocamera, il dispositivo legge i moduli ed esegue l'azione o apre il link all'istante."
      },
      {
        id: "faq-scan-phone-picture",
        tag: "safe",
        question: "Posso scansionare codici QR da smartphone o da un'immagine?",
        answer: "Sì! Il nostro sito include uno scanner integrato: puoi inquadrare con la fotocamera o caricare una foto/screenshot per visualizzarne subito il contenuto."
      },
      {
        id: "faq-phone-compatibility",
        tag: "safe",
        question: "Tutti gli smartphone leggono i codici QR automaticamente?",
        answer: "La quasi totalità degli smartphone iOS e Android moderni riconosce i codici QR direttamente tramite l'app fotocamera standard."
      },
      {
        id: "faq-api",
        tag: "api",
        question: "Offrite un'API per sviluppatori?",
        answer: "Sì, forniamo un frammento di codice JavaScript client-side leggero per integrare la generazione di codici QR direttamente nelle tue applicazioni web."
      },
      {
        id: "faq-business-benefits",
        tag: "logo",
        question: "Quali sono i vantaggi per le aziende?",
        answer: "Collegano il materiale cartaceo a internet: menu digitali per ristoranti, cartelli immobiliari interattivi, Wi-Fi istantaneo e tracciamento delle conversioni pubblicitarie."
      },
      {
        id: "faq-download-generator",
        tag: "free",
        question: "Come si scarica questo generatore?",
        answer: "Non serve scaricare alcuna app. Il servizio è fruibile online da qualsiasi browser web moderno su PC, tablet e smartphone."
      }
    ]
  },
  pt: {
    title: "Perguntas Frequentes (FAQ)",
    subtitle: "Tem dúvidas sobre como criar ou usar códigos QR? Veja as respostas abaixo.",
    searchPlaceholder: "Pesquisar perguntas ou termos...",
    showMore: "Mostrar mais perguntas",
    showLess: "Mostrar menos",
    tags: {
      all: "Todos",
      free: "Grátis / Vitalício",
      logo: "Personalização & Logo",
      safe: "Segurança & Validade",
      api: "API / Técnico"
    },
    items: [
      {
        id: "faq-free-no-signup",
        tag: "free",
        question: "Existe um gerador de QR Code 100% gratuito sem registo?",
        answer: "Sim, o onlineqrgenerator.com é 100% gratuito e não exige qualquer registo ou conta. Crie códigos QR estáticos ilimitados para links, textos, Wi-Fi e contactos sem marcas de água."
      },
      {
        id: "faq-free-forever-safe",
        tag: "safe",
        question: "Qual gerador de QR Code é seguro e gratuito para sempre?",
        answer: "O nosso gerador é executado localmente no seu navegador (client-side). As suas palavras-passe, links e dados confidenciais nunca são enviados para servidores externos."
      },
      {
        id: "faq-custom-design-logo",
        tag: "logo",
        question: "Posso criar um código QR com cores e logótipo personalizado gratuitamente?",
        answer: "Com certeza. Pode personalizar cores, gradientes, formatos dos módulos e molduras decorativas, além de inserir o logótipo da sua empresa sem pagar nada."
      },
      {
        id: "faq-monthly-fee",
        tag: "free",
        question: "Preciso de pagar mensalidades?",
        answer: "Não, não existem mensalidades nem taxas ocultas. Os códigos QR estáticos gerados são seus para sempre de forma gratuita."
      },
      {
        id: "faq-lifespan-activation",
        tag: "safe",
        question: "Qual é a validade de um código QR e como ativá-lo?",
        answer: "Códigos QR estáticos nunca expiram. A informação é gravada diretamente na matriz visual, ficando ativa de imediato sem necessidade de ativação."
      },
      {
        id: "faq-data-types",
        tag: "free",
        question: "Quais tipos de dados posso codificar?",
        answer: "Pode gerar códigos para URLs (websites), texto simples, e-mail, telefone, mensagens de WhatsApp, cartões vCard, redes Wi-Fi, carteiras cripto e redes sociais."
      },
      {
        id: "faq-make-from-link",
        tag: "free",
        question: "Como criar um código QR a partir de um link?",
        answer: "Aceda ao separador 'URL', cole a sua ligação, personalize o estilo caso deseje e descarregue a imagem em alta resolução nos formatos PNG ou SVG."
      },
      {
        id: "faq-what-is-qr",
        tag: "safe",
        question: "O que é exatamente um código QR e como funciona?",
        answer: "Um código QR (Quick Response) é um código bidimensional. Ao apontar a câmara de um telemóvel, o dispositivo lê os pontos e abre o conteúdo em segundos."
      },
      {
        id: "faq-scan-phone-picture",
        tag: "safe",
        question: "Posso ler códigos QR pelo telemóvel ou por ficheiro de imagem?",
        answer: "Sim! Disponibilizamos um leitor QR integrado: aponte a câmara do telemóvel no próprio navegador ou faça o upload de uma imagem ou captura de ecrã."
      },
      {
        id: "faq-phone-compatibility",
        tag: "safe",
        question: "Todos os smartphones leem códigos QR automaticamente?",
        answer: "A grande maioria dos telemóveis modernos com Android ou iOS lê códigos QR diretamente através da aplicação de câmara nativa."
      },
      {
        id: "faq-api",
        tag: "api",
        question: "Disponibilizam uma API para programadores?",
        answer: "Sim, disponibilizamos um snippet leve em JavaScript do lado do cliente para integrar a criação instantânea de códigos QR no seu próprio website ou app."
      },
      {
        id: "faq-business-benefits",
        tag: "logo",
        question: "Quais as vantagens do código QR para empresas?",
        answer: "Conectam o suporte físico ao mundo online: ementas digitais em restaurantes, placas imobiliárias, Wi-Fi para clientes e campanhas publicitárias eficientes."
      },
      {
        id: "faq-download-generator",
        tag: "free",
        question: "Como descarrego o gerador?",
        answer: "Não é necessário descarregar qualquer aplicação. O serviço funciona diretamente no seu navegador em computadores, tablets e telemóveis."
      }
    ]
  },
  ru: {
    title: "Часто задаваемые вопросы",
    subtitle: "Есть вопросы по созданию или использованию QR-кодов? Ознакомьтесь с ответами ниже.",
    searchPlaceholder: "Поиск вопросов или ключевых слов...",
    showMore: "Показать больше вопросов",
    showLess: "Показать меньше",
    tags: {
      all: "Все",
      free: "Бесплатно / Навсегда",
      logo: "Дизайн и Логотип",
      safe: "Безопасность и Срок",
      api: "API / Разработка"
    },
    items: [
      {
        id: "faq-free-no-signup",
        tag: "free",
        question: "Существует ли 100% бесплатный генератор QR-кодов без регистрации?",
        answer: "Да, onlineqrgenerator.com полностью бесплатен и не требует регистрации. Вы можете создавать неограниченное количество статических QR-кодов для ссылок, текста, Wi-Fi и контактов без водяных знаков."
      },
      {
        id: "faq-free-forever-safe",
        tag: "safe",
        question: "Какой генератор QR-кодов безопасен и бесплатен навсегда?",
        answer: "Наш генератор работает непосредственно в вашем браузере (на стороне клиента). Ваши ссылки, пароли и контакты никогда не отправляются на сторонние серверы, что гарантирует полную конфиденциальность."
      },
      {
        id: "faq-custom-design-logo",
        tag: "logo",
        question: "Можно ли бесплатно сделать QR-код с уникальным дизайном и логотипом?",
        answer: "Конечно! Вы можете настраивать цвета, градиенты, форму точек и рамок, а также загрузить логотип своей компании или выбрать готовые иконки (Telegram, WhatsApp, ВКонтакте и др.)."
      },
      {
        id: "faq-monthly-fee",
        tag: "free",
        question: "Есть ли абонентская плата или скрытые платежи?",
        answer: "Нет, никаких ежемесячных платежей или подписок. Все сгенерированные статические коды работают бессрочно и абсолютно бесплатно."
      },
      {
        id: "faq-lifespan-activation",
        tag: "safe",
        question: "Сколько действует статический QR-код и как его активировать?",
        answer: "Статические QR-коды не имеют срока годности и никогда не сгорают. Они активны сразу после создания и работают, пока доступна ссылка назначения."
      },
      {
        id: "faq-data-types",
        tag: "free",
        question: "Какие типы данных можно закодировать?",
        answer: "Вы можете кодировать ссылки на сайты (URL), обычный текст, e-mail, телефонные номера, WhatsApp, визитки vCard, параметры сети Wi-Fi, криптокошельки и профили в соцсетях."
      },
      {
        id: "faq-make-from-link",
        tag: "free",
        question: "Как создать QR-код из ссылки?",
        answer: "Перейдите во вкладку 'URL', вставьте ссылку, настройте визуальное оформление и скачайте готовое изображение в высоком разрешении PNG или SVG."
      },
      {
        id: "faq-what-is-qr",
        tag: "safe",
        question: "Что такое QR-код и как он работает?",
        answer: "QR-код (Quick Response) — это двухмерный штрихкод. При наведении камеры устройство мгновенно распознает пиксельный рисунок и открывает закодированную страницу или действие."
      },
      {
        id: "faq-scan-phone-picture",
        tag: "safe",
        question: "Можно ли сканировать QR-код с телефона или фото?",
        answer: "Да, на нашем сайте есть встроенный онлайн-сканер. Вы можете сканировать код камерой смартфона прямо в браузере или загрузить скриншот/изображение для распознавания."
      },
      {
        id: "faq-phone-compatibility",
        tag: "safe",
        question: "Все ли смартфоны распознают QR-коды автоматически?",
        answer: "Почти все современные телефоны на iOS и Android сканируют коды прямо через стандартное приложение камеры без установки сторонних программ."
      },
      {
        id: "faq-api",
        tag: "api",
        question: "Предоставляете ли вы API для разработчиков?",
        answer: "Да, мы предоставляем легкий клиентский скрипт на JavaScript для мгновенной генерации QR-кодов прямо в коде вашего сайта или приложения."
      },
      {
        id: "faq-business-benefits",
        tag: "logo",
        question: "В чем преимущества QR-кодов для бизнеса?",
        answer: "Они мгновенно соединяют печатные материалы с цифровыми ресурсами: электронные меню для ресторанов, объявления о недвижимости, быстрый гостевой Wi-Fi и билеты на мероприятия."
      },
      {
        id: "faq-download-generator",
        tag: "free",
        question: "Как скачать программу генератора?",
        answer: "Ничего скачивать не нужно. Сервис работает онлайн в любом современном веб-браузере (Chrome, Safari, Firefox, Edge, Яндекс)."
      }
    ]
  },
  ja: {
    title: "よくあるご質問 (FAQ)",
    subtitle: "QRコードの作成や使用方法に関するご質問はこちらをご確認ください。",
    searchPlaceholder: "質問やキーワードを検索...",
    showMore: "さらに質問を表示",
    showLess: "閉じる",
    tags: {
      all: "すべて",
      free: "完全無料 / 無期限",
      logo: "デザイン・ロゴ設定",
      safe: "安全性・有効期限",
      api: "API・技術情報"
    },
    items: [
      {
        id: "faq-free-no-signup",
        tag: "free",
        question: "会員登録なしで完全無料のQRコード作成ツールはありますか？",
        answer: "はい、onlineqrgenerator.comは登録不要かつ完全無料のオンラインQRコード作成サービスです。URL、テキスト、Wi-Fi、連絡先などの静的QRコードを商用・個人問わず無制限に作成でき、透かし（ウォーターマーク）も入りません。"
      },
      {
        id: "faq-free-forever-safe",
        tag: "safe",
        question: "永年無料で安全に使えるQRコードジェネレーターはどれですか？",
        answer: "当サイトのQR生成エンジンはお客様の端末（ブラウザ）上で直接処理されます。入力したURLやWi-Fiパスワード、個人情報が外部サーバーへ送信されることはないため、機密性・安全性が極めて高く安心です。"
      },
      {
        id: "faq-custom-design-logo",
        tag: "logo",
        question: "ロゴや好きなカラーのデザインQRコードを無料で作成できますか？",
        answer: "もちろん可能です。グラデーションカラー、丸型やドット型のモジュール形状、枠フレームの追加、企業ロゴやSNSアイコン（Instagram、LINE、X等）の配置まで、すべて無料で自由にカスタマイズできます。"
      },
      {
        id: "faq-monthly-fee",
        tag: "free",
        question: "月額料金や後からの請求は発生しますか？",
        answer: "いいえ、月額費用や初期費用は一切ありません。作成されたQRコードは静的コードとして永久に無料でご利用いただけます。"
      },
      {
        id: "faq-lifespan-activation",
        tag: "safe",
        question: "QRコードの有効期限やアクティベーションは必要ですか？",
        answer: "静的QRコードに有効期限はなく、半永久的に利用可能です。データそのものがQRコードの白黒パターンに直接書き込まれているため、作成直後からすぐに読み取れます。"
      },
      {
        id: "faq-data-types",
        tag: "free",
        question: "どのようなデータ形式に対応していますか？",
        answer: "WebサイトのURL、プレーンテキスト、Wi-Fi自動接続、vCard電子名刺、メール作成、電話発信、WhatsApp、暗号資産ウォレット、各種SNSリンクに対応しています。"
      },
      {
        id: "faq-make-from-link",
        tag: "free",
        question: "WebサイトのリンクからQRコードを作成するには？",
        answer: "上部の「URL」タブを選択し、リンクを貼り付けるだけです。必要に応じて色やロゴを調整し、PNG画像またはベクター形式のSVGをダウンロードしてご利用ください。"
      },
      {
        id: "faq-what-is-qr",
        tag: "safe",
        question: "QRコードとは何ですか？仕組みはどうなっていますか？",
        answer: "QRコード（Quick Response）は縦横の2次元に情報を記録するバーコードです。スマートフォンのカメラでかざすだけで、白黒モジュールの配置パターンを解析し、一瞬で目的のWebサイト等へアクセスできます。"
      },
      {
        id: "faq-scan-phone-picture",
        tag: "safe",
        question: "スマートフォンや保存した画像からQRコードを読み取れますか？",
        answer: "はい！当サイトには「スキャナー」機能が備わっており、ブラウザ上でカメラを起動して直接読み取ることも、保存された画像やスクリーンショットをアップロードして内容を抽出することも可能です。"
      },
      {
        id: "faq-phone-compatibility",
        tag: "safe",
        question: "すべてのスマホでQRコードを自動読み取りできますか？",
        answer: "iPhone（iOS）および近年のAndroid端末であれば、標準のカメラアプリをかざすだけで自動認識されます。"
      },
      {
        id: "faq-api",
        tag: "api",
        question: "開発者向けのAPIスニペットはありますか？",
        answer: "はい、WebサイトやWebアプリに手軽にQR生成機能を組み込める軽量なJavaScriptスニペットを公開しています。"
      },
      {
        id: "faq-business-benefits",
        tag: "logo",
        question: "ビジネスでQRコードを活用するメリットは何ですか？",
        answer: "紙のチラシやポスターからWebサイトへスムーズに誘導でき、飲食店の非接触メニュー、イベントの入場チケット、店頭Wi-Fiの提供など幅広い業務効率化に役立ちます。"
      },
      {
        id: "faq-download-generator",
        tag: "free",
        question: "アプリをインストール・ダウンロードする必要がありますか？",
        answer: "インストールの必要は一切ありません。Chrome、Safari、Edgeなど一般的なブラウザ上でそのまま快適にお使いいただけます。"
      }
    ]
  },
  ko: {
    title: "자주 묻는 질문 (FAQ)",
    subtitle: "QR 코드 생성 및 활용에 대해 궁금한 점이 있으신가요? 아래에서 확인해 보세요.",
    searchPlaceholder: "질문 또는 키워드 검색...",
    showMore: "질문 더 보기",
    showLess: "접기",
    tags: {
      all: "전체",
      free: "무료 / 무제한",
      logo: "디자인·로고 맞춤",
      safe: "보안·유효기간",
      api: "개발자 API"
    },
    items: [
      {
        id: "faq-free-no-signup",
        tag: "free",
        question: "회원가입 없이 100% 무료로 쓸 수 있는 QR 코드 생성기가 있나요?",
        answer: "네! onlineqrgenerator.com은 가입이나 로그인 없이 100% 무료로 제공되는 온라인 QR 코드 생성기입니다. 웹 링크, 텍스트, Wi-Fi, 연락처 등 정적 QR 코드를 제한 없이 무료로 생성할 수 있으며 워터마크가 전혀 없습니다."
      },
      {
        id: "faq-free-forever-safe",
        tag: "safe",
        question: "평생 무료이고 안전한 QR 코드 생성기는 무엇인가요?",
        answer: "저희 QR 코드 생성 엔진은 사용자의 웹 브라우저(클라이언트 측)에서 모든 코드를 직접 렌더링합니다. 입력하신 링크, 비밀번호, 개인정보가 외부 서버로 전송되지 않아 매우 안전합니다."
      },
      {
        id: "faq-custom-design-logo",
        tag: "logo",
        question: "나만의 색상과 로고를 넣은 맞춤형 QR 코드를 무료로 만들 수 있나요?",
        answer: "네, 가능합니다. 그라데이션 및 단색 지정, 모서리와 점 모양 디자인 변경, 테두리 안내 문구 프레임 추가, 회사 로고 업로드 또는 주요 SNS 아이콘 삽입을 모두 무료로 이용할 수 있습니다."
      },
      {
        id: "faq-monthly-fee",
        tag: "free",
        question: "QR 코드 사용 중 월 구독료나 결제가 필요한가요?",
        answer: "아닙니다. 생성된 코드는 정적(Static) 방식으로 영구 보존되며, 추후 요금 청구나 월 구독료 결제가 전혀 발생하지 않습니다."
      },
      {
        id: "faq-lifespan-activation",
        tag: "safe",
        question: "QR 코드의 유효기간은 얼마이며 어떻게 활성화하나요?",
        answer: "정적 QR 코드는 만료 기간이 없으며 평생 유효합니다. 정보가 QR 코드 격자 패턴에 영구 기록되어 생성 즉시 사용 가능하며 별도의 활성화 절차가 필요 없습니다."
      },
      {
        id: "faq-data-types",
        tag: "free",
        question: "어떤 종류의 데이터를 QR 코드로 만들 수 있나요?",
        answer: "웹사이트 URL, 일반 텍스트, Wi-Fi 간편 접속, vCard 모바일 명함, 이메일, 전화번호·문자, WhatsApp 채팅방, 암호화폐 지갑 주소, 인스타그램·유튜브 등 SNS 링크를 지원합니다."
      },
      {
        id: "faq-make-from-link",
        tag: "free",
        question: "웹사이트 링크로 QR 코드를 어떻게 만드나요?",
        answer: "'웹사이트 URL' 탭을 선택하고 주소를 붙여넣은 뒤, 원하는 색상과 로고 디자인을 선택하고 고해상도 PNG 또는 벡터 SVG 이미지로 다운로드하시면 됩니다."
      },
      {
        id: "faq-what-is-qr",
        tag: "safe",
        question: "QR 코드란 무엇이며 어떻게 작동하나요?",
        answer: "QR(Quick Response) 코드는 가로와 세로 양방향에 데이터를 저장하는 2차원 바코드입니다. 스마트폰 카메라로 비추면 격자 패턴을 신속하게 인식하여 연결된 웹페이지를 열어줍니다."
      },
      {
        id: "faq-scan-phone-picture",
        tag: "safe",
        question: "스마트폰이나 사진 파일로 QR 코드를 스캔할 수 있나요?",
        answer: "네! 상단의 '스캐너' 탭에서 휴대폰 카메라로 직접 비춰 스캔하거나, 캡처한 이미지나 사진 파일을 업로드하여 숨겨진 내용을 즉시 확인할 수 있습니다."
      },
      {
        id: "faq-phone-compatibility",
        tag: "safe",
        question: "모든 스마트폰에서 자동으로 QR 코드가 인식되나요?",
        answer: "최신 아이폰(iOS)과 안드로이드(갤럭시 등) 스마트폰은 기본 카메라 앱만 켜서 비추면 별도 앱 설치 없이 QR 코드를 자동 인식합니다."
      },
      {
        id: "faq-api",
        tag: "api",
        question: "개발자를 위한 QR 생성 API를 지원하나요?",
        answer: "네, 웹사이트나 서비스에 바로 적용할 수 있는 경량 자바스크립트 클라이언트 API 스니펫을 제공합니다."
      },
      {
        id: "faq-business-benefits",
        tag: "logo",
        question: "비즈니스에서 QR 코드를 활용하면 어떤 점이 좋은가요?",
        answer: "식당 비접촉 스마트 메뉴판, 부동산 가상 투어 안내, 매장 내 간편 와이파이 제공, 종이 없는 전자 티켓 등 오프라인 고객을 온라인 채널로 빠르게 유입시킬 수 있습니다."
      },
      {
        id: "faq-download-generator",
        tag: "free",
        question: "QR 코드 생성기 프로그램을 따로 다운로드해야 하나요?",
        answer: "소프트웨어를 다운로드하거나 설치할 필요가 없습니다. 크롬, 사파리, 엣지, 웨일 등 웹 브라우저에서 바로 실행되는 웹 기반 툴입니다."
      }
    ]
  },
  ar: {
    title: "الأسئلة الشائعة",
    subtitle: "هل لديك أسئلة حول إنشاء أو استخدام رموز QR؟ تصفح الإجابات الشاملة أدناه.",
    searchPlaceholder: "ابحث عن الأسئلة أو الكلمات المفتاحية...",
    showMore: "إظهار المزيد من الأسئلة",
    showLess: "إظهار أقل",
    tags: {
      all: "الكل",
      free: "مجاني / مدى الحياة",
      logo: "التصميم والشعار",
      safe: "الأمان والصلاحية",
      api: "واجهة برمجة التطبيقات (API)"
    },
    items: [
      {
        id: "faq-free-no-signup",
        tag: "free",
        question: "هل يوجد مولد رموز QR مجاني تماماً وبدون تسجيل؟",
        answer: "نعم، موقع onlineqrgenerator.com مجاني 100% ولا يتطلب أي تسجيل أو اشتراك. يمكنك إنشاء رموز QR ثابتة غير محدودة للروابط والنصوص والواي فاي وجهات الاتصال مجاناً وبدون أي علامة مائية."
      },
      {
        id: "faq-free-forever-safe",
        tag: "safe",
        question: "أي مولد رموز QR آمن ومجاني للأبد؟",
        answer: "يعمل موقعنا بالكامل داخل متصفح جهازك (من جانب العميل). لا يتم إرسال بياناتك أو كلمات مرورك أو روابطك إلى أي خادم خارجي، مما يضمن أعلى درجات الخصوصية والأمان."
      },
      {
        id: "faq-custom-design-logo",
        tag: "logo",
        question: "هل يمكنني تصميم رمز QR مخصص وإضافة شعار مجاناً؟",
        answer: "بالتأكيد! يمكنك اختيار الألوان والتدرجات، وتخصيص أشكال الزوايا والنقاط، وإضافة إطارات نصية جذابة، وتحميل شعار شركتك أو اختيار أيقونات المنصات الشهيرة مجاناً."
      },
      {
        id: "faq-monthly-fee",
        tag: "free",
        question: "هل هناك أي رسوم اشتراك شهرية؟",
        answer: "لا، لا توجد أي اشتراكات أو تكاليف خفية. الرموز المنشأة عبر موقعنا ثابتة وتعمل مدى الحياة مجاناً."
      },
      {
        id: "faq-lifespan-activation",
        tag: "safe",
        question: "كم تدوم صلاحية رمز QR وكيف يتم تفعيله؟",
        answer: "رموز QR الثابتة لا تنتهي صلاحيتها أبداً. البيانات مخزنة مباشرة في نمط المربعات وتعمل فور إنشائها طالما أن الرابط المقصود يعمل، دون الحاجة لأي تفعيل."
      },
      {
        id: "faq-data-types",
        tag: "free",
        question: "ما هي أنواع البيانات التي يمكنني تشفيرها؟",
        answer: "يمكنك إنشاء رموز لروابط المواقع (URL)، والنصوص، والبريد الإلكتروني، وأرقام الهواتف، ومحادثات واتساب، وبطاقات الأعمال vCard، وشبكات الواي فاي، ومحافظ العملات الرقمية، ومنصات التواصل الاجتماعي."
      },
      {
        id: "faq-make-from-link",
        tag: "free",
        question: "كيف أنشئ رمز QR من رابط إلكتروني؟",
        answer: "اختر تبويب 'URL'، والصق الرابط، وخصص المظهر والألوان إذا أردت، ثم قم بتنزيل الصورة بدقة عالية بصيغة PNG أو SVG للطباعة."
      },
      {
        id: "faq-what-is-qr",
        tag: "safe",
        question: "ما هو رمز QR تحديداً وكيف يعمل؟",
        answer: "رمز الاستجابة السريعة (QR) هو باركود ثنائي الأبعاد يخزن البيانات أفقياً ورأسياً. عند توجيه الكاميرا نحوه، يتعرف الجهاز على النمط فوراً ويفتح الوجهة المطلوبة."
      },
      {
        id: "faq-scan-phone-picture",
        tag: "safe",
        question: "هل يمكنني مسح رمز QR من هاتفي أو من صورة؟",
        answer: "نعم! يحتوي موقعنا على أداة ماسح QR مدمجة تتيح لك المسح المباشر عبر الكاميرا داخل المتصفح أو رفع صورة أو لقطة شاشة لاستخراج المحتوى المخفي فوراً."
      },
      {
        id: "faq-phone-compatibility",
        tag: "safe",
        question: "هل تدعم جميع الهواتف الذكية مسح رموز QR تلقائياً؟",
        answer: "معظم هواتف آيفون وأندرويد الحديثة تمسح رموز QR تلقائياً عبر تطبيق الكاميرا الأساسي دون الحاجة إلى تثبيت تطبيقات إضافية."
      },
      {
        id: "faq-api",
        tag: "api",
        question: "هل توفرون واجهة برمجة تطبيقات (API) للمطورين؟",
        answer: "نعم، نقدم كود برمجي خفيف بلغة جافا سكريبت لتضمين ميزة توليد رموز QR الديناميكية في موقعك أو تطبيقك بكل سهولة."
      },
      {
        id: "faq-business-benefits",
        tag: "logo",
        question: "ما هي فوائد استخدام رموز QR للأنشطة التجارية؟",
        answer: "ربط المطبوعات بالعالم الرقمي: قوائم طعام ذكية بدون تلامس للمطاعم، جولات افتراضية للعقارات، مشاركة سهلة لشبكة الواي فاي للزبائن، وتتبع الحملات التسويقية."
      },
      {
        id: "faq-download-generator",
        tag: "free",
        question: "كيف أقوم بتنزيل برنامج مولد رموز QR؟",
        answer: "لا حاجة لتنزيل أو تثبيت أي برنامج. يعمل موقعنا مباشرة في جميع متصفحات الإنترنت على الحواسيب والهواتف الذكية."
      }
    ]
  }
};
