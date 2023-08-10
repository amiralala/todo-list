import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rdcnaycmhpfqfahuujbl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkY25heWNtaHBmcWZhaHV1amJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2MDk2MTQsImV4cCI6MjAwNzE4NTYxNH0.qFqkj2Zy-gV2_Nj03b4ec3QPFphHkE719rL5fyKqZ1g";

export default createClient(supabaseUrl, supabaseAnonKey);