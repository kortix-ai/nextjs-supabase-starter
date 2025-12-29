#!/bin/bash

if [ ! -f .env.local ]; then
  echo "Creating .env.local from env.example..."
  cp env.example .env.local
  echo "✓ Created .env.local"
  echo ""
  echo "Please update .env.local with your Supabase credentials:"
  echo "  - NEXT_PUBLIC_SUPABASE_URL"
  echo "  - NEXT_PUBLIC_SUPABASE_ANON_KEY"
  echo ""
else
  echo ".env.local already exists"
fi
