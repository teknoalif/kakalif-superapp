'use client'
import { useState } from 'react' // Mengatur status jawaban dan buka-tutup pembahasan
import { ArrowLeft, CheckCircle, XCircle, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function SistemBilangan() {
  // --- STATE: Menggunakan Object {} agar bisa menyimpan banyak ID soal sekaligus ---
  const [answers, setAnswers] = useState({}) // Contoh isi: {1: 2, 2: 0} -> Soal 1 jawabannya opsi index 2
  const [showBahas, setShowBahas] = useState({}) // Contoh isi: {1: true} -> Soal 1 pembahasannya terbuka

  const VIDEO_ID = "-SWKVUVMU9U" // ID video dari YouTube Kak Alif

  // --- DATA KUIS: Array of Objects yang berisi pertanyaan dan kunci jawaban ---
  const kuis = [
    {
      id: 1,
      tanya: "Manakah di bawah ini yang merupakan contoh bilangan Irasional?",
      opsi: ["0.75", "2/3", "√2", "√25"],
      kunci: 2, // Index ke-2 yaitu √2
      bahas: "Bilangan Irasional tidak bisa diubah ke bentuk a/b. √2 hasilnya desimal tak terbatas. Sedangkan √25 = 5 (Rasional)."
    },
    {
      id: 2,
      tanya: "Himpunan bilangan asli dimulai dari angka...",
      opsi: ["-1", "0", "1", "2"],
      kunci: 2, // Index ke-2 yaitu 1
      bahas: "Bilangan Asli dimulai dari 1. Jika dimulai dari 0, disebut Bilangan Cacah."
    }
  ]

  // --- FUNGSI PILIH: Mengupdate state answers tanpa menghapus jawaban soal lain ---
  const pilihJawaban = (qId, idx) => {
    // Sesuai materi WPU: Gunakan spread operator (...) untuk mempertahankan data lama
    setAnswers({ ...answers, [qId]: idx })
  }

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', minHeight: '100vh' }}>
      
      {/* LINK KEMBALI */}
      <Link href="/belajar/matdas/pendahuluan" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#118EEA', textDecoration: 'none', fontWeight: 800, marginBottom: '20px' }}>
        <ArrowLeft size={18} /> Kembali
      </Link>

      <h1 style={{ fontWeight: 900, fontSize: '1.8rem', marginBottom: '30px' }}>1.1 Sistem Bilangan</h1>

      {/* VIDEO SECTION: Menggunakan teknik Aspect Ratio 16:9 agar video responsif */}
      <div style={{ backgroundColor: '#0F172A', borderRadius: '25px', overflow: 'hidden', marginBottom: '40px' }}>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
            src={"https://www.youtube.com/embed/" + VIDEO_ID} 
            frameBorder="0" allowFullScreen>
          </iframe>
        </div>
      </div>

      {/* LATIHAN SOAL SECTION */}
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '30px', border: '1px solid #E2E8F0' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '25px' }}>🎯 Latihan Soal</h2>

        {kuis.map((q, i) => (
          <div key={q.id} style={{ marginBottom: '40px', paddingBottom: '20px', borderBottom: i === 0 ? '1px solid #F1F5F9' : 'none' }}>
            <p style={{ fontWeight: 700, marginBottom: '15px' }}>{q.id}. {q.tanya}</p>
            
            <div style={{ display: 'grid', gap: '10px' }}>
              {q.opsi.map((opt, idx) => {
                // LOGIKA WARNA: Mengecek apakah tombol ini diklik, dan apakah klik-nya benar
                const isSelected = answers[q.id] === idx
                const isCorrect = idx === q.kunci
                
                return (
                  <button
                    key={idx}
                    onClick={() => pilihJawaban(q.id, idx)}
                    style={{
                      padding: '15px', textAlign: 'left', borderRadius: '12px', border: '1px solid',
                      // Ternary Operator bertumpuk: Hijau jika benar, Merah jika salah, Biru muda jika belum dipilih
                      backgroundColor: isSelected ? (isCorrect ? '#F0FDF4' : '#FEF2F2') : '#F8FAFC',
                      borderColor: isSelected ? (isCorrect ? '#16A34A' : '#EF4444') : '#E2E8F0',
                      cursor: 'pointer', fontWeight: 600, transition: '0.2s'
                    }}
                  >
                    <span style={{ fontSize: '1.1rem' }}>{String.fromCharCode(65 + idx)}.</span> 
                    <span style={{ marginLeft: '10px', fontSize: '1rem' }}>{opt}</span>
                    
                    {/* Munculkan Icon Check atau X hanya jika tombol sudah dipilih */}
                    {isSelected && (
                      isCorrect ? 
                      <CheckCircle size={18} style={{float:'right', color:'#16A34A'}}/> : 
                      <XCircle size={18} style={{float:'right', color:'#EF4444'}}/>
                    )}
                  </button>
                )
              })}
            </div>

            {/* TOMBOL PEMBAHASAN: Hanya muncul jika soal sudah dijawab */}
            {answers[q.id] !== undefined && (
              <button 
                onClick={() => setShowBahas({...showBahas, [q.id]: !showBahas[q.id]})}
                style={{ marginTop: '15px', background: 'none', border: 'none', color: '#118EEA', fontWeight: 800, cursor: 'pointer' }}
              >
                {showBahas[q.id] ? "Tutup Pembahasan" : "Lihat Pembahasan"}
              </button>
            )}

            {/* ISI PEMBAHASAN: Conditional Rendering (Muncul jika state showBahas true) */}
            {showBahas[q.id] && (
              <div style={{ marginTop: '10px', padding: '15px', backgroundColor: '#F0F9FF', borderRadius: '12px', fontSize: '0.9rem', lineHeight: '1.6', borderLeft: '4px solid #118EEA' }}>
                <strong>Penjelasan:</strong> {q.bahas}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FOOTER NAVIGASI */}
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-end' }}>
        <Link href="/belajar/matdas/pendahuluan" style={{ backgroundColor: '#0F172A', color: 'white', padding: '12px 25px', borderRadius: '15px', textDecoration: 'none', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px' }}>
          Materi Berikutnya <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  )
}
