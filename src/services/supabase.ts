import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hlltbbnmajntdoeamywb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsbHRiYm5tYWpudGRvZWFteXdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4NDQ4NDgsImV4cCI6MjAyNjQyMDg0OH0.6WIkq19gTBfwvvFBAFuXVYI5Mt2sQ32Zl85X6FOE-lY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
