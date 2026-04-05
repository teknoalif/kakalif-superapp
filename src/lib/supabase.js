// --- IMPORT LIBRARY: Mengambil 'kunci inggris' dari paket supabase-js ---
import { createClient } from '@supabase/supabase-js';

// --- INISIALISASI CLIENT: Membuat koneksi resmi ke database Supabase ta' ---
// Kita menggunakan 'process.env' (Environment Variables) agar URL dan KEY rahasia 
// tidak tertulis langsung di kodingan (Hardcoded). Ini standar keamanan di Next.js.

export const supabase = createClient(
  // 1. URL Proyek Supabase ta' (Alamat rumah databasenya)
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  
  // 2. Anon Key (Kunci akses umum agar aplikasi bisa baca/tulis data)
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Sekarang variabel 'supabase' bisa di-import dan dipakai di file mana saja
// untuk melakukan operasi CRUD (Create, Read, Update, Delete).
