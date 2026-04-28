'use client'
import { useState } from 'react' // Mengelola state interaksi user
import { ArrowLeft, BookOpen, CheckCircle, XCircle, PlayCircle, Lightbulb, Scale } from 'lucide-react' // Koleksi ikon
import Link from 'next/link'

export default function PerkalianNegatif() {
  // --- STATE: Menampung data pilihan user ---
  const [answers, setAnswers] = useState({}) // Objek untuk menyimpan jawaban kuis

  const VIDEO_ID = "Q5GnC6rT2tA" // ID Video Pembuktian dari YouTube Kak Alif

  // --- DATA KUIS: Soal berbasis logika dan implementasi nilai Islam ---
  const kuis = [
    {
      id: 1,
      tanya: "Berdasarkan penjelasan video, mengapa (-) x (-) menghasilkan (+)?",
      opsi: [
        "Karena sudah aturan dari sananya", 
        "Karena mengikuti pola distribusi dan meniadakan arah yang berlawanan", 
        "Hanya berlaku untuk angka kecil saja", 
        "Agar hasilnya tidak membingungkan"
      ],
      kunci: 1, // Index 1: Pola distribusi
      bahas: "Secara logika, negatif berarti 'lawan dari'. Lawan dari lawan arah adalah kembali ke arah semula (positif)."
    },
    {
      id: 2,
      tanya: "Dalam analogi nilai Islam, jika 'Meninggalkan' itu (-) dan 'Maksiat' itu (-), maka 'Meninggalkan Maksiat' adalah...",
      opsi: ["Keburukan (-)", "Kesesatan (-)", "Kebaikan (+)", "Biasa saja (0)"],
      kunci: 2, // Index 2: Kebaikan
      bahas: "Ini adalah implementasi integrasi dari Dr. Abdussakir. Menghapus atau meninggalkan (-) suatu keburukan (-) adalah tindakan yang benar atau positif (+)."
    }
  ]

  // --- FUNCTION: Mengupdate state jawaban ---
  const pilihJawaban = (qId, idx) => {
    // Sesuai materi WPU tentang Menggunakan Spread Operator (...) untuk keamanan data (Imutabilitas)
    setAnswers({ ...answers, [qId]: idx })
  }

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', minHeight: '100vh' }}>
      
      {/* LINK NAVIGASI: Kembali ke folder pendahuluan */}
      <Link href="/belajar/matdas/pendahuluan" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#118EEA', textDecoration: 'none', fontWeight: 800, marginBottom: '20px' }}>
        <ArrowLeft size={18} /> Kembali ke Kurikulum
      </Link>

      <h1 style={{ fontWeight: 900, fontSize: '1.8rem', marginBottom: '10px' }}>1.3 Logika Perkalian Negatif</h1>
      <p style={{ color: '#64748B', marginBottom: '30px' }}>Membedah alasan logis di balik aturan (-) x (-) = (+).</p>

      {/* VIDEO SECTION: Penjelasan teknis Kak Alif */}
      <div style={{ backgroundColor: '#0F172A', borderRadius: '30px', overflow: 'hidden', marginBottom: '40px' }}>
        <div style={{ padding: '15px 20px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem' }}>
          <PlayCircle size={18} color="#D4AF37" /> VIDEO PEMBUKTIAN LOGIKA
        </div>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
            src={"https://www.youtube.com/embed/" + VIDEO_ID} 
            frameBorder="0" allowFullScreen title="Materi Negatif">
          </iframe>
        </div>
      </div>

      {/* KONSEP LOGIKA & INTEGRASI: Menggunakan CSS Grid agar responsif (2 Kolom) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        
        {/* BLOK KUNING: Fokus pada pola berpikir matematika */}
        <div style={{ backgroundColor: '#FFFBEB', padding: '25px', borderRadius: '25px', border: '1px solid #FEF3C7' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', color: '#92400E', marginBottom: '10px', fontWeight: 800 }}>
            <Lightbulb size={20} /> Pola Berpikir
          </h3>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#92400E' }}>
            Jika 3 x 2 = 6, 3 x 1 = 3, 3 x 0 = 0, maka 3 x (-1) haruslah berkurang 3, yaitu -3. Ini menunjukkan konsistensi dalam pola bilangan.
          </p>
        </div>

        {/* BLOK HIJAU: Fokus pada sudut pandang syariah (Integrasi) */}
        <div style={{ backgroundColor: '#F0FDF4', padding: '25px', borderRadius: '25px', border: '1px solid #DCFCE7' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', color: '#166534', marginBottom: '10px', fontWeight: 800 }}>
            <Scale size={20} /> Sudut Pandang Islam
          </h3>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#166534' }}>
            Dalam kaidah fiqh: 'Menghilangkan kemudaratan adalah manfaat'. Secara matematis: Menghilangkan (-) Kemudaratan (-) = Manfaat (+) (Dr. Abdussakir, M.Pd).
          </p>
        </div>
      </div>

      {/* KUIS INTERAKTIF */}
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '30px', border: '1px solid #E2E8F0' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '25px' }}>🎯 Uji Logika ta'</h2>
        
        {kuis.map((q, i) => (
          <div key={q.id} style={{ marginBottom: '35px' }}>
            <p style={{ fontWeight: 700, marginBottom: '15px' }}>{q.id}. {q.tanya}</p>
            
            <div style={{ display: 'grid', gap: '10px' }}>
              {q.opsi.map((opt, idx) => {
                const isSelected = answers[q.id] === idx
                const isCorrect = idx === q.kunci
                
                return (
                  <button
                    key={idx}
                    onClick={() => pilihJawaban(q.id, idx)}
                    style={{
                      padding: '15px', textAlign: 'left', borderRadius: '15px', border: '1px solid',
                      // Feedback visual: Hijau jika jawaban benar, Merah jika salah
                      backgroundColor: isSelected ? (isCorrect ? '#F0FDF4' : '#FEF2F2') : '#F8FAFC',
                      borderColor: isSelected ? (isCorrect ? '#16A34A' : '#EF4444') : '#E2E8F0',
                      cursor: 'pointer', fontWeight: 600, transition: '0.2s'
                    }}
                  >
                    {/* Membuat label huruf otomatis (A, B, C, D) */}
                    {String.fromCharCode(65 + idx)}. {opt}
                  </button>
                )
              })}
            </div>
            
            {/* PEMBAHASAN: Hanya tampil jika user sudah memilih salah satu jawaban */}
            {answers[q.id] !== undefined && (
              <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#F0F9FF', borderRadius: '12px', fontSize: '0.85rem', borderLeft: '4px solid #118EEA' }}>
                <strong>Penjelasan:</strong> {q.bahas}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
