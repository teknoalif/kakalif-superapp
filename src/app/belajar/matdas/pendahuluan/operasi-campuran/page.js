'use client'
import { useState } from 'react' // Mengelola state jawaban user
import { ArrowLeft, BookOpen, CheckCircle, XCircle, PlayCircle, Star, Quote } from 'lucide-react'
import Link from 'next/link'

export default function OperasiCampuran() {
  // --- STATE: Menyimpan data interaksi user ---
  const [answers, setAnswers] = useState({}) // Menyimpan pilihan jawaban kuis

  const VIDEO_ID = "eFtn12zo3tw" // ID Video Operasi Bilangan Kak Alif dari YouTube

  // --- DATA KUIS: Soal matematika yang diintegrasikan dengan konteks Keislaman ---
  const kuis = [
    {
      id: 1,
      tanya: "Berdasarkan QS. Al-Ankabut: 14, Nabi Nuh tinggal bersama kaumnya selama 'seribu tahun kurang lima puluh tahun'. Berapakah hasil operasi tersebut?",
      opsi: ["900", "950", "850", "1.050"],
      kunci: 1, // Index 1: 950
      bahas: "Operasi dasarnya adalah 1.000 - 50 = 950. Ini menunjukkan bahwa Al-Qur'an menggunakan bahasa matematika untuk menjelaskan durasi waktu secara presisi."
    },
    {
      id: 2,
      tanya: "Dalam konsep integrasi Abdussakir, jika satu kebaikan dibalas 10 kali lipat (QS. Al-An'am: 160), operasi manakah yang tepat untuk menghitung total pahala dari 7 kebaikan?",
      opsi: ["7 + 10 = 17", "7 x 10 = 70", "70 - 7 = 63", "10 / 7 = 1.4"],
      kunci: 1, // Index 1: 7 x 10 = 70
      bahas: "Pahala yang berlipat ganda adalah konsep perkalian (multiplication). 7 (amal) x 10 (balasan) = 70. Matematika membantu kita memvisualisasikan kemurahan hati Allah. (sumber: Dr. Abdussakir)"
    }
  ]

  // --- FUNCTION: Mengupdate pilihan jawaban ---
  const pilihJawaban = (qId, idx) => {
    // Sesuai konsep React di WPU: Menggunakan Spread Operator (...) untuk imutabilitas
    setAnswers({ ...answers, [qId]: idx })
  }

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', minHeight: '100vh' }}>
      
      {/* NAVIGASI KEMBALI */}
      <Link href="/belajar/matdas/pendahuluan" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#118EEA', textDecoration: 'none', fontWeight: 800, marginBottom: '20px' }}>
        <ArrowLeft size={18} /> Kembali ke Daftar Isi
      </Link>

      {/* HEADER MATERI */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontWeight: 900, fontSize: '1.8rem', marginBottom: '10px' }}>1.2 Operasi Bilangan & Nilai Islam</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ backgroundColor: '#D4AF37', color: 'black', padding: '2px 10px', borderRadius: '5px', fontSize: '0.7rem', fontWeight: 900 }}>MODUL INTEGRASI</span>
          <p style={{ color: '#64748B', margin: 0, fontSize: '0.9rem' }}>Memahami KABATAKU melalui ayat-ayat semesta.</p>
        </div>
      </div>

      {/* VIDEO PLAYER SECTION (ASPECT RATIO 16:9) */}
      <div style={{ backgroundColor: '#0F172A', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', marginBottom: '40px' }}>
        <div style={{ padding: '15px 20px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', fontWeight: 700 }}>
          <PlayCircle size={18} color="#D4AF37" /> PENJELASAN OPERASI BILANGAN
        </div>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
            src={"https://www.youtube.com/embed/" + VIDEO_ID} 
            frameBorder="0" allowFullScreen title="Operasi Bilangan Bulat">
          </iframe>
        </div>
      </div>

      {/* HIKMAH SECTION: Penjelasan Integrasi Dr. Abdussakir, M.Pd. */}
      <div style={{ backgroundColor: '#F0F9FF', padding: '30px', borderRadius: '25px', border: '1px solid #B9E6FE', marginBottom: '40px', position: 'relative' }}>
        <Quote size={40} color="#118EEA" style={{ opacity: 0.1, position: 'absolute', top: '10px', right: '20px' }} />
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', color: '#0369A1', marginBottom: '15px', fontWeight: 900 }}>
          <Star size={20} fill="#D4AF37" color="#D4AF37" /> Hikmah Matematika
        </h2>
        <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#0369A1', margin: 0 }}>
          Dr. Abdussakir, M.Pd. menekankan bahwa operasi bilangan bukan sekadar teknis di atas kertas. Penjumlahan dalam Islam identik dengan pengumpulan amal shaleh yang akan terus bertambah (akumulasi) jika diniatkan karena Allah.
        </p>
      </div>

      {/* KUIS INTERAKTIF BERBASIS WAHYU */}
      <div style={{ backgroundColor: 'white', padding: '35px', borderRadius: '30px', border: '1px solid #E2E8F0' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '25px', color: '#1E293B' }}>🎯 Latihan Berbasis Wahyu</h2>
        
        {kuis.map((q, i) => (
          <div key={q.id} style={{ marginBottom: '35px', paddingBottom: '20px', borderBottom: i === 0 ? '1px solid #F1F5F9' : 'none' }}>
            <p style={{ fontWeight: 700, marginBottom: '15px', lineHeight: '1.5' }}>{q.id}. {q.tanya}</p>
            
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
                      // Logika Warna Dinamis: Hijau jika benar saat diklik, Merah jika salah
                      backgroundColor: isSelected ? (isCorrect ? '#F0FDF4' : '#FEF2F2') : '#F8FAFC',
                      borderColor: isSelected ? (isCorrect ? '#16A34A' : '#EF4444') : '#E2E8F0',
                      cursor: 'pointer', fontWeight: 600, transition: '0.2s'
                    }}
                  >
                    {/* Mengubah index 0,1,2,3 menjadi huruf A, B, C, D */}
                    {String.fromCharCode(65 + idx)}. {opt}
                  </button>
                )
              })}
            </div>
            
            {/* TAMPILKAN PEMBAHASAN OTOMATIS: Jika soal sudah dijawab (baik benar maupun salah) */}
            {answers[q.id] !== undefined && (
              <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#F0F9FF', borderRadius: '12px', fontSize: '0.85rem', color: '#0369A1', lineHeight: '1.6' }}>
                <strong>Penjelasan:</strong> {q.bahas}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
