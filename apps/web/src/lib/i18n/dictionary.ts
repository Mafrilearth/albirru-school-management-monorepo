export type Locale = "id" | "ar" | "en";

export interface Translations {
  nav: {
    home: string;
    profile: string;
    about: string;
    academics: string;
    programs: string;
    students: string;
    kesiswaan: string;
    news: string;
    gallery: string;
    services: string;
    contact: string;
    contactUs: string;
    applyOnline: string;
    portal: string;
    openMenu: string;
    menuTitle: string;
  };
  badges: {
    admissionsOpen: string;
    quotaRemaining: string;
    islamicIntegrated: string;
    tahfidzFocus: string;
    accreditationA: string;
  };
  actions: {
    readMore: string;
    submit: string;
    downloadBrochure: string;
    learnMore: string;
    apply: string;
    back: string;
    close: string;
  };
  notifications: {
    title: string;
    markAllAsRead: string;
    empty: string;
    newBadge: string;
  };
  chat: {
    title: string;
    subtitle: string;
    placeholder: string;
    send: string;
    askPPDB: string;
    thinking: string;
    quickFees: string;
    quickRequirements: string;
    quickTahfidz: string;
    quickLocation: string;
  };
  cookie: {
    title: string;
    description: string;
    acceptAll: string;
    essentialOnly: string;
    privacyPolicy: string;
  };
  theme: {
    toggle: string;
    light: string;
    dark: string;
    system: string;
  };
}

export const DICTIONARY: Record<Locale, Translations> = {
  id: {
    nav: {
      home: "Beranda",
      profile: "Profil",
      about: "Profil",
      academics: "Akademik",
      programs: "Akademik",
      students: "Kesiswaan",
      kesiswaan: "Kesiswaan",
      news: "Warta",
      gallery: "Warta",
      services: "Layanan",
      contact: "Layanan",
      contactUs: "Hubungi Kami",
      applyOnline: "Daftar Online",
      portal: "Portal Guru & Ortu",
      openMenu: "Buka Menu Navigasi",
      menuTitle: "Menu Navigasi",
    },
    badges: {
      admissionsOpen: "Penerimaan Siswa Baru 2026/2027 Dibuka",
      quotaRemaining: "Sisa 14 Kursi",
      islamicIntegrated: "Sekolah Dasar Terpadu",
      tahfidzFocus: "Tahfidz 3 Juz Mutqin Bersanad",
      accreditationA: "Akreditasi A Unggul",
    },
    actions: {
      readMore: "Baca Selengkapnya",
      submit: "Kirim",
      downloadBrochure: "Unduh Brosur",
      learnMore: "Pelajari Lebih Lanjut",
      apply: "Daftar",
      back: "Kembali",
      close: "Tutup",
    },
    notifications: {
      title: "Pemberitahuan Sekolah",
      markAllAsRead: "Tandai Semua Dibaca",
      empty: "Belum ada pemberitahuan baru",
      newBadge: "Baru",
    },
    chat: {
      title: "Asisten AI SD Al-Birru",
      subtitle: "Layanan Tanya Jawab PPDB & Kurikulum",
      placeholder: "Tanyakan syarat PPDB, SPP, tahfidz, atau fasilitas...",
      send: "Kirim",
      askPPDB: "Tanya AI PPDB",
      thinking: "Asisten sedang merumuskan jawaban...",
      quickFees: "Biaya & SPP",
      quickRequirements: "Syarat PPDB 2026",
      quickTahfidz: "Program Tahfidz 3 Juz",
      quickLocation: "Lokasi & Fasilitas",
    },
    cookie: {
      title: "Privasi & Preferensi Cookie",
      description:
        "SD Al-Birru menggunakan cookie esensial dan analitik lokal untuk memastikan website berjalan optimal dan meningkatkan mutu layanan pendidikan kami sesuai UU Perlindungan Data Pribadi.",
      acceptAll: "Setuju Semua",
      essentialOnly: "Hanya Esensial",
      privacyPolicy: "Kebijakan Privasi",
    },
    theme: {
      toggle: "Ubah Tema",
      light: "Terang",
      dark: "Gelap",
      system: "Sistem",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      profile: "التعريف",
      about: "التعريف",
      academics: "الأكاديميا",
      programs: "الأكاديميا",
      students: "الطلاب",
      kesiswaan: "الطلاب",
      news: "الأخبار",
      gallery: "الأخبار",
      services: "الخدمات",
      contact: "الخدمات",
      contactUs: "تواصل معنا",
      applyOnline: "التسجيل الإلكتروني",
      portal: "بوابة أولياء الأمور",
      openMenu: "فتح القائمة",
      menuTitle: "قائمة التنقل",
    },
    badges: {
      admissionsOpen: "التسجيل للعام 2026/2027 مفتوح",
      quotaRemaining: "باقي ١٤ مقعداً فقط",
      islamicIntegrated: "مدرسة ابتدائية إسلامية متكاملة",
      tahfidzFocus: "تحفيظ ٣ أجزاء متقنة بالسند",
      accreditationA: "اعتماد ممتاز أ",
    },
    actions: {
      readMore: "اقرأ المزيد",
      submit: "إرسال",
      downloadBrochure: "تحميل الدليل التعريفي",
      learnMore: "اعرف المزيد",
      apply: "التسجيل",
      back: "رجوع",
      close: "إغلاق",
    },
    notifications: {
      title: "إشعارات المدرسة",
      markAllAsRead: "تعيين الكل كمقروء",
      empty: "لا توجد إشعارات جديدة",
      newBadge: "جديد",
    },
    chat: {
      title: "المساعد الذكي لمدرسة البرّ",
      subtitle: "خدمة الاستفسارات والقبول والتسجيل",
      placeholder: "اسأل عن شروط القبول، الرسوم، التحفيظ، أو المرافق...",
      send: "إرسال",
      askPPDB: "اسأل الذكاء الاصطناعي",
      thinking: "المساعد يقوم بصياغة الإجابة...",
      quickFees: "الرسوم والمصروفات",
      quickRequirements: "شروط القبول",
      quickTahfidz: "برنامج التحفيظ بالسند",
      quickLocation: "الموقع والمرافق",
    },
    cookie: {
      title: "الخصوصية وملفات تعريف الارتباط",
      description:
        "تستخدم مدرسة البرّ ملفات تعريف الارتباط الأساسية لتحسين تجربة التصفح وتقديم أفضل الخدمات التعليمية وفقاً للوائح حماية البيانات.",
      acceptAll: "الموافقة على الكل",
      essentialOnly: "الأساسية فقط",
      privacyPolicy: "سياسة الخصوصية",
    },
    theme: {
      toggle: "تغيير المظهر",
      light: "فاتح",
      dark: "داكن",
      system: "النظام",
    },
  },
  en: {
    nav: {
      home: "Home",
      profile: "Profile",
      about: "Profile",
      academics: "Academics",
      programs: "Academics",
      students: "Students",
      kesiswaan: "Students",
      news: "News",
      gallery: "Gallery",
      services: "Services",
      contact: "Services",
      contactUs: "Contact Us",
      applyOnline: "Apply Online",
      portal: "Parent Portal",
      openMenu: "Open Navigation Menu",
      menuTitle: "Navigation Menu",
    },
    badges: {
      admissionsOpen: "Admissions 2026/2027 Open",
      quotaRemaining: "14 Seats Remaining",
      islamicIntegrated: "Integrated Islamic Elementary School",
      tahfidzFocus: "3 Juz Mutqin Tahfidz with Sanad",
      accreditationA: "Grade A National Accreditation",
    },
    actions: {
      readMore: "Read More",
      submit: "Submit",
      downloadBrochure: "Download Brochure",
      learnMore: "Learn More",
      apply: "Apply",
      back: "Back",
      close: "Close",
    },
    notifications: {
      title: "School Announcements",
      markAllAsRead: "Mark All as Read",
      empty: "No new announcements",
      newBadge: "New",
    },
    chat: {
      title: "Al-Birru AI Assistant",
      subtitle: "Admissions & Curriculum Inquiries",
      placeholder: "Ask about admissions, tuition fees, tahfidz, or campus...",
      send: "Send",
      askPPDB: "Ask AI PPDB",
      thinking: "Assistant is formulating response...",
      quickFees: "Fees & Tuition",
      quickRequirements: "Admissions Requirements",
      quickTahfidz: "Tahfidz 3 Juz Program",
      quickLocation: "Campus & Location",
    },
    cookie: {
      title: "Privacy & Cookie Preferences",
      description:
        "Al-Birru Primary School uses essential and local analytics cookies to ensure the website operates smoothly and enhances educational services under Personal Data Protection standards.",
      acceptAll: "Accept All",
      essentialOnly: "Essential Only",
      privacyPolicy: "Privacy Policy",
    },
    theme: {
      toggle: "Toggle Theme",
      light: "Light",
      dark: "Dark",
      system: "System",
    },
  },
};
