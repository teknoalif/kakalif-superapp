'use client'
import { useEffect, useRef, useState } from 'react'
import * as pdfjs from 'pdfjs-dist'

// Menggunakan Worker yang lebih stabil dan kompatibel
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function EbookReader({ url, userEmail }) {
  const canvasRef = useRef(null)
  const [numPages, setNumPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const prevent = (e) => e.preventDefault()
    document.addEventListener('contextmenu', prevent)
    
    const renderPdf = async () => {
      try {
        setLoading(true)
        const loadingTask = pdfjs.getDocument(url)
        const pdf = await loadingTask.promise
        setNumPages(pdf.numPages)
        
        const page = await pdf.getPage(currentPage)
        // Kita pakai skala 1.0 saja agar loading secepat kilat
        const viewport = page.getViewport({ scale: 1.0 }) 
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        
        canvas.height = viewport.height
        canvas.width = viewport.width

        await page.render({ canvasContext: context, viewport: viewport }).promise
        setLoading(false)
      } catch (err) {
        console.error("Render error:", err)
      }
    }

    renderPdf()
    return () => document.removeEventListener('contextmenu', prevent)
  }, [url, currentPage])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
      
      {/* Navigasi Minimalis */}
      <div style={{ background: 'white', padding: '10px 20px', borderRadius: '50px', display: 'flex', gap: '15px', alignItems: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} style={{ cursor: 'pointer', border: 'none', background: 'none', fontWeight: 800 }}>◀</button>
        <span style={{ fontWeight: 900, color: '#118EEA' }}>Hal {currentPage} / {numPages || '...'}</span>
        <button onClick={() => setCurrentPage(p => Math.min(numPages, p + 1))} style={{ cursor: 'pointer', border: 'none', background: 'none', fontWeight: 800 }}>▶</button>
      </div>

      <div style={{ position: 'relative', border: '1px solid #ddd', background: 'white', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
        {/* Anti-Maling Layer */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }} />
        
        {/* Watermark Samar */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-45deg)', zIndex: 11, fontSize: '1.5rem', color: 'rgba(0,0,0,0.02)', fontWeight: 900, pointerEvents: 'none', whiteSpace: 'nowrap' }}>
          {userEmail}
        </div>

        <canvas ref={canvasRef} style={{ display: loading ? 'none' : 'block', maxWidth: '100%' }}></canvas>
        {loading && <div style={{ padding: '80px', textAlign: 'center' }}>
          <div style={{ width: '30px', height: '30px', border: '3px solid #118EEA', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto' }}></div>
          <p style={{ marginTop: '15px', fontWeight: 700, fontSize: '0.8rem' }}>MENGGAMBAR...</p>
        </div>}
      </div>

      <style jsx global>{` @keyframes spin { to { transform: rotate(360deg); } } `}</style>
    </div>
  )
}
