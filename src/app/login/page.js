'use client' // Wajib karena kita menggunakan interaksi user (form submit) & Hooks
import { useState } from 'react' // Hook untuk menyimpan ketikan user
import { useRouter } from 'next/navigation' // Hook Next.js untuk pindah halaman secara programmatik
import { Lock, User, ChevronRight } from 'lucide-react' // Library ikon profesional

export default function LoginPage() {
  // --- STATE: Menampung input dari form secara real-time ---
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter() // Inisialisasi router untuk navigasi

  // --- FUNGSI LOGIN: Logika pengecekan akses ---
  const handleLogin = (e) => {
    e.preventDefault() // Mencegah form melakukan refresh halaman (Materi Event Handling WPU)
    
    // LOGIKA KONTROL: Memeriksa kecocokan Username & Password
    if (username === '4l1fayu' && password === '4yual1f') {
      // 1. Simpan tanda pengenal di 'lemari' browser (localStorage)
      localStorage.setItem('admin_session', 'active')
      
      // 2. TRIGGER UPDATE: Memberitahu Navbar agar tombol Kasir/Logout langsung muncul
      // window.dispatchEvent mengirim sinyal ke seluruh komponen yang memantau 'storage'
      window.dispatchEvent(new Event('storage')) 
      
      // 3. REDIRECT: Tendang user kembali ke halaman utama
      router.push('/')
    } else {
      // Jika salah, tampilkan pesan peringatan
      alert("Username atau Sandi Salah, Kak!")
    }
  }

  return (
    <div style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      {/* KARTU LOGIN: Didesain elegan dengan bayangan halus (boxShadow) */}
      <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.05)', width: '100%', maxWidth: '420px', textAlign: 'center', border: '1px solid #F1F5F9' }}>
        
        <img src="/logonya.png" style={{ height: '60px', marginBottom: '20px' }} alt="logo" />
        <h2 style={{ fontWeight: 950, color: '#0F172A', marginBottom: '5px' }}>Bos Access</h2>
        <p style={{ color: '#64748B', fontSize: '0.85rem', marginBottom: '35px', fontWeight: 600 }}>Silakan masuk pemirsa</p>

        {/* FORM LOGIN */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          {/* INPUT USERNAME */}
          <div style={{ position: 'relative' }}>
            <User style={{ position: 'absolute', left: '18px', top: '18px', color: '#94A3B8' }} size={20} />
            <input 
              placeholder="Username" required 
              value={username} 
              // Materi WPU: Two-way Data Binding (Update state saat diketik)
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '18px 18px 18px 50px', borderRadius: '18px', border: '1px solid #E2E8F0', fontWeight: 700, fontSize: '0.9rem', outlineColor: '#118EEA' }}
            />
          </div>

          {/* INPUT PASSWORD */}
          <div style={{ position: 'relative' }}>
            <Lock style={{ position: 'absolute', left: '18px', top: '18px', color: '#94A3B8' }} size={20} />
            <input 
              type="password" placeholder="Sandi" required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '18px 18px 18px 50px', borderRadius: '18px', border: '1px solid #E2E8F0', fontWeight: 700, fontSize: '0.9rem', outlineColor: '#118EEA' }}
            />
          </div>

          {/* TOMBOL SUBMIT */}
          <button 
            type="submit" 
            style={{ backgroundColor: '#118EEA', color: 'white', padding: '18px', borderRadius: '18px', border: 'none', fontWeight: 950, fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px', boxShadow: '0 10px 20px rgba(17, 142, 234, 0.2)' }}
          >
            MASUK SEKARANG <ChevronRight size={20}/>
          </button>
        </form>

      </div>
    </div>
  )
}
