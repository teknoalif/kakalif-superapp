import { supabase } from '../../lib/supabase';
import { PlayCircle, BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function BelajarPage() {
  // Ambil data dari Supabase
  const { data: lessons, error } = await supabase
    .from('lessons')
    .select('*, categories(name)');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-blue-600 text-white p-8 rounded-b-[40px] shadow-lg mb-8">
        <Link href="/" className="flex items-center gap-2 text-sm opacity-80 mb-4">
          <ArrowLeft className="w-4 h-4" /> Kembali
        </Link>
        <h1 className="text-3xl font-bold">Halo, Kak Alif!</h1>
        <p className="opacity-90 mt-2">Mau belajar matematika apa hari ini?</p>
      </div>

      <div className="px-6">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="text-blue-600 w-5 h-5" />
          <h2 className="text-xl font-bold text-gray-800">Materi Tersedia</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons?.map((lesson) => (
            <div key={lesson.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3">
              <span className="w-fit text-[10px] font-bold px-2 py-1 bg-blue-100 text-blue-600 rounded-md uppercase">
                {lesson.categories?.name}
              </span>
              <h3 className="font-bold text-lg text-gray-800">{lesson.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-2">{lesson.description}</p>
              <a 
                href={lesson.youtube_url} 
                target="_blank" 
                className="mt-2 flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-all"
              >
                <PlayCircle className="w-5 h-5" /> Tonton Video
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
