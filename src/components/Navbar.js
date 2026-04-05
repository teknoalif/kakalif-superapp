'use client' // Wajib ada karena kita pakai React Hooks (useState, useEffect)
import { useState, useEffect } from 'react'
import Link from 'next/link' // Alat navigasi Next.js agar pindah halaman tanpa reload

export default function Navbar() {
  // --- STATE 1: Status Login ---
  const [isAdmin, setIsAdmin] = useState(false) 
  
  // --- STATE 2: Status Scroll (untuk efek transparan/timbul) ---
  const [isScrolled, setIsScrolled] = useState(false)
  
  // --- STATE 3: Hydration Fix (Mencegah error beda data antara server & browser) ---
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true) // Menandakan bahwa komponen sudah berhasil muncul di browser
    
    // Fungsi cek session: melihat apakah user sudah login sebagai admin
    const check = () => setIsAdmin(localStorage.getItem('admin_session') === 'active')
    
    // Fungsi pantau scroll: jika scroll lebih dari 20 pixel, ubah tampilan navbar
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    
    // Menjalankan fungsi di atas saat pertama kali load
    check()
    
    // Memasang "mata-mata" (Event Listener) pada browser
    window.addEventListener('scroll', handleScroll) // Pantau scroll mouse
    window.addEventListener('storage', check) // Pantau jika ada perubahan login di tab lain
    
    // CLEANUP: Menghapus mata-mata saat pindah halaman agar memori HP/Laptop tidak berat
    return () => { 
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('storage', check)
    }
  }, [])

  // Jika belum 'mounted', jangan tampilkan apapun (menghindari tampilan berantakan di awal)
  if (!mounted) return null

  return (
    <nav style={{ 
      position: 'sticky', top: 0, zIndex: 1000, // Membuat navbar tetap di atas saat di-scroll
      // Kondisi Dinamis: Jika di-scroll pakai warna putih transparan, jika di atas pakai putih solid
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'white', 
      backdropFilter: isScrolled ? 'blur(10px)' : 'none', // Efek blur ala iPhone saat scroll
      borderBottom: '1px solid #E2E8F0', 
      height: '80px', 
      display: 'flex', 
      alignItems: 'center',
      transition: 'all 0.3s ease' // Biar perubahan warna navbar terasa halus (smooth)
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
        
        {/* LOGO & NAMA BRAND */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logonya.png" style={{ height: '40px' }} alt="logo" />
          <span style={{ fontWeight: 950, color: '#118EEA', fontSize: '1.2rem' }}>KAK ALIF</span>
        </Link>

        {/* MENU TENGAH: Daftar Link Halaman */}
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <Link href="/portofolio" style={{ textDecoration: 'none', fontSize: '0.85rem', fontWeight: 800, color: '#475569' }}>Portofolio kak Alif</Link>
          <Link href="/koding" style={{ textDecoration: 'none', fontSize: '0.85rem', fontWeight: 800, color: '#475569' }}>Layanan Web</Link>
          <Link href="/belajar" style={{ textDecoration: 'none', fontSize: '0.85rem', fontWeight: 800, color: '#475569' }}>Ruang Belajar Math</Link>
          <Link href="/buku" style={{ textDecoration: 'none', fontSize: '0.85rem', fontWeight: 800, color: '#475569' }}>Produk Buku</Link>
          <Link href="/kelas" style={{ textDecoration: 'none', fontSize: '0.85rem', fontWeight: 800, color: '#475569' }}>Privat Online</Link>
                  </div>

        {/* AREA KANAN: Tombol Login / Kasir + Logout */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {isAdmin ? (
            // Jika Admin Login: Tampilkan tombol Kasir dan Logout
            <>
              <Link href="/kasir" style={{ backgroundColor: '#118EEA', color: 'white', padding: '10px 20px', borderRadius: '12px', textDecoration: 'none', fontWeight: 900, fontSize: '0.8rem' }}>ADMIN</Link>
              <button 
                onClick={() => { 
                  localStorage.removeItem('admin_session'); // Hapus kunci login
                  window.location.reload(); // Segarkan halaman agar status berubah
                }} 
                style={{ backgroundColor: '#FEE2E2', color: '#EF4444', border: 'none', padding: '10px 15px', borderRadius: '12px', fontWeight: 900, cursor: 'pointer' }}
              >
                LOGOUT
              </button>
            </>
          ) : (
            // Jika Belum Login: Tampilkan tombol Masuk
            <Link href="/login" style={{ backgroundColor: '#118EEA', color: 'white', padding: '12px 25px', borderRadius: '12px', textDecoration: 'none', fontWeight: 900, fontSize: '0.85rem' }}>LOGIN</Link>
          )}
        </div>
      </div>
    </nav>
  )
}
