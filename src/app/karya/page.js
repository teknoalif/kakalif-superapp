import { FileText, Smartphone, ExternalLink, Globe } from 'lucide-react'

const daftarKarya = [
  { 
    tipe: 'Seminar Internasional', 
    judul: 'ICoESE 2022 (penerbit OSJ UNM Makassar)', 
    artikel: 'Development of Tulimatika Applications to Support Mathematics Learning',
    luaran: 'Aplikasi Tulimatika (S2)',
    link: 'https://ojs.unm.ac.id/icsat/article/view/39700/18784',
    desc: 'Publikasi mengenai pengembangan aplikasi matematika untuk siswa tuli pakai BISINDO.'
  },
  { 
    tipe: 'Seminar Internasional', 
    judul: 'ICoESM 2021 (penerbit Atlantis Press, Amsterdam)', 
    artikel: 'Development of Matrix-Based Learning Media (Masa Matriks)',
    luaran: 'Aplikasi Masa Matriks (S1)',
    link: 'https://www.atlantis-press.com/proceedings/icoesm-21/125965679',
    desc: 'Penelitian tentang efektivitas penggunaan media Masa Matriks dalam pemahaman konsep aljabar.'
  },
  { 
    tipe: 'Aplikasi Bimbingan', 
    judul: 'PIJAR (Pintar Belajar Rasio) April 2025', 
    luaran: 'Aplikasi Desktop',
    link: '#',
    desc: 'Pengembangan Aplikasi PIJAR untuk Peserta Didik Kelas VII-I SMP Islam Terpadu Al Binaa Islamic Boarding School.' 
  },
  { 
    tipe: 'Multimedia', 
    judul: 'Aplikasi EMAS (Eliminasi dan Substitusi)', 
    luaran: 'Interactive Multimedia',
    link: '#',
    desc: 'Media pembelajaran matematika interaktif pada materi SPLTV.' 
  },
]

export default function KaryaPage() {
  return (
    <div style={{ padding: '2.5rem', backgroundColor: '#f1f5f9', minHeight: '100vh' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '900', color: '#0f172a', margin: 0 }}>Karya Ilmiah & Riset</h1>
        <p style={{ color: '#64748b', marginTop: '10px' }}>Rekam jejak akademik dan pengembangan teknologi pendidikan Kak Alif.</p>
      </header>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {daftarKarya.map((item, i) => (
          <div key={i} style={{ 
            backgroundColor: 'white', padding: '25px', borderRadius: '20px', 
            border: '1px solid #e2e8f0', borderLeft: '6px solid #BFA071',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0284c7', marginBottom: '10px' }}>
                <Globe size={18} />
                <span style={{ fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.tipe}</span>
              </div>
              {item.link !== '#' && (
                <a href={item.link} target="_blank" style={{ color: '#BFA071', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                  Baca Artikel <ExternalLink size={14} />
                </a>
              )}
            </div>
            
            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.3rem', color: '#0f172a' }}>{item.judul}</h3>
            {item.artikel && <p style={{ fontStyle: 'italic', color: '#1e293b', marginBottom: '10px', fontSize: '0.95rem' }}>"{item.artikel}"</p>}
            
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
               <span style={{ backgroundColor: '#f0f9ff', color: '#0284c7', padding: '4px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                 Luaran: {item.luaran}
               </span>
            </div>
            
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
