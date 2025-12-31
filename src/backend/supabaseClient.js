/**
 * @Meta
 * @Intent Initialize and export the Supabase client connection.
 * @Inputs Process.env.SUPABASE_URL, Process.env.SUPABASE_KEY
 * @Outputs Authenticated Supabase Client instance
 * @Dependencies @supabase/supabase-js, dotenv
 */
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
