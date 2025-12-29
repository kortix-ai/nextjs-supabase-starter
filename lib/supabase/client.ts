import { createBrowserClient } from "@supabase/ssr";
import { env, hasSupabase } from "@/lib/env";

export function createClient() {
  if (!hasSupabase) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local",
    );
  }

  return createBrowserClient(env.supabaseUrl!, env.supabaseAnonKey!);
}
