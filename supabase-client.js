const SUPABASE_URL =
  "https://wgglgomjnxlzwlreklgf.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_rv4Fu8AVYg6Hktw-IGhrXA_HsUhHmip";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
