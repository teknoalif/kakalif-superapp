'use client'
import { useState } from 'react'
import { GraduationCap, ChevronRight, BookOpen, FolderOpen, Rocket, ExternalLink, Calendar, Star } from 'lucide-react'
import Link from 'next/link'

const listKuis = [
  { nama: 'Pras (4 SD)', jenjang: 'SD', materi: 'Pecahan & Desimal', path: '/kuis/pras/lesson14', slug: 'pras-4sd' },
  { nama: 'Rafa (5 SD)', jenjang: 'SD', materi: 'Bangun Ruang', path: '/kuis/rafa/lesson01', slug: 'rafa-5sd' },
  { nama: 'Alaric (6 SD)', jenjang: 'SD', materi: 'Persiapan Ujian', path: '/kuis/alaric/lesson01', slug: 'alaric-6sd' },
  { nama: 'Ethan (7 SMP)', jenjang: 'SMP', materi: 'Aljabar Dasar', path: '/kuis/ethan/lesson01', slug: 'ethan-7smp' },
  { nama: 'Richie & Anderson (8 SMP)', jenjang: 'SMP', materi: 'Pythagoras', path: '/kuis/richie/lesson16', slug: 'richie-8smp' },
  { nama: 'Dimas (9 SMP)', jenjang: 'SMP', materi: 'Persamaan Kuadrat', path: '/kuis/dimas/lesson2', slug: 'dimas-9smp' },
  { nama: 'Aqil (10 SMA)', jenjang: 'SMA', materi: 'OSN-K', path: '/kuis/aqil/lesson01', slug: 'aqil-10sma' },
  { nama: 'Freya (11 SMA)', jenjang: 'SMA', materi: 'Trigonometri Kurikulum Cambridge', path: '/kuis/freya/lesson2', slug: 'freya-11sma' },
]

export default function BankSoal() {
  const [filter, setFilter] = useState('Semua')

  const filteredKuis = filter === 'Semua' 
    ? listKuis 
    : listKuis.filter(k => k.jenjang === filter)

  return (
    <main style={{ backgroundColor: '#F0F9FF', minHeight: '100vh', padding: '40px 20px 150px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
           <div style={{ backgroundColor: '#0EA5E9', width: '60px', height: '60px', borderRadius: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 10px 20px rgba(14, 165, 233, 0.2)' }}>
              <BookOpen color="white" size={30} />
           </div>
           <h1 style={{ fontWeight: 950, fontSize: '1.8rem', color: '#1E293B', textTransform: 'uppercase', fontStyle: 'italic', letterSpacing: '-1px' }}>Bank Soal Algonova</h1>
           <p style={{ fontWeight: 700, color: '#64748B', fontSize: '0.9rem' }}>Koleksi Kuis Eksklusif & Latihan Harian</p>
        </div>

        {/* PROMO RUMAATUN BOX */}
        <div style={{ backgroundColor: 'white', borderRadius: '35px', padding: '30px', border: '2px solid #0EA5E9', marginBottom: '40px', position: 'relative', overflow: 'hidden' }}>
           <div style={{ position: 'absolute', top: '15px', right: '-35px', backgroundColor: '#F59E0B', color: 'white', padding: '5px 40px', transform: 'rotate(45deg)', fontSize: '0.6rem', fontWeight: 900 }}>SOON</div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <Calendar size={18} color="#0EA5E9" />
              <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#1E293B', textTransform: 'uppercase' }}>Coming Soon: 8 Agustus</span>
           </div>
           <h2 style={{ fontSize: '1.1rem', fontWeight: 950, color: '#1E293B', marginBottom: '15px', fontStyle: 'italic' }}>LANGGANAN RUMAATUN.MY.ID</h2>
           
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { p: '1 Bulan', h: '1 Juta' },
                { p: '3 Bulan', h: '1.25 Juta' },
                { p: '6 Bulan', h: '1.5 Juta' },
                { p: '12 Bulan', h: '2 Juta' }
              ].map((item, idx) => (
                <div key={idx} style={{ backgroundColor: '#F0F9FF', padding: '15px', borderRadius: '20px', border: '1px solid #BAE6FD' }}>
                   <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#0369A1' }}>{item.p}</div>
                   <div style={{ fontSize: '0.9rem', fontWeight: 950, color: '#1E293B' }}>{item.h}</div>
                </div>
              ))}
           </div>
        </div>

        {/* Tab Filter */}
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', marginBottom: '30px', paddingBottom: '10px', scrollbarWidth: 'none' }}>
           {['Semua', 'SD', 'SMP', 'SMA'].map(f => (
             <button 
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '12px 25px', borderRadius: '18px', border: 'none',
                  backgroundColor: filter === f ? '#0EA5E9' : 'white',
                  color: filter === f ? 'white' : '#64748B',
                  fontWeight: 800, cursor: 'pointer', boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                  whiteSpace: 'nowrap'
                }}
             >
                {f}
             </button>
           ))}
        </div>

        {/* List Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
           {filteredKuis.map((kuis, i) => (
             <Link key={i} href={kuis.path} style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: 'white', padding: '22px', borderRadius: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                     <div style={{ backgroundColor: '#F1F5F9', padding: '12px', borderRadius: '18px' }}>
                        <GraduationCap size={22} color="#0EA5E9" />
                     </div>
                     <div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#1E293B', textTransform: 'uppercase', fontStyle: 'italic' }}>{kuis.nama}</div>
                        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94A3B8' }}>Topik: {kuis.materi}</div>
                     </div>
                  </div>
                  <ChevronRight size={18} color="#0EA5E9" />
                </div>
             </Link>
           ))}
        </div>

        {/* FLOATING ACTION BUTTON (RUMAATUN) */}
        <div style={{ 
          position: 'fixed', 
          bottom: '30px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: '90%', 
          maxWidth: '400px', 
          zIndex: 1000 
        }}>
           <a 
            href="https://rumaatun.my.id" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '12px', 
              backgroundColor: '#1E293B', 
              color: 'white', 
              padding: '18px', 
              borderRadius: '25px', 
              textDecoration: 'none', 
              boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
              border: '2px solid rgba(255,255,255,0.1)'
            }}
           >
              <Rocket size={20} color="#0EA5E9" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', fontStyle: 'italic', lineHeight: '1' }}>Buka Rumaatun</div>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, opacity: 0.6 }}>Belajar Tepat Sasaran Bersama RUMAATUN</div>
              </div>
              <ExternalLink size={14} style={{ marginLeft: 'auto' }} />
           </a>
        </div>

        <p style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.65rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>
          Rumaatun by Al Alify Tech • 2026
        </p>
      </div>
    </main>
  )
}
