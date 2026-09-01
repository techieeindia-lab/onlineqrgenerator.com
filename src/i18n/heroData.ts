export interface HeroLocaleData {
  badge: string;
  headlineStart: string;
  headlineGradient: string;
  headlineEnd: string;
  stats: {
    generatedToday: string;
    redirectionSpeed: string;
    operational: string;
  };
}

export const heroData: Record<string, HeroLocaleData> = {
  en: {
    badge: "100% Free · No Signup · No Watermarks",
    headlineStart: "Craft Elegant,",
    headlineGradient: "Brand-Customized QR Codes",
    headlineEnd: "Instantly",
    stats: {
      generatedToday: "12,450 Codes Generated Today",
      redirectionSpeed: "12ms Avg Redirection Speed",
      operational: "Server: 100% Operational"
    }
  },
  es: {
    badge: "100% Gratis · Sin Registro · Sin Marcas de Agua",
    headlineStart: "Cree Códigos QR",
    headlineGradient: "Elegantes y Personalizados",
    headlineEnd: "al Instante",
    stats: {
      generatedToday: "12.450 Códigos Generados Hoy",
      redirectionSpeed: "12ms Velocidad Promedio",
      operational: "Servidor: 100% Operativo"
    }
  },
  fr: {
    badge: "100% Gratuit · Sans Inscription · Sans Filigrane",
    headlineStart: "Créez des Codes QR",
    headlineGradient: "Élégants et Personnalisés",
    headlineEnd: "Instantanément",
    stats: {
      generatedToday: "12 450 Codes Générés Aujourd'hui",
      redirectionSpeed: "12ms Vitesse Moyenne",
      operational: "Serveur: 100% Opérationnel"
    }
  },
  de: {
    badge: "100% Kostenlos · Ohne Anmeldung · Keine Wasserzeichen",
    headlineStart: "Erstellen Sie elegante,",
    headlineGradient: "individuelle QR-Codes",
    headlineEnd: "in Sekundenschnelle",
    stats: {
      generatedToday: "12.450 Codes Heute Generiert",
      redirectionSpeed: "12ms Durchschnittliche Ladezeit",
      operational: "Server: 100% Betriebsbereit"
    }
  },
  it: {
    badge: "100% Gratis · Senza Registrazione · Senza Watermark",
    headlineStart: "Crea Codici QR",
    headlineGradient: "Eleganti e Personalizzati",
    headlineEnd: "Istantaneamente",
    stats: {
      generatedToday: "12.450 Codici Generati Oggi",
      redirectionSpeed: "12ms Velocità Media",
      operational: "Server: 100% Operativo"
    }
  },
  pt: {
    badge: "100% Grátis · Sem Registo · Sem Marcas de Água",
    headlineStart: "Crie Códigos QR",
    headlineGradient: "Elegantes e Personalizados",
    headlineEnd: "Instantaneamente",
    stats: {
      generatedToday: "12.450 Códigos Gerados Hoje",
      redirectionSpeed: "12ms Velocidade Média",
      operational: "Servidor: 100% Operacional"
    }
  },
  ru: {
    badge: "100% Бесплатно · Без Регистрации · Без Водяных Знаков",
    headlineStart: "Создавайте стильные",
    headlineGradient: "брендированные QR-коды",
    headlineEnd: "мгновенно",
    stats: {
      generatedToday: "12 450 кодов создано сегодня",
      redirectionSpeed: "12мс средняя скорость",
      operational: "Сервер: 100% работает"
    }
  },
  ja: {
    badge: "完全無料 · 会員登録不要 · 透かしなし",
    headlineStart: "洗練された",
    headlineGradient: "オリジナルデザインQRコード",
    headlineEnd: "を即座に作成",
    stats: {
      generatedToday: "本日 12,450 件のコードを生成",
      redirectionSpeed: "平均 12ms の高速表示",
      operational: "サーバー稼働率: 100% 正常"
    }
  },
  ko: {
    badge: "100% 평생 무료 · 회원가입 불필요 · 워터마크 없음",
    headlineStart: "감각적이고 세련된",
    headlineGradient: "나만의 맞춤형 QR 코드",
    headlineEnd: "를 1초 만에 제작하세요",
    stats: {
      generatedToday: "오늘 생성된 코드 12,450개",
      redirectionSpeed: "평균 12ms 초고속 스캔",
      operational: "서버 상태: 100% 정상 작동 중"
    }
  },
  ar: {
    badge: "مجاني 100% · بدون تسجيل · بدون علامات مائية",
    headlineStart: "صمم رموز QR",
    headlineGradient: "أنيقة ومخصصة لعلامتك",
    headlineEnd: "فورياً وبكل سهولة",
    stats: {
      generatedToday: "12,450 رمز تم إنشاؤه اليوم",
      redirectionSpeed: "12 مللي ثانية متوسط السرعة",
      operational: "الخادم: يعمل بنسبة 100%"
    }
  }
};

export function getHeroData(locale: string): HeroLocaleData {
  return heroData[locale] || heroData.en;
}
