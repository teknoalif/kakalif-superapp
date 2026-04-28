'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const check = () => setIsAdmin(localStorage.getItem('admin_session') === 'active')
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    check(); window.addEventListener('scroll', handleScroll); window.addEventListener('storage', check)
    return () => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('storage', check) }
  }, [])

  if (!mounted) return null

  const linkStyle = (path) => ({
    textDecoration: 'none',
    fontSize: '0.75rem', // Ukuran dikecilkan sedikit untuk HP
    fontWeight: 800,
    transition: 'all 0.3s ease',
    color: pathname === path ? '#118EEA' : '#475569',
    borderBottom: pathname === path ? '3px solid #118EEA' : '3px solid transparent',
    padding: '8px 4px',
    whiteSpace: 'nowrap' // Jaga biar tidak turun baris
  })

  return (
    <nav style={{ 
      position: 'sticky', top: 0, zIndex: 1000, 
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'white', 
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: '1px solid #E2E8F0', 
      transition: 'all 0.3s ease'
    }}>
      {/* Container Utama: Menggunakan Column di Mobile agar logo tidak kegencet */}
      <div style={{ 
        maxWidth: '1200px', margin: '0 auto', 
        padding: '10px 15px',
        display: 'flex', flexDirection: 'column', gap: '10px' 
      }}>
        
        {/* BARIS ATAS: Logo + Tombol Masuk */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/logonya.png" style={{ height: '30px' }} alt="logo" />
            <span style={{ fontWeight: 950, color: '#118EEA', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
              KAK ALIF <span style={{ color: '#0F172A' }}>GURU MATEMATIKA</span>
            </span>
          </Link>

          <div style={{ display: 'flex', gap: '8px' }}>
            {isAdmin ? (
              <button onClick={() => { localStorage.removeItem('admin_session'); window.location.reload(); }} style={{ backgroundColor: '#FEE2E2', color: '#EF4444', border: 'none', padding: '6px 10px', borderRadius: '8px', fontWeight: 900, fontSize: '0.7rem' }}>LOGOUT</button>
            ) : (
              <Link href="/login" style={{ backgroundColor: '#118EEA', color: 'white', padding: '8px 15px', borderRadius: '10px', textDecoration: 'none', fontWeight: 900, fontSize: '0.75rem' }}>MASUK</Link>
            )}
          </div>
        </div>
        
        {/* BARIS BAWAH: Menu yang bisa di-geser (Horizontal Scroll) */}
        <div style={{ 
          display: 'flex', 
          gap: '18px', 
          overflowX: 'auto', 
          paddingBottom: '5px',
          scrollbarWidth: 'none', // Sembunyikan scrollbar di Firefox
          msOverflowStyle: 'none', // Sembunyikan scrollbar di IE
        }}>
          {/* Style CSS inline untuk sembunyikan scrollbar Chrome/Safari */}
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          
          <Link href="/portofolio" style={linkStyle('/portofolio')}>Portofolio</Link>
          <Link href="/koding" style={linkStyle('/koding')}>Al Alify Tech</Link>
          <Link href="/buku" style={linkStyle('/buku')}>Buku</Link>
          <Link href="/belajar" style={linkStyle('/belajar')}>RUMAT</Link>
          <Link href="/kelas" style={linkStyle('/kelas')}>Privat Online</Link>
          {isAdmin && <Link href="/kasir" style={linkStyle('/kasir')}>Kasir</Link>}
        </div>

      </div>
    </nav>
  )
}
