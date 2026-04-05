'use client' // Menggunakan fitur client-side (interaksi & browser rendering)

export default function Portofolio() {
  // --- DATA ARRAY: Kumpulan objek untuk memudahkan update konten di satu tempat ---
  const pengalaman = [
    { j: 'Master Teacher OSN', s: 'Edumatrix Indonesia', t: 'Apr 2026 - Now' },
    { j: 'Online Math Tutor', s: 'Algonova', t: 'Mar 2026 - Now' },
    { j: 'Master Teacher Math dan Fisika', s: 'Brain Academy by Ruangguru', t: 'Okt - Des 2023' },
    { j: 'Guru Matematika', s: 'SMA IT Al Binaa Islamic Boarding School', t: 'Sept 2022 - Now' },
    { j: 'Guru Pengganti', s: 'SMA Islam Athirah Baruga Antang, Makassar', t: 'Sept 2022' },
    { j: 'Guru Honorer', s: 'SMA Negeri 2 Makassar', t: 'Jan 2021 - Jul 2022' },
    { j: 'Asisten Dosen Matakuliah Media Pembelajaran Matematika', s: 'STKIP YPUP', t: 'Jul 2018' }
  ]

  const karya = [
    { t: 'Kakalif.my.id', d: 'Website belajar matematika dengan asyik dan bisnis kak Alif (Mar 2026)', s: '📱' },
    { t: 'PIJAR (Pintar Belajar Rasio)', d: 'Aplikasi Pembelajaran Rasio/Perbandingan Interaktif berbasis Macromedia Flash MX 2004 (Apr 2025)', s: '💻' },
    { t: 'EMAS (Eliminasi dan Substitusi)', d: 'Aplikasi Eliminasi dan Substitusi SPLTV berbasis Macromedia Flash MX 2004 (Feb 2025)', s: '💻' },
    { t: 'TULIMATIKA', d: 'Aplikasi Matematika Inklusif untuk Teman Tuli berbasis Macromedia Flash MX 2004 (Tesis S2 Aug 2020 - Jan 2022)', s: '💻' },
    { t: 'MASA MATRIKS', d: 'Aplikasi Pembelajaran Matriks Interaktif berbasis Macromedia Flash MX 2004 (Skripsi S1 Aug 2015 - Des 2019)', s: '💻' },
    { t: 'Langkah Kecil, Karya Besar', d: 'Buku Motivasi & Self Improvement (2025)', s: '📚' },
    { t: 'Matematika Itu Asyik', d: 'Buku tentang kebermaknaan matematika (2025)', s: '📚' },
    { t: 'Belajar Python dari NOL', d: 'Buku Panduan Pemrograman untuk Pemula (2025)', s: '📚' },
    { t: 'TULIMATIKA (buku)', d: 'Buku Matematika untuk Siswa Tuli kelas VIII bahasan Bilangan Bulat dan Bangun Ruang Sisi Datar', s: '📚' },
    ]

  const skill = ['GNU/Linux','LibreOffice','Olive Video Editor','Pendidikan Matematika', 'Python Programming', 'Next.js & Web Dev', 'Macromedia Flash MX 2004', 'Bahasa Isyarat (Bisindo)', 'Arabic & English', 'Indonesia & Makassar']

  return (
    <main style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '80px' }}>
      
      {/* HERO SECTION: Bagian pembuka dengan gradasi warna profesional */}
      <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #118EEA 100%)', padding: '100px 20px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontWeight: 950, fontSize: '3.8rem', margin: 0, letterSpacing: '-2px' }}>Alif Rezky, M.Pd</h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.9, marginTop: '15px', fontWeight: 600 }}>Mathematics Educator | Tech Developer | Author</p>
          
          {/* TOMBOL SOSIAL MEDIA */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
             <a href="https://youtube.com/@kakalifgurumatematika" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 800, padding: '10px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.3)' }}>▶ YouTube</a>
             <a href="https://instagram.com/aalifrezky" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 800, padding: '10px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.3)' }}>📸 Instagram</a>
          </div>
        </div>
      </div>

      {/* GRID LAYOUT: Membagi konten menjadi 2 kolom (Profil & Pengalaman) */}
      <div style={{ maxWidth: '1000px', margin: '50px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        
        {/* KOLOM KIRI: Narasi Profil & Badge Skill */}
        <div>
          <h2 style={{ fontWeight: 900, borderLeft: '6px solid #118EEA', paddingLeft: '15px', marginBottom: '25px', fontSize: '1.5rem' }}>Profil & Keahlian</h2>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
            <p style={{ lineHeight: '1.8', color: '#475569', fontSize: '0.95rem' }}>
              Seorang pendidik matematika yang berfokus pada integrasi teknologi dalam pembelajaran. Lulusan Magister Pendidikan Matematika UNM dengan keahlian membuat media pembelajaran inklusif dan website pendidikan.
            </p>
            
            {/* MAPPING SKILL: Mengubah array teks menjadi deretan badge kecil */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
              {skill.map(s => (
                <span key={s} style={{ backgroundColor: '#F1F5F9', color: '#118EEA', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800 }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: Daftar Pengalaman & Karya Unggulan */}
        <div>
          <h2 style={{ fontWeight: 900, borderLeft: '6px solid #0F172A', paddingLeft: '15px', marginBottom: '25px', fontSize: '1.5rem' }}>Pengalaman Mengajar</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px' }}>
            {/* MAPPING PENGALAMAN: Menampilkan riwayat kerja secara urut */}
            {pengalaman.map((p, i) => (
              <div key={i} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontWeight: 900, color: '#0F172A' }}>{p.j}</div>
                <div style={{ fontSize: '0.85rem', color: '#118EEA', fontWeight: 700 }}>{p.s}</div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '5px' }}>{p.t}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontWeight: 900, borderLeft: '6px solid #118EEA', paddingLeft: '15px', marginBottom: '25px', fontSize: '1.5rem' }}>Karya Unggulan</h2>
          <div style={{ display: 'grid', gap: '15px' }}>
            {/* MAPPING KARYA: Menampilkan buku/aplikasi dengan ikon besar */}
            {karya.map((k, i) => (
              <div key={i} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', border: '1px solid #E2E8F0', display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ fontSize: '30px' }}>{k.s}</div>
                <div>
                  <div style={{ fontWeight: 900, color: '#0F172A', fontSize: '0.95rem' }}>{k.t}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>{k.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
