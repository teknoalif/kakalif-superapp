'use client'
import React from 'react'
import Link from 'next/link'

export default function RumatPage() {
  // Tambahkan property 'link' pada array materi
  const materiList = [
    { 
      judul: 'Aljabar Dasar', 
      status: 'Gratis', 
      ikon: '🧮', 
      href: '/belajar/matdas/pendahuluan' // Ini path ke file DaftarSubMateri ta'
    },
    { 
      judul: 'Geometri & Trigonometri', 
      status: 'Premium', 
      ikon: '📐', 
      href: '#' 
    },
    { 
      judul: 'Persiapan OSN Matematika', 
      status: 'Premium', 
      ikon: '🏆', 
      href: '#' 
    },
    { 
      judul: 'Bank Soal UTBK-SNBT', 
      status: 'Premium', 
      ikon: '📝', 
      href: '#' 
    }
  ]

  // Handler untuk materi Premium
  const handlePremiumAlert = (e, status) => {
    if (status === 'Premium') {
      e.preventDefault()
      alert("Materi ini khusus Member Premium. Silakan hubungi Kak Alif via WA untuk aktivasi!")
      window.open("https://wa.me/6285256162879?text=Halo Kak Alif, saya ingin daftar akun Premium RUMAT", "_blank")
    }
  }

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Header RUMAT dengan Tulisan Arab */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ 
            fontSize: '4rem', 
            color: '#118EEA', 
            marginBottom: '-15px', 
            fontFamily: 'serif',
            fontWeight: 'bold' 
          }}>رُمَاةٌ</div>
          <h1 style={{ fontWeight: 950, fontSize: '3rem', color: '#0F172A', letterSpacing: '2px' }}>
            RU<span style={{ color: '#118EEA' }}>MAATUN</span>
          </h1>
          <div style={{ 
            height: '4px', 
            width: '60px', 
            backgroundColor: '#118EEA', 
            margin: '10px auto', 
            borderRadius: '10px' 
          }}></div>
          <p style={{ color: '#64748B', fontWeight: 700, fontSize: '1.1rem', marginTop: '10px' }}>
            Rumah Matematika & Pusat Belajar OSN
          </p>
        </div>

        {/* Stats Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '40px' }}>
          {[
            { angka: '120+', label: 'MODUL VIDEO' },
            { angka: '500+', label: 'LATIHAN SOAL' },
            { angka: '24/7', label: 'AKSES SISTEM' }
          ].map((stat, idx) => (
            <div key={idx} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '30px', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 950, color: '#118EEA' }}>{stat.angka}</div>
              <div style={{ fontSize: '0.65rem', fontWeight: 900, color: '#94A3B8', letterSpacing: '1px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* List Materi */}
        <div style={{ display: 'grid', gap: '20px' }}>
          {materiList.map((m, i) => (
            <div key={i} style={{ 
              backgroundColor: 'white', 
              padding: '30px', 
              borderRadius: '35px', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)',
              border: '1px solid #F1F5F9'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                <span style={{ fontSize: '2rem' }}>{m.ikon}</span>
                <div>
                  <h4 style={{ fontWeight: 850, color: '#1E293B', fontSize: '1.1rem', margin: 0 }}>{m.judul}</h4>
                  <span style={{ 
                    fontSize: '0.65rem', 
                    fontWeight: 900, 
                    backgroundColor: m.status === 'Gratis' ? '#DCFCE7' : '#FEF2F2', 
                    color: m.status === 'Gratis' ? '#166534' : '#991B1B',
                    padding: '4px 12px',
                    borderRadius: '10px',
                    display: 'inline-block',
                    marginTop: '5px'
                  }}>{m.status}</span>
                </div>
              </div>
              
              {/* Bungkus tombol dengan Link */}
              <Link href={m.href} onClick={(e) => handlePremiumAlert(e, m.status)} style={{ textDecoration: 'none' }}>
                <button style={{ 
                  backgroundColor: m.status === 'Gratis' ? '#118EEA' : '#0F172A', 
                  color: 'white', 
                  border: 'none', 
                  padding: '12px 25px', 
                  borderRadius: '18px', 
                  fontWeight: 900, 
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: '0.3s'
                }}>
                  {m.status === 'Gratis' ? 'Mulai Belajar' : 'Buka Akses'}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div style={{ marginTop: '60px', backgroundColor: '#0F172A', padding: '45px', borderRadius: '40px', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontWeight: 900, fontSize: '1.5rem', marginBottom: '15px' }}>Gunakan Sistem Ini di Sekolah Anda</h3>
            <p style={{ fontSize: '0.95rem', opacity: 0.8, marginBottom: '30px', maxWidth: '500px', margin: '0 auto 30px' }}>
              Dapatkan platform LMS & CBT Custom dengan fitur Anti-Curang untuk sekolah atau bimbel Anda.
            </p>
            <Link href="/koding" style={{ backgroundColor: '#118EEA', color: 'white', padding: '18px 35px', borderRadius: '20px', fontWeight: 900, textDecoration: 'none', display: 'inline-block' }}>
              Konsultasi Layanan Alify Tech 🚀
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
