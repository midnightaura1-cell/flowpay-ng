// db client wrapper (placeholder)
// Replace with the official Bolt Database client import when you have the package name and keys.

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || ''
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Example using supabase-js as a placeholder; swap to Bolt client when available.
import { createClient } from '@supabase/supabase-js'

export const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default db
