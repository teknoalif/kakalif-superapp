'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Heart, History, ExternalLink, UserCheck, Sparkles, CheckCircle2, Clock, Calendar
} from 'lucide-react'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  // DATA STATIS (Visitors 833 sesuai gambar terakhir Kakak)
  const stats = { visitors: 833, totalDana: 1050000 } 
  const targetDana = 7000000000 
  
  const [time, setTime] = useState({ masehi: '', hijriah: '', jam: '' })
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  const tglTutup = new Date('2026-06-28T23:59:59').getTime()

  // DATA PAKET (Format Card ala Mobile App)
  const paketTaawun = [
    { nama: 'PREMIUM', harga: '10.000.000', icon: '💎', color: '#0F172A', tag: 'VVIP', benefits: ['Rumaatun Lifetime', 'Web Custom (Spt LaCrosta)', 'Privat TKA Online', '5 Buku Fisik'] },
    { nama: 'GOLD', harga: '5.000.000', icon: '🏆', color: '#118EEA', tag: 'UTAMA', benefits: ['Rumaatun Lifetime', '5 Buku Fisik', 'Sertifikat Digital'] },
    { nama: 'SILVER', harga: '1.000.000', icon: '🥈', color: '#334155', tag: 'POPULER', benefits: ['Rumaatun Lifetime', 'Akses Library Digital', 'Group Exclusive'] },
    { nama: 'KANTONG SANTRI', harga: '50.000', icon: '🍃', color: '#059669', tag: 'RUMAH SURGA', benefits: ['Rumaatun Lifetime', 'Laporan Progres Masjid'] },
  ]

  const donaturList = [
    { nama: 'Ustaz Alif Rezky', paket: 'SILVER', nominal: '1.000.000', tgl: '28 Apr 2026' },
    { nama: 'Hamba Allah', paket: 'SANTRI', nominal: '50.000', tgl: 'Baru Saja' },
  ]

  useEffect(() => {
    setIsLoaded(true)
    const updateClock = () => {
      const now = new Date();
      const jamDigital = now.toLocaleTimeString('id-ID', { hour12: false }).replace(/:/g, '.')
      const hari = now.toLocaleDateString('id-ID', { weekday: 'long' }).replace('Minggu', 'Ahad')
      setTime({ 
        masehi: `${hari}, ${now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}`, 
        hijriah: "11 Dzulqa'dah 1447 H", jam: jamDigital 
      })
      const gap = tglTutup - now.getTime()
      setTimeLeft({
        days: Math.max(0, Math.floor(gap / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: Math.max(0, Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: Math.max(0, Math.floor((gap % (1000 * 60)) / 1000))
      })
    }
    updateClock();
    setInterval(updateClock, 1000);
  }, [])

  const hubungiWA = (paket) => {
    const pesan = `Bismillah Kak Alif, saya ingin konfirmasi transfer Taawun Paket ${paket}.`
    window.open(`https://wa.me/6285256162879?text=${encodeURIComponent(pesan)}`, '_blank')
  }

  if (!isLoaded) return null

  return (
    <main style={{ backgroundColor: '#F0F9FF', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '60px' }}>
      
      {/* HEADER (Sticky seperti gambar) */}
      <nav style={{ backgroundColor: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: '#0ea5e9', padding: '5px', borderRadius: '8px' }}>
             <Sparkles size={18} color="white" />
          </div>
          <span style={{ fontWeight: 800, color: '#1e293b', fontSize: '0.9rem' }}>KAK ALIF GURU MATEMATIKA</span>
        </div>
        <button style={{ backgroundColor: '#0ea5e9', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '10px', fontWeight: 800, fontSize: '0.8rem' }}>MASUK</button>
      </nav>

      <div style={{ maxWidth: '480px', margin: '0 auto', padding: '20px' }}>
        
        {/* BANNER PROMO */}
        <div style={{ backgroundColor: 'white', padding: '12px 20px', borderRadius: '15px 15px 0 0', display: 'inline-block', borderBottom: 'none' }}>
           <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>🔥 Ambil Promo Buku</span>
        </div>

        {/* BLUE CARD (Main Section ala Gambar 474710.jpg) */}
        <div style={{ backgroundColor: '#0ea5e9', borderRadius: '0 30px 30px 30px', padding: '30px 20px', color: 'white', marginBottom: '20px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '10px' }}>Taawun Perluasan<br/>Masjid Riyadhusshalihin</h1>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.9 }}>Hadiah Perpisahan Kak Alif (2022 - 2026)</div>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '25px', padding: '20px', marginBottom: '25px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '10px' }}>WAKTU TERSISA</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '2px' }}>{timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}</div>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '15px 25px', borderRadius: '25px', marginBottom: '30px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 800, marginBottom: '10px' }}>
                <span>DANA TERKUMPUL</span>
                <span>TARGET: 7M</span>
             </div>
             <div style={{ height: '10px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ width: `${(stats.totalDana / targetDana) * 100}%`, height: '100%', backgroundColor: 'white' }}></div>
             </div>
             <div style={{ marginTop: '10px', fontSize: '1.2rem', fontWeight: 900 }}>Rp {stats.totalDana.toLocaleString('id-ID')}</div>
          </div>

          {/* UPDATE PROJEK (Link Cards ala Gambar) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
             <History size={18} />
             <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>Update Projek Aktif</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { t: 'Restoran LaCrosta Jatinangor', i: '🍕', u: 'https://lacrosta.id' },
              { t: 'Rumaatun - Belajar Tepat', i: '🎯', u: 'https://rumaatun.kakalif.my.id' },
              { t: 'Masjid Riyadhusshalihin', i: '🕌', u: 'https://riyadhusshalihin.kakalif.my.id' },
              { t: 'SIT Raffasya Baitul Makmur', i: '🏫', u: 'https://sitrbm.kakalif.my.id' }
            ].map((p, i) => (
              <a key={i} href={p.u} target="_blank" style={{ backgroundColor: 'white', padding: '15px 20px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', color: '#1e293b' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ fontSize: '1.2rem' }}>{p.i}</span>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800 }}>{p.t}</div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#0ea5e9' }}>Live Now 🚀</div>
                  </div>
                </div>
                <ExternalLink size={14} color="#cbd5e1" />
              </a>
            ))}
          </div>
        </div>

        {/* PENGUNJUNG CARD (Sesuai Gambar) */}
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '30px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
           <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', marginBottom: '5px', textTransform: 'uppercase' }}>PENGUNJUNG</div>
           <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0ea5e9' }}>{stats.visitors}</span>
              <span style={{ fontSize: '1rem', fontWeight: 800, color: '#0ea5e9' }}>Akses</span>
           </div>
        </div>

        {/* PILIHAN PAKET (Card Mode) */}
        <div style={{ marginBottom: '20px', fontWeight: 800, color: '#64748b', fontSize: '0.8rem', paddingLeft: '10px' }}>PILIH PAKET TAAWUN</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
           {paketTaawun.map((pk, i) => (
             <div key={i} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '30px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                   <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.5rem' }}>{pk.icon}</span>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 900 }}>{pk.nama}</div>
                        <div style={{ fontSize: '0.6rem', fontWeight: 800, color: pk.color }}>{pk.tag}</div>
                      </div>
                   </div>
                   <div style={{ textAlign: 'right', fontWeight: 900, color: '#0ea5e9' }}>Rp {pk.harga}</div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                   {pk.benefits.map((b, idx) => (
                     <div key={idx} style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={12} color="#10b981" /> {b}
                     </div>
                   ))}
                </div>
                <button onClick={() => hubungiWA(pk.nama)} style={{ width: '100%', backgroundColor: pk.color, color: 'white', border: 'none', padding: '15px', borderRadius: '15px', fontWeight: 800, fontSize: '0.8rem' }}>PILIH & KONFIRMASI</button>
             </div>
           ))}
        </div>

        {/* DONATUR BARU */}
        <div style={{ marginTop: '40px', backgroundColor: 'white', padding: '25px', borderRadius: '30px', border: '1px solid #e2e8f0' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <UserCheck size={18} color="#0ea5e9" />
              <span style={{ fontWeight: 800, fontSize: '0.8rem' }}>UPDATE DONATUR BARU</span>
           </div>
           {donaturList.map((d, i) => (
             <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i === 0 ? '1px solid #f1f5f9' : 'none' }}>
                <div>
                   <div style={{ fontSize: '0.8rem', fontWeight: 800 }}>{d.nama}</div>
                   <div style={{ fontSize: '0.65rem', color: '#0ea5e9', fontWeight: 700 }}>Paket {d.paket}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                   <div style={{ fontSize: '0.8rem', fontWeight: 900 }}>Rp {d.nominal}</div>
                   <div style={{ fontSize: '0.6rem', color: '#94a3b8' }}>{d.tgl}</div>
                </div>
             </div>
           ))}
        </div>

        {/* MITIGASI TRANSFER */}
        <div style={{ marginTop: '20px', backgroundColor: '#fff7ed', padding: '20px', borderRadius: '25px', border: '1px solid #fed7aa', textAlign: 'center' }}>
           <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#c2410c', marginBottom: '5px' }}>MITIGASI TRANSFER PAKET PREMIUM</div>
           <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9a3412' }}>Rp 9.800.000 ke QRIS Muamalat<br/>Rp 200.000 ke QRIS Dana</div>
        </div>

        <footer style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>
           Didesain dengan ❤️ oleh Kak Alif • 2026
        </footer>
      </div>
    </main>
  )
}
