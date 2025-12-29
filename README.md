# Next.js Starter - AI Agent Friendly

Production-ready Next.js starter optimized for AI agents to build features quickly.

## Stack

- **Next.js 16** (App Router)
- **TypeScript** (Strict mode)
- **Tailwind CSS v4**
- **shadcn/ui** (All components)
- **React Query** (Data fetching & caching)
- **next-themes** (Dark mode)
- **nuqs** (Type-safe URL state)
- **zustand** (Global state)
- **nanoid** (ID generation)
- **usehooks-ts** (Utility hooks)
- **Supabase** (Optional)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

**Note**: Supabase is optional. Project works without configuration.

## For AI Agents

**Read `.ai-guide.md`** - Complete development guide with patterns, conventions, and examples.

## Key Features

✅ Full TypeScript with strict mode  
✅ React Query setup with devtools  
✅ All shadcn/ui components installed  
✅ Error boundaries & loading states  
✅ Toast notifications (sonner)  
✅ Layout components (Container, PageHeader)  
✅ Loading skeletons  
✅ Date utilities  
✅ Environment validation  
✅ Supabase ready (or remove easily)  
✅ Useful npm scripts

## Scripts

```bash
npm run dev              # Development server
npm run build            # Production build
npm run type-check       # TypeScript check
npm run lint:fix         # Fix linting errors
npm run validate         # Type-check + lint

npm run setup:env        # Create .env.local
npm run check:env        # Validate environment

npm run clean            # Clear cache
npm run reinstall        # Full reinstall
```

## Supabase (Optional)

**Using Supabase?**

1. `npm run setup:env`
2. Add your credentials to `.env.local`
3. Use `createClient()` from `lib/supabase/`

**Not using Supabase?**

- Just use API routes in `app/api/`
- Or delete `lib/supabase/` entirely
- Everything else works without it!

## Project Structure

```
app/                 Pages & API routes
components/          React components
  ui/               shadcn/ui (don't edit manually)
  layout/           Container, PageHeader
lib/                Business logic & utilities
hooks/              Custom React hooks
actions/            Server actions
```

## Documentation

- **`.ai-guide.md`** - Complete development guide
- **`env.example`** - Required environment variables
- **`hooks/query-hooks-template.ts`** - React Query patterns
- **`components.json`** - shadcn/ui configuration

## Adding Features

1. Define types in `lib/types/`
2. Create components in `components/`
3. Add data hooks in `hooks/` or API routes in `app/api/`
4. Create pages in `app/`
5. Use Server Actions for mutations

See `.ai-guide.md` for detailed patterns and examples.

## Environment Variables

Optional - only needed if using Supabase:

```bash
npm run setup:env
```

Then add to `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Project works without these!

## License

MIT
