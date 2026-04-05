'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

export default function KasirPage() {
  const [list, setList] = useState([])
  const [stats, setStats] = useState({ sales: 0, items: 0, orders: 0 })
  const [name, setName] = useState(''); const [pemesan, setPemesan] = useState('')
  const [kategori, setKategori] = useState('Buku'); const [jumlah, setJumlah] = useState(1)
  const [displayPrice, setDisplayPrice] = useState('')
  const [editId, setEditId] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    fetchData()
  }, [])

  const fetchData = async () => {
    const { data } = await supabase.from('transaksi').select('*').order('created_at', { ascending: false })
    if (data) {
      setList(data)
      const sales = data.reduce((acc, curr) => acc + (Number(curr.harga || 0) * Number(curr.jumlah || 1)), 0)
      const items = data.reduce((acc, curr) => acc + Number(curr.jumlah || 0), 0)
      setStats({ sales, items, orders: data.length })
    }
  }

  const save = async (e) => {
    e.preventDefault()
    const rawHarga = displayPrice.toString().replace(/\./g, '')
    const payload = { item_name: name, harga: parseInt(rawHarga) || 0, jumlah: parseInt(jumlah) || 1, pemesan, kategori }

    if (editId) {
      await supabase.from('transaksi').update(payload).eq('id', editId)
      setEditId(null)
    } else {
      await supabase.from('transaksi').insert([payload])
    }

    setName(''); setPemesan(''); setDisplayPrice(''); setJumlah(1); fetchData()
  }

  const handleEdit = (t) => {
    setEditId(t.id)
    setName(t.item_name)
    setPemesan(t.pemesan)
    setJumlah(t.jumlah)
    setDisplayPrice(t.harga.toLocaleString('id-ID'))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id) => {
    if (confirm('Yakin mau hapus data ini, Kak Alif?')) {
      await supabase.from('transaksi').delete().eq('id', id)
      fetchData()
    }
  }

  const handlePrint = (t) => {
    const printWindow = window.open('', '_blank')
    const subtotal = (t.harga || 0) * (t.jumlah || 1)
    printWindow.document.write(`
      <html>
        <head>
          <title>Nota Kak Alif - ${t.pemesan}</title>
          <style>
            body { font-family: 'Courier New', Courier, monospace; padding: 40px; color: #333; line-height: 1.6; }
            .header { text-align: center; border-bottom: 3px double #118EEA; padding-bottom: 20px; margin-bottom: 20px; }
            .logo { font-weight: 900; font-size: 28px; color: #118EEA; margin: 0; }
            .subtitle { font-size: 14px; font-weight: bold; margin: 5px 0; }
            .info { display: flex; justify-content: space-between; margin-bottom: 30px; font-size: 14px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th { text-align: left; border-bottom: 2px solid #118EEA; padding: 12px 5px; font-size: 14px; }
            td { padding: 15px 5px; border-bottom: 1px solid #eee; font-size: 14px; }
            .total-box { margin-top: 30px; text-align: right; border-top: 3px double #118EEA; padding-top: 15px; }
            .grand-total { font-size: 22px; font-weight: 900; color: #0F172A; }
            .footer { text-align: center; margin-top: 60px; font-size: 12px; font-style: italic; color: #64748B; }
            @media print { .no-print { display: none; } }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 class="logo">KAK ALIF GURU MATEMATIKA</h1>
            <div class="subtitle">Labkommus - Jasa & Media Pembelajaran Efektif</div>
            <div style="font-size: 12px;">WhatsApp: 0852-5616-2879 | Makassar, Indonesia</div>
          </div>
          <div class="info">
            <div>
              <strong>PEMESAN:</strong> ${t.pemesan.toUpperCase()}<br>
              <strong>ITEM:</strong> ${t.item_name}
            </div>
            <div style="text-align: right">
              <strong>TANGGAL:</strong> ${new Date(t.created_at).toLocaleDateString('id-ID')}<br>
              <strong>ID NOTA:</strong> #${t.id}
            </div>
          </div>
          <table>
            <thead>
              <tr><th>DESKRIPSI</th><th>QTY</th><th>HARGA</th><th>SUBTOTAL</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>${t.item_name} (${t.kategori})</td>
                <td>${t.jumlah}</td>
                <td>Rp ${t.harga.toLocaleString('id-ID')}</td>
                <td>Rp ${subtotal.toLocaleString('id-ID')}</td>
              </tr>
            </tbody>
          </table>
          <div class="total-box">
            <span style="font-size: 14px; font-weight: bold;">TOTAL PEMBAYARAN:</span><br>
            <span class="grand-total">Rp ${subtotal.toLocaleString('id-ID')}</span>
          </div>
          <div class="footer">
            <p>Terima kasih telah mempercayai layanan Kak Alif Guru Matematika.</p>
            <p>Simpan nota ini sebagai bukti pembayaran yang sah.</p>
          </div>
          <script>window.print(); setTimeout(() => window.close(), 500);</script>
        </body>
      </html>
    `)
    printWindow.document.close()
  }

  if (!mounted) return null

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      {/* STATS KASIR */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: 'linear-gradient(135deg, #118EEA 0%, #06B6D4 100%)', padding: '30px', borderRadius: '25px', color: 'white', boxShadow: '0 10px 20px rgba(17, 142, 234, 0.2)' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 900, opacity: 0.8 }}>LIFETIME SALES</div>
          <div style={{ fontSize: '2.3rem', fontWeight: 950 }}>Rp {stats.sales.toLocaleString('id-ID')}</div>
        </div>
        <div style={{ background: 'white', padding: '30px', borderRadius: '25px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 900 }}>LIFETIME ORDERS</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 950 }}>{stats.orders} <span style={{fontSize: '1rem'}}>Nota</span></div>
        </div>
        <div style={{ background: 'white', padding: '30px', borderRadius: '25px', border: '1px solid #E2E8F0' }}>
          <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 900 }}>TOTAL ITEM ORDERED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 950 }}>{stats.items} <span style={{fontSize: '1rem'}}>Unit</span></div>
        </div>
      </div>

      {/* FORM INPUT */}
      <div style={{ background: 'white', padding: '30px', borderRadius: '25px', border: '1px solid #E2E8F0', marginBottom: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <h3 style={{marginBottom: '20px', fontWeight: 900}}>{editId ? '📝 Mode Edit Transaksi' : '➕ Tambah Transaksi Baru'}</h3>
        <form onSubmit={save} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input style={{ padding: '15px', borderRadius: '12px', border: '1px solid #DDD', fontWeight: 600 }} placeholder="Nama Pemesan" value={pemesan} onChange={e => setPemesan(e.target.value)} required />
          <input style={{ padding: '15px', borderRadius: '12px', border: '1px solid #DDD', fontWeight: 600 }} placeholder="Nama Item" value={name} onChange={e => setName(e.target.value)} required />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px' }}>
            <input type="number" style={{ padding: '15px', borderRadius: '12px', border: '1px solid #DDD', fontWeight: 600 }} placeholder="Qty" value={jumlah} onChange={e => setJumlah(e.target.value)} required />
            <input style={{ padding: '15px', borderRadius: '12px', border: '1px solid #DDD', fontWeight: 600 }} placeholder="Harga Satuan" value={displayPrice} onChange={e => setDisplayPrice(e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, "."))} required />
          </div>
          <div style={{display: 'flex', gap: '10px'}}>
            <button type="submit" style={{ flex: 3, background: editId ? '#10B981' : '#0F172A', color: 'white', padding: '15px', borderRadius: '12px', fontWeight: 900, border: 'none', cursor: 'pointer' }}>
              {editId ? 'UPDATE TRANSAKSI' : 'SIMPAN TRANSAKSI'}
            </button>
            {editId && <button type="button" onClick={() => {setEditId(null); setName(''); setPemesan(''); setDisplayPrice(''); setJumlah(1);}} style={{ flex: 1, background: '#F1F5F9', color: '#64748B', borderRadius: '12px', border: 'none', fontWeight: 800, cursor: 'pointer' }}>BATAL</button>}
          </div>
        </form>
      </div>

      {/* TABEL RIWAYAT DENGAN AKSI */}
      <div style={{ background: 'white', borderRadius: '25px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <div style={{padding: '20px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', fontWeight: 900, fontSize: '0.9rem'}}>RIWAYAT TRANSAKSI TERBARU</div>
        {list.map(t => (
          <div key={t.id} style={{ padding: '20px', borderBottom: '1px solid #F1F5F9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{flex: 2}}>
              <div style={{ fontWeight: 900, color: '#118EEA' }}>{t.jumlah}x | {t.pemesan}</div>
              <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>{t.item_name}</div>
              <div style={{ fontWeight: 900, color: '#10B981', marginTop: '5px' }}>Rp {((t.harga || 0) * (t.jumlah || 1)).toLocaleString('id-ID')}</div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => handlePrint(t)} style={{ padding: '8px 15px', borderRadius: '10px', border: '1px solid #DDD', background: 'white', fontWeight: 800, cursor: 'pointer', fontSize: '0.75rem' }}>🖨️ Print</button>
              <button onClick={() => handleEdit(t)} style={{ padding: '8px 15px', borderRadius: '10px', border: 'none', background: '#E0F2FE', color: '#118EEA', fontWeight: 800, cursor: 'pointer', fontSize: '0.75rem' }}>Edit</button>
              <button onClick={() => handleDelete(t.id)} style={{ padding: '8px 15px', borderRadius: '10px', border: 'none', background: '#FEE2E2', color: '#EF4444', fontWeight: 800, cursor: 'pointer', fontSize: '0.75rem' }}>Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
