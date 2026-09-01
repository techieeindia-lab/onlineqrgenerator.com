export interface SeoFeatureCard {
  title: string;
  desc: string;
}

export interface SeoComparisonRow {
  feature: string;
  staticVal: string;
  staticBadge?: string;
  staticBadgeType?: 'err' | 'ok' | 'warn';
  dynamicVal?: string;
  dynamicBadge?: string;
  dynamicBadgeType?: 'err' | 'ok' | 'warn';
}

export interface SeoStepItem {
  number: string;
  title: string;
  desc: string;
}

export interface SeoLocaleData {
  headerTitle: string;
  headerDesc: string;
  introTitle: string;
  introP1: string;
  introP2: string;
  formatsTitle: string;
  formatsDesc: string;
  formatCards: SeoFeatureCard[];
  brandingTitle: string;
  brandingP1: string;
  brandingP2: string;
  presetIconsTitle: string;
  comparisonTitle: string;
  comparisonDesc: string;
  tableHeaders: {
    feature: string;
    staticQr: string;
    dynamicQr: string;
  };
  comparisonRows: SeoComparisonRow[];
  comparisonNote: string;
  bulkTitle: string;
  bulkP1: string;
  bulkP2: string;
  apiTitle: string;
  apiP1: string;
  apiP2: string;
  whyUsTitle: string;
  benefits: SeoFeatureCard[];
  guideTitle: string;
  guideDesc: string;
  steps: SeoStepItem[];
}

export const seoData: Record<string, SeoLocaleData> = {
  en: {
    headerTitle: "The Ultimate Guide to Using an Online QR Code Generator",
    headerDesc: "Learn how to create, customize, and deploy high-quality static and dynamic QR codes for websites, emails, business cards, and marketing campaigns.",
    introTitle: "Why You Need a Modern Online QR Code Generator",
    introP1: "Quick Response (QR) codes have become an essential bridge between the physical and digital worlds. From scanning menus at a restaurant to logging into networks and sharing contact information, they make data retrieval instant and seamless. To generate these custom tags, finding the right online qr code generator is the first step.",
    introP2: "Unlike other platforms that restrict access or charge subscription fees, we provide a free online qr generator that is fully functional and easy to use. Anyone can create custom configurations with colors, frames, and logos.",
    formatsTitle: "Comprehensive Formats Supported by Our Platform",
    formatsDesc: "Whether you need a URL link code or an offline text encoder, we support all major file and data formats.",
    formatCards: [
      {
        title: "Websites and Navigation Links",
        desc: "Turn any webpage, video, or digital menu into a QR code. Direct scanners to custom landing pages, drive store traffic, or route buyers to product catalogues in one simple tap."
      },
      {
        title: "Offline Plain Text Sharing",
        desc: "Show formatted messages, serial codes, or secret instructions offline. The encoded text is embedded directly into the pixels, readable without an active internet connection."
      },
      {
        title: "Instant Calls and Messages",
        desc: "Ensure clients can dial your business instantly. Our phone number format automatically opens the telephone dialer or SMS app with your pre-filled number."
      },
      {
        title: "Email & Customer Feedback",
        desc: "Simplify customer inquiries with pre-addressed email QR codes. Gather ratings, Google reviews, or survey submissions in a single tap."
      }
    ],
    brandingTitle: "Professional Styling with Custom Logos",
    brandingP1: "Stand out from generic codes by adding your company's icon directly into the center. This increases brand recognition, builds trust, and significantly boosts scan rates.",
    brandingP2: "Our engine uses advanced error correction (up to 30% High). This allows smartphones to scan around the center logo block and reconstruct data accurately.",
    presetIconsTitle: "Preset Branded Icons",
    comparisonTitle: "Static vs. Dynamic QR Code Generator",
    comparisonDesc: "Understand the difference between offline static generators and redirect-based dynamic QR systems.",
    tableHeaders: {
      feature: "Feature / Metric",
      staticQr: "Static QR Code",
      dynamicQr: "Dynamic QR Code"
    },
    comparisonRows: [
      {
        feature: "Data Structure",
        staticVal: "Encoded directly in the QR pixels.",
        dynamicVal: "Redirects via a short link system."
      },
      {
        feature: "Editing Content",
        staticVal: "",
        staticBadge: "Non-Editable",
        staticBadgeType: "err",
        dynamicVal: "",
        dynamicBadge: "Real-time Editable",
        dynamicBadgeType: "ok"
      },
      {
        feature: "Scan Analytics",
        staticVal: "",
        staticBadge: "No Tracking / 100% Private",
        staticBadgeType: "err",
        dynamicVal: "",
        dynamicBadge: "Scan Metrics & Stats",
        dynamicBadgeType: "ok"
      },
      {
        feature: "Lifespan & Expiry",
        staticVal: "",
        staticBadge: "Unlimited / Never Expires",
        staticBadgeType: "ok",
        dynamicVal: "",
        dynamicBadge: "Depends on Redirect Server",
        dynamicBadgeType: "warn"
      },
      {
        feature: "Speed & Offline",
        staticVal: "",
        staticBadge: "Instant Scan (No Internet)",
        staticBadgeType: "ok",
        dynamicVal: "",
        dynamicBadge: "Requires Active Network",
        dynamicBadgeType: "warn"
      }
    ],
    comparisonNote: "Static QR codes provide lifelong reliability with zero server dependencies or recurring subscriptions. Ideal for print flyers, product packaging, and business cards.",
    bulkTitle: "High-Volume Batch QR Code Generation",
    bulkP1: "For businesses requiring massive batches of labels, tickets, inventory barcodes, or customer cards, our bulk QR tool processes multiple lines of text or URLs simultaneously.",
    bulkP2: "All codes are generated client-side and packaged into a neat ZIP archive. Generate hundreds of codes in seconds without cloud limits.",
    apiTitle: "Developer API Integration (No Signup & 100% Free)",
    apiP1: "Automate QR generation in your applications or client websites with our lightweight client-side JavaScript snippet.",
    apiP2: "Because generation happens locally inside the user's browser, you can scale to millions of requests with zero server costs and zero latency.",
    whyUsTitle: "Why We Are the Best Choice for QR Code Generation",
    benefits: [
      {
        title: "100% Free Service",
        desc: "Access premium templates, color presets, and bulk exports with no hidden fees or watermarks."
      },
      {
        title: "No Registration Required",
        desc: "No login or credit card required. Generate custom high-resolution codes immediately."
      },
      {
        title: "Security & Privacy First",
        desc: "Generated completely inside your browser. Your links, Wi-Fi keys, and contacts never leave your device."
      }
    ],
    guideTitle: "Step-by-Step: How to Generate Your Custom QR Code",
    guideDesc: "Follow these easy steps to design, customize, and download a professional-grade QR code.",
    steps: [
      {
        number: "01",
        title: "Choose Content Format",
        desc: "Select the data type: URL, Text, Wi-Fi, Phone, Email, WhatsApp, vCard, or Crypto."
      },
      {
        number: "02",
        title: "Enter Details",
        desc: "Provide your link, network credentials, message text, or contact details."
      },
      {
        number: "03",
        title: "Customize Colors",
        desc: "Pick solid colors or smooth linear/radial gradients for modules, eyes, and background."
      },
      {
        number: "04",
        title: "Select Design Shapes",
        desc: "Choose unique corner eye frames and body dots (rounded, classy, or squares)."
      },
      {
        number: "05",
        title: "Upload Brand Logo",
        desc: "Add your company icon or select a popular preset with High error correction."
      },
      {
        number: "06",
        title: "Download and Print",
        desc: "Export high-resolution PNG for digital screens or vector SVG for physical banner printing."
      }
    ]
  },
  es: {
    headerTitle: "La Guía Definitiva del Generador de Códigos QR Online",
    headerDesc: "Aprenda a crear, personalizar y utilizar códigos QR estáticos y dinámicos de alta calidad para sitios web, correos electrónicos, tarjetas y campañas de marketing.",
    introTitle: "¿Por qué necesita un generador de códigos QR moderno?",
    introP1: "Los códigos QR se han convertido en el puente esencial entre el mundo físico y el digital. Desde cartas de restaurantes hasta conexiones Wi-Fi y tarjetas de visita, facilitan el acceso inmediato a la información.",
    introP2: "A diferencia de otras plataformas con suscripciones costosas, ofrecemos un servicio 100% gratuito, rápido y sin marcas de agua. Cualquier persona puede diseñar códigos con colores personalizados, marcos y logotipos.",
    formatsTitle: "Formatos Compatibles en Nuestra Plataforma",
    formatsDesc: "Soporte completo para todo tipo de enlaces web, textos sin conexión y formatos de datos.",
    formatCards: [
      {
        title: "Sitios Web y Enlaces URL",
        desc: "Convierta páginas web, vídeos o menús digitales en códigos QR. Redirija a sus usuarios con un simple escaneo desde la cámara."
      },
      {
        title: "Texto Plano sin Conexión",
        desc: "Comparta mensajes, códigos de serie o instrucciones. El texto se almacena directamente en la cuadrícula y se lee sin necesidad de internet."
      },
      {
        title: "Llamadas y Mensajes Instantáneos",
        desc: "Facilite llamadas telefónicas o envíos de SMS directos sin riesgo de teclear números erróneos."
      },
      {
        title: "Correo Electrónico y Opiniones",
        desc: "Reciba consultas con asuntos predefinidos o redirija a clientes hacia encuestas de satisfacción y reseñas en Google."
      }
    ],
    brandingTitle: "Personalización Profesional con Logotipo",
    brandingP1: "Destaque incorporando el icono de su empresa en el centro del código QR. Aumenta el reconocimiento de marca y multiplica la tasa de escaneos.",
    brandingP2: "Nuestra tecnología utiliza corrección de errores avanzada (hasta 30%), permitiendo que la cámara lea los datos alrededor del logotipo sin fallos.",
    presetIconsTitle: "Iconos de Marca Predefinidos",
    comparisonTitle: "Códigos QR Estáticos vs. Dinámicos",
    comparisonDesc: "Conozca las diferencias entre los códigos QR estáticos sin servidor y los sistemas dinámicos con redirección.",
    tableHeaders: {
      feature: "Característica",
      staticQr: "Código QR Estático",
      dynamicQr: "Código QR Dinámico"
    },
    comparisonRows: [
      {
        feature: "Estructura de Datos",
        staticVal: "Codificado directamente en los píxeles.",
        dynamicVal: "Redirige mediante un enlace acortado."
      },
      {
        feature: "Edición Posterior",
        staticVal: "",
        staticBadge: "No editable",
        staticBadgeType: "err",
        dynamicVal: "",
        dynamicBadge: "Editable en tiempo real",
        dynamicBadgeType: "ok"
      },
      {
        feature: "Analíticas de Escaneo",
        staticVal: "",
        staticBadge: "Sin rastreo / 100% Privado",
        staticBadgeType: "err",
        dynamicVal: "",
        dynamicBadge: "Métricas de escaneo",
        dynamicBadgeType: "ok"
      },
      {
        feature: "Caducidad",
        staticVal: "",
        staticBadge: "Permanente / Nunca caduca",
        staticBadgeType: "ok",
        dynamicVal: "",
        dynamicBadge: "Depende del servidor",
        dynamicBadgeType: "warn"
      },
      {
        feature: "Velocidad y Modo Offline",
        staticVal: "",
        staticBadge: "Escaneo instantáneo sin internet",
        staticBadgeType: "ok",
        dynamicVal: "",
        dynamicBadge: "Requiere red activa",
        dynamicBadgeType: "warn"
      }
    ],
    comparisonNote: "Los códigos estáticos garantizan funcionamiento de por vida sin depender de servidores externos ni suscripciones. Ideales para folletos, etiquetas y envases.",
    bulkTitle: "Generación Masiva de Códigos QR",
    bulkP1: "Cree cientos de códigos simultáneamente para inventario, eventos o campañas introduciendo múltiples enlaces línea por línea.",
    bulkP2: "El proceso se ejecuta en su navegador y descarga todos los archivos ordenados en un único archivo ZIP comprimido.",
    apiTitle: "API para Desarrolladores (Gratuita y sin Registro)",
    apiP1: "Integre la generación dinámica de códigos QR en su propia web o aplicación mediante nuestro script JavaScript para clientes.",
    apiP2: "Al procesarse en el dispositivo del usuario, puede escalar a millones de solicitudes sin costes de infraestructura.",
    whyUsTitle: "¿Por Qué Elegir Nuestra Plataforma?",
    benefits: [
      {
        title: "100% Gratuito",
        desc: "Todas las funciones, marcos y descargas vectoriales disponibles sin pagos ocultos."
      },
      {
        title: "Sin Registro",
        desc: "Cree y descargue sus códigos al instante sin proporcionar tarjetas ni correos."
      },
      {
        title: "Privacidad Total",
        desc: "Generación local en el navegador: sus enlaces y contraseñas nunca salen de su dispositivo."
      }
    ],
    guideTitle: "Paso a Paso: Cómo Crear su Código QR",
    guideDesc: "Siga estas sencillas instrucciones para diseñar y descargar un código QR profesional.",
    steps: [
      {
        number: "01",
        title: "Elija el Tipo de Contenido",
        desc: "Seleccione URL, Texto, Wi-Fi, Teléfono, Email, WhatsApp, vCard o Cripto."
      },
      {
        number: "02",
        title: "Introduzca los Datos",
        desc: "Escriba su enlace web, contraseña de red o información de contacto."
      },
      {
        number: "03",
        title: "Personalice los Colores",
        desc: "Seleccione colores lisos o degradados elegantes para puntos y fondo."
      },
      {
        number: "04",
        title: "Elija las Formas",
        desc: "Escoja estilos de ojos y patrones modernos (redondeados, puntos o clásicos)."
      },
      {
        number: "05",
        title: "Añada su Logotipo",
        desc: "Suba el emblema de su marca con nivel de corrección de error 'Alto'."
      },
      {
        number: "06",
        title: "Descargue e Imprima",
        desc: "Guarde en PNG para medios digitales o en SVG vectorial para imprenta."
      }
    ]
  },
  ko: {
    headerTitle: "온라인 QR 코드 생성기 완전 가이드",
    headerDesc: "웹사이트, 모바일 명함, 와이파이 접속, 마케팅 캠페인을 위한 고화질 맞춤형 QR 코드를 만들고 활용하는 방법을 알아보세요.",
    introTitle: "왜 현대적인 온라인 QR 생성기가 필요할까요?",
    introP1: "QR 코드는 오프라인과 디지털 세상을 즉각 연결하는 필수 도구입니다. 식당 비접촉 메뉴판부터 와이파이 자동 연결, 명함 공유까지 스마트폰 카메라로 손쉽게 정보를 전달합니다.",
    introP2: "유료 구독이나 회원가입을 요구하는 다른 서비스와 달리, 저희는 100% 무료로 워터마크 없는 고화질 QR 코드 생성 환경을 제공합니다. 누구나 자유롭게 색상, 프레임, 로고를 조합할 수 있습니다.",
    formatsTitle: "지원하는 다양한 데이터 포맷",
    formatsDesc: "웹 링크부터 오프라인 텍스트까지 모든 주요 데이터 유형을 손쉽게 생성할 수 있습니다.",
    formatCards: [
      {
        title: "웹사이트 및 랜딩페이지 링크",
        desc: "홈페이지, 유튜브 영상, 스마트 스토어 링크를 즉시 QR 코드로 변환하세요. 카메라 스캔 한 번으로 고객을 원하는 페이지로 안내합니다."
      },
      {
        title: "오프라인 일반 텍스트",
        desc: "인터넷 연결이 필요 없는 메시지, 시리얼 번호, 안내문을 QR 코드 격자 안에 직접 인코딩하여 오프라인에서도 읽을 수 있습니다."
      },
      {
        title: "전화 발신 및 문자 메시지",
        desc: "고객이 번호를 잘못 입력할 걱정 없이 스캔 즉시 통화나 문자 전송 화면을 띄워 고객센터 연결을 간소화합니다."
      },
      {
        title: "이메일 템플릿 및 고객 리뷰 수집",
        desc: "받는 사람과 제목이 채워진 이메일을 전송하거나, 구글 지도 및 네이버 영수증 리뷰 작성 페이지로 바로 유도할 수 있습니다."
      }
    ],
    brandingTitle: "로고 삽입으로 완성하는 브랜드 QR 디자인",
    brandingP1: "밋밋한 흑백 QR 코드 대신 기업 로고나 브랜드 심볼을 중앙에 넣어 신뢰도와 스캔 전환율을 획기적으로 높이세요.",
    brandingP2: "최대 30% 오류 복원(High 레벨) 알고리즘을 지원하여 중앙에 로고가 삽입되거나 일부가 가려져도 스마트폰에서 정확하게 인식합니다.",
    presetIconsTitle: "인기 브랜드 프리셋 아이콘",
    comparisonTitle: "정적 QR 코드 vs 동적 QR 코드 비교",
    comparisonDesc: "서버가 필요 없는 영구 보존 정적 QR과 단축 URL 기반 동적 QR의 차이점을 한눈에 확인하세요.",
    tableHeaders: {
      feature: "구분 및 특징",
      staticQr: "정적(Static) QR 코드",
      dynamicQr: "동적(Dynamic) QR 코드"
    },
    comparisonRows: [
      {
        feature: "데이터 저장 방식",
        staticVal: "QR 코드 격자 패턴에 직접 기록",
        dynamicVal: "단축 리다이렉션 서버 경유"
      },
      {
        feature: "생성 후 내용 수정",
        staticVal: "",
        staticBadge: "수정 불가 (영구 고정)",
        staticBadgeType: "err",
        dynamicVal: "",
        dynamicBadge: "실시간 URL 수정 가능",
        dynamicBadgeType: "ok"
      },
      {
        feature: "스캔 통계 및 추적",
        staticVal: "",
        staticBadge: "추적 없음 (100% 개인정보 보호)",
        staticBadgeType: "err",
        dynamicVal: "",
        dynamicBadge: "스캔 횟수 및 통계 분석",
        dynamicBadgeType: "ok"
      },
      {
        feature: "유효 기간 및 만료",
        staticVal: "",
        staticBadge: "평생 무제한 유효",
        staticBadgeType: "ok",
        dynamicVal: "",
        dynamicBadge: "외부 서버 유지에 의존",
        dynamicBadgeType: "warn"
      },
      {
        feature: "스캔 속도 및 오프라인",
        staticVal: "",
        staticBadge: "인터넷 없이 즉시 인식",
        staticBadgeType: "ok",
        dynamicVal: "",
        dynamicBadge: "네트워크 통신 필수",
        dynamicBadgeType: "warn"
      }
    ],
    comparisonNote: "정적 QR 코드는 외부 서버 장애나 월 구독료 부담 없이 평생 작동합니다. 인쇄물, 명함, 제품 패키지에 가장 안전한 선택입니다.",
    bulkTitle: "대량 QR 코드 일괄 생성 (Bulk Generator)",
    bulkP1: "재고 바코드, 행사 티켓, 대규모 주소 라벨 제작 시 한 줄에 하나씩 입력하여 수백 개의 QR 코드를 한 번에 생성하세요.",
    bulkP2: "모든 코드는 브라우저에서 즉시 처리되며, 완성된 이미지 파일들을 압축 ZIP 파일 하나로 간편하게 다운로드할 수 있습니다.",
    apiTitle: "개발자 API 연동 (가입 불필요 · 무료)",
    apiP1: "가벼운 클라이언트 자바스크립트 스니펫을 통해 자사 웹사이트나 사내 시스템에 QR 생성 기능을 손쉽게 연동하세요.",
    apiP2: "사용자의 브라우저에서 직접 계산되므로 서버 트래픽 비용 없이 수백만 건의 요청을 무료로 처리할 수 있습니다.",
    whyUsTitle: "저희 QR 코드 생성기를 선택해야 하는 이유",
    benefits: [
      {
        title: "100% 평생 무료",
        desc: "숨겨진 결제나 워터마크 없이 모든 프리미엄 디자인 옵션과 벡터 다운로드를 무료로 제공합니다."
      },
      {
        title: "회원가입 불필요",
        desc: "로그인이나 개인정보 입력 없이 사이트에 접속하자마자 즉시 QR 코드를 만들고 다운로드하세요."
      },
      {
        title: "철저한 프라이버시 보호",
        desc: "모든 데이터가 사용자 기기의 브라우저 내부에서만 처리되어 외부 서버로 유출되지 않습니다."
      }
    ],
    guideTitle: "나만의 맞춤 QR 코드 만드는 6단계",
    guideDesc: "아래 단계를 따라 누구나 몇 초 만에 감각적인 고해상도 QR 코드를 디자인할 수 있습니다.",
    steps: [
      {
        number: "01",
        title: "데이터 종류 선택",
        desc: "URL, 텍스트, 와이파이, 전화번호, 이메일, 명함 등 원하는 형식을 선택합니다."
      },
      {
        number: "02",
        title: "내용 입력",
        desc: "연결할 웹페이지 주소나 와이파이 비밀번호 등 필요한 정보를 입력합니다."
      },
      {
        number: "03",
        title: "색상 및 그라데이션",
        desc: "단색 또는 세련된 그라데이션을 선택하여 배경과 코드 색상을 조화롭게 설정합니다."
      },
      {
        number: "04",
        title: "디자인 형태 선택",
        desc: "모서리 눈 모양과 내부 점 스타일(둥근 모양, 도트 등)을 자유롭게 변경합니다."
      },
      {
        number: "05",
        title: "브랜드 로고 추가",
        desc: "소장 중인 회사 로고 이미지를 업로드하거나 주요 SNS 아이콘을 삽입합니다."
      },
      {
        number: "06",
        title: "다운로드 및 인쇄",
        desc: "화면용 고화질 PNG 또는 대형 인쇄물용 벡터 SVG 파일로 저장하여 활용하세요."
      }
    ]
  },
  ja: {
    headerTitle: "オンラインQRコード作成ツール 完全活用ガイド",
    headerDesc: "Webサイト、名刺、店舗Wi-Fi、各種プロモーションに役立つ高品質な静的・動的QRコードの作成・カスタマイズ方法を解説します。",
    introTitle: "現代のビジネスに最新のQRコード作成ツールが必要な理由",
    introP1: "QRコードは物理的な紙媒体とデジタル世界を瞬時につなぐ架け橋です。飲食店の非接触メニューから名刺交換、Wi-Fi接続まであらゆる場面で活用されています。",
    introP2: "月額費用や会員登録を求める他社サービスと異なり、当サービスは完全無料・登録不要・ウォーターマークなしで提供しています。自由にカラー、フレーム、ロゴを設定可能です。",
    formatsTitle: "対応している豊富なデータ形式",
    formatsDesc: "URLリンクからオフラインで読めるテキストまで、主要な形式を網羅しています。",
    formatCards: [
      {
        title: "Webサイトおよび各種リンク",
        desc: "ホームページやSNS、YouTube動画への誘導コードを瞬時に作成。カメラをかざすだけで目的のページへスムーズに案内します。"
      },
      {
        title: "オフライン用プレーンテキスト",
        desc: "ネット接続がない環境でも読み取れるテキストコード。お知らせ文やシリアル番号の伝達に最適です。"
      },
      {
        title: "電話発信・SMS送信",
        desc: "番号の入力ミスを防ぎ、スキャンしてワンタップで通話やショートメッセージ送信画面を起動できます。"
      },
      {
        title: "メール作成・アンケート収集",
        desc: "件名や本文が入力済みのメールを立ち上げたり、Googleマップの口コミ投稿ページへ直接誘導します。"
      }
    ],
    brandingTitle: "企業ロゴ入りの洗練されたデザインQRコード",
    brandingP1: "白黒の標準的なコードではなく、中央にブランドロゴを配置することで視認性とスキャン率を大幅に向上させます。",
    brandingP2: "高度な誤り訂正機能（最大30% High）により、中央にロゴを配置してもスマホで正確に読み取ることが可能です。",
    presetIconsTitle: "定番プリセットアイコン",
    comparisonTitle: "静的QRコード vs 動的QRコード 比較",
    comparisonDesc: "サーバーに依存しない静的コードと、リダイレクト型動的コードの違いを解説します。",
    tableHeaders: {
      feature: "項目・機能",
      staticQr: "静的QRコード (無料)",
      dynamicQr: "動的QRコード"
    },
    comparisonRows: [
      {
        feature: "データ構造",
        staticVal: "QRコードの白黒パターンに直接記録",
        dynamicVal: "短縮URLサーバーを経由"
      },
      {
        feature: "作成後の編集",
        staticVal: "",
        staticBadge: "変更不可（永久固定）",
        staticBadgeType: "err",
        dynamicVal: "",
        dynamicBadge: "リアルタイム変更可能",
        dynamicBadgeType: "ok"
      },
      {
        feature: "アクセス解析",
        staticVal: "",
        staticBadge: "追跡なし / 100% プライバシー保護",
        staticBadgeType: "err",
        dynamicVal: "",
        dynamicBadge: "スキャン回数・統計取得",
        dynamicBadgeType: "ok"
      },
      {
        feature: "有効期限",
        staticVal: "",
        staticBadge: "永久に有効 / 期限なし",
        staticBadgeType: "ok",
        dynamicVal: "",
        dynamicBadge: "サーバー維持費・契約に依存",
        dynamicBadgeType: "warn"
      },
      {
        feature: "読み取り速度",
        staticVal: "",
        staticBadge: "オフラインでも瞬時に認識",
        staticBadgeType: "ok",
        dynamicVal: "",
        dynamicBadge: "ネット環境が必須",
        dynamicBadgeType: "warn"
      }
    ],
    comparisonNote: "静的QRコードはサーバーダウンやサービス終了の影響を受けず、永久に利用可能です。印刷物や商品パッケージに最も安心です。",
    bulkTitle: "QRコード一括大量作成機能 (Bulk)",
    bulkP1: "チケットや商品管理ラベルなど、大量のQRコードが必要な場合に改行区切りでまとめて一括生成できます。",
    bulkP2: "ブラウザ上で高速処理され、生成されたファイルはひとつのZIPファイルにまとめて即座にダウンロードできます。",
    apiTitle: "開発者向けAPIスニペット (登録不要・無料)",
    apiP1: "軽量なJavaScriptコードを用いて、自社のWebサイトや管理画面に即座にQR生成機能を組み込めます。",
    apiP2: "クライアント端末側で描画されるため、サーバー費用をかけずに大量のリクエストを安全に処理できます。",
    whyUsTitle: "当サイトが選ばれる理由",
    benefits: [
      {
        title: "100% 完全無料",
        desc: "隠れた料金や透かしロゴの強制表示は一切ありません。すべてのデザイン機能を無料でお使いいただけます。"
      },
      {
        title: "会員登録・ログイン不要",
        desc: "アクセスした瞬間にブラウザ上でコードを作成し、すぐにダウンロード可能です。"
      },
      {
        title: "徹底したプライバシー保護",
        desc: "入力したURLやWi-Fiパスワードは端末内のみで処理され、サーバーに保存されることはありません。"
      }
    ],
    guideTitle: "オリジナルQRコード作成の6ステップ",
    guideDesc: "初めての方でも数秒で本格的なQRコードをデザインできる手順をご紹介します。",
    steps: [
      {
        number: "01",
        title: "形式を選択",
        desc: "URL、テキスト、Wi-Fi、連絡先など用途に合ったタブを選択します。"
      },
      {
        number: "02",
        title: "情報を入力",
        desc: "WebサイトのURLやメッセージなど、エンコードしたい内容を入力します。"
      },
      {
        number: "03",
        title: "カラーを設定",
        desc: "単色やグラデーションからブランドに合った配色を選択します。"
      },
      {
        number: "04",
        title: "形状を選択",
        desc: "角の目玉部分やドットの形状（丸型、スクエア等）をカスタマイズします。"
      },
      {
        number: "05",
        title: "ロゴを追加",
        desc: "会社ロゴやSNSアイコンをアップロードし、誤り訂正を高に設定します。"
      },
      {
        number: "06",
        title: "ダウンロード",
        desc: "画面表示用のPNGまたは大判印刷にも耐えるベクターSVGで保存します。"
      }
    ]
  },
  ar: {
    headerTitle: "الدليل الشامل لاستخدام مولد رموز QR المباشر",
    headerDesc: "تعلم كيفية إنشاء وتخصيص رموز QR ثابتة وديناميكية عالية الجودة للمواقع الإلكترونية وبطاقات الأعمال والشبكات.",
    introTitle: "لماذا تحتاج إلى مولد رموز QR حديث؟",
    introP1: "أصبحت رموز الاستجابة السريعة (QR) صلة الوصل الأساسية بين الواقع الفعلي والعالم الرقمي، بدءاً من قوائم المطاعم وحتى تسجيل الدخول إلى الشبكات.",
    introP2: "على عكس المنصات الأخرى التي تفرض اشتراكات دورية، نقدم أداة مجانية 100% وسريعة وبدون أي علامات مائية مع تحكم كامل في الألوان والتصاميم والشعارات.",
    formatsTitle: "الصيغ والبيانات المدعومة في منصتنا",
    formatsDesc: "ندعم جميع أنواع البيانات والروابط والنصوص المباشرة بكل سهولة.",
    formatCards: [
      {
        title: "روابط المواقع الإلكترونية (URL)",
        desc: "حوّل أي صفحة أو فيديو أو قائمة رقمية إلى رمز QR بلمسة واحدة لتوجيه الزوار مباشرة."
      },
      {
        title: "النصوص غير المتصلة بالإنترنت",
        desc: "شارك الرسائل والتعليمات والأرقام التسلسلية مباشرة دون الحاجة إلى اتصال نشط بالإنترنت."
      },
      {
        title: "المكالمات والرسائل الفورية",
        desc: "تسهيل التواصل الهاتفي وإرسال الرسائل القصيرة دون أخطاء في كتابة الأرقام."
      },
      {
        title: "البريد الإلكتروني والتقييمات",
        desc: "تسهيل وصول استفسارات العملاء أو جمع تقييمات خرائط Google واستطلاعات الرأي فورياً."
      }
    ],
    brandingTitle: "تصميم احترافي بإضافة شعارك الخاص",
    brandingP1: "أضف شعار شركتك في المنتصف لزيادة تميز علامتك التجارية وتعزيز ثقة العملاء ونسب المسح.",
    brandingP2: "محركنا يدعم أعلى مستويات تصحيح الأخطاء (حتى 30%) لضمان مسح الرمز بدقة حتى مع وجود الشعار في المنتصف.",
    presetIconsTitle: "أيقونات جاهزة للمنصات",
    comparisonTitle: "مقارنة رموز QR الثابتة والديناميكية",
    comparisonDesc: "تعرف على الفروقات الجوهرية بين الرموز الثابتة الموثوقة والرموز الديناميكية.",
    tableHeaders: {
      feature: "الميزة",
      staticQr: "رمز QR الثابت (مجاني)",
      dynamicQr: "رمز QR الديناميكي"
    },
    comparisonRows: [
      {
        feature: "بنية البيانات",
        staticVal: "مشفرة مباشرة داخل مربعات الرمز",
        dynamicVal: "توجيه عبر خادم وسيط"
      },
      {
        feature: "تعديل المحتوى لاحقاً",
        staticVal: "",
        staticBadge: "غير قابل للتعديل",
        staticBadgeType: "err",
        dynamicVal: "",
        dynamicBadge: "قابل للتعديل فورياً",
        dynamicBadgeType: "ok"
      },
      {
        feature: "تتبع الإحصائيات",
        staticVal: "",
        staticBadge: "بدون تتبع / خصوصية 100%",
        staticBadgeType: "err",
        dynamicVal: "",
        dynamicBadge: "إحصائيات عدد المسحات",
        dynamicBadgeType: "ok"
      },
      {
        feature: "مدة الصلاحية",
        staticVal: "",
        staticBadge: "دائم / لا ينتهي أبداً",
        staticBadgeType: "ok",
        dynamicVal: "",
        dynamicBadge: "يعتمد على استمرار الخادم",
        dynamicBadgeType: "warn"
      },
      {
        feature: "السرعة والعمل بدون نت",
        staticVal: "",
        staticBadge: "قراءة فورية بدون إنترنت",
        staticBadgeType: "ok",
        dynamicVal: "",
        dynamicBadge: "يتطلب اتصالاً بالشبكة",
        dynamicBadgeType: "warn"
      }
    ],
    comparisonNote: "الرموز الثابتة تمنحك راحة البال التامة مدى الحياة دون أي اشتراكات دورية. مثالية للمطبوعات والتغليف وبطاقات العمل.",
    bulkTitle: "إنشاء رموز QR بكميات كبيرة (Bulk)",
    bulkP1: "أداة التوليد الجماعي تتيح لك إدخال عدة روابط دفعة واحدة لمعالجة مئات الرموز في ثوانٍ معدودة.",
    bulkP2: "تتم المعالجة بالكامل داخل المتصفح، ويتم تحميل جميع الرموز في ملف مضغوط ZIP منظم.",
    apiTitle: "واجهة برمجة للمطورين (بدون تسجيل ومجانية)",
    apiP1: "قم بدمج إنشاء الرموز الديناميكية داخل تطبيقاتك أو موقعك عبر كود جافا سكريبت خفيف وسهل.",
    apiP2: "بما أن المعالجة تتم على جهاز المستخدم، يمكنك تلبية ملايين الطلبات دون تكاليف خوادم إضافية.",
    whyUsTitle: "لماذا يفضل المستخدمون منصتنا؟",
    benefits: [
      {
        title: "مجاني تماماً 100%",
        desc: "تمتع بجميع خيارات التصميم وتصدير ملفات المتجهات دون رسوم خفية أو علامات مائية."
      },
      {
        title: "بدون تسجيل أو دخول",
        desc: "ابدأ التصميم والتحميل فور فتح الموقع دون الحاجة لإنشاء حساب."
      },
      {
        title: "أمان وخصوصية تامة",
        desc: "لا نرفع بياناتك أو كلمات مرورك إلى أي خادم خارجي على الإطلاق."
      }
    ],
    guideTitle: "خطوات بسيطة لتصميم رمز QR احترافي",
    guideDesc: "اتبع هذه الخطوات لتخصيص وتحميل رمز الاستجابة السريعة في ثوانٍ معدودة.",
    steps: [
      {
        number: "01",
        title: "اختر نوع البيانات",
        desc: "حدد رابط موقع، نص، واي فاي، هاتف، بريد أو بطاقة اتصال."
      },
      {
        number: "02",
        title: "أدخل البيانات",
        desc: "اكتب الرابط أو نص الرسالة أو بيانات شبكة الواي فاي."
      },
      {
        number: "03",
        title: "تخصيص الألوان",
        desc: "اختر ألواناً متناسقة أو تدرجات جذابة للرمز والخلفية."
      },
      {
        number: "04",
        title: "تحديد الأشكال",
        desc: "خصص أشكال الزوايا والنقاط لتناسب هوية علامتك التجارية."
      },
      {
        number: "05",
        title: "إضافة الشعار",
        desc: "ارفع شعار شركتك أو اختر أيقونة المنصة مع تفعيل أعلى تصحيح أخطاء."
      },
      {
        number: "06",
        title: "التحميل والطباعة",
        desc: "احفظ بصيغة PNG للشاشات أو بصيغة SVG الفائقة للطباعة الورقية."
      }
    ]
  }
};

// Fallback logic for languages not explicitly translated yet
export function getSeoData(locale: string): SeoLocaleData {
  return seoData[locale] || seoData.en;
}
