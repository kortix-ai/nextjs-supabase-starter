export function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

function getOptionalEnvVar(key: string): string | undefined {
  return process.env[key];
}

export const env = {
  supabaseUrl: getOptionalEnvVar("NEXT_PUBLIC_SUPABASE_URL"),
  supabaseAnonKey: getOptionalEnvVar("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
} as const;

export const hasSupabase = !!(env.supabaseUrl && env.supabaseAnonKey);

export function validateEnv() {
  const missing: string[] = [];

  if (!hasSupabase) {
    console.warn(
      "Supabase not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable.",
    );
  }

  if (missing.length > 0) {
    console.error("Missing required environment variables:", missing);
    return false;
  }

  return true;
}
