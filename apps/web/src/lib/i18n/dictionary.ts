export type Locale = "id" | "ar" | "en";

export interface Translations {
  nav: {
    home: string;
    about: string;
    programs: string;
    news: string;
    gallery: string;
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
}

export const DICTIONARY: Record<Locale, Translations> = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      programs: "Program & Kurikulum",
      news: "Berita",
      gallery: "Galeri",
      contact: "Kontak",
      contactUs: "Hubungi Kami",
      applyOnline: "Daftar Online",
      portal: "Portal Guru & Ortu",
      openMenu: "Buka Menu Navigasi",
      menuTitle: "Menu Navigasi",
    },
    badges: {
      admissionsOpen: "PPDB 2026/2027 Dibuka",
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
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      programs: "البرامج والمناهج",
      news: "الأخبار",
      gallery: "معرض الصور",
      contact: "اتصل بنا",
      contactUs: "تواصل معنا",
      applyOnline: "التسجيل الإلكتروني",
      portal: "بوابة أولياء الأمور",
      openMenu: "فتح القائمة",
      menuTitle: "قائمة التنقل",
    },
    badges: {
      admissionsOpen: "التسجيل مفتوح ٢٠٢٦/٢٠٢٧",
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
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      programs: "Programs & Curriculum",
      news: "News & Articles",
      gallery: "Gallery",
      contact: "Contact",
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
  },
};
