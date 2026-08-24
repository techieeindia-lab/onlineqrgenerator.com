export interface IndustryTypeOverride {
  tabLabel: string;
  headline: string;
  description: string;
  placeholders: Record<string, string>;
}

export interface LandingPageData {
  slug: string;
  title: string;
  headline: string;
  description: string;
  defaultType: string;
  details: string;
  ctaText: string;
  features: string[];
  types?: Record<string, IndustryTypeOverride>;
}

export const industryData: Record<string, Record<string, LandingPageData>> = {
  en: {
    restaurants: {
      slug: "restaurants",
      title: "QR Code Generator for Restaurants & Cafes",
      headline: "Create Contactless QR Menus for Your Restaurant.",
      description: "Provide a safe, seamless table experience. Generate custom QR codes that direct customers directly to your PDF digital menu or ordering link.",
      defaultType: "url",
      ctaText: "Generate Restaurant QR",
      details: "QR codes have revolutionized the dining experience. By placing a custom QR code on tables, coasters, or window displays, customers can instantly scan and view your menu. This eliminates printing costs, allows real-time menu updates, and streamlines the ordering process.",
      features: [
        "Instant access to PDF or digital menus",
        "Reduces menu printing and updates overhead",
        "Contactless and hygienic table ordering",
        "Custom branding with your restaurant logo"
      ],
      types: {
        url: {
          tabLabel: "Digital Menu Card",
          headline: "Create Contactless QR Menus for Your Restaurant",
          description: "Provide a safe, seamless table experience. Generate custom QR codes that direct customers directly to your PDF digital menu or ordering link.",
          placeholders: {
            "input-url": "https://yourrestaurant.com/menu.pdf"
          }
        },
        wifi: {
          tabLabel: "Guest Wi-Fi",
          headline: "Share Restaurant Wi-Fi with a Simple QR Scan",
          description: "Let customers connect to your restaurant's guest network without typing passwords. Keep tables moving.",
          placeholders: {
            "wifi-ssid": "Restaurant_Guest_WiFi"
          }
        },
        social: {
          tabLabel: "Social Media Page",
          headline: "Link Customers to Your Social Media Profiles",
          description: "Encourage customers to tag you, share photos, and follow your restaurant on Instagram, Facebook, or TikTok.",
          placeholders: {
            "social-username": "your_restaurant_handle"
          }
        },
        whatsapp: {
          tabLabel: "Table Booking",
          headline: "Let Customers Book Tables Instantly via WhatsApp",
          description: "Generate a QR code pre-filled with a reservation inquiry message to streamline bookings.",
          placeholders: {
            "whatsapp-message": "Hi! I would like to book a table for [number] people on [date] at [time]."
          }
        },
        contact: {
          tabLabel: "Manager Contact",
          headline: "Share Restaurant Manager Contact Details",
          description: "Generate a contact card for caterers, group event bookings, or manager direct inquiries.",
          placeholders: {
            "contact-name": "Restaurant Bookings",
            "contact-company": "Our Restaurant Name"
          }
        },
        email: {
          tabLabel: "Customer Feedback",
          headline: "Gather Diners' Feedback via Email",
          description: "Make it easy for customers to email feedback, suggestions, or reviews directly to the management.",
          placeholders: {
            "email-to": "feedback@yourrestaurant.com",
            "email-subject": "Dining Experience Feedback"
          }
        },
        sms: {
          tabLabel: "Order via SMS",
          headline: "Accept Contactless Table Orders via SMS Texting",
          description: "Generate SMS QR codes that open text editors with pre-defined ordering codes.",
          placeholders: {
            "phone-number": "+123456789",
            "phonePlaceholder": "Enter SMS number for orders"
          }
        },
        feedback: {
          tabLabel: "Leave Feedback",
          headline: "Share Your Dining Experience",
          description: "Quickly leave us a review or feedback about your visit.",
          placeholders: {
            "feedback-url": "ChIJT6E-google-place-id"
          }
        }
      }
    },
    "real-estate": {
      slug: "real-estate",
      title: "QR Code Generator for Real Estate Agencies",
      headline: "Bridge Physical Signs to Virtual Property Tours.",
      description: "Place QR codes on yard signs, banners, and flyers. Let potential buyers instantly open virtual video tours, photo galleries, and contact details.",
      defaultType: "url",
      ctaText: "Generate Real Estate QR",
      details: "Make your real estate flyers interactive. Instead of manually copying links or contact information, home buyers can scan the QR code to open property listings, schedule a home visit, or view contact cards instantly from the yard sign.",
      features: [
        "Direct link to property video tours and maps",
        "Instant contact cards for agents (vCard)",
        "Tracks marketing campaigns on physical boards",
        "High resolution vector downloads for print banners"
      ],
      types: {
        url: {
          tabLabel: "Virtual Tour Link",
          headline: "Bridge Physical Signs to Virtual Property Tours",
          description: "Let buyers instantly open virtual video tours, photo galleries, and property listing pages from yard signs.",
          placeholders: {
            "input-url": "https://youragency.com/listings/property-123"
          }
        },
        contact: {
          tabLabel: "Agent Contact Card",
          headline: "Save Agent Contact Info Instantly",
          description: "Generate a digital business card (vCard) containing agent name, phone, email, and office address.",
          placeholders: {
            "contact-name": "John Doe (Real Estate Agent)",
            "contact-company": "Premier Real Estate"
          }
        },
        social: {
          tabLabel: "Agent LinkedIn",
          headline: "Connect with Clients on Professional Networks",
          description: "Build trust by linking buyers and sellers directly to your real estate professional profile on LinkedIn.",
          placeholders: {
            "social-username": "agent-profile-name"
          }
        },
        whatsapp: {
          tabLabel: "WhatsApp Inquiry",
          headline: "Accept Property Inquiries via WhatsApp",
          description: "Let buyers scan yard signs to start a WhatsApp chat with the listing agent with a pre-filled property inquiry.",
          placeholders: {
            "whatsapp-message": "Hi! I am interested in property ID [Property-123]. Please send details!"
          }
        },
        wifi: {
          tabLabel: "Open House Wi-Fi",
          headline: "Provide Free Wi-Fi at Open House Events",
          description: "Generate a secure Wi-Fi QR code to let visitors connect instantly while touring the home.",
          placeholders: {
            "wifi-ssid": "OpenHouse_Guest_WiFi"
          }
        },
        sms: {
          tabLabel: "SMS Property Info",
          headline: "Let Buyers Request Info via SMS Text",
          description: "Help buyers get instant offline property specs and pricing sent to their phone via SMS.",
          placeholders: {
            "phone-number": "+123456789"
          }
        },
        feedback: {
          tabLabel: "Property Feedback",
          headline: "Share Your Property Experience",
          description: "Quickly leave feedback about your viewing or inquiry.",
          placeholders: {
            "feedback-url": "https://trustpilot.com/evaluate/youragency.com"
          }
        }
      }
    },
    education: {
      slug: "education",
      title: "QR Code Generator for Teachers & Education",
      headline: "Make Classroom Learning and Homework Interactive.",
      description: "Help students access learning materials, homework links, and schedules instantly. Paste QR codes in worksheets, boards, and books.",
      defaultType: "url",
      ctaText: "Generate Education QR",
      details: "Simplify classroom logistics. Instead of writing long links on the whiteboard, teachers can display QR codes. Students scan to open worksheets, video lessons, slides, or online quizzes in seconds.",
      features: [
        "Quick links to slides, quizzes, and videos",
        "Perfect for worksheets and classroom boards",
        "Zero registration required for student privacy",
        "Includes Wi-Fi sharing codes for easy connections"
      ],
      types: {
        url: {
          tabLabel: "Class Resource Link",
          headline: "Make Classroom Learning and Homework Interactive",
          description: "Simplify classroom logistics. Direct students to slides, quizzes, slides, or online reading resources instantly.",
          placeholders: {
            "input-url": "https://classroom.google.com/..."
          }
        },
        wifi: {
          tabLabel: "Classroom Wi-Fi",
          headline: "Connect Classroom Devices to Wi-Fi Instantly",
          description: "Let students scan the board to connect their tablets and laptops to the school network secure Wi-Fi.",
          placeholders: {
            "wifi-ssid": "School_Classroom_WiFi"
          }
        },
        text: {
          tabLabel: "Homework Instructions",
          headline: "Share Text Instructions Offline with Students",
          description: "Encode homework tasks, math problems, or classroom notices into a text QR code that scans offline.",
          placeholders: {
            "input-text": "Read Chapter 4 of the history book and answer questions 1-5 on page 98."
          }
        },
        social: {
          tabLabel: "YouTube Channel",
          headline: "Direct Students to Learning Videos on YouTube",
          description: "Share educational playlists, lecture recordings, and classroom video content directly.",
          placeholders: {
            "social-username": "SchoolClassChannel"
          }
        },
        email: {
          tabLabel: "Contact Teacher",
          headline: "Allow Students & Parents to Email the Teacher",
          description: "Generate a pre-addressed email QR code to easily handle homework submissions or parent inquiries.",
          placeholders: {
            "email-to": "teacher@school.edu",
            "email-subject": "Homework Submission - [Student Name]"
          }
        },
        feedback: {
          tabLabel: "Course Feedback",
          headline: "Share Your Learning Experience",
          description: "Quickly leave feedback about the course or lesson.",
          placeholders: {
            "feedback-url": "https://docs.google.com/forms/d/your-form"
          }
        }
      }
    },
    events: {
      slug: "events",
      title: "QR Code Generator for Events & Ticketing",
      headline: "Simplify Event Entry and Ticket Distribution.",
      description: "Direct attendees to booking pages, schedule itineraries, or Google Maps locations. Perfect for tickets, badges, and display boards.",
      defaultType: "url",
      ctaText: "Generate Event QR",
      details: "Improve event check-in and attendee engagement. Print custom QR codes on event badges, flyers, or digital posters to share maps, booking schedules, or vCard details for networking.",
      features: [
        "Links to calendar invites and location maps",
        "Perfect for event banners and print badges",
        "Instant ticket verification link generation",
        "Custom styling to match the event branding color"
      ],
      types: {
        url: {
          tabLabel: "Ticket & Event Link",
          headline: "Simplify Event Entry and Ticket Distribution",
          description: "Direct attendees to booking pages, schedule itineraries, or Google Maps locations. Perfect for tickets, badges, and display boards.",
          placeholders: {
            "input-url": "https://eventbrite.com/e/your-event-id"
          }
        },
        wifi: {
          tabLabel: "Venue Wi-Fi",
          headline: "Provide Seamless Venue Wi-Fi for Attendees",
          description: "Avoid long queues at the info desk. Display Wi-Fi QR codes on banners and event badges.",
          placeholders: {
            "wifi-ssid": "Event_Venue_Free_WiFi"
          }
        },
        contact: {
          tabLabel: "Organizer Contact Card",
          headline: "Share Organizer details and Support Contact",
          description: "Make it easy for sponsors, VIPs, or attendees to save organizer contact cards instantly.",
          placeholders: {
            "contact-name": "Event Support Desk",
            "contact-company": "Event Organization Team"
          }
        },
        social: {
          tabLabel: "Facebook Page",
          headline: "Build Buzz on the Event Facebook Page",
          description: "Let attendees view check-ins, RSVP details, and discussion boards on the official event page.",
          placeholders: {
            "social-username": "official-event-page"
          }
        },
        whatsapp: {
          tabLabel: "Helpdesk Chat",
          headline: "Connect Attendees directly to Event Helpdesk",
          description: "Allow attendees to start a WhatsApp chat with support to ask about schedules, seating, or directions.",
          placeholders: {
            "whatsapp-message": "Hi! I have a question about the event schedule/access. Can you help?"
          }
        },
        email: {
          tabLabel: "Speaker Contact",
          headline: "Let Attendees Contact Speakers or Organizers",
          description: "Generate a pre-filled email to handle booking inquiries, slide requests, or feedback for presenters.",
          placeholders: {
            "email-to": "speakers@eventdomain.com",
            "email-subject": "Inquiry regarding Presentation Slides"
          }
        },
        feedback: {
          tabLabel: "Event Feedback",
          headline: "Share Your Event Experience",
          description: "Quickly leave feedback about the event or ticketing.",
          placeholders: {
            "feedback-url": "https://survey.typeform.com/to/your-event"
          }
        }
      }
    },
    retail: {
      slug: "retail",
      title: "QR Code Generator for Retail & E-commerce",
      headline: "Drive Store Traffic to Online Product Pages.",
      description: "Place QR codes on packaging, tags, or shop windows to share coupon codes, product information sheets, or download store apps.",
      defaultType: "url",
      ctaText: "Generate Retail QR",
      details: "Connect offline retail shoppers to online channels. Allow shoppers to scan product tags to read specs, view reviews, order out-of-stock items, or claim instant discount codes.",
      features: [
        "Share custom coupon codes and vouchers",
        "Link packaging to product manuals or app downloads",
        "Encourage Google Reviews and social follows",
        "Batch generation for product catalog labels"
      ],
      types: {
        url: {
          tabLabel: "Product / Coupon Link",
          headline: "Drive Store Traffic to Online Product Pages",
          description: "Place QR codes on packaging, tags, or shop windows to share coupon codes, product information sheets, or online store links.",
          placeholders: {
            "input-url": "https://yourstore.com/products/item-model"
          }
        },
        social: {
          tabLabel: "Instagram / TikTok Shop",
          headline: "Convert Retail Shoppers to Social Followers",
          description: "Direct physical customers to your social media shops or help them scan to see products in action on TikTok.",
          placeholders: {
            "social-username": "your_retail_brand"
          }
        },
        whatsapp: {
          tabLabel: "Customer Support Chat",
          headline: "Instant Customer Support via WhatsApp",
          description: "Add QR codes to invoice receipts or product inserts to help customers get quick returns or order support.",
          placeholders: {
            "whatsapp-message": "Hi, I have a question about my purchase (Order #...). Please assist me!"
          }
        },
        wifi: {
          tabLabel: "Store Wi-Fi",
          headline: "Offer Free Wi-Fi to Customers In-Store",
          description: "Keep customers engaged in-store. Let them connect to guest Wi-Fi to download store apps or compare products.",
          placeholders: {
            "wifi-ssid": "Store_Free_WiFi"
          }
        },
        contact: {
          tabLabel: "Store Details Card",
          headline: "Share Store Contact and Address Cards",
          description: "Generate a digital contact card containing store phone number, location, and operating hours.",
          placeholders: {
            "contact-name": "Customer Service",
            "contact-company": "Retail Store Name"
          }
        },
        email: {
          tabLabel: "Store Feedback",
          headline: "Get Direct Customer Feedback and Reviews",
          description: "Create an email QR code printed on shopping bags or receipts to easily collect buyer testimonials.",
          placeholders: {
            "email-to": "storemanager@storedomain.com",
            "email-subject": "Store Visit Experience Feedback"
          }
        },
        feedback: {
          tabLabel: "Purchase Feedback",
          headline: "Share Your Shopping Experience",
          description: "Quickly leave feedback about your purchase.",
          placeholders: {
            "feedback-url": "https://www.trustpilot.com/evaluate/yourbrand.com"
          }
        }
      }
    },
    marketing: {
      slug: "marketing",
      title: "QR Code Generator for Marketing Campaigns",
      headline: "Boost Brand Engagement with Interactive Print.",
      description: "Combine physical advertisements with digital actions. Connect prints, flyers, and billboards directly to your social links or website.",
      defaultType: "url",
      ctaText: "Generate Marketing QR",
      details: "Marketing campaigns rely on immediate action. A custom, high-resolution styled QR code on flyers, bus stops, and posters allows consumers to instantly engage with your landing page, enter contests, or join newsletter forms.",
      features: [
        "Bridges physical print ads to dynamic digital campaigns",
        "Custom gradient styles and frames for high scan rates",
        "Allows central social media logo overlays (presets)",
        "High-definition print exports (SVG vector files)"
      ],
      types: {
        url: {
          tabLabel: "Promo Landing Link",
          headline: "Boost Brand Engagement with Interactive Print",
          description: "Combine physical advertisements with digital actions. Connect prints, flyers, and billboards directly to your social links or website.",
          placeholders: {
            "input-url": "https://yourbrand.com/promo-campaign"
          }
        },
        social: {
          tabLabel: "Brand Profiles",
          headline: "Grow Your Social Media Following via Print Ads",
          description: "Link billboards, posters, or packaging to your Instagram, X (Twitter), YouTube, or Linktree profiles.",
          placeholders: {
            "social-username": "brand_handle"
          }
        },
        whatsapp: {
          tabLabel: "WhatsApp Promo Signup",
          headline: "Capture Marketing Leads directly via WhatsApp",
          description: "Let prospects join loyalty clubs or request discount codes by scanning a poster and sending a chat message.",
          placeholders: {
            "whatsapp-message": "Hi! I scanned the billboard. Please sign me up for the 10% discount promo!"
          }
        },
        contact: {
          tabLabel: "Brand Representative Card",
          headline: "Share Business Cards at Marketing Events",
          description: "Generate a detailed contact card to share professional profiles and social URLs with business partners.",
          placeholders: {
            "contact-name": "Marketing Director",
            "contact-company": "Creative Agency Name"
          }
        },
        email: {
          tabLabel: "Newsletter Signup",
          headline: "Grow Your Email Newsletter List via QR",
          description: "Generate email QR codes that let users send an automatic subscription request message with one tap.",
          placeholders: {
            "email-to": "subscribe@yourbrand.com",
            "email-subject": "Subscribe to Weekly Newsletter"
          }
        },
        sms: {
          tabLabel: "SMS Contest Entry",
          headline: "Allow Contest Registration via SMS Text",
          description: "Generate SMS QR codes that pre-fill competition codes and numbers, helping users join sweepstakes instantly.",
          placeholders: {
            "phone-number": "+123456789"
          }
        },
        feedback: {
          tabLabel: "Campaign Feedback",
          headline: "Share Your Campaign Experience",
          description: "Quickly leave feedback about the marketing campaign.",
          placeholders: {
            "feedback-url": "https://g.page/r/your-campaign"
          }
        }
      }
    }
  },
  es: {
    restaurants: {
      slug: "restaurants",
      title: "Generador de Códigos QR para Restaurantes y Cafeterías",
      headline: "Cree Menús QR sin Contacto para su Restaurante.",
      description: "Ofrezca una experiencia de mesa higiénica. Genere códigos QR personalizados que dirijan a sus clientes directamente a su menú digital en PDF o enlace de pedido.",
      defaultType: "url",
      ctaText: "Generar QR para Restaurante",
      details: "Los códigos QR han revolucionado la experiencia gastronómica. Al colocar un código QR personalizado en mesas o escaparates, los clientes pueden escanear y ver su menú al instante. Esto elimina los costos de impresión y agiliza los pedidos.",
      features: [
        "Acceso instantáneo a menús digitales o PDF",
        "Reduce los costos de impresión y actualización",
        "Pedidos higiénicos y sin contacto en mesa",
        "Diseño personalizado con el logo de su restaurante"
      ],
      types: {
        url: {
          tabLabel: "Menú Digital PDF",
          headline: "Cree Menús QR sin Contacto para su Restaurante",
          description: "Ofrezca una experiencia de mesa higiénica. Genere códigos QR personalizados que dirijan a sus clientes directamente a su menú digital en PDF o enlace de pedido.",
          placeholders: {
            "input-url": "https://yourrestaurant.com/menu.pdf"
          }
        },
        wifi: {
          tabLabel: "Wi-Fi para Clientes",
          headline: "Comparta el Wi-Fi de su Restaurante al Instante",
          description: "Permita a los clientes conectarse al Wi-Fi de invitados sin ingresar contraseñas complicadas.",
          placeholders: {
            "wifi-ssid": "Restaurant_Guest_WiFi"
          }
        },
        social: {
          tabLabel: "Redes Sociales",
          headline: "Conecte Clientes con sus Redes Sociales",
          description: "Fomente que los clientes compartan fotos y sigan su restaurante en Instagram, Facebook o TikTok.",
          placeholders: {
            "social-username": "your_restaurant_handle"
          }
        },
        whatsapp: {
          tabLabel: "Reservar Mesa",
          headline: "Permita Reservas de Mesa al Instante por WhatsApp",
          description: "Genere un código QR con un mensaje predefinido para agilizar las reservas de mesa por chat.",
          placeholders: {
            "whatsapp-message": "Hi! I would like to book a table for [number] people on [date] at [time]."
          }
        },
        contact: {
          tabLabel: "Contacto del Gerente",
          headline: "Comparta el Contacto del Gerente del Restaurante",
          description: "Genere una tarjeta de contacto para reservas de grupos, catering o consultas al gerente.",
          placeholders: {
            "contact-name": "Restaurant Bookings",
            "contact-company": "Our Restaurant Name"
          }
        },
        email: {
          tabLabel: "Comentarios de Clientes",
          headline: "Reciba Comentarios de Comensales por Correo",
          description: "Facilite a los clientes el envío de comentarios y sugerencias directamente por correo.",
          placeholders: {
            "email-to": "feedback@yourrestaurant.com",
            "email-subject": "Dining Experience Feedback"
          }
        },
        sms: {
          tabLabel: "Pedir por SMS",
          headline: "Acepte Pedidos de Mesa por Mensaje de Texto SMS",
          description: "Genere códigos QR SMS que abran el editor de texto con códigos de pedido predefinidos.",
          placeholders: {
            "phone-number": "+123456789",
            "phonePlaceholder": "Enter SMS number for orders"
          }
        },
        feedback: {
          tabLabel: "Dejar Reseña",
          headline: "Comparta su Experiencia de Comida",
          description: "Deje una reseña o comentario rápido sobre su visita.",
          placeholders: {
            "feedback-url": "ChIJT6E-google-place-id"
          }
        }
      }
    },
    "real-estate": {
      slug: "real-estate",
      title: "Generador de Códigos QR para Agencias Inmobiliarias",
      headline: "Conecte Carteles Físicos con Visitas Inmobiliarias Virtuales.",
      description: "Coloque códigos QR en carteles de venta y folletos. Permita que los compradores abran visitas virtuales de propiedades, galerías y detalles de contacto.",
      defaultType: "url",
      ctaText: "Generar QR Inmobiliario",
      details: "Haga interactivos sus folletos inmobiliarios. En lugar de copiar enlaces manualmente, los compradores pueden escanear el código QR en el cartel de la casa para ver listados, agendar visitas o contactar al agente inmobiliario.",
      features: [
        "Enlaces directos a tours virtuales de video y mapas",
        "Tarjetas de contacto instantáneas para agentes (vCard)",
        "Seguimiento de campañas en carteles físicos de calle",
        "Formatos vectoriales listos para imprimir a gran escala"
      ],
      types: {
        url: {
          tabLabel: "Enlace de Tour Virtual",
          headline: "Conecte Carteles Físicos con Visitas Virtuales",
          description: "Permita que los compradores abran visitas virtuales de propiedades, galerías de fotos y fichas de venta desde carteles.",
          placeholders: {
            "input-url": "https://youragency.com/listings/property-123"
          }
        },
        contact: {
          tabLabel: "Tarjeta de Agente",
          headline: "Guarde el Contacto del Agente al Instante",
          description: "Genere una tarjeta de contacto digital (vCard) con el nombre del agente, teléfono, email y dirección.",
          placeholders: {
            "contact-name": "John Doe (Real Estate Agent)",
            "contact-company": "Premier Real Estate"
          }
        },
        social: {
          tabLabel: "LinkedIn del Agente",
          headline: "Conecte con Clientes en Redes Profesionales",
          description: "Genere confianza enlazando a compradores y vendedores directamente con su perfil de LinkedIn.",
          placeholders: {
            "social-username": "agent-profile-name"
          }
        },
        whatsapp: {
          tabLabel: "Consulta WhatsApp",
          headline: "Reciba Consultas de Inmuebles por WhatsApp",
          description: "Permita a los compradores iniciar un chat de WhatsApp con el agente inmobiliario para consultar detalles.",
          placeholders: {
            "whatsapp-message": "Hi! I am interested in property ID [Property-123]. Please send details!"
          }
        },
        wifi: {
          tabLabel: "Wi-Fi de Puertas Abiertas",
          headline: "Ofrezca Wi-Fi Libre en Visitas de Puertas Abiertas",
          description: "Genere un código QR Wi-Fi seguro para que los visitantes se conecten durante el recorrido de la casa.",
          placeholders: {
            "wifi-ssid": "OpenHouse_Guest_WiFi"
          }
        },
        sms: {
          tabLabel: "Info por SMS",
          headline: "Permita Solicitar Información por Mensaje SMS",
          description: "Facilite a los compradores recibir precios y detalles del inmueble sin internet en su móvil.",
          placeholders: {
            "phone-number": "+123456789"
          }
        },
        feedback: {
          tabLabel: "Comentarios",
          headline: "Comparta su Experiencia con la Propiedad",
          description: "Deje su opinión rápidamente sobre su visita o consulta.",
          placeholders: {
            "feedback-url": "https://trustpilot.com/evaluate/suagencia.com"
          }
        }
      }
    },
    education: {
      slug: "education",
      title: "Generador de Códigos QR para Profesores y Educación",
      headline: "Haga Interactivos el Aprendizaje y las Tareas del Aula.",
      description: "Ayude a los estudiantes a acceder a materiales, tareas y horarios. Pegue códigos QR en fichas, pizarras y libros de clase.",
      defaultType: "url",
      ctaText: "Generar QR Educativo",
      details: "Simplifique la logística de clase. In lugar de escribir enlaces largos en la pizarra, los profesores pueden mostrar códigos QR. Los estudiantes los escanean para abrir lecciones, diapositivas o cuestionarios en línea.",
      features: [
        "Enlaces rápidos a diapositivas, cuestionarios y videos",
        "Perfecto para fichas de trabajo y pizarras de clase",
        "Sin registro para proteger la privacidad de los alumnos",
        "Comparta códigos Wi-Fi para conexiones rápidas"
      ],
      types: {
        url: {
          tabLabel: "Recurso de Clase",
          headline: "Haga Interactivos el Aprendizaje y las Tareas de Clase",
          description: "Simplifique la logística escolar. Dirija a los estudiantes a presentaciones, cuestionarios o lecturas en línea.",
          placeholders: {
            "input-url": "https://classroom.google.com/..."
          }
        },
        wifi: {
          tabLabel: "Wi-Fi del Aula",
          headline: "Conecte Dispositivos de Clase a Wi-Fi al Instante",
          description: "Permita a los estudiantes escanear la pizarra para conectar sus tablets y portátiles a la red escolar.",
          placeholders: {
            "wifi-ssid": "School_Classroom_WiFi"
          }
        },
        text: {
          tabLabel: "Instrucciones de Tarea",
          headline: "Comparta Instrucciones de Texto con Alumnos",
          description: "Codifique tareas, problemas matemáticos o avisos en un código QR de texto que se lee sin internet.",
          placeholders: {
            "input-text": "Read Chapter 4 of the history book and answer questions 1-5 on page 98."
          }
        },
        social: {
          tabLabel: "Canal de YouTube",
          headline: "Dirija a Alumnos a Videos Educativos",
          description: "Comparta listas de reproducción de estudio o grabaciones de clase de YouTube.",
          placeholders: {
            "social-username": "SchoolClassChannel"
          }
        },
        email: {
          tabLabel: "Contactar Profesor",
          headline: "Permita a Alumnos y Padres Escribir al Profesor",
          description: "Genere un código QR de correo electrónico precargado para entregas de tareas o consultas de padres.",
          placeholders: {
            "email-to": "teacher@school.edu",
            "email-subject": "Homework Submission - [Student Name]"
          }
        },
        feedback: {
          tabLabel: "Comentarios del Curso",
          headline: "Comparta su Experiencia de Aprendizaje",
          description: "Deje comentarios rápidos sobre el curso o la lección.",
          placeholders: {
            "feedback-url": "https://docs.google.com/forms/d/su-formulario"
          }
        }
      }
    },
    events: {
      slug: "events",
      title: "Generador de Códigos QR para Eventos y Entradas",
      headline: "Simplifique el Acceso a Eventos y la Venta de Entradas.",
      description: "Dirija a los asistentes a páginas de reservas, programas de actividades o ubicaciones de Google Maps. Ideal para entradas y acreditaciones.",
      defaultType: "url",
      ctaText: "Generar QR para Eventos",
      details: "Mejore el registro en eventos. Imprima códigos QR en acreditaciones, folletos o carteles para compartir ubicaciones, agendas de conferencias o detalles de vCard.",
      features: [
        "Enlaces a invitaciones de calendario y mapas de Google",
        "Perfecto para carteles de eventos y acreditaciones impresas",
        "Generación instantánea de enlaces de verificación de entradas",
        "Estilos al color corporativo del evento"
      ],
      types: {
        url: {
          tabLabel: "Venta de Entradas",
          headline: "Simplifique el Acceso a Eventos y la Venta de Entradas",
          description: "Dirija a los asistentes a páginas de reservas, programas de actividades o ubicaciones de Google Maps.",
          placeholders: {
            "input-url": "https://eventbrite.com/e/your-event-id"
          }
        },
        wifi: {
          tabLabel: "Wi-Fi del Evento",
          headline: "Ofrezca Wi-Fi del Evento a los Asistentes",
          description: "Evite colas. Muestre códigos QR de Wi-Fi en carteles y acreditaciones del evento.",
          placeholders: {
            "wifi-ssid": "Event_Venue_Free_WiFi"
          }
        },
        contact: {
          tabLabel: "Contacto de Organizador",
          headline: "Comparta los Datos del Organizador del Evento",
          description: "Facilite a patrocinadores e invitados guardar la tarjeta del organizador del evento.",
          placeholders: {
            "contact-name": "Event Support Desk",
            "contact-company": "Event Organization Team"
          }
        },
        social: {
          tabLabel: "Página de Facebook",
          headline: "Aumente el Interés en la Página del Evento",
          description: "Permita a los asistentes ver confirmaciones de asistencia y foros del evento en Facebook.",
          placeholders: {
            "social-username": "official-event-page"
          }
        },
        whatsapp: {
          tabLabel: "Chat de Soporte",
          headline: "Conecte Asistentes al Chat de Ayuda",
          description: "Permita a los asistentes iniciar un chat de WhatsApp con soporte para consultar horarios o accesos.",
          placeholders: {
            "whatsapp-message": "Hi! I have a question about the event schedule/access. Can you help?"
          }
        },
        email: {
          tabLabel: "Contacto Ponente",
          headline: "Permita Contactar a los Ponentes del Evento",
          description: "Genere un correo para solicitar presentaciones o enviar preguntas a los presentadores.",
          placeholders: {
            "email-to": "speakers@eventdomain.com",
            "email-subject": "Inquiry regarding Presentation Slides"
          }
        },
        feedback: {
          tabLabel: "Comentarios del Evento",
          headline: "Comparta su Experiencia del Evento",
          description: "Deje comentarios rápidos sobre el evento o las entradas.",
          placeholders: {
            "feedback-url": "https://survey.typeform.com/to/su-evento"
          }
        }
      }
    },
    retail: {
      slug: "retail",
      title: "Generador de Códigos QR para Comercio y Retail",
      headline: "Atraiga Clientes de Tiendas Físicas a su Web de Ventas.",
      description: "Coloque códigos QR en embalajes, etiquetas o escaparates para compartir códigos de descuento, fichas de producto o descargas de apps.",
      defaultType: "url",
      ctaText: "Generar QR de Comercio",
      details: "Conecte a los compradores físicos con sus canales en línea. Permita que escaneen etiquetas de productos para leer especificaciones, ver valoraciones o comprar artículos agotados.",
      features: [
        "Comparta códigos de descuento y cupones de ahorro",
        "Vincule embalajes a manuales o descargas de apps",
        "Fomente las reseñas en Google y redes sociales",
        "Generación masiva de códigos para etiquetas de catálogo"
      ],
      types: {
        url: {
          tabLabel: "Enlace de Producto",
          headline: "Atraiga Clientes de Tiendas Físicas a su Web",
          description: "Coloque códigos QR en embalajes o escaparates para compartir cupones de descuento o fichas de producto.",
          placeholders: {
            "input-url": "https://yourstore.com/products/item-model"
          }
        },
        social: {
          tabLabel: "Instagram / TikTok",
          headline: "Convierta Compradores en Seguidores Sociales",
          description: "Dirija a los clientes a su tienda de Instagram o ayúdeles a ver videos de productos en TikTok.",
          placeholders: {
            "social-username": "your_retail_brand"
          }
        },
        whatsapp: {
          tabLabel: "Soporte WhatsApp",
          headline: "Soporte Técnico Instantáneo por WhatsApp",
          description: "Añada códigos QR en recibos de compra para que los clientes inicien chats de soporte.",
          placeholders: {
            "whatsapp-message": "Hi, I have a question about my purchase (Order #...). Please assist me!"
          }
        },
        wifi: {
          tabLabel: "Wi-Fi de la Tienda",
          headline: "Ofrezca Wi-Fi Libre a Clientes en Tienda",
          description: "Fomente la permanencia en tienda permitiendo acceso Wi-Fi rápido para ver la app o comparar productos.",
          placeholders: {
            "wifi-ssid": "Store_Free_WiFi"
          }
        },
        contact: {
          tabLabel: "Tarjeta de la Tienda",
          headline: "Comparta Datos de Contacto de la Tienda",
          description: "Genere una tarjeta de contacto digital con el teléfono de la tienda, dirección y horario de apertura.",
          placeholders: {
            "contact-name": "Customer Service",
            "contact-company": "Retail Store Name"
          }
        },
        email: {
          tabLabel: "Buzón de Comentarios",
          headline: "Reciba Sugerencias de Compras por Email",
          description: "Genere un correo para que los compradores envíen sugerencias sobre su experiencia en tienda.",
          placeholders: {
            "email-to": "storemanager@storedomain.com",
            "email-subject": "Store Visit Experience Feedback"
          }
        },
        feedback: {
          tabLabel: "Comentarios de Compra",
          headline: "Comparta su Experiencia de Compra",
          description: "Deje comentarios sobre su compra rápidamente.",
          placeholders: {
            "feedback-url": "https://www.trustpilot.com/evaluate/subrand.com"
          }
        }
      }
    },
    marketing: {
      slug: "marketing",
      title: "Generador de Códigos QR para Campañas de Marketing",
      headline: "Impulse la Conversión Digital desde Publicidad Impresa.",
      description: "Conecte folletos, vallas publicitarias y anuncios impresos con acciones en línea. Dirija directamente a perfiles sociales o formularios de registro.",
      defaultType: "url",
      ctaText: "Generar QR de Marketing",
      details: "La publicidad impresa necesita llamadas a la acción inmediatas. Un código QR personalizado de alta resolución en folletos y carteles permite a los usuarios acceder al instante a ofertas, sorteos o registros de boletines.",
      features: [
        "Vincula anuncios impresos con campañas digitales dinámicas",
        "Estilos de degradado y marcos llamativos para más escaneos",
        "Inserte logotipos predefinidos de redes sociales en el centro",
        "Exportaciones en alta definición (archivos vectoriales SVG)"
      ],
      types: {
        url: {
          tabLabel: "Landing de Campaña",
          headline: "Impulse la Conversión Digital desde Publicidad Impresa",
          description: "Conecte folletos, vallas publicitarias y anuncios impresos con acciones en línea.",
          placeholders: {
            "input-url": "https://yourbrand.com/promo-campaign"
          }
        },
        social: {
          tabLabel: "Perfiles de Marca",
          headline: "Aumente Seguidores desde Publicidad Impresa",
          description: "Vincule carteles o embalajes con sus perfiles de Instagram, X (Twitter), YouTube o Linktree.",
          placeholders: {
            "social-username": "brand_handle"
          }
        },
        whatsapp: {
          tabLabel: "Registro WhatsApp",
          headline: "Capture Leads de Marketing por WhatsApp",
          description: "Permita a los clientes unirse a clubes o pedir descuentos con un escaneo y envío de mensaje.",
          placeholders: {
            "whatsapp-message": "Hi! I scanned the billboard. Please sign me up for the 10% discount promo!"
          }
        },
        contact: {
          tabLabel: "Tarjeta de Representante",
          headline: "Comparta Tarjetas en Eventos de Marketing",
          description: "Genere una tarjeta de contacto detallada para compartir perfiles y redes con socios de negocios.",
          placeholders: {
            "contact-name": "Marketing Director",
            "contact-company": "Creative Agency Name"
          }
        },
        email: {
          tabLabel: "Boletín Informativo",
          headline: "Aumente Suscriptores de Boletín por Email",
          description: "Genere un correo precargado para que los usuarios se suscriban a su boletín con un toque.",
          placeholders: {
            "email-to": "subscribe@yourbrand.com",
            "email-subject": "Subscribe to Weekly Newsletter"
          }
        },
        sms: {
          tabLabel: "Concurso por SMS",
          headline: "Permita Registro en Sorteos por SMS",
          description: "Genere códigos QR SMS para que los clientes se registren en sorteos de forma inmediata.",
          placeholders: {
            "phone-number": "+123456789"
          }
        },
        feedback: {
          tabLabel: "Opinión de la Campaña",
          headline: "Comparta su Experiencia de la Campaña",
          description: "Deje comentarios rápidos sobre la campaña de marketing.",
          placeholders: {
            "feedback-url": "https://g.page/r/su-campana"
          }
        }
      }
    }
  }
};

// Fallback logic for languages without explicit translation
export function getIndustryData(locale: string, industry: string): LandingPageData {
  const langData = industryData[locale] || industryData.en;
  return langData[industry] || industryData.en[industry];
}

// Generate listing parameters for getStaticPaths
export const industriesList = ["restaurants", "real-estate", "education", "events", "retail", "marketing"];
export const typesList = ["wifi", "vcard", "whatsapp", "crypto", "email", "sms", "url", "social", "feedback", "text"];

export const typePagesData: Record<string, Record<string, Partial<LandingPageData>>> = {
  en: {
    wifi: {
      title: "Free Wi-Fi QR Code Generator",
      headline: "Share Wi-Fi Networks with a Simple QR Scan.",
      description: "No more typing long passwords. Generate a custom Wi-Fi QR code that lets guests connect automatically with a quick smartphone scan.",
      defaultType: "wifi"
    },
    vcard: {
      title: "Free vCard QR Code Generator",
      headline: "Create Dynamic Digital Business Cards (vCard).",
      description: "Share your professional contact card instantly. Scan to save full name, phone numbers, email, organization, and address directly to phone contact books.",
      defaultType: "contact"
    },
    whatsapp: {
      title: "Free WhatsApp QR Code Generator",
      headline: "Connect Customers directly to WhatsApp Chats.",
      description: "Avoid manual number saving. Create a WhatsApp link QR code pre-filled with a custom message that starts conversations instantly.",
      defaultType: "whatsapp"
    },
    crypto: {
      title: "Free Crypto Wallet QR Code Generator",
      headline: "Accept Crypto Payments Instantly via QR.",
      description: "Receive Bitcoin, Ethereum, or Solana payments easily. Generate error-free cryptocurrency address QR codes with optional amounts.",
      defaultType: "crypto"
    },
    email: {
      title: "Free Email Composer QR Code Generator",
      headline: "Generate One-Tap Email Drafting QR Codes.",
      description: "Let users send emails in seconds. Generate QR codes pre-loaded with target address, subject lines, and message body.",
      defaultType: "email"
    },
    sms: {
      title: "Free SMS / Message QR Code Generator",
      headline: "Compose Text Messages Instantly with QR Scan.",
      description: "Make text messaging mobile-friendly. Generate SMS QR codes that open text editors with pre-defined phone numbers and message templates.",
      defaultType: "phone"
    },
    url: {
      title: "Free URL QR Code Generator",
      headline: "Redirect Users Instantly to Any Web Link.",
      description: "The classic QR code. Link print flyers, business cards, and posters directly to your online homepages, products, or portfolios.",
      defaultType: "url"
    },
    social: {
      title: "Free Social Media QR Code Generator",
      headline: "Connect Followers Directly to Your Social Media Profiles.",
      description: "Generate styled QR codes pointing directly to your Instagram, Facebook, YouTube, TikTok, LinkedIn, or Twitter/X profiles.",
      defaultType: "social"
    },
    feedback: {
      title: "Free Feedback QR Code Generator",
      headline: "Generate QR Codes for Collecting Reviews & Feedback",
      description: "Create custom QR codes pointing directly to your Google reviews, Trustpilot, Yelp, or custom surveys.",
      defaultType: "feedback"
    },
    text: {
      title: "Free Plain Text QR Code Generator",
      headline: "Encode Plain Text Directly into QR Codes.",
      description: "Generate static QR codes containing plain text, messages, notes, or instructions that can be read offline without any internet connection.",
      defaultType: "text"
    }
  },
  es: {
    wifi: {
      title: "Generador de Códigos QR para Redes Wi-Fi",
      headline: "Comparta su Conexión Wi-Fi con un Simple Escaneo.",
      description: "Evite tener que deletrear contraseñas largas. Genere un código QR Wi-Fi que permita a los invitados conectarse a internet de forma automática.",
      defaultType: "wifi"
    },
    vcard: {
      title: "Generador de Códigos QR para Contactos vCard",
      headline: "Cree Tarjetas de Presentación Digitales e Interactivas.",
      description: "Comparta su información profesional al instante. Escanee para guardar nombre, teléfono, email y dirección directamente en la agenda móvil.",
      defaultType: "contact"
    },
    whatsapp: {
      title: "Generador de Códigos QR para WhatsApp",
      headline: "Abra Chats de WhatsApp al Instante con un Escaneo.",
      description: "Genere un código QR que abra directamente un chat de WhatsApp con un mensaje predefinido para agilizar las consultas de sus clientes.",
      defaultType: "whatsapp"
    },
    crypto: {
      title: "Generador de Códigos QR para Billeteras Cripto",
      headline: "Reciba Pagos de Criptomonedas de Forma Sencilla.",
      description: "Genere códigos QR de cobro para Bitcoin, Ethereum o Solana de forma segura, reduciendo el riesgo de errores en la dirección de la billetera.",
      defaultType: "crypto"
    },
    email: {
      title: "Generador de Códigos QR para Enviar Correos",
      headline: "Redacte Correos Electrónicos con un Solo Toque.",
      description: "Permita que los usuarios le envíen correos en segundos. Genere códigos QR precargados con destinatario, asunto y mensaje predefinido.",
      defaultType: "email"
    },
    sms: {
      title: "Generador de Códigos QR para SMS",
      headline: "Envíe Mensajes de Texto de Forma Instantánea.",
      description: "Optimice el envío de mensajes de texto en móviles. Genere códigos QR SMS que abran el editor del móvil con número y texto listos.",
      defaultType: "phone"
    },
    url: {
      title: "Generador de Códigos QR para Enlaces URL",
      headline: "Dirija a sus Usuarios Directamente a Cualquier Enlace.",
      description: "El código QR clásico. Conecte folletos de papel, tarjetas físicas y carteles directamente con sus páginas de inicio, productos o portafolios.",
      defaultType: "url"
    },
    social: {
      title: "Generador de Códigos QR para Redes Sociales",
      headline: "Conecte Seguidores Directamente a sus Redes Sociales.",
      description: "Genere códigos QR atractivos para sus perfiles de Instagram, Facebook, YouTube, TikTok, LinkedIn o Twitter/X.",
      defaultType: "social"
    },
    feedback: {
      title: "Generador de Códigos QR para Comentarios y Reseñas",
      headline: "Genere Códigos QR para Recopilar Comentarios",
      description: "Cree códigos QR personalizados dirigidos directamente a sus reseñas de Google, Trustpilot, Yelp o encuestas personalizadas.",
      defaultType: "feedback"
    },
    text: {
      title: "Generador de Códigos QR para Texto Plano",
      headline: "Codifique Texto Plano en Códigos QR.",
      description: "Genere códigos QR estáticos que contengan texto sin formato, notas o instrucciones legibles sin conexión a internet.",
      defaultType: "text"
    }
  }
};

export function getTypePageData(locale: string, type: string): LandingPageData {
  const langData = typePagesData[locale] || typePagesData.en;
  const data = langData[type] || typePagesData.en[type];
  
  // Mix in standard defaults for fields not explicitly defined
  return {
    slug: type,
    title: data.title || "Free QR Code Generator",
    headline: data.headline || "Generate Custom QR Codes instantly",
    description: data.description || "Generate custom styled QR codes client-side.",
    defaultType: data.defaultType || "url",
    ctaText: "Generate QR Code",
    details: "This QR code type encodes information directly into the QR code matrix (static QR code). When scanned, the corresponding application (like camera, settings, or wallet) opens it immediately.",
    features: [
      "No login required for creation",
      "Grows with error-correction support",
      "Instant client-side rendering",
      "Vector SVG and PNG files support"
    ]
  };
}
