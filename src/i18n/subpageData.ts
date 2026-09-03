export interface LegalSection {
  id: string;
  tocLabel: string;
  title: string;
  paragraphs: string[];
  callout?: {
    strong: string;
    text: string;
  };
  bullets?: Array<{
    strong: string;
    text: string;
  }>;
}

export interface SubpageLocaleData {
  about: {
    title: string;
    metaDesc: string;
    badge: string;
    heading: string;
    subheading: string;
    principlesTitle: string;
    principles: Array<{ title: string; desc: string }>;
    speedBadge: string;
    speedTitle: string;
    speedDesc: string;
    techLabels: {
      framework: string;
      css: string;
      generation: string;
      build: string;
    };
    ctaTitle: string;
    ctaSubtitle: string;
    ctaBtn: string;
  };
  contact: {
    title: string;
    metaDesc: string;
    badge: string;
    heading: string;
    subheading: string;
    infoTitle: string;
    infoDesc: string;
    channels: {
      email: string;
      github: string;
      discord: string;
    };
    responseBadge: string;
    responseTime: string;
    responseTitle: string;
    responseDesc: string;
    faqPrompt: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    success: {
      title: string;
      desc: string;
      resetBtn: string;
    };
  };
  privacy: {
    title: string;
    metaDesc: string;
    badge: string;
    heading: string;
    lastUpdated: string;
    tocTitle: string;
    sections: LegalSection[];
  };
  terms: {
    title: string;
    metaDesc: string;
    badge: string;
    heading: string;
    lastUpdated: string;
    tocTitle: string;
    sections: LegalSection[];
  };
}

export const subpageData: Record<string, SubpageLocaleData> = {
  en: {
    about: {
      title: "About Us",
      metaDesc: "Learn about onlineqrgenerators.com, our privacy-first philosophy, tech stack, and mission to build the world's finest QR code suite.",
      badge: "Our Mission",
      heading: "Bridging the physical and digital worlds, beautifully.",
      subheading: "At onlineqrgenerators.com, we believe sharing information should be fast, private, and stunning. We built a browser-first, high-fidelity QR suite that is 100% free with no signups, ads, or watermarks.",
      principlesTitle: "Core Principles",
      principles: [
        {
          title: "Privacy-First Engine",
          desc: "No backend tracking or data leaks. All your inputs—URLs, messages, passwords—are converted directly into QR codes in your local browser using client-side JavaScript."
        },
        {
          title: "Vector-Grade Output",
          desc: "Every QR code is rendered cleanly as SVG or ultra-high-resolution PNG suitable for everything from digital screens to billboard prints."
        },
        {
          title: "100% Free Forever",
          desc: "No trial periods, artificial limits, subscription paywalls, or surprise expiration dates on your generated static QR codes."
        },
        {
          title: "Modern Aesthetics",
          desc: "Full support for curated gradient palettes, unique eye markers, custom center logos, and stylish visual frames."
        }
      ],
      speedBadge: "Built for Speed",
      speedTitle: "Modern Framework & Standards",
      speedDesc: "We leverage Astro for pre-rendered multi-language pages, ensuring fast load times and strong SEO. Tailwind CSS styles are applied for responsive layouts and premium glassmorphism. QR logic runs entirely client-side, returning high-resolution output in less than 5 milliseconds.",
      techLabels: {
        framework: "Framework",
        css: "CSS Utilities",
        generation: "Generation",
        build: "Build Output"
      },
      ctaTitle: "Ready to design your code?",
      ctaSubtitle: "Jump right back to the generator, customize templates, and build something beautiful.",
      ctaBtn: "Go to QR Generator"
    },
    contact: {
      title: "Contact Us",
      metaDesc: "Have questions, ideas, or feedback? Get in touch with the team at onlineqrgenerators.com.",
      badge: "Get In Touch",
      heading: "We'd love to hear from you.",
      subheading: "Have questions about custom designs, commercial licensing, integrations, or just want to say hi? Send us a message.",
      infoTitle: "Contact Information",
      infoDesc: "For support requests, feature recommendations, or business opportunities, reach out through these channels.",
      channels: {
        email: "Email support",
        github: "Open Source",
        discord: "Join Community"
      },
      responseBadge: "Response Time",
      responseTime: "~24 Hours",
      responseTitle: "We respond in 24 hours",
      responseDesc: "Our small team of developers monitors incoming inquiries daily. For critical bug reports or issues with custom logo renders, please drop a note here.",
      faqPrompt: "Need quick answers? Browse FAQ →",
      formTitle: "Send a Message",
      formSubtitle: "Complete the form below and we will get back to you.",
      nameLabel: "Your Name",
      namePlaceholder: "Jane Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "jane@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "How can we help?",
      messageLabel: "Your Message",
      messagePlaceholder: "Tell us about your project or inquiry...",
      submitBtn: "Send Message",
      success: {
        title: "Message Sent!",
        desc: "Thank you for reaching out. We have received your query and our team will get in touch with you shortly.",
        resetBtn: "Send another message"
      }
    },
    privacy: {
      title: "Privacy Policy",
      metaDesc: "Read our privacy-first guidelines. All QR codes are generated directly in your browser, ensuring data never leaves your device.",
      badge: "Legal Documents",
      heading: "Privacy Policy",
      lastUpdated: "Last Updated: August 31, 2026",
      tocTitle: "On This Page",
      sections: [
        {
          id: "introduction",
          tocLabel: "1. Introduction",
          title: "1. Introduction",
          paragraphs: [
            "Welcome to onlineqrgenerators.com. We are committed to protecting your privacy. This Privacy Policy details how we handle information when you interact with our free online QR code generation service.",
            "Unlike typical online tools, our platform is designed from the ground up to operate without centralized databases. We do not require registration, subscription, or user profiles, meaning you can generate high-resolution codes completely anonymously."
          ]
        },
        {
          id: "browser-first",
          tocLabel: "2. Browser-First Generation",
          title: "2. Browser-First Generation (Zero Data Retention)",
          callout: {
            strong: "Technical Privacy Note:",
            text: "All encoding calculations, colors, templates, logos, and frame customizations occur directly on your own device using local JavaScript. The data you enter to create a QR code never leaves your browser."
          },
          paragraphs: [
            "When you enter a URL, Wi-Fi password, or digital contact card (vCard), these inputs are rendered onto a canvas element in your browser window. Since the generation engine is entirely client-side, we have no mechanism to see, record, store, or sell the information embedded inside your generated QR codes."
          ]
        },
        {
          id: "information-collection",
          tocLabel: "3. Information Collection",
          title: "3. Information Collection",
          paragraphs: [
            "Because our service operates entirely within your browser, we collect:"
          ],
          bullets: [
            {
              strong: "No Personal Identifiable Information (PII):",
              text: "We do not collect names, email addresses, phone numbers, or passwords."
            },
            {
              strong: "No Input Text/Payloads:",
              text: "The content you embed in the QR code (such as URLs, message drafts, or cryptocurrency wallet addresses) is never transmitted to our servers."
            },
            {
              strong: "No Local History Uploads:",
              text: "Your generated codes are saved in your browser's local storage so you can retrieve them in the 'Recent QR Codes' tab. This history is stored strictly on your device and can be cleared instantly."
            }
          ]
        },
        {
          id: "cookies-analytics",
          tocLabel: "4. Cookies & Analytics",
          title: "4. Cookies and Web Analytics",
          paragraphs: [
            "We use minimal cookies and analytics tools to help us understand how users interact with the site, measure conversion rates, and resolve technical layout issues.",
            "Any analytics tracking on our platform is configured with anonymity filters, meaning IP addresses are masked. This tracking is used exclusively for aggregating reports on page visits and popular features to improve performance and overall user interface."
          ]
        },
        {
          id: "third-party-links",
          tocLabel: "5. External Links",
          title: "5. Links to Third-Party Services",
          paragraphs: [
            "Our website may contain links to external sites (such as GitHub, Discord, or various industry reference links). Please note that once you leave our platform, we have no control over the privacy guidelines of third-party portals. We encourage you to review the policies of any external website you visit."
          ]
        },
        {
          id: "gdpr-compliance",
          tocLabel: "6. GDPR Compliance",
          title: "6. GDPR and CCPA Compliance",
          paragraphs: [
            "As a privacy-first web application, we fully support the rules outlined in the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).",
            "Since we do not hold, process, or transmit personal data on our servers, there is no database from which we can retrieve or export your records. You have absolute ownership of your data, which resides entirely within your local browser's storage and device memory."
          ]
        },
        {
          id: "contact",
          tocLabel: "7. Contact Information",
          title: "7. Contact Information",
          paragraphs: [
            "If you have questions regarding this Privacy Policy or how client-side encryption works, please feel free to reach out to us at support@onlineqrgenerators.com or visit our Contact Us page."
          ]
        }
      ]
    },
    terms: {
      title: "Terms & Conditions",
      metaDesc: "Terms and conditions for using onlineqrgenerators.com free QR code generation platform.",
      badge: "Usage Guidelines",
      heading: "Terms & Conditions",
      lastUpdated: "Last Updated: August 31, 2026",
      tocTitle: "On This Page",
      sections: [
        {
          id: "agreement",
          tocLabel: "1. Agreement to Terms",
          title: "1. Agreement to Terms",
          paragraphs: [
            "By accessing or using onlineqrgenerators.com, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.",
            "These terms govern your use of our website, code generation services, scanner, and related web components."
          ]
        },
        {
          id: "usage-license",
          tocLabel: "2. Usage License",
          title: "2. Usage License & Intellectual Property",
          paragraphs: [
            "We grant you a free, non-exclusive, worldwide, perpetual license to use the QR codes generated by our platform. This means:"
          ],
          bullets: [
            {
              strong: "Commercial & Personal Use:",
              text: "You can use your generated QR codes for commercial projects, packaging, flyers, digital screens, or personal layouts."
            },
            {
              strong: "No Watermarks or Fees:",
              text: "All generated codes are 100% free of charge and do not carry watermarks, hidden tracking, or redirect ads."
            },
            {
              strong: "Ownership of Code Contents:",
              text: "You retain full ownership and responsibility for whatever links, text, configurations, or credentials you embed into your codes."
            }
          ]
        },
        {
          id: "acceptable-use",
          tocLabel: "3. Acceptable Use Policy",
          title: "3. Acceptable Use Policy",
          paragraphs: [
            "While our generator is free, we require that you use our services responsibly. You agree that you will not use our platform to generate QR codes that:"
          ],
          bullets: [
            {
              strong: "Malware & Phishing:",
              text: "Link to malicious software, phishing websites, scam portals, or spyware."
            },
            {
              strong: "Illegal Content:",
              text: "Contain or point to illegal content, harassment, or violate local intellectual property laws."
            },
            {
              strong: "Security Exploits:",
              text: "Are designed to bypass network security controls or deliver payload exploits."
            }
          ]
        },
        {
          id: "warranties-disclaimer",
          tocLabel: "4. Disclaimer of Warranties",
          title: "4. Disclaimer of Warranties",
          paragraphs: [
            "Our service is provided on an 'AS-IS' and 'AS-AVAILABLE' basis. We make no warranties, expressed or implied, regarding continuous uninterrupted uptime or universal camera readability across all scanning hardware.",
            "Always verify and test your generated QR codes physically using multiple device cameras before printing in bulk or starting advertising campaigns."
          ]
        },
        {
          id: "liability-limits",
          tocLabel: "5. Limitation of Liability",
          title: "5. Limitation of Liability",
          paragraphs: [
            "To the maximum extent permitted by law, onlineqrgenerators.com and its developers shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services, including print costs or lost revenue."
          ]
        },
        {
          id: "terms-changes",
          tocLabel: "6. Changes to Terms",
          title: "6. Changes to Terms",
          paragraphs: [
            "We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated modification date. Your continued use of the website following any changes signifies your acceptance of the updated terms."
          ]
        },
        {
          id: "contact-us",
          tocLabel: "7. Contact Info",
          title: "7. Contact Information",
          paragraphs: [
            "For questions or requests regarding our terms of service, please contact us at support@onlineqrgenerators.com or visit our Contact Us page."
          ]
        }
      ]
    }
  },
  es: {
    about: {
      title: "Sobre Nosotros",
      metaDesc: "Conozca onlineqrgenerators.com, nuestra filosofía de privacidad, tecnología y misión para crear la mejor herramienta de códigos QR.",
      badge: "Nuestra Misión",
      heading: "Conectando el mundo físico y digital con elegancia.",
      subheading: "En onlineqrgenerators.com creemos que compartir datos debe ser rápido, privado y visualmente atractivo. Una suite de códigos QR 100% gratuita, sin registros ni marcas de agua.",
      principlesTitle: "Principios Fundamentales",
      principles: [
        {
          title: "Motor de Privacidad Total",
          desc: "Sin rastreo en servidores. Todos sus datos (URLs, claves Wi-Fi, textos) se procesan directamente en su navegador mediante JavaScript del lado del cliente."
        },
        {
          title: "Calidad Vectorial",
          desc: "Renderizado nítido en formato SVG o PNG de ultra alta resolución, ideal desde pantallas digitales hasta cartelería física."
        },
        {
          title: "100% Gratis para Siempre",
          desc: "Sin periodos de prueba, límites artificiales ni caducidades en sus códigos QR estáticos."
        },
        {
          title: "Diseño Vanguardista",
          desc: "Soporte completo para degradados, estilos de ojos personalizados, marcos y logotipos corporativos."
        }
      ],
      speedBadge: "Diseñado para la Velocidad",
      speedTitle: "Arquitectura Moderna y Estándares Web",
      speedDesc: "Utilizamos Astro para páginas pre-renderizadas ultrarrápidas y excelente SEO. Tailwind CSS para un diseño responsivo y elegante glassmorphism. El motor QR se ejecuta 100% en el navegador en menos de 5 milisegundos.",
      techLabels: {
        framework: "Framework",
        css: "Utilidades CSS",
        generation: "Generación",
        build: "Salida de Compilación"
      },
      ctaTitle: "¿Listo para diseñar su código QR?",
      ctaSubtitle: "Regrese al generador, personalice plantillas y cree algo extraordinario en segundos.",
      ctaBtn: "Ir al Generador QR"
    },
    contact: {
      title: "Contacto",
      metaDesc: "¿Preguntas o sugerencias? Póngase en contacto con el equipo de onlineqrgenerators.com.",
      badge: "Póngase en Contacto",
      heading: "Nos encantaría saber de usted.",
      subheading: "¿Tiene dudas sobre diseños personalizados, integraciones o sugerencias? Envíenos un mensaje.",
      infoTitle: "Información de Contacto",
      infoDesc: "Para soporte, propuestas de funcionalidades o consultas comerciales, comuníquese con nosotros.",
      channels: {
        email: "Soporte por correo",
        github: "Código abierto",
        discord: "Comunidad Discord"
      },
      responseBadge: "Tiempo de Respuesta",
      responseTime: "~24 Horas",
      responseTitle: "Respondemos en 24 horas",
      responseDesc: "Nuestro equipo revisa las consultas a diario. Para reportes de errores o dudas sobre logotipos, escríbanos aquí.",
      faqPrompt: "¿Busca respuestas rápidas? Ver FAQ →",
      formTitle: "Enviar Mensaje",
      formSubtitle: "Complete el siguiente formulario y nos pondremos en contacto lo antes posible.",
      nameLabel: "Su Nombre",
      namePlaceholder: "María García",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "maria@ejemplo.com",
      subjectLabel: "Asunto",
      subjectPlaceholder: "¿En qué podemos ayudarle?",
      messageLabel: "Su Mensaje",
      messagePlaceholder: "Describa su proyecto o consulta...",
      submitBtn: "Enviar Mensaje",
      success: {
        title: "¡Mensaje Enviado!",
        desc: "Gracias por contactarnos. Hemos recibido su consulta y le responderemos muy pronto.",
        resetBtn: "Enviar otro mensaje"
      }
    },
    privacy: {
      title: "Política de Privacidad",
      metaDesc: "Consulte nuestra política de privacidad: los códigos QR se generan en su navegador y sus datos nunca salen de su dispositivo.",
      badge: "Documentos Legales",
      heading: "Política de Privacidad",
      lastUpdated: "Última actualización: 31 de agosto de 2026",
      tocTitle: "En esta página",
      sections: [
        {
          id: "introduction",
          tocLabel: "1. Introducción",
          title: "1. Introducción",
          paragraphs: [
            "Bienvenido a onlineqrgenerators.com. Nos comprometemos a proteger su privacidad. Esta Política detalla cómo gestionamos la información al interactuar con nuestra herramienta gratuita de códigos QR.",
            "Nuestra plataforma opera sin bases de datos centralizadas. No exigimos registros ni perfiles, lo que le permite crear códigos de alta resolución de forma completamente anónima."
          ]
        },
        {
          id: "browser-first",
          tocLabel: "2. Generación en el Navegador",
          title: "2. Generación en el Navegador (Cero Retención de Datos)",
          callout: {
            strong: "Nota Técnica de Privacidad:",
            text: "Todos los cálculos, colores, plantillas y logos se procesan en su dispositivo mediante JavaScript local. Los datos nunca se envían a ningún servidor."
          },
          paragraphs: [
            "Al ingresar una URL o contraseña Wi-Fi, la información se dibuja directamente en un lienzo canvas en su navegador sin que tengamos acceso a ella."
          ]
        },
        {
          id: "information-collection",
          tocLabel: "3. Recopilación de Información",
          title: "3. Recopilación de Información",
          paragraphs: [
            "Dado que nuestro servicio opera íntegramente en su navegador, recopilamos:"
          ],
          bullets: [
            {
              strong: "Sin Datos Personales (PII):",
              text: "No recopilamos nombres, correos ni contraseñas."
            },
            {
              strong: "Sin Contenido de Códigos:",
              text: "Los enlaces o textos incrustados nunca viajan a nuestros servidores."
            },
            {
              strong: "Historial Local Seguro:",
              text: "Los códigos se guardan únicamente en el almacenamiento local de su dispositivo y pueden borrarse en cualquier momento."
            }
          ]
        },
        {
          id: "cookies-analytics",
          tocLabel: "4. Cookies y Analítica",
          title: "4. Cookies y Analítica Web",
          paragraphs: [
            "Utilizamos herramientas analíticas mínimas y anonimizadas (direcciones IP enmascaradas) para medir el rendimiento de la web y mejorar la experiencia de usuario."
          ]
        },
        {
          id: "third-party-links",
          tocLabel: "5. Enlaces Externos",
          title: "5. Enlaces a Sitios de Terceros",
          paragraphs: [
            "El sitio puede contener enlaces a plataformas externas como GitHub o Discord. Le recomendamos consultar las políticas de privacidad de cada sitio externo que visite."
          ]
        },
        {
          id: "gdpr-compliance",
          tocLabel: "6. Cumplimiento RGPD",
          title: "6. Cumplimiento de RGPD y CCPA",
          paragraphs: [
            "Apoyamos plenamente las directrices del RGPD y CCPA. Al no almacenar sus datos en servidores, usted mantiene el control absoluto y local de toda su información."
          ]
        },
        {
          id: "contact",
          tocLabel: "7. Información de Contacto",
          title: "7. Información de Contacto",
          paragraphs: [
            "Para preguntas sobre esta política, escríbanos a support@onlineqrgenerators.com o visite nuestra página de Contacto."
          ]
        }
      ]
    },
    terms: {
      title: "Términos y Condiciones",
      metaDesc: "Términos de servicio para el uso del generador de códigos QR onlineqrgenerators.com.",
      badge: "Condiciones de Uso",
      heading: "Términos y Condiciones",
      lastUpdated: "Última actualización: 31 de agosto de 2026",
      tocTitle: "En esta página",
      sections: [
        {
          id: "agreement",
          tocLabel: "1. Aceptación de los Términos",
          title: "1. Aceptación de los Términos",
          paragraphs: [
            "Al utilizar onlineqrgenerators.com, usted acepta estos Términos y Condiciones. Si no está de acuerdo, por favor no utilice nuestros servicios.",
            "Estos términos rigen el uso de nuestro generador, escáner y herramientas asociadas."
          ]
        },
        {
          id: "usage-license",
          tocLabel: "2. Licencia de Uso",
          title: "2. Licencia de Uso y Propiedad Intelectual",
          paragraphs: [
            "Le otorgamos una licencia mundial, perpetua y gratuita para utilizar los códigos QR generados:"
          ],
          bullets: [
            {
              strong: "Uso Comercial y Personal:",
              text: "Puede utilizar los códigos generados en folletos, envases, publicidad o proyectos personales sin restricciones."
            },
            {
              strong: "Sin Marcas de Agua:",
              text: "Todos los códigos son 100% gratuitos y limpios, sin publicidad ni pagos obligatorios."
            },
            {
              strong: "Propiedad del Contenido:",
              text: "Usted conserva la titularidad y responsabilidad del contenido que incorpore en sus códigos."
            }
          ]
        },
        {
          id: "acceptable-use",
          tocLabel: "3. Política de Uso Aceptable",
          title: "3. Política de Uso Aceptable",
          paragraphs: [
            "El servicio no debe utilizarse para fines maliciosos, incluyendo:"
          ],
          bullets: [
            {
              strong: "Software Malicioso y Phishing:",
              text: "Enlaces hacia virus, malware o portales de fraude."
            },
            {
              strong: "Contenido Ilegal:",
              text: "Material ilícito o que infrinja los derechos de autor de terceros."
            },
            {
              strong: "Vulneración de Seguridad:",
              text: "Ataques informáticos o elusión de controles de red."
            }
          ]
        },
        {
          id: "warranties-disclaimer",
          tocLabel: "4. Exclusión de Garantías",
          title: "4. Exclusión de Garantías",
          paragraphs: [
            "El servicio se brinda 'TAL CUAL'. Se aconseja probar físicamente los códigos impresos con varios dispositivos móviles antes de realizar tiradas masivas de imprenta."
          ]
        },
        {
          id: "liability-limits",
          tocLabel: "5. Límite de Responsabilidad",
          title: "5. Limitación de Responsabilidad",
          paragraphs: [
            "onlineqrgenerators.com no será responsable de costes de imprenta, pérdidas de ingresos o fallos en el escaneo derivados del mal uso de la herramienta."
          ]
        },
        {
          id: "terms-changes",
          tocLabel: "6. Modificaciones",
          title: "6. Modificaciones de los Términos",
          paragraphs: [
            "Nos reservamos el derecho de actualizar estos términos en cualquier momento con la correspondiente fecha de revisión."
          ]
        },
        {
          id: "contact-us",
          tocLabel: "7. Contacto",
          title: "7. Información de Contacto",
          paragraphs: [
            "Para cualquier duda, comuníquese con support@onlineqrgenerators.com o visite nuestra página de Contacto."
          ]
        }
      ]
    }
  },
  ko: {
    about: {
      title: "서비스 소개",
      metaDesc: "onlineqrgenerators.com의 프라이버시 우선 철학과 최첨단 웹 기반 QR 코드 생성 기술을 확인해 보세요.",
      badge: "우리의 미션",
      heading: "오프라인과 디지털 세상을 가장 아름답게 잇습니다.",
      subheading: "onlineqrgenerators.com은 정보 공유가 빠르고, 안전하며, 감각적이어야 한다고 믿습니다. 가입이나 광고, 워터마크 없이 누구나 자유롭게 이용할 수 있는 고해상도 QR 도구를 제작했습니다.",
      principlesTitle: "핵심 원칙",
      principles: [
        {
          title: "프라이버시 최우선 엔진",
          desc: "서버 저장이나 데이터 유출이 없습니다. 입력한 URL, 와이파이 암호, 연락처는 브라우저 내부 자바스크립트를 통해 클라이언트 측에서 즉시 렌더링됩니다."
        },
        {
          title: "벡터 그래픽 품질",
          desc: "모바일 화면부터 대형 옥외 광고판 인쇄까지 선명함을 잃지 않는 고화질 SVG 및 고해상도 PNG 포맷을 지원합니다."
        },
        {
          title: "평생 100% 무료",
          desc: "체험 기간 종료나 결제 유도, 코드 만료일이 존재하지 않는 순수 정적 QR 코드를 무료로 무제한 생성합니다."
        },
        {
          title: "감각적인 맞춤 디자인",
          desc: "트렌디한 그라데이션, 유니크한 모서리 눈 모양, 테두리 안내 문구 프레임, 기업 로고 삽입을 완벽 지원합니다."
        }
      ],
      speedBadge: "초고속 성능 지향",
      speedTitle: "최신 웹 기술과 표준 규격",
      speedDesc: "Astro를 활용하여 사전 렌더링된 다국어 페이지를 제공하므로 로딩 속도가 빠르고 검색엔진 최적화(SEO)가 뛰어납니다. Tailwind CSS를 통한 세련된 글래스모피즘 디자인과 함께, QR 생성 연산이 사용자 브라우저 내부에서 5ms 이내에 즉시 수행됩니다.",
      techLabels: {
        framework: "프레임워크",
        css: "스타일 유틸리티",
        generation: "생성 방식",
        build: "빌드 형태"
      },
      ctaTitle: "나만의 멋진 QR 코드를 만들어볼까요?",
      ctaSubtitle: "생성기로 이동하여 색상과 로고를 맞춤 설정하고 고해상도 QR 코드를 다운로드하세요.",
      ctaBtn: "QR 코드 생성기로 이동"
    },
    contact: {
      title: "문의하기",
      metaDesc: "궁금한 점이나 피드백이 있으신가요? onlineqrgenerators.com 팀에 언제든 문의해 주세요.",
      badge: "고객 문의",
      heading: "언제든 편리하게 문의해 주세요.",
      subheading: "대량 생성, 디자인 커스텀, 개발자 연동 등 서비스 이용에 관한 모든 질문을 환영합니다.",
      infoTitle: "고객 지원 안내",
      infoDesc: "기술 지원 요청, 기능 제안 또는 제휴 문의는 아래 채널과 폼을 통해 남겨주세요.",
      channels: {
        email: "이메일 기술 지원",
        github: "오픈소스 저장소",
        discord: "디스코드 커뮤니티"
      },
      responseBadge: "평균 답변 소요 시간",
      responseTime: "~24시간 이내",
      responseTitle: "24시간 이내에 답변을 드립니다",
      responseDesc: "개발팀이 매일 문의 사항을 확인하고 있습니다. 긴급 버그 신고나 로고 렌더링 질문 등 무엇이든 편하게 남겨주세요.",
      faqPrompt: "빠른 답변을 원하시나요? 자주 묻는 질문(FAQ) 확인 →",
      formTitle: "메시지 보내기",
      formSubtitle: "아래 양식을 작성해 주시면 담당자가 빠르게 확인 후 답변해 드립니다.",
      nameLabel: "성함 / 담당자명",
      namePlaceholder: "홍길동",
      emailLabel: "이메일 주소",
      emailPlaceholder: "hong@example.com",
      subjectLabel: "문의 제목",
      subjectPlaceholder: "어떤 도움이 필요하신가요?",
      messageLabel: "문의 내용",
      messagePlaceholder: "프로젝트 내용이나 질문을 자유롭게 작성해 주세요...",
      submitBtn: "메시지 전송",
      success: {
        title: "메시지가 전송되었습니다!",
        desc: "문의해 주셔서 감사합니다. 내용을 확인한 후 담당자가 빠른 시일 내에 이메일로 답변드리겠습니다.",
        resetBtn: "다른 문의 작성하기"
      }
    },
    privacy: {
      title: "개인정보처리방침",
      metaDesc: "온라인 QR 코드 생성기의 프라이버시 처리 기준을 확인하세요. 모든 코드는 브라우저 내에서 안전하게 생성됩니다.",
      badge: "법적 문서",
      heading: "개인정보처리방침",
      lastUpdated: "최종 업데이트: 2026년 8월 31일",
      tocTitle: "목차 안내",
      sections: [
        {
          id: "introduction",
          tocLabel: "1. 개요 및 목적",
          title: "1. 개요 및 목적",
          paragraphs: [
            "onlineqrgenerators.com에 오신 것을 환영합니다. 당사는 사용자의 개인정보와 프라이버시 보호를 최우선으로 생각합니다. 본 방침은 당사의 무료 온라인 QR 코드 생성 서비스를 이용할 때 정보가 어떻게 처리되는지 상세히 설명합니다.",
            "기존의 상용 서비스들과 달리, 당사 플랫폼은 중앙 집중형 데이터베이스 없이 작동하도록 설계되었습니다. 회원가입, 구독, 로그인 프로필을 일체 요구하지 않으므로 사용자는 완전한 익명 상태에서 고화질 QR 코드를 생성할 수 있습니다."
          ]
        },
        {
          id: "browser-first",
          tocLabel: "2. 브라우저 로컬 연산 원칙",
          title: "2. 브라우저 로컬 연산 원칙 (데이터 미보존)",
          callout: {
            strong: "기술적 보안 안내:",
            text: "모든 QR 코드 인코딩 연산, 색상 배합, 프레임 및 로고 합성 처리는 외부 서버가 아닌 사용자 기기의 로컬 브라우저 내부 자바스크립트를 통해 직접 수행됩니다. 입력한 데이터는 브라우저 밖으로 절대 전송되지 않습니다."
          },
          paragraphs: [
            "웹사이트 주소(URL), 와이파이 접속 암호, 연락처(vCard) 정보를 입력하면 해당 데이터는 사용자 화면의 캔버스 엘리먼트에 직접 그래픽으로 렌더링됩니다. 생성 엔진 자체가 클라이언트 측에서만 실행되므로 당사는 생성된 QR 코드 내부의 정보를 열람, 수집, 저장하거나 제3자에게 판매할 수 있는 구조 자체가 존재하지 않습니다."
          ]
        },
        {
          id: "information-collection",
          tocLabel: "3. 정보 수집 범위",
          title: "3. 정보 수집 범위",
          paragraphs: [
            "당사 서비스는 전적으로 사용자 브라우저 내에서 구동되므로 다음과 같은 정보를 수집하지 않습니다:"
          ],
          bullets: [
            {
              strong: "개인 식별 정보(PII) 미수집:",
              text: "이름, 이메일 주소, 전화번호, 비밀번호 등을 일체 수집하거나 보관하지 않습니다."
            },
            {
              strong: "입력 데이터 페이로드 미전송:",
              text: "QR 코드에 입력하는 웹 주소, 메시지, 암호화폐 지갑 주소 등은 당사 서버로 일체 전송되지 않습니다."
            },
            {
              strong: "로컬 기록의 외부 유출 없음:",
              text: "최근 생성한 QR 코드 보관 기능은 사용자 기기의 웹 브라우저 로컬 스토리지(LocalStorage)에만 저장되며, 사용자가 원할 때 언제든 '기록 전체 삭제' 버튼으로 즉시 파기할 수 있습니다."
            }
          ]
        },
        {
          id: "cookies-analytics",
          tocLabel: "4. 쿠키 및 웹 분석 도구",
          title: "4. 쿠키 및 웹 분석 도구",
          paragraphs: [
            "서비스 품질 향상, 페이지 오류 진단, 사용자 편의성 개선을 위해 최소한의 익명화된 웹 분석 도구를 활용할 수 있습니다.",
            "모든 방문자 통계는 IP 주소 마스킹 등의 비식별 조치가 기본 적용되며, 순수하게 총 방문 횟수와 인기 기능 이용 빈도 파악에만 제한적으로 사용됩니다."
          ]
        },
        {
          id: "third-party-links",
          tocLabel: "5. 외부 서비스 링크",
          title: "5. 외부 서비스 링크 안내",
          paragraphs: [
            "당사 웹사이트에는 깃허브(GitHub), 디스코드(Discord) 등 외부 플랫폼으로 연결되는 링크가 포함될 수 있습니다. 당사 사이트를 벗어나 이동한 외부 웹사이트의 개인정보 보호 정책은 해당 사이트의 기준을 따르므로 주의 깊게 확인하시기 바랍니다."
          ]
        },
        {
          id: "gdpr-compliance",
          tocLabel: "6. GDPR 및 글로벌 규정 준수",
          title: "6. GDPR 및 글로벌 규정 준수",
          paragraphs: [
            "당사는 유럽 일반 데이터 보호 규정(GDPR) 및 캘리포니아 소비자 프라이버시법(CCPA)의 개인정보 보호 정신을 완벽히 지지합니다.",
            "당사 서버에는 사용자의 개인정보나 활동 데이터가 일체 기록되지 않으므로, 사용자는 자신의 데이터에 대한 완전한 통제권을 기기 내에서 스스로 행사할 수 있습니다."
          ]
        },
        {
          id: "contact",
          tocLabel: "7. 프라이버시 문의처",
          title: "7. 프라이버시 문의처",
          paragraphs: [
            "본 개인정보처리방침에 관한 의문이나 제안 사항이 있으시면 support@onlineqrgenerators.com으로 연락해 주시거나 고객 문의 페이지를 이용해 주시기 바랍니다."
          ]
        }
      ]
    },
    terms: {
      title: "서비스 이용약관",
      metaDesc: "onlineqrgenerators.com 서비스 이용에 관한 약관 안내입니다.",
      badge: "서비스 약관",
      heading: "서비스 이용약관",
      lastUpdated: "최종 업데이트: 2026년 8월 31일",
      tocTitle: "목차 안내",
      sections: [
        {
          id: "agreement",
          tocLabel: "1. 약관의 동의",
          title: "1. 약관의 동의",
          paragraphs: [
            "onlineqrgenerators.com 웹사이트 및 관련 서비스를 이용함으로써 귀하는 본 이용약관의 내용을 숙지하고 이에 동의하는 것으로 간주됩니다. 본 약관에 동의하지 않으실 경우 서비스 이용이 제한될 수 있습니다.",
            "본 약관은 당사가 제공하는 QR 코드 생성기, 스캐너, 대량 생성 도구 및 관련 제반 서비스 전반에 적용됩니다."
          ]
        },
        {
          id: "usage-license",
          tocLabel: "2. 이용 라이선스 및 지식재산권",
          title: "2. 이용 라이선스 및 지식재산권",
          paragraphs: [
            "당사는 본 플랫폼을 통해 생성된 모든 정적 QR 코드에 대해 상업적·비상업적 용도를 불문하고 전 세계적이며 영구적인 무료 이용 권한을 부여합니다:"
          ],
          bullets: [
            {
              strong: "상업적 및 개인적 이용 자유:",
              text: "기업 홍보물, 상품 패키지, 광고판, 명함, 디지털 화면 등 어디에나 자유롭게 인쇄 및 게시할 수 있습니다."
            },
            {
              strong: "워터마크 및 수수료 없음:",
              text: "생성된 모든 QR 코드는 강제 로고나 워터마크가 없으며, 별도의 구독료나 사용료를 요구하지 않습니다."
            },
            {
              strong: "콘텐츠 소유권 보장:",
              text: "사용자가 코드에 인코딩한 웹 링크, 텍스트 및 연락처 정보의 소유권과 책임은 전적으로 사용자 본인에게 있습니다."
            }
          ]
        },
        {
          id: "acceptable-use",
          tocLabel: "3. 허용 가능한 이용 정책",
          title: "3. 허용 가능한 이용 정책",
          paragraphs: [
            "사용자는 본 서비스를 건전하고 합법적인 목적으로만 이용해야 합니다. 다음과 같은 행위는 엄격히 금지됩니다:"
          ],
          bullets: [
            {
              strong: "악성코드 및 피싱 배포:",
              text: "스파이웨어, 바이러스, 금융 사기성 피싱 사이트로 연결되는 QR 코드 생성 행위."
            },
            {
              strong: "불법 및 권리 침해 콘텐츠:",
              text: "타인의 저작권, 상표권을 무단 침해하거나 불법 물질 및 음란물을 유통하는 행위."
            },
            {
              strong: "보안 시스템 우회 시도:",
              text: "네트워크 취약점 공격이나 비인가 시스템 침입을 목적으로 하는 악의적 페이로드 삽입."
            }
          ]
        },
        {
          id: "warranties-disclaimer",
          tocLabel: "4. 보증의 부인",
          title: "4. 보증의 부인",
          paragraphs: [
            "본 서비스는 '있는 그대로(AS-IS)' 제공됩니다. 당사는 서버 가동률의 100% 지속성이나 모든 하드웨어 스캐너 기기에서의 완전한 인식 가능성을 보증하지 않습니다.",
            "색상 대비나 모서리 프레임 설정에 따라 스캐너 인식률에 차이가 발생할 수 있으므로, 대량 인쇄나 상업용 인쇄물 제작 전 반드시 다양한 실제 스마트폰 카메라로 테스트 스캔을 완료하시길 권장합니다."
          ]
        },
        {
          id: "liability-limits",
          tocLabel: "5. 책임의 제한",
          title: "5. 책임의 제한",
          paragraphs: [
            "관련 법령이 허용하는 최대 한도 내에서, 당사 및 개발진은 서비스 이용 또는 이용 불가로 인해 발생하는 인쇄 비용 손실, 광고 수익 감소, 데이터 오류 등의 간접적·부수적 손해에 대해 법적 책임을 지지 않습니다."
          ]
        },
        {
          id: "terms-changes",
          tocLabel: "6. 약관의 변경",
          title: "6. 약관의 변경",
          paragraphs: [
            "당사는 합리적인 사유가 발생할 경우 본 약관을 개정할 수 있습니다. 변경된 약관은 본 페이지에 최종 수정일과 함께 게시되며, 게시 이후 서비스를 계속 이용하실 경우 변경 사항에 동의한 것으로 간주됩니다."
          ]
        },
        {
          id: "contact-us",
          tocLabel: "7. 문의처 안내",
          title: "7. 문의처 안내",
          paragraphs: [
            "본 이용약관에 관한 문의나 의견이 있으시면 support@onlineqrgenerators.com 또는 고객 문의 페이지를 통해 문의해 주시기 바랍니다."
          ]
        }
      ]
    }
  },
  ja: {
    about: {
      title: "サイト概要",
      metaDesc: "onlineqrgenerators.comのプライバシー重視の理念、技術スタック、最高峰のQRコードツール開発への取り組みをご紹介します。",
      badge: "私たちの使命",
      heading: "アナログとデジタルの世界を、美しくつなぐ。",
      subheading: "情報共有はシンプルで安全、かつ魅力的であるべきです。登録不要・広告なし・透かしなしの完全無料QRコード作成ツールをお届けします。",
      principlesTitle: "基本方針",
      principles: [
        {
          title: "プライバシー最優先エンジン",
          desc: "サーバーへのデータ送信は一切行いません。入力されたURLやWi-Fi情報はブラウザ内のJavaScriptで即座に処理されます。"
        },
        {
          title: "ベクター対応の高品質",
          desc: "スマホ画面から大判ポスター印刷まで鮮明に出力できるベクターSVGおよび高解像度PNGに対応しています。"
        },
        {
          title: "永年完全無料",
          desc: "お試し期間や機能制限、有効期限切れの心配がない静的QRコードを何度でも無制限に作成できます。"
        },
        {
          title: "洗練されたデザイン",
          desc: "美しいグラデーション、角丸やドット形状、枠フレームの追加、企業ロゴ配置を自由に行えます。"
        }
      ],
      speedBadge: "高速処理へのこだわり",
      speedTitle: "最新フレームワークとWeb標準技術",
      speedDesc: "Astroによる事前レンダリングで多言語ページの高速表示と優れたSEOを実現しています。Tailwind CSSによる美しいデザインと、ブラウザ内で5ms未満に描画されるクライアント側QR生成エンジンを備えています。",
      techLabels: {
        framework: "フレームワーク",
        css: "スタイル設計",
        generation: "生成エンジン",
        build: "出力形式"
      },
      ctaTitle: "オリジナルQRコードを作ってみませんか？",
      ctaSubtitle: "作成ツールに戻って、お好みのデザインやロゴを自由にカスタマイズしてください。",
      ctaBtn: "QRコード作成画面へ"
    },
    contact: {
      title: "お問い合わせ",
      metaDesc: "ご質問やご要望、機能改善のアイデアはお気軽にお問い合わせください。",
      badge: "お問い合わせ",
      heading: "お気軽にご連絡ください。",
      subheading: "デザインのご相談や技術的なご質問など、どのような内容でも歓迎いたします。",
      infoTitle: "サポート窓口",
      infoDesc: "機能改善のご提案やビジネス連携に関するお問い合わせを受け付けています。",
      channels: {
        email: "メールサポート",
        github: "オープンソース",
        discord: "公式コミュニティ"
      },
      responseBadge: "返信の目安",
      responseTime: "約24時間以内",
      responseTitle: "24時間以内にご返答いたします",
      responseDesc: "開発チームが毎日お問い合わせ内容を確認しています。不具合の報告やロゴ表示に関するご相談など、お気軽にお寄せください。",
      faqPrompt: "よくある質問はこちらをご覧ください →",
      formTitle: "メッセージを送信",
      formSubtitle: "以下のフォームにご記入の上、送信ボタンを押してください。",
      nameLabel: "お名前",
      namePlaceholder: "山田 太郎",
      emailLabel: "メールアドレス",
      emailPlaceholder: "yamada@example.com",
      subjectLabel: "件名",
      subjectPlaceholder: "ご用件をお選びください",
      messageLabel: "お問い合わせ内容",
      messagePlaceholder: "メッセージをご記入ください...",
      submitBtn: "送信する",
      success: {
        title: "メッセージを送信しました！",
        desc: "お問い合わせありがとうございます。内容を確認次第、担当者より折り返しご連絡いたします。",
        resetBtn: "新しいメッセージを送る"
      }
    },
    privacy: {
      title: "プライバシーポリシー",
      metaDesc: "当サイトのプライバシーポリシーをご確認ください。QRコードはブラウザ内で処理され外部送信されません。",
      badge: "法的文書",
      heading: "プライバシーポリシー",
      lastUpdated: "最終更新日: 2026年8月31日",
      tocTitle: "目次",
      sections: [
        {
          id: "introduction",
          tocLabel: "1. はじめに",
          title: "1. はじめに",
          paragraphs: [
            "onlineqrgenerators.comへようこそ。当サイトはユーザーのプライバシー保護を最優先事項として運営しています。本ポリシーでは、無料QRコード作成ツールの利用におけるデータの取り扱いについてご説明します。",
            "当サービスは中央サーバーのデータベースを一切持たない設計となっており、会員登録やログインを求めることなく完全な匿名でコードを作成できます。"
          ]
        },
        {
          id: "browser-first",
          tocLabel: "2. ブラウザ内での完全処理",
          title: "2. ブラウザ内での完全処理（データ非保持）",
          callout: {
            strong: "技術的な安全方針:",
            text: "QRコードの生成計算、カラー設定、ロゴやフレームの配置はすべてユーザーの端末内（JavaScript）で直接処理されます。入力されたデータが外部サーバーへ送信されることは一切ありません。"
          },
          paragraphs: [
            "URLやWi-Fiパスワードを入力すると、ブラウザ上のキャンバス要素に直接描画されます。生成エンジン自体が端末内で完結するため、当サイトがコード内容を閲覧・保存・販売することは技術的に不可能です。"
          ]
        },
        {
          id: "information-collection",
          tocLabel: "3. 情報の収集について",
          title: "3. 情報の収集について",
          paragraphs: [
            "当サイトは端末内処理を徹底しているため、以下の情報を一切収集しません:"
          ],
          bullets: [
            {
              strong: "個人情報の非収集:",
              text: "氏名、メールアドレス、電話番号、パスワード等の個人情報は収集しません。"
            },
            {
              strong: "入力内容の非保持:",
              text: "QRコードに埋め込むリンクやメッセージがサーバーに送信されることはありません。"
            },
            {
              strong: "履歴の端末内保存:",
              text: "作成履歴はユーザーのブラウザ内（LocalStorage）にのみ保存され、いつでもワンクリックで完全消去できます。"
            }
          ]
        },
        {
          id: "cookies-analytics",
          tocLabel: "4. クッキーおよびアクセス解析",
          title: "4. クッキーおよびアクセス解析",
          paragraphs: [
            "サービスの品質向上および表示不具合の改善を目的として、IPアドレスを匿名化した最小限のアクセス解析のみを利用しています。"
          ]
        },
        {
          id: "third-party-links",
          tocLabel: "5. 外部サービスへのリンク",
          title: "5. 外部サービスへのリンク",
          paragraphs: [
            "当サイトにはGitHubやDiscord等の外部リンクが含まれる場合があります。リンク先外部サイトのプライバシー方針については各運営元の方針をご確認ください。"
          ]
        },
        {
          id: "gdpr-compliance",
          tocLabel: "6. GDPR・各種法規の遵守",
          title: "6. GDPRおよび各種プライバシー法規への適合",
          paragraphs: [
            "サーバー上に個人データを一切保持しないため、ユーザー自身が端末内でデータを完全に管理・保護できる仕組みを徹底しています。"
          ]
        },
        {
          id: "contact",
          tocLabel: "7. お問い合わせ窓口",
          title: "7. お問い合わせ窓口",
          paragraphs: [
            "本ポリシーについてご不明な点がございましたら、support@onlineqrgenerators.comまたはお問い合わせページよりご連絡ください。"
          ]
        }
      ]
    },
    terms: {
      title: "利用規約",
      metaDesc: "onlineqrgenerators.comのサービス利用規約についてご案内します。",
      badge: "利用規約",
      heading: "利用規約",
      lastUpdated: "最終更新日: 2026年8月31日",
      tocTitle: "目次",
      sections: [
        {
          id: "agreement",
          tocLabel: "1. 規約への同意",
          title: "1. 規約への同意",
          paragraphs: [
            "onlineqrgenerators.comを利用することにより、本規約に同意したものとみなされます。同意いただけない場合はサービスのご利用をお控えください。",
            "本規約は当サイトが提供するQRコード作成ツール、スキャナー、一括生成機能等すべての機能に適用されます。"
          ]
        },
        {
          id: "usage-license",
          tocLabel: "2. 利用ライセンスと権利",
          title: "2. 利用ライセンスと権利関係",
          paragraphs: [
            "当サイトで作成したQRコードは、商用・非商用を問わず自由にご利用いただけます:"
          ],
          bullets: [
            {
              strong: "商用・個人利用の自由:",
              text: "チラシ、商品パッケージ、看板、Webサイト等に制限なく無料でご利用いただけます。"
            },
            {
              strong: "透かし・利用料なし:",
              text: "すべてのコードは完全無料であり、強制的な透かしロゴや定期課金は一切ありません。"
            },
            {
              strong: "コンテンツの帰属:",
              text: "QRコードに埋め込む情報の内容については、作成者自身が全責任を負うものとします。"
            }
          ]
        },
        {
          id: "acceptable-use",
          tocLabel: "3. 禁止事項",
          title: "3. 禁止事項",
          paragraphs: [
            "以下の不正・違法行為を目的としたコードの作成を禁止します:"
          ],
          bullets: [
            {
              strong: "マルウェアや詐欺サイト:",
              text: "フィッシングサイトや不正プログラムへの誘導。"
            },
            {
              strong: "違法・権利侵害コンテンツ:",
              text: "他者の著作権侵害や公序良俗に反するコンテンツの配布。"
            },
            {
              strong: "セキュリティ攻撃:",
              text: "ネットワーク脆弱性を突く攻撃や不正アクセス。"
            }
          ]
        },
        {
          id: "warranties-disclaimer",
          tocLabel: "4. 免責事項",
          title: "4. 免責事項",
          paragraphs: [
            "本サービスは現状有姿で提供されます。すべてのカメラや読み取り端末での完全な読み取り精度を保証するものではありません。",
            "印刷を行う前には、必ず複数の実機端末で正常に読み取れることをご確認ください。"
          ]
        },
        {
          id: "liability-limits",
          tocLabel: "5. 責任の制限",
          title: "5. 責任の制限",
          paragraphs: [
            "印刷コストや広告機会の損失など、本サービスの利用に関して生じたいかなる損害についても当サイトは責任を負いません。"
          ]
        },
        {
          id: "terms-changes",
          tocLabel: "6. 規約の変更",
          title: "6. 規約の変更",
          paragraphs: [
            "本規約は予告なく変更される場合があります。更新後の利用継続をもって変更に同意されたものとみなします。"
          ]
        },
        {
          id: "contact-us",
          tocLabel: "7. お問い合わせ",
          title: "7. お問い合わせ",
          paragraphs: [
            "利用規約に関するご質問は、support@onlineqrgenerators.comまたはお問い合わせページよりご連絡ください。"
          ]
        }
      ]
    }
  },
  ar: {
    about: {
      title: "من نحن",
      metaDesc: "تعرف على موقع onlineqrgenerators.com، فلسفتنا في حماية الخصوصية، ورؤيتنا لتقديم أفضل أداة مجانية لتوليد رموز QR.",
      badge: "مهمتنا",
      heading: "ربط الواقع الفعلي بالعالم الرقمي بكل سهولة وأناقة.",
      subheading: "نؤمن بأن مشاركة البيانات يجب أن تكون سريعة وآمنة ومميزة. قمنا ببناء هذه الأداة لتعمل في المتصفح مباشرة دون أي تسجيل أو علامات مائية وبشكل مجاني 100%.",
      principlesTitle: "مبادئنا الأساسية",
      principles: [
        {
          title: "الخصوصية في المقام الأول",
          desc: "لا نرفع أي بيانات إلى خوادمنا. تتم معالجة وتشفير الروابط وكلمات المرور بالكامل داخل متصفحك عبر جافا سكريبت."
        },
        {
          title: "جودة متجهات فائقة الدقة",
          desc: "يتم تصدير الرموز بصيغتي SVG الفائقة للطباعة وPNG عالية الدقة لمختلف الشاشات والمطبوعات."
        },
        {
          title: "مجاني للأبد 100%",
          desc: "لا توجد فترات تجريبية أو قيود على عدد الرموز، ولا تنتهي صلاحية الرموز الثابتة أبداً."
        },
        {
          title: "تصميم عصري وجذاب",
          desc: "تحكم كامل في الألوان والتدرجات، وأشكال الزوايا، وإضافة الإطارات وشعار شركتك في المنتصف."
        }
      ],
      speedBadge: "مصمم للسرعة الفائقة",
      speedTitle: "معايير الويب والتقنيات الحديثة",
      speedDesc: "نعتمد على إطار Astro لتقديم صفحات متعددة اللغات فائقة السرعة مع تهيئة مثالية لمحركات البحث (SEO). يتم إنشاء الرموز بالكامل محلياً داخل جهازك في أقل من 5 مللي ثانية.",
      techLabels: {
        framework: "إطار العمل",
        css: "أدوات التنسيق",
        generation: "محرك المعالجة",
        build: "نوع الإخراج"
      },
      ctaTitle: "هل أنت جاهز لتصميم رمز QR الخاص بك؟",
      ctaSubtitle: "انتقل إلى المولد الآن وخصص الألوان والشعارات واحصل على كود فائق الدقة.",
      ctaBtn: "الانتقال إلى المولد"
    },
    contact: {
      title: "اتصل بنا",
      metaDesc: "هل لديك أي استفسار أو اقتراح؟ تواصل مع فريق onlineqrgenerators.com في أي وقت.",
      badge: "تواصل معنا",
      heading: "يسعدنا دائماً الاستماع إليك.",
      subheading: "سواء كان لديك سؤال حول التخصيص أو دمج واجهة المطورين أو التعاون التجاري، نحن هنا للمساعدة.",
      infoTitle: "معلومات التواصل",
      infoDesc: "لطلبات الدعم الفني أو مقترحات التطوير أو الفرص التجارية، تواصل معنا مباشرة.",
      channels: {
        email: "الدعم عبر البريد",
        github: "المشروع مفتوح المصدر",
        discord: "مجتمع ديسكورد"
      },
      responseBadge: "زمن الاستجابة",
      responseTime: "خلال 24 ساعة",
      responseTitle: "نرد على الاستفسارات خلال 24 ساعة",
      responseDesc: "يقوم فريقنا بمتابعة الرسائل الواردة يومياً. للإبلاغ عن أي خطأ أو تقديم مقترحات تطويرية، يرجى ملء النموذج.",
      faqPrompt: "هل تبحث عن إجابات سريعة؟ تصفح الأسئلة الشائعة ←",
      formTitle: "إرسال رسالة",
      formSubtitle: "املأ النموذج أدناه وسيقوم فريقنا بالتواصل معك في أقرب وقت.",
      nameLabel: "الاسم الكريم",
      namePlaceholder: "محمد أحمد",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "mohammed@example.com",
      subjectLabel: "الموضوع",
      subjectPlaceholder: "كيف يمكننا مساعدتك؟",
      messageLabel: "نص الرسالة",
      messagePlaceholder: "اكتب رسالتك أو استفسارك هنا...",
      submitBtn: "إرسال الرسالة",
      success: {
        title: "تم إرسال الرسالة بنجاح!",
        desc: "شكراً لتواصلك معنا. استلمنا رسالتك وسنقوم بالرد عليك عبر بريدك الإلكتروني قريباً.",
        resetBtn: "إرسال رسالة أخرى"
      }
    },
    privacy: {
      title: "سياسة الخصوصية",
      metaDesc: "اطلع على سياسة الخصوصية الصارمة لدينا: توليد رموز QR يتم محلياً في جهازك دون مشاركة البيانات.",
      badge: "وثائق قانونية",
      heading: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: 31 أغسطس 2026",
      tocTitle: "فهرس الصفحة",
      sections: [
        {
          id: "introduction",
          tocLabel: "1. مقدمة عامة",
          title: "1. مقدمة عامة",
          paragraphs: [
            "مرحباً بك في onlineqrgenerators.com. نحن نضع حماية خصوصيتك في صدارة أولوياتنا. توضح هذه السياسة كيفية التعامل مع البيانات عند استخدام منصتنا المجانية لتوليد رموز الاستجابة السريعة.",
            "صممت منصتنا لتعمل بدون خوادم مركزية لحفظ البيانات، ولا نطلب منك إنشاء حساب أو تسجيل بيانات شخصية، مما يتيح لك إنشاء الرموز بسرية تامة."
          ]
        },
        {
          id: "browser-first",
          tocLabel: "2. المعالجة داخل المتصفح",
          title: "2. المعالجة الحصرية داخل المتصفح (عدم الاحتفاظ بالبيانات)",
          callout: {
            strong: "تنويه أمني:",
            text: "تتم جميع العمليات الحسابية وتخصيص الألوان والشعارات داخل جهازك مباشرة عبر جافا سكريبت، ولا تغادر بياناتك جهازك أبداً."
          },
          paragraphs: [
            "عند إدخال رابط أو كلمة مرور واي فاي، يتم رسمها مباشرة على عنصر Canvas داخل المتصفح، ولا نمتلك أي وسيلة تقنية للاطلاع على محتوى رموزك أو تخزينها."
          ]
        },
        {
          id: "information-collection",
          tocLabel: "3. جمع المعلومات",
          title: "3. جمع المعلومات",
          paragraphs: [
            "نظراً لأن الأداة تعمل محلياً داخل جهازك، فإننا:"
          ],
          bullets: [
            {
              strong: "لا نجمع بيانات شخصية:",
              text: "لا نطلب الأسماء أو العناوين أو كلمات المرور."
            },
            {
              strong: "لا نخزن نصوص الرموز:",
              text: "الروابط والنصوص التي تضعها داخل الرمز لا ترسل إلى خوادمنا إطلاقاً."
            },
            {
              strong: "سجل محلي فقط:",
              text: "يتم حفظ سجل الرموز المنشأة في الذاكرة المحلية لمتصفحك فقط ويمكنك مسحه بلمسة واحدة."
            }
          ]
        },
        {
          id: "cookies-analytics",
          tocLabel: "4. ملفات تعريف الارتباط والتحليلات",
          title: "4. ملفات تعريف الارتباط والتحليلات",
          paragraphs: [
            "نستخدم أدوات تحليلية مجهولة الهوية ومجردة من العناوين الرقمية (IP Masked) لقياس أداء الموقع وتحسين تجربة الاستخدام فقط."
          ]
        },
        {
          id: "third-party-links",
          tocLabel: "5. الروابط الخارجية",
          title: "5. روابط الأطراف الثالثة",
          paragraphs: [
            "قد يحتوي موقعنا على روابط لمواقع خارجية مثل GitHub أو Discord، وننصح بمراجعة سياسات الخصوصية الخاصة بتلك المواقع عند زيارتها."
          ]
        },
        {
          id: "gdpr-compliance",
          tocLabel: "6. الامتثال للأنظمة الدولية",
          title: "6. الامتثال للائحة العامة لحماية البيانات (GDPR)",
          paragraphs: [
            "بما أننا لا نحتفظ بأي بيانات شخصية على خوادمنا، فأنت تحتفظ بالسيطرة والملكية الكاملة لبياناتك داخل جهازك."
          ]
        },
        {
          id: "contact",
          tocLabel: "7. معلومات التواصل",
          title: "7. معلومات التواصل",
          paragraphs: [
            "لأي استفسار يخص سياسة الخصوصية، يرجى التواصل معنا عبر support@onlineqrgenerators.com أو صفحة اتصل بنا."
          ]
        }
      ]
    },
    terms: {
      title: "الشروط والأحكام",
      metaDesc: "شروط استخدام منصة onlineqrgenerators.com المجانية لتوليد رموز QR.",
      badge: "شروط الخدمة",
      heading: "الشروط والأحكام",
      lastUpdated: "آخر تحديث: 31 أغسطس 2026",
      tocTitle: "فهرس الصفحة",
      sections: [
        {
          id: "agreement",
          tocLabel: "1. الموافقة على الشروط",
          title: "1. الموافقة على الشروط",
          paragraphs: [
            "باستخدامك لموقع onlineqrgenerators.com، فإنك تقر وتوافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق، يُرجى التوقف عن استخدام الموقع.",
            "تنطبق هذه الشروط على جميع خدمات توليد الرموز والماسح الضوئي والأدوات التابعة للمنصة."
          ]
        },
        {
          id: "usage-license",
          tocLabel: "2. رخصة الاستخدام",
          title: "2. رخصة الاستخدام والملكية الفكرية",
          paragraphs: [
            "نمنحك ترخيصاً مجانياً ودائماً وشاملاً لاستخدام رموز QR المنشأة عبر منصتنا:"
          ],
          bullets: [
            {
              strong: "الاستخدام التجاري والشخصي:",
              text: "يمكنك استخدام الرموز في المطبوعات والمنتجات والحملات الإعلانية دون أي قيود."
            },
            {
              strong: "بدون علامات مائية أو رسوم:",
              text: "جميع الرموز مجانية 100% وخالية من الإعلانات الإجبارية."
            },
            {
              strong: "ملكية المحتوى:",
              text: "أنت المسؤول الوحيد والمالك للمحتوى والروابط المشفرة داخل الرموز."
            }
          ]
        },
        {
          id: "acceptable-use",
          tocLabel: "3. سياسة الاستخدام العادل",
          title: "3. سياسة الاستخدام المقبول",
          paragraphs: [
            "يُحظر استخدام المنصة لإنشاء رموز لأغراض خبيثة تشمل:"
          ],
          bullets: [
            {
              strong: "البرمجيات الخبيثة والتصيد:",
              text: "إنشاء روابط تشير إلى فيروسات أو صفحات احتيالية."
            },
            {
              strong: "المحتوى غير القانوني:",
              text: "نشر مواد تنتهك حقوق الملكية أو تخالف القوانين."
            },
            {
              strong: "اختراق الأنظمة:",
              text: "محاولة تجاوز ضوابط أمان الشبكات أو استغلال الثغرات."
            }
          ]
        },
        {
          id: "warranties-disclaimer",
          tocLabel: "4. إخلاء المسؤولية عن الضمانات",
          title: "4. إخلاء المسؤولية عن الضمانات",
          paragraphs: [
            "تُقدم الخدمة 'كما هي'. يُنصح دائماً باختبار الرموز ضوئياً باستخدام كاميرات هواتف متعددة قبل البدء في الطباعة التجارية بكميات كبيرة."
          ]
        },
        {
          id: "liability-limits",
          tocLabel: "5. حدود المسؤولية",
          title: "5. حدود المسؤولية القانونية",
          paragraphs: [
            "لا تتحمل المنصة أي مسؤولية عن تكاليف طباعة أو خسائر ناتجة عن عدم توافق قراءة الرموز المطبوعة بألوان غير متناسقة."
          ]
        },
        {
          id: "terms-changes",
          tocLabel: "6. تعديل الشروط",
          title: "6. تعديل الشروط والأحكام",
          paragraphs: [
            "نحتفظ بحق تعديل هذه الشروط في أي وقت مع تحديث تاريخ المراجعة على هذه الصفحة."
          ]
        },
        {
          id: "contact-us",
          tocLabel: "7. التواصل والاستفسارات",
          title: "7. معلومات التواصل",
          paragraphs: [
            "لأي استفسارات بخصوص هذه الشروط، يرجى التواصل معنا عبر support@onlineqrgenerators.com أو زيارة صفحة اتصل بنا."
          ]
        }
      ]
    }
  }
,
  fr: {
  "about": {
    "title": "À Propos",
    "metaDesc": "Découvrez onlineqrgenerators.com, notre engagement pour la confidentialité et notre générateur de QR codes gratuit.",
    "badge": "Notre Mission",
    "heading": "Relier le monde physique et numérique avec élégance.",
    "subheading": "Chez onlineqrgenerators.com, le partage d'information doit être rapide, sécurisé et visuel. Une suite de QR codes 100% gratuite, sans inscription ni filigrane.",
    "principlesTitle": "Principes Fondamentaux",
    "principles": [
      {
        "title": "Moteur Confidentialité Totale",
        "desc": "Aucun transfert vers un serveur. Toutes vos données sont encodées dans votre navigateur via JavaScript."
      },
      {
        "title": "Qualité Vectorielle",
        "desc": "Rendu haute précision en formats vectoriels SVG ou PNG très haute résolution pour tout support."
      },
      {
        "title": "100% Gratuit à Vie",
        "desc": "Sans abonnement, sans limite et sans date d'expiration pour vos QR codes statiques."
      },
      {
        "title": "Design Personnalisable",
        "desc": "Dégradés soignés, motifs d'yeux uniques, cadres thématiques et intégration de logo."
      }
    ],
    "speedBadge": "Conçu pour la Vitesse",
    "speedTitle": "Normes Web et Architecture Moderne",
    "speedDesc": "Nous exploitons Astro pour des pages pré-rendues ultra-rapides et un SEO optimal. Tailwind CSS assure un design épuré et moderne. Les codes QR sont générés en moins de 5 ms dans votre navigateur.",
    "techLabels": {
      "framework": "Framework",
      "css": "Utilitaires CSS",
      "generation": "Génération",
      "build": "Sortie de Build"
    },
    "ctaTitle": "Prêt à créer votre code QR ?",
    "ctaSubtitle": "Retournez au générateur, appliquez vos couleurs et téléchargez un code haute résolution.",
    "ctaBtn": "Aller au Générateur QR"
  },
  "contact": {
    "title": "Contactez-nous",
    "metaDesc": "Une question ou suggestion ? Contactez l'équipe de onlineqrgenerators.com.",
    "badge": "Contact",
    "heading": "Nous serions ravis d'échanger avec vous.",
    "subheading": "Une demande sur la personnalisation, une intégration ou une suggestion ? Envoyez-nous un message.",
    "infoTitle": "Informations de Contact",
    "infoDesc": "Pour le support technique ou des propositions de fonctionnalités, contactez-nous via ces canaux.",
    "channels": {
      "email": "Support par e-mail",
      "github": "Open Source",
      "discord": "Communauté Discord"
    },
    "responseBadge": "Temps de Réponse",
    "responseTime": "~24 Heures",
    "responseTitle": "Nous répondons sous 24 heures",
    "responseDesc": "Notre équipe consulte les demandes quotidiennement. Pour un bug ou une question sur vos logos, écrivez-nous.",
    "faqPrompt": "Besoin d'aide rapide ? Consultez la FAQ →",
    "formTitle": "Envoyer un Message",
    "formSubtitle": "Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.",
    "nameLabel": "Votre Nom",
    "namePlaceholder": "Jean Dupont",
    "emailLabel": "Adresse E-mail",
    "emailPlaceholder": "jean@example.com",
    "subjectLabel": "Sujet",
    "subjectPlaceholder": "Comment pouvons-nous vous aider ?",
    "messageLabel": "Votre Message",
    "messagePlaceholder": "Expliquez-nous votre projet ou question...",
    "submitBtn": "Envoyer le Message",
    "success": {
      "title": "Message Envoyé !",
      "desc": "Merci pour votre message. Nous vous répondrons dans les plus brefs délais.",
      "resetBtn": "Envoyer un autre message"
    }
  },
  "privacy": {
    "title": "Politique de Confidentialité",
    "metaDesc": "Consultez notre politique : vos QR codes sont générés localement sans aucune transmission de données.",
    "badge": "Documents Juridiques",
    "heading": "Politique de Confidentialité",
    "lastUpdated": "Dernière mise à jour : 31 août 2026",
    "tocTitle": "Sur cette page",
    "sections": [
      {
        "id": "introduction",
        "tocLabel": "1. Introduction",
        "title": "1. Introduction",
        "paragraphs": [
          "Bienvenue sur onlineqrgenerators.com. Nous nous engageons à protéger votre vie privée. Cette politique détaille notre gestion des données lors de l'utilisation de nos outils.",
          "Notre plateforme fonctionne sans base de données centralisée. Sans inscription ni profil obligatoire, vous générez vos codes en toute discrétion et anonymat."
        ]
      },
      {
        "id": "browser-first",
        "tocLabel": "2. Traitement Navigateur",
        "title": "2. Traitement Navigateur (Zéro Rétention de Données)",
        "callout": {
          "strong": "Note Technique :",
          "text": "Tous les calculs, couleurs, logos et cadres sont traités localement par votre navigateur en JavaScript. Vos données ne sont jamais transmises à des serveurs tiers."
        },
        "paragraphs": [
          "Lorsque vous entrez une URL ou un mot de passe Wi-Fi, ils sont directement tracés sur l'élément canvas de votre écran sans quitter votre appareil."
        ]
      },
      {
        "id": "information-collection",
        "tocLabel": "3. Collecte d'Informations",
        "title": "3. Collecte d'Informations",
        "paragraphs": [
          "Étant donné que le service opère exclusivement sur votre appareil :"
        ],
        "bullets": [
          {
            "strong": "Aucune Donnée Personnelle (PII) :",
            "text": "Nous ne collectons ni noms, ni e-mails, ni numéros de téléphone."
          },
          {
            "strong": "Aucun Contenu Encodé :",
            "text": "Vos textes ou adresses encodés ne sont jamais envoyés à nos serveurs."
          },
          {
            "strong": "Stockage Local Dédié :",
            "text": "L'historique des codes récents est conservé uniquement dans le navigateur de votre appareil et peut être vidé à tout moment."
          }
        ]
      },
      {
        "id": "cookies-analytics",
        "tocLabel": "4. Cookies et Statistiques",
        "title": "4. Cookies et Outils d'Analyse",
        "paragraphs": [
          "Nous utilisons un suivi d'audience minimal et anonymisé (masquage d'adresses IP) pour mesurer l'affluence et garantir la stabilité technique."
        ]
      },
      {
        "id": "third-party-links",
        "tocLabel": "5. Liens Externes",
        "title": "5. Liens vers des Services Tiers",
        "paragraphs": [
          "Notre site peut contenir des liens vers GitHub ou Discord. Veuillez consulter leurs politiques respectives lorsque vous quittez notre plateforme."
        ]
      },
      {
        "id": "gdpr-compliance",
        "tocLabel": "6. Conformité RGPD",
        "title": "6. Conformité RGPD et Réglementations",
        "paragraphs": [
          "Nous soutenons pleinement les règles du RGPD. En ne conservant aucune donnée sur nos serveurs, vous gardez la maîtrise absolue de vos informations."
        ]
      },
      {
        "id": "contact",
        "tocLabel": "7. Contact",
        "title": "7. Informations de Contact",
        "paragraphs": [
          "Pour toute question relative à cette politique, contactez-nous à support@onlineqrgenerators.com ou via notre formulaire de contact."
        ]
      }
    ]
  },
  "terms": {
    "title": "Conditions Générales d'Utilisation",
    "metaDesc": "Conditions d'utilisation de la plateforme de génération de QR codes onlineqrgenerators.com.",
    "badge": "Conditions d'Utilisation",
    "heading": "Conditions Générales d'Utilisation",
    "lastUpdated": "Dernière mise à jour : 31 août 2026",
    "tocTitle": "Sur cette page",
    "sections": [
      {
        "id": "agreement",
        "tocLabel": "1. Acceptation des Conditions",
        "title": "1. Acceptation des Conditions",
        "paragraphs": [
          "En utilisant onlineqrgenerators.com, vous acceptez d'être lié par les présentes conditions. Si vous ne les approuvez pas, veuillez cesser l'utilisation de nos services."
        ]
      },
      {
        "id": "usage-license",
        "tocLabel": "2. Licence d'Utilisation",
        "title": "2. Licence d'Utilisation et Propriété",
        "paragraphs": [
          "Nous vous accordons une licence perpétuelle, mondiale et libre de droits pour utiliser les QR codes créés :"
        ],
        "bullets": [
          {
            "strong": "Usage Commercial & Personnel :",
            "text": "Vos codes peuvent être imprimés ou diffusés pour vos emballages, flyers ou affiches sans frais."
          },
          {
            "strong": "Sans Filigrane :",
            "text": "Les QR codes générés ne contiennent aucun logo imposé ni publicité cachée."
          },
          {
            "strong": "Responsabilité du Contenu :",
            "text": "Vous conservez la responsabilité entière des liens et informations que vous intégrez dans vos codes."
          }
        ]
      },
      {
        "id": "acceptable-use",
        "tocLabel": "3. Usage Responsable",
        "title": "3. Politique d'Usage Responsable",
        "paragraphs": [
          "Il est strictement interdit de créer des codes QR pour propager des logiciels malveillants, des escroqueries par hameçonnage (phishing) ou du contenu illicite."
        ]
      },
      {
        "id": "warranties-disclaimer",
        "tocLabel": "4. Exclusion de Garantie",
        "title": "4. Exclusion de Garantie",
        "paragraphs": [
          "Le service est fourni 'EN L'ÉTAT'. Il vous incombe de tester physiquement vos QR codes avec différents smartphones avant toute impression en série."
        ]
      },
      {
        "id": "liability-limits",
        "tocLabel": "5. Limitation de Responsabilité",
        "title": "5. Limitation de Responsabilité",
        "paragraphs": [
          "onlineqrgenerators.com décline toute responsabilité pour tout coût d'impression ou manque à gagner découlant d'une mauvaise lisibilité des codes personnalisés."
        ]
      },
      {
        "id": "terms-changes",
        "tocLabel": "6. Modifications",
        "title": "6. Modifications des Conditions",
        "paragraphs": [
          "Nous nous réservons le droit de réviser ces conditions à tout moment. La date de dernière mise à jour figurera en haut de page."
        ]
      },
      {
        "id": "contact-us",
        "tocLabel": "7. Contact",
        "title": "7. Contact et Assistance",
        "paragraphs": [
          "Pour toute interrogation, adressez-vous à support@onlineqrgenerators.com ou via notre page Contactez-nous."
        ]
      }
    ]
  }
},
  de: {
  "about": {
    "title": "Über Uns",
    "metaDesc": "Erfahren Sie mehr über onlineqrgenerators.com, unsere Datenschutz-Philosophie und moderne QR-Code-Lösungen.",
    "badge": "Unsere Mission",
    "heading": "Die physische und digitale Welt elegant verbinden.",
    "subheading": "Wir bei onlineqrgenerators.com sind überzeugt: Informationsaustausch muss schnell, sicher und ansprechend sein. Eine kostenlose Suite ohne Registrierungszwang oder Wasserzeichen.",
    "principlesTitle": "Grundprinzipien",
    "principles": [
      {
        "title": "Datenschutz-Engine",
        "desc": "Keine Server-Übertragung. Alle Eingaben werden lokal im Browser via JavaScript verarbeitet."
      },
      {
        "title": "Vektorgrafik-Qualität",
        "desc": "Gestochen scharfe Ausgabe als SVG oder ultra-hochauflösendes PNG für Drucke aller Größen."
      },
      {
        "title": "Dauerhaft 100% Kostenlos",
        "desc": "Keine Testphasen, Kontingente oder plötzlichen Ablaufdaten für Ihre statischen QR-Codes."
      },
      {
        "title": "Modernes Design",
        "desc": "Farbverläufe, anpassbare Positionsmarker, Rahmen und eigene Firmenlogos."
      }
    ],
    "speedBadge": "Auf Geschwindigkeit Ausgelegt",
    "speedTitle": "Moderne Webstandards & Frameworks",
    "speedDesc": "Wir nutzen Astro für blitzschnelle Ladezeiten und starkes SEO. Tailwind CSS sorgt für klares Design. Der QR-Code wird lokal in unter 5 Millisekunden generiert.",
    "techLabels": {
      "framework": "Framework",
      "css": "CSS-Utilities",
      "generation": "Generierung",
      "build": "Build-Ausgabe"
    },
    "ctaTitle": "Bereit, Ihren QR-Code zu gestalten?",
    "ctaSubtitle": "Kehren Sie zum Generator zurück, passen Sie Ihr Design an und laden Sie Ihren Code herunter.",
    "ctaBtn": "Zum QR-Code-Generator"
  },
  "contact": {
    "title": "Kontakt",
    "metaDesc": "Haben Sie Fragen oder Feedback? Kontaktieren Sie das Team von onlineqrgenerators.com.",
    "badge": "Kontakt aufnehmen",
    "heading": "Wir freuen uns auf Ihre Nachricht.",
    "subheading": "Haben Sie Fragen zu individuellen Designs, Entwickler-Schnittstellen oder Kooperationen? Schreiben Sie uns.",
    "infoTitle": "Kontaktinformationen",
    "infoDesc": "Für Supportanfragen oder geschäftliche Möglichkeiten erreichen Sie uns über diese Kanäle.",
    "channels": {
      "email": "E-Mail-Support",
      "github": "Open Source",
      "discord": "Discord-Community"
    },
    "responseBadge": "Reaktionszeit",
    "responseTime": "~24 Stunden",
    "responseTitle": "Wir antworten innerhalb von 24 Stunden",
    "responseDesc": "Unser Entwicklerteam prüft Anfragen täglich. Bei Problemen mit Logos oder Funktionswünschen helfen wir gern.",
    "faqPrompt": "Schnelle Antworten gesucht? FAQ ansehen →",
    "formTitle": "Nachricht Senden",
    "formSubtitle": "Füllen Sie das Formular aus, und wir melden uns zeitnah bei Ihnen.",
    "nameLabel": "Ihr Name",
    "namePlaceholder": "Max Mustermann",
    "emailLabel": "E-Mail-Adresse",
    "emailPlaceholder": "max@example.com",
    "subjectLabel": "Betreff",
    "subjectPlaceholder": "Wie können wir helfen?",
    "messageLabel": "Ihre Nachricht",
    "messagePlaceholder": "Beschreiben Sie Ihr Anliegen...",
    "submitBtn": "Nachricht Absenden",
    "success": {
      "title": "Nachricht Gesendet!",
      "desc": "Vielen Dank für Ihre Anfrage. Wir werden uns schnellstmöglich bei Ihnen melden.",
      "resetBtn": "Weitere Nachricht senden"
    }
  },
  "privacy": {
    "title": "Datenschutzerklärung",
    "metaDesc": "Erfahren Sie mehr über unseren Datenschutz: Alle QR-Codes werden direkt in Ihrem Browser erzeugt.",
    "badge": "Rechtliche Dokumente",
    "heading": "Datenschutzerklärung",
    "lastUpdated": "Zuletzt aktualisiert: 31. August 2026",
    "tocTitle": "Auf dieser Seite",
    "sections": [
      {
        "id": "introduction",
        "tocLabel": "1. Einleitung",
        "title": "1. Einleitung",
        "paragraphs": [
          "Willkommen bei onlineqrgenerators.com. Der Schutz Ihrer Privatsphäre ist unser oberstes Gebot. Diese Erklärung erläutert unseren Umgang mit Daten beim Erstellen von QR-Codes.",
          "Unsere Plattform verzichtet bewusst auf zentrale Server-Datenbanken. Es ist weder eine Registrierung noch ein Nutzerprofil erforderlich."
        ]
      },
      {
        "id": "browser-first",
        "tocLabel": "2. Lokale Generierung",
        "title": "2. Lokale Generierung im Browser (Keine Datenspeicherung)",
        "callout": {
          "strong": "Technischer Datenschutz-Hinweis:",
          "text": "Sämtliche Berechnungen, Farben und Logo-Einbindungen finden lokal per JavaScript auf Ihrem Endgerät statt. Eingegebene Daten verlassen Ihren Browser nicht."
        },
        "paragraphs": [
          "URLs oder WLAN-Schlüssel werden direkt auf ein Canvas-Element gezeichnet. Da der Generator rein clientseitig agiert, können wir Ihre Inhalte weder einsehen noch speichern."
        ]
      },
      {
        "id": "information-collection",
        "tocLabel": "3. Datenerfassung",
        "title": "3. Umfang der Datenerfassung",
        "paragraphs": [
          "Da unser Service vollständig in Ihrem Browser ausgeführt wird, erfassen wir:"
        ],
        "bullets": [
          {
            "strong": "Keine personenbezogenen Daten (PII):",
            "text": "Wir erheben weder Namen noch Adressen oder Passwörter."
          },
          {
            "strong": "Keine Inhalte der QR-Codes:",
            "text": "Ihre Texte und Links gelangen zu keinem Zeitpunkt auf unsere Server."
          },
          {
            "strong": "Nur lokaler Verlauf:",
            "text": "Kürzlich erstellte Codes werden nur in Ihrem Browser-Speicher abgelegt und können jederzeit gelöscht werden."
          }
        ]
      },
      {
        "id": "cookies-analytics",
        "tocLabel": "4. Cookies und Analyse",
        "title": "4. Cookies und Webanalyse",
        "paragraphs": [
          "Wir setzen minimale, anonymisierte Analysewerkzeuge mit IP-Maskierung ein, um Seitenstabilität und Bedienbarkeit kontinuierlich zu optimieren."
        ]
      },
      {
        "id": "third-party-links",
        "tocLabel": "5. Externe Links",
        "title": "5. Links zu Drittanbietern",
        "paragraphs": [
          "Unsere Website kann Links zu GitHub oder Discord enthalten. Bitte beachten Sie beim Verlassen unserer Website die Datenschutzrichtlinien der jeweiligen Anbieter."
        ]
      },
      {
        "id": "gdpr-compliance",
        "tocLabel": "6. DSGVO-Konformität",
        "title": "6. Einhaltung der DSGVO",
        "paragraphs": [
          "Wir unterstützen die Grundsätze der Datenschutz-Grundverordnung (DSGVO) vollumfänglich. Sie behalten stets die vollständige Kontrolle über Ihre Daten auf Ihrem Gerät."
        ]
      },
      {
        "id": "contact",
        "tocLabel": "7. Kontakt",
        "title": "7. Kontaktmöglichkeiten",
        "paragraphs": [
          "Fragen zu dieser Datenschutzerklärung richten Sie bitte an support@onlineqrgenerators.com oder nutzen Sie unser Kontaktformular."
        ]
      }
    ]
  },
  "terms": {
    "title": "Nutzungsbedingungen",
    "metaDesc": "Nutzungsbedingungen für die Verwendung von onlineqrgenerators.com.",
    "badge": "Nutzungsrichtlinien",
    "heading": "Nutzungsbedingungen",
    "lastUpdated": "Zuletzt aktualisiert: 31. August 2026",
    "tocTitle": "Auf dieser Seite",
    "sections": [
      {
        "id": "agreement",
        "tocLabel": "1. Zustimmung",
        "title": "1. Zustimmung zu den Bedingungen",
        "paragraphs": [
          "Mit dem Zugriff auf onlineqrgenerators.com erklären Sie sich mit diesen Bedingungen einverstanden."
        ]
      },
      {
        "id": "usage-license",
        "tocLabel": "2. Nutzungslizenz",
        "title": "2. Nutzungslizenz & Urheberrecht",
        "paragraphs": [
          "Wir gewähren Ihnen eine weltweite, unbefristete und kostenlose Lizenz für die erstellten QR-Codes:"
        ],
        "bullets": [
          {
            "strong": "Gewerbliche & private Nutzung:",
            "text": "Nutzen Sie Ihre QR-Codes frei für Werbemittel, Verpackungen oder Webseiten."
          },
          {
            "strong": "Keine Wasserzeichen oder Abos:",
            "text": "Alle Codes sind gebührenfrei und enthalten keine Zwangswerbung."
          },
          {
            "strong": "Verantwortung für Inhalte:",
            "text": "Sie tragen die alleinige Verantwortung für die in Ihren Codes hinterlegten Inhalte."
          }
        ]
      },
      {
        "id": "acceptable-use",
        "tocLabel": "3. Zulässige Nutzung",
        "title": "3. Richtlinie für zulässige Nutzung",
        "paragraphs": [
          "Die Erstellung von Codes für Schadsoftware, Phishing oder illegale Inhalte ist strikt untersagt."
        ]
      },
      {
        "id": "warranties-disclaimer",
        "tocLabel": "4. Haftungsausschluss",
        "title": "4. Haftungsausschluss",
        "paragraphs": [
          "Der Dienst wird 'WIE BESEHEN' bereitgestellt. Bitte testen Sie gedruckte QR-Codes immer vor Serienfertigung mit verschiedenen Mobilgeräten."
        ]
      },
      {
        "id": "liability-limits",
        "tocLabel": "5. Haftungsbeschränkung",
        "title": "5. Beschränkung der Haftung",
        "paragraphs": [
          "onlineqrgenerators.com haftet nicht für Druckkosten oder Einnahmeausfälle durch unleserliche Farb- oder Kontrastwahlen."
        ]
      },
      {
        "id": "terms-changes",
        "tocLabel": "6. Änderungen",
        "title": "6. Änderungen der Bedingungen",
        "paragraphs": [
          "Wir behalten uns das Recht vor, diese Bestimmungen bei Bedarf mit aktualisiertem Datum anzupassen."
        ]
      },
      {
        "id": "contact-us",
        "tocLabel": "7. Kontakt",
        "title": "7. Kontakt",
        "paragraphs": [
          "Bei Fragen wenden Sie sich bitte an support@onlineqrgenerators.com oder besuchen Sie unsere Kontaktseite."
        ]
      }
    ]
  }
},
  it: {
  "about": {
    "title": "Chi Siamo",
    "metaDesc": "Scopri onlineqrgenerators.com, la nostra filosofia orientata alla privacy e il generatore di codici QR gratuito.",
    "badge": "La Nostra Missione",
    "heading": "Connettere il mondo fisico e digitale con eleganza.",
    "subheading": "Condividere informazioni deve essere veloce, sicuro e intuitivo. Una suite QR 100% gratuita senza registrazioni né filigrane.",
    "principlesTitle": "Principi Fondamentali",
    "principles": [
      {
        "title": "Privacy Senza Compromessi",
        "desc": "Nessun dato viene inviato a server esterni. Tutto viene elaborato nel browser tramite JavaScript."
      },
      {
        "title": "Qualità Vettoriale",
        "desc": "Esportazione nitida in formato SVG e PNG ad altissima risoluzione per qualsiasi stampa."
      },
      {
        "title": "Gratis per Sempre",
        "desc": "Nessun abbonamento, limite di scansione o scadenza sui codici QR statici generati."
      },
      {
        "title": "Design Raffinato",
        "desc": "Gradienti curati, personalizzazione degli angoli, cornici decorative e loghi aziendali."
      }
    ],
    "speedBadge": "Progettato per la Velocità",
    "speedTitle": "Standard Web e Architettura Moderna",
    "speedDesc": "Sviluppato con Astro per pagine veloci e indicizzazione SEO ottimale. Tailwind CSS per un design pulito. La generazione del codice avviene in meno di 5 millisecondi nel tuo browser.",
    "techLabels": {
      "framework": "Framework",
      "css": "Utility CSS",
      "generation": "Generazione",
      "build": "Tipo di Build"
    },
    "ctaTitle": "Pronto a creare il tuo codice QR?",
    "ctaSubtitle": "Torna al generatore, scegli i tuoi colori e scarica subito il tuo QR in alta risoluzione.",
    "ctaBtn": "Vai al Generatore QR"
  },
  "contact": {
    "title": "Contattaci",
    "metaDesc": "Hai domande o suggerimenti? Scrivi al team di onlineqrgenerators.com.",
    "badge": "Contatti",
    "heading": "Siamo felici di ascoltarti.",
    "subheading": "Dubbi su design, loghi personalizzati o integrazioni? Inviaci un messaggio.",
    "infoTitle": "Informazioni di Contatto",
    "infoDesc": "Per supporto tecnico o proposte di collaborazione, contattaci tramite questi canali.",
    "channels": {
      "email": "Supporto via e-mail",
      "github": "Progetto Open Source",
      "discord": "Community Discord"
    },
    "responseBadge": "Tempo di Risposta",
    "responseTime": "~24 Ore",
    "responseTitle": "Rispondiamo entro 24 ore",
    "responseDesc": "Il nostro team esamina i messaggi ogni giorno. Per qualsiasi segnalazione o consiglio, scrivici qui.",
    "faqPrompt": "Cerchi risposte rapide? Consulta le FAQ →",
    "formTitle": "Invia un Messaggio",
    "formSubtitle": "Compila il modulo sottostante e ti risponderemo al più presto.",
    "nameLabel": "Il Tuo Nome",
    "namePlaceholder": "Mario Rossi",
    "emailLabel": "Indirizzo E-mail",
    "emailPlaceholder": "mario@example.com",
    "subjectLabel": "Oggetto",
    "subjectPlaceholder": "Come possiamo aiutarti?",
    "messageLabel": "Il Tuo Messaggio",
    "messagePlaceholder": "Scrivi qui la tua richiesta...",
    "submitBtn": "Invia Messaggio",
    "success": {
      "title": "Messaggio Inviato!",
      "desc": "Grazie per averci contattato. Ti risponderemo via email nel più breve tempo possibile.",
      "resetBtn": "Invia un altro messaggio"
    }
  },
  "privacy": {
    "title": "Informativa sulla Privacy",
    "metaDesc": "Leggi la nostra politica sulla privacy: tutti i codici QR sono generati localmente nel tuo browser.",
    "badge": "Documenti Legali",
    "heading": "Informativa sulla Privacy",
    "lastUpdated": "Ultimo aggiornamento: 31 agosto 2026",
    "tocTitle": "In questa pagina",
    "sections": [
      {
        "id": "introduction",
        "tocLabel": "1. Introduzione",
        "title": "1. Introduzione",
        "paragraphs": [
          "Benvenuto su onlineqrgenerators.com. La tutela della tua privacy è il nostro impegno primario. Questa informativa descrive la gestione dei dati sulla nostra piattaforma.",
          "La piattaforma non impiega database centralizzati. Non richiediamo alcuna registrazione, garantendo un utilizzo completamente anonimo."
        ]
      },
      {
        "id": "browser-first",
        "tocLabel": "2. Elaborazione Locale",
        "title": "2. Elaborazione Esclusiva nel Browser (Zero Conservazione Dati)",
        "callout": {
          "strong": "Nota Tecnica di Privacy:",
          "text": "Tutti i calcoli matematici, le combinazioni cromatiche e i loghi vengono gestiti sul tuo dispositivo via JavaScript locale. I dati non escono mai dal tuo browser."
        },
        "paragraphs": [
          "Quando inserisci un URL o un testo, questo viene disegnato direttamente sull'elemento canvas dello schermo, senza passaggio su server remoti."
        ]
      },
      {
        "id": "information-collection",
        "tocLabel": "3. Raccolta Dati",
        "title": "3. Raccolta di Informazioni",
        "paragraphs": [
          "Operando interamente sul tuo dispositivo, non raccogliamo:"
        ],
        "bullets": [
          {
            "strong": "Nessun dato identificativo (PII):",
            "text": "Non registriamo nomi, email, telefoni né password."
          },
          {
            "strong": "Nessun contenuto dei codici:",
            "text": "I tuoi link e testi non vengono mai trasmessi a server esterni."
          },
          {
            "strong": "Cronologia solo locale:",
            "text": "La cronologia dei codici recenti risiede unicamente nella memoria locale del tuo browser ed è cancellabile con un clic."
          }
        ]
      },
      {
        "id": "cookies-analytics",
        "tocLabel": "4. Cookie e Analisi",
        "title": "4. Cookie e Strumenti di Analisi",
        "paragraphs": [
          "Utilizziamo strumenti di statistica anonimizzati (con mascheramento degli indirizzi IP) al solo scopo di valutare le prestazioni del sito."
        ]
      },
      {
        "id": "third-party-links",
        "tocLabel": "5. Collegamenti Esterni",
        "title": "5. Collegamenti a Siti Terzi",
        "paragraphs": [
          "Il sito può includere link a servizi esterni come GitHub o Discord. Invitiamo a consultare le rispettive informative sulla privacy di tali portali."
        ]
      },
      {
        "id": "gdpr-compliance",
        "tocLabel": "6. Conformità GDPR",
        "title": "6. Conformità al Regolamento GDPR",
        "paragraphs": [
          "Supportiamo integralmente il GDPR. Non archiviando dati su server, l'utente conserva il pieno controllo locale delle proprie informazioni."
        ]
      },
      {
        "id": "contact",
        "tocLabel": "7. Contatti",
        "title": "7. Informazioni di Contatto",
        "paragraphs": [
          "Per chiarimenti, scrivici a support@onlineqrgenerators.com o visita la nostra pagina Contatti."
        ]
      }
    ]
  },
  "terms": {
    "title": "Termini e Condizioni",
    "metaDesc": "Termini e condizioni per l'utilizzo del servizio onlineqrgenerators.com.",
    "badge": "Linee Guida",
    "heading": "Termini e Condizioni",
    "lastUpdated": "Ultimo aggiornamento: 31 agosto 2026",
    "tocTitle": "In questa pagina",
    "sections": [
      {
        "id": "agreement",
        "tocLabel": "1. Accettazione",
        "title": "1. Accettazione dei Termini",
        "paragraphs": [
          "Utilizzando onlineqrgenerators.com, accetti di rispettare questi termini e condizioni."
        ]
      },
      {
        "id": "usage-license",
        "tocLabel": "2. Licenza d'Uso",
        "title": "2. Licenza d'Uso e Proprietà Intellettuale",
        "paragraphs": [
          "Ti concediamo una licenza gratuita, globale e senza scadenza per l'utilizzo dei codici QR generati:"
        ],
        "bullets": [
          {
            "strong": "Uso Commerciale e Personale:",
            "text": "Puoi impiegare i codici creati su volantini, etichette o confezioni senza limitazioni."
          },
          {
            "strong": "Senza Filigrane né Canoni:",
            "text": "Tutti i codici sono gratuiti e non presentano loghi o pubblicità forzate."
          },
          {
            "strong": "Responsabilità del Contenuto:",
            "text": "La piena responsabilità delle informazioni codificate ricade esclusivamente sull'utente."
          }
        ]
      },
      {
        "id": "acceptable-use",
        "tocLabel": "3. Uso Accettabile",
        "title": "3. Politica di Uso Accettabile",
        "paragraphs": [
          "È fatto divieto assoluto di creare codici per diffondere malware, tentativi di phishing o contenuti illeciti."
        ]
      },
      {
        "id": "warranties-disclaimer",
        "tocLabel": "4. Esclusione di Garanzie",
        "title": "4. Esclusione di Garanzie",
        "paragraphs": [
          "Il servizio è offerto 'COSÌ COM'È'. Si raccomanda di effettuare sempre test di scansione reali con vari smartphone prima di avviare stampe tipografiche in volume."
        ]
      },
      {
        "id": "liability-limits",
        "tocLabel": "5. Limitazione di Responsabilità",
        "title": "5. Limitazione di Responsabilità",
        "paragraphs": [
          "onlineqrgenerators.com non risponde di costi tipografici o mancati ricavi derivanti da un'insufficiente leggibilità dei codici stampati."
        ]
      },
      {
        "id": "terms-changes",
        "tocLabel": "6. Modifiche ai Termini",
        "title": "6. Modifiche ai Termini",
        "paragraphs": [
          "Ci riserviamo il diritto di aggiornare questi termini in qualsiasi momento, indicando la data dell'ultima revisione."
        ]
      },
      {
        "id": "contact-us",
        "tocLabel": "7. Contatti",
        "title": "7. Informazioni di Contatto",
        "paragraphs": [
          "Per chiarimenti, scrivici all'indirizzo support@onlineqrgenerators.com o tramite la pagina Contattaci."
        ]
      }
    ]
  }
},
  pt: {
  "about": {
    "title": "Sobre Nós",
    "metaDesc": "Conheça o onlineqrgenerators.com, nossa dedicação à privacidade e o gerador de QR codes gratuito.",
    "badge": "Nossa Missão",
    "heading": "Conectando o mundo físico e digital com elegância.",
    "subheading": "Acreditamos que compartilhar informações deve ser simples, seguro e elegante. Uma ferramenta 100% gratuita, sem necessidade de cadastro ou marcas d'água.",
    "principlesTitle": "Princípios Fundamentais",
    "principles": [
      {
        "title": "Foco Total em Privacidade",
        "desc": "Sem envio de dados para servidores. Todo o processamento é feito no seu navegador via JavaScript."
      },
      {
        "title": "Qualidade Vetorial",
        "desc": "Exportação em formatos nítidos SVG e PNG em altíssima resolução para telas e impressões."
      },
      {
        "title": "100% Grátis para Sempre",
        "desc": "Sem períodos de teste, limites de leitura ou prazos de validade para seus códigos estáticos."
      },
      {
        "title": "Design Customizável",
        "desc": "Gradientes modernos, padrões geométricos, molduras elegantes e inserção do seu logo."
      }
    ],
    "speedBadge": "Focado em Velocidade",
    "speedTitle": "Padrões Web e Arquitetura Moderna",
    "speedDesc": "Desenvolvido em Astro para carregamento ultra-rápido e excelente SEO. Tailwind CSS para um design responsivo. Os códigos QR são desenhados no seu navegador em menos de 5 milissegundos.",
    "techLabels": {
      "framework": "Framework",
      "css": "Utilitários CSS",
      "generation": "Geração",
      "build": "Tipo de Build"
    },
    "ctaTitle": "Pronto para criar seu código QR?",
    "ctaSubtitle": "Volte ao gerador, escolha as cores ideais e baixe seu código em alta resolução.",
    "ctaBtn": "Ir para o Gerador QR"
  },
  "contact": {
    "title": "Fale Conosco",
    "metaDesc": "Tem dúvidas ou sugestões? Entre em contato com a equipe do onlineqrgenerators.com.",
    "badge": "Contato",
    "heading": "Adoramos ouvir sua opinião.",
    "subheading": "Tem dúvidas sobre personalizações, integração de desenvolvedores ou parcerias? Fale conosco.",
    "infoTitle": "Canais de Atendimento",
    "infoDesc": "Para suporte técnico ou oportunidades de parceria, utilize nossos canais.",
    "channels": {
      "email": "Suporte por e-mail",
      "github": "Código Aberto",
      "discord": "Comunidade no Discord"
    },
    "responseBadge": "Tempo de Resposta",
    "responseTime": "~24 Horas",
    "responseTitle": "Respondemos em até 24 horas",
    "responseDesc": "Nossa equipe confere as mensagens todos os dias. Para relatar bugs ou dúvidas com logotipos, escreva para nós.",
    "faqPrompt": "Precisa de respostas rápidas? Veja as Perguntas Frequentes →",
    "formTitle": "Envie uma Mensagem",
    "formSubtitle": "Preencha o formulário e responderemos o mais breve possível.",
    "nameLabel": "Seu Nome",
    "namePlaceholder": "Ana Silva",
    "emailLabel": "Endereço de E-mail",
    "emailPlaceholder": "ana@example.com",
    "subjectLabel": "Assunto",
    "subjectPlaceholder": "Como podemos ajudar?",
    "messageLabel": "Sua Mensagem",
    "messagePlaceholder": "Descreva sua dúvida ou projeto...",
    "submitBtn": "Enviar Mensagem",
    "success": {
      "title": "Mensagem Enviada!",
      "desc": "Agradecemos o seu contato. Nossa equipe responderá ao seu e-mail em breve.",
      "resetBtn": "Enviar outra mensagem"
    }
  },
  "privacy": {
    "title": "Política de Privacidade",
    "metaDesc": "Leia nossa política de privacidade: seus QR codes são criados diretamente no navegador sem envio de dados.",
    "badge": "Documentos Legais",
    "heading": "Política de Privacidade",
    "lastUpdated": "Última atualização: 31 de agosto de 2026",
    "tocTitle": "Nesta página",
    "sections": [
      {
        "id": "introduction",
        "tocLabel": "1. Introdução",
        "title": "1. Introdução",
        "paragraphs": [
          "Bem-vindo ao onlineqrgenerators.com. Proteger sua privacidade é nosso compromisso essencial.",
          "Nossa plataforma foi concebida para funcionar sem servidores de banco de dados, sem exigir logins nem cadastros."
        ]
      },
      {
        "id": "browser-first",
        "tocLabel": "2. Processamento no Navegador",
        "title": "2. Processamento Direto no Navegador (Zero Retenção)",
        "callout": {
          "strong": "Nota de Privacidade Técnica:",
          "text": "Todas as cores, molduras e logos são montados no seu próprio aparelho através de JavaScript. As informações nunca deixam o navegador."
        },
        "paragraphs": [
          "Ao digitar uma URL ou senha, os dados são desenhados diretamente na tela do seu computador ou celular sem qualquer tráfego com nossos servidores."
        ]
      },
      {
        "id": "information-collection",
        "tocLabel": "3. Coleta de Informações",
        "title": "3. Coleta de Informações",
        "paragraphs": [
          "Por operar inteiramente no seu navegador, nossa plataforma não coleta:"
        ],
        "bullets": [
          {
            "strong": "Sem Dados Pessoais Identificáveis (PII):",
            "text": "Não guardamos nomes, e-mails, telefones nem senhas."
          },
          {
            "strong": "Sem Conteúdo dos Códigos:",
            "text": "Os textos e links inseridos jamais chegam aos nossos servidores."
          },
          {
            "strong": "Histórico Estritamente Local:",
            "text": "O histórico de códigos recentes fica salvo somente na memória local do seu navegador e pode ser apagado a qualquer momento."
          }
        ]
      },
      {
        "id": "cookies-analytics",
        "tocLabel": "4. Cookies e Métricas",
        "title": "4. Cookies e Métricas de Acesso",
        "paragraphs": [
          "Utilizamos ferramentas de medição anônimas com mascaramento de IP exclusivamente para avaliar estabilidade e performance."
        ]
      },
      {
        "id": "third-party-links",
        "tocLabel": "5. Links Externos",
        "title": "5. Links para Serviços Externos",
        "paragraphs": [
          "Podemos incluir links para portais como GitHub e Discord. Consulte os termos e políticas de cada página ao visitá-las."
        ]
      },
      {
        "id": "gdpr-compliance",
        "tocLabel": "6. Conformidade LGPD/GDPR",
        "title": "6. Conformidade com LGPD e GDPR",
        "paragraphs": [
          "Por não mantermos dados pessoais nos servidores, você possui total controle e soberania sobre seus arquivos."
        ]
      },
      {
        "id": "contact",
        "tocLabel": "7. Contato",
        "title": "7. Informações de Contato",
        "paragraphs": [
          "Dúvidas sobre esta política podem ser enviadas para support@onlineqrgenerators.com ou pela nossa página de contato."
        ]
      }
    ]
  },
  "terms": {
    "title": "Termos e Condições",
    "metaDesc": "Termos e condições de uso da plataforma onlineqrgenerators.com.",
    "badge": "Regras de Uso",
    "heading": "Termos e Condições",
    "lastUpdated": "Última atualização: 31 de agosto de 2026",
    "tocTitle": "Nesta página",
    "sections": [
      {
        "id": "agreement",
        "tocLabel": "1. Aceitação dos Termos",
        "title": "1. Aceitação dos Termos",
        "paragraphs": [
          "Ao utilizar o onlineqrgenerators.com, você concorda com estes termos de serviço."
        ]
      },
      {
        "id": "usage-license",
        "tocLabel": "2. Licença de Uso",
        "title": "2. Licença de Uso e Direitos",
        "paragraphs": [
          "Garantimos uma licença mundial, vitalícia e sem custos para uso dos códigos QR gerados:"
        ],
        "bullets": [
          {
            "strong": "Uso Comercial e Pessoal:",
            "text": "Aplique seus códigos em folhetos, rótulos, cardápios ou painéis com total liberdade."
          },
          {
            "strong": "Sem Marcas d'Água:",
            "text": "Todos os códigos são gratuitos e não trazem logotipos forçados."
          },
          {
            "strong": "Titularidade do Conteúdo:",
            "text": "Você é o único responsável pelos links e dados que embutir em seus códigos."
          }
        ]
      },
      {
        "id": "acceptable-use",
        "tocLabel": "3. Uso Responsável",
        "title": "3. Diretrizes de Uso Responsável",
        "paragraphs": [
          "É proibida a geração de códigos para distribuição de vírus, golpes de phishing ou conteúdos ilegais."
        ]
      },
      {
        "id": "warranties-disclaimer",
        "tocLabel": "4. Isenção de Garantias",
        "title": "4. Isenção de Garantias",
        "paragraphs": [
          "O serviço é disponibilizado 'COMO ESTÁ'. Faça sempre testes práticos com diferentes celulares antes de imprimir em grande escala."
        ]
      },
      {
        "id": "liability-limits",
        "tocLabel": "5. Limitação de Responsabilidade",
        "title": "5. Limitação de Responsabilidade",
        "paragraphs": [
          "O onlineqrgenerators.com não se responsabiliza por custos gráficos ou prejuízos comerciais decorrentes de má leitura de códigos."
        ]
      },
      {
        "id": "terms-changes",
        "tocLabel": "6. Alterações dos Termos",
        "title": "6. Alterações dos Termos",
        "paragraphs": [
          "Reservamo-nos o direito de revisar estes termos a qualquer momento, atualizando a data de revisão."
        ]
      },
      {
        "id": "contact-us",
        "tocLabel": "7. Contato",
        "title": "7. Atendimento",
        "paragraphs": [
          "Em caso de dúvidas, envie mensagem para support@onlineqrgenerators.com ou use a página Fale Conosco."
        ]
      }
    ]
  }
},
  ru: {
  "about": {
    "title": "О нас",
    "metaDesc": "Узнайте больше о onlineqrgenerators.com, нашей политике конфиденциальности и бесплатном генераторе QR-кодов.",
    "badge": "Наша миссия",
    "heading": "Объединяем реальный и цифровой мир с безупречным стилем.",
    "subheading": "Мы уверены, что обмен информацией должен быть быстрым, безопасным и наглядным. Создали сервис генерации QR-кодов без регистрации, рекламы и водяных знаков.",
    "principlesTitle": "Главные принципы",
    "principles": [
      {
        "title": "Приоритет конфиденциальности",
        "desc": "Никаких скрытых отправок на сервер. Все данные кодируются локально в вашем браузере через JavaScript."
      },
      {
        "title": "Векторное качество",
        "desc": "Четкий экспорт в формате SVG и сверхвысоком разрешении PNG для любых типов экранов и полиграфии."
      },
      {
        "title": "100% Бесплатно навсегда",
        "desc": "Никаких подписок, лимитов на сканирование или внезапного истечения срока действия статических кодов."
      },
      {
        "title": "Современный дизайн",
        "desc": "Поддержка градиентов, оригинальных форм маркеров, стильных рамок и логотипов в центре."
      }
    ],
    "speedBadge": "Создан для высокой скорости",
    "speedTitle": "Современные веб-стандарты и технологии",
    "speedDesc": "Мы используем Astro для быстрой загрузки и отличной SEO-оптимизации. Tailwind CSS обеспечивает адаптивный интерфейс, а генерация QR-кода занимает менее 5 миллисекунд прямо в вашем браузере.",
    "techLabels": {
      "framework": "Фреймворк",
      "css": "Стили CSS",
      "generation": "Генерация",
      "build": "Тип сборки"
    },
    "ctaTitle": "Готовы создать свой QR-код?",
    "ctaSubtitle": "Вернитесь к генератору, настройте цвет и логотип и скачайте готовый код в высоком качестве.",
    "ctaBtn": "Перейти к генератору QR"
  },
  "contact": {
    "title": "Контакты",
    "metaDesc": "Есть вопросы или предложения? Свяжитесь с командой onlineqrgenerators.com.",
    "badge": "Свяжитесь с нами",
    "heading": "Мы всегда рады вашим отзывам.",
    "subheading": "Интересует коммерческое использование, добавление функций или интеграция? Напишите нам.",
    "infoTitle": "Контактная информация",
    "infoDesc": "Для технической поддержки или предложений воспользуйтесь доступными каналами связи.",
    "channels": {
      "email": "Поддержка по почте",
      "github": "Открытый исходный код",
      "discord": "Сообщество Discord"
    },
    "responseBadge": "Время ответа",
    "responseTime": "~24 часа",
    "responseTitle": "Отвечаем в течение 24 часов",
    "responseDesc": "Наша команда ежедневно проверяет входящие сообщения. Если возникли сложности с генерацией логотипов, напишите нам.",
    "faqPrompt": "Нужен быстрый ответ? Посмотрите раздел FAQ →",
    "formTitle": "Отправить сообщение",
    "formSubtitle": "Заполните форму ниже, и мы свяжемся с вами в ближайшее время.",
    "nameLabel": "Ваше имя",
    "namePlaceholder": "Иван Иванов",
    "emailLabel": "Электронная почта",
    "emailPlaceholder": "ivan@example.com",
    "subjectLabel": "Тема обращения",
    "subjectPlaceholder": "Чем мы можем помочь?",
    "messageLabel": "Текст сообщения",
    "messagePlaceholder": "Опишите ваш вопрос или проект...",
    "submitBtn": "Отправить сообщение",
    "success": {
      "title": "Сообщение отправлено!",
      "desc": "Спасибо за обращение. Мы получили ваше сообщение и ответим на него в ближайшее время.",
      "resetBtn": "Отправить еще одно сообщение"
    }
  },
  "privacy": {
    "title": "Политика конфиденциальности",
    "metaDesc": "Ознакомьтесь с политикой конфиденциальности: все QR-коды создаются исключительно в вашем браузере.",
    "badge": "Юридические документы",
    "heading": "Политика конфиденциальности",
    "lastUpdated": "Последнее обновление: 31 августа 2026",
    "tocTitle": "На этой странице",
    "sections": [
      {
        "id": "introduction",
        "tocLabel": "1. Введение",
        "title": "1. Введение",
        "paragraphs": [
          "Добро пожаловать на onlineqrgenerators.com. Мы уделяем первостепенное внимание защите вашей приватности.",
          "Сервис спроектирован без использования централизованных баз данных и не требует регистрации личных профилей."
        ]
      },
      {
        "id": "browser-first",
        "tocLabel": "2. Локальная генерация",
        "title": "2. Локальная генерация в браузере (Без сохранения данных)",
        "callout": {
          "strong": "Техническое примечание о безопасности:",
          "text": "Все вычисления, подбор цветов, нанесение рамок и логотипов выполняются прямо на вашем устройстве с помощью JavaScript. Данные не передаются на сервер."
        },
        "paragraphs": [
          "При вводе ссылки или пароля Wi-Fi они сразу же отображаются на элементе canvas в окне браузера без отправки во внешнюю сеть."
        ]
      },
      {
        "id": "information-collection",
        "tocLabel": "3. Сбор информации",
        "title": "3. Сбор информации",
        "paragraphs": [
          "Поскольку генератор работает на стороне клиента, мы:"
        ],
        "bullets": [
          {
            "strong": "Не собираем личные данные (PII):",
            "text": "Мы не сохраняем имена, email, номера телефонов и пароли."
          },
          {
            "strong": "Не храним тексты кодов:",
            "text": "Содержимое ваших QR-кодов никогда не загружается на наши серверы."
          },
          {
            "strong": "Только локальная история:",
            "text": "Список последних сгенерированных кодов сохраняется лишь в локальном хранилище вашего браузера и может быть очищен в один клик."
          }
        ]
      },
      {
        "id": "cookies-analytics",
        "tocLabel": "4. Файлы cookie",
        "title": "4. Файлы cookie и аналитика",
        "paragraphs": [
          "Мы используем минимальную статистику с маскированием IP-адресов исключительно для мониторинга стабильности и скорости работы сайта."
        ]
      },
      {
        "id": "third-party-links",
        "tocLabel": "5. Внешние ссылки",
        "title": "5. Ссылки на сторонние ресурсы",
        "paragraphs": [
          "Сайт может содержать ссылки на сторонние порталы (например, GitHub или Discord). Рекомендуем знакомиться с их политиками при переходе."
        ]
      },
      {
        "id": "gdpr-compliance",
        "tocLabel": "6. Соответствие GDPR",
        "title": "6. Соответствие требованиям GDPR",
        "paragraphs": [
          "Поскольку мы не храним персональные данные на серверах, вы сохраняете полный и единоличный контроль над своими файлами."
        ]
      },
      {
        "id": "contact",
        "tocLabel": "7. Контакты",
        "title": "7. Контактные данные",
        "paragraphs": [
          "По вопросам приватности обращайтесь по адресу support@onlineqrgenerators.com или через страницу контактов."
        ]
      }
    ]
  },
  "terms": {
    "title": "Условия использования",
    "metaDesc": "Условия использования бесплатного сервиса onlineqrgenerators.com.",
    "badge": "Правила сервиса",
    "heading": "Условия использования",
    "lastUpdated": "Последнее обновление: 31 августа 2026",
    "tocTitle": "На этой странице",
    "sections": [
      {
        "id": "agreement",
        "tocLabel": "1. Согласие с условиями",
        "title": "1. Согласие с условиями",
        "paragraphs": [
          "Используя onlineqrgenerators.com, вы подтверждаете свое согласие с настоящими Условиями использования."
        ]
      },
      {
        "id": "usage-license",
        "tocLabel": "2. Лицензия на использование",
        "title": "2. Лицензия на использование и авторские права",
        "paragraphs": [
          "Мы предоставляем бессрочную, глобальную и бесплатную лицензию на созданные коды:"
        ],
        "bullets": [
          {
            "strong": "Коммерческое и личное использование:",
            "text": "Коды можно бесплатно размещать на упаковках, вывесках, визитках и веб-сайтах."
          },
          {
            "strong": "Без водяных знаков и скрытых платежей:",
            "text": "Все функции бесплатны и не навязывают скрытую рекламу."
          },
          {
            "strong": "Ответственность за содержимое:",
            "text": "Вы несете полную ответственность за данные и ссылки, зашифрованные в вашем коде."
          }
        ]
      },
      {
        "id": "acceptable-use",
        "tocLabel": "3. Правила использования",
        "title": "3. Правила допустимого использования",
        "paragraphs": [
          "Запрещается использовать генератор для создания кодов со ссылками на вредоносное ПО, фишинговые сайты или незаконный контент."
        ]
      },
      {
        "id": "warranties-disclaimer",
        "tocLabel": "4. Отказ от гарантий",
        "title": "4. Отказ от гарантий",
        "paragraphs": [
          "Сервис предоставляется 'КАК ЕСТЬ'. Рекомендуем обязательно тестировать распечатанные коды различными устройствами перед запуском больших тиражей."
        ]
      },
      {
        "id": "liability-limits",
        "tocLabel": "5. Ограничение ответственности",
        "title": "5. Ограничение ответственности",
        "paragraphs": [
          "Сервис не несет ответственности за затраты на печать или финансовые потери из-за некорректного подбора цветов пользователем."
        ]
      },
      {
        "id": "terms-changes",
        "tocLabel": "6. Изменения условий",
        "title": "6. Изменения условий",
        "paragraphs": [
          "Мы оставляем за собой право обновлять правила с указанием даты последней ревизии."
        ]
      },
      {
        "id": "contact-us",
        "tocLabel": "7. Контакты",
        "title": "7. Контакты",
        "paragraphs": [
          "По всем вопросам обращайтесь по адресу support@onlineqrgenerators.com или через форму обратной связи."
        ]
      }
    ]
  }
},
  id: {
    about: {
      title: "Tentang Kami",
      metaDesc: "Pelajari tentang onlineqrgenerators.com, filosofi privasi kami, teknologi di balik layar, dan misi menghadirkan aplikasi generator kode QR terbaik di dunia.",
      badge: "Misi Kami",
      heading: "Menghubungkan dunia fisik dan digital dengan indah.",
      subheading: "Di onlineqrgenerators.com, kami percaya bahwa berbagi informasi harus berlangsung cepat, privat, dan memikat. Kami membangun suite kode QR berbasis peramban berkualitas tinggi yang 100% gratis tanpa pendaftaran, iklan mengganggu, atau watermark.",
      principlesTitle: "Prinsip Utama Kami",
      principles: [
        {
          title: "Privasi Tanpa Kompromi",
          desc: "Setiap kode QR dihitung dan dibuat langsung di dalam peramban Anda menggunakan JavaScript lokal. Tautan, kontak, dan kata sandi Wi-Fi Anda tidak pernah dikirim ke server mana pun."
        },
        {
          title: "100% Gratis Selamanya",
          desc: "Tanpa biaya langganan bulanan tersembunyi, tanpa jebakan masa uji coba, dan tanpa watermark. Kode QR statis Anda aktif selamanya dan tidak pernah kedaluwarsa."
        },
        {
          title: "Desain Berkelas & Presisi Vektor",
          desc: "Kami menghadirkan opsi kustomisasi mendalam: gradien warna, bentuk sudut unik, penempatan logo, dan ekspor format SVG vektor beresolusi tajam untuk cetak spanduk."
        },
        {
          title: "Kecepatan Super Kilat",
          desc: "Dibangun dengan arsitektur modern tanpa dependensi berat. Halaman dimuat dalam sekejap, memungkinkan pembuatan kode QR instan tanpa jeda."
        }
      ],
      speedBadge: "Kinerja Sisi Klien",
      speedTitle: "Pemrosesan Lokal 100% di Perangkat Anda",
      speedDesc: "Dengan menjalankan seluruh kalkulasi pembuatan QR di peramban web Anda, kami menghapus latensi jaringan antar server dan menjamin keamanan privasi data Anda seutuhnya.",
      techLabels: {
        framework: "Astro Modern",
        css: "Tailwind CSS v4",
        generation: "qr-code-styling",
        build: "Edge Deployed"
      },
      ctaTitle: "Siap Membuat Kode QR Kustom Anda?",
      ctaSubtitle: "Mulai buat kode QR pertama Anda sekarang juga—tanpa biaya dan tanpa perlu mendaftar akun.",
      ctaBtn: "Buka Generator QR"
    },
    contact: {
      title: "Hubungi Kami",
      metaDesc: "Hubungi tim onlineqrgenerators.com untuk pertanyaan, masukan, kerja sama, atau bantuan teknis.",
      badge: "Pusat Bantuan",
      heading: "Kami Siap Membantu Anda",
      subheading: "Punya pertanyaan seputar pembuatan kode QR, masukan fitur baru, atau kerja sama bisnis? Jangan ragu untuk mengirimkan pesan kepada kami.",
      infoTitle: "Saluran Komunikasi",
      infoDesc: "Pilih cara tercepat dan ternyaman bagi Anda untuk terhubung dengan pengembang kami.",
      channels: {
        email: "support@onlineqrgenerators.com",
        github: "techieeindia-lab/onlineqrgenerators.com",
        discord: "Komunitas Discord Pengembang"
      },
      responseBadge: "Waktu Respon Cepat",
      responseTime: "< 24 Jam",
      responseTitle: "Dukungan Responsif",
      responseDesc: "Tim kami meninjau setiap pesan yang masuk dan berupaya memberikan balasan dalam waktu 1 hari kerja.",
      faqPrompt: "Butuh jawaban cepat? Buka Tanya Jawab (FAQ) →",
      formTitle: "Kirim Pesan",
      formSubtitle: "Isi formulir di bawah ini dan kami akan segera membalas pesan Anda.",
      nameLabel: "Nama Lengkap",
      namePlaceholder: "Budi Santoso",
      emailLabel: "Alamat Email",
      emailPlaceholder: "budi@contoh.com",
      subjectLabel: "Subjek Pesan",
      subjectPlaceholder: "Apa yang bisa kami bantu?",
      messageLabel: "Isi Pesan",
      messagePlaceholder: "Tuliskan detail pertanyaan atau masukan Anda di sini...",
      submitBtn: "Kirim Pesan",
      success: {
        title: "Pesan Berhasil Terkirim!",
        desc: "Terima kasih telah menghubungi kami. Pesan Anda telah kami terima dan tim kami akan segera membalasnya.",
        resetBtn: "Kirim pesan lain"
      }
    },
    privacy: {
      title: "Kebijakan Privasi",
      metaDesc: "Baca panduan privasi kami. Semua kode QR dibuat langsung di peramban Anda, memastikan data tidak pernah meninggalkan perangkat Anda.",
      badge: "Dokumen Hukum",
      heading: "Kebijakan Privasi",
      lastUpdated: "Terakhir Diperbarui: 31 Agustus 2026",
      tocTitle: "Daftar Isi",
      sections: [
        {
          id: "introduction",
          tocLabel: "1. Pendahuluan",
          title: "1. Pendahuluan",
          paragraphs: [
            "Selamat datang di onlineqrgenerators.com. Kami berkomitmen penuh untuk menjaga privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana informasi ditangani saat Anda menggunakan layanan generator kode QR gratis kami.",
            "Berbeda dengan platform online konvensional, layanan kami dirancang dari awal untuk beroperasi tanpa database terpusat. Kami tidak memerlukan pendaftaran akun, data kartu kredit, atau profil pengguna, sehingga Anda dapat membuat kode QR dengan anonimitas penuh."
          ]
        },
        {
          id: "browser-first",
          tocLabel: "2. Pemrosesan di Peramban",
          title: "2. Pembuatan di Sisi Peramban (Zero Data Retention)",
          callout: {
            strong: "Catatan Teknis Privasi:",
            text: "Seluruh kalkulasi pengenkodean piksel, palet warna, templat, logo, dan bingkai berlangsung langsung di perangkat Anda menggunakan JavaScript lokal. Data yang Anda masukkan untuk membuat kode QR tidak pernah dikirim ke server kami."
          },
          paragraphs: [
            "Saat Anda memasukkan URL, kata sandi Wi-Fi, atau kartu nama kontak (vCard), input tersebut langsung dirender ke elemen kanvas di jendela peramban Anda. Karena mesin generator bekerja secara lokal (client-side), kami tidak memiliki sistem atau akses apa pun untuk melihat, merekam, menyimpan, atau menjual data Anda."
          ]
        },
        {
          id: "information-collection",
          tocLabel: "3. Pengumpulan Informasi",
          title: "3. Pengumpulan Informasi",
          paragraphs: [
            "Karena layanan kami berjalan sepenuhnya di dalam peramban Anda, kami menerapkan kebijakan tanpa pengumpulan data:"
          ],
          bullets: [
            {
              strong: "Tanpa Data Pribadi (PII):",
              text: "Kami tidak mengumpulkan nama, alamat email, nomor telepon, atau kata sandi Anda."
            },
            {
              strong: "Tanpa Penyimpanan Konten QR:",
              text: "Konten yang Anda sematkan (seperti URL tujuan, draf pesan WhatsApp, atau alamat dompet kripto) tidak pernah dikirimkan ke server kami."
            },
            {
              strong: "Riwayat Tersimpan Lokal:",
              text: "Kode yang Anda buat disimpan di penyimpanan lokal (Local Storage) peramban Anda agar dapat diakses kembali di tab 'Kode QR Terkini'. Data ini tersimpan murni di perangkat Anda dan dapat dihapus kapan saja."
            }
          ]
        },
        {
          id: "cookies-analytics",
          tocLabel: "4. Cookie & Analitik",
          title: "4. Cookie dan Analitik Web",
          paragraphs: [
            "Kami menggunakan cookie minimal dan alat analitik agregat untuk memahami bagaimana pengunjung berinteraksi dengan situs, mengukur performa halaman, dan memperbaiki masalah teknis.",
            "Semua pelacakan analitik dikonfigurasi dengan filter anonimitas, di mana alamat IP disamarkan (masked). Data ini digunakan semata-mata untuk laporan statistik umum demi meningkatkan kenyamanan pengguna."
          ]
        },
        {
          id: "third-party-links",
          tocLabel: "5. Tautan Eksternal",
          title: "5. Tautan ke Layanan Pihak Ketiga",
          paragraphs: [
            "Situs web kami mungkin menyertakan tautan ke platform eksternal (seperti GitHub, Discord, atau sumber industri). Harap diperhatikan bahwa begitu Anda meninggalkan situs kami, kami tidak bertanggung jawab atas kebijakan privasi platform pihak ketiga tersebut."
          ]
        },
        {
          id: "gdpr-compliance",
          tocLabel: "6. Kepatuhan GDPR & Perlindungan Data",
          title: "6. Kepatuhan Standar Perlindungan Data (GDPR)",
          paragraphs: [
            "Sebagai aplikasi web yang mengutamakan privasi, kami mendukung prinsip-prinsip General Data Protection Regulation (GDPR) dan standar perlindungan privasi internasional lainnya.",
            "Karena kami tidak menyimpan atau memproses data pribadi di server kami, tidak ada database yang dapat kami ambil atau ekspor. Anda memiliki kendali dan kepemilikan mutlak atas data Anda yang berada di memori peramban lokal."
          ]
        },
        {
          id: "contact",
          tocLabel: "7. Informasi Kontak",
          title: "7. Informasi Kontak",
          paragraphs: [
            "Jika Anda memiliki pertanyaan seputar Kebijakan Privasi ini atau mekanisme enkripsi di sisi klien, silakan hubungi kami di support@onlineqrgenerators.com atau kunjungi halaman Hubungi Kami."
          ]
        }
      ]
    },
    terms: {
      title: "Syarat & Ketentuan",
      metaDesc: "Syarat dan ketentuan penggunaan platform generator kode QR gratis onlineqrgenerators.com.",
      badge: "Pedoman Penggunaan",
      heading: "Syarat & Ketentuan",
      lastUpdated: "Terakhir Diperbarui: 31 Agustus 2026",
      tocTitle: "Daftar Isi",
      sections: [
        {
          id: "agreement",
          tocLabel: "1. Persetujuan Syarat",
          title: "1. Persetujuan atas Syarat & Ketentuan",
          paragraphs: [
            "Dengan mengakses dan menggunakan onlineqrgenerators.com, Anda menyetujui untuk mematuhi dan terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak menyetujui ketentuan ini, mohon untuk tidak menggunakan layanan kami.",
            "Ketentuan ini mengatur penggunaan situs web, generator kode QR, alat pemindai, dan seluruh komponen terkait."
          ]
        },
        {
          id: "usage-license",
          tocLabel: "2. Lisensi Penggunaan",
          title: "2. Lisensi Penggunaan & Hak Kekayaan Intelektual",
          paragraphs: [
            "Kami memberikan Anda lisensi bebas biaya, non-eksklusif, berlaku di seluruh dunia, dan abadi untuk menggunakan kode QR yang dihasilkan melalui platform kami:",
          ],
          bullets: [
            {
              strong: "Penggunaan Komersial & Pribadi:",
              text: "Anda bebas menggunakan kode QR untuk kebutuhan bisnis, kemasan produk, materi iklan cetak, layar digital, ataupun proyek pribadi."
            },
            {
              strong: "Tanpa Watermark & Tanpa Biaya:",
              text: "Semua kode QR 100% bebas biaya dan tidak memuat watermark, pelacakan terselubung, atau pengalihan iklan."
            },
            {
              strong: "Kepemilikan Konten:",
              text: "Anda memegang kepemilikan dan tanggung jawab penuh atas seluruh tautan, teks, kontak, atau informasi yang Anda sematkan ke dalam kode QR."
            }
          ]
        },
        {
          id: "acceptable-use",
          tocLabel: "3. Kebijakan Penggunaan Wajar",
          title: "3. Kebijakan Penggunaan yang Diperbolehkan",
          paragraphs: [
            "Meskipun layanan kami gratis, Anda berkewajiban menggunakan platform kami secara bertanggung jawab. Anda dilarang menggunakan generator kami untuk membuat kode QR yang:"
          ],
          bullets: [
            {
              strong: "Perangkat Perusak & Phishing:",
              text: "Menautkan ke malware, virus, situs web phishing, penipuan online, atau spyware berbahaya."
            },
            {
              strong: "Konten Melanggar Hukum:",
              text: "Mengandung atau mengarahkan ke konten ilegal, ujaran kebencian, atau melanggar hak cipta serta hukum yang berlaku di Indonesia maupun internasional."
            },
            {
              strong: "Eksploitasi Keamanan:",
              text: "Dirancang untuk meretas sistem jaringan atau menyusupkan skrip berbahaya ke perangkat pengguna."
            }
          ]
        },
        {
          id: "warranties-disclaimer",
          tocLabel: "4. Penafian Jaminan",
          title: "4. Penafian Jaminan (Disclaimer of Warranties)",
          paragraphs: [
            "Layanan kami disediakan apa adanya ('AS-IS') dan sebagaimana tersedia ('AS-AVAILABLE'). Kami tidak memberikan jaminan eksplisit maupun implisit terkait keterbacaan kode pada semua jenis perangkat kamera lama atau kamera berkualitas rendah.",
            "Selalu lakukan pengujian pemindaian secara fisik menggunakan beberapa kamera smartphone sebelum mencetak kode QR dalam jumlah besar atau memulai kampanye iklan."
          ]
        },
        {
          id: "liability-limits",
          tocLabel: "5. Batasan Tanggung Jawab",
          title: "5. Batasan Tanggung Jawab",
          paragraphs: [
            "Sejauh diizinkan oleh hukum yang berlaku, onlineqrgenerators.com dan para pengembangnya tidak bertanggung jawab atas kerugian langsung, tidak langsung, atau insidental yang timbul dari penggunaan layanan, termasuk biaya cetak atau potensi hilangnya peluang usaha."
          ]
        },
        {
          id: "terms-changes",
          tocLabel: "6. Perubahan Ketentuan",
          title: "6. Perubahan Syarat & Ketentuan",
          paragraphs: [
            "Kami berhak memperbarui Syarat dan Ketentuan ini sewaktu-waktu. Setiap revisi akan dicantumkan pada halaman ini beserta tanggal pembaruan terbaru. Penggunaan berkelanjutan Anda atas situs ini menandakan persetujuan Anda terhadap ketentuan yang diperbarui."
          ]
        },
        {
          id: "contact-us",
          tocLabel: "7. Kontak",
          title: "7. Informasi Kontak",
          paragraphs: [
            "Untuk pertanyaan atau permohonan informasi seputar Syarat dan Ketentuan kami, silakan hubungi tim kami di support@onlineqrgenerators.com atau kunjungi halaman Hubungi Kami."
          ]
        }
      ]
    }
  }
};

export function getSubpageData(locale: string): SubpageLocaleData {
  return subpageData[locale] || subpageData.en;
}
