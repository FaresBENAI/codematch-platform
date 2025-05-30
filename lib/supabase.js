import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vvvagmviexgqeawwycwq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2dmFnbXZpZXhncWVhd3d5Y3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NDAzMDEsImV4cCI6MjA2NDIxNjMwMX0.JiZasInlZuqnQ058uzqrSykrXckkmy4p40VVVq0zKBM'

export const supabase = createClient(supabaseUrl, supabaseKey)
