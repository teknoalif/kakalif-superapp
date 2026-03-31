'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { PlayCircle, BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function BelajarPage() {
  const [lessons, setLessons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMateri() {
      const { data, error } = await supabase
        .from('lessons')
        .select('*, categories(name)')
      
      if (!error) setLessons(data)
      setLoading(false)
    }
    fetchMateri()
  }, [])

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-blue-600 text-white p-8 rounded-b-[40px] mb-8">
        <Link href="/" className="text-sm opacity-80 flex items-center gap-2 mb-4">
          <ArrowLeft size={16} /> Kembali
        </Link>
        <h1 className="text-3xl font-bold">Halo, Kak Alif!</h1>
        <p className="opacity-90">Siap belajar matematika hari ini?</p>
      </div>

      <div className="px-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="text-blue-600" /> Materi Video
        </h2>

        {loading ? (
          <p className="text-center py-10">Memuat materi...</p>
        ) : (
          <div className="grid gap-4">
            {lessons.map((item) => (
              <div key={item.id} className="p-5 border rounded-2xl shadow-sm">
                <span className="text-[10px] font-bold bg-blue-100 text-blue-600 px-2 py-1 rounded uppercase">
                  {item.categories?.name}
                </span>
                <h3 className="font-bold text-lg mt-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                <a href={item.youtube_url} target="_blank" className="block text-center bg-black text-white py-3 rounded-xl font-bold">
                  Tonton di YouTube
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
