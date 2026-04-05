'use client' // Menandakan Client Component karena mungkin ada interaksi di masa depan
export default function Kelas() {
  // --- DATA ARRAY: Daftar paket privat sesuai Video Variable Ep. 13 ---
  const listKelas = [
    { t: 'SD / MI', p: '150.000', d: 'Durasi 60 Menit + Playlist Rekaman unlisted YouTube' },
    { t: 'SMP / MTs', p: '120.000', d: 'Durasi 60 Menit + Playlist Rekaman unlisted YouTube' },
    { t: 'SMA / SMK / MA', p: '100.000', d: 'Durasi 60 Menit + Playlist Rekaman unlisted YouTube' },
  ]

  return (
    <main style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', paddingBottom: '50px' }}>
      
      {/* HEADER SECTION: Gradasi biru ke navy yang profesional */}
      <div style={{ background: 'linear-gradient(135deg, #118EEA 0%, #0F172A 100%)', padding: '80px 20px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontWeight: 950, fontSize: '3rem', margin: 0 }}>Bimbingan Privat Online Matematika</h1>
        <p style={{ opacity: 0.9, marginTop: '10px' }}>Belajar interaktif dengan hasil rekaman yang bisa ditonton ulang.</p>
      </div>

      {/* CONTAINER: Membatasi lebar konten agar enak dibaca (maxWidth: 800px) */}
      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* LOOPING DATA: Menampilkan daftar kelas satu per satu */}
        {listKelas.map((k, i) => (
          <div key={i} style={{ 
            backgroundColor: 'white', 
            padding: '30px', 
            borderRadius: '25px', 
            border: '1px solid #E2E8F0', 
            display: 'flex', 
            justifyContent: 'space-between', // Membuat teks di kiri dan tombol di kanan
            alignItems: 'center' 
          }}>
            {/* INFO KELAS (KIRI) */}
            <div>
              <div style={{ fontWeight: 900, fontSize: '1.2rem' }}>{k.t}</div>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>{k.d}</div>
            </div>

            {/* TOMBOL DAFTAR (KANAN): Langsung mengarah ke WhatsApp Kak Alif */}
            <a 
              href="https://wa.me/6285256162879" 
              target="_blank" // Membuka di tab baru (Best Practice UX)
              style={{ 
                backgroundColor: '#0F172A', 
                color: 'white', 
                padding: '15px 25px', 
                borderRadius: '12px', 
                textDecoration: 'none', 
                fontWeight: 900 
              }}
            >
              Rp {k.p}
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}
