import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Tambahkan pengecekan ini untuk memastikan kunci tidak kosong
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Kunci Supabase hilang! Cek file .env.local atau Settings di Vercel.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
