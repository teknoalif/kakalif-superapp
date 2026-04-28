'use client' // Komponen ini interaktif (menangani event klik kanan)
import { useState } from 'react'

export default function SafePlayer({ videoId }) {
  // --- PROPS: videoId adalah data kiriman dari halaman materi ---
  return (
    <div style={{ 
      position: 'relative', // Dasar untuk menumpuk lapisan di atasnya
      width: '100%', 
      aspectRatio: '16/9', // Menjaga perbandingan layar video tetap proporsional
      borderRadius: '20px', 
      overflow: 'hidden', // Memastikan sudut video membulat mengikuti border
      backgroundColor: '#000',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
    }}>
      
      {/* LAPISAN KACA (Glass Layer): 
         Tujuannya agar user tidak bisa klik judul video atau logo YouTube.
         Hanya menyisakan 15% di bawah (height: 85%) agar tombol Play/Volume tetap bisa diklik.
      */}
      <div 
        onContextMenu={(e) => e.preventDefault()} // MEMATIKAN KLIK KANAN di area video
        style={{ 
          position: 'absolute', 
          top: 0, left: 0, 
          width: '100%', 
          height: '85%', 
          zIndex: 10, // Berada di atas iframe (layer paling depan)
          background: 'transparent' // Tidak terlihat tapi 'ada' dan menghalangi klik
        }} 
      />

      {/* IFRAME YOUTUBE: 
         Ditambahkan parameter rahasia agar tampilan lebih bersih (modestbranding).
      */}
      <iframe
        width="100%"
        height="100%"
        // Parameter ?rel=0 (tidak muncul video rekomendasi lain di akhir)
        // Modestbranding=1 (menyembunyikan logo YouTube di kontrol bawah)
        // Disablekb=1 (mematikan kontrol shortcut keyboard seperti spasi/panah)
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&disablekb=1&iv_load_policy=3&controls=1`}
        title="Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'relative', zIndex: 5 }} // Berada di bawah lapisan kaca
      ></iframe>
    </div>
  )
}
