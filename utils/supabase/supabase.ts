import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "", // URL
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "" // anonキー
);

export const supabaseCRM = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "", // URL
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "", // anonキー,
  { db: { schema: "customer" } }
);
