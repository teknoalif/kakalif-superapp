'use client'
import { useState } from 'react'
import { ArrowLeft, PlayCircle, Lock, ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'

export default function DaftarSubMateri() {
  // --- DATA ARRAY: Daftar video/sub-materi dalam satu bab ---
  const subMateri = [
    { id: 1, judul: 'Sistem Bilangan', durasi: '12:45', slug: 'sistem-bilangan', isFree: true },
    { id: 2, judul: 'Operasi Bilangan & Nilai Islam', durasi: '15:20', slug: 'operasi-campuran', isFree: true },
    { id: 3, judul: 'Logika Perkalian Negatif', durasi: '18:10', slug: 'perkalian-negatif', isFree: true },
    { id: 4, judul: 'FPB dan KPK', durasi: '14:05', slug: 'fpb-kpk', isFree: false },
    { id: 5, judul: 'Soal Cerita & Aplikasi', durasi: '20:30', slug: 'soal-cerita', isFree: false }
  ]

  // --- FUNGSI HANDLING: Mengatur apa yang terjadi jika materi premium diklik ---
  const handlePremiumClick = (e, isFree) => {
    if (!isFree) {
      // 1. e.preventDefault() : Menghentikan Link agar tidak pindah halaman
      e.preventDefault() 
      
      alert("Materi ini khusus Member Premium. Silakan berlangganan dulu ya!")
      
      // 2. Smooth Scroll : Otomatis mengarahkan layar ke bagian paling bawah (tombol WA)
      // Ini teknik UX yang bagus agar user langsung tahu harus ke mana untuk daftar
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
  }

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', minHeight: '100vh' }}>
      
      {/* TOMBOL KEMBALI: Navigasi mundur satu level ke /belajar */}
      <Link href="/belajar" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#118EEA', textDecoration: 'none', fontWeight: 800, marginBottom: '30px' }}>
        <ArrowLeft size={18} /> Kembali ke Kurikulum
      </Link>

      {/* HEADER BAB */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontWeight: 900, fontSize: '2.2rem', marginBottom: '10px' }}>
          Bab 1: <span style={{ color: '#D4AF37' }}>Bilangan</span>
        </h1>
        <p style={{ color: '#64748B', fontWeight: 500 }}>Pelajari materi awal secara gratis dan buka akses penuh untuk materi lainnya.</p>
      </div>

      {/* LOOPING LIST: Menampilkan setiap sub-materi dari array di atas */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {subMateri.map((item) => (
          <Link 
            key={item.id}
            // Alamat tujuan link: folder matdas > bab pendahuluan > nama slug materi
            href={"/belajar/matdas/pendahuluan/" + item.slug}
            onClick={(e) => handlePremiumClick(e, item.isFree)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '20px 25px', borderRadius: '22px', 
              backgroundColor: item.isFree ? 'white' : '#F8FAFC',
              border: item.isFree ? '1px solid #E2E8F0' : '1px dashed #CBD5E1', 
              textDecoration: 'none', color: 'inherit', transition: '0.3s'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {/* BOX IKON: Biru untuk free, Abu-abu untuk gembok */}
              <div style={{ 
                width: '45px', height: '45px', borderRadius: '15px', 
                backgroundColor: item.isFree ? '#F0F9FF' : '#F1F5F9',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {item.isFree ? <PlayCircle size={24} color="#118EEA" /> : <Lock size={20} color="#94A3B8" />}
              </div>
              
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: item.isFree ? '#1E293B' : '#94A3B8' }}>
                    {item.id}. {item.judul}
                  </h3>
                  {/* Label Hijau "FREE" hanya tampil jika isFree true */}
                  {item.isFree && <span style={{ fontSize: '0.6rem', backgroundColor: '#10B981', color: 'white', padding: '2px 8px', borderRadius: '5px', fontWeight: 900 }}>FREE</span>}
                </div>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 700 }}>Video Belajar • {item.durasi}</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Ikon Bintang emas untuk menandai materi Premium */}
              {!item.isFree && <Star size={16} color="#D4AF37" fill="#D4AF37" />}
              <ChevronRight size={18} color={item.isFree ? "#118EEA" : "#CBD5E1"} />
            </div>
          </Link>
        ))}
      </div>

      {/* BANNER UPGRADE: Target dari fitur smooth scroll tadi */}
      <div id="premium-cta" style={{ 
        marginTop: '50px', padding: '30px', borderRadius: '25px', 
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', 
        color: 'white', textAlign: 'center', boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ fontWeight: 900, marginBottom: '10px' }}>Ingin Akses Semua Materi?</h3>
        <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '20px' }}>Dapatkan modul eksklusif, kuis tak terbatas, dan bimbingan privat.</p>
        <a href="https://wa.me/6285256162879?text=Halo Kak Alif, saya ingin daftar akun Premium CENTANG" 
           target="_blank"
           style={{ backgroundColor: '#D4AF37', color: 'black', padding: '12px 35px', borderRadius: '15px', fontWeight: 900, textDecoration: 'none', display: 'inline-block' }}>
          DAFTAR PREMIUM VIA WA
        </a>
      </div>
    </div>
  )
}
