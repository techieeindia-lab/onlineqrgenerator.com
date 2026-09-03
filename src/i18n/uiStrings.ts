export interface UiLocaleStrings {
  scanner: {
    uploadImage: string;
    useWebcam: string;
    noQrDetected: string;
  };
  bulk: {
    uploadList: string;
    dropzoneText: string;
    emptyError: string;
    zipError: string;
    invalidFile: string;
    fileLoaded: string;
  };
  history: {
    clearHistory: string;
    confirmClear: string;
    clearedToast: string;
    itemRemovedToast: string;
    configRecalled: string;
  };
  generator: {
    livePreview: string;
    activeBadge: string;
    syncForeground: string;
    scanMeDefault: string;
    scanCodeDefault: string;
    frameBg: string;
    logoScale: string;
    scaleSmall: string;
    scaleMedium: string;
    scaleLarge: string;
    softShadow: string;
    logoTooLarge: string;
    logoLoaded: string;
    eccLow: string;
    eccMedium: string;
    eccQuartile: string;
    eccHigh: string;
    shapes: {
      square: string;
      dots: string;
      rounded: string;
      classy: string;
      classyRounded: string;
      extra: string;
      circle: string;
      matrixShape: string;
      matrixSquare: string;
      matrixCircle: string;
    };
  };
  templates: {
    title: string;
    subtitle: string;
    surpriseMe: string;
    categories: {
      all: string;
      modern: string;
      luxury: string;
      gradients: string;
      social: string;
      cafe: string;
    };
    appliedToast: string;
  };
}

export const uiStrings: Record<string, any> = {
  en: {
    scanner: {
      uploadImage: "Upload Image",
      useWebcam: "Use Webcam",
      noQrDetected: "No QR code detected in image."
    },
    bulk: {
      uploadList: "Or Upload List File (CSV / TXT)",
      dropzoneText: "Drag & drop CSV or TXT file containing links, or click to upload",
      emptyError: "Please enter at least one link.",
      zipError: "An error occurred during ZIP creation.",
      invalidFile: "Please upload a .txt or .csv file",
      fileLoaded: "List file loaded successfully"
    },
    history: {
      clearHistory: "Clear History",
      confirmClear: "Are you sure you want to clear your local QR code history?",
      clearedToast: "QR code history cleared",
      itemRemovedToast: "Item removed from history",
      configRecalled: "Configuration recalled!"
    },
    generator: {
      livePreview: "Live Preview",
      activeBadge: "Active",
      syncForeground: "Sync with foreground",
      scanMeDefault: "SCAN ME",
      scanCodeDefault: "SCAN CODE",
      frameBg: "Frame Background",
      logoScale: "Logo Scale",
      scaleSmall: "Small (25%)",
      scaleMedium: "Medium (33%)",
      scaleLarge: "Large (40%)",
      softShadow: "Apply soft shadow/glow",
      logoTooLarge: "File is too large. Max 1MB allowed.",
      logoLoaded: "Logo loaded successfully!",
      eccLow: "L - Low (~7%)",
      eccMedium: "M - Medium (~15%)",
      eccQuartile: "Q - Quartile (~25%)",
      eccHigh: "H - High (~30%)",
      shapes: {
        square: "Square",
        dots: "Dots",
        rounded: "Rounded",
        classy: "Classy",
        classyRounded: "Leaf / Flow",
        extra: "Extra",
        circle: "Circle",
        matrixShape: "Matrix Shape",
        matrixSquare: "Square Grid",
        matrixCircle: "Circle (Radial)"
      }
    },
    templates: {
      title: "Designer Templates",
      subtitle: "1-Click curated visual styles & palettes",
      surpriseMe: "Surprise Me",
      categories: {
        all: "All",
        modern: "Modern & Tech",
        luxury: "Luxury",
        gradients: "Gradients",
        social: "Social",
        cafe: "Cafe & Dining"
      },
      appliedToast: "Template applied!"
    }
  },
  es: {
    scanner: {
      uploadImage: "Subir Imagen",
      useWebcam: "Usar Cámara",
      noQrDetected: "No se detectó ningún código QR en la imagen."
    },
    bulk: {
      uploadList: "O subir archivo con lista (CSV / TXT)",
      dropzoneText: "Arrastre un archivo CSV o TXT con enlaces, o haga clic aquí",
      emptyError: "Por favor, introduzca al menos un enlace.",
      zipError: "Ocurrió un error al crear el archivo ZIP.",
      invalidFile: "Por favor, suba un archivo .txt o .csv",
      fileLoaded: "Lista de archivos cargada con éxito"
    },
    history: {
      clearHistory: "Borrar Historial",
      confirmClear: "¿Está seguro de que desea borrar todo su historial de códigos QR?",
      clearedToast: "Historial de códigos QR borrado",
      itemRemovedToast: "Elemento eliminado del historial",
      configRecalled: "¡Configuración restaurada!"
    },
    generator: {
      livePreview: "Vista Previa",
      activeBadge: "Activo",
      syncForeground: "Sincronizar con color frontal",
      scanMeDefault: "ESCANÉAME",
      scanCodeDefault: "ESCANEAR",
      frameBg: "Fondo del marco",
      logoScale: "Tamaño del logo",
      scaleSmall: "Pequeño (25%)",
      scaleMedium: "Medio (33%)",
      scaleLarge: "Grande (40%)",
      softShadow: "Aplicar sombra suave / brillo",
      logoTooLarge: "El archivo es demasiado grande. Máx. 1 MB permitido.",
      logoLoaded: "¡Logo cargado con éxito!",
      eccLow: "L - Bajo (~7%)",
      eccMedium: "M - Medio (~15%)",
      eccQuartile: "Q - Cuartil (~25%)",
      eccHigh: "H - Alto (~30%)",
      shapes: {
        square: "Cuadrado",
        dots: "Puntos",
        rounded: "Redondeado",
        classy: "Elegante",
        extra: "Extra",
        circle: "Círculo"
      }
    }
  },
  fr: {
    scanner: {
      uploadImage: "Téléverser Image",
      useWebcam: "Utiliser Caméra",
      noQrDetected: "Aucun QR code détecté dans l'image."
    },
    bulk: {
      uploadList: "Ou importer un fichier (CSV / TXT)",
      dropzoneText: "Glissez-déposez un fichier CSV ou TXT avec des liens, ou cliquez pour importer",
      emptyError: "Veuillez saisir au moins un lien.",
      zipError: "Une erreur est survenue lors de la création du ZIP.",
      invalidFile: "Veuillez importer un fichier .txt ou .csv",
      fileLoaded: "Fichier de liste chargé avec succès"
    },
    history: {
      clearHistory: "Effacer l'historique",
      confirmClear: "Voulez-vous vraiment effacer votre historique local de codes QR ?",
      clearedToast: "Historique des codes QR effacé",
      itemRemovedToast: "Élément supprimé de l'historique",
      configRecalled: "Configuration restaurée !"
    },
    generator: {
      livePreview: "Aperçu en direct",
      activeBadge: "Actif",
      syncForeground: "Synchroniser avec le premier plan",
      scanMeDefault: "SCANNEZ-MOI",
      scanCodeDefault: "SCANNER",
      frameBg: "Arrière-plan du cadre",
      logoScale: "Taille du logo",
      scaleSmall: "Petit (25%)",
      scaleMedium: "Moyen (33%)",
      scaleLarge: "Grand (40%)",
      softShadow: "Appliquer une ombre douce",
      logoTooLarge: "Fichier trop volumineux. Max 1 Mo autorisé.",
      logoLoaded: "Logo chargé avec succès !",
      eccLow: "L - Faible (~7%)",
      eccMedium: "M - Moyen (~15%)",
      eccQuartile: "Q - Quartile (~25%)",
      eccHigh: "H - Élevé (~30%)",
      shapes: {
        square: "Carré",
        dots: "Points",
        rounded: "Arrondi",
        classy: "Élégant",
        extra: "Extra",
        circle: "Cercle"
      }
    }
  },
  de: {
    scanner: {
      uploadImage: "Bild hochladen",
      useWebcam: "Kamera nutzen",
      noQrDetected: "Kein QR-Code im Bild erkannt."
    },
    bulk: {
      uploadList: "Oder Dateiliste hochladen (CSV / TXT)",
      dropzoneText: "CSV- oder TXT-Datei hierher ziehen oder klicken zum Hochladen",
      emptyError: "Bitte geben Sie mindestens einen Link ein.",
      zipError: "Fehler beim Erstellen der ZIP-Datei.",
      invalidFile: "Bitte laden Sie eine .txt- oder .csv-Datei hoch",
      fileLoaded: "Dateiliste erfolgreich geladen"
    },
    history: {
      clearHistory: "Verlauf löschen",
      confirmClear: "Möchten Sie Ihren lokalen QR-Code-Verlauf wirklich löschen?",
      clearedToast: "QR-Code-Verlauf gelöscht",
      itemRemovedToast: "Eintrag aus Verlauf entfernt",
      configRecalled: "Konfiguration wiederhergestellt!"
    },
    generator: {
      livePreview: "Live-Vorschau",
      activeBadge: "Aktiv",
      syncForeground: "Mit Vordergrund synchronisieren",
      scanMeDefault: "SCANNEN",
      scanCodeDefault: "CODE SCANNEN",
      frameBg: "Rahmenhintergrund",
      logoScale: "Logo-Größe",
      scaleSmall: "Klein (25%)",
      scaleMedium: "Mittel (33%)",
      scaleLarge: "Groß (40%)",
      softShadow: "Weichen Schatten / Glanz anwenden",
      logoTooLarge: "Datei zu groß. Maximal 1 MB erlaubt.",
      logoLoaded: "Logo erfolgreich geladen!",
      eccLow: "L - Niedrig (~7%)",
      eccMedium: "M - Mittel (~15%)",
      eccQuartile: "Q - Quartil (~25%)",
      eccHigh: "H - Hoch (~30%)",
      shapes: {
        square: "Quadrat",
        dots: "Punkte",
        rounded: "Abgerundet",
        classy: "Elegant",
        extra: "Extra",
        circle: "Kreis"
      }
    }
  },
  it: {
    scanner: {
      uploadImage: "Carica Immagine",
      useWebcam: "Usa Fotocamera",
      noQrDetected: "Nessun codice QR rilevato nell'immagine."
    },
    bulk: {
      uploadList: "Oppure carica un file lista (CSV / TXT)",
      dropzoneText: "Trascina un file CSV o TXT con i link, o clicca per caricare",
      emptyError: "Inserisci almeno un link.",
      zipError: "Si è verificato un errore durante la creazione dello ZIP.",
      invalidFile: "Carica un file .txt o .csv",
      fileLoaded: "File lista caricato con successo"
    },
    history: {
      clearHistory: "Cancella Cronologia",
      confirmClear: "Sei sicuro di voler cancellare la cronologia locale dei codici QR?",
      clearedToast: "Cronologia codici QR cancellata",
      itemRemovedToast: "Elemento rimosso dalla cronologia",
      configRecalled: "Configurazione ripristinata!"
    },
    generator: {
      livePreview: "Anteprima dal vivo",
      activeBadge: "Attivo",
      syncForeground: "Sincronizza con primo piano",
      scanMeDefault: "SCANSIONAMI",
      scanCodeDefault: "SCANSIONA",
      frameBg: "Sfondo cornice",
      logoScale: "Scala logo",
      scaleSmall: "Piccolo (25%)",
      scaleMedium: "Medio (33%)",
      scaleLarge: "Grande (40%)",
      softShadow: "Applica ombra morbida",
      logoTooLarge: "File troppo grande. Max 1 MB consentito.",
      logoLoaded: "Logo caricato con successo!",
      eccLow: "L - Basso (~7%)",
      eccMedium: "M - Medio (~15%)",
      eccQuartile: "Q - Quartile (~25%)",
      eccHigh: "H - Alto (~30%)",
      shapes: {
        square: "Quadrato",
        dots: "Punti",
        rounded: "Arrotondato",
        classy: "Elegante",
        extra: "Extra",
        circle: "Cerchio"
      }
    }
  },
  pt: {
    scanner: {
      uploadImage: "Carregar Imagem",
      useWebcam: "Usar Câmara",
      noQrDetected: "Nenhum código QR detetado na imagem."
    },
    bulk: {
      uploadList: "Ou carregar ficheiro com lista (CSV / TXT)",
      dropzoneText: "Arraste um ficheiro CSV ou TXT com links, ou clique para carregar",
      emptyError: "Por favor, insira pelo menos um link.",
      zipError: "Ocorreu um erro ao criar o ficheiro ZIP.",
      invalidFile: "Por favor, carregue um ficheiro .txt ou .csv",
      fileLoaded: "Ficheiro de lista carregado com sucesso"
    },
    history: {
      clearHistory: "Limpar Histórico",
      confirmClear: "Tem a certeza de que deseja limpar o histórico local de códigos QR?",
      clearedToast: "Histórico de códigos QR limpo",
      itemRemovedToast: "Item removido do histórico",
      configRecalled: "Configuração restaurada!"
    },
    generator: {
      livePreview: "Pré-visualização",
      activeBadge: "Ativo",
      syncForeground: "Sincronizar com cor frontal",
      scanMeDefault: "LEIA-ME",
      scanCodeDefault: "LER CÓDIGO",
      frameBg: "Fundo da moldura",
      logoScale: "Tamanho do logótipo",
      scaleSmall: "Pequeno (25%)",
      scaleMedium: "Médio (33%)",
      scaleLarge: "Grande (40%)",
      softShadow: "Aplicar sombra suave / brilho",
      logoTooLarge: "Ficheiro demasiado grande. Máx. 1 MB permitido.",
      logoLoaded: "Logótipo carregado com sucesso!",
      eccLow: "L - Baixo (~7%)",
      eccMedium: "M - Médio (~15%)",
      eccQuartile: "Q - Quartile (~25%)",
      eccHigh: "H - Alto (~30%)",
      shapes: {
        square: "Quadrado",
        dots: "Pontos",
        rounded: "Arredondado",
        classy: "Elegante",
        extra: "Extra",
        circle: "Círculo"
      }
    }
  },
  ru: {
    scanner: {
      uploadImage: "Загрузить фото",
      useWebcam: "Включить камеру",
      noQrDetected: "QR-код на изображении не обнаружен."
    },
    bulk: {
      uploadList: "Или загрузите файл со списком (CSV / TXT)",
      dropzoneText: "Перетащите файл CSV или TXT со ссылками или нажмите для загрузки",
      emptyError: "Пожалуйста, введите хотя бы одну ссылку.",
      zipError: "Произошла ошибка при создании ZIP-архива.",
      invalidFile: "Пожалуйста, загрузите файл .txt или .csv",
      fileLoaded: "Файл со списком успешно загружен"
    },
    history: {
      clearHistory: "Очистить историю",
      confirmClear: "Вы уверены, что хотите очистить локальную историю QR-кодов?",
      clearedToast: "История QR-кодов очищена",
      itemRemovedToast: "Элемент удален из истории",
      configRecalled: "Конфигурация восстановлена!"
    },
    generator: {
      livePreview: "Предпросмотр",
      activeBadge: "Активен",
      syncForeground: "Цвет как у кода",
      scanMeDefault: "СКАНИРУЙ",
      scanCodeDefault: "СКАНИРОВАТЬ",
      frameBg: "Фон рамки",
      logoScale: "Размер логотипа",
      scaleSmall: "Маленький (25%)",
      scaleMedium: "Средний (33%)",
      scaleLarge: "Большой (40%)",
      softShadow: "Мягкая тень / свечение",
      logoTooLarge: "Файл слишком большой. Максимум 1 МБ.",
      logoLoaded: "Логотип успешно загружен!",
      eccLow: "L - Низкий (~7%)",
      eccMedium: "M - Средний (~15%)",
      eccQuartile: "Q - Четверть (~25%)",
      eccHigh: "H - Высокий (~30%)",
      shapes: {
        square: "Квадрат",
        dots: "Точки",
        rounded: "Скругленный",
        classy: "Стильный",
        extra: "Экстра",
        circle: "Круг"
      }
    }
  },
  ja: {
    scanner: {
      uploadImage: "画像をアップロード",
      useWebcam: "カメラを起動",
      noQrDetected: "画像からQRコードが検出されませんでした。"
    },
    bulk: {
      uploadList: "またはリストファイルをアップロード (CSV / TXT)",
      dropzoneText: "リンクを含むCSVまたはTXTファイルをドラッグ＆ドロップ、またはクリックして選択",
      emptyError: "リンクを1つ以上入力してください。",
      zipError: "ZIPファイルの作成中にエラーが発生しました。",
      invalidFile: ".txt または .csv ファイルをアップロードしてください",
      fileLoaded: "リストファイルを正常に読み込みました"
    },
    history: {
      clearHistory: "履歴をクリア",
      confirmClear: "保存されたQRコードの履歴をすべて削除してもよろしいですか？",
      clearedToast: "QRコードの履歴を削除しました",
      itemRemovedToast: "履歴から削除しました",
      configRecalled: "設定を復元しました！"
    },
    generator: {
      livePreview: "リアルタイムプレビュー",
      activeBadge: "作成中",
      syncForeground: "コード色と同期",
      scanMeDefault: "スキャンしてね",
      scanCodeDefault: "QRコード読取",
      frameBg: "フレーム背景色",
      logoScale: "ロゴの大きさ",
      scaleSmall: "小 (25%)",
      scaleMedium: "中 (33%)",
      scaleLarge: "大 (40%)",
      softShadow: "やわらかな影と光彩を適用",
      logoTooLarge: "ファイルサイズが大きすぎます（上限1MB）",
      logoLoaded: "ロゴを正常に読み込みました！",
      eccLow: "L - 低 (~7%)",
      eccMedium: "M - 中 (~15%)",
      eccQuartile: "Q - やや高 (~25%)",
      eccHigh: "H - 高 (~30%)",
      shapes: {
        square: "正方形",
        dots: "ドット",
        rounded: "角丸",
        classy: "クラシック",
        extra: "極丸",
        circle: "丸型"
      }
    }
  },
  ko: {
    scanner: {
      uploadImage: "이미지 업로드",
      useWebcam: "카메라 스캔",
      noQrDetected: "이미지에서 QR 코드를 인식하지 못했습니다."
    },
    bulk: {
      uploadList: "또는 링크 목록 파일 업로드 (CSV / TXT)",
      dropzoneText: "링크가 포함된 CSV 또는 TXT 파일을 여기에 드래그하거나 클릭하여 업로드",
      emptyError: "최소 1개 이상의 링크를 입력해 주세요.",
      zipError: "ZIP 파일 생성 중 오류가 발생했습니다.",
      invalidFile: ".txt 또는 .csv 형식의 파일을 업로드해 주세요.",
      fileLoaded: "목록 파일을 성공적으로 불러왔습니다"
    },
    history: {
      clearHistory: "기록 전체 삭제",
      confirmClear: "저장된 모든 로컬 QR 코드 보관 기록을 삭제하시겠습니까?",
      clearedToast: "QR 코드 보관함이 초기화되었습니다",
      itemRemovedToast: "보관함에서 항목이 삭제되었습니다",
      configRecalled: "이전 설정값이 복원되었습니다!"
    },
    generator: {
      livePreview: "실시간 미리보기",
      activeBadge: "활성",
      syncForeground: "코드 색상과 동일하게 설정",
      scanMeDefault: "스캔해 보세요",
      scanCodeDefault: "QR코드 스캔",
      frameBg: "프레임 배경색",
      logoScale: "로고 크기",
      scaleSmall: "작게 (25%)",
      scaleMedium: "보통 (33%)",
      scaleLarge: "크게 (40%)",
      softShadow: "부드러운 그림자 및 광채 효과",
      logoTooLarge: "파일 크기가 너무 큽니다. 최대 1MB까지 허용됩니다.",
      logoLoaded: "로고 이미지를 성공적으로 등록했습니다!",
      eccLow: "L - 낮음 (~7%)",
      eccMedium: "M - 중간 (~15%)",
      eccQuartile: "Q - 보통 (~25%)",
      eccHigh: "H - 높음 (~30%)",
      shapes: {
        square: "사각형",
        dots: "도트 점",
        rounded: "둥근 모서리",
        classy: "클래식",
        extra: "완전 둥글게",
        circle: "원형"
      }
    }
  },
  ar: {
    scanner: {
      uploadImage: "رفع صورة",
      useWebcam: "تشغيل الكاميرا",
      noQrDetected: "لم يتم العثور على أي رمز QR في الصورة."
    },
    bulk: {
      uploadList: "أو ارفع ملف قائمة (CSV / TXT)",
      dropzoneText: "اسحب وأفلت ملف CSV أو TXT يحتوي على روابط، أو اضغط للرفع",
      emptyError: "يرجى إدخال رابط واحد على الأقل.",
      zipError: "حدث خطأ أثناء إنشاء الملف المضغوط ZIP.",
      invalidFile: "يرجى رفع ملف بصيغة .txt أو .csv",
      fileLoaded: "تم تحميل ملف القائمة بنجاح"
    },
    history: {
      clearHistory: "مسح السجل",
      confirmClear: "هل أنت متأكد من رغبتك في مسح سجل رموز QR المحفوظة محلياً؟",
      clearedToast: "تم مسح سجل رموز QR بنجاح",
      itemRemovedToast: "تمت إزالة العنصر من السجل",
      configRecalled: "تمت استعادة الإعدادات بنجاح!"
    },
    generator: {
      livePreview: "معاينة مباشرة",
      activeBadge: "نشط",
      syncForeground: "مطابقة لون الرمز",
      scanMeDefault: "امسح الكود",
      scanCodeDefault: "مسح الرمز",
      frameBg: "خلفية الإطار",
      logoScale: "حجم الشعار",
      scaleSmall: "صغير (25%)",
      scaleMedium: "متوسط (33%)",
      scaleLarge: "كبير (40%)",
      softShadow: "إضافة ظل ناعم / توهج",
      logoTooLarge: "حجم الملف كبير جداً. الحد الأقصى 1 ميغابايت.",
      logoLoaded: "تم تحميل الشعار بنجاح!",
      eccLow: "L - منخفض (~7%)",
      eccMedium: "M - متوسط (~15%)",
      eccQuartile: "Q - جيد (~25%)",
      eccHigh: "H - عالي (~30%)",
      shapes: {
        square: "مربع",
        dots: "نقاط",
        rounded: "دائري الحواف",
        classy: "أنيق",
        extra: "فائق الدوران",
        circle: "دائري"
      }
    }
  },
  id: {
    scanner: {
      uploadImage: "Unggah Gambar",
      useWebcam: "Gunakan Kamera",
      noQrDetected: "Tidak ada kode QR yang terdeteksi pada gambar."
    },
    bulk: {
      uploadList: "Atau Unggah File Daftar (CSV / TXT)",
      dropzoneText: "Tarik & lepas file CSV atau TXT berisi tautan, atau klik untuk mengunggah",
      emptyError: "Silakan masukkan setidaknya satu tautan.",
      zipError: "Terjadi kesalahan saat pembuatan ZIP.",
      invalidFile: "Harap unggah file berformat .txt atau .csv",
      fileLoaded: "File daftar berhasil dimuat"
    },
    history: {
      clearHistory: "Hapus Riwayat",
      confirmClear: "Apakah Anda yakin ingin menghapus seluruh riwayat kode QR lokal Anda?",
      clearedToast: "Riwayat kode QR berhasil dibersihkan",
      itemRemovedToast: "Item berhasil dihapus dari riwayat",
      configRecalled: "Konfigurasi berhasil dipulihkan!"
    },
    generator: {
      livePreview: "Pratinjau Langsung",
      activeBadge: "Aktif",
      syncForeground: "Samakan dengan warna depan",
      scanMeDefault: "PINDAI SAYA",
      scanCodeDefault: "PINDAI KODE",
      frameBg: "Latar Belakang Bingkai",
      logoScale: "Ukuran Logo",
      scaleSmall: "Kecil (25%)",
      scaleMedium: "Sedang (33%)",
      scaleLarge: "Besar (40%)",
      softShadow: "Terapkan bayangan halus",
      logoTooLarge: "Ukuran file terlalu besar. Maksimum 1MB diizinkan.",
      logoLoaded: "Logo berhasil dimuat!",
      eccLow: "L - Rendah (~7%)",
      eccMedium: "M - Sedang (~15%)",
      eccQuartile: "Q - Kuartil (~25%)",
      eccHigh: "H - Tinggi (~30%)",
      shapes: {
        square: "Kotak",
        dots: "Titik",
        rounded: "Sudut Membulat",
        classy: "Elegan",
        classyRounded: "Daun / Melengkung",
        extra: "Ekstra Bulat",
        circle: "Lingkaran",
        matrixShape: "Bentuk Matriks",
        matrixSquare: "Kisi Persegi",
        matrixCircle: "Lingkaran (Radial)"
      }
    },
    templates: {
      title: "Templat Desain",
      subtitle: "Gaya visual & palet pilihan sekali klik",
      surpriseMe: "Pilihan Acak",
      categories: {
        all: "Semua",
        modern: "Modern & Teknologi",
        luxury: "Mewah",
        gradients: "Gradien",
        social: "Sosial Media",
        cafe: "Kafe & Resto"
      },
      appliedToast: "Templat berhasil diterapkan!"
    }
  }
};

export function getUiStrings(locale: string): UiLocaleStrings {
  const current = uiStrings[locale] || uiStrings.en;
  return {
    ...uiStrings.en,
    ...current,
    generator: {
      ...uiStrings.en.generator,
      ...(current.generator || {})
    },
    templates: current.templates || uiStrings.en.templates
  };
}
