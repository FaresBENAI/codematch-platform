import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'VOTRE_PROJECT_URL_ICI'
const supabaseKey = 'VOTRE_ANON_KEY_ICI'

export const supabase = createClient(supabaseUrl, supabaseKey)
