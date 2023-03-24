import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://owjjbnfccstfshhfpnwj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93ampibmZjY3N0ZnNoaGZwbndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2MzkyNDYsImV4cCI6MTk5NTIxNTI0Nn0.msNKEaLPY_IqdOpTzbsAWEBStAvJG5laWF9HfZl9WWQ";
export const supabase = createClient(supabaseUrl, supabaseKey);
