// emergency_data.js
// Patches existing cases with tindakanAwal (emergency actions)
// Also adds emergency cases missing from data.js

(function() {

// ─── EMERGENCY PATCHES FOR EXISTING CASES ───────────────────────────
const PATCHES = {
  stemi_anteroseptal: {
    tindakanAwal: {
      kondisi: "⚠️ Pasien nyeri dada hebat – Dugaan STEMI Akut",
      deskripsi: "Lakukan Primary Survey dan stabilisasi segera. Nyeri dada kiri menjalar, keringat dingin, onset 3 jam. Waktu adalah otot!",
      tindakan: [
        { opsi: "Pasang monitoring EKG 12 lead segera", benar: true },
        { opsi: "Pasang IV line 18G dan ambil darah bersamaan", benar: true },
        { opsi: "O₂ Nasal Canul 4 L/menit", benar: true },
        { opsi: "ISDN 5mg sublingual (ulangi tiap 5 menit, maks 3×)", benar: true },
        { opsi: "Aspirin 160mg dikunyah (loading dose)", benar: true },
        { opsi: "Clopidogrel 300mg oral (loading dose)", benar: true },
        { opsi: "Morfin Sulfat IV jika ISDN 3× tidak mempan", benar: true },
        { opsi: "Rujuk Sp.JP segera untuk PCI", benar: true },
        { opsi: "Berikan Atropin IV untuk mengatasi nyeri dada", benar: false, mematikan: true, pesanMati: "Atropin meningkatkan denyut jantung pada STEMI, memperburuk kebutuhan O₂ miokard. Pasien mengalami VF dan meninggal." },
        { opsi: "Beta-blocker IV segera sebelum evaluasi hemodinamik", benar: false, mematikan: true, pesanMati: "Beta-blocker IV pada STEMI dengan hemodinamik belum stabil memicu syok kardiogenik fatal." },
      ]
    }
  },
  torsio_testis: {
    tindakanAwal: {
      kondisi: "⚠️ TORSIO TESTIS – Darurat Waktu!",
      deskripsi: "Nyeri testis mendadak hebat pada remaja. Viabilitas: <6 jam >90% | 6–12 jam ~50% | >12 jam <10%. Setiap menit berarti!",
      tindakan: [
        { opsi: "Analgetik segera: Ketorolac 30mg IV", benar: true },
        { opsi: "Antiemetik: Ondansetron 4mg IV untuk mual", benar: true },
        { opsi: "Detorsi manual sementara (putar testis ke luar seperti membuka buku)", benar: true },
        { opsi: "USG Doppler Skrotum segera – GOLD STANDARD", benar: true },
        { opsi: "RUJUK SEGERA Sp. Urologi untuk orkiopeksi dalam <6–8 jam", benar: true },
        { opsi: "Kompres es pada skrotum sambil menunggu dokter", benar: false },
        { opsi: "Berikan antibiotik dan tunggu 24 jam (diagnosis epididimitis)", benar: false, mematikan: true, pesanMati: "Salah diagnosis dan menunda operasi 24 jam menyebabkan infark testis ireversibel. Testis mengalami nekrosis total dan harus diangkat." },
        { opsi: "Kompres hangat untuk melancarkan aliran darah", benar: false, mematikan: true, pesanMati: "Kompres hangat memperparah edema dan vasospasme. Testis mengalami nekrosis total akibat iskemia yang diperparah." },
      ]
    }
  },
};

// Apply patches to existing cases
Object.keys(PATCHES).forEach(id => {
  for (const cat of Object.keys(OSCE_DATA.cases)) {
    const c = OSCE_DATA.cases[cat].find(c => c.id === id);
    if (c) Object.assign(c, PATCHES[id]);
  }
});

// ─── NEW EMERGENCY CASES ─────────────────────────────────────────────

const NEW_EMERGENCY_CASES = {
  endokrin: [
    {
      id: "hipoglikemia_berat",
      judulKasus: "Pasien dewasa dengan riwayat DM ditemukan tidak sadarkan diri, tangan berkeringat dingin dan gemetar",
      nama: "Hipoglikemia Berat (3B) – GAWAT DARURAT",
      identitas: "Pasien, dewasa, riwayat DM dengan insulin",
      keluhanUtama: "Penurunan kesadaran mendadak",
      tindakanAwal: {
        kondisi: "⚠️ Pasien tidak sadarkan diri – HIPOGLIKEMIA BERAT",
        deskripsi: "GDS sangat rendah (<54 mg/dL). Tanda neuroglikopenia berat: kejang, penurunan kesadaran. Jangan beri apapun lewat mulut!",
        tindakan: [
          { opsi: "Cek GDS segera dengan glucometer", benar: true },
          { opsi: "JANGAN beri apapun per oral (risiko aspirasi)", benar: true },
          { opsi: "Pasang IV line besar (18G) dan ambil darah", benar: true },
          { opsi: "Berikan D40% 50 mL IV bolus pelan", benar: true },
          { opsi: "Lanjutkan infus D10% setelah bolus D40%", benar: true },
          { opsi: "Cek GDS ulang 15 menit setelah tindakan", benar: true },
          { opsi: "Glukagon 1 mg IM/SC (alternatif jika akses IV tidak ada)", benar: true },
          { opsi: "Berikan insulin reguler – GDS tidak terbaca berarti hiperglikemia", benar: false, mematikan: true, pesanMati: "Pemberian insulin pada hipoglikemia berat menyebabkan penurunan GDS yang fatal. Pasien mengalami henti jantung dan meninggal." },
          { opsi: "Berikan glukosa oral langsung meskipun tidak sadar", benar: false, mematikan: true, pesanMati: "Memberikan cairan oral pada pasien tidak sadar menyebabkan aspirasi masif. Pasien mengalami aspiration pneumonia dan gagal napas fatal." },
        ]
      },
      anamnesis: {
        signifikan: [
          { pertanyaan: "Apakah pasien punya riwayat DM?", temuan: "Ya, DM tipe 1/2 dengan terapi insulin atau sulfonil urea" },
          { pertanyaan: "Apakah pasien sudah makan sebelumnya?", temuan: "Lupa makan setelah injeksi insulin / olahraga berlebih" },
          { pertanyaan: "Apa obat yang digunakan sekarang?", temuan: "Insulin reguler / glibenklamid (sulfonil urea)" },
          { pertanyaan: "Kapan gejala pertama muncul?", temuan: "Tiba-tiba lemas, gemetar, keringat dingin, lalu tidak sadar" },
          { pertanyaan: "Apakah ada riwayat hipoglikemia sebelumnya?", temuan: "Pernah hipoglikemia ringan sebelumnya" },
          { pertanyaan: "Apakah ada konsumsi alkohol?", temuan: "Konsumsi alkohol tanpa makan → faktor risiko hipoglikemia" },
        ],
        nonSignifikan: [
          { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
          { pertanyaan: "Apakah ada riwayat kejang sebelumnya?", temuan: "Tidak ada riwayat epilepsi" },
          { pertanyaan: "Apakah ada nyeri dada atau sesak?", temuan: "Tidak ada" },
        ]
      },
      pemeriksaanFisik: {
        vitalSign: [
          { nama: "GCS", temuan: "Menurun (somnolen–koma)", signifikan: true },
          { nama: "Tekanan Darah", temuan: "Normal atau sedikit meningkat (stres)", signifikan: false },
          { nama: "Nadi", temuan: "Takikardia (respons simpatis)", signifikan: true },
          { nama: "RR", temuan: "Normal", signifikan: false },
          { nama: "Suhu", temuan: "Normal", signifikan: false },
        ],
        inspeksiKepala: [{ nama: "Inspeksi Kepala & Kulit", temuan: "Pucat, berkeringat dingin, lembab", signifikan: true }],
        inspeksiLeher: [{ nama: "Inspeksi Leher", temuan: "Dalam batas normal", signifikan: false }],
        inspeksiThorax: [{ nama: "Auskultasi Paru & Jantung", temuan: "Dalam batas normal", signifikan: false }],
        inspeksiAbdomen: [{ nama: "Inspeksi Abdomen", temuan: "Dalam batas normal", signifikan: false }],
        inspeksiEkstremitas: [{ nama: "Akral & CRT", temuan: "Akral dingin, CRT melambat", signifikan: true }],
        signKhas: [
          { nama: "Pemeriksaan Neurologis", temuan: "Tremor, bisa ada kejang, defisit fokal jarang", signifikan: true },
          { nama: "GDS (Bedside)", temuan: "GDS <54 mg/dL – konfirmasi hipoglikemia berat", signifikan: true },
        ],
        distraksi: [
          { nama: "Tanda meningeal", temuan: "Negatif (menyingkirkan meningitis)", signifikan: false },
          { nama: "Pupil", temuan: "Isokor, reaktif", signifikan: false },
        ]
      },
      penunjang: {
        standardAwal: [
          { nama: "Darah Lengkap", temuan: "Dalam batas normal", signifikan: false },
          { nama: "Urinalisis", temuan: "Dalam batas normal", signifikan: false },
          { nama: "EKG", temuan: "Sinus takikardia", signifikan: false },
          { nama: "USG", temuan: "Tidak diperlukan akut", signifikan: false },
          { nama: "Rontgen", temuan: "Tidak diperlukan akut", signifikan: false },
        ],
        khas: [
          { nama: "GDS (Bedside/Lab)", temuan: "<54 mg/dL – HIPOGLIKEMIA BERAT", signifikan: true },
          { nama: "HbA1c (setelah stabil)", temuan: "Evaluasi kontrol glikemik jangka panjang", signifikan: true },
          { nama: "Fungsi Ginjal (Kreatinin/Ureum)", temuan: "Evaluasi gagal ginjal sebagai penyebab hipoglikemia berkepanjangan", signifikan: false },
          { nama: "Fungsi Hati (SGOT/SGPT)", temuan: "Evaluasi gangguan glukogeogenesis hati", signifikan: false },
        ],
        distraksi: [
          { nama: "AGD", temuan: "Tidak ada asidosis (beda dengan KAD)", signifikan: false },
          { nama: "CT Scan Kepala", temuan: "Tidak diperlukan jika hipoglikemia terkonfirmasi", signifikan: false },
        ]
      },
      dd: ["Hipoglikemia Berat", "Stroke", "Epilepsi", "Intoksikasi Alkohol/Obat", "Hipoglikemia Factitious"],
      diagnosisKerja: "Hipoglikemia Berat (GDS <54 mg/dL dengan gejala neuroglikopenia)",
      tatalaksana: [
        { opsi: "D40% 50 mL IV bolus pelan, lanjutkan D10% drip", benar: true },
        { opsi: "Cek GDS setiap 15 menit, ulangi D40% jika GDS <70 mg/dL", benar: true },
        { opsi: "Setelah GDS >100 + sadar → berikan makanan karbohidrat kompleks", benar: true },
        { opsi: "Identifikasi dan tatalaksana faktor pencetus", benar: true },
        { opsi: "Sesuaikan dosis OAD/insulin agar tidak berulang", benar: true },
        { opsi: "Glukagon 1 mg IM/SC jika tidak ada akses IV", benar: true },
        { opsi: "Berikan insulin tambahan untuk 'normalisasi'", benar: false },
        { opsi: "Tidak perlu tindakan karena pasien sudah tidak kejang", benar: false },
      ],
      edukasi: [
        { opsi: "Selalu bawa sumber gula cepat (tablet glukosa, permen, gula sachet)", benar: true },
        { opsi: "Makan teratur setelah injeksi insulin; jangan skip makan", benar: true },
        { opsi: "Ajarkan keluarga cara mengenali dan menangani hipoglikemia", benar: true },
        { opsi: "Cek GDS sebelum olahraga; konsumsi karbo jika GDS <126 mg/dL", benar: true },
        { opsi: "Evaluasi target GDS bersama dokter – mungkin terlalu ketat", benar: true },
        { opsi: "Hipoglikemia tidak berbahaya, tidak perlu khawatir", benar: false },
        { opsi: "Boleh hentikan insulin jika sering hipoglikemia", benar: false },
      ]
    },
    {
      id: "kad",
      judulKasus: "Pasien DM dewasa datang dengan keluhan mual-muntah hebat, napas seperti Kussmaul, dan kesadaran menurun",
      nama: "Ketoasidosis Diabetikum (KAD) – GAWAT DARURAT",
      identitas: "Pasien DM, dewasa, dengan mual-muntah dan penurunan kesadaran",
      keluhanUtama: "Mual-muntah, napas cepat-dalam, bau mulut buah",
      tindakanAwal: {
        kondisi: "⚠️ Pasien somnolen – KETOASIDOSIS DIABETIKUM",
        deskripsi: "Trias KAD: GDS >250, pH <7.3, keton (+). Pasien napas Kussmaul, napas bau aseton. Stabilisasi segera!",
        tindakan: [
          { opsi: "Pasang IV line besar dan ambil darah (GDS, AGD, elektrolit, keton)", benar: true },
          { opsi: "Infus NaCl 0.9% 1 L dalam 1 jam pertama (15–20 mL/kg/jam)", benar: true },
          { opsi: "Pasang kateter urin, pantau urine output 0.5 mL/kg/jam", benar: true },
          { opsi: "CEK KALIUM sebelum memulai insulin", benar: true },
          { opsi: "Koreksi K+ jika <3.5 mEq/L sebelum insulin", benar: true },
          { opsi: "Monitor GDS tiap 1 jam, AGD tiap 2–4 jam", benar: true },
          { opsi: "Mulai drip insulin reguler 0.1 unit/kg/jam SETELAH K+ >3.5", benar: true },
          { opsi: "Berikan insulin bolus IV langsung tanpa cek kalium", benar: false, mematikan: true, pesanMati: "Insulin sebelum koreksi hipokalemia menyebabkan hipokalemia berat akibat shift K⁺ ke intrasel. Aritmia fatal dan pasien meninggal." },
          { opsi: "Berikan Metformin oral untuk turunkan GDS", benar: false, mematikan: true, pesanMati: "Metformin pada KAD menyebabkan asidosis laktat yang memperparah asidosis metabolik. Pasien mengalami multiorgan failure dan meninggal." },
        ]
      },
      anamnesis: {
        signifikan: [
          { pertanyaan: "Apakah ada riwayat DM?", temuan: "Ya, DM Tipe 1 (umumnya) atau DM Tipe 2 lanjut" },
          { pertanyaan: "Apakah ada mual-muntah sejak beberapa hari?", temuan: "Mual dan muntah hebat sejak 1–3 hari" },
          { pertanyaan: "Apakah ada nyeri perut?", temuan: "Nyeri perut difus (menyerupai abdomen akut)" },
          { pertanyaan: "Apakah napas terasa cepat dan dalam?", temuan: "Napas cepat-dalam (Kussmaul), bau buah/aseton" },
          { pertanyaan: "Apakah ada faktor pencetus (infeksi, lupa insulin)?", temuan: "Lupa injeksi insulin / infeksi / alkohol" },
          { pertanyaan: "Apakah konsumsi alkohol?", temuan: "Bisa menjadi faktor pencetus" },
        ],
        nonSignifikan: [
          { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
          { pertanyaan: "Apakah ada riwayat penyakit ginjal?", temuan: "Tidak ada riwayat penyakit ginjal" },
          { pertanyaan: "Apakah ada sesak napas?", temuan: "Napas cepat (Kussmaul) bukan sesak karena paru" },
        ]
      },
      pemeriksaanFisik: {
        vitalSign: [
          { nama: "GCS", temuan: "Menurun (somnolen–koma pada kasus berat)", signifikan: true },
          { nama: "Tekanan Darah", temuan: "Hipotensi (dehidrasi berat)", signifikan: true },
          { nama: "Nadi", temuan: "Takikardia", signifikan: true },
          { nama: "RR", temuan: "Cepat & dalam – pernapasan Kussmaul", signifikan: true },
          { nama: "Suhu", temuan: "Normal atau demam jika ada infeksi", signifikan: false },
        ],
        inspeksiKepala: [
          { nama: "Inspeksi Kepala", temuan: "Mata cekung (dehidrasi), mukosa kering", signifikan: true },
        ],
        inspeksiLeher: [{ nama: "Inspeksi Leher", temuan: "Dalam batas normal", signifikan: false }],
        inspeksiThorax: [
          { nama: "Pola Napas", temuan: "Napas Kussmaul: cepat, dalam, teratur – khas asidosis metabolik", signifikan: true },
          { nama: "Bau Mulut", temuan: "Bau aseton (seperti buah/cat kuku)", signifikan: true },
        ],
        inspeksiAbdomen: [
          { nama: "Palpasi Abdomen", temuan: "Nyeri tekan difus (pseudoperitonitis KAD)", signifikan: true },
        ],
        inspeksiEkstremitas: [
          { nama: "Turgor Kulit & Akral", temuan: "Turgor menurun, akral kering, dehidrasi berat", signifikan: true },
        ],
        signKhas: [
          { nama: "GDS Bedside", temuan: ">250 mg/dL (sering 300–600)", signifikan: true },
          { nama: "Keton Urin", temuan: "Positif kuat (+++) – khas KAD", signifikan: true },
        ],
        distraksi: [
          { nama: "Tanda peritoneal", temuan: "Bisa positif palsu (pseudoperitonitis KAD)", signifikan: false },
          { nama: "Pemeriksaan Neurologi", temuan: "Bervariasi sesuai derajat asidosis", signifikan: false },
        ]
      },
      penunjang: {
        standardAwal: [
          { nama: "Darah Lengkap", temuan: "Leukositosis (stres metabolik, bukan selalu infeksi)", signifikan: false },
          { nama: "Urinalisis + Keton Urin", temuan: "Keton (+++) – konfirmasi KAD", signifikan: true },
          { nama: "EKG", temuan: "Evaluasi tanda hiper/hipokalemia", signifikan: true },
          { nama: "USG Abdomen", temuan: "Jika dicurigai penyebab intraabdomen", signifikan: false },
          { nama: "Rontgen Thorax", temuan: "Cari fokus infeksi pencetus", signifikan: false },
        ],
        khas: [
          { nama: "GDS", temuan: ">250 mg/dL (bisa >600)", signifikan: true },
          { nama: "AGD (Analisis Gas Darah)", temuan: "pH <7.3 | HCO3 <18 mEq/L | Anion Gap meningkat >12", signifikan: true },
          { nama: "Kalium Serum", temuan: "Bisa normal/tinggi awalnya tapi total body K+ depleted", signifikan: true },
          { nama: "Beta-hidroksibutirat", temuan: ">3 mmol/L – konfirmasi ketoasidosis", signifikan: true },
          { nama: "Ureum/Kreatinin", temuan: "Meningkat (gagal ginjal prerenal)", signifikan: true },
        ],
        distraksi: [
          { nama: "Lipase/Amilase", temuan: "Bisa meningkat palsu pada KAD", signifikan: false },
          { nama: "D-Dimer", temuan: "Tidak relevan untuk diagnosis KAD", signifikan: false },
        ]
      },
      dd: ["KAD", "HHS/HHNK", "Asidosis Laktat", "Gastroenteritis Akut", "Abdomen Akut"],
      diagnosisKerja: "Ketoasidosis Diabetikum (GDS >250 + pH <7.3 + HCO3 <18 + Keton positif)",
      tatalaksana: [
        { opsi: "Cairan: NaCl 0.9% 1 L/jam × 2 jam, lalu 500 mL/jam", benar: true },
        { opsi: "Insulin reguler IV 0.1 unit/kg/jam setelah K+ >3.5", benar: true },
        { opsi: "Koreksi Kalium sesuai kadar (KCl 20–40 mEq/L cairan)", benar: true },
        { opsi: "Monitor GDS tiap jam; jika <250 ganti ke D5%", benar: true },
        { opsi: "Cari dan atasi faktor pencetus (infeksi → antibiotik empiris)", benar: true },
        { opsi: "Transisi ke insulin SC saat pasien bisa makan, GDS <200", benar: true },
        { opsi: "Langsung berikan insulin tanpa koreksi cairan dan kalium", benar: false },
        { opsi: "Koreksi bikarbonat rutin meski pH 7.2", benar: false },
      ],
      edukasi: [
        { opsi: "Insulin TIDAK boleh dihentikan meski sedang sakit/tidak mau makan", benar: true },
        { opsi: "Sick day rules: cek GDS lebih sering, cek keton urin, minum banyak", benar: true },
        { opsi: "Kenali tanda awal KAD: mual-muntah, napas bau aseton → segera ke IGD", benar: true },
        { opsi: "Simpan insulin dengan benar (kulkas 2–8°C)", benar: true },
        { opsi: "Jika muntah, boleh hentikan insulin sementara", benar: false },
        { opsi: "KAD hanya terjadi pada DM Tipe 1", benar: false },
      ]
    }
  ],
  kardio: [
    {
      id: "syok_perdarahan",
      judulKasus: "Pasien dewasa pasca kecelakaan dengan perdarahan aktif di tungkai, akral dingin, dan tekanan darah turun",
      nama: "Syok Perdarahan – Laserasi A. Femoralis (3B) – GAWAT DARURAT",
      identitas: "Pasien, dewasa, post-trauma dengan perdarahan aktif",
      keluhanUtama: "Perdarahan masif pada paha, tidak sadarkan diri",
      tindakanAwal: {
        kondisi: "⚠️ Pasien tidak sadarkan diri – SYOK PERDARAHAN MASIF",
        deskripsi: "Laserasi arteri femoralis dengan perdarahan aktif. Hipotensi berat, takikardi, pucat. Segera hentikan perdarahan!",
        tindakan: [
          { opsi: "Tekan langsung luka dengan kasa steril (direct pressure)", benar: true },
          { opsi: "Pasang tourniquet proksimal dari luka", benar: true },
          { opsi: "Pasang 2 IV line besar (14-16G), bolus kristaloid cepat", benar: true },
          { opsi: "Transfusi packed red cell segera (O negatif jika darurat)", benar: true },
          { opsi: "O₂ Non-rebreather mask 10–15 L/menit", benar: true },
          { opsi: "Pantau vital sign tiap 5 menit", benar: true },
          { opsi: "Siapkan FFP (Fresh Frozen Plasma) 1:1 dengan PRC", benar: true },
          { opsi: "Rujuk bedah vaskuler segera untuk hemostasis definitif", benar: true },
          { opsi: "Berikan Warfarin IV untuk mencegah trombus pada luka", benar: false, mematikan: true, pesanMati: "Pemberian antikoagulan pada perdarahan aktif memperparah perdarahan secara fatal. Pasien mengalami exsanguinasi dan meninggal." },
          { opsi: "Tunggu hasil lab lengkap sebelum transfusi", benar: false, mematikan: true, pesanMati: "Menunggu lab pada syok hemoragik masif adalah kontraindikasi. Pasien meninggal sebelum transfusi sempat diberikan." },
        ]
      },
      anamnesis: {
        signifikan: [
          { pertanyaan: "Bagaimana mekanisme trauma?", temuan: "Trauma tajam/tumpul pada paha (kecelakaan / tusukan)" },
          { pertanyaan: "Sudah berapa lama perdarahan berlangsung?", temuan: "Perdarahan sejak beberapa menit/jam" },
          { pertanyaan: "Apakah ada riwayat pengencer darah?", temuan: "Tidak / ya (penting untuk resusitasi)" },
          { pertanyaan: "Apakah ada penyakit darah atau koagulopati?", temuan: "Tidak ada riwayat hemofilia" },
          { pertanyaan: "Berapa estimasi volume darah yang keluar?", temuan: "Perdarahan masif (>1.5L)" },
        ],
        nonSignifikan: [
          { pertanyaan: "Apakah ada alergi?", temuan: "Tidak ada alergi diketahui" },
          { pertanyaan: "Apakah ada riwayat operasi sebelumnya?", temuan: "Tidak ada" },
          { pertanyaan: "Apakah ada mual atau muntah?", temuan: "Tidak ada" },
        ]
      },
      pemeriksaanFisik: {
        vitalSign: [
          { nama: "Tekanan Darah", temuan: "<90/60 mmHg – HIPOTENSI BERAT", signifikan: true },
          { nama: "Nadi", temuan: ">120x/menit (takikardia kompensasi)", signifikan: true },
          { nama: "RR", temuan: ">20x/menit (takipnea)", signifikan: true },
          { nama: "GCS", temuan: "Menurun (syok berat)", signifikan: true },
        ],
        inspeksiKepala: [{ nama: "Inspeksi Wajah", temuan: "Pucat, diaphoresis", signifikan: true }],
        inspeksiLeher: [{ nama: "JVP", temuan: "JVP menurun (syok hipovolemik)", signifikan: true }],
        inspeksiThorax: [{ nama: "Auskultasi", temuan: "Dalam batas normal", signifikan: false }],
        inspeksiAbdomen: [{ nama: "Inspeksi Abdomen", temuan: "Dalam batas normal", signifikan: false }],
        inspeksiEkstremitas: [
          { nama: "Luka & Perdarahan", temuan: "Laserasi besar pada paha dengan perdarahan aktif pulsatif (arteri)", signifikan: true },
          { nama: "Akral & CRT", temuan: "Akral dingin, CRT >3 detik, pucat", signifikan: true },
        ],
        signKhas: [
          { nama: "Estimasi Kehilangan Darah", temuan: "Kelas III–IV: >30% volume darah", signifikan: true },
        ],
        distraksi: [
          { nama: "Refleks Neurologis", temuan: "Bervariasi sesuai perfusi otak", signifikan: false },
        ]
      },
      penunjang: {
        standardAwal: [
          { nama: "Darah Lengkap + Crossmatch", temuan: "Hb turun, Hct turun – segera siapkan transfusi", signifikan: true },
          { nama: "Urinalisis", temuan: "Oliguria (perfusi ginjal menurun)", signifikan: true },
          { nama: "EKG", temuan: "Sinus takikardia", signifikan: false },
          { nama: "USG FAST", temuan: "Evaluasi perdarahan internal abdomen", signifikan: true },
          { nama: "Rontgen Pelvis AP", temuan: "Evaluasi fraktur pelvis sebagai sumber perdarahan", signifikan: true },
        ],
        khas: [
          { nama: "PT/APTT", temuan: "Memanjang pada koagulopati", signifikan: true },
          { nama: "Fibrinogen", temuan: "Menurun (DIC)", signifikan: true },
          { nama: "Laktat Serum", temuan: "Meningkat (hipoperfusi)", signifikan: true },
        ],
        distraksi: [
          { nama: "D-Dimer", temuan: "Meningkat (DIC vs PE)", signifikan: false },
          { nama: "Troponin", temuan: "Tidak relevan utama", signifikan: false },
        ]
      },
      dd: ["Syok Hemoragik", "Syok Kardiogenik", "Syok Septik", "Syok Neurogenik"],
      diagnosisKerja: "Syok Hemoragik Grade III–IV ec Laserasi A. Femoralis",
      tatalaksana: [
        { opsi: "Hemostasis mekanik: direct pressure + tourniquet", benar: true },
        { opsi: "Resusitasi cairan: 2 jalur IV + kristaloid hangat", benar: true },
        { opsi: "Transfusi PRC + FFP rasio 1:1", benar: true },
        { opsi: "Target: TD >90 mmHg, HR <100x/menit", benar: true },
        { opsi: "Rujuk segera bedah vaskuler untuk hemostasis definitif", benar: true },
        { opsi: "Asam traneksamat (TXA) dalam 3 jam dari trauma", benar: true },
        { opsi: "Beri morfin untuk mengurangi rasa sakit pasien syok", benar: false },
        { opsi: "Cairan koloid saja sudah cukup tanpa transfusi", benar: false },
      ],
      edukasi: [
        { opsi: "Selalu pakai helm dan pelindung diri saat berkendara", benar: true },
        { opsi: "Pertolongan pertama: tekan langsung luka sebelum ambulans tiba", benar: true },
        { opsi: "Kontrol rutin untuk evaluasi pemulihan luka operasi", benar: true },
        { opsi: "Rehabilitasi fisik setelah fase akut", benar: true },
        { opsi: "Tidak perlu ke RS jika perdarahan sudah terlihat berhenti", benar: false },
      ]
    }
  ],
  respirasi: [
    {
      id: "efusi_pleura_masif",
      judulKasus: "Pasien dewasa datang dengan sesak napas berat yang progresif, tidak mampu berbaring datar, dan suara napas menghilang di satu sisi",
      nama: "Efusi Pleura Masif – GAWAT DARURAT",
      identitas: "Pasien dewasa, sesak progresif berat",
      keluhanUtama: "Sesak napas berat mendadak, tidak bisa berbaring",
      tindakanAwal: {
        kondisi: "⚠️ Pasien sesak berat – EFUSI PLEURA MASIF",
        deskripsi: "Respiratory distress berat. SpO₂ <90%. Tidak bisa berbaring. Perlu dekompresi segera sebelum anamnesis lengkap.",
        tindakan: [
          { opsi: "O₂ Non-rebreather mask 10–15 L/menit segera", benar: true },
          { opsi: "Posisi semi-Fowler (60–90 derajat)", benar: true },
          { opsi: "Monitor SpO₂ dan TTV ketat", benar: true },
          { opsi: "Pasang IV line dan ambil darah untuk lab", benar: true },
          { opsi: "Torakosentesis (pungsi pleura) – diagnostik dan terapeutik", benar: true },
          { opsi: "Rujuk Sp. Paru atau bedah toraks", benar: true },
          { opsi: "Berbaring terlentang untuk beristirahat", benar: false, mematikan: true, pesanMati: "Membaringkan pasien pada efusi masif menyebabkan gagal napas progresif akibat kolaps paru. Pasien mengalami henti napas dan meninggal." },
          { opsi: "Berikan morfin untuk mengurangi sesak", benar: false, mematikan: true, pesanMati: "Morfin menekan drive pernapasan pada pasien dengan efusi masif. Pasien mengalami apnea dan meninggal." },
          { opsi: "Bronkodilator nebulizer sebagai terapi utama", benar: false },
        ]
      },
      anamnesis: {
        signifikan: [
          { pertanyaan: "Sudah berapa lama sesak berlangsung?", temuan: "Sesak progresif sejak beberapa hari/minggu" },
          { pertanyaan: "Apakah sesak memburuk saat berbaring?", temuan: "Ya, sesak sangat berat saat berbaring (orthopnea)" },
          { pertanyaan: "Apakah ada nyeri dada saat napas?", temuan: "Bisa ada nyeri pleuritik" },
          { pertanyaan: "Apakah ada riwayat keganasan atau TB?", temuan: "Riwayat kanker paru / TB / CHF" },
          { pertanyaan: "Apakah ada demam?", temuan: "Demam (efusi parapneumonik / empyema)" },
          { pertanyaan: "Apakah ada penurunan berat badan?", temuan: "BB turun (keganasan)" },
        ],
        nonSignifikan: [
          { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
          { pertanyaan: "Apakah ada mual atau muntah?", temuan: "Tidak ada" },
          { pertanyaan: "Apakah ada konsumsi alkohol?", temuan: "Tidak ada" },
        ]
      },
      pemeriksaanFisik: {
        vitalSign: [
          { nama: "SpO₂", temuan: "<90% (hipoksemia berat)", signifikan: true },
          { nama: "RR", temuan: ">30x/menit (takipnea berat)", signifikan: true },
          { nama: "Nadi", temuan: "Takikardia", signifikan: true },
          { nama: "Tekanan Darah", temuan: "Bisa normal atau menurun", signifikan: false },
        ],
        inspeksiKepala: [{ nama: "Inspeksi Wajah", temuan: "Sianosis perifer/sentral, distress berat", signifikan: true }],
        inspeksiLeher: [{ nama: "Trakea", temuan: "Trakea terdorong ke sisi kontralateral (masif)", signifikan: true }],
        inspeksiThorax: [
          { nama: "Inspeksi Dada", temuan: "Pergerakan dada asimetris, sisi sakit tertinggal", signifikan: true },
          { nama: "Palpasi Fremitus", temuan: "Fremitus MENURUN/HILANG di sisi efusi", signifikan: true },
          { nama: "Perkusi Paru", temuan: "REDUP/PEKAK di sisi efusi", signifikan: true },
          { nama: "Auskultasi Paru", temuan: "Suara napas MENGHILANG di sisi efusi", signifikan: true },
        ],
        inspeksiAbdomen: [{ nama: "Inspeksi Abdomen", temuan: "Dalam batas normal", signifikan: false }],
        inspeksiEkstremitas: [{ nama: "Edema", temuan: "Bisa ada edema bilateral (CHF)", signifikan: false }],
        signKhas: [
          { nama: "Egofoni", temuan: "Suara kambing di batas cairan", signifikan: true },
        ],
        distraksi: [
          { nama: "Pemeriksaan Abdomen", temuan: "Dalam batas normal", signifikan: false },
        ]
      },
      penunjang: {
        standardAwal: [
          { nama: "Darah Lengkap", temuan: "Leukositosis (parapneumonik/empyema)", signifikan: false },
          { nama: "Urinalisis", temuan: "Dalam batas normal", signifikan: false },
          { nama: "EKG", temuan: "Sinus takikardia, deviasi axis", signifikan: false },
          { nama: "USG Thorax", temuan: "Konfirmasi dan panduan torakosentesis – GOLD STANDARD panduan", signifikan: true },
          { nama: "Rontgen Thorax PA/AP", temuan: "White out sisi sakit; opasitas homogen; trakea terdorong", signifikan: true },
        ],
        khas: [
          { nama: "Analisis Cairan Pleura (Light Criteria)", temuan: "Transudat vs Eksudat", signifikan: true },
          { nama: "Sitologi Cairan Pleura", temuan: "Sel ganas jika keganasan", signifikan: true },
          { nama: "Kultur Cairan Pleura", temuan: "Positif pada empyema", signifikan: false },
        ],
        distraksi: [
          { nama: "D-Dimer", temuan: "Tidak spesifik untuk efusi pleura", signifikan: false },
          { nama: "CT Scan Thorax", temuan: "Evaluasi lebih lanjut setelah stabil", signifikan: false },
        ]
      },
      dd: ["Efusi Pleura Masif", "Pneumonia Masif", "Atelektasis Masif", "Hemothorax"],
      diagnosisKerja: "Efusi Pleura Masif",
      tatalaksana: [
        { opsi: "Torakosentesis untuk drainase cairan segera", benar: true },
        { opsi: "O₂ untuk menjaga SpO₂ >95%", benar: true },
        { opsi: "WSD jika efusi berulang atau empyema", benar: true },
        { opsi: "Tatalaksana penyakit dasar (CHF → diuretik; TB → OAT)", benar: true },
        { opsi: "Rujuk Sp. Paru untuk evaluasi lanjut", benar: true },
        { opsi: "Antibiotik empiris jika dicurigai empyema", benar: true },
        { opsi: "Berikan bronkodilator karena efusi dikira asma", benar: false },
        { opsi: "Bed rest tanpa drainase akan membaik sendiri", benar: false },
      ],
      edukasi: [
        { opsi: "Kontrol rutin untuk evaluasi cairan pleura", benar: true },
        { opsi: "Tatalaksana penyakit dasar penting mencegah rekurensi", benar: true },
        { opsi: "Kenali tanda sesak memburuk → segera ke IGD", benar: true },
        { opsi: "Efusi pleura bisa berulang jika penyebab tidak diatasi", benar: true },
        { opsi: "Sesak sudah membaik = sembuh total, tidak perlu kontrol", benar: false },
      ]
    },
    {
      id: "pneumothorax",
      judulKasus: "Pasien muda datang dengan sesak napas tiba-tiba mendadak, nyeri dada satu sisi, dan trakea terasa tertarik",
      nama: "Tension Pneumothorax – GAWAT DARURAT",
      identitas: "Pasien muda, sesak mendadak pasca trauma/spontan",
      keluhanUtama: "Sesak napas mendadak sangat berat, nyeri dada",
      tindakanAwal: {
        kondisi: "⚠️ Pasien sesak mendadak – TENSION PNEUMOTHORAX",
        deskripsi: "Sesak berat mendadak. Tidak ada suara napas satu sisi. Trakea terdorong. Hipotensi. JVP meningkat. DARURAT MUTLAK – jangan tunda!",
        tindakan: [
          { opsi: "Needle decompression SEGERA: jarum 14G di ICS 2 MCL sisi kolaps", benar: true },
          { opsi: "O₂ Non-rebreather mask 10–15 L/menit", benar: true },
          { opsi: "Pasang IV line untuk akses vena", benar: true },
          { opsi: "WSD (Water Seal Drainage) definitif setelah needle decompression", benar: true },
          { opsi: "Monitor vital sign ketat", benar: true },
          { opsi: "Rujuk bedah thorax segera", benar: true },
          { opsi: "Tunggu hasil rontgen thorax sebelum tindakan", benar: false, mematikan: true, pesanMati: "Tension pneumothorax adalah darurat klinis murni. Menunggu rontgen pada pasien sekarat menyebabkan kematian dalam hitungan menit akibat kolaps kardiovaskuler." },
          { opsi: "Berikan antibiotik dulu karena dicurigai pneumonia", benar: false, mematikan: true, pesanMati: "Antibiotik tidak berguna untuk tension pneumothorax. Pasien meninggal akibat gagal jantung dan napas yang tidak didekompresi." },
          { opsi: "Chest tube di ICS 5 mid-aksiler line (definitif)", benar: true },
        ]
      },
      anamnesis: {
        signifikan: [
          { pertanyaan: "Kapan dan bagaimana sesak mulai?", temuan: "Sesak mendadak sangat berat" },
          { pertanyaan: "Apakah ada trauma dada sebelumnya?", temuan: "Trauma tumpul/tajam atau spontan (perawakan tinggi-kurus)" },
          { pertanyaan: "Apakah ada nyeri dada?", temuan: "Nyeri dada tajam yang menjalar" },
          { pertanyaan: "Apakah pernah serupa sebelumnya?", temuan: "Spontaneous pneumothorax bisa rekuren" },
          { pertanyaan: "Apakah ada riwayat PPOK atau asma?", temuan: "Faktor risiko pneumothorax sekunder" },
        ],
        nonSignifikan: [
          { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
          { pertanyaan: "Apakah ada demam?", temuan: "Tidak ada demam" },
          { pertanyaan: "Apakah ada batuk darah?", temuan: "Tidak ada" },
        ]
      },
      pemeriksaanFisik: {
        vitalSign: [
          { nama: "SpO₂", temuan: "<90% (hipoksemia berat)", signifikan: true },
          { nama: "Tekanan Darah", temuan: "Hipotensi (tension → kolaps kardiovaskuler)", signifikan: true },
          { nama: "Nadi", temuan: "Takikardia > 120x/menit", signifikan: true },
          { nama: "RR", temuan: "Takipnea berat >30x/menit", signifikan: true },
        ],
        inspeksiKepala: [{ nama: "Inspeksi Wajah", temuan: "Sianosis, distress berat", signifikan: true }],
        inspeksiLeher: [
          { nama: "Trakea", temuan: "Deviasi trakea ke kontralateral (tanda tension)", signifikan: true },
          { nama: "JVP", temuan: "JVP MENINGKAT (tekanan intratoraks tinggi)", signifikan: true },
        ],
        inspeksiThorax: [
          { nama: "Inspeksi Dada", temuan: "Dada sisi sakit diam/tidak bergerak", signifikan: true },
          { nama: "Perkusi", temuan: "HIPERSONOR sisi pneumothorax", signifikan: true },
          { nama: "Auskultasi", temuan: "Suara napas HILANG sisi pneumothorax", signifikan: true },
        ],
        inspeksiAbdomen: [{ nama: "Inspeksi Abdomen", temuan: "Dalam batas normal", signifikan: false }],
        inspeksiEkstremitas: [{ nama: "Akral & CRT", temuan: "Akral dingin, CRT memanjang", signifikan: true }],
        signKhas: [
          { nama: "Triad Beck (modifikasi)", temuan: "Hipotensi + JVP meningkat + suara napas hilang = Tension Pneumothorax", signifikan: true },
        ],
        distraksi: [
          { nama: "Palpasi Fremitus", temuan: "Menurun/hilang sisi sakit", signifikan: false },
        ]
      },
      penunjang: {
        standardAwal: [
          { nama: "Darah Lengkap", temuan: "Dalam batas normal", signifikan: false },
          { nama: "Urinalisis", temuan: "Dalam batas normal", signifikan: false },
          { nama: "EKG", temuan: "Sinus takikardia", signifikan: false },
          { nama: "USG Thorax (bedside)", temuan: "Tidak ada lung sliding – konfirmasi pneumothorax", signifikan: true },
          { nama: "Rontgen Thorax (SETELAH dekompresi)", temuan: "Hiperlusen tanpa corakan paru; kolaps paru; deviasi mediastinum", signifikan: true },
        ],
        khas: [
          { nama: "AGD", temuan: "Hipoksemia, hiperkapnia", signifikan: true },
        ],
        distraksi: [
          { nama: "CT Scan Thorax", temuan: "Tidak dilakukan fase akut tension", signifikan: false },
          { nama: "BTA Sputum", temuan: "Tidak relevan akut", signifikan: false },
        ]
      },
      dd: ["Tension Pneumothorax", "Efusi Pleura Masif", "Hemothorax", "Pneumonia Berat"],
      diagnosisKerja: "Tension Pneumothorax",
      tatalaksana: [
        { opsi: "Needle decompression ICS 2 MCL sisi kolaps (segera tanpa menunggu konfirmasi radiologi)", benar: true },
        { opsi: "O₂ Non-rebreather mask 10–15 L/menit", benar: true },
        { opsi: "Chest tube (WSD) sebagai terapi definitif", benar: true },
        { opsi: "Monitor SpO₂, TTV ketat pasca tindakan", benar: true },
        { opsi: "Rujuk bedah thorax untuk tatalaksana lanjut", benar: true },
        { opsi: "Aspirasi dengan spuit 50cc jika WSD tidak tersedia", benar: true },
        { opsi: "Tunggu sampai SpO₂ <80% baru tindakan", benar: false },
        { opsi: "Bronkodilator nebulizer sebagai terapi awal", benar: false },
      ],
      edukasi: [
        { opsi: "Pneumothorax spontan dapat berulang (rekurensi 20–50%)", benar: true },
        { opsi: "Hindari aktivitas berat dan olahraga kontak selama pemulihan", benar: true },
        { opsi: "Jangan menyelam atau naik pesawat sebelum diizinkan dokter", benar: true },
        { opsi: "Berhenti merokok untuk mengurangi risiko rekurensi", benar: true },
        { opsi: "Kontrol 1–2 minggu setelah keluar RS untuk rontgen ulang", benar: true },
        { opsi: "Tidak perlu kontrol jika sudah tidak sesak", benar: false },
      ]
    }
  ],
  genitourinaria: [
    {
      id: "ruptur_uretra",
      judulKasus: "Pasien laki-laki dewasa pasca trauma selangkangan tidak bisa BAK, kesakitan, dan tampak memar di perineum",
      nama: "Ruptur Uretra Anterior (3B) – GAWAT DARURAT",
      identitas: "Pasien laki-laki dewasa, post-trauma pelvis/straddle injury",
      keluhanUtama: "Tidak bisa kencing, darah di lubang kencing setelah jatuh",
      tindakanAwal: {
        kondisi: "⚠️ RUPTUR URETRA – JANGAN PASANG KATETER!",
        deskripsi: "Darah di meatus uretra + tidak bisa BAK setelah trauma. Kontraindikasi absolut kateter uretra! Stabilisasi dan uretrogram dahulu.",
        tindakan: [
          { opsi: "JANGAN pasang kateter uretra (KONTRAINDIKASI MUTLAK!)", benar: true },
          { opsi: "Pasang IV line dan stabilisasi hemodinamik", benar: true },
          { opsi: "Analgetik: Ketorolac 30mg IV untuk nyeri", benar: true },
          { opsi: "Foto pelvis AP untuk evaluasi fraktur", benar: true },
          { opsi: "Pasang suprapubik kateter jika ada retensi urin total", benar: true },
          { opsi: "Rujuk segera Sp. Urologi untuk uretrogram retrograd", benar: true },
          { opsi: "Pasang kateter Foley uretra segera agar bisa BAK", benar: false, mematikan: true, pesanMati: "Kateterisasi paksa pada ruptur uretra memperluas robekan, menyebabkan urosepsis dan ekstravasasi urin masif yang fatal." },
          { opsi: "Berikan diuretik agar pasien bisa kencing sendiri", benar: false, mematikan: true, pesanMati: "Diuretik memaksa produksi urin melalui uretra ruptur, menyebabkan ekstravasasi urin ke jaringan periuretral dan urosepsis fatal." },
        ]
      },
      anamnesis: {
        signifikan: [
          { pertanyaan: "Bagaimana mekanisme trauma?", temuan: "Straddle injury / trauma pelvis / kecelakaan" },
          { pertanyaan: "Apakah bisa BAK setelah kejadian?", temuan: "Tidak bisa BAK sama sekali (retensi urin)" },
          { pertanyaan: "Apakah ada darah di ujung penis?", temuan: "Darah di meatus uretra eksterna (hallmark ruptur uretra)" },
          { pertanyaan: "Apakah ada nyeri di perineum/penis?", temuan: "Nyeri berat di perineum dan pangkal penis" },
          { pertanyaan: "Sudah berapa lama tidak bisa BAK?", temuan: "Tidak bisa BAK sejak kejadian" },
        ],
        nonSignifikan: [
          { pertanyaan: "Apakah ada alergi?", temuan: "Tidak ada alergi" },
          { pertanyaan: "Apakah ada riwayat infeksi saluran kemih?", temuan: "Tidak ada ISK sebelumnya" },
          { pertanyaan: "Apakah ada riwayat operasi urologi sebelumnya?", temuan: "Tidak ada" },
        ]
      },
      pemeriksaanFisik: {
        vitalSign: [
          { nama: "Tekanan Darah", temuan: "Bisa normal atau hipotensi (jika ada perdarahan)", signifikan: false },
          { nama: "Nadi", temuan: "Takikardia (nyeri/stres)", signifikan: false },
          { nama: "RR", temuan: "Normal atau meningkat karena nyeri", signifikan: false },
          { nama: "Suhu", temuan: "Normal (urosepsis muncul kemudian)", signifikan: false },
        ],
        inspeksiKepala: [{ nama: "Inspeksi Kepala", temuan: "Dalam batas normal", signifikan: false }],
        inspeksiLeher: [{ nama: "Inspeksi Leher", temuan: "Dalam batas normal", signifikan: false }],
        inspeksiThorax: [{ nama: "Inspeksi Thorax", temuan: "Dalam batas normal", signifikan: false }],
        inspeksiAbdomen: [
          { nama: "Palpasi Suprapubik", temuan: "Distensi buli-buli (retensi urin)", signifikan: true },
        ],
        inspeksiEkstremitas: [{ nama: "Inspeksi Ekstremitas", temuan: "Dalam batas normal", signifikan: false }],
        signKhas: [
          { nama: "Inspeksi Genitalia Eksterna", temuan: "Darah di meatus uretra eksterna – HALLMARK RUPTUR URETRA", signifikan: true },
          { nama: "Inspeksi Perineum & Skrotum", temuan: "Ekimosis perineum (butterfly bruise) – khas ruptur uretra bulbar", signifikan: true },
          { nama: "Palpasi Uretra", temuan: "Nyeri tekan uretra anterior", signifikan: true },
        ],
        distraksi: [
          { nama: "Rectal Touche", temuan: "Prostat mengambang (floating prostate) – khas ruptur uretra posterior", signifikan: false },
        ]
      },
      penunjang: {
        standardAwal: [
          { nama: "Darah Lengkap", temuan: "Dalam batas normal (tidak ada infeksi awal)", signifikan: false },
          { nama: "Urinalisis", temuan: "Tidak dapat dilakukan jika tidak bisa BAK", signifikan: false },
          { nama: "EKG", temuan: "Tidak diperlukan", signifikan: false },
          { nama: "USG Buli-buli", temuan: "Distensi buli (retensi urin), tidak ada ruptur intraperitoneal", signifikan: true },
          { nama: "Rontgen Pelvis AP", temuan: "Evaluasi fraktur pelvis/simfisis pubis", signifikan: true },
        ],
        khas: [
          { nama: "Uretrogram Retrograd", temuan: "GOLD STANDARD – kontras keluar dari uretra (lokasi dan derajat ruptur)", signifikan: true },
        ],
        distraksi: [
          { nama: "PSA", temuan: "Tidak relevan dalam kondisi akut", signifikan: false },
          { nama: "CT Scan Abdomen", temuan: "Dilakukan jika dicurigai ruptur intraperitoneal", signifikan: false },
        ]
      },
      dd: ["Ruptur Uretra Anterior", "Ruptur Uretra Posterior", "Ruptur Buli-buli", "Kontusio Uretra"],
      diagnosisKerja: "Ruptur Uretra Anterior (post-straddle injury)",
      tatalaksana: [
        { opsi: "KONTRAINDIKASI kateter uretra – hindari!", benar: true },
        { opsi: "Sistostomi suprapubik untuk dekompresi buli", benar: true },
        { opsi: "Stabilisasi fraktur pelvis jika ada", benar: true },
        { opsi: "Analgetik: Ketorolac IV", benar: true },
        { opsi: "Rujuk Sp. Urologi untuk uretroplasti definitif", benar: true },
        { opsi: "Antibiotik profilaksis (cefazolin)", benar: true },
        { opsi: "Pasang kateter uretra untuk memastikan diagnosis", benar: false },
        { opsi: "Tunggu sampai bisa BAK spontan", benar: false },
      ],
      edukasi: [
        { opsi: "Perbaikan uretra biasanya dilakukan 3–6 bulan setelah trauma", benar: true },
        { opsi: "Komplikasi: striktur uretra, disfungsi ereksi, inkontinensia", benar: true },
        { opsi: "Kontrol rutin ke Sp. Urologi", benar: true },
        { opsi: "Sistostomi suprapubik dipakai sementara hingga operasi definitif", benar: true },
        { opsi: "Tidak perlu operasi jika sudah tidak nyeri", benar: false },
      ]
    }
  ]
};

// Add new cases to OSCE_DATA
Object.keys(NEW_EMERGENCY_CASES).forEach(cat => {
  if (!OSCE_DATA.cases[cat]) OSCE_DATA.cases[cat] = [];
  NEW_EMERGENCY_CASES[cat].forEach(newCase => {
    // Only add if not already present
    const exists = OSCE_DATA.cases[cat].some(c => c.id === newCase.id);
    if (!exists) {
      OSCE_DATA.cases[cat].push(newCase);
    }
  });
});

console.log('Emergency data loaded & patched ✓');
})();
