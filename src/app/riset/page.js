'use client'
import { useState } from 'react'
import { FileText, Award, GraduationCap, Eye, X } from 'lucide-react'

const dataRiset = [
  { title: "Pengembangan Aplikasi PIJAR", category: "Riset Tesis", year: "2022", file: "/docs/riset-pijar.pdf" },
  { title: "Inovasi Pembelajaran Matematika Inklusif", category: "Jurnal Ilmiah", year: "2021", file: "/docs/jurnal-matematika.pdf" },
]

const dataSertifikat = [
  { title: "Magister Pendidikan Matematika (UNM)", category: "Ijazah", year: "2022", file: "/docs/ijazah-s2.pdf" },
  { title: "Fullstack Web Development", category: "Sertifikasi", year: "2024", file: "/docs/sertifikat-coding.pdf" },
]

export default function RisetPage() {
  const [selectedPdf, setSelectedPdf] = useState(null)

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <GraduationCap size={50} color="#118EEA" style={{ margin: '0 auto 20px' }} />
        <h1 style={{ fontWeight: 950, fontSize: '2.5rem', color: '#0F172A' }}>Riset & Portofolio</h1>
        <p style={{ color: '#64748B', fontWeight: 600 }}>Rekam jejak akademik Alif Rezky, M.Pd. (Mode Baca Eksklusif)</p>
      </header>

      {/* MODAL VIEWER (Hanya Baca) */}
      {selectedPdf && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 2000, display: 'flex', flexDirection: 'column', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
            <button onClick={() => setSelectedPdf(null)} style={{ background: 'white', border: 'none', padding: '10px 20px', borderRadius: '10px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <X size={18} /> Tutup Dokumen
            </button>
          </div>
          <iframe 
            src={`${selectedPdf}#toolbar=0`} 
            style={{ width: '100%', height: '100%', borderRadius: '15px', border: 'none' }}
            title="PDF Viewer"
          />
        </div>
      )}

      {/* SECTION RISET */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FileText color="#118EEA" /> KARYA ILMIAH & RISET
        </h2>
        <div style={{ display: 'grid', gap: '15px' }}>
          {dataRiset.map((item, i) => (
            <div key={i} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', border: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#118EEA' }}>{item.category} • {item.year}</div>
                <div style={{ fontWeight: 800, color: '#0F172A' }}>{item.title}</div>
              </div>
              <button onClick={() => setSelectedPdf(item.file)} style={{ background: 'none', border: 'none', color: '#118EEA', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 700 }}>
                <Eye size={18} /> Baca
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION SERTIFIKAT */}
      <section>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Award color="#118EEA" /> SERTIFIKAT & PENGHARGAAN
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
          {dataSertifikat.map((item, i) => (
            <div key={i} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '25px', border: '1px solid #F1F5F9', textAlign: 'center' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 900, color: '#94A3B8', marginBottom: '10px' }}>{item.category.toUpperCase()}</div>
              <div style={{ fontWeight: 900, color: '#0F172A', marginBottom: '20px', fontSize: '0.9rem' }}>{item.title}</div>
              <button onClick={() => setSelectedPdf(item.file)} style={{ 
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                border: '2px solid #118EEA', color: '#118EEA', backgroundColor: 'transparent',
                padding: '10px', borderRadius: '12px', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer'
              }}>
                <Eye size={16} /> Buka Dokumen
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
