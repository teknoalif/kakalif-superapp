'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Portofolio() {
  // DATA ARRAY (Sesuai profil Kak Alif)
  const pengalaman = [
    { j: 'Master Teacher OSN', s: 'Edumatrix Indonesia', t: 'Apr 2026--Now' },
    { j: 'Online Math Tutor', s: 'Algonova', t: 'Mar 2026--Now' },
    { j: 'Master Teacher Math dan Fisika', s: 'Brain Academy by Ruangguru', t: 'Okt--Des 2023' },
    { j: 'Guru Matematika', s: 'SMA IT Al Binaa Islamic Boarding School', t: 'Sept 2022--Jun 2026' },
    { j: 'Guru Pengganti', s: 'SMA Islam Athirah Baruga Antang, Makassar', t: 'Sept 2022' },
    { j: 'Guru Honorer', s: 'SMA Negeri 2 Makassar', t: 'Jan 2021--Jul 2022' },
  ]

  const skill = ['GNU/Linux','LibreOffice','Next.js & Web Dev', 'Python Programming', 'Pendidikan Matematika']

  return (
    <main style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '80px' }}>
      
      {/* HERO SECTION */}
      <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #118EEA 100%)', padding: '100px 20px', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontWeight: 950, fontSize: '3.5rem', margin: 0, letterSpacing: '-2px' }}>Alif Rezky, M.Pd</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginTop: '15px', fontWeight: 600 }}>Mathematics Educator | Tech Developer | Author</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '30px' }}>
              <a href="https://youtube.com/@kakalifgurumatematika" target="_blank" style={{ color: 'white', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 800, padding: '10px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.3)' }}>YouTube</a>
              <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 800, padding: '10px 20px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.2)' }}>Beranda Taawun</Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '50px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        
        {/* KOLOM KIRI: SKILL */}
        <div>
          <h2 style={{ fontWeight: 900, borderLeft: '6px solid #118EEA', paddingLeft: '15px', marginBottom: '25px', fontSize: '1.5rem' }}>Profil & Keahlian</h2>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '30px', border: '1px solid #E2E8F0' }}>
            <p style={{ lineHeight: '1.8', color: '#475569', fontSize: '0.95rem' }}>
              Seorang pendidik matematika yang berfokus pada integrasi teknologi dalam pembelajaran. Lulusan Magister Pendidikan Matematika UNM.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
              {skill.map(s => (
                <span key={s} style={{ backgroundColor: '#F1F5F9', color: '#118EEA', padding: '6px 12px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 800 }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: PENGALAMAN */}
        <div>
          <h2 style={{ fontWeight: 900, borderLeft: '6px solid #0F172A', paddingLeft: '15px', marginBottom: '25px', fontSize: '1.5rem' }}>Pengalaman</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {pengalaman.map((p, i) => (
              <div key={i} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontWeight: 900, color: '#0F172A', fontSize: '0.9rem' }}>{p.j}</div>
                <div style={{ fontSize: '0.8rem', color: '#118EEA', fontWeight: 700 }}>{p.s}</div>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8', marginTop: '5px' }}>{p.t}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
