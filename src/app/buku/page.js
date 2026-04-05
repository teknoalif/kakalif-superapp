'use client'
export default function BukuPage() {
  const koleksiBuku = [
    { t: 'TULIMATIKA', d: 'Matematika untuk Teman Tuli', h: 'Rp 210.000', s: '📚' },
    { t: 'Belajar Python dari NOL', d: 'Panduan Koding Pemula bareng Kak Alif', h: 'Rp 160.000', s: '📚' },
    { t: 'Langkah Kecil, Karya Besar', d: 'Self Improvement & Motivasi', h: 'Rp 135.000', s: '📚' },
    { t: 'Matematika itu Asyik', d: 'Metode belajar menyenangkan', h: 'Rp 145.000 (bonus paket premium RUMAT selama 2 tahun senilai Rp 900.000', s: '🧮' }
  ]

  return (
    <main style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* HEADER SECTION */}
      <div style={{ background: 'linear-gradient(135deg, #118EEA 0%, #0F172A 100%)', padding: '80px 20px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontWeight: 950, fontSize: '3rem', letterSpacing: '-1.5px', margin: 0 }}>Koleksi Buku</h1>
        <p style={{ fontSize: '1.1rem', fontWeight: 600, opacity: 0.9, marginTop: '10px' }}>Karya tulis Kak Alif untuk membantu pendidikan Indonesia.</p>
      </div>

      {/* GRID BUKU */}
      <div style={{ maxWidth: '1100px', margin: '50px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
        {koleksiBuku.map((b, i) => (
          <div key={i} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0', textAlign: 'center' }}>
            <div style={{ fontSize: '50px', marginBottom: '15px' }}>{b.s}</div>
            <h3 style={{ fontWeight: 900, fontSize: '1.2rem', color: '#0F172A', marginBottom: '10px' }}>{b.t}</h3>
            <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '20px', minHeight: '40px' }}>{b.d}</p>
            <div style={{ fontWeight: 900, color: '#118EEA', marginBottom: '20px', fontSize: '1.1rem' }}>{b.h}</div>
            <button style={{ width: '100%', backgroundColor: '#0F172A', color: 'white', padding: '12px', borderRadius: '12px', border: 'none', fontWeight: 800, cursor: 'pointer' }}>BELI BUKU</button>
          </div>
        ))}
      </div>
    </main>
  )
}
