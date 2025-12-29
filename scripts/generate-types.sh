#!/bin/bash

if [ -z "$PROJECT_ID" ]; then
  echo "Error: PROJECT_ID environment variable is not set"
  echo "Usage: PROJECT_ID=your-project-id npm run types:generate"
  echo "Or: PROJECT_ID=your-project-id ./scripts/generate-types.sh"
  exit 1
fi

echo "Generating types from Supabase project: $PROJECT_ID"

npx supabase gen types typescript --project-id "$PROJECT_ID" > lib/types/database.ts

if [ $? -eq 0 ]; then
  echo "✓ Types generated successfully in lib/types/database.ts"
else
  echo "✗ Failed to generate types"
  exit 1
fi
