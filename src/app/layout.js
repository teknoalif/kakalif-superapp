import './globals.css'
import Navbar from '../components/Navbar'

// Metadata dengan cara yang lebih disukai Next.js untuk ikon
export const metadata = {
  title: 'Kakalif App - Ruang Belajar Matematika',
  description: 'Ekosistem belajar matematika eksklusif oleh Alif Rezky, M.Pd.',
  icons: {
    icon: [
      { url: '/logonya.png' }, // Ikon utama
      { url: '/logonya.png', sizes: '32x32' },
    ],
    apple: [
      { url: '/logonya.png' }, // Ikon untuk iPhone
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Cara manual sebagai cadangan kalau metadata di atas belum terbaca browser */}
        <link rel="icon" href="/logonya.png" />
      </head>
      <body style={{ backgroundColor: '#F8FAFC', margin: 0, fontFamily: 'sans-serif' }}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
