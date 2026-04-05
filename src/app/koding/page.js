'use client' // Komponen ini interaktif (ada tombol klik WhatsApp)

export default function KodingPage() {
  // --- DATA ARRAY: Daftar Layanan Pembuatan Website (Ditambah Fitur Demo) ---
  const services = [
    { 
      t: 'Paket UMKM', 
      s: '🏢', 
      p: '3.000.000 - Rp 6.000.000', 
      tag: 'Paling Laris',
      fitur: [
        'Desain Premium (Max 5 Halaman)', 
        'Website Responsive (HP/PC)', 
        'Integrasi WhatsApp Chat', 
        'Google Map & SEO Dasar'
      ],
      cocok: 'Company Profile, Sekolah, Klinik, dan Bisnis Lokal.',
      demoUrl: 'https://dapurmamauwais.kakalif.my.id', // LINK DEMO KHUSUS UMKM
      demoLabel: 'Lihat Contoh: Dapur Mama Uwais'
    },
    { 
      t: 'Paket E-Commerce', 
      s: '🛒', 
      p: '7.500.000 - Rp 25.000.000', 
      tag: 'Lengkap',
      fitur: [
        'Katalog Produk Tanpa Batas', 
        'Hitung Ongkir Otomatis', 
        'Payment Gateway (Opsional)', 
        'Laporan Penjualan Lengkap'
      ],
      cocok: 'Toko Online, Brand Produk, Dropshipper, dan Reseller.'
    },
    { 
      t: 'Paket Landing Page', 
      s: '🎯', 
      p: '1.000.000 - Rp 3.000.000', 
      tag: 'Fokus Konversi',
      fitur: [
        'Desain Khusus untuk Penjualan', 
        'Copywriting Persuasif', 
        'Integrasi Ads (FB/Google)', 
        'Pengerjaan Cepat (3 Hari)'
      ],
      cocok: 'Penjualan 1 Produk, Promo Event, Webinar, dan Pengumpul Leads.'
    }
  ]

  const handlePesan = (namaLayanan) => {
    const nomorWA = '6285256162879'
    const pesan = encodeURIComponent(`Bismillah Kak Alif, saya tertarik dengan layanan: ${namaLayanan}. Boleh tanya-tanya dulu?`)
    window.open(`https://wa.me/${nomorWA}?text=${pesan}`, '_blank')
  }

  return (
    <main style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* HEADER */}
      <div style={{ background: 'linear-gradient(135deg, #118EEA 0%, #0F172A 100%)', padding: '100px 20px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontWeight: 950, fontSize: '3.5rem', letterSpacing: '-2px', margin: 0 }}>GO DIGITAL SEKARANG!</h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 600, opacity: 0.8, marginTop: '15px' }}>Dapatkan Website Profesional & Terpercaya untuk Melejitkan Bisnismu.</p>
      </div>

      {/* GRID CONTAINER */}
      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
        
        {services.map((s, index) => (
          <div key={index} style={{ backgroundColor: 'white', borderRadius: '40px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ padding: '40px', flex: 1 }}>
              <div style={{ fontSize: '70px', marginBottom: '10px', textAlign: 'center' }}>{s.s}</div>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <span style={{ display: 'inline-block', padding: '6px 15px', backgroundColor: '#E0F2FE', color: '#118EEA', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 900 }}>{s.tag}</span>
              </div>
              <h3 style={{ fontWeight: 950, fontSize: '1.6rem', color: '#0F172A', marginBottom: '15px', textAlign: 'center' }}>{s.t}</h3>
              
              {/* FITUR UTAMA */}
              <div style={{ textAlign: 'left', marginBottom: '25px' }}>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#0F172A', marginBottom: '10px' }}>Fitur Utama:</div>
                <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', color: '#64748B', lineHeight: '1.8' }}>
                  {s.fitur.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>

              {/* COCOK UNTUK */}
              <div style={{ textAlign: 'left', marginBottom: '25px', padding: '15px', backgroundColor: '#F8FAFC', borderRadius: '15px', borderLeft: '4px solid #FF6F00' }}>
                <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#FF6F00' }}>✅ Cocok Untuk:</div>
                <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '5px', fontWeight: 600 }}>{s.cocok}</div>
              </div>

              {/* TOMBOL LIVE DEMO (Muncul jika ada demoUrl) */}
              {s.demoUrl && (
                <a href={s.demoUrl} target="_blank" style={{ display: 'block', marginBottom: '25px', padding: '12px', backgroundColor: '#F0FDFA', border: '1px dashed #14B8A6', borderRadius: '15px', color: '#0D9488', textDecoration: 'none', textAlign: 'center', fontSize: '0.85rem', fontWeight: 800 }}>
                  🌐 {s.demoLabel}
                </a>
              )}

              {/* INFO HARGA */}
              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 800 }}>INVESTASI MULAI</div>
                <div style={{ fontSize: '1.0rem', fontWeight: 950, color: '#118EEA' }}>Rp {s.p}</div>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '5px' }}>*Harga menyesuaikan kerumitan fitur</div>
              </div>
            </div>
            
            <button 
              onClick={() => handlePesan(s.t)}
              style={{ width: '100%', backgroundColor: '#0F172A', color: 'white', padding: '25px', border: 'none', fontWeight: 900, fontSize: '1rem', cursor: 'pointer', transition: '0.3s', textTransform: 'uppercase' }}
            >
              Tanya Kak Alif Sekarang 🚀
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER BONUS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 60px auto', padding: '0 20px', textAlign: 'center' }}>
        <div style={{ padding: '20px', backgroundColor: '#FF6F00', color: 'white', borderRadius: '20px', fontWeight: 700, fontSize: '0.9rem' }}>
          🎁 BONUS TAMBAHAN: GRATIS Domain (.com) & Hosting Tahun Pertama | GRATIS SSL (Keamanan) | Panduan Mengelola Website
        </div>
      </div>

    </main>
  )
}
