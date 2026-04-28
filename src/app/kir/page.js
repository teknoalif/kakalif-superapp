import { Search, FileText } from 'lucide-react'

const arsipKIR = [
  { id: 1, judul: 'Pengembangan Aplikasi Pijar Kelas 7', tahun: '2025', kategori: 'Teknologi' },
  { id: 2, judul: 'Penerapan Matematika dalam Algoritma Python', tahun: '2026', kategori: 'Sains' },
]

export default function KirPage() {
  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ color: '#1e40af', marginBottom: '10px' }}>🔬 Arsip KIR Siswa</h1>
      <p style={{ color: '#6b7280', marginBottom: '30px' }}>Database judul penelitian dan bimbingan karya ilmiah.</p>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <input type="text" placeholder="Cari judul penelitian..." style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '12px', border: '1px solid #d1d5db' }} />
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '15px', color: '#9ca3af' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gap: '15px' }}>
        {arsipKIR.map((item) => (
          <div key={item.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', border: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>{item.judul}</h3>
              <span style={{ fontSize: '12px', backgroundColor: '#f3f4f6', padding: '4px 8px', borderRadius: '6px', color: '#4b5563' }}>{item.kategori} • {item.tahun}</span>
            </div>
            <button style={{ background: 'none', border: '1px solid #2563eb', color: '#2563eb', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <FileText size={16} /> Lihat Abstrak
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
