# Kamus Istilah Multidisiplin & Bahasa Ubikuitas (GLOSSARY)

**Document Status:** Approved & Authoritative  
**Standard Compliance:** ISO/IEC/IEEE 29148:2018 (Requirements Terminology), Domain-Driven Design (Ubiquitous Language)  
**System Scope:** Seluruh Domain Pedagogi Islam, Legalitas Institusi, Arsitektur Perangkat Lunak, dan Desain Visual  
**Enforcement Level:** Kontrak Semantik Non-Negosiasi (Nol Ambiguitas Arti)  

---

## 1. Ringkasan Eksekutif & Tujuan

Dokumen ini mendefinisikan Bahasa Ubikuitas (*Ubiquitous Language*) resmi bagi **Al-Birru School Information System (`albirru-sis`)**. Setiap istilah di bawah ini memiliki makna tunggal resmi tanpa sinonim alternatif atau padanan ambigu guna memastikan keselarasan seratus persen antara pemangku kepentingan yayasan, dewan guru, orang tua murid, insinyur perangkat lunak, dan agen cerdas otonom.

---

## 2. Taksonomi Istilah Pedagogi & Nilai Islam

| Istilah Resmi | Pelafalan & Asal Kata | Definisi Baku Operasional |
| :--- | :--- | :--- |
| **Fitrah Perkembangan** | Bahasa Arab: *Fiṭrah* | Potensi bawaan suci dan keunikan bakat setiap anak yang wajib ditumbuhkan secara bertahap melalui pendidikan tanpa paksaan mekanis yang merusak fitrah keimanan dan akal. |
| **Tahfidz 3 Juz** | Bahasa Arab: *Taḥfīẓ* | Target kompetensi hafalan Al-Qur'an resmi peserta didik Sekolah Dasar Al-Birru, mencakup Juz 30, Juz 29, dan Juz 28 dengan standar kaidah tajwid dan makhraj yang fasih. |
| **Mutaba'ah Yaumiyah** | Bahasa Arab: *Mutāba'ah* | Instrumen evaluasi harian keterpaduan adab dan ibadah praktis siswa (seperti salat tepat waktu, tadarus, dan bakti kepada orang tua) yang dipantau bersama oleh guru dan wali murid. |
| **Halaqah Al-Qur'an** | Bahasa Arab: *Ḥalaqah* | Kelompok belajar Al-Qur'an intensif berskala kecil yang dipandu langsung oleh seorang ustadz pengampu demi menjamin mutaba'ah dan koreksi bacaan secara personal. |
| **Rasio Personal 1:15** | Rasio Numerik Baku | Batas proporsi maksimal kelas di mana satu orang guru mendampingi maksimal lima belas siswa guna mempertahankan pendekatan pedagogi personal dan pemantauan afektif mendalam. |
| **Adab Sebelum Ilmu** | Prinsip Tradisi Islam | Fondasi penanaman etika luhur, kejujuran, dan sopan santun yang mendahului penguasaan materi kognitif akademis. |

---

## 3. Taksonomi Istilah Legalitas & Kelembagaan

| Istilah Resmi | Otoritas Penerbit | Definisi Baku Operasional |
| :--- | :--- | :--- |
| **Yayasan Amal Cahaya Indonesia** | Badan Hukum Notaris | Lembaga hukum penyelenggara resmi yang menaungi Sekolah Dasar Al-Birru dan memegang seluruh kepemilikan kekayaan intelektual sistem. |
| **Sekolah Dasar Al-Birru** | Dinas Pendidikan Nasional | Satuan pendidikan dasar formal terakreditasi yang berkedudukan di Cicantayan, Sukabumi, Jawa Barat, Indonesia. |
| **Nomor Pokok Sekolah Nasional (`70010111`)** | Kementerian Pendidikan Nasional | Kode identifikasi tunggal resmi dari kementerian yang menyatakan status legalitas institusi pendidikan di wilayah Negara Kesatuan Republik Indonesia. |
| **Akreditasi Peringkat A** | Badan Akreditasi Nasional (BAN-PDM) | Sertifikasi pengakuan kelayakan formal mutu pendidikan tingkat tertinggi yang diraih institusi berdasarkan evaluasi delapan standar nasional pendidikan. |

---

## 4. Taksonomi Istilah Rekayasa & Transaksi Data

| Istilah Resmi | Standar Internasional | Definisi Baku Operasional |
| :--- | :--- | :--- |
| **Modern Modular Monolith** | Pola Arsitektur Perangkat Lunak | Arsitektur repositori tunggal yang memisahkan aplikasi ke dalam modul-modul mandiri (`src/modules/*`) dengan batasan isolasi tegas tanpa perantara jaringan antar-layanan mikro. |
| **RFC 9562 UUIDv7** | Satuan Tugas Rekayasa Internet (IETF) | Format identifikasi primer berbasis waktu 128-bit yang terurut secara monotonik, mencegah fragmentasi indeks basis data B-tree dan menghapus risiko kerentanan enumerasi. |
| **Penghapusan Lunak (*Soft Deletion*)** | Integritas Audit Basis Data | Aturan larangan eksekusi SQL `DELETE` fisik secara mutlak; deaktivasi data hanya dilakukan melalui pembaruan kolom logis `is_active: false`. |
| **Server Actions** | Standar Eksekusi React & Next.js | Fungsi mutasi data yang dieksekusi secara terenkripsi murni pada sisi peladen (`"use server"`), divalidasi oleh Zod, dan membungkus hasil dalam format `ActionResponse`. |
| **Konsistensi ACID** | Standar Transaksi RDBMS | Jaminan integritas basis data PostgreSQL Neon: Atomis (*Atomicity*), Konsisten (*Consistency*), Terisolasi (*Isolation*), dan Bertahan (*Durability*). |
| **Cloudflare Turnstile** | Proteksi Bot Nir-Gesekan | Teknologi verifikasi pengunjung manusia tanpa teka-teki visual (*frictionless CAPTCHA*) yang disematkan pada formulir penerimaan siswa baru. |
| **Upstash Token Bucket** | Pembatasan Laju Komputasi Tepi | Mekanisme pembatasan transmisi data berbasis Redis yang membatasi pengiriman formulir publik maksimal lima kali per lima belas menit per alamat protokol internet. |

---

## 5. Taksonomi Istilah Desain Visual & Ergonomi

| Istilah Resmi | Aliran & Standar Desain | Definisi Baku Operasional |
| :--- | :--- | :--- |
| **Swiss Modernist Bento Grid** | Gaya Internasional Swiss | Sistem kisi modular asimetris yang mengelompokkan informasi ke dalam kotak-kotak teratur dengan hierarki jelas dan keterbacaan tinggi. |
| **Geometri Ortogonal Siku 90°** | Rekayasa Estetika Datar | Penegakan sudut siku-siku mutlak (`--radius: 0`) pada seluruh kontainer dan tombol; meniadakan sudut melengkung palsu demi menghadirkan wibawa institusional. |
| **Delineasi Batas Halus (*Hairline Border 1px*)** | Topologi Datar Bersih | Penegasan batas zona antar-kartu murni menggunakan garis stroke satu piksel semantik (`border-border`) tanpa bayangan buram (*zero box-shadow*). |
| **Skala Spasial 8px** | Ergonomi Tata Ruang | Sistem penjarakan matematis yang mengunci seluruh padding, margin, dan jarak celah (*gap*) pada kelipatan bulat delapan piksel. |
| **Skala Tipografi Major Third (1.250)** | Rasio Tipografi Modular | Perkalian rasional ukuran huruf bertingkat (1.000, 1.250, 1.563, 1.953, 2.441, 3.052) yang menjaga harmoni musikal vertikal antara teks tubuh dan tajuk. |
| **Ruang Warna OKLCH Al-Birru Amber** | Standar Persepsi Warna W3C | Penggunaan ruang warna `oklch(0.769 0.188 70.08)` yang menghasilkan persepsi kontras seragam dan memenuhi standar aksesibilitas W3C WCAG 2.1 AA (minimal 4.5:1). |
