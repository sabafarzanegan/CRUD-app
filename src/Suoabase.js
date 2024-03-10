import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qsnzdgrjgwnmvnkgcbqm.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbnpkZ3JqZ3dubXZua2djYnFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwNDk4MDUsImV4cCI6MjAyNTYyNTgwNX0.Kun-DD-qyKrkGaeX-xPxU6oQ62leR8bSLjbUPRcBG2g";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase