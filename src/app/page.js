'use client' // Menandakan ini Client Component (Bisa pakai interaksi user & Hooks)
import { useState, useEffect } from 'react' // Mengambil alat tempur React
import { supabase } from '../lib/supabase' // Mengambil koneksi database Supabase ta'

export default function Home() {
  // --- STATE: Tempat penyimpanan data sementara di browser ---
  const [stats, setStats] = useState({ items: 0, orders: 0, visitors: 0 }) // Simpan angka statistik
  const [time, setTime] = useState({ masehi: '', hijriah: '', jam: '' }) // Simpan data waktu & tanggal

  useEffect(() => {
    // --- FUNGSI 1: Update Jam & Tanggal (Logika Matematika Waktu) ---
    const updateClock = () => {
      const now = new Date(); 
      const jamHeader = now.getHours() // Ambil jam saja (0-23) untuk cek Maghrib
      
      // Format jam digital pakai titik (.) bukan titik dua (:) sesuai request ta'
      const jamDigital = now.toLocaleTimeString('id-ID', { hour12: false }).replace(/:/g, '.')

      // Logika mengubah "Minggu" jadi "Ahad"
      const hari = now.toLocaleDateString('id-ID', { weekday: 'long' })
      const hariAhad = hari === 'Minggu' ? 'Ahad' : hari
      const masehiStr = `${hariAhad}, ${now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}`
      
      // Logika Hitung Manual Tanggal Hijriah (Patokan 29 Maret = 9 Syawal)
      const patokan = new Date('2026-03-29').setHours(0,0,0,0)
      const hariIni = new Date(now).setHours(0,0,0,0)
      const diff = Math.floor((hariIni - patokan) / 86400000) // Selisih hari
      const offsetMaghrib = jamHeader >= 18 ? 1 : 0 // Jika jam 6 sore keatas, masuk hari baru (Hijriah)
      const hijriahStr = `${9 + diff + offsetMaghrib} Syawal 1447 H`
      
      setTime({ masehi: masehiStr, hijriah: hijriahStr, jam: jamDigital })
    }

    // --- FUNGSI 2: Ambil Data dari Supabase (Async/Await) ---
    const handleData = async () => {
      // 1. Panggil fungsi RPC 'increment_visitor' di database ta' untuk nambah +1 pengunjung
      await supabase.rpc('increment_visitor', { row_id: 1 })
      
      // 2. Ambil angka terbaru dari tabel 'count'
      const { data: cData } = await supabase.from('count').select('count').eq('id', 1).single()
      if (cData) setStats(prev => ({ ...prev, visitors: cData.count }))
      
      // 3. Ambil data dari tabel 'transaksi' untuk hitung total item & nota
      const { data: transData } = await supabase.from('transaksi').select('jumlah')
      if (transData) {
        // .reduce digunakan untuk menjumlahkan semua angka di kolom 'jumlah'
        const totalItems = transData.reduce((acc, curr) => acc + Number(curr.jumlah || 0), 0)
        setStats(prev => ({ 
          ...prev, 
          items: totalItems,
          orders: transData.length // Jumlah baris = jumlah nota/orders
        }))
      }
    }

    // --- JALANKAN SEMUA FUNGSI ---
    updateClock(); 
    handleData()
    const timer = setInterval(updateClock, 1000) // Update jam setiap 1 detik
    return () => clearInterval(timer) // Bersihkan memory kalau pindah halaman
  }, [])

  return (
    <main style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* BAGIAN ATAS: Header & Info Waktu */}
      <div style={{ background: 'linear-gradient(135deg, #118EEA 0%, #06B6D4 100%)', padding: '100px 20px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontWeight: 900, fontSize: '3.8rem', lineHeight: '1', marginBottom: '20px', letterSpacing: '-2px' }}>
              KAK ALIF <br/> <span style={{ color: '#0F172A' }}>GURU MATEMATIKA</span>
            </h1>
            
            <div style={{ marginBottom: '35px', borderLeft: '4px solid #0F172A', paddingLeft: '25px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>{time.jam} WIB</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, opacity: 0.9 }}>🗓️ Masehi: {time.masehi}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>🌙 Hijriah: {time.hijriah}</div>
            </div>

            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="/cv-alif-rezky.pdf" download style={{ background: 'white', color: '#118EEA', padding: '15px 30px', borderRadius: '15px', textDecoration: 'none', fontWeight: 900, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>📄 Download CV</a>
            </div>
          </div>

          {/* VIDEO PLAYER */}
          <div style={{ borderRadius: '35px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.3)', border: '6px solid rgba(255,255,255,0.1)' }}>
            <div style={{ width: '100%', paddingBottom: '56.25%', height: 0, position: 'relative' }}>
              <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} src="https://www.youtube.com/embed/VvYQPqGHVR4" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* BAGIAN BAWAH: Kotak Statistik (Cards) */}
      <div style={{ maxWidth: '1200px', margin: '-60px auto 50px', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        <div style={{ background: 'white', padding: '40px', borderRadius: '35px', border: '1px solid #E2E8F0', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
          <div style={{ color: '#64748B', fontWeight: 800, fontSize: '0.75rem', marginBottom: '10px' }}>TOTAL PENGUNJUNG</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#118EEA' }}>{stats.visitors.toLocaleString('id-ID')} <span style={{fontSize: '1rem'}}>Akses</span></div>
        </div>

        <div style={{ background: 'white', padding: '40px', borderRadius: '35px', border: '1px solid #E2E8F0', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
          <div style={{ color: '#64748B', fontWeight: 800, fontSize: '0.75rem', marginBottom: '10px' }}>LIFETIME ORDERS</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A' }}>{stats.orders} <span style={{fontSize: '1rem'}}>Nota</span></div>
        </div>

        <div style={{ background: 'white', padding: '40px', borderRadius: '35px', border: '1px solid #E2E8F0', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
          <div style={{ color: '#64748B', fontWeight: 800, fontSize: '0.75rem', marginBottom: '10px' }}>TOTAL ITEM YANG DIPESAN</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A' }}>{stats.items} <span style={{fontSize: '1rem'}}>Unit</span></div>
        </div>
      </div>
    </main>
  )
}
