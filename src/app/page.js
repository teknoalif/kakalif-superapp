'use client'
import { useState, useEffect } from 'react'
import { 
  Heart, History, ExternalLink, UserCheck, Sparkles, CheckCircle2, Clock, Calendar, BookOpen, PlayCircle, Users 
} from 'lucide-react'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Data terbaru: Total Dana Rp 1.200.392
  const statsInitial = { visitors: 846, totalDana: 1200392 } 
  const [visitors, setVisitors] = useState(statsInitial.visitors)
  const targetDana = 7000000000 
  
  const [time, setTime] = useState({ masehi: '', hijriah: '', jam: '' })
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const tglTutup = new Date('2026-06-28T23:59:59').getTime()

  // DATA DONATUR HARIAN (Update Sesuai Instruksi)
  const donasiHarian = [
    { tanggal: '2 Mei 2026', list: [
      { nama: 'Hamba Allah', paket: 'SANTRI+', nominal: '100.098' }
    ]},
    { tanggal: '1 Mei 2026', list: [
      { nama: 'Hamba Allah', paket: 'SANTRI', nominal: '50.098' }
    ]},
    { tanggal: '27 April 2026', list: [
      { nama: 'Hamba Allah', paket: 'SANTRI', nominal: '50.098' },
      { nama: 'Alif Rezky', paket: 'SILVER', nominal: '1.000.098' }
    ]},
  ]

  const paketTaawun = [
    { nama: 'PREMIUM', harga: '10.000.000', icon: '💎', color: '#0F172A', tag: 'VVIP', benefits: ['Rumaatun Lifetime', 'Web Custom (Spt LaCrosta)', 'Privat TKA Online', '5 Buku Fisik'] },
    { nama: 'GOLD', harga: '5.000.000', icon: '🏆', color: '#118EEA', tag: 'UTAMA', benefits: ['Rumaatun Lifetime', '5 Buku Fisik'] },
    { nama: 'SILVER', harga: '1.000.000', icon: '🥈', color: '#334155', tag: 'POPULER', benefits: ['Rumaatun Lifetime', '2 Buku Fisik'] },
    { nama: 'KANTONG SANTRI', harga: '50.000', icon: '🍃', color: '#059669', tag: 'RUMAH SURGA', benefits: ['Rumaatun Lifetime'] },
  ]

  useEffect(() => {
    setIsLoaded(true)
    
    // Visitors Auto-Increment (+1 setiap buka)
    const savedVisitors = localStorage.getItem('visitors_count')
    let currentCount = savedVisitors ? parseInt(savedVisitors) : statsInitial.visitors
    const newCount = currentCount + 1
    setVisitors(newCount)
    localStorage.setItem('visitors_count', newCount.toString())

    const updateClock = () => {
      const now = new Date();
      setTime({ 
        masehi: now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }), 
        hijriah: "11 Dzulqa'dah 1447 H", 
        jam: now.toLocaleTimeString('id-ID', { hour12: false }).replace(/:/g, '.')
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
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer)
  }, [])

  const hubungiWA = (paket) => {
    window.open(`https://wa.me/6285256162879?text=Bismillah+Kak+Alif,+saya+ingin+konfirmasi+Taawun+Paket+${paket}`, '_blank')
  }

  if (!isLoaded) return null

  return (
    <main style={{ backgroundColor: '#F0F9FF', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '80px' }}>
      
      {/* HEADER NAV */}
      <nav style={{ backgroundColor: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: '#0ea5e9', padding: '6px', borderRadius: '10px' }}><Sparkles size={18} color="white" /></div>
          <span style={{ fontWeight: 900, color: '#1e293b', fontSize: '0.9rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Kak Alif Guru Matematika</span>
        </div>
      </nav>

      <div style={{ maxWidth: '480px', margin: '0 auto', padding: '20px' }}>
        
        {/* DISPLAY PENGUNJUNG */}
        <div style={{ backgroundColor: 'white', padding: '20px 25px', borderRadius: '30px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #f1f5f9' }}>
           <div>
              <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', marginBottom: '4px' }}>PENGUNJUNG</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0ea5e9', letterSpacing: '-1px' }}>{visitors.toLocaleString()}</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0ea5e9' }}>Akses</span>
              </div>
           </div>
           <UserCheck size={32} color="#bae6fd" />
        </div>

        {/* BLUE MAIN CARD */}
        <div style={{ backgroundColor: '#0ea5e9', borderRadius: '35px', padding: '35px 25px', color: 'white', marginBottom: '25px', boxShadow: '0 20px 40px rgba(14, 165, 233, 0.2)' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 950, lineHeight: 1.2, marginBottom: '10px', textTransform: 'uppercase', fontStyle: 'italic' }}>
              Taawun Teman Kak Alif <br/> untuk Masjid Riyadhusshalihin
            </h1>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.9, letterSpacing: '1px' }}>Hadiah Perpisahan Kak Alif (2022 - 2026)</div>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '25px', padding: '20px', marginBottom: '30px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '2px', marginBottom: '10px' }}>WAKTU TERSISA</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>{timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}</div>
          </div>

          <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '20px 25px', borderRadius: '25px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 800, marginBottom: '10px' }}>
                <span>DANA TERKUMPUL</span>
                <span>TARGET: 7M</span>
             </div>
             <div style={{ height: '10px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '10px', overflow: 'hidden', marginBottom: '12px' }}>
                <div style={{ width: `${(statsInitial.totalDana / targetDana) * 100}%`, height: '100%', backgroundColor: 'white' }}></div>
             </div>
             <div style={{ fontSize: '1.5rem', fontWeight: 950, fontStyle: 'italic' }}>Rp {statsInitial.totalDana.toLocaleString('id-ID')}</div>
          </div>
        </div>

        {/* EMBED VIDEO YOUTUBE (GtkLXRZOXRQ) */}
        <div style={{ marginBottom: '35px' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', paddingLeft: '10px' }}>
              <PlayCircle size={20} color="#0ea5e9" />
              <span style={{ fontWeight: 900, fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase' }}>Penjelasan Program</span>
           </div>
           <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)', border: '4px solid white' }}>
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/gtkLXRZOXRQ" 
                title="Resign Setelah 4 Tahun Merantau"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
           </div>
        </div>

        {/* LOG DONATUR HARIAN */}
        <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '35px', border: '1px solid #e2e8f0', marginBottom: '35px' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Users size={20} color="#0ea5e9" />
              <span style={{ fontWeight: 900, fontSize: '0.8rem', color: '#1e293b', textTransform: 'uppercase' }}>Log Donasi Teman Kak Alif</span>
           </div>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {donasiHarian.map((hari, i) => (
                <div key={i} style={{ borderLeft: '2px solid #f1f5f9', paddingLeft: '15px' }}>
                   <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', marginBottom: '8px' }}>{hari.tanggal}</div>
                   {hari.list.map((d, idx) => (
                     <div key={idx} style={{ backgroundColor: '#F8FAFC', padding: '12px', borderRadius: '15px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #f1f5f9' }}>
                        <div>
                           <div style={{ fontSize: '0.75rem', fontWeight: 900, fontStyle: 'italic' }}>{d.nama}</div>
                           <div style={{ fontSize: '0.6rem', fontWeight: 800, color: '#0ea5e9' }}>Paket {d.paket}</div>
                        </div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 900 }}>Rp {d.nominal}</div>
                     </div>
                   ))}
                </div>
              ))}
           </div>
        </div>

        {/* PAKET TAAWUN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '40px' }}>
           {paketTaawun.map((pk, i) => (
             <div key={i} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '35px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                   <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.8rem' }}>{pk.icon}</span>
                      <div>
                        <div style={{ fontSize: '1rem', fontWeight: 900, fontStyle: 'italic' }}>{pk.nama}</div>
                        <div style={{ fontSize: '0.6rem', fontWeight: 800, color: pk.color }}>{pk.tag}</div>
                      </div>
                   </div>
                   <div style={{ textAlign: 'right', fontWeight: 950, color: '#0ea5e9', fontSize: '1.1rem' }}>Rp {pk.harga}</div>
                </div>
                <div style={{ marginBottom: '20px', backgroundColor: '#F8FAFC', padding: '18px', borderRadius: '22px' }}>
                   <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', marginBottom: '10px' }}>DAPATKAN GRATIS: 👇</div>
                   {pk.benefits.map((b, idx) => (
                     <div key={idx} style={{ fontSize: '0.8rem', color: '#475569', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700 }}>
                        <CheckCircle2 size={14} color="#10b981" /> {b}
                     </div>
                   ))}
                </div>
                <button onClick={() => hubungiWA(pk.nama)} style={{ width: '100%', backgroundColor: pk.color, color: 'white', border: 'none', padding: '16px', borderRadius: '18px', fontWeight: 900, fontSize: '0.85rem', cursor: 'pointer' }}>PILIH & KONFIRMASI</button>
             </div>
           ))}
        </div>

        {/* PROJEK AKTIF */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
          { t: 'Level Up Resto Pebayuran', i: '🍜', u: 'https://levelupresto.com' },
          { t: 'Restoran LaCrosta Jatinangor', i: '🍕', u: 'https://lacrosta.id' }, 
          { t: 'Rumaatun - Belajar Tepat Sasaran untuk Math, Coding, dan Arabic', i: '🎯', u: 'https://rumaatun.kakalif.my.id' }, 
          { t: 'Masjid Riyadhusshalihin', i: '🕌', u: 'https://riyadhusshalihin.kakalif.my.id' }
            
          ].map((p, i) => (
            <a key={i} href={p.u} target="_blank" style={{ backgroundColor: 'white', padding: '18px 22px', borderRadius: '25px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none', color: '#1e293b', border: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '1.3rem' }}>{p.i}</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, fontStyle: 'italic' }}>{p.t}</span>
              </div>
              <ExternalLink size={14} color="#cbd5e1" />
            </a>
          ))}
        </div>

        <footer style={{ textAlign: 'center', marginTop: '60px', fontSize: '0.7rem', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>Alif Rezky • 2026</footer>
      </div>
    </main>
  )
}
