'use client'
import React from 'react'
import Link from 'next/link'

export default function BukuPage() {
  const driveID = '1YNOXBEs_UkOFwoR1vYxdhGJvAkg47P-Q' //kita ganti dengan yang baru https://drive.google.com/file/d/1YNOXBEs_UkOFwoR1vYxdhGJvAkg47P-Q/view?usp=sharing
  const driveURL = `https://drive.google.com/file/d/${driveID}/preview`

  const handleBeli = () => {
    window.open("https://wa.me/6285256162879?text=Bismillah Kak Alif, saya mau beli bukunya kak!", "_blank")
  }

  const testimoni = [
    {
      nama: 'Ustaz Suharyadi, M.Pd., Gr.',
      profesi: 'Guru Kimia',
      pesan: 'Masya Allah, buku yang ditulis Ust Alif mudah dicerna tulisannya, bagus juga menambah wawasan karena diselingi dengan aspek religius atau keIslaman, sehingga diharapkan bisa juga menjadi tambahan motivasi berIslam yang lebih baik bagi pembacanya khususnya nanti para pelajar yang ikut membaca. Semoga bermanfaat karya bukunya bagi banyak orang.',
      warna: '#F0F9FF'
    },
    {
      nama: 'Ustaz Deden Anugrah, M.Pfis.',
      profesi: 'Guru Fisika',
      pesan: 'Buku "Matematika Itu Asyik" disajikan dengan bahasa yang sederhana dan santai sehingga mudah dipahami, dengan konten yang menekankan logika dasar dan konsep dasar sebagai fondasi sebelum memahami hal yang lebih rumit; buku ini juga menampilkan contoh nyata dari konsep matematika yang dipelajari.',
      warna: '#F8FAFC'
    },
    {
      nama: 'Ustaz Radivan Tiravi, BA.',
      profesi: 'Guru Nahwu dan Shorof',
      pesan: 'Buku Matematika Itu Asyik karya kak Alif ini berhasil membuktikan bahwa matematika bukan momok yang perlu ditakuti. Dengan gaya bahasa yang santai, humor yang cerdas, dan sentuhan nilai islami yang hangat, buku ini terasa seperti ngobrol dengan guru terbaik yang pernah kamu punya. ;)',
      warna: '#F0FDF4'
    }
  ]

  return (
    <main style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* HEADER SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontWeight: 950, fontSize: '2.5rem', color: '#0F172A', letterSpacing: '-2px' }}>LIBRARY DIGITAL</h1>
          <p style={{ color: '#64748B', fontWeight: 600 }}>Mode Baca Cepat</p>
        </div>

        {/* GOOGLE DRIVE PREVIEW */}
        <div style={{ 
          width: '100%', 
          height: '600px', 
          backgroundColor: 'white', 
          borderRadius: '20px', 
          overflow: 'hidden', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          border: '1px solid #E2E8F0',
          marginBottom: '60px'
        }}>
          <iframe 
            src={driveURL}
            width="100%" 
            height="100%" 
            allow="autoplay"
            style={{ border: 'none' }}
          ></iframe>
        </div>

        {/* TESTIMONI SECTION */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontWeight: 900, fontSize: '2rem', color: '#0F172A' }}>
              Apa Kata <span style={{ color: '#118EEA' }}>Rekan Pendidik?</span>
            </h2>
            <div style={{ height: '4px', width: '50px', backgroundColor: '#118EEA', margin: '15px auto', borderRadius: '10px' }}></div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '25px' 
          }}>
            {testimoni.map((t, index) => (
              <div key={index} style={{ 
                backgroundColor: t.warna, 
                padding: '30px', 
                borderRadius: '30px', 
                position: 'relative',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div style={{ fontSize: '3rem', color: '#CBD5E1', position: 'absolute', top: '10px', left: '20px', opacity: 0.5, fontFamily: 'serif' }}>“</div>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '20px', position: 'relative', zIndex: 1, fontWeight: 500 }}>
                  {t.pesan}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', borderTop: '1px solid #E2E8F0', paddingTop: '15px' }}>
                  <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#118EEA', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 900, fontSize: '0.7rem' }}>
                    {t.nama[0]}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontWeight: 900, color: '#1E293B', fontSize: '0.9rem' }}>{t.nama}</h4>
                    <span style={{ fontSize: '0.7rem', color: '#118EEA', fontWeight: 800 }}>{t.profesi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CALL TO ACTION SECTION */}
        <div style={{ textAlign: 'center', padding: '40px 30px', backgroundColor: '#EFF6FF', borderRadius: '40px', border: '2px dashed #118EEA' }}>
          <h3 style={{ fontWeight: 950, fontSize: '1.5rem', marginBottom: '10px', color: '#0F172A' }}>Suka dengan materinya?</h3>
          <p style={{ color: '#64748B', marginBottom: '25px', fontWeight: 600 }}>Dapatkan versi lengkap untuk referensi belajar terbaik ta'.</p>
          <button onClick={handleBeli} style={{ 
            backgroundColor: '#118EEA', 
            color: 'white', 
            padding: '18px 40px', 
            borderRadius: '20px', 
            border: 'none', 
            fontWeight: 900, 
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 10px 20px rgba(17, 142, 234, 0.3)',
            transition: '0.3s'
          }}>
            BELI FULL VERSION DAN DAPATKAN BONUS SEBESAR 900K🚀
          </button>
        </div>

      </div>
    </main>
  )
}
