# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Database (PostgreSQL via Docker - note: docker-compose.yml not yet created)
npm run db:start  # Start PostgreSQL container
npm run db:stop   # Stop PostgreSQL container
```

## Tech Stack

- **Framework**: Next.js 15.3.4 (App Router)
- **React**: 19.1.0
- **CMS**: Payload CMS 3.63.0 with PostgreSQL adapter
- **Styling**: Tailwind CSS 3.4+ with DaisyUI 4.11+
- **Rich Text**: Lexical Editor
- **Storage**: Vercel Blob Storage (optional)
- **Database**: PostgreSQL
- **Package Manager**: Yarn 1.22.22

## Architecture Overview

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (payload)/         # Payload CMS admin routes
│   ├── api/               # API routes
│   └── projects/          # Project detail pages
├── views/                 # Page section components (AboutSection, HeroSection, etc.)
├── components/            # Reusable UI components (navbar, footer, cards)
├── ui/                    # Core UI primitives (CTAButton, SectionContainer)
├── collections/           # Payload CMS collections (Users, Media, Projects, Services, Testimonials)
├── globals/               # Payload CMS global configs (HeroSection, ProjectsSection, ContactSection)
├── constants/             # Static data (navLinks, faq)
├── hooks/                 # React hooks
├── types/                 # TypeScript type definitions
└── util/                  # Utility functions
```

### Component Organization

**Views** (`/src/views/`): Full page section components that compose the main pages. Each view:
- Uses `SectionContainer` wrapper for consistent layout
- Accepts props for content (title, subtitle, description, etc.)
- Is imported directly into page files
- Examples: `HeroSection`, `AboutSection`, `ServicesSection`, `ProcessSection`, `FeaturedProjectsSection`, `TestimonialsSection`, `ContactSection`

**Components** (`/src/components/`): Smaller, reusable UI elements:
- `navbar.tsx`, `footer.tsx` - Layout components
- `ProjectCard.tsx`, `IconCard.tsx` - Card components
- `NavLinks.tsx`, `MobileMenu.tsx` - Navigation components
- `ThemeToggle.tsx` - Theme switcher
- `accordion.tsx` - Accordion UI

**UI Primitives** (`/src/ui/`): Core building blocks:
- `SectionContainer.tsx` - Standardized section wrapper with background, padding, and anchor navigation
- `CTAButton.tsx` - Call-to-action button component
- `icons/` - Icon components

### SectionContainer Pattern

All view components should use `SectionContainer` for consistency:

```tsx
<SectionContainer
  sectionName="unique-id"           // For anchor navigation (#unique-id)
  background="base" | "alt" | "gradient" | "none"
  noPadding={false}                 // Set true for custom padding (e.g., HeroSection)
  isFullWidth={false}               // Set true for full-width content
  sectionClasses="custom classes"   // Additional section-level classes
  innerContainerClasses="custom"    // Additional container classes
>
  {children}
</SectionContainer>
```

**Key features:**
- Automatic section IDs for anchor navigation
- Scroll margin (`scroll-mt-36`) for proper anchor positioning
- Responsive padding: `py-16 md:py-24 lg:py-32` (unless `noPadding={true}`)
- Max-width constraint (`max-w-7xl`) unless `isFullWidth={true}`

### Payload CMS Integration

**Collections** (`/src/collections/`): Define content types with fields, validation, and access control
- `Users.ts` - Admin users
- `Media.ts` - File uploads
- `Projects.ts` - Portfolio projects
- `Services.ts` - Service offerings
- `Testimonials.ts` - Client testimonials

**Globals** (`/src/globals/`): Singleton configurations for page sections
- `HeroSection.ts`, `ProjectsSection.ts`, `ContactSection.ts` - Content schemas
- Note: Some referenced globals (TeamSection, NeighborhoodSection, TeamPage, NeighborhoodPage) may be missing

**Admin Panel**: Accessible at `/admin` when server is running

### Styling System

**Tailwind + DaisyUI**: Component classes use both:
- Tailwind utilities for layout, spacing, typography
- DaisyUI semantic tokens for colors and themes

**Theme Configuration** (`tailwind.config.ts`):
- Two themes: `light` (default) and `dark`
- Custom color palette with primary (#1f2937 light, #0693e3 dark)
- Content paths include: `/src/pages`, `/src/components`, `/src/ui`, `/src/app`, `/src/views`

**Path Aliases** (`tsconfig.json`):
- `@/*` → `./src/*`
- `@payload-config` → `./src/payload.config.ts`

### Environment Variables

Required variables (see `.env.example`):
```bash
PAYLOAD_SECRET=              # Strong random string for CMS security
DATABASE_URL=                # PostgreSQL connection string
NEXT_PUBLIC_SERVER_URL=      # Server URL (http://localhost:3000 for dev)
BLOB_READ_WRITE_TOKEN=       # Optional: Vercel Blob Storage token
```

## Development Workflows

### Adding a New View Section

1. Create component in `/src/views/NewSection.tsx`
2. Use `SectionContainer` wrapper with appropriate props
3. Define TypeScript interface for props
4. Import and use in `/src/app/page.tsx`
5. Optionally create corresponding Payload global in `/src/globals/`

### Working with Payload CMS

- Collections define repeatable content types (many items)
- Globals define singleton content (one configuration)
- Both export default with `buildConfig` structure
- Access control, fields, hooks all configured in collection/global files
- TypeScript types auto-generated to `payload-types.ts`

### Database Setup

The project uses PostgreSQL. Docker scripts exist (`npm run db:start/stop`) but `docker-compose.yml` file is not yet present. You'll need to:
1. Create a PostgreSQL database
2. Set `DATABASE_URL` in `.env.local`
3. Payload migrations run automatically on startup

## Known Issues

- Missing Payload global files referenced in `payload.config.ts`:
  - `./globals/TeamSection`
  - `./globals/NeighborhoodSection`
  - `./globals/TeamPage`
  - `./globals/NeighborhoodPage`
- Missing type definition: `@/types/faqType` referenced in `accordion.tsx`
- `docker-compose.yml` file not present despite db scripts in package.json
