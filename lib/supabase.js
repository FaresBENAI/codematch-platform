import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'VOTRE_PROJECT_URL'
const supabaseKey = 'VOTRE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)
