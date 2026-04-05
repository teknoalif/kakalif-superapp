'use client'
import { useState } from 'react'
import { Book, GraduationCap, PenTool, Layout, ChevronRight, Lock, Star } from 'lucide-react'
import Link from 'next/link'

export default function RuangBelajar() {
  const [tab, setTab] = useState('Matdas')

  const categories = [
    { id: 'Matdas', label: 'Matematika Dasar', icon: <Book size={18}/>, isExclusive: false },
    { id: 'TKA', label: 'TKA Saintek', icon: <GraduationCap size={18}/>, isExclusive: true },
    { id: 'UTBK', label: 'Persiapan UTBK', icon: <PenTool size={18}/>, isExclusive: true },
    { id: 'Mandiri', label: 'Tes Mandiri', icon: <Layout size={18}/>, isExclusive: true }
  ]

  const materi = {
    Matdas: [
      { judul: 'Pendahuluan: Bilangan', slug: 'pendahuluan', isFree: true },
      { judul: 'Sifat Distributif & Pemfaktoran', slug: 'distributif', isFree: false }
    ],
    TKA: [
      { judul: 'Kalkulus Diferensial Lanjut', slug: 'kalkulus', isFree: false },
      { judul: 'Trigonometri Analitik', slug: 'trigo-analitik', isFree: false }
    ],
    UTBK: [
      { judul: 'Penalaran Matematika (TPS)', slug: 'tps', isFree: false },
      { judul: 'Kecukupan Data', slug: 'data', isFree: false }
    ],
    Mandiri: [
      { judul: 'Simak UI: Matematika IPA', slug: 'simak', isFree: false },
      { judul: 'Utul UGM: Kemampuan Dasar', slug: 'utul', isFree: false }
    ]
  }

  const handleMateriClick = (e, isFree) => {
    if (!isFree) {
      e.preventDefault()
      alert("Materi ini khusus Member Premium CENTANG!")
      window.open("https://wa.me/6285256162879?text=Halo Kak Alif, saya mau aktivasi Premium untuk materi " + tab, "_blank")
    }
  }

  return (
    <div style={{ padding: 'clamp(20px, 5vw, 60px) 20px', maxWidth: '1000px', margin: '0 auto', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontWeight: 900, fontSize: '2.5rem', marginBottom: '10px' }}>
          <span style={{ color: '#D4AF37' }}>Ru</span> MAT
        </h1>
        <p style={{ color: '#64748B', fontWeight: 500 }}>Ruang Belajar Matematika. Pilih jalur belajarmu hari ini, di sini matematika di bahas dengan asyik dan bermakna.</p>
      </div>

      {/* TABS NAVIGATION */}
      <div style={{ display: 'flex', gap: '8px', backgroundColor: '#F1F5F9', padding: '6px', borderRadius: '18px', marginBottom: '35px', overflowX: 'auto' }}>
        {categories.map((c) => (
          <button 
            key={c.id}
            onClick={() => setTab(c.id)}
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 15px', borderRadius: '14px', border: 'none',
              backgroundColor: tab === c.id ? (c.isExclusive ? '#0F172A' : '#118EEA') : 'transparent',
              color: tab === c.id ? 'white' : '#64748B',
              fontWeight: 800, cursor: 'pointer', transition: '0.3s', whiteSpace: 'nowrap'
            }}
          >
            {c.icon} {c.label} {c.isExclusive && <Star size={12} fill="#D4AF37" color="#D4AF37" />}
          </button>
        ))}
      </div>

      {/* LIST MATERI */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {materi[tab]?.map((m, i) => (
          <Link 
            key={i} 
            href={m.isFree ? "/belajar/matdas/" + m.slug : "#"}
            onClick={(e) => handleMateriClick(e, m.isFree)}
            style={{
              padding: '20px 25px', borderRadius: '20px', backgroundColor: m.isFree ? 'white' : '#F8FAFC', 
              border: m.isFree ? '1px solid #E2E8F0' : '1px dashed #CBD5E1',
              textDecoration: 'none', color: '#0F172A', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              opacity: m.isFree ? 1 : 0.8
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ color: m.isFree ? '#118EEA' : '#94A3B8' }}>
                {m.isFree ? <ChevronRight size={22} /> : <Lock size={20} />}
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: m.isFree ? '#1E293B' : '#94A3B8' }}>{m.judul}</h3>
                <span style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 700 }}>
                  {m.isFree ? "Gratis Diakses" : "Premium Content"}
                </span>
              </div>
            </div>
            {!m.isFree && <Star size={16} color="#D4AF37" fill="#D4AF37" />}
          </Link>
        ))}
      </div>

      {/* BANNER CTA */}
      <div style={{ marginTop: '50px', padding: '30px', borderRadius: '25px', background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', color: 'white', textAlign: 'center' }}>
        <h3 style={{ fontWeight: 900, marginBottom: '10px' }}>Mulai Langkah Suksesmu</h3>
        <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '25px' }}>Buka seluruh akses TKA, UTBK, dan Ujian Mandiri bersama Kak Alif.</p>
        <a href="https://wa.me/6285256162879?text=Halo Kak Alif, saya mau langganan Premium" 
           target="_blank"
           style={{ backgroundColor: '#D4AF37', color: 'black', padding: '15px 35px', borderRadius: '15px', fontWeight: 900, textDecoration: 'none', display: 'inline-block' }}>
          CHAT KAK ALIF SEKARANG
        </a>
      </div>
    </div>
  )
}
