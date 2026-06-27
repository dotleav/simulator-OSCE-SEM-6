const OSCE_DATA = {
  categories: [
    { id: "endokrin", label: "CR Endokrin, Metabolisme & Nutrisi", icon: "🩸", color: "#e67e22" },
    { id: "kardio", label: "CR Kardiovaskular", icon: "❤️", color: "#e74c3c" },
    { id: "respirasi", label: "CR Respirasi", icon: "🫁", color: "#3498db" },
    { id: "genitourinaria", label: "CR Genitourinaria", icon: "💧", color: "#27ae60" }
  ],

  cases: {
    endokrin: [
      {
        id: "sindrom_metabolik",
        judulKasus: "Tn. Andre, 35 tahun, datang dengan keluhan mudah lelah, sering kencing malam, dan gatal-gatal di selangkangan sejak 6 bulan",
        nama: "Kasus 1 – Endokrin",
        identitas: "Andre, 35 tahun, Guru, Piyungan",
        keluhanUtama: "Mudah lelah, BAK malam hari sering, gatal-gatal di seluruh tubuh (terutama selangkangan) sejak 6 bulan",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Sudah berapa lama keluhan berlangsung?", temuan: "Sudah 6 bulan" },
            { pertanyaan: "Apakah sering BAK di malam hari?", temuan: "Ya, sering BAK di malam hari" },
            { pertanyaan: "Adakah gatal-gatal di badan?", temuan: "Gatal-gatal di seluruh tubuh, terutama di selangkangan" },
            { pertanyaan: "Bagaimana nafsu makan Anda?", temuan: "Nafsu makan meningkat, makan 4-5x/hari, suka gorengan" },
            { pertanyaan: "Apakah mudah lelah saat beraktivitas?", temuan: "Mudah lelah saat aktivitas ringan sekalipun" },
            { pertanyaan: "Apakah sering merokok?", temuan: "Merokok (+) 1 bungkus/hari" },
            { pertanyaan: "Apakah ada riwayat kencing manis/DM di keluarga?", temuan: "Ibu dan Kakek menderita kencing manis" },
            { pertanyaan: "Apakah ada riwayat hipertensi di keluarga?", temuan: "Ayah menderita hipertensi" },
            { pertanyaan: "Apakah rutin berolahraga?", temuan: "Jarang berolahraga" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada konsumsi alkohol?", temuan: "Tidak ada konsumsi alkohol" },
            { pertanyaan: "Apakah ada riwayat rawat inap sebelumnya?", temuan: "Tidak pernah rawat inap" },
            { pertanyaan: "Apakah ada alergi obat atau makanan?", temuan: "Tidak ada alergi" },
            { pertanyaan: "Apakah konsumsi obat-obatan rutin saat ini?", temuan: "Konsumsi multivitamin dan jamu rutin" },
            { pertanyaan: "Apakah ada mual atau muntah?", temuan: "Tidak ada mual muntah" },
            { pertanyaan: "Apakah ada sesak napas?", temuan: "Tidak ada sesak napas" },
            { pertanyaan: "Apakah ada nyeri dada?", temuan: "Tidak ada nyeri dada" },
            { pertanyaan: "Bagaimana pola tidur Anda?", temuan: "Tidur cukup, 7-8 jam per malam" },
            { pertanyaan: "Apakah ada perubahan pada penglihatan?", temuan: "Penglihatan normal" },
            { pertanyaan: "Apakah ada penggunaan narkoba?", temuan: "Tidak ada penggunaan narkoba" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "Tekanan Darah", temuan: "160/90 mmHg (MENINGKAT)", signifikan: true },
            { nama: "Nadi", temuan: "80x/menit (normal)", signifikan: false },
            { nama: "RR", temuan: "16x/menit (normal)", signifikan: false },
            { nama: "Suhu", temuan: "36,8°C (normal)", signifikan: false },
            { nama: "IMT (BB 95kg, TB 165cm)", temuan: "IMT 34,8 – Obesitas Grade II", signifikan: true },
            { nama: "Lingkar Pinggang", temuan: "120 cm (Normal pria Asia <90 cm) – MENINGKAT", signifikan: true }
          ],
          inspeksiKepala: [{ nama: "Inspeksi Kepala dan Mata", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiLeher: [{ nama: "Inspeksi dan Palpasi Leher", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiThorax: [{ nama: "Inspeksi Thorax", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiAbdomen: [
            { nama: "Inspeksi Abdomen", temuan: "Kontur perut lebih tinggi dibandingkan dinding dada – OBESITAS SENTRAL", signifikan: true }
          ],
          inspeksiEkstremitas: [{ nama: "Inspeksi Ekstremitas", temuan: "Dalam batas normal", signifikan: false }],
          signKhas: [
            { nama: "Palpasi Abdomen (Nyeri tekan)", temuan: "Tidak ada nyeri tekan", signifikan: false }
          ],
          distraksi: [
            { nama: "Pemeriksaan Refleks Neurologis", temuan: "Normal", signifikan: false },
            { nama: "Pemeriksaan Kulit (rash/lesi)", temuan: "Gatal-gatal di selangkangan, tampak kemerahan", signifikan: false },
            { nama: "Auskultasi Jantung", temuan: "S1 S2 tunggal, tidak ada murmur", signifikan: false },
            { nama: "Auskultasi Paru", temuan: "Vesikuler, tidak ada wheezing dan ronki", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "Leukosit 9.000 (normal), Hb 14, Trombosit normal", signifikan: false },
            { nama: "Urinalisis", temuan: "Glukosa (+), sisanya dalam batas normal", signifikan: true },
            { nama: "EKG", temuan: "Sinus rhythm normal", signifikan: false },
            { nama: "USG Abdomen", temuan: "Kesan fatty liver grade 1", signifikan: true },
            { nama: "Rontgen Thorax PA", temuan: "Kardiomegali ringan, paru dalam batas normal", signifikan: true }
          ],
          khas: [
            { nama: "Gula Darah Sewaktu (GDS)", temuan: "217 mg/dL (MENINGKAT)", signifikan: true },
            { nama: "Gula Darah Puasa (GDP)", temuan: "277 mg/dL (MENINGKAT, >126)", signifikan: true },
            { nama: "Gula Darah 2 Jam PP (GD2PP)", temuan: "350 mg/dL (MENINGKAT, >200)", signifikan: true },
            { nama: "HbA1c", temuan: "8,6% (MENINGKAT, tidak terkontrol)", signifikan: true },
            { nama: "Profil Lipid (Kolesterol Total)", temuan: "420 mg/dL (MENINGKAT, >200)", signifikan: true },
            { nama: "HDL", temuan: "32 mg/dL (RENDAH, pria <40 = patologis)", signifikan: true },
            { nama: "LDL", temuan: "356 mg/dL (SANGAT MENINGKAT)", signifikan: true },
            { nama: "Trigliserida", temuan: "300 mg/dL (MENINGKAT, >150)", signifikan: true }
          ],
          distraksi: [
            { nama: "TSH dan FT4 (fungsi tiroid)", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Kortisol serum", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Kreatinin dan Ureum (fungsi ginjal)", temuan: "Dalam batas normal", signifikan: false }
          ]
        },
        dd: ["DM Tipe 2", "Obesitas", "Dislipidemia", "Hipertensi Esensial", "Hipotiroid", "Sindrom Cushing"],
        diagnosisKerja: "Sindrom Metabolik + DM Tipe 2 + Dislipidemia + Hipertensi",
        tatalaksana: [
          { opsi: "Metformin 500mg 3x/hari setelah makan", benar: true },
          { opsi: "Simvastatin 10mg 1x/hari malam (untuk dislipidemia)", benar: true },
          { opsi: "Captopril 25mg 2x/hari sebelum makan (untuk hipertensi)", benar: true },
          { opsi: "Modifikasi gaya hidup: turun BB, berhenti merokok", benar: true },
          { opsi: "Olahraga 3-5x/minggu minimal 30 menit", benar: true },
          { opsi: "Amlodipin untuk hipertensi (pilihan pertama)", benar: false },
          { opsi: "Insulin langsung tanpa OHO dulu (HbA1c 8,6%)", benar: false },
          { opsi: "Glibenklamid sebagai lini pertama", benar: false }
        ],
        edukasi: [
          { opsi: "Kontrol 1 bulan lagi, minimal 3 bulan (cek kolesterol & gula)", benar: true },
          { opsi: "Jika terasa pusing/pingsan setelah Metformin → minum teh manis dan ke dokter", benar: true },
          { opsi: "Penyakit tidak dapat sembuh total tapi bisa terkontrol", benar: true },
          { opsi: "Ganti karbohidrat sederhana ke kompleks", benar: true },
          { opsi: "Boleh minum obat hanya saat bergejala saja", benar: false },
          { opsi: "Tidak perlu kontrol jika merasa baik-baik saja", benar: false }
        ]
      },
      {
        id: "dislipidemia",
        judulKasus: "Tn. Budi, 40 tahun, datang untuk pemeriksaan rutin dengan hasil lab yang disebutkan bermasalah oleh dokter sebelumnya",
        nama: "Kasus 2 – Endokrin",
        identitas: "Budi, 40 tahun, Karyawan Kantor, Bantul",
        keluhanUtama: "Pusing di tengkuk – sakit kepala dan tengkuk berat",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Sudah berapa lama keluhan berlangsung?", temuan: "Sakit kepala dan tengkuk sejak 1 bulan, hilang timbul" },
            { pertanyaan: "Apakah ada rasa berat di tengkuk?", temuan: "Terasa berat dan pusing di tengkuk" },
            { pertanyaan: "Apakah sudah minum obat?", temuan: "Sudah minum obat warung, tidak nyeri tapi tengkuk masih berat" },
            { pertanyaan: "Apakah sering merokok?", temuan: "Merokok >1 bungkus/hari sudah 25 tahun" },
            { pertanyaan: "Bagaimana pola makan Anda?", temuan: "Suka makan kambing dan gorengan, porsi banyak" },
            { pertanyaan: "Apakah ada riwayat hipertensi di keluarga?", temuan: "Ayah hipertensi, Ibu DM" },
            { pertanyaan: "Bagaimana aktivitas fisik sehari-hari?", temuan: "Kerja di depan komputer, olahraga minimal" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada konsumsi alkohol?", temuan: "Tidak ada konsumsi alkohol" },
            { pertanyaan: "Apakah ada alergi?", temuan: "Tidak ada alergi" },
            { pertanyaan: "Apakah ada mual atau muntah?", temuan: "Tidak ada mual muntah" },
            { pertanyaan: "Apakah ada nyeri dada?", temuan: "Tidak ada nyeri dada" },
            { pertanyaan: "Apakah ada sesak napas?", temuan: "Tidak ada sesak napas" },
            { pertanyaan: "Apakah ada perubahan berat badan signifikan?", temuan: "BB cenderung naik perlahan" },
            { pertanyaan: "Apakah ada riwayat konsumsi obat rutin?", temuan: "Tidak ada obat rutin" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "Tekanan Darah", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Nadi", temuan: "Dalam batas normal", signifikan: false },
            { nama: "RR", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Suhu", temuan: "36,8°C (normal)", signifikan: false },
            { nama: "IMT (BB 75kg, TB 165cm)", temuan: "IMT 27,5 – Obesitas I", signifikan: true },
            { nama: "Lingkar Pinggang", temuan: "85 cm (batas bawah normal pria Asia)", signifikan: false }
          ],
          inspeksiKepala: [{ nama: "Inspeksi Kepala dan Mata", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiLeher: [{ nama: "Inspeksi dan Palpasi Leher", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiThorax: [{ nama: "Inspeksi dan Auskultasi Thorax", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiAbdomen: [{ nama: "Inspeksi Abdomen", temuan: "Sedikit menonjol, tidak ada nyeri tekan", signifikan: false }],
          inspeksiEkstremitas: [{ nama: "Inspeksi Ekstremitas", temuan: "Dalam batas normal", signifikan: false }],
          signKhas: [
            { nama: "Xanthoma (penumpukan lipid di kulit)", temuan: "Tidak ditemukan xanthoma", signifikan: false }
          ],
          distraksi: [
            { nama: "Pemeriksaan Refleks Neurologis", temuan: "Normal", signifikan: false },
            { nama: "Auskultasi Jantung", temuan: "S1 S2 tunggal reguler, tidak ada murmur", signifikan: false },
            { nama: "Pemeriksaan Abdomen (hepar)", temuan: "Tidak ada hepatomegali", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Urinalisis", temuan: "Dalam batas normal", signifikan: false },
            { nama: "EKG", temuan: "Sinus rhythm, tidak ada perubahan bermakna", signifikan: false },
            { nama: "USG Abdomen", temuan: "Fatty liver grade 1", signifikan: true },
            { nama: "Rontgen Thorax PA", temuan: "Dalam batas normal", signifikan: false }
          ],
          khas: [
            { nama: "Profil Lipid – Kolesterol Total", temuan: "420 mg/dL (MENINGKAT, >200)", signifikan: true },
            { nama: "Profil Lipid – HDL", temuan: "32 mg/dL (RENDAH, pria <40)", signifikan: true },
            { nama: "Profil Lipid – LDL", temuan: "356 mg/dL (SANGAT MENINGKAT)", signifikan: true },
            { nama: "Profil Lipid – Trigliserida", temuan: "300 mg/dL (MENINGKAT, >150)", signifikan: true },
            { nama: "Gula Darah Sewaktu (GDS)", temuan: "140 mg/dL (sedikit meningkat, perlu follow-up)", signifikan: true }
          ],
          distraksi: [
            { nama: "TSH dan FT4", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Fungsi Hati (SGOT/SGPT)", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Asam Urat", temuan: "Dalam batas normal", signifikan: false }
          ]
        },
        dd: ["Sindrom Metabolik", "Diabetes Mellitus", "Hipertensi Esensial", "Hipotiroid"],
        diagnosisKerja: "Dislipidemia",
        tatalaksana: [
          { opsi: "Simvastatin 10mg 1x/hari malam hari", benar: true },
          { opsi: "Perubahan gaya hidup (diet rendah lemak)", benar: true },
          { opsi: "Kurangi makan kambing dan gorengan", benar: true },
          { opsi: "Olahraga teratur untuk turunkan BB", benar: true },
          { opsi: "Berhenti merokok", benar: true },
          { opsi: "Fibrat sebagai lini pertama tanpa indikasi khusus", benar: false },
          { opsi: "Tidak perlu obat, cukup diet saja", benar: false }
        ],
        edukasi: [
          { opsi: "Kontrol rutin untuk cek profil lipid", benar: true },
          { opsi: "Diet: kurangi lemak jenuh, perbanyak sayur dan serat", benar: true },
          { opsi: "Berhenti merokok untuk menurunkan risiko kardiovaskular", benar: true },
          { opsi: "Olahraga aerobik minimal 150 menit/minggu", benar: true },
          { opsi: "Minum obat hanya jika kolesterol terasa tinggi", benar: false },
          { opsi: "Tidak perlu pantang makan apapun", benar: false }
        ]
      },
      {
        id: "dm_tipe2",
        judulKasus: "Ny. Resti, 40 tahun, datang dengan keluhan sering haus, sering BAK, mudah lelah, dan berat badan turun tanpa sebab jelas",
        nama: "Kasus 3 – Endokrin",
        identitas: "Resti, 40 tahun, Perempuan, Pedagang Warung Makan",
        keluhanUtama: "Sering kencing, frekuensi >8x/sehari",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Sudah berapa lama sering kencing?", temuan: "Sering kencing sejak 3 bulan yang lalu" },
            { pertanyaan: "Seberapa sering minum dalam sehari?", temuan: "Minum biasanya 6 gelas/hari, sekarang sampai 18 gelas/hari" },
            { pertanyaan: "Apakah sering merasa haus?", temuan: "Ya, sangat cepat haus, tenggorokan kering" },
            { pertanyaan: "Apakah ada perubahan berat badan?", temuan: "BB turun 3 kg dalam sebulan" },
            { pertanyaan: "Apakah ada rasa kesemutan atau kebas di kaki?", temuan: "Kaki terasa kebas dan kesemutan" },
            { pertanyaan: "Apakah mudah lelah dan mengantuk?", temuan: "Ya, gampang capek dan ngantuk" },
            { pertanyaan: "Bagaimana pola makan Anda?", temuan: "Porsi nasi banyak, suka fast food, gorengan, jeroan; jarang olahraga" },
            { pertanyaan: "Apakah ada riwayat DM di keluarga?", temuan: "Ibu DM" },
            { pertanyaan: "Apakah merokok?", temuan: "Merokok 3 bungkus/hari dari SMA" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada konsumsi alkohol?", temuan: "Tidak ada konsumsi alkohol" },
            { pertanyaan: "Apakah ada alergi obat atau makanan?", temuan: "Tidak ada alergi" },
            { pertanyaan: "Apakah ada riwayat rawat inap sebelumnya?", temuan: "Tidak pernah rawat inap sebelumnya" },
            { pertanyaan: "Apakah ada mual atau muntah?", temuan: "Tidak ada mual muntah" },
            { pertanyaan: "Apakah ada nyeri dada?", temuan: "Tidak ada nyeri dada" },
            { pertanyaan: "Apakah ada riwayat obat rutin saat ini?", temuan: "Tidak ada pengobatan rutin" },
            { pertanyaan: "Apakah ada sesak napas?", temuan: "Tidak ada sesak napas" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "Tekanan Darah", temuan: "120/80 mmHg (normal)", signifikan: false },
            { nama: "Nadi", temuan: "80x/menit (normal)", signifikan: false },
            { nama: "RR", temuan: "16x/menit (normal)", signifikan: false },
            { nama: "Suhu", temuan: "36,8°C (normal)", signifikan: false },
            { nama: "IMT (BB 88kg, TB 165cm)", temuan: "IMT 32,32 – Obesitas II", signifikan: true },
            { nama: "Lingkar Pinggang", temuan: "90 cm – Obesitas sentral (batas)", signifikan: true }
          ],
          inspeksiKepala: [
            { nama: "Inspeksi Kepala", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Visus Mata", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Funduskopi", temuan: "Normal (skrining retinopati negatif)", signifikan: false }
          ],
          inspeksiLeher: [{ nama: "Inspeksi dan Palpasi Leher", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiThorax: [{ nama: "Inspeksi Thorax", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiAbdomen: [
            { nama: "Inspeksi Abdomen", temuan: "Kontur perut lebih tinggi dari dinding dada – Obesitas sentral", signifikan: true }
          ],
          inspeksiEkstremitas: [
            { nama: "Inspeksi Ekstremitas", temuan: "Akral hangat, CRT normal", signifikan: false },
            { nama: "Uji Sensibilitas Pedis", temuan: "Normal (skrining neuropati negatif)", signifikan: false }
          ],
          signKhas: [],
          distraksi: [
            { nama: "Auskultasi Jantung", temuan: "S1 S2 normal", signifikan: false },
            { nama: "Auskultasi Paru", temuan: "Vesikuler bilateral, tidak ada ronki", signifikan: false },
            { nama: "Refleks patella", temuan: "Normal bilateral", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Urinalisis", temuan: "Glukosa (+), protein (-), leukosit (-)", signifikan: true },
            { nama: "EKG", temuan: "Sinus rhythm normal", signifikan: false },
            { nama: "USG Abdomen", temuan: "Fatty liver ringan", signifikan: false },
            { nama: "Rontgen Thorax PA", temuan: "Dalam batas normal", signifikan: false }
          ],
          khas: [
            { nama: "Gula Darah Sewaktu (GDS)", temuan: "272 mg/dL (MENINGKAT, >200 = DM)", signifikan: true },
            { nama: "Gula Darah Puasa (GDP)", temuan: "162 mg/dL (MENINGKAT, >126 = DM)", signifikan: true },
            { nama: "Gula Darah 2 Jam PP (GD2PP)", temuan: "273 mg/dL (MENINGKAT, >200 = DM)", signifikan: true },
            { nama: "HbA1c", temuan: "7,5% (MENINGKAT, >6,5% = DM, tidak terkontrol)", signifikan: true },
            { nama: "Profil Lipid", temuan: "Dalam batas normal", signifikan: false }
          ],
          distraksi: [
            { nama: "TSH dan FT4", temuan: "Dalam batas normal", signifikan: false },
            { nama: "C-Peptide", temuan: "Normal (mendukung DM tipe 2)", signifikan: false },
            { nama: "Anti-GAD Antibodi", temuan: "Negatif (menyingkirkan DM tipe 1)", signifikan: false }
          ]
        },
        dd: ["DM Tipe 2", "Hiperglikemia", "Diabetes Insipidus", "DM Tipe 1"],
        diagnosisKerja: "Diabetes Mellitus Tipe 2",
        tatalaksana: [
          { opsi: "Metformin 500mg 3x/hari bersama makan", benar: true },
          { opsi: "Modifikasi gaya hidup (diet dan olahraga)", benar: true },
          { opsi: "Ganti karbohidrat sederhana ke karbohidrat kompleks", benar: true },
          { opsi: "Olahraga 3-5x/minggu @30 menit", benar: true },
          { opsi: "Insulin langsung sebagai terapi awal (HbA1c 7,5%)", benar: false },
          { opsi: "Glibenklamid sebagai monoterapi lini pertama", benar: false },
          { opsi: "Tidak perlu obat, cukup diet saja", benar: false }
        ],
        edukasi: [
          { opsi: "Pengobatan teratur, kontrol 1 bulan (minimal 3 bulan)", benar: true },
          { opsi: "Lindungi kaki dari luka, periksa kaki setiap hari", benar: true },
          { opsi: "Jaga pola makan, kurangi porsi dan karbohidrat tinggi gula", benar: true },
          { opsi: "Jelaskan komplikasi DM (mata, ginjal, saraf, jantung)", benar: true },
          { opsi: "Boleh berhenti obat jika gula darah sudah normal", benar: false },
          { opsi: "Tidak perlu kontrol lab selama merasa sehat", benar: false }
        ]
      },
      {
        id: "hipoglikemia_ringan",
        judulKasus: "Tn. Tono, 50 tahun, datang dengan keluhan tiba-tiba lemas, keringat dingin, dan gemetar saat bekerja",
        nama: "Kasus 4 – Endokrin",
        identitas: "Tono, 50 tahun, Pedagang Sayur, Bantul",
        keluhanUtama: "Merasa lemas tiba-tiba sejak 1 jam yang lalu",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Kapan mulai merasa lemas?", temuan: "Lemas sejak 1 jam lalu, rasanya mau pingsan" },
            { pertanyaan: "Apa yang sedang dilakukan saat tiba-tiba lemas?", temuan: "Sedang jualan tiba-tiba lemas" },
            { pertanyaan: "Apakah ada keringat dingin atau gemetar?", temuan: "Ya, keringat dingin dan agak gemetar" },
            { pertanyaan: "Apakah tadi pagi sudah sarapan?", temuan: "Tidak sarapan, hanya minum teh tawar" },
            { pertanyaan: "Apakah sudah minum obat DM hari ini?", temuan: "Ya, sudah minum obat DM pagi tadi" },
            { pertanyaan: "Apakah ada riwayat penyakit gula?", temuan: "Punya riwayat penyakit gula sejak 1 bulan, didiagnosis dokter" },
            { pertanyaan: "Apakah ada riwayat DM di keluarga?", temuan: "Ibu DM" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada nyeri dada?", temuan: "Tidak ada nyeri dada" },
            { pertanyaan: "Apakah ada mual atau muntah?", temuan: "Tidak ada mual muntah" },
            { pertanyaan: "Apakah BAB dan BAK normal?", temuan: "BAB BAK normal" },
            { pertanyaan: "Apakah ada konsumsi alkohol?", temuan: "Tidak ada konsumsi alkohol" },
            { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
            { pertanyaan: "Apakah ada sesak napas?", temuan: "Tidak ada sesak napas" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "Tekanan Darah", temuan: "100/70 mmHg (rendah)", signifikan: true },
            { nama: "Nadi", temuan: "96x/menit (takikardia ringan)", signifikan: true },
            { nama: "RR", temuan: "20x/menit (normal)", signifikan: false },
            { nama: "Suhu", temuan: "36°C (sedikit rendah)", signifikan: false },
            { nama: "IMT (BB 40kg, TB 155cm)", temuan: "IMT 16,6 – Underweight", signifikan: true }
          ],
          inspeksiKepala: [{ nama: "Inspeksi Kepala", temuan: "Kulit pucat dan berkeringat", signifikan: true }],
          inspeksiLeher: [{ nama: "Inspeksi dan Palpasi Leher", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiThorax: [{ nama: "Inspeksi dan Auskultasi Thorax", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiAbdomen: [{ nama: "Inspeksi Abdomen", temuan: "Dalam batas normal, datar", signifikan: false }],
          inspeksiEkstremitas: [
            { nama: "Inspeksi Ekstremitas", temuan: "Akral dingin, CRT melambat", signifikan: true }
          ],
          signKhas: [
            { nama: "Turgor Kulit", temuan: "Turgor kulit normal", signifikan: false }
          ],
          distraksi: [
            { nama: "Refleks neurologis", temuan: "Normal", signifikan: false },
            { nama: "Pemeriksaan Kesadaran (GCS)", temuan: "GCS 15, compos mentis", signifikan: false },
            { nama: "Auskultasi Jantung", temuan: "S1 S2 normal", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Urinalisis", temuan: "Dalam batas normal", signifikan: false },
            { nama: "EKG", temuan: "Sinus takikardia ringan", signifikan: false },
            { nama: "USG Abdomen", temuan: "Tidak diperlukan saat ini", signifikan: false },
            { nama: "Rontgen Thorax PA", temuan: "Dalam batas normal", signifikan: false }
          ],
          khas: [
            { nama: "Gula Darah Sewaktu (GDS)", temuan: "60 mg/dL (SANGAT RENDAH, normal >70) – HIPOGLIKEMIA", signifikan: true }
          ],
          distraksi: [
            { nama: "HbA1c", temuan: "6,8% (tidak terkontrol baik)", signifikan: false },
            { nama: "Kortisol serum", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Elektrolit", temuan: "Dalam batas normal", signifikan: false }
          ]
        },
        dd: ["Hipoglikemia", "Diabetes tidak terkontrol", "Insulinemia", "Sinkop", "TIA"],
        diagnosisKerja: "Hipoglikemia Ringan",
        tatalaksana: [
          { opsi: "Minum air gula 20-30 gram (±2 sdm), evaluasi setiap 15 menit", benar: true },
          { opsi: "Stop obat DM selama 72 jam, lalu cek ulang gula darah", benar: true },
          { opsi: "Jika GDS sudah stabil → lanjutkan obat dengan edukasi makan teratur", benar: true },
          { opsi: "Berikan glukosa oral sambil sadar penuh", benar: true },
          { opsi: "Langsung injeksi insulin karena DM", benar: false },
          { opsi: "Tetap lanjutkan obat DM seperti biasa", benar: false },
          { opsi: "Beri makanan padat langsung meski hampir pingsan", benar: false }
        ],
        edukasi: [
          { opsi: "Bawa permen setiap saat jika sewaktu-waktu lemas", benar: true },
          { opsi: "Cek gula darah tiap bulan", benar: true },
          { opsi: "Jangan kurangi makan secara ekstrem, makan teratur setelah minum obat", benar: true },
          { opsi: "Rutin minum obat, ganti karbohidrat sederhana ke kompleks", benar: true },
          { opsi: "Boleh melewatkan makan selama sudah minum obat", benar: false },
          { opsi: "Tidak perlu membawa gula/permen karena sudah ada obat", benar: false }
        ]
      },
      {
        id: "hipertiroid",
        judulKasus: "Nn. Siska, 33 tahun, datang dengan keluhan jantung berdebar, tangan gemetar, dan berat badan turun padahal nafsu makan meningkat",
        nama: "Kasus 5 – Endokrin",
        identitas: "Siska, 33 tahun, Perempuan, Mahasiswi",
        keluhanUtama: "Mudah lelah – gampang capek, badan lemas",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Sudah berapa lama keluhan ini dirasakan?", temuan: "Gejala sejak 3 bulan yang lalu" },
            { pertanyaan: "Apakah sering merasa panas dan berkeringat berlebih?", temuan: "Ya, sering merasa panas dan berkeringat berlebih" },
            { pertanyaan: "Apakah ada perubahan berat badan?", temuan: "BB menurun dari 60 kg menjadi 52 kg dalam 3 bulan meski nafsu makan meningkat" },
            { pertanyaan: "Apakah ada jantung berdebar?", temuan: "Ya, jantung berdebar" },
            { pertanyaan: "Apakah ada tangan gemetar?", temuan: "Ya, tangan gemetar" },
            { pertanyaan: "Apakah ada rasa cemas atau gugup berlebihan?", temuan: "Ya, sering cemas dan gugup" },
            { pertanyaan: "Apakah ada perubahan frekuensi BAB?", temuan: "Sering BAB, konsistensi normal" },
            { pertanyaan: "Apakah ada benjolan di leher?", temuan: "Ada benjolan di leher" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada konsumsi alkohol?", temuan: "Tidak ada konsumsi alkohol" },
            { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
            { pertanyaan: "Apakah ada riwayat rawat inap?", temuan: "Tidak ada riwayat rawat inap" },
            { pertanyaan: "Apakah ada nyeri pada leher/tenggorokan?", temuan: "Tidak ada nyeri di leher" },
            { pertanyaan: "Apakah memiliki kesulitan menelan?", temuan: "Tidak ada kesulitan menelan" },
            { pertanyaan: "Apakah ada riwayat penyakit tiroid di keluarga?", temuan: "Tidak ada riwayat tiroid di keluarga" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "Tekanan Darah", temuan: "140/80 mmHg (sedikit meningkat)", signifikan: true },
            { nama: "Nadi", temuan: "130x/menit (TAKIKARDIA)", signifikan: true },
            { nama: "RR", temuan: "22x/menit (sedikit meningkat)", signifikan: true },
            { nama: "Suhu", temuan: "37,8°C (subfebris)", signifikan: true },
            { nama: "BB/TB", temuan: "52 kg / 170 cm – IMT turun dari sebelumnya 60 kg", signifikan: true }
          ],
          inspeksiKepala: [
            { nama: "Inspeksi Mata", temuan: "Eksoftalmus (+) – bola mata menonjol", signifikan: true }
          ],
          inspeksiLeher: [
            { nama: "Inspeksi Tiroid dari depan", temuan: "Benjolan (+) diffuse bilateral, bergerak saat menelan", signifikan: true },
            { nama: "Palpasi Tiroid dari belakang", temuan: "Tidak ada nyeri tekan; teraba diffuse bilateral (reversible)", signifikan: true },
            { nama: "Auskultasi Tiroid", temuan: "Bruit tiroid (+)", signifikan: true }
          ],
          inspeksiThorax: [{ nama: "Inspeksi dan Auskultasi Thorax", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiAbdomen: [{ nama: "Inspeksi Abdomen", temuan: "Bising usus meningkat", signifikan: true }],
          inspeksiEkstremitas: [
            { nama: "Inspeksi Ekstremitas", temuan: "Hangat dan lembab; tidak ada pretibial myxoedema", signifikan: false }
          ],
          signKhas: [
            { nama: "Tremor tangan", temuan: "Tremor (+) pada kedua tangan", signifikan: true }
          ],
          distraksi: [
            { nama: "Pemeriksaan Refleks Neurologis", temuan: "Refleks meningkat (hiperrefleksia)", signifikan: false },
            { nama: "Auskultasi Jantung", temuan: "S1 S2 reguler, takikardia", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Urinalisis", temuan: "Dalam batas normal", signifikan: false },
            { nama: "EKG", temuan: "Sinus takikardia HR 130 bpm", signifikan: true },
            { nama: "USG Tiroid", temuan: "Kelenjar tiroid membesar difus bilateral, vaskularisasi meningkat", signifikan: true },
            { nama: "Rontgen Thorax PA", temuan: "Dalam batas normal", signifikan: false }
          ],
          khas: [
            { nama: "TSH Serum", temuan: "0,03 μIU/mL (SANGAT RENDAH, normal 0,5–4,7) – Hipertiroid", signifikan: true },
            { nama: "FT4", temuan: "2,7 ng/dL (MENINGKAT, normal 0,8–1,7)", signifikan: true },
            { nama: "T4 Total", temuan: "144 μg/dL (MENINGKAT, normal 50–120)", signifikan: true },
            { nama: "T3 Total", temuan: "3,2 ng/dL (MENINGKAT, normal 0,65–1,7)", signifikan: true }
          ],
          distraksi: [
            { nama: "Anti-TPO Antibodi", temuan: "Positif tinggi (mendukung penyakit autoimun Graves)", signifikan: false },
            { nama: "Gula Darah Sewaktu", temuan: "Dalam batas normal", signifikan: false }
          ]
        },
        dd: ["Grave's Disease", "Hashimoto's Disease", "Tiroiditis", "Tirotoksikosis", "Hipoglikemia"],
        diagnosisKerja: "Hipertiroid Suspek Grave's Disease",
        tatalaksana: [
          { opsi: "Karbimazol 5mg 3x/hari (Anti-Tiroid)", benar: true },
          { opsi: "Propranolol 10mg 3x/hari (Beta-blocker untuk takikardia)", benar: true },
          { opsi: "Rujuk Sp.PD untuk tatalaksana definitif", benar: true },
          { opsi: "Propiltiourasil jika sensitif terhadap karbimazol", benar: true },
          { opsi: "Levotiroksin (hormon tiroid) karena ada keluhan lelah", benar: false },
          { opsi: "Kortikosteroid sebagai terapi utama", benar: false }
        ],
        edukasi: [
          { opsi: "Lama pengobatan 1,5–2 tahun; obat dikonsumsi rutin", benar: true },
          { opsi: "Komplikasi: badai tiroid – TD/suhu/denyut jantung sangat meningkat, diare, kesadaran menurun", benar: true },
          { opsi: "Kontrol rutin ke Sp.PD", benar: true },
          { opsi: "Obat anti-tiroid dapat dihentikan jika merasa baik", benar: false },
          { opsi: "Tidak perlu pemeriksaan tiroid ulang setelah terapi", benar: false }
        ]
      }
    ],
    kardio: [
      {
        id: "stemi_anteroseptal",
        judulKasus: "Tn. Indra, 40 tahun, datang diantar istri dengan keluhan nyeri dada kiri mendadak, menjalar ke lengan kiri, disertai keringat dingin",
        nama: "Kasus 1 – Kardiovaskular",
        identitas: "Pak Indra, 40 tahun; diantar istri (Bu Puspa, 35 tahun)",
        keluhanUtama: "Nyeri dada kiri tiba-tiba, 3 jam yang lalu",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Kapan nyeri dada mulai?", temuan: "Nyeri dada kiri tiba-tiba saat bangun tidur pagi, tidak sedang aktivitas berat" },
            { pertanyaan: "Bagaimana karakter nyeri dadanya?", temuan: "Seperti ditindih/ditekan benda berat, menjalar ke lengan kiri" },
            { pertanyaan: "Sudah berapa lama nyeri berlangsung?", temuan: "Sudah 3 jam, tidak membaik dengan istirahat" },
            { pertanyaan: "Apakah ada keringat dingin, mual, atau muntah?", temuan: "Ya, disertai keringat dingin dan mual" },
            { pertanyaan: "Apakah pernah nyeri dada sebelumnya?", temuan: "2 tahun lalu pernah sakit dada 30 menit, hilang sendiri" },
            { pertanyaan: "Apakah ada riwayat hipertensi dan kolesterol tinggi?", temuan: "Riwayat hipertensi + hiperkolesterol sejak 10 tahun (tidak terkontrol)" },
            { pertanyaan: "Apakah merokok?", temuan: "Merokok 1 bungkus/hari sudah lama" },
            { pertanyaan: "Apakah rutin minum obat hipertensi?", temuan: "Jarang minum obat rutin" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
            { pertanyaan: "Apakah ada sesak napas?", temuan: "Sesak ringan karena nyeri" },
            { pertanyaan: "Apakah ada riwayat DM?", temuan: "Tidak ada riwayat DM" },
            { pertanyaan: "Apakah ada riwayat penyakit jantung di keluarga?", temuan: "Tidak ada riwayat jantung di keluarga" },
            { pertanyaan: "Apakah ada riwayat stroke sebelumnya?", temuan: "Tidak ada riwayat stroke" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "Tekanan Darah", temuan: "140/70 mmHg", signifikan: true },
            { nama: "Nadi", temuan: "90x/menit (normal)", signifikan: false },
            { nama: "RR", temuan: "24x/menit (meningkat)", signifikan: true },
            { nama: "SpO2", temuan: "Perlu dipasang monitoring", signifikan: true },
            { nama: "Akral dan CRT", temuan: "Akral hangat, CRT <2 detik", signifikan: false }
          ],
          inspeksiKepala: [{ nama: "Inspeksi Kepala", temuan: "Wajah pucat, keringat dingin", signifikan: true }],
          inspeksiLeher: [{ nama: "JVP (Jugular Venous Pressure)", temuan: "JVP tidak meningkat", signifikan: false }],
          inspeksiThorax: [
            { nama: "Auskultasi Jantung", temuan: "S1 S2 normal, tidak ada S3/S4", signifikan: false },
            { nama: "Auskultasi Paru", temuan: "Vesikuler, tidak ada ronki", signifikan: false }
          ],
          inspeksiAbdomen: [{ nama: "Inspeksi Abdomen", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiEkstremitas: [{ nama: "Inspeksi Ekstremitas", temuan: "Akral hangat, tidak ada edema", signifikan: false }],
          signKhas: [
            { nama: "EKG (12 lead)", temuan: "ST elevasi di V1-V4 (>1 mm)", signifikan: true }
          ],
          distraksi: [
            { nama: "Pemeriksaan Abdomen", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Refleks Neurologis", temuan: "Normal", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "Eosinofil turun (respons stres)", signifikan: false },
            { nama: "Urinalisis", temuan: "Dalam batas normal", signifikan: false },
            { nama: "EKG 12 Lead", temuan: "ST elevasi di V1–V4 – KONFIRMASI DIAGNOSIS", signifikan: true },
            { nama: "USG Jantung (Ekokardiografi)", temuan: "Hipokinesis dinding anterior", signifikan: true },
            { nama: "Rontgen Thorax PA", temuan: "Dalam batas normal", signifikan: false }
          ],
          khas: [
            { nama: "Troponin I", temuan: "MENINGKAT (marker kerusakan miokard)", signifikan: true },
            { nama: "CKMB", temuan: "MENINGKAT (marker kerusakan miokard)", signifikan: true },
            { nama: "Profil Lipid", temuan: "Trigliserida naik, LDL naik, HDL turun", signifikan: true },
            { nama: "Gula Darah Sewaktu", temuan: "Normal", signifikan: false }
          ],
          distraksi: [
            { nama: "D-Dimer", temuan: "Normal (tidak mendukung emboli paru)", signifikan: false },
            { nama: "Troponin T", temuan: "Meningkat (konfirmasi infark)", signifikan: false },
            { nama: "BNP/NT-proBNP", temuan: "Sedikit meningkat", signifikan: false }
          ]
        },
        dd: ["STEMI", "NSTEMI", "UAP (Unstable Angina Pectoris)", "GERD", "Aortik Diseksi"],
        diagnosisKerja: "STEMI Anteroseptal (V1–V4)",
        tatalaksana: [
          { opsi: "O2 Nasal Canul 4 L/menit", benar: true },
          { opsi: "ISDN sublingual 5mg (dapat diulang tiap 5 menit, maks 3x)", benar: true },
          { opsi: "Aspirin 80mg x2 tablet dikunyah (loading dose)", benar: true },
          { opsi: "Clopidogrel 75mg x4 tablet (loading dose 300mg)", benar: true },
          { opsi: "Infus NaCl 0,9% + pasang IV line", benar: true },
          { opsi: "Rujuk Sp.JP untuk PCI / pemasangan ring jantung", benar: true },
          { opsi: "Morfin sulfat jika ISDN 3x tidak mempan", benar: true },
          { opsi: "Nitrogliserin transdermal sebagai satu-satunya terapi", benar: false },
          { opsi: "Beta-blocker sebagai obat pertama yang diberikan", benar: false }
        ],
        edukasi: [
          { opsi: "Kurangi merokok, minum obat hipertensi rutin", benar: true },
          { opsi: "Modifikasi gaya hidup: diet sehat, olahraga ringan", benar: true },
          { opsi: "STEMI = penyumbatan pembuluh darah jantung; PCI membuka penyumbatan", benar: true },
          { opsi: "Pemulihan bertahap, tidak boleh aktivitas berat dulu", benar: true },
          { opsi: "Setelah pemasangan ring, tidak perlu kontrol lagi", benar: false },
          { opsi: "Nitrogliserin boleh diminum kapan saja tanpa batasan", benar: false }
        ]
      },
      {
        id: "chf",
        judulKasus: "Pasien dewasa datang dengan keluhan sesak napas yang semakin memberat, kaki bengkak, dan tidak bisa tidur terlentang",
        nama: "Kasus 2 – Kardiovaskular",
        identitas: "Pasien, dewasa, dengan sesak napas progresif",
        keluhanUtama: "Sesak napas saat aktivitas dan saat tidur terlentang",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Sejak kapan sesak napas mulai?", temuan: "Sesak napas memburuk dalam beberapa hari/minggu" },
            { pertanyaan: "Apakah sesak memburuk saat tidur terlentang?", temuan: "Ya, sesak saat tidur terlentang (ortopnea), butuh 2-3 bantal" },
            { pertanyaan: "Apakah ada sesak mendadak di malam hari?", temuan: "Ya, paroxysmal nocturnal dyspnea (sesak mendadak malam hari)" },
            { pertanyaan: "Apakah ada bengkak kaki?", temuan: "Ya, bengkak kaki bilateral" },
            { pertanyaan: "Apakah berat badan naik tiba-tiba?", temuan: "Ya, BB naik tiba-tiba (retensi cairan)" },
            { pertanyaan: "Apakah ada riwayat penyakit jantung atau hipertensi?", temuan: "Riwayat hipertensi dan DM" },
            { pertanyaan: "Apakah ada batuk?", temuan: "Batuk berdahak merah muda (edema paru)" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada nyeri dada?", temuan: "Tidak ada nyeri dada yang khas" },
            { pertanyaan: "Apakah ada demam?", temuan: "Tidak ada demam" },
            { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
            { pertanyaan: "Apakah ada riwayat konsumsi alkohol?", temuan: "Tidak ada konsumsi alkohol" },
            { pertanyaan: "Bagaimana pola makan?", temuan: "Diet tinggi garam" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "Tekanan Darah", temuan: "Bisa normal/tinggi/rendah tergantung derajat", signifikan: true },
            { nama: "Nadi", temuan: "Takikardia", signifikan: true },
            { nama: "RR", temuan: "Meningkat (takipnea)", signifikan: true },
            { nama: "Suhu", temuan: "Normal", signifikan: false }
          ],
          inspeksiKepala: [{ nama: "Inspeksi Kepala", temuan: "Pucat ringan", signifikan: false }],
          inspeksiLeher: [
            { nama: "JVP (Jugular Venous Pressure)", temuan: "JVP MENINGKAT >3 cm dari sudut sternal", signifikan: true }
          ],
          inspeksiThorax: [
            { nama: "Auskultasi Paru (basal)", temuan: "Ronki basah bilateral di basal paru", signifikan: true },
            { nama: "Auskultasi Jantung", temuan: "S3 gallop (khas gagal jantung sistolik)", signifikan: true },
            { nama: "Inspeksi Thorax", temuan: "Sesak, retraksi ringan", signifikan: true }
          ],
          inspeksiAbdomen: [
            { nama: "Inspeksi Abdomen", temuan: "Mungkin ada asites", signifikan: true },
            { nama: "Palpasi Hepar", temuan: "Hepatomegali mungkin ada (gagal jantung kanan)", signifikan: true }
          ],
          inspeksiEkstremitas: [
            { nama: "Inspeksi Ekstremitas", temuan: "EDEMA PITTING bilateral (++)", signifikan: true }
          ],
          signKhas: [],
          distraksi: [
            { nama: "Refleks Neurologis", temuan: "Normal", signifikan: false },
            { nama: "Perkusi Paru", temuan: "Redup di basal bilateral", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "Anemia ringan mungkin ada", signifikan: false },
            { nama: "Urinalisis", temuan: "Proteinuria ringan", signifikan: false },
            { nama: "EKG", temuan: "LVH, aritmia, tanda infark (old MI)", signifikan: true },
            { nama: "USG Jantung (Ekokardiografi)", temuan: "EF <40% (sistolik) atau ≥50% (diastolik/HFpEF)", signifikan: true },
            { nama: "Rontgen Thorax PA", temuan: "Kardiomegali (CTR >0,5); edema paru (butterfly pattern)", signifikan: true }
          ],
          khas: [
            { nama: "BNP/NT-proBNP", temuan: "MENINGKAT (marker khas gagal jantung)", signifikan: true },
            { nama: "Elektrolit (Na, K)", temuan: "Hiponatremia/hipokalemia mungkin ada", signifikan: true },
            { nama: "Kreatinin dan Ureum", temuan: "Mungkin meningkat (kardiorenal)", signifikan: true },
            { nama: "Fungsi Hati", temuan: "Mungkin meningkat (kongesti hepar)", signifikan: false }
          ],
          distraksi: [
            { nama: "D-Dimer", temuan: "Normal", signifikan: false },
            { nama: "TSH (fungsi tiroid)", temuan: "Dalam batas normal", signifikan: false }
          ]
        },
        dd: ["CHF", "Pneumonia", "PPOK Eksaserbasi", "Sindrom Nefrotik", "Sirosis Hepatis"],
        diagnosisKerja: "Congestive Heart Failure (CHF)",
        tatalaksana: [
          { opsi: "Posisi semi-Fowler 45-90 derajat", benar: true },
          { opsi: "O2 Nasal Canul 3-4 L/menit", benar: true },
          { opsi: "Furosemid 40mg 1x/hari (diuretik – terapi utama)", benar: true },
          { opsi: "Ramipril 2,5mg 1x/hari (ACE Inhibitor)", benar: true },
          { opsi: "Bisoprolol 2,5mg 1x/hari (Beta Blocker, jika stabil)", benar: true },
          { opsi: "Spironolakton 25mg 1x/hari (aldosteron antagonis)", benar: true },
          { opsi: "Amlodipin sebagai terapi utama CHF dengan EF turun", benar: false },
          { opsi: "Banyak minum air dan konsumsi garam tinggi", benar: false }
        ],
        edukasi: [
          { opsi: "Batasi cairan <1,5-2 L/hari; batasi garam <2 g/hari", benar: true },
          { opsi: "Pantau berat badan harian; jika naik >2 kg dalam 2 hari → hubungi dokter", benar: true },
          { opsi: "Minum obat teratur; jangan berhenti mendadak", benar: true },
          { opsi: "Kenali tanda perburukan: sesak makin berat, kaki makin bengkak", benar: true },
          { opsi: "Aktivitas fisik berat dianjurkan untuk pemulihan cepat", benar: false },
          { opsi: "Tidak perlu pantang garam selama minum diuretik", benar: false }
        ]
      },
      {
        id: "hipertensi_esensial",
        judulKasus: "Pasien dewasa datang dengan keluhan sakit kepala bagian belakang yang sering kambuh, dengan tekanan darah yang selalu tinggi saat diperiksa",
        nama: "Kasus 3 – Kardiovaskular",
        identitas: "Pasien dewasa dengan tekanan darah tinggi",
        keluhanUtama: "Sakit kepala, pusing, tengkuk berat",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Sejak kapan sakit kepala dan tengkuk berat?", temuan: "Sakit kepala sejak beberapa minggu, terutama pagi hari" },
            { pertanyaan: "Di bagian mana sakit kepala terasa?", temuan: "Terutama di tengkuk dan belakang kepala" },
            { pertanyaan: "Apakah ada riwayat tekanan darah tinggi sebelumnya?", temuan: "Pernah diperiksa TD tinggi sebelumnya" },
            { pertanyaan: "Apakah ada faktor risiko: merokok, garam tinggi, stres?", temuan: "Konsumsi garam tinggi, stres kerja, kurang olahraga" },
            { pertanyaan: "Apakah ada riwayat hipertensi di keluarga?", temuan: "Ada riwayat hipertensi di keluarga" },
            { pertanyaan: "Apakah ada riwayat DM atau kolesterol tinggi?", temuan: "Ada riwayat kolesterol tinggi" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada nyeri dada?", temuan: "Tidak ada nyeri dada" },
            { pertanyaan: "Apakah ada sesak napas?", temuan: "Tidak ada sesak napas" },
            { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
            { pertanyaan: "Apakah ada mual atau muntah?", temuan: "Tidak ada mual muntah" },
            { pertanyaan: "Apakah ada perubahan penglihatan?", temuan: "Penglihatan normal" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "Tekanan Darah (pengukuran 1)", temuan: "≥140/90 mmHg (HIPERTENSI)", signifikan: true },
            { nama: "Tekanan Darah (pengukuran 2, selang 5 menit)", temuan: "Tetap ≥140/90 mmHg (konfirmasi hipertensi)", signifikan: true },
            { nama: "Nadi", temuan: "Normal atau sedikit meningkat", signifikan: false },
            { nama: "RR", temuan: "Normal", signifikan: false },
            { nama: "IMT", temuan: "Overweight atau obesitas", signifikan: true }
          ],
          inspeksiKepala: [
            { nama: "Funduskopi Mata", temuan: "Bisa ada perubahan pembuluh darah retina (Keith-Wagner)", signifikan: false }
          ],
          inspeksiLeher: [{ nama: "Bruit Karotis", temuan: "Tidak ada bruit", signifikan: false }],
          inspeksiThorax: [
            { nama: "Auskultasi Jantung", temuan: "S4 mungkin ada (khas hipertensi)", signifikan: false }
          ],
          inspeksiAbdomen: [
            { nama: "Bruit Renal (nyeri ketok ginjal)", temuan: "Tidak ada bruit renal", signifikan: false }
          ],
          inspeksiEkstremitas: [
            { nama: "Edema Ekstremitas", temuan: "Tidak ada edema (belum komplikasi)", signifikan: false }
          ],
          signKhas: [],
          distraksi: [
            { nama: "Refleks Neurologis", temuan: "Normal", signifikan: false },
            { nama: "Palpasi Abdomen", temuan: "Normal, tidak ada massa", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Urinalisis", temuan: "Bisa ada proteinuria (kerusakan ginjal)", signifikan: true },
            { nama: "EKG", temuan: "LVH (Left Ventricular Hypertrophy) atau normal", signifikan: true },
            { nama: "USG Ginjal", temuan: "Ukuran dan struktur ginjal normal", signifikan: false },
            { nama: "Rontgen Thorax PA", temuan: "Kardiomegali ringan, aorta sedikit menonjol", signifikan: false }
          ],
          khas: [
            { nama: "Kreatinin dan Ureum", temuan: "Normal atau sedikit meningkat", signifikan: false },
            { nama: "Profil Lipid", temuan: "Dislipidemia mungkin ada", signifikan: true },
            { nama: "GDS", temuan: "Normal atau sedikit meningkat", signifikan: false },
            { nama: "Asam Urat", temuan: "Mungkin meningkat", signifikan: false }
          ],
          distraksi: [
            { nama: "Aldosteron dan Renin", temuan: "Normal (menyingkirkan hipertensi sekunder)", signifikan: false },
            { nama: "Kortisol 24 jam", temuan: "Normal", signifikan: false }
          ]
        },
        dd: ["Hipertensi Esensial", "Hipertensi Sekunder", "White Coat Hypertension", "Krisis Hipertensi"],
        diagnosisKerja: "Hipertensi Esensial",
        tatalaksana: [
          { opsi: "Modifikasi gaya hidup: diet rendah garam (<2 g/hari)", benar: true },
          { opsi: "Olahraga aerobik 30 menit/hari, 5-7x/minggu", benar: true },
          { opsi: "Berhenti merokok", benar: true },
          { opsi: "HCT (Hidroklorotiazid) 12,5-25mg 1x/hari (tanpa komorbid)", benar: true },
          { opsi: "Captopril 25mg 2x/hari (jika ada DM/gagal ginjal/proteinuria)", benar: true },
          { opsi: "Amlodipin sebagai lini pertama tanpa edema", benar: false },
          { opsi: "ARB sebagai lini pertama", benar: false }
        ],
        edukasi: [
          { opsi: "Obat diminum seumur hidup meski TD sudah normal", benar: true },
          { opsi: "Pantau TD mandiri di rumah", benar: true },
          { opsi: "Waspadai krisis hipertensi: TD ≥180/120 + gejala → segera ke IGD", benar: true },
          { opsi: "Kenali komplikasi: stroke, serangan jantung, gagal ginjal", benar: true },
          { opsi: "Berhenti minum obat jika TD sudah normal selama 1 minggu", benar: false },
          { opsi: "Tidak perlu kontrol jika tidak ada gejala", benar: false }
        ]
      },
      {
        id: "svt",
        judulKasus: "Pasien dewasa datang dengan keluhan jantung berdebar sangat kencang secara tiba-tiba, disertai rasa tidak nyaman di dada",
        nama: "Kasus 4 – Kardiovaskular",
        identitas: "Pasien dewasa, jantung berdebar mendadak",
        keluhanUtama: "Jantung berdebar mendadak, terasa cepat dan teratur",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Bagaimana onset jantung berdebar?", temuan: "Berdebar mendadak (onset tiba-tiba), terasa sangat cepat" },
            { pertanyaan: "Apakah denyutnya teratur atau tidak teratur?", temuan: "Terasa cepat dan TERATUR" },
            { pertanyaan: "Apakah ada pusing atau sesak?", temuan: "Pusing ringan, sesak ringan" },
            { pertanyaan: "Berapa lama episode berlangsung?", temuan: "Episode bisa berlangsung menit hingga jam, lalu berhenti mendadak" },
            { pertanyaan: "Apakah pernah seperti ini sebelumnya?", temuan: "Ya, ada riwayat episode serupa sebelumnya" },
            { pertanyaan: "Apakah ada faktor pencetus: kafein, stres, kelelahan?", temuan: "Dipicu oleh kafein, stres, kelelahan" },
            { pertanyaan: "Apakah bisa dihentikan dengan manuver tertentu?", temuan: "Bisa dihentikan dengan manuver vagal (menahan napas)" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada nyeri dada berat?", temuan: "Nyeri dada atipik ringan" },
            { pertanyaan: "Apakah ada riwayat penyakit jantung?", temuan: "Tidak ada riwayat penyakit jantung struktural" },
            { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
            { pertanyaan: "Apakah ada riwayat hipertiroid?", temuan: "Perlu dikonfirmasi (cek TSH)" },
            { pertanyaan: "Apakah konsumsi alkohol?", temuan: "Bisa ada sebagai faktor pencetus" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "Tekanan Darah", temuan: "Normal atau sedikit turun", signifikan: false },
            { nama: "Nadi", temuan: "150-250x/menit, CEPAT DAN TERATUR", signifikan: true },
            { nama: "RR", temuan: "Sedikit meningkat", signifikan: false },
            { nama: "Suhu", temuan: "Normal", signifikan: false }
          ],
          inspeksiKepala: [{ nama: "Inspeksi Kepala", temuan: "Pucat ringan", signifikan: false }],
          inspeksiLeher: [
            { nama: "JVP", temuan: "Bisa meningkat sedikit", signifikan: false }
          ],
          inspeksiThorax: [
            { nama: "Auskultasi Jantung", temuan: "Irama cepat reguler, tidak ada murmur", signifikan: true }
          ],
          inspeksiAbdomen: [{ nama: "Inspeksi Abdomen", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiEkstremitas: [{ nama: "Inspeksi Ekstremitas", temuan: "Akral hangat, tidak ada edema", signifikan: false }],
          signKhas: [
            { nama: "EKG – Cek irama", temuan: "Takikardia reguler 150-250x/menit, QRS sempit", signifikan: true }
          ],
          distraksi: [
            { nama: "Pemeriksaan Neurologis", temuan: "Normal", signifikan: false },
            { nama: "Perkusi Paru", temuan: "Sonor bilateral normal", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Urinalisis", temuan: "Dalam batas normal", signifikan: false },
            { nama: "EKG 12 Lead", temuan: "Takikardia HR 180-200 bpm, QRS sempit (<0,12s), gelombang P tidak jelas – SVT", signifikan: true },
            { nama: "USG Jantung (Ekokardiografi)", temuan: "Fungsi jantung normal", signifikan: false },
            { nama: "Rontgen Thorax PA", temuan: "Dalam batas normal", signifikan: false }
          ],
          khas: [
            { nama: "Elektrolit (K, Ca, Mg)", temuan: "Perlu cek – hipokalemia bisa memicu SVT", signifikan: true },
            { nama: "TSH (fungsi tiroid)", temuan: "Perlu cek untuk menyingkirkan hipertiroid", signifikan: true }
          ],
          distraksi: [
            { nama: "Troponin I", temuan: "Mungkin sedikit meningkat jika episode panjang", signifikan: false },
            { nama: "Kortisol", temuan: "Normal", signifikan: false }
          ]
        },
        dd: ["SVT", "Sinus Takikardia", "AF RVR", "Atrial Flutter 2:1", "VT (QRS lebar)"],
        diagnosisKerja: "Supraventricular Tachycardia (SVT)",
        tatalaksana: [
          { opsi: "Manuver vagal dulu: Valsalva maneuver (mengejan 10-15 detik)", benar: true },
          { opsi: "Carotid sinus massage (satu sisi)", benar: true },
          { opsi: "Adenosin 6mg IV bolus cepat jika manuver gagal (lini pertama farmako)", benar: true },
          { opsi: "Diltiazem atau Verapamil IV jika adenosin tidak respons", benar: true },
          { opsi: "Kardioversi sinkron jika tidak stabil hemodinamis", benar: true },
          { opsi: "Rujuk Sp.JP untuk evaluasi dan ablasi kateter", benar: true },
          { opsi: "Beta-blocker oral sebagai terapi akut utama", benar: false },
          { opsi: "Atropin IV untuk memperlambat jantung", benar: false }
        ],
        edukasi: [
          { opsi: "Hindari pemicu: kafein, alkohol, merokok, kurang tidur, stres", benar: true },
          { opsi: "Ajarkan manuver vagal untuk episode di rumah", benar: true },
          { opsi: "Jika episode sering atau lama → pertimbangkan ablasi kateter (kuratif)", benar: true },
          { opsi: "Kontrol Sp.JP untuk evaluasi lebih lanjut", benar: true },
          { opsi: "Tidak perlu ke dokter jika berdebar bisa berhenti sendiri", benar: false },
          { opsi: "Konsumsi kafein dalam jumlah banyak tidak masalah", benar: false }
        ]
      }
    ],
    respirasi: [
      {
        id: "tb_paru",
        judulKasus: "Tn. Bambang, 30 tahun, datang dengan keluhan batuk berdahak lebih dari 3 minggu, keringat malam, dan berat badan menurun",
        nama: "Kasus 1 – Respirasi",
        identitas: "Bambang, 30 tahun, Karyawan Swasta, Papua",
        keluhanUtama: "Batuk berdahak sejak 2 bulan yang lalu",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Sudah berapa lama batuk berlangsung?", temuan: "Batuk berdahak warna hijau kental sejak 2 bulan" },
            { pertanyaan: "Apakah ada darah dalam dahak?", temuan: "Tidak ada darah dalam dahak" },
            { pertanyaan: "Apakah ada demam, terutama berkeringat malam?", temuan: "Demam ada, berkeringat malam hari" },
            { pertanyaan: "Apakah ada penurunan berat badan?", temuan: "BB turun 3 kg dalam 2 bulan" },
            { pertanyaan: "Apakah nafsu makan berkurang?", temuan: "Ya, nafsu makan turun" },
            { pertanyaan: "Apakah sering bepergian ke Papua?", temuan: "Sering pulang-pergi Papua (daerah endemis TB)" },
            { pertanyaan: "Apakah ada kontak dengan penderita TB sebelumnya?", temuan: "Belum diketahui, perlu konfirmasi" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada sesak napas?", temuan: "Tidak ada sesak napas" },
            { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
            { pertanyaan: "Apakah ada riwayat asma atau alergi pernapasan?", temuan: "Tidak ada riwayat asma" },
            { pertanyaan: "Apakah konsumsi alkohol?", temuan: "Tidak konsumsi alkohol" },
            { pertanyaan: "Apakah kondisi lingkungan dan ventilasi rumah?", temuan: "Lingkungan bersih, ventilasi baik" },
            { pertanyaan: "Apakah ada riwayat DM?", temuan: "Tidak ada riwayat DM" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "Tekanan Darah", temuan: "130/90 mmHg (normal-tinggi)", signifikan: false },
            { nama: "Nadi", temuan: "88x/menit (normal)", signifikan: false },
            { nama: "RR", temuan: "20x/menit (sedikit meningkat)", signifikan: false },
            { nama: "Suhu", temuan: "37,5°C (subfebris)", signifikan: true },
            { nama: "BB/TB", temuan: "65 kg / 175 cm – IMT Normal tapi BB turun 3 kg", signifikan: true }
          ],
          inspeksiKepala: [{ nama: "Inspeksi Mata dan Mukosa", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiLeher: [{ nama: "Palpasi KGB Leher", temuan: "Tidak teraba limfadenopati", signifikan: false }],
          inspeksiThorax: [
            { nama: "Inspeksi Dada", temuan: "Simetris, dalam batas normal", signifikan: false },
            { nama: "Palpasi Thorax (Fremitus)", temuan: "Fremitus meningkat di lapang paru apex bilateral", signifikan: true },
            { nama: "Perkusi Paru", temuan: "Redup di apex paru bilateral", signifikan: true },
            { nama: "Auskultasi Paru", temuan: "Suara napas bronkial; ronki (+) di apex paru bilateral", signifikan: true }
          ],
          inspeksiAbdomen: [{ nama: "Inspeksi Abdomen", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiEkstremitas: [{ nama: "Inspeksi Ekstremitas", temuan: "Tidak ada edema, akral hangat", signifikan: false }],
          signKhas: [],
          distraksi: [
            { nama: "Pemeriksaan Kulit (lesi, kemerahan)", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Pemeriksaan KGB Aksila", temuan: "Tidak teraba", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "Leukositosis 14.000, LED meningkat", signifikan: true },
            { nama: "Urinalisis", temuan: "Dalam batas normal", signifikan: false },
            { nama: "EKG", temuan: "Dalam batas normal", signifikan: false },
            { nama: "USG Abdomen", temuan: "Tidak ada temuan bermakna", signifikan: false },
            { nama: "Rontgen Thorax AP", temuan: "Infiltrat di apex paru bilateral; corakan bronkovaskuler menebal", signifikan: true }
          ],
          khas: [
            { nama: "BTA Sputum Sewaktu 1", temuan: "POSITIF (+)", signifikan: true },
            { nama: "BTA Sputum Pagi", temuan: "POSITIF (+)", signifikan: true },
            { nama: "BTA Sputum Sewaktu 2", temuan: "Negatif (-)", signifikan: false },
            { nama: "Kultur Sputum", temuan: "Mycobacterium tuberculosis (+)", signifikan: true }
          ],
          distraksi: [
            { nama: "Tes Tuberkulin (Mantoux)", temuan: "Positif (indurasi >10mm)", signifikan: false },
            { nama: "GeneXpert MTB/RIF", temuan: "MTB Detected – sensitif rifampisin", signifikan: false },
            { nama: "Anti-HIV", temuan: "Perlu dilakukan (faktor risiko TB-HIV)", signifikan: false }
          ]
        },
        dd: ["TB Paru", "Bronkitis Kronik", "Bronkiektasis", "Pneumonia"],
        diagnosisKerja: "Tuberkulosis Paru – Kasus Baru",
        tatalaksana: [
          { opsi: "OAT Kategori I – 4KDT Fase Intensif 2 bulan (2HRZE)", benar: true },
          { opsi: "Rifampisin 150mg + Isoniazid 75mg + Pirazinamid 400mg + Etambutol 275mg", benar: true },
          { opsi: "Vitamin B6 100mg 1x/hari (profilaksis neuropati Isoniazid)", benar: true },
          { opsi: "Paracetamol 500mg jika ada demam", benar: true },
          { opsi: "OAT hanya 2 bulan fase intensif saja", benar: false },
          { opsi: "Antibiotik Amoxicillin sebagai terapi TB", benar: false }
        ],
        edukasi: [
          { opsi: "Pengobatan 6 bulan total, tidak boleh terlewat 1 hari pun", benar: true },
          { opsi: "PMO (Pengawas Minum Obat) harus ada", benar: true },
          { opsi: "Efek samping: Rifampisin (urin merah), Etambutol (gg. penglihatan)", benar: true },
          { opsi: "2 bulan pertama masih bisa menular; pakai masker", benar: true },
          { opsi: "OAT boleh dihentikan jika sudah merasa sehat", benar: false },
          { opsi: "Tidak perlu PMO, pasien bisa minum sendiri", benar: false }
        ]
      },
      {
        id: "asma",
        judulKasus: "Tn. Deni, 25 tahun, datang dengan keluhan napas berbunyi ngik-ngik, sesak, dan dada terasa berat yang sering kambuh",
        nama: "Kasus 2 – Respirasi",
        identitas: "Deni, 25 tahun, Jogja",
        keluhanUtama: "Sesak napas sejak 20 menit setelah ke rumah teman yang memelihara anjing & kucing",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Kapan dan bagaimana sesak napas mulai?", temuan: "Sesak 20 menit lalu setelah di rumah teman yang ada anjing & kucing" },
            { pertanyaan: "Apakah sudah dicoba inhaler?", temuan: "Sudah dicoba inhaler, hanya sedikit membaik" },
            { pertanyaan: "Apakah pernah sesak seperti ini sebelumnya?", temuan: "Ya, riwayat sesak ±1x/bulan, biasanya membaik dengan inhaler Ventolin" },
            { pertanyaan: "Apakah ada riwayat asma?", temuan: "Asma sejak 1 tahun" },
            { pertanyaan: "Apakah ada riwayat alergi?", temuan: "Alergi udang (+)" },
            { pertanyaan: "Apakah ada anggota keluarga dengan asma?", temuan: "Ayah asma (+)" },
            { pertanyaan: "Apakah ada paparan asap rokok?", temuan: "Tidak merokok aktif, tapi lingkungan pertemanan merokok (pasif)" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada demam?", temuan: "Tidak ada demam" },
            { pertanyaan: "Apakah ada dahak?", temuan: "Tidak ada dahak" },
            { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi obat" },
            { pertanyaan: "Apakah ada mual atau muntah?", temuan: "Tidak ada mual muntah" },
            { pertanyaan: "Apakah ada nyeri dada?", temuan: "Tidak ada nyeri dada yang berarti" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "SpO2", temuan: "91-94% (RENDAH, hipoksemia)", signifikan: true },
            { nama: "Tekanan Darah", temuan: "120/80 mmHg (normal)", signifikan: false },
            { nama: "Nadi", temuan: "104x/menit (takikardia)", signifikan: true },
            { nama: "RR", temuan: "30x/menit (takipnea)", signifikan: true },
            { nama: "Suhu", temuan: "Normal", signifikan: false }
          ],
          inspeksiKepala: [{ nama: "Inspeksi Kepala", temuan: "Dalam batas normal, tidak ada sianosis sentral", signifikan: false }],
          inspeksiLeher: [
            { nama: "Otot Bantu Napas SCM", temuan: "SCM (Sternocleidomastoideus) menggunakan otot bantu napas", signifikan: true }
          ],
          inspeksiThorax: [
            { nama: "Inspeksi Dada", temuan: "Retraksi dinding dada (+), menggunakan otot intercostalis", signifikan: true },
            { nama: "Perkusi Paru", temuan: "Sonor (+/+) bilateral, batas pengembangan normal", signifikan: false },
            { nama: "Auskultasi Paru", temuan: "WHEEZING (+) bilateral, ronki (-)", signifikan: true }
          ],
          inspeksiAbdomen: [{ nama: "Inspeksi Abdomen", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiEkstremitas: [{ nama: "Inspeksi Ekstremitas", temuan: "Akral hangat, tidak ada edema", signifikan: false }],
          signKhas: [],
          distraksi: [
            { nama: "Palpasi Fremitus", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Perkusi Paru (batas paru-hepar)", temuan: "Normal", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "LED sedikit meningkat, eosinofil meningkat", signifikan: true },
            { nama: "Urinalisis", temuan: "Dalam batas normal", signifikan: false },
            { nama: "EKG", temuan: "Sinus takikardia", signifikan: false },
            { nama: "USG Toraks", temuan: "Tidak diperlukan saat ini", signifikan: false },
            { nama: "Rontgen Thorax AP", temuan: "Corakan bronkovaskuler normal, tidak ada infiltrat, CTR <0,5", signifikan: false }
          ],
          khas: [
            { nama: "Spirometri", temuan: "FEV1/FVC <70%; reversibel setelah bronkodilator – ASMA", signifikan: true },
            { nama: "Peak Flow Meter", temuan: "PEFR menurun, meningkat setelah bronkodilator", signifikan: true }
          ],
          distraksi: [
            { nama: "BTA Sputum", temuan: "Negatif (menyingkirkan TB)", signifikan: false },
            { nama: "IgE Total", temuan: "Meningkat (mendukung atopi/alergi)", signifikan: false }
          ]
        },
        dd: ["Asma Bronkial", "PPOK", "Bronkitis Akut", "Hiperventilasi"],
        diagnosisKerja: "Asma Bronkial Intermittent dengan Serangan Akut Derajat Sedang",
        tatalaksana: [
          { opsi: "O2 Nasal Canul (target SpO2 >95%)", benar: true },
          { opsi: "Nebulizer Salbutamol 2,5 mg (evaluasi 10-15 menit, maks 3x)", benar: true },
          { opsi: "Methylprednisolone tablet (controller)", benar: true },
          { opsi: "Salbutamol inhaler sebagai reliever (take-home)", benar: true },
          { opsi: "Amoksisilin sebagai terapi utama asma akut", benar: false },
          { opsi: "Berbaring terlentang untuk mempermudah pernapasan", benar: false }
        ],
        edukasi: [
          { opsi: "Hindari pencetus: bulu hewan, asap rokok, debu", benar: true },
          { opsi: "Pakai masker dan jauhi perokok", benar: true },
          { opsi: "Tanda bahaya: sesak menetap, tangan dingin, bibir membiru → segera ke RS", benar: true },
          { opsi: "Kontrol teratur untuk evaluasi asma", benar: true },
          { opsi: "Tidak perlu bawa inhaler ke mana-mana", benar: false },
          { opsi: "Bola hewan tidak perlu dihindari jika sudah minum obat", benar: false }
        ]
      },
      {
        id: "ppok",
        judulKasus: "Tn. Yudho, 65 tahun, datang dengan keluhan sesak napas yang semakin berat dalam beberapa hari terakhir, batuk berdahak, dan riwayat merokok lama",
        nama: "Kasus 3 – Respirasi",
        identitas: "Yudho, 65 tahun, Penjaga Toko Kelontong",
        keluhanUtama: "Sesak terus-menerus sejak 5 bulan, memburuk; batuk dahak kental putih 1 minggu",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Sudah berapa lama sesak napas?", temuan: "Sesak sejak 5 bulan, terus-terusan, saat istirahat pun sesak" },
            { pertanyaan: "Apakah ada batuk berdahak?", temuan: "Batuk berdahak kental putih 1 minggu, memburuk saat lembur" },
            { pertanyaan: "Apakah merokok?", temuan: "Merokok 2 bungkus/hari sejak usia 25 tahun (IB >40 pack-year)" },
            { pertanyaan: "Apakah pernah sesak dan bisa membaik sebelumnya?", temuan: "Pernah sesak sebelumnya dan bisa membaik (riwayat eksaserbasi)" },
            { pertanyaan: "Apakah ada riwayat asma di keluarga?", temuan: "Ibu asma (+)" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah konsumsi alkohol?", temuan: "Tidak ada konsumsi alkohol" },
            { pertanyaan: "Apakah ada demam?", temuan: "Tidak ada demam saat ini" },
            { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
            { pertanyaan: "Apakah ada mual atau muntah?", temuan: "Tidak ada mual muntah" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "SpO2", temuan: "94% (rendah)", signifikan: true },
            { nama: "Tekanan Darah", temuan: "130/90 mmHg", signifikan: false },
            { nama: "Nadi", temuan: "110x/menit (takikardia)", signifikan: true },
            { nama: "RR", temuan: "28x/menit (takipnea)", signifikan: true },
            { nama: "Suhu", temuan: "Normal", signifikan: false }
          ],
          inspeksiKepala: [{ nama: "Inspeksi Bibir", temuan: "Pursed lip breathing (+) – khas PPOK", signifikan: true }],
          inspeksiLeher: [{ nama: "Inspeksi Leher", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiThorax: [
            { nama: "Inspeksi Dada (Barrel Chest)", temuan: "Barrel chest (+) – dada membulat seperti tong, khas PPOK", signifikan: true },
            { nama: "Retraksi Otot Intercostal", temuan: "Retraksi m. intercostalis (+)", signifikan: true },
            { nama: "Palpasi (Fremitus)", temuan: "Taktil fremitus MENURUN bilateral", signifikan: true },
            { nama: "Perkusi Paru", temuan: "HIPERSONOR bilateral (emfisema)", signifikan: true },
            { nama: "Auskultasi Paru", temuan: "Suara napas vesikuler menurun; wheezing (+) bilateral", signifikan: true }
          ],
          inspeksiAbdomen: [{ nama: "Inspeksi Abdomen", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiEkstremitas: [
            { nama: "Jari Tabuh (Clubbing Finger)", temuan: "Tidak ada jari tabuh", signifikan: false }
          ],
          signKhas: [],
          distraksi: [
            { nama: "Palpasi Hepar", temuan: "Tidak ada hepatomegali", signifikan: false },
            { nama: "Edema Kaki", temuan: "Tidak ada edema", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Urinalisis", temuan: "Dalam batas normal", signifikan: false },
            { nama: "EKG", temuan: "Sinus takikardia, tanda kor pulmonal", signifikan: false },
            { nama: "USG Toraks", temuan: "Tidak diperlukan saat akut", signifikan: false },
            { nama: "Rontgen Thorax AP", temuan: "SIC melebar, hiperlusen (barrel chest), bronkovaskuler meningkat", signifikan: true }
          ],
          khas: [
            { nama: "Spirometri", temuan: "FEV1/FVC = 0,7 (obstruksi); FEV1 50-80% (derajat sedang) – PPOK tidak reversibel", signifikan: true }
          ],
          distraksi: [
            { nama: "BTA Sputum", temuan: "Negatif", signifikan: false },
            { nama: "AGD (Analisis Gas Darah)", temuan: "Hipoksemia, hiperkapnia ringan", signifikan: false },
            { nama: "D-Dimer", temuan: "Normal", signifikan: false }
          ]
        },
        dd: ["PPOK", "Asma Bronkial", "Bronkiektasis"],
        diagnosisKerja: "PPOK Persisten Sedang Eksaserbasi Akut",
        tatalaksana: [
          { opsi: "O2 Nasal Canul 3 L/menit", benar: true },
          { opsi: "Combivent inhaler (Ipratropium + Salbutamol) – bronkodilator", benar: true },
          { opsi: "Ambroxol 30mg 3x/hari (mukolotik untuk dahak kental)", benar: true },
          { opsi: "Rujuk Sp. Paru untuk tatalaksana lanjut", benar: true },
          { opsi: "Berhenti merokok (intervensi paling penting)", benar: true },
          { opsi: "O2 tinggi >5 L/menit (risiko CO2 narkosis)", benar: false },
          { opsi: "Salbutamol nebulizer sebagai terapi utama PPOK", benar: false }
        ],
        edukasi: [
          { opsi: "Berhenti merokok – intervensi paling penting untuk PPOK", benar: true },
          { opsi: "Kurangi aktivitas fisik berat yang memicu sesak", benar: true },
          { opsi: "Kontrol rutin ke Sp. Paru", benar: true },
          { opsi: "Inhaler digunakan teratur sesuai petunjuk dokter", benar: true },
          { opsi: "Merokok tidak berpengaruh pada PPOK jika sudah ada obat", benar: false },
          { opsi: "Tidak perlu kontrol dokter jika sesak tidak berat", benar: false }
        ]
      },
      {
        id: "pneumonia",
        judulKasus: "Tn. Budi, 40 tahun, datang dengan keluhan demam tinggi, batuk berdahak kuning kehijauan, dan nyeri dada saat bernapas dalam",
        nama: "Kasus 4 – Respirasi",
        identitas: "Budi, 40 tahun, Supir Bus, Godean",
        keluhanUtama: "Batuk berdahak 1 minggu, demam, sesak, dada berat",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Sudah berapa lama batuk berlangsung?", temuan: "Batuk sudah 1 minggu, terus-menerus" },
            { pertanyaan: "Bagaimana warna dan konsistensi dahak?", temuan: "Dahak awalnya kuning, kini hijau kental" },
            { pertanyaan: "Apakah ada demam?", temuan: "Demam dan menggigil sejak 3 hari" },
            { pertanyaan: "Apakah ada sesak napas?", temuan: "Sesak napas saat bangun tidur pagi ini" },
            { pertanyaan: "Apakah ada dada terasa berat?", temuan: "Dada terasa berat" },
            { pertanyaan: "Apakah sudah minum obat?", temuan: "Sudah beli obat batuk warung, tidak membaik" },
            { pertanyaan: "Apakah merokok?", temuan: "Merokok 1 bungkus/hari" },
            { pertanyaan: "Apakah nafsu makan turun?", temuan: "Ya, nafsu makan turun" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada darah dalam dahak?", temuan: "Tidak ada darah dalam dahak" },
            { pertanyaan: "Apakah ada konsumsi alkohol?", temuan: "Tidak ada konsumsi alkohol" },
            { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
            { pertanyaan: "Apakah ada mual atau muntah?", temuan: "Tidak ada mual muntah" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "Tekanan Darah", temuan: "130/80 mmHg (normal)", signifikan: false },
            { nama: "Nadi", temuan: "110x/menit (takikardia)", signifikan: true },
            { nama: "RR", temuan: "24x/menit (takipnea)", signifikan: true },
            { nama: "Suhu", temuan: "38,7°C (DEMAM)", signifikan: true }
          ],
          inspeksiKepala: [{ nama: "Inspeksi Bibir", temuan: "Pursed lip breathing (+)", signifikan: false }],
          inspeksiLeher: [{ nama: "Inspeksi Leher", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiThorax: [
            { nama: "Inspeksi Dada", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Palpasi (Fremitus)", temuan: "FREMITUS MENINGKAT di paru basal kiri", signifikan: true },
            { nama: "Perkusi Paru", temuan: "REDUP di basal paru kiri (semua lapang lain sonor)", signifikan: true },
            { nama: "Auskultasi Paru", temuan: "Suara napas bronkial; RONKI (+) di basal paru kiri", signifikan: true }
          ],
          inspeksiAbdomen: [{ nama: "Inspeksi Abdomen", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiEkstremitas: [{ nama: "Inspeksi Ekstremitas", temuan: "Akral hangat, tidak ada edema", signifikan: false }],
          signKhas: [],
          distraksi: [
            { nama: "Perkusi Apex Paru", temuan: "Sonor (tidak ada tanda TB apex)", signifikan: false },
            { nama: "Auskultasi Jantung", temuan: "S1 S2 normal", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "LEUKOSITOSIS 15.000 (infeksi bakteri)", signifikan: true },
            { nama: "Urinalisis", temuan: "Dalam batas normal", signifikan: false },
            { nama: "EKG", temuan: "Sinus takikardia", signifikan: false },
            { nama: "USG Toraks", temuan: "Konsolidasi di basal paru kiri", signifikan: true },
            { nama: "Rontgen Thorax AP", temuan: "INFILTRAT di paru basal kiri; corakan meningkat di hiler", signifikan: true }
          ],
          khas: [
            { nama: "Kultur Sputum", temuan: "Streptococcus Pneumoniae (+)", signifikan: true },
            { nama: "BTA Sputum", temuan: "Negatif (menyingkirkan TB)", signifikan: true },
            { nama: "CURB-65 Score", temuan: "Hitung untuk menentukan rawat inap/jalan", signifikan: true }
          ],
          distraksi: [
            { nama: "Procalcitonin", temuan: "Meningkat (infeksi bakteri)", signifikan: false },
            { nama: "CRP", temuan: "Meningkat (inflamasi)", signifikan: false }
          ]
        },
        dd: ["Pneumonia (CAP)", "TB Paru", "Bronkitis Kronik", "Bronkiektasis"],
        diagnosisKerja: "Pneumonia Lobaris Basal Sinistra – CAP",
        tatalaksana: [
          { opsi: "Co-amoxiclav 625mg tiap 8 jam (antibiotik lini pertama)", benar: true },
          { opsi: "Ambroxol 30mg 3x/hari (mukolotik)", benar: true },
          { opsi: "Paracetamol 500mg untuk demam", benar: true },
          { opsi: "Azithromycin 500mg hari 1, lalu 250mg hari 2-5 (alternatif)", benar: true },
          { opsi: "OAT langsung tanpa bukti TB", benar: false },
          { opsi: "Antibiotik dihentikan begitu demam turun", benar: false }
        ],
        edukasi: [
          { opsi: "Antibiotik harus dihabiskan", benar: true },
          { opsi: "Setelah obat habis → kontrol + foto thorax ulang", benar: true },
          { opsi: "Perbanyak istirahat dan minum air putih", benar: true },
          { opsi: "Berhenti merokok selama pengobatan", benar: true },
          { opsi: "Antibiotik bisa dihentikan jika merasa baik", benar: false },
          { opsi: "Tidak perlu foto thorax ulang setelah sembuh", benar: false }
        ]
      }
    ],
    genitourinaria: [
      {
        id: "isk_sistitis",
        judulKasus: "Tn. Bobi, 30 tahun, datang dengan keluhan nyeri saat BAK, rasa panas di uretra, dan frekuensi BAK yang meningkat",
        nama: "Kasus 1 – Genitourinaria",
        identitas: "Bobi, 30 tahun, Resepsionis",
        keluhanUtama: "Beser – nyeri saat BAK, kencing sedikit-sedikit",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Sudah berapa lama nyeri saat BAK?", temuan: "Nyeri saat BAK sejak 2 hari, hilang timbul" },
            { pertanyaan: "Bagaimana karakter nyeri?", temuan: "Terasa panas di perut bawah saat berkemih" },
            { pertanyaan: "Apakah ada nyeri perut bawah?", temuan: "Nyeri perut bagian bawah, tidak menjalar; VAS 5" },
            { pertanyaan: "Apakah BAK terasa tidak tuntas?", temuan: "Ya, BAK sedikit-sedikit dan tidak tuntas" },
            { pertanyaan: "Apakah sering menahan kencing?", temuan: "Sering menahan kencing karena banyak pengunjung" },
            { pertanyaan: "Apakah ada demam?", temuan: "Demam 2 hari" },
            { pertanyaan: "Apakah pernah keluhan serupa sebelumnya?", temuan: "Pernah keluhan serupa 1 bulan lalu, membaik banyak minum air" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada darah dalam urin?", temuan: "Tidak ada darah dalam urin" },
            { pertanyaan: "Apakah ada nyeri pinggang?", temuan: "Tidak ada nyeri pinggang (menyingkirkan pielonefritis)" },
            { pertanyaan: "Apakah ada konsumsi alkohol?", temuan: "Tidak ada konsumsi alkohol" },
            { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
            { pertanyaan: "Apakah ada cairan dari genital?", temuan: "Tidak ada cairan abnormal dari genital" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "Tekanan Darah", temuan: "120/70 mmHg (normal)", signifikan: false },
            { nama: "Nadi", temuan: "99x/menit (sedikit takikardia karena nyeri/demam)", signifikan: false },
            { nama: "RR", temuan: "16x/menit (normal)", signifikan: false },
            { nama: "Suhu", temuan: "36,7°C (normal – demam sudah turun)", signifikan: false }
          ],
          inspeksiKepala: [{ nama: "Inspeksi Kepala", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiLeher: [{ nama: "Inspeksi Leher", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiThorax: [{ nama: "Inspeksi Thorax", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiAbdomen: [
            { nama: "Palpasi Suprapubik", temuan: "NYERI TEKAN SUPRAPUBIK (+) – tanda sistitis", signifikan: true },
            { nama: "Nyeri Ketok Costovertebra", temuan: "NEGATIF – menyingkirkan pielonefritis", signifikan: true },
            { nama: "Ballottement Ginjal", temuan: "Ballottement test (-)", signifikan: false }
          ],
          inspeksiEkstremitas: [{ nama: "Inspeksi Ekstremitas", temuan: "Dalam batas normal", signifikan: false }],
          signKhas: [],
          distraksi: [
            { nama: "Rectal Touche", temuan: "Tidak diperlukan pada kasus ini", signifikan: false },
            { nama: "Pemeriksaan Genitalia Eksterna", temuan: "Dalam batas normal", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "Leukosit 12.000, Neutrofil 80%", signifikan: true },
            { nama: "Urinalisis", temuan: "Protein +++, Nitrit ++, Leukosit esterase ++, Leukosit 6/LPB, Mikroorganisme +++", signifikan: true },
            { nama: "EKG", temuan: "Tidak diperlukan saat ini", signifikan: false },
            { nama: "USG Kandung Kemih", temuan: "Dinding kandung kemih menebal (sistitis)", signifikan: true },
            { nama: "Rontgen Abdomen (BNO)", temuan: "Tidak ada batu radioopaque", signifikan: false }
          ],
          khas: [
            { nama: "Kultur Urin", temuan: "E. coli 250.000/mL – KONFIRMASI BAKTERI", signifikan: true }
          ],
          distraksi: [
            { nama: "IVP (Pielografi Intravena)", temuan: "Tidak diperlukan untuk sistitis sederhana", signifikan: false },
            { nama: "PSA (Prostate Specific Antigen)", temuan: "Tidak diperlukan pada wanita muda", signifikan: false }
          ]
        },
        dd: ["ISK – Sistitis", "Urethritis", "BSK (Batu Saluran Kemih)", "Pielonefritis"],
        diagnosisKerja: "ISK – Sistitis",
        tatalaksana: [
          { opsi: "Ciprofloxacin 500mg tiap 12 jam selama 7 hari (dihabiskan)", benar: true },
          { opsi: "Paracetamol 500mg untuk demam", benar: true },
          { opsi: "Banyak minum air putih", benar: true },
          { opsi: "Kotrimoksazol sebagai alternatif antibiotik", benar: true },
          { opsi: "Amoxicillin saja sebagai terapi ISK (banyak resisten)", benar: false },
          { opsi: "Antibiotik dihentikan setelah nyeri BAK hilang", benar: false }
        ],
        edukasi: [
          { opsi: "Minum air putih banyak, jangan tahan kencing", benar: true },
          { opsi: "Jaga kebersihan genital dan lingkungan", benar: true },
          { opsi: "Antibiotik harus dihabiskan", benar: true },
          { opsi: "Kontrol 5 hari lagi untuk evaluasi", benar: true },
          { opsi: "Tidak perlu kontrol jika sudah tidak nyeri BAK", benar: false },
          { opsi: "Boleh menahan kencing selama sudah minum antibiotik", benar: false }
        ]
      },
      {
        id: "ureterolithiasis",
        judulKasus: "Tn. Joko, 35 tahun, datang dengan keluhan nyeri pinggang kiri mendadak seperti ditusuk, menjalar ke selangkangan",
        nama: "Kasus 2 – Genitourinaria",
        identitas: "Joko, 35 tahun, Security, Babarsari",
        keluhanUtama: "Nyeri pinggang kiri – nyeri seperti diremas, hilang timbul, menyebar ke punggung",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Bagaimana karakter nyeri pinggang?", temuan: "Nyeri seperti diremas, hilang timbul (kolik)" },
            { pertanyaan: "Apakah nyeri menyebar ke suatu tempat?", temuan: "Nyeri menyebar sampai punggung bawah" },
            { pertanyaan: "Kapan nyeri mulai?", temuan: "Nyeri sejak 1 jam yang lalu, mendadak; VAS 7-8" },
            { pertanyaan: "Apakah ada mual atau muntah?", temuan: "Ya, mual muntah 1x" },
            { pertanyaan: "Apakah pernah nyeri serupa sebelumnya?", temuan: "Riwayat nyeri serupa 1 tahun lalu, mereda karena banyak minum" },
            { pertanyaan: "Bagaimana kebiasaan minum?", temuan: "Sering menahan kencing, minum kopi dan minuman kaleng setiap hari" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada demam?", temuan: "Tidak ada demam" },
            { pertanyaan: "Apakah ada riwayat trauma?", temuan: "Tidak ada riwayat trauma" },
            { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
            { pertanyaan: "Apakah BAB dan BAK normal?", temuan: "BAB normal; BAK normal, tidak ada darah terlihat" },
            { pertanyaan: "Apakah ada riwayat DM atau hipertensi?", temuan: "DM dan hipertensi negatif" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "Tekanan Darah", temuan: "130/90 mmHg (sedikit meningkat karena nyeri)", signifikan: false },
            { nama: "Nadi", temuan: "92x/menit (sedikit meningkat karena nyeri)", signifikan: false },
            { nama: "RR", temuan: "18x/menit (normal)", signifikan: false },
            { nama: "Suhu", temuan: "36,7°C (normal)", signifikan: false }
          ],
          inspeksiKepala: [{ nama: "Inspeksi Kepala", temuan: "Tampak kesakitan, dalam batas normal", signifikan: false }],
          inspeksiLeher: [{ nama: "KGB Leher", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiThorax: [{ nama: "Inspeksi dan Auskultasi Thorax", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiAbdomen: [
            { nama: "Nyeri Ketok Costovertebra Sinistra", temuan: "NYERI KETOK CVA SINISTRA (+) – tanda batu ureter kiri", signifikan: true },
            { nama: "Nyeri Palpasi Suprapubik", temuan: "Tidak ada nyeri suprapubik", signifikan: false },
            { nama: "Ballottement Ginjal", temuan: "Ballottement (+) sinistra – ginjal membesar", signifikan: true }
          ],
          inspeksiEkstremitas: [{ nama: "Inspeksi Ekstremitas", temuan: "Akral hangat, dalam batas normal", signifikan: false }],
          signKhas: [],
          distraksi: [
            { nama: "Rectal Touche", temuan: "Tidak diperlukan pada kasus ini (tidak ada keluhan BAK bermasalah)", signifikan: false },
            { nama: "Pemeriksaan Genitalia Eksterna", temuan: "Tidak diperlukan pada kasus ini", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Urinalisis", temuan: "Kristal +++ (oksalat/kalsium), Nitrit (+), Leukosit esterase (+)", signifikan: true },
            { nama: "EKG", temuan: "Tidak diperlukan saat ini", signifikan: false },
            { nama: "USG Ginjal", temuan: "Hidronefrosis sinistra grade 1, batu tidak terlihat jelas", signifikan: true },
            { nama: "Rontgen BNO (Abdomen Polos)", temuan: "Tampak radiopaque setinggi VL3 sinistra – BATU RADIOOPAQUE", signifikan: true }
          ],
          khas: [
            { nama: "BNO IVP (Intravenous Pyelography)", temuan: "Batu ureter sinistra VL3, ukuran 0,5×0,5 cm", signifikan: true },
            { nama: "Fungsi Ginjal (Kreatinin, Ureum)", temuan: "Dalam batas normal", signifikan: false }
          ],
          distraksi: [
            { nama: "CT Scan Abdomen tanpa kontras", temuan: "Gold standard untuk batu, tampak batu ureter kiri", signifikan: false },
            { nama: "Kultur Urin", temuan: "Dalam batas normal", signifikan: false }
          ]
        },
        dd: ["Ureterolithiasis", "ISK", "Kolik Renal", "Nefrolithiasis", "Pielonefritis"],
        diagnosisKerja: "Ureterolithiasis Sinistra / BSK Ureter",
        tatalaksana: [
          { opsi: "Rujuk Sp. Urologi untuk evaluasi dan tatalaksana batu", benar: true },
          { opsi: "Asam Mefenamat 500mg 3x/hari (analgesik, lebih aman untuk ginjal)", benar: true },
          { opsi: "Domperidone 10mg untuk mual", benar: true },
          { opsi: "Banyak minum air putih minimal 2 L/hari", benar: true },
          { opsi: "Na Diklofenak jangka panjang untuk nyeri ginjal", benar: false },
          { opsi: "Operasi segera tanpa evaluasi ukuran batu", benar: false }
        ],
        edukasi: [
          { opsi: "Kurangi minuman bersoda, teh, kopi", benar: true },
          { opsi: "Perbanyak air putih minimal 2 L/hari", benar: true },
          { opsi: "Konsumsi jeruk nipis/lemon setelah makan", benar: true },
          { opsi: "Kurangi protein hewani (daging merah, jeroan) dan kalsium tinggi", benar: true },
          { opsi: "Tidak perlu kontrol jika nyeri sudah hilang", benar: false },
          { opsi: "Minum kopi baik untuk memperlancar kemih", benar: false }
        ]
      },
      {
        id: "torsio_testis",
        judulKasus: "Tn. Budi, 21 tahun, datang dengan keluhan nyeri testis kiri mendadak yang sangat hebat sejak 2 jam lalu",
        nama: "Kasus 3 – Genitourinaria",
        identitas: "Budi, 21 tahun, Mahasiswa",
        keluhanUtama: "Nyeri testis kiri mendadak sejak 6 jam yang lalu, saat bangun tidur",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Kapan dan bagaimana nyeri testis mulai?", temuan: "Nyeri testis kiri mendadak saat bangun tidur, 6 jam lalu" },
            { pertanyaan: "Apakah nyeri menjalar?", temuan: "Nyeri menjalar ke perut kiri bawah" },
            { pertanyaan: "Apakah ada mual atau muntah?", temuan: "Mual muntah 3x; VAS 9" },
            { pertanyaan: "Apakah ada aktivitas berat sebelumnya?", temuan: "Kemarin habis gym (faktor pencetus)" },
            { pertanyaan: "Apakah ada riwayat keluhan serupa?", temuan: "Belum pernah ada keluhan serupa" },
            { pertanyaan: "Apakah ada riwayat cedera atau trauma?", temuan: "Tidak ada riwayat cedera" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada hubungan seksual sebelumnya?", temuan: "Tidak ada hubungan seksual" },
            { pertanyaan: "Apakah ada demam?", temuan: "Tidak ada demam (menyingkirkan epididimitis/orkitis)" },
            { pertanyaan: "Apakah ada cairan/discharge dari uretra?", temuan: "Tidak ada discharge" },
            { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "Tekanan Darah", temuan: "140/80 mmHg (meningkat karena nyeri berat)", signifikan: false },
            { nama: "Nadi", temuan: "100x/menit (takikardia karena nyeri)", signifikan: false },
            { nama: "RR", temuan: "22x/menit", signifikan: false },
            { nama: "Suhu", temuan: "36,8°C (TIDAK DEMAM – penting!)", signifikan: true }
          ],
          inspeksiKepala: [{ nama: "Inspeksi Kepala", temuan: "Tampak kesakitan berat", signifikan: false }],
          inspeksiLeher: [{ nama: "Inspeksi Leher", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiThorax: [{ nama: "Inspeksi Thorax", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiAbdomen: [
            { nama: "Palpasi Abdomen", temuan: "Nyeri tekan ringan kuadran kiri bawah", signifikan: false }
          ],
          inspeksiEkstremitas: [{ nama: "Inspeksi Ekstremitas", temuan: "Dalam batas normal", signifikan: false }],
          signKhas: [
            { nama: "Inspeksi Skrotum", temuan: "Posisi testis kiri LEBIH TINGGI (high-riding testis)", signifikan: true },
            { nama: "Refleks Kremaster", temuan: "REFLEKS KREMASTER NEGATIF/HILANG – tanda khas torsio", signifikan: true },
            { nama: "Prehn Sign", temuan: "PREHN SIGN NEGATIF – nyeri tidak berkurang saat testis diangkat (beda epididimitis)", signifikan: true },
            { nama: "Palpasi Testis", temuan: "Edema testis, nyeri tekan (+)", signifikan: true }
          ],
          distraksi: [
            { nama: "Rectal Touche", temuan: "Tidak diperlukan pada kasus ini", signifikan: false },
            { nama: "Pemeriksaan Neurologis", temuan: "Normal", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "Dalam batas normal (tidak ada infeksi)", signifikan: false },
            { nama: "Urinalisis", temuan: "Dalam batas normal", signifikan: false },
            { nama: "EKG", temuan: "Tidak diperlukan saat ini", signifikan: false },
            { nama: "USG Doppler Skrotum", temuan: "TIDAK ADA/BERKURANG aliran darah testis kiri – GOLD STANDARD torsio", signifikan: true },
            { nama: "Rontgen Abdomen", temuan: "Tidak diperlukan saat ini", signifikan: false }
          ],
          khas: [],
          distraksi: [
            { nama: "Kultur Urin", temuan: "Negatif (tidak ada infeksi)", signifikan: false },
            { nama: "PSA", temuan: "Tidak relevan pada kasus ini", signifikan: false }
          ]
        },
        dd: ["Torsio Testis", "Epididimitis", "Orkitis", "Hernia Skrotalis", "Tumor Testis"],
        diagnosisKerja: "Torsio Testis",
        tatalaksana: [
          { opsi: "RUJUK SEGERA Sp. Urologi dalam <6-8 jam (viabilitas tergantung waktu!)", benar: true },
          { opsi: "Ketorolac injeksi 30mg untuk nyeri", benar: true },
          { opsi: "Domperidone untuk mual", benar: true },
          { opsi: "Detorsi manual sementara sambil menunggu operasi", benar: true },
          { opsi: "Orkiopeksi bilateral (operasi definitif)", benar: true },
          { opsi: "Berikan antibiotik dulu, tunggu 24 jam", benar: false },
          { opsi: "Berikan painkiller dan observasi di rumah", benar: false }
        ],
        edukasi: [
          { opsi: "Kondisi emergency! Testis bisa mati jika terlambat ditangani", benar: true },
          { opsi: "Viabilitas: <6 jam >90%, 6-12 jam ~50%, >12 jam <10%", benar: true },
          { opsi: "Setelah operasi: jangan banyak gerak dulu", benar: true },
          { opsi: "Terjadi karena testis terpelintir, umumnya setelah aktivitas berat", benar: true },
          { opsi: "Tidak apa-apa ditunggu dulu sampai besok", benar: false },
          { opsi: "Kompres hangat saja sudah cukup untuk mengurangi nyeri", benar: false }
        ]
      },
      {
        id: "bph",
        judulKasus: "Tn. Agus, 55 tahun, datang dengan keluhan sulit memulai BAK, pancaran lemah, dan rasa tidak tuntas setelah BAK",
        nama: "Kasus 4 – Genitourinaria",
        identitas: "Agus, 55 tahun, Petani",
        keluhanUtama: "Nyeri saat kencing, frekuensi sering, tidak puas, pipis menetes",
        anamnesis: {
          signifikan: [
            { pertanyaan: "Sudah berapa lama keluhan BAK bermasalah?", temuan: "Nyeri saat BAK sejak 3 bulan, makin lama makin sering" },
            { pertanyaan: "Apakah BAK terasa tidak puas?", temuan: "Ya, pollakiuria – sering tapi tidak puas" },
            { pertanyaan: "Apakah sering BAK malam hari?", temuan: "Nokturia; BAK 2-3x/jam" },
            { pertanyaan: "Apakah perlu mengejan saat BAK?", temuan: "Harus mengejan saat BAK; pipisnya menetes (obstruksi)" },
            { pertanyaan: "Apakah ada darah atau nanah dalam urin?", temuan: "Tidak ada darah dan nanah" },
            { pertanyaan: "Apakah pernah keluhan serupa?", temuan: "Pernah 1 tahun lalu, hilang sendiri dengan banyak minum air" }
          ],
          nonSignifikan: [
            { pertanyaan: "Apakah ada demam?", temuan: "Tidak ada demam" },
            { pertanyaan: "Apakah ada nyeri pinggang?", temuan: "Tidak ada nyeri pinggang" },
            { pertanyaan: "Apakah ada alergi obat?", temuan: "Tidak ada alergi" },
            { pertanyaan: "Apakah ada konsumsi alkohol atau kafein?", temuan: "Konsumsi kafein (kopi) setiap hari" },
            { pertanyaan: "Apakah ada hubungan seksual yang berisiko?", temuan: "Tidak ada riwayat hubungan seksual berisiko" }
          ]
        },
        pemeriksaanFisik: {
          vitalSign: [
            { nama: "Tekanan Darah", temuan: "120/80 mmHg (normal)", signifikan: false },
            { nama: "Nadi", temuan: "98x/menit (normal)", signifikan: false },
            { nama: "RR", temuan: "19x/menit (normal)", signifikan: false },
            { nama: "Suhu", temuan: "36,2°C (normal)", signifikan: false }
          ],
          inspeksiKepala: [{ nama: "Inspeksi Kepala", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiLeher: [{ nama: "Inspeksi Leher", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiThorax: [{ nama: "Inspeksi Thorax", temuan: "Dalam batas normal", signifikan: false }],
          inspeksiAbdomen: [
            { nama: "Inspeksi Abdomen (nyeri suprapubik)", temuan: "Mungkin ada distensi kandung kemih", signifikan: false }
          ],
          inspeksiEkstremitas: [{ nama: "Inspeksi Ekstremitas", temuan: "Dalam batas normal", signifikan: false }],
          signKhas: [
            { nama: "Inspeksi Genitalia Eksterna", temuan: "Tidak ada luka, darah, discharge, benjolan", signifikan: false },
            { nama: "Rectal Touche (RT)", temuan: "Teraba massa KENYAL (prostat), tidak nyeri, permukaan rata – khas BPH", signifikan: true },
            { nama: "Batas Prostat (RT)", temuan: "Ujung prostat tidak teraba, sulkus tidak teraba – membesar", signifikan: true },
            { nama: "KGB Inguinal", temuan: "Tidak ada pembesaran", signifikan: false }
          ],
          distraksi: [
            { nama: "Pemeriksaan Neurologi Lumbosacral", temuan: "Normal", signifikan: false }
          ]
        },
        penunjang: {
          standardAwal: [
            { nama: "Darah Lengkap", temuan: "Dalam batas normal", signifikan: false },
            { nama: "Urinalisis", temuan: "Leukosit ringan, sisanya normal", signifikan: false },
            { nama: "EKG", temuan: "Tidak diperlukan saat ini", signifikan: false },
            { nama: "USG Abdomen (Trans-abdominal)", temuan: "Volume prostat membesar, PVR meningkat", signifikan: true },
            { nama: "Rontgen Abdomen (BNO)", temuan: "Tidak ada batu radioopaque", signifikan: false }
          ],
          khas: [
            { nama: "PSA (Prostate Specific Antigen)", temuan: "Sedikit meningkat (menyingkirkan Ca Prostat)", signifikan: true },
            { nama: "Kreatinin dan Ureum", temuan: "Dalam batas normal (belum komplikasi ginjal)", signifikan: false },
            { nama: "IPSS Score", temuan: "Nilai IPSS menentukan derajat obstruksi", signifikan: true }
          ],
          distraksi: [
            { nama: "Biopsi Prostat", temuan: "Tidak diperlukan jika PSA normal dan RT khas BPH", signifikan: false },
            { nama: "Uretroskopi", temuan: "Tidak diperlukan untuk diagnosis awal", signifikan: false }
          ]
        },
        dd: ["BPH", "Prostatitis", "ISK", "Ca Prostat"],
        diagnosisKerja: "Benign Prostatic Hyperplasia (BPH)",
        tatalaksana: [
          { opsi: "Finasteride 5mg 1x/hari (5α-reductase inhibitor – mengecilkan prostat)", benar: true },
          { opsi: "Tamsulosin 0,4mg 1x/hari setelah makan malam (Alpha-1 blocker)", benar: true },
          { opsi: "Rujuk Sp. Urologi untuk evaluasi dan TURP jika diperlukan", benar: true },
          { opsi: "Kateterisasi jika ada retensi urin akut", benar: true },
          { opsi: "Antibiotik tanpa bukti infeksi bakteri", benar: false },
          { opsi: "Operasi langsung tanpa mencoba terapi medikamentosa dulu", benar: false }
        ],
        edukasi: [
          { opsi: "Jika kebelet pipis → jangan ditahan; hindari mengejan saat BAK", benar: true },
          { opsi: "Batasi minuman berkafein dan alkohol terutama malam hari", benar: true },
          { opsi: "Latihan otot panggul (Kegel exercise)", benar: true },
          { opsi: "Kontrol rutin dan evaluasi PSA", benar: true },
          { opsi: "BPH bisa sembuh sendiri tanpa pengobatan", benar: false },
          { opsi: "Minum kopi justru membantu melancarkan BAK", benar: false }
        ]
      }
    ]
  }
};
