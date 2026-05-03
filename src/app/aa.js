'use client'
import { useState, useEffect } from 'react'
import { Hammer, Clock, Calendar, Coffee, Heart } from 'lucide-react'

export default function Maintenance() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [time, setTime] = useState({ masehi: '', hijriah: '', jam: '' })
  
  useEffect(() => {
    setIsLoaded(true)
    const updateClock = () => {
      const now = new Date();
      const jamDigital = now.toLocaleTimeString('id-ID', { hour12: false }).replace(/:/g, '.')
      const hari = now.toLocaleDateString('id-ID', { weekday: 'long' }).replace('Minggu', 'Ahad')
      
      // Kalkulasi Hijriah Sederhana (Kontekstual Dzulqa'dah 1447 H)
      const patokanDzul = new Date('2026-04-19').setHours(0,0,0,0)
      const diffDays = Math.floor((new Date(now).setHours(0,0,0,0) - patokanDzul) / 86400000)
      const hijriahStr = `${1 + diffDays + (now.getHours() >= 18 ? 1 : 0)} Dzulqa'dah 1447 H`
      
      setTime({ 
        masehi: `${hari}, ${now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}`, 
        hijriah: hijriahStr, 
        jam: jamDigital 
      })
    }

    updateClock()
    const timer = setInterval(updateClock, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!isLoaded) return null

  return (
    <main style={{ 
      backgroundColor: '#F8FAFC', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'sans-serif', 
      padding: '20px' 
    }}>
      
      <div style={{ 
        maxWidth: '450px', 
        width: '100%', 
        backgroundColor: 'white', 
        padding: '40px 30px', 
        borderRadius: '40px', 
        boxShadow: '0 20px 50px rgba(15, 23, 42, 0.05)', 
        textAlign: 'center',
        border: '1px solid #F1F5F9'
      }}>
        
        {/* WAKTU & KALENDER (Posisikan di atas agar informatif) */}
        <div style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
             <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#3B82F6', letterSpacing: '-1px' }}>{time.jam}</div>
             <div style={{ height: '20px', width: '1px', backgroundColor: '#E2E8F0' }}></div>
             <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10B981', textTransform: 'uppercase' }}>{time.hijriah}</div>
          </div>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94A3B8', italic: 'true' }}>{time.masehi}</div>
        </div>

        {/* Ikon Maintenance */}
        <div style={{ 
          backgroundColor: '#F1F5F9', 
          width: '60px', 
          height: '60px', 
          borderRadius: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 20px' 
        }}>
          <Hammer size={28} color="#64748B" />
        </div>

        <h1 style={{ 
          fontSize: '1.4rem', 
          fontWeight: 900, 
          color: '#1E293B', 
          marginBottom: '12px', 
          lineHeight: 1.3
        }}>
          Situs Sedang Dalam <br/> Pemeliharaan
        </h1>

        <p style={{ 
          fontSize: '0.85rem', 
          color: '#64748B', 
          lineHeight: '1.6', 
          marginBottom: '30px',
          padding: '0 10px'
        }}>
          Mohon maaf atas ketidaknyamanannya. Kami sedang merapikan sistem untuk layanan yang lebih baik. Silakan kembali lagi nanti. Barakallahu fiikum.
        </p>

        {/* Status Box */}
        <div style={{ 
          backgroundColor: '#F8FAFC', 
          padding: '15px', 
          borderRadius: '20px', 
          border: '1px solid #F1F5F9',
          fontSize: '0.75rem',
          fontWeight: 800,
          color: '#94A3B8'
        }}>
          ESTIMASI: HINGGA KESIAPAN SISTEM
        </div>

        <div style={{ marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#CBD5E1' }}>
          <Coffee size={14} /> <Heart size={14} />
        </div>

      </div>

      <footer style={{ 
        position: 'absolute', 
        bottom: '30px', 
        fontSize: '0.65rem', 
        color: '#94A3B8', 
        fontWeight: 800, 
        textTransform: 'uppercase', 
        letterSpacing: '2px' 
      }}>
        Alif • 2026
      </footer>
      
    </main>
  )
}
