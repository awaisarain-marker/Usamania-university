
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase environment variables');
}

// Fallback to avoid build errors if env vars are missing
export const supabase = createClient(
    supabaseUrl || 'https://example.supabase.co',
    supabaseAnonKey || 'example-key'
);
