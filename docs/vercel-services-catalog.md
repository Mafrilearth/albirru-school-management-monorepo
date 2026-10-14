# Katalog Layanan & Direktori Platform Vercel

Dokumen ini membedah seluruh daftar layanan, produk, platform, perkakas (tools), SDK, solusi, materi pembelajaran, dan tautan resmi dari **Vercel** secara komprehensif, mencakup 100% item pada menu direktori platform Vercel tanpa ada yang terlewatkan.

---

## 1. Agent Stack (Infrastruktur & Framework AI Agentik)

| Layanan / Produk | Tautan Resmi | Fungsi & Penjelasan Mendalam | Peran di Al-Birru SIS |
| :--- | :--- | :--- | :--- |
| **AI SDK** | [vercel.com/ai-sdk](https://vercel.com/ai-sdk) | Pustaka TypeScript open-source terkemuka dari Vercel untuk membangun antarmuka AI (`useChat`, `generateText`, `streamText`, `generateObject`) dengan integrasi OpenAI, Anthropic, Google Gemini, dll. | **Sudah Digunakan** pada `/api/chat` dan `<AIChatWidget />` untuk layanan tanya jawab PPDB 2026/2027. |
| **AI Gateway** | [vercel.com/ai-gateway](https://vercel.com/ai-gateway) | Proxy terpadu & caching layer cerdas untuk mengelola ratusan model LLM dengan rate limiting, fallback model otomatis, monitoring biaya, dan zero downtime. | Lapisan proxy terpusat untuk menjaga anggaran token LLM sekolah tetap aman. |
| **Sandbox** | [vercel.com/sandbox](https://vercel.com/sandbox) | Lingkungan eksekusi kode terisolasi (secure isolated microVMs / WebAssembly) di cloud Vercel untuk menjalankan kode yang dihasilkan AI secara aman. | Digunakan jika sekolah membuka lab coding santri berbasis web tanpa risiko keamanan server. |
| **Workflows** | [vercel.com/workflows](https://vercel.com/workflows) | Mesin orkestrasi *durable execution* (mirip Temporal) untuk menjalankan tugas multi-langkah yang tahan kegagalan, retry otomatis, dan sleep jangka panjang. | Cadangan untuk orkestrasi siklus pendaftaran santri dari seleksi berkas hingga pengumuman kelulusan. |
| **Connect [New]** | [vercel.com/connect](https://vercel.com/connect) | Lapisan integrasi data zero-trust untuk menghubungkan agen AI dengan database pribadi, SaaS internal, dan dokumen sekolah secara aman. | Penghubung aman antara agen AI dengan basis data nilai dan mutasi santri. |
| **Passport [New]** | [vercel.com/passport](https://vercel.com/passport) | Manajemen identitas dan izin (IAM) khusus untuk agen otonom, mengontrol apa yang boleh diakses dan dijalankan oleh AI atas nama user. | Menjamin AI PPDB tidak memiliki hak akses mengubah nilai santri atau data keuangan yayasan. |
| **eve [New]** | [vercel.com/eve](https://vercel.com/eve) | Platform runtime & framework agen AI generasi baru dari Vercel yang mengotomatisasi interaksi web, browser headless, dan pemecahan tugas kompleks. | Otomasi pengecekan verifikasi data NISN santri ke portal Dapodik Kemdikbud. |

---

## 2. Core Platform (Infrastruktur Inti Vercel)

| Layanan / Produk | Tautan Resmi | Fungsi & Penjelasan Mendalam | Peran di Al-Birru SIS |
| :--- | :--- | :--- | :--- |
| **CI/CD (Previews)** | [vercel.com/products/previews](https://vercel.com/products/previews) | Sistem build & deployment otomatis setiap kali ada git push / pull request; menghasilkan URL preview unik yang terisolasi untuk peninjauan visual. | **Sudah Digunakan** untuk preview perubahan kurikulum dan fitur portal sekolah sebelum merge ke `main`. |
| **Content Delivery (CDN)** | [vercel.com/cdn](https://vercel.com/cdn) | Jaringan Anycast global di 100+ kota di seluruh dunia dengan Smart Caching, kompresi Brotli, dan latensi ultra-rendah (<30ms). | **Sudah Digunakan** untuk mempercepat akses website SD Al-Birru bagi wali murid di seluruh Indonesia. |
| **Fluid Compute** | [vercel.com/fluid](https://vercel.com/fluid) | Model komputasi serverless generasi baru Vercel yang menskalakan memori dan CPU secara dinamis tanpa hambatan cold start. | Menangani lonjakan ribuan pengunjung saat hari pengumuman kelulusan PPDB tanpa crash. |
| **Observability** | [vercel.com/products/observability](https://vercel.com/products/observability) | Dashboard terpadu pemantauan logs runtime, performa Web Vitals, metrik serverless invocations, dan analisis latensi request. | **Sudah Digunakan** via `@vercel/analytics` dan `@vercel/speed-insights` di `apps/web/src/app/layout.tsx`. |

---

## 3. Security (Keamanan Jaringan & Aplikasi)

| Layanan / Produk | Tautan Resmi | Fungsi & Penjelasan Mendalam | Peran di Al-Birru SIS |
| :--- | :--- | :--- | :--- |
| **Platform Security** | [vercel.com/security](https://vercel.com/security) | Perlindungan infrastruktur cloud tingkat bank, sertifikasi SOC 2 Type II, ISO 27001, dan kepatuhan GDPR/CCPA. | Memastikan data pribadi santri dan wali murid tersimpan di infrastruktur berstandar internasional. |
| **WAF** | [vercel.com/security/web-application-firewall](https://vercel.com/security/web-application-firewall) | Web Application Firewall di level edge untuk memblokir serangan OWASP Top 10, SQL Injection, XSS, dan serangan DDoS layer 7. | Melindungi portal sekolah dari serangan siber peretas secara otomatis di tepi jaringan (edge). |
| **Bot Management** | [vercel.com/security/bot-management](https://vercel.com/security/bot-management) | Deteksi traffic bot jahat secara adaptif menggunakan AI perilaku untuk mencegah web scraping ilegal dan serangan brute-force. | Bekerja berdampingan dengan Cloudflare Turnstile pada formulir pendaftaran PPDB. |
| **BotID** | [vercel.com/botid](https://vercel.com/botid) | Solusi verifikasi identitas peramban manusia vs bot tanpa captcha visual yang mengganggu, memberikan skor reputasi pengunjung secara instan. | Memastikan pengunjung formulir adalah wali murid asli tanpa menyulitkan mereka dengan captcha gambar. |

---

## 4. Tools (Perkakas Pendukung Developer)

| Layanan / Produk | Tautan Resmi | Fungsi & Penjelasan Mendalam | Peran di Al-Birru SIS |
| :--- | :--- | :--- | :--- |
| **Vercel Drop** | [vercel.com/drop](https://vercel.com/drop) | Layanan deploy instan satu kali klik hanya dengan drag-and-drop folder HTML/web statis langsung ke web publik tanpa git. | Digunakan untuk rilis cepat halaman pengumuman statis darurat yayasan jika diperlukan. |
| **Vercel Agent** | [vercel.com/agent](https://vercel.com/agent) | Asisten AI pengembang yang terintegrasi di dashboard Vercel untuk mendiagnosis error build dan menyarankan perbaikan kode. | Membantu tim IT sekolah menyelesaikan error konfigurasi saat proses deployment berlangsung. |
| **Vercel Plugin** | [vercel.com/plugin](https://vercel.com/plugin) | Ekstensi editor kode (VS Code / Cursor) untuk memantau status deployment, log runtime, dan variabel lingkungan secara langsung. | Meningkatkan produktivitas engineer sekolah saat bekerja di dalam editor kode. |
| **Agent Skills** | [skills.sh](https://skills.sh/) | Direktori open-source keterampilan (*skills*) standar untuk agen AI coding otonom. | **Sudah Digunakan** (24 skills resmi di `.agents/skills/` yang mengendalikan standar SDLC repositori ini). |
| **Domains** | [vercel.com/domains](https://vercel.com/domains) | Pengelola DNS dan registrar domain resmi Vercel dengan konfigurasi otomatis sertifikat SSL/TLS Let's Encrypt gratis. | Mengelola domain resmi sekolah `sdalbirru.sch.id` dan subdomain portalnya. |
| **v0** | [v0.app](https://v0.app/) | Platform AI generatif antarmuka pengguna buatan Vercel untuk menghasilkan kode Next.js / React / shadcn dari prompt teks atau gambar. | Mempercepat prototyping komponen visual halaman baru website sekolah. |

---

## 5. Frameworks (Kerangka Kerja Web yang Didukung)

| Layanan / Produk | Tautan Resmi | Fungsi & Penjelasan Mendalam | Peran di Al-Birru SIS |
| :--- | :--- | :--- | :--- |
| **eve [New]** | [eve.dev](https://eve.dev/) | Framework AI agentik berbasis automasi browser dan eksekusi tugas multi-langkah. | Eksplorasi agen otomatisasi entri nilai rapor santri ke format dinas pendidikan. |
| **Next.js** | [vercel.com/frameworks/nextjs](https://vercel.com/frameworks/nextjs) | Framework React full-stack nomor satu di dunia buatan Vercel (App Router, Server Components, Server Actions). | **Kerangka Kerja Utama** seluruh aplikasi (`apps/web`, `apps/app`, `apps/api`, `apps/docs`). |
| **Nuxt** | [vercel.com/docs/frameworks/full-stack/nuxt](https://vercel.com/docs/frameworks/full-stack/nuxt) | Framework full-stack Vue.js modern dengan rendering SSR dan integrasi serverless. | Alternatif di ekosistem Vue; Al-Birru menggunakan Next.js (React). |
| **SvelteKit** | [vercel.com/docs/frameworks/full-stack/sveltekit](https://vercel.com/docs/frameworks/full-stack/sveltekit) | Framework full-stack berbasis compiler reaktif Svelte dengan ukuran bundel ultra-kecil. | Alternatif di ekosistem Svelte. |
| **Nitro** | [vercel.com/docs/frameworks/backend/nitro](https://vercel.com/docs/frameworks/backend/nitro) | Server engine portable universal yang menggerakkan Nuxt dan backend serverless multi-provider. | Engine runtime backend alternatif. |
| **Turborepo** | [vercel.com/solutions/turborepo](https://vercel.com/solutions/turborepo) | Sistem build monorepo berkecepatan tinggi buatan Vercel dengan remote caching dan orkestrasi tugas cerdas. | **Build System Utama** yang mengelola 10 paket internal di repositori Al-Birru. |
| **Tanstack Start** | [vercel.com/docs/frameworks/full-stack/tanstack-start](https://vercel.com/docs/frameworks/full-stack/tanstack-start) | Framework full-stack baru berbasis TanStack Router untuk React. | Alternatif framework perutean. |
| **FastAPI** | [vercel.com/docs/frameworks/backend/fastapi](https://vercel.com/docs/frameworks/backend/fastapi) | Framework web Python modern berperforma tinggi untuk backend machine learning dan AI. | Digunakan jika sekolah membutuhkan microservice Python untuk analisis pemrosesan suara tahfidz. |
| **All frameworks** | [vercel.com/docs/frameworks](https://vercel.com/docs/frameworks) | Direktori panduan deployment 35+ framework lainnya (Astro, Remix, Angular, Gatsby, dll.). | Dokumentasi kompatibilitas universal platform Vercel. |

---

## 6. SDKs (Pustaka Resmi Pengembang)

| Layanan / Produk | Tautan Resmi | Fungsi & Penjelasan Mendalam | Peran di Al-Birru SIS |
| :--- | :--- | :--- | :--- |
| **Vercel SDK** | [vercel.com/docs/rest-api/sdk](https://vercel.com/docs/rest-api/sdk) | SDK TypeScript resmi untuk mengontrol REST API Vercel (deploy, domain, env vars secara programatis). | Memungkinkan bot otomatisasi membuat subdomain pendaftaran baru saat dibutuhkan. |
| **Workflow SDK** | [vercel.com/workflows](https://vercel.com/workflows) | Pustaka TypeScript untuk mendefinisikan langkah alur kerja *durable execution* di Next.js. | Otomasi alur verifikasi berkas PPDB multi-tahap tanpa takut timeout fungsi serverless. |
| **Flags SDK** | [vercel.com/docs/flags/flags-sdk-reference](https://vercel.com/docs/flags/flags-sdk-reference) | Pustaka standar untuk mendeklarasikan dan mengevaluasi feature flags dari berbagai penyedia. | Menghubungkan kontrol visibilitas fitur di dashboard guru dengan antarmuka web publik. |
| **Chat SDK** | [vercel.com/chat](https://vercel.com/chat) | Paket komponen UI antarmuka chat siap pakai untuk aplikasi AI percakapan. | Alternatif komponen chat; Al-Birru menggunakan komponen custom Swiss Bento UI. |
| **Queues SDK** | [vercel.com/docs/queues/sdk](https://vercel.com/docs/queues/sdk) | Antrean pesan serverless untuk memproses background jobs secara andal dengan retry otomatis. | Pemrosesan antrean pengiriman email tanda bukti pendaftaran saat kuota membludak. |
| **Streamdown** | [streamdown.ai](https://streamdown.ai/) | Parser dan renderer Markdown streaming berkecepatan tinggi khusus untuk merender teks dari LLM secara halus. | Menjamin teks respons jawaban AI PPDB ter-render tanpa lag atau glitch visual. |

---

## 7. Build (Solusi Berdasarkan Kebutuhan Bisnis)

| Layanan / Produk | Tautan Resmi | Fungsi & Penjelasan Mendalam | Peran di Al-Birru SIS |
| :--- | :--- | :--- | :--- |
| **AI Apps** | [vercel.com/solutions/ai-apps](https://vercel.com/solutions/ai-apps) | Solusi arsitektur dan panduan praktik terbaik membangun aplikasi AI generatif dan agen cerdas. | **Diterapkan** pada implementasi `/api/chat` asisten AI PPDB SD Al-Birru. |
| **Web Apps** | [vercel.com/for/web-apps](https://vercel.com/for/web-apps) | Solusi aplikasi web interaktif dinamis dengan autentikasi, database real-time, dan manajemen state. | **Diterapkan** pada portal manajemen sekolah `apps/app`. |
| **Marketing Sites** | [vercel.com/solutions/marketing-sites](https://vercel.com/solutions/marketing-sites) | Solusi situs profil dan pemasaran dengan performa Core Web Vitals sempurna (Skor 100) dan SEO kelas atas. | **Diterapkan** pada landing page publik `apps/web`. |
| **Platforms (Multi-tenant)** | [vercel.com/solutions/multi-tenant-saas](https://vercel.com/solutions/multi-tenant-saas) | Solusi arsitektur SaaS multi-tenant dengan custom domain dan subdomain dinamis untuk banyak cabang. | Dapat digunakan jika Yayasan Amal Cahaya Indonesia membuka cabang sekolah baru di kota lain. |
| **Commerce** | [vercel.com/solutions/composable-commerce](https://vercel.com/solutions/composable-commerce) | Solusi e-commerce headless berperforma tinggi berbasis Next.js Commerce. | Digunakan jika sekolah membuka toko daring seragam dan buku pelajaran santri. |
| **Platform Engineers** | [vercel.com/solutions/platform-engineering](https://vercel.com/solutions/platform-engineering) | Solusi tata kelola tim enterprise, kepatuhan arsitektur, dan standardisasi deployment otomatis. | Menjamin kepatuhan aturan monorepo dan CI/CD quality gate di GitHub Actions. |
| **Design Engineers** | [vercel.com/solutions/design-engineering](https://vercel.com/solutions/design-engineering) | Solusi untuk desainer UI/UX dan frontend engineer dengan Vercel Toolbar dan preview visual. | Menjamin presisi estetika Swiss Modernist Bento Grid di seluruh halaman sekolah. |

---

## 8. Learn (Pusat Edukasi & Dokumentasi)

| Layanan / Produk | Tautan Resmi | Fungsi & Penjelasan Mendalam | Peran di Al-Birru SIS |
| :--- | :--- | :--- | :--- |
| **Docs** | [vercel.com/docs](https://vercel.com/docs) | Dokumentasi teknis resmi terlengkap untuk seluruh produk Vercel, API, dan Next.js. | Sumber rujukan otoritatif arsitektur dan konfigurasi deployment. |
| **Blog** | [vercel.com/blog](https://vercel.com/blog) | Artikel resmi pengumuman fitur baru, riset web, dan studi teknis dari tim insinyur Vercel. | Mengetahui pembaruan teknologi terkini (React 19, Turbopack, AI). |
| **Changelog** | [vercel.com/changelog](https://vercel.com/changelog) | Catatan rilis pembaruan platform Vercel yang diperbarui setiap pekan. | Memantau rilis perbaikan fitur dan peningkatan infrastruktur Vercel. |
| **Knowledge Base** | [vercel.com/kb](https://vercel.com/kb) | Basis pengetahuan tanya-jawab solusi kendala teknis spesifik saat proses build & deploy. | Panduan troubleshooting saat menemui error domain atau cache. |
| **Academy** | [vercel.com/academy](https://vercel.com/academy) | Kursus video dan modul interaktif resmi gratis untuk menguasai Next.js dan Vercel. | Pelatihan internal bagi staf IT sekolah untuk mengelola sistem. |
| **Articles** | [vercel.com/i](https://vercel.com/i) | Tulisan teknis mendalam mengenai arsitektur web modern, caching, dan optimasi core web vitals. | Rujukan optimasi kecepatan loading website sekolah di jaringan mobile. |
| **Community** | [community.vercel.com](https://community.vercel.com/) | Forum diskusi resmi tanya jawab sesama pengembang dan komunitas Vercel global. | Tempat berdiskusi dan bertukar solusi dengan developer global. |
| **Is Agentic** | [is-agentic.com](https://is-agentic.com/) | Situs panduan, benchmarking, dan standar evaluasi arsitektur aplikasi AI agentik modern. | Rujukan evaluasi kecerdasan dan efisiensi agen AI PPDB Al-Birru. |

---

## 9. Explore (Ekosistem & Kemitraan)

| Layanan / Produk | Tautan Resmi | Fungsi & Penjelasan Mendalam | Peran di Al-Birru SIS |
| :--- | :--- | :--- | :--- |
| **Customers** | [vercel.com/customers](https://vercel.com/customers) | Portofolio studi kasus perusahaan global (OpenAI, Under Armour, eBay, Notion) di Vercel. | Bukti keandalan platform Vercel untuk menangani skala jutaan pengguna. |
| **Marketplace** | [vercel.com/marketplace](https://vercel.com/marketplace) | Integrasi satu-klik database, analitik, dan autentikasi pihak ketiga ke proyek Vercel. | **Sudah Digunakan** untuk menghubungkan Neon PostgreSQL, Sentry, dan Upstash. |
| **Templates** | [vercel.com/templates](https://vercel.com/templates) | Galeri template boilerplate resmi siap pakai untuk berbagai tipe aplikasi web modern. | Fondasi awal repo Al-Birru berasal dari template resmi Next-Forge. |
| **Partner Finder** | [vercel.com/partners/solution-partners](https://vercel.com/partners/solution-partners) | Direktori agensi dan konsultan resmi bersertifikasi mitra Vercel di seluruh dunia. | Direktori mitra jika yayasan memerlukan ekspansi sistem berskala besar. |
| **Vercel + AWS** | [vercel.com/partners/aws](https://vercel.com/partners/aws) | Kolaborasi strategis Vercel yang berjalan langsung di atas infrastruktur data center global AWS. | Menjamin keandalan uptime 99.99% dengan infrastruktur AWS Lambda & CloudFront. |

---

## 10. Company (Informasi Korporasi Vercel)

| Layanan / Produk | Tautan Resmi | Fungsi & Penjelasan Mendalam | Peran di Al-Birru SIS |
| :--- | :--- | :--- | :--- |
| **About** | [vercel.com/about](https://vercel.com/about) | Profil dan visi Vercel untuk menjadikan web lebih cepat dan menyenangkan bagi pengembang. | Memahami komitmen jangka panjang ekosistem Next.js dan Vercel. |
| **Careers** | [vercel.com/careers](https://vercel.com/careers) | Informasi lowongan kerja global di tim engineering dan operasional Vercel. | Informasi karir internasional. |
| **Press** | [vercel.com/press](https://vercel.com/press) | Siaran pers resmi, aset media kit, logo, dan rilis berita korporasi Vercel. | Sumber aset resmi logo Vercel. |
| **Events** | [vercel.com/events](https://vercel.com/events) | Informasi konferensi tahunan Next.js Conf dan pengumuman peluncuran produk Vercel Ship. | Tempat mengikuti live streaming peluncuran Next.js versi terbaru. |
| **Startups** | [vercel.com/startups](https://vercel.com/startups) | Program akselerasi, kredit cloud gratis, dan bimbingan bagi startup tahap awal. | Dapat diajukan untuk mendapatkan hibah kredit cloud untuk yayasan pendidikan. |
| **Shipped on Vercel** | [vercel.com/shipped](https://vercel.com/shipped) | Galeri showcase aplikasi-aplikasi inovatif yang dirilis dan berjalan di Vercel. | Menjadi inspirasi pengembangan fitur interaktif di portal sekolah. |
| **Open Source Program** | [vercel.com/open-source-program](https://vercel.com/open-source-program) | Program pendanaan dan sponsor Vercel untuk mendukung pembuat pustaka open-source dunia. | Dukungan Vercel terhadap ekosistem software terbuka. |
| **Enterprise** | [vercel.com/enterprise](https://vercel.com/enterprise) | Paket layanan korporasi dengan SLA 99.99%, dedicated customer success manager, dan isolasi privat. | Opsi peningkatan jika sekolah berkembang menjadi jaringan pendidikan nasional. |
| **Pricing** | [vercel.com/pricing](https://vercel.com/pricing) | Rincian paket harga: Hobby (Gratis selamanya), Pro ($20/bulan), dan Enterprise. | SD Al-Birru beroperasi secara efisien pada paket Hobby dengan biaya $0/bulan. |
| **Help** | [vercel.com/help](https://vercel.com/help) | Pusat bantuan teknis resmi dan pengajuan tiket dukungan customer service Vercel. | Saluran eskalasi jika terjadi gangguan jaringan pada server Vercel. |

---

## 11. Legal & Trust (Kepatuhan Hukum & Kepercayaan)

| Layanan / Produk | Tautan Resmi | Fungsi & Penjelasan Mendalam | Peran di Al-Birru SIS |
| :--- | :--- | :--- | :--- |
| **Privacy Policy** | [vercel.com/legal/privacy-policy](https://vercel.com/legal/privacy-policy) | Kebijakan perlindungan data pribadi pengunjung dan pengguna platform Vercel. | Menjamin pemrosesan data di Vercel mematuhi standar privasi internasional. |
| **Terms of Service** | [vercel.com/legal/terms](https://vercel.com/legal/terms) | Ketentuan penggunaan layanan cloud, batasan tanggung jawab, dan hak kekayaan intelektual. | Landasan hukum penggunaan platform cloud. |
| **Cookie Policy** | [vercel.com/legal/cookie-policy](https://vercel.com/legal/cookie-policy) | Penjelasan jenis cookie yang digunakan di domain Vercel dan tujuan pelacakannya. | Rujukan pembuatan banner privasi `<CookieConsent />` di website sekolah. |
| **DPA** | [vercel.com/legal/dpa](https://vercel.com/legal/dpa) | Adendum Pemrosesan Data resmi untuk memenuhi kepatuhan regulasi GDPR dan UU PDP Indonesia. | Bukti kepatuhan hukum yayasan dalam pemrosesan data santri di cloud. |
| **Acceptable Use Policy** | [vercel.com/legal/acceptable-use-policy](https://vercel.com/legal/acceptable-use-policy) | Batasan etika penggunaan platform (melarang phishing, malware, spam, atau konten terlarang). | Menjamin sekolah beroperasi sesuai etika digital yang bersih. |
| **Legal (All Documents)** | [vercel.com/legal](https://vercel.com/legal) | Direktori terpadu seluruh dokumen hukum, lisensi hak cipta, dan kepatuhan Vercel. | Arsip referensi legalitas cloud sekolah. |
| **Trust Center** | [security.vercel.com](https://security.vercel.com/) | Portal transparansi laporan audit keamanan pihak ketiga (SOC 2, ISO 27001, PCI-DSS). | Bukti audit keamanan resmi bagi dinas pendidikan dan dewan pembina yayasan. |
| **Status** | [vercel-status.com](https://www.vercel-status.com/) | Laman pemantauan status kesehatan server dan laporan insiden jaringan Vercel real-time. | Pemantauan operasional jika terjadi kendala jaringan global Vercel. |

---

## 12. Cookie Preferences & Media Sosial Resmi

| Layanan / Akun | Tautan Resmi | Fungsi & Penjelasan Mendalam | Peran di Al-Birru SIS |
| :--- | :--- | :--- | :--- |
| **Cookie Preferences** | - | Pengaturan interaktif izin penggunaan cookie analitik dan fungsional di situs Vercel. | Mengatur preferensi privasi sesi pengguna. |
| **GitHub** | [github.com/vercel](https://github.com/vercel) | Akun repositori open-source resmi Vercel yang menaungi Next.js, Turborepo, dan AI SDK. | Rujukan kode sumber dan rilis patch keamanan terbaru. |
| **X (Twitter)** | [x.com/vercel](https://x.com/vercel) | Akun resmi Vercel untuk siaran berita cepat, tips teknis, dan diskusi industri. | Kanal informasi tercepat seputar rilis update Next.js. |
| **LinkedIn** | [linkedin.com/company/vercel](https://linkedin.com/company/vercel) | Halaman profil korporat resmi Vercel untuk update bisnis dan kemitraan teknologi. | Kanal informasi profesional dan relasi teknologi. |
| **YouTube** | [youtube.com/@VercelHQ](https://youtube.com/@VercelHQ) | Saluran video resmi rekaman Next.js Conf, workshop developer, dan presentasi fitur. | Sumber materi visual belajar pengembangan web kelas dunia. |
| **Instagram** | [instagram.com/vercel](https://www.instagram.com/vercel/) | Akun media sosial visual Vercel seputar budaya tim developer dan event komunitas. | Dokumentasi visual komunitas teknologi. |
