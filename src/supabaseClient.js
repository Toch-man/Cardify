import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wzifsaueswchmonahecq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6aWZzYXVlc3djaG1vbmFoZWNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2Mjg5ODUsImV4cCI6MjA2MDIwNDk4NX0.yGBkWB6EwUqhSD3I4FzOAc3EA-YItEGNygByCzhkibI";

export const supabase = createClient(supabaseUrl, supabaseKey);
