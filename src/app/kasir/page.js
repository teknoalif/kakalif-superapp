'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

export default function KasirPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [transaksi, setTransaksi] = useState([])
  const [stats, setStats] = useState({ total: 0, orders: 0, items: 0 })
  const [editId, setEditId] = useState(null)
  const [namaPemesan, setNamaPemesan] = useState('')
  const [namaItem, setNamaItem] = useState('')
  const [jumlah, setJumlah] = useState(1)
  const [harga, setHarga] = useState('')

  useEffect(() => {
    const adminSession = localStorage.getItem('admin_session')
    if (adminSession !== 'active') {
      router.push('/login')
    } else {
      setMounted(true)
      fetchData()
    }
  }, [])

  const fetchData = async () => {
    const { data } = await supabase.from('transaksi').select('*').order('created_at', { ascending: false })
    if (data) {
      setTransaksi(data)
      const totalSales = data.reduce((acc, curr) => acc + (Number(curr.jumlah) * Number(curr.harga)), 0)
      setStats({ total: totalSales, orders: data.length })
    }
  }

  const handleSimpan = async () => {
    if(!namaPemesan || !namaItem || !harga) return alert('Isi semua data dulu!')
    if (editId) {
      await supabase.from('transaksi').update({ 
        nama_pemesan: namaPemesan, nama_item: namaItem, jumlah, harga: Number(harga) 
      }).eq('id', editId)
    } else {
      await supabase.from('transaksi').insert([
        { nama_pemesan: namaPemesan, nama_item: namaItem, jumlah, harga: Number(harga) }
      ])
    }
    resetForm(); fetchData()
  }

  const handleEdit = (item) => {
    setEditId(item.id); setNamaPemesan(item.nama_pemesan); setNamaItem(item.nama_item); setJumlah(item.jumlah); setHarga(item.harga);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleHapus = async (id) => {
    if (confirm('Yakin hapus?')) { await supabase.from('transaksi').delete().eq('id', id); fetchData(); }
  }

  const resetForm = () => { setEditId(null); setNamaPemesan(''); setNamaItem(''); setJumlah(1); setHarga(''); }

  if (!mounted) return null

  return (
    <main style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ background: 'linear-gradient(135deg, #118EEA 0%, #0F172A 100%)', padding: '40px', borderRadius: '35px', color: 'white', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, opacity: 0.8 }}>OMSET KESELURUHAN</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 950 }}>Rp {stats.total.toLocaleString('id-ID')}</div>
          </div>
          <button onClick={() => window.print()} style={{ backgroundColor: 'white', color: '#118EEA', border: 'none', padding: '12px 25px', borderRadius: '15px', fontWeight: 900, cursor: 'pointer' }}>🖨️ PRINT</button>
        </div>

        <div style={{ background: 'white', padding: '30px', borderRadius: '30px', marginBottom: '30px', border: editId ? '3px solid #118EEA' : '1px solid #E2E8F0' }}>
          <h2 style={{ fontWeight: 900, marginBottom: '20px' }}>{editId ? '📝 Edit' : '➕ Baru'}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
            <input placeholder="Pemesan" value={namaPemesan} onChange={e => setNamaPemesan(e.target.value)} style={{ padding: '15px', borderRadius: '12px', border: '1px solid #E2E8F0' }} />
            <input placeholder="Nama Item" value={namaItem} onChange={e => setNamaItem(e.target.value)} style={{ padding: '15px', borderRadius: '12px', border: '1px solid #E2E8F0' }} />
            <input type="number" placeholder="Qty" value={jumlah} onChange={e => setJumlah(e.target.value)} style={{ padding: '15px', borderRadius: '12px', border: '1px solid #E2E8F0' }} />
            <input type="number" placeholder="Harga" value={harga} onChange={e => setHarga(e.target.value)} style={{ padding: '15px', borderRadius: '12px', border: '1px solid #E2E8F0' }} />
            <button onClick={handleSimpan} style={{ background: '#0F172A', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 900, cursor: 'pointer' }}>{editId ? 'UPDATE' : 'SIMPAN'}</button>
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ background: '#F1F5F9' }}>
              <tr>
                <th style={{ padding: '20px', textAlign: 'left', fontSize: '0.75rem' }}>PEMESAN & ITEM</th>
                <th style={{ padding: '20px', textAlign: 'left', fontSize: '0.75rem' }}>TOTAL</th>
                <th style={{ padding: '20px', textAlign: 'center', fontSize: '0.75rem' }}>AKSI</th>
              </tr>
            </thead>
            <tbody>
              {transaksi.map((t) => (
                <tr key={t.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '20px' }}>
                    {/* --- FIX: Menampilkan Nama Pemesan & Nama Item --- */}
                    <div style={{ fontWeight: 800, color: '#0F172A' }}>{t.nama_pemesan || 'Tanpa Nama'}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>{t.nama_item} <span style={{fontWeight: 700}}>(x{t.jumlah})</span></div>
                  </td>
                  <td style={{ padding: '20px', fontWeight: 800, color: '#118EEA' }}>Rp {(t.jumlah * t.harga).toLocaleString('id-ID')}</td>
                  <td style={{ padding: '20px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                      <button onClick={() => handleEdit(t)} style={{ background: '#E0F2FE', color: '#118EEA', border: 'none', padding: '8px 15px', borderRadius: '10px', fontWeight: 800, cursor: 'pointer', fontSize: '0.7rem' }}>EDIT</button>
                      <button onClick={() => handleHapus(t.id)} style={{ background: '#FEE2E2', color: '#EF4444', border: 'none', padding: '8px 15px', borderRadius: '10px', fontWeight: 800, cursor: 'pointer', fontSize: '0.7rem' }}>HAPUS</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <style jsx global>{` @media print { button, nav { display: none !important; } } `}</style>
    </main>
  )
}
