#!/bin/bash

echo "Checking environment variables..."

if [ -f .env.local ]; then
  source .env.local
fi

MISSING=0
SUPABASE_SET=0

if [ -z "$NEXT_PUBLIC_SUPABASE_URL" ]; then
  echo "⚠ NEXT_PUBLIC_SUPABASE_URL is not set (optional)"
else
  echo "✓ NEXT_PUBLIC_SUPABASE_URL is set"
  SUPABASE_SET=$((SUPABASE_SET + 1))
fi

if [ -z "$NEXT_PUBLIC_SUPABASE_ANON_KEY" ]; then
  echo "⚠ NEXT_PUBLIC_SUPABASE_ANON_KEY is not set (optional)"
else
  echo "✓ NEXT_PUBLIC_SUPABASE_ANON_KEY is set"
  SUPABASE_SET=$((SUPABASE_SET + 1))
fi

echo ""

if [ $SUPABASE_SET -eq 0 ]; then
  echo "Supabase is not configured (optional)"
  echo "To use Supabase, set both NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY"
elif [ $SUPABASE_SET -eq 1 ]; then
  echo "⚠ Warning: Only one Supabase variable is set. Both are required for Supabase to work."
  MISSING=1
else
  echo "✓ Supabase is configured!"
fi

if [ $MISSING -eq 1 ]; then
  exit 1
fi

echo ""
echo "Environment check complete!"
