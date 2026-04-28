'use client'
import { useParams } from 'next/navigation'
import { ExternalLink, Globe, Camera, User, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'

export default function UserLapak() {
  const { username } = useParams()

  const mockData = {
    name: username ? username.charAt(0).toUpperCase() + username.slice(1) : 'User',
    bio: "Selamat datang di lapak digital saya!",
    links: [
      { label: "Sosial Media", url: "#", icon: <Camera size={18}/> },
      { label: "Portfolio", url: "#", icon: <Globe size={18}/> },
      { label: "Hubungi Saya", url: "#", icon: <User size={18}/> }
    ]
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', padding: '40px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ 
          width: '100px', height: '100px', borderRadius: '50%', 
          backgroundColor: '#118EEA', margin: '0 auto 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontSize: '2.5rem', fontWeight: 900
        }}>
          {mockData.name[0]}
        </div>
        
        <h1 style={{ fontWeight: 900, fontSize: '1.5rem', marginBottom: '5px' }}>@{mockData.name}</h1>
        <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '30px' }}>{mockData.bio}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {mockData.links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '18px 25px', backgroundColor: 'white', borderRadius: '20px',
              border: '1px solid #E2E8F0', textDecoration: 'none', color: '#0F172A',
              fontWeight: 800, transition: '0.3s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                {link.icon} {link.label}
              </div>
              <ExternalLink size={16} color="#94A3B8" />
            </a>
          ))}
        </div>
        
        <footer style={{ marginTop: '50px' }}>
          <Link href="/" style={{ fontSize: '0.75rem', color: '#118EEA', textDecoration: 'none', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
            <LinkIcon size={12} /> Dibuat dengan kakalif.my.id
          </Link>
        </footer>
      </div>
    </div>
  )
}
