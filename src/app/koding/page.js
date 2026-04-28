'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function KodingPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Fungsi maut untuk WA otomatis
  const hubungiWA = (layanan, harga = '') => {
    const pesan = `Halo Kak Alif, saya tertarik dengan layanan ${layanan} ${harga ? 'dengan harga ' + harga : ''} di Al Alify Tech. Bisa konsultasi dulu?`
    window.open(`https://wa.me/6285256162879?text=${encodeURIComponent(pesan)}`, '_blank')
  }

  const layananWeb = [
    {
      nama: 'Landing Page',
      harga: '300K',
      hargaCoret: '750K', // Tambahan harga coret
      target: 'Personal / Produk Tunggal',
      listContoh: [{ label: 'Halaman Promosi Buku kak Alif', link: '/buku' }],
      fitur: ['1 Halaman', 'Gratis Domain .id untuk 1 tahun pertama', 'WA Otomatis'],
      warna: '#0F172A'
    },
    {
      nama: 'Web Bisnis',
      harga: '1 JUTA',
      hargaCoret: '3 JUTA', // Tambahan harga coret
      rekomendasi: true,
      target: 'UMKM / Profile',
      listContoh: [{ label: 'Dapur Mama Uwais', link: 'https://dapurmamauwais.kakalif.my.id' }],
      fitur: ['Hingga 5 Halaman', 'Email Bisnis', 'Free Maintenance'],
      warna: '#118EEA'
    },
    {
      nama: 'Web Custom (CBT, Resto, dsb)',
      harga: '5 JUTA - 8 JUTA',
      hargaCoret: '50 JUTA', // Tambahan harga coret
      promoLabel: '🔥 POPULER',
      target: 'Sistem / Aplikasi Web',
      listContoh: [
        { label: 'Sistem CBT Sekolah', link: 'https://cbt.kakalif.my.id' },
        { label: 'Restoran La Crosta Jatinangor', link: 'https://lacrosta.id' }
      ],
      fitur: ['Anti-Curang (untuk CBT)', 'Database Modern', 'Dashboard Admin (untuk Kasir Restoran)'],
      warna: '#0F172A'
    }
  ]

  const layananService = [
    { nama: 'Hardware Service', ikon: '💻', item: ['Layar/LCD', 'Motherboard', 'Keyboard', 'Upgrade RAM/SSD'] },
    { nama: 'Software & Optimasi', ikon: '⚙️', item: ['Install OS (GNU/Linux dan Windows)', 'Hapus Virus', 'Recovery Data'] },
    { nama: 'Konsultasi & Rakit', ikon: '🔍', item: ['Rekomendasi Laptop', 'Rakit PC', 'Jaringan Internet'] }
  ]

  if (!isLoaded) return <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }} />

  return (
    <main suppressHydrationWarning style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', padding: '40px 15px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ backgroundColor: '#E0F2FE', color: '#118EEA', padding: '8px 15px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 900 }}>SOLUSI TEKNOLOGI TERPADU</span>
          <h1 style={{ fontWeight: 950, fontSize: 'clamp(2rem, 8vw, 3.5rem)', color: '#0F172A', marginTop: '15px', letterSpacing: '-1px', lineHeight: '1' }}>
            AL ALIFY<span style={{ color: '#118EEA' }}> TECH</span>
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.9rem', fontWeight: 600, marginTop: '10px' }}>Koding & Hardware Solutions.</p>
        </div>

        {/* Web Dev Section */}
        <h2 style={{ fontWeight: 900, marginBottom: '20px', color: '#0F172A', fontSize: '1.4rem' }}>🚀 Website & Aplikasi</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px', 
          marginBottom: '60px' 
        }}>
          {layananWeb.map((item, index) => (
            <div key={index} style={{ backgroundColor: 'white', borderRadius: '30px', padding: '25px', border: item.rekomendasi ? '3px solid #118EEA' : '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {item.promoLabel && (
                <span style={{ position: 'absolute', top: '-12px', right: '20px', backgroundColor: '#118EEA', color: 'white', padding: '4px 12px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 900 }}>{item.promoLabel}</span>
              )}
              <h3 style={{ fontWeight: 900, fontSize: '1.2rem' }}>{item.nama}</h3>
              <div style={{ margin: '15px 0' }}>
                {item.listContoh.map((ex, i) => (
                  <Link key={i} href={ex.link} target="_blank" style={{ fontSize: '0.75rem', color: '#118EEA', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    {ex.label} 🔗
                  </Link>
                ))}
              </div>
              
              {/* Bagian Harga dengan Harga Coret */}
              <div style={{ marginBottom: '15px' }}>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8', textDecoration: 'line-through', fontWeight: 700, marginBottom: '-5px' }}>
                  Rp {item.hargaCoret}
                </div>
                <span style={{ fontSize: '1.6rem', fontWeight: 950, color: item.warna }}>Rp {item.harga}</span>
              </div>

              <div style={{ flexGrow: 1, marginBottom: '20px' }}>
                {item.fitur.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                    <span style={{ color: '#118EEA' }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => hubungiWA(item.nama, item.harga)}
                style={{ backgroundColor: item.warna, color: 'white', padding: '12px', borderRadius: '12px', border: 'none', fontWeight: 900, cursor: 'pointer', transition: '0.3s' }}>
                AMBIL PROMO 🚀
              </button>
            </div>
          ))}
        </div>

        {/* Hardware Section */}
        <h2 style={{ fontWeight: 900, marginBottom: '20px', color: '#0F172A', fontSize: '1.4rem' }}>🔧 Hardware Service</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '50px' }}>
          {layananService.map((item, index) => (
            <div 
              key={index} 
              onClick={() => hubungiWA(item.nama)}
              style={{ backgroundColor: 'white', borderRadius: '30px', padding: '25px', border: '1px solid #E2E8F0', cursor: 'pointer', transition: '0.3s' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{item.ikon}</div>
              <h3 style={{ fontWeight: 900, fontSize: '1.2rem' }}>{item.nama}</h3>
              <div style={{ backgroundColor: '#F8FAFC', padding: '15px', borderRadius: '15px', marginTop: '10px' }}>
                {item.item.map((li, i) => (
                  <div key={i} style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: '5px', color: '#334155' }}>• {li}</div>
                ))}
              </div>
              <div style={{ marginTop: '15px', fontSize: '0.75rem', color: '#118EEA', fontWeight: 800 }}>Klik untuk Konsultasi →</div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
