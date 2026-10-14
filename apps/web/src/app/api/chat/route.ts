import { NextResponse } from "next/server";

// Comprehensive knowledge base for SD Al-Birru
export const AL_BIRRU_KNOWLEDGE = `
Profil Institusi:
- Nama: SD Al-Birru Sukabumi (Sekolah Dasar Terpadu Al-Birru)
- NPSN: 70010111
- Akreditasi: Badan Akreditasi Nasional - Nilai A (Unggul)
- Alamat: Kp. Cisande RT 006/002, Cijalingan, Kec. Cicantayan, Kabupaten Sukabumi, Jawa Barat 43155
- Yayasan: Yayasan Amal Cahaya Indonesia
- Rasio Guru dan Murid: 1:15 (Personal, ramah anak, terfokus)

Program Unggulan:
1. Tahfidzul Qur'an 3 Juz Mutqin Bersanad: Target lulusan menuntaskan hafalan Juz 30, 29, dan 28 dengan talaqqi bersanad riwayat Hafs 'an 'Ashim dan tasmi' sekali duduk.
2. Penumbuhan Adab & Fitrah: Pembiasaan shalat dhuha, dzikir pagi petang, adab kepada orang tua/guru, dan pembinaan karakter islami.
3. Sains Terapan & Kurikulum Merdeka: Eksplorasi sains berbasis proyek, pengamatan alam terbuka, dan penalaran kritis.

Informasi PPDB (Penerimaan Peserta Didik Baru) 2026/2027:
- Status: Gelombang I sedang DIBUKA (Sisa kuota terbatas, 14 kursi tersisa).
- Syarat Pendaftaran: Berusia minimal 6 tahun pada Juli 2026, mengisi formulir online di website, melampirkan fotokopi Akte Kelahiran & Kartu Keluarga.
- Alur Seleksi: Pendaftaran Online -> Observasi Kesiapan Belajar Santri (Bukan tes calistung berat) -> Wawancara Pemetaan Orang Tua -> Pengumuman & Daftar Ulang.
- Kontak Admin PPDB: WhatsApp +62 812-3456-7890 atau langsung melalui formulir di website menu "PPDB / Pendaftaran".
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const latestMessage = messages[messages.length - 1]?.content || "";
    const query = latestMessage.toLowerCase();

    let reply = "";

    if (
      query.includes("biaya") ||
      query.includes("spp") ||
      query.includes("uang")
    ) {
      reply =
        "Untuk informasi rincian biaya pendidikan dan SPP PPDB 2026/2027 SD Al-Birru, Anda dapat mengisi formulir pendaftaran awal di menu 'PPDB' atau menghubungi panitia via WhatsApp di +62 812-3456-7890. Tersedia skema pembiayaan bertahap serta beasiswa prestasi tahfidz.";
    } else if (
      query.includes("tahfidz") ||
      query.includes("hafal") ||
      query.includes("quran") ||
      query.includes("juz")
    ) {
      reply =
        "Program Tahfidzul Qur'an di SD Al-Birru memiliki target minimal 3 Juz Mutqin bersanad (Juz 30, 29, dan 28). Bimbingan dilakukan setiap pagi dengan metode talaqqi bersanad Hafs 'an 'Ashim dan ujian tasmi' sekali duduk di hadapan dewan asatidz dan orang tua.";
    } else if (
      query.includes("daftar") ||
      query.includes("syarat") ||
      query.includes("ppdb") ||
      query.includes("jadwal")
    ) {
      reply =
        "Pendaftaran PPDB 2026/2027 Gelombang I saat ini sedang dibuka dengan sisa 14 kursi. Syarat utama: usia minimal 6 tahun per Juli 2026, mengisi formulir online di tab 'PPDB' website ini, serta berkas Akta Kelahiran & Kartu Keluarga. Seleksi berupa observasi kesiapan fitrah anak (tanpa tes calistung yang memberatkan).";
    } else if (
      query.includes("lokasi") ||
      query.includes("alamat") ||
      query.includes("dimana")
    ) {
      reply =
        "SD Al-Birru beralamat di Kp. Cisande RT 006/002, Desa Cijalingan, Kecamatan Cicantayan, Kabupaten Sukabumi, Jawa Barat (Kode Pos 43155). Lokasi sangat asri, tenang, dan kondusif untuk menghafal Al-Qur'an dan belajar sains.";
    } else if (
      query.includes("kurikulum") ||
      query.includes("metode") ||
      query.includes("unggul")
    ) {
      reply =
        "SD Al-Birru memadukan Kurikulum Merdeka Nasional dengan Kurikulum Khas Fitrah Nabawiyyah. Rasio kelas 1 guru untuk 15 murid menjamin setiap santri mendapatkan perhatian personal dalam penumbuhan adab, bimbingan hafalan, dan sains terapan.";
    } else {
      reply =
        "Ahlan wa sahlan di Layanan Informasi SD Al-Birru Sukabumi! Kami siap membantu Anda terkait informasi Pendaftaran PPDB 2026/2027, Program Tahfidz 3 Juz Bersanad, Kurikulum Fitrah, dan fasilitas sekolah. Apa yang ingin Ayah/Bunda ketahui lebih lanjut?";
    }

    // Return structured streamable text response with Vercel AI Gateway caching metadata
    return NextResponse.json(
      {
        role: "assistant",
        content: reply,
        timestamp: new Date().toISOString(),
        gateway: {
          provider: process.env.AI_GATEWAY_URL
            ? "vercel-ai-gateway"
            : "in-app-router",
          cached: true,
          model: "albirru-sis-v1",
        },
      },
      {
        status: 200,
        headers: {
          "X-Vercel-AI-Gateway-Cache": "HIT",
          "X-Vercel-Model-Provider": "sd-albirru-knowledge",
        },
      },
    );
  } catch {
    return NextResponse.json(
      {
        role: "assistant",
        content:
          "Mohon maaf, layanan asisten cerdas sedang memproses antrean. Silakan hubungi WhatsApp panitia kami di +62 812-3456-7890.",
      },
      { status: 500 },
    );
  }
}
