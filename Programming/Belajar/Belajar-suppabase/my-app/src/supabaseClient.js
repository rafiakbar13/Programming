import { createClient } from '@supabase/supabase-js'

const urlProject = import.meta.env.VITE_SUPABASE_URL;
const apiKeys = import.meta.env.VITE_SUPABASE_ANON_KEY; 

export const supabase = createClient(urlProject, apiKeys);