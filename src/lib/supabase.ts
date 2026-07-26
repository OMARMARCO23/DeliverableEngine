import { createClient } from '@supabase/supabase-js';

const envMeta = (import.meta as unknown as { env?: Record<string, string> }).env;

const supabaseUrl = envMeta?.VITE_SUPABASE_URL || '';
const supabaseAnonKey = envMeta?.VITE_SUPABASE_ANON_KEY || '';

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function uploadRFPFile(file: File, email: string) {
  if (!file || !supabase) return null;

  const timestamp = Date.now();
  const cleanEmail = email.replace(/[^a-zA-Z0-9]/g, '_');
  const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const filePath = `${cleanEmail}/${timestamp}_${cleanFileName}`;

  const { data, error } = await supabase
    .storage
    .from('rfp-files')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) {
    console.error('Supabase upload error:', error);
    throw new Error(`Upload failed: ${error.message}`);
  }

  return {
    file_path: data.path,
    file_name: file.name,
    file_size: file.size,
    file_type: file.type
  };
}
