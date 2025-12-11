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
```

## Tech Stack

- **Framework**: Next.js 15.3.6 (App Router)
- **React**: 19.1.0
- **Styling**: Tailwind CSS 3.4+ with DaisyUI 4.11+
- **Email**: Resend (for contact form)
- **Package Manager**: Yarn 1.22.22

## Architecture Overview

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (public)/          # Public-facing routes
│   │   ├── projects/      # Projects listing and detail pages
│   │   └── success/       # Success page
│   └── api/               # API routes (contact-form)
├── views/                 # Page section components (AboutSection, HeroSection, etc.)
├── components/            # Reusable UI components (navbar, footer, cards)
├── ui/                    # Core UI primitives (CTAButton, SectionContainer)
├── consts/                # Static demo data (demoData.ts) and other constants
├── constants/             # Static data (navLinks, faq, metadata)
├── hooks/                 # React hooks
├── types/                 # TypeScript type definitions
└── util/                  # Utility functions
```

### Static Data Architecture

All content is stored in `/src/consts/demoData.ts`. This file contains:
- **heroData**: Hero section content (title, subtitle, CTAs, background)
- **aboutData**: About section content (title, description, stats)
- **processData**: Process steps with icons
- **services**: Array of service offerings
- **testimonials**: Array of client testimonials
- **contactData**: Contact form labels and placeholders
- **companyInfo**: Company name, email, phone, social media links
- **footerData**: Footer links and copyright
- **projects**: Array of project list items
- **projectDetails**: Detailed project data keyed by slug
- **projectsSectionData**: Projects page header content

Helper functions:
- `getFeaturedProjects()` - Get projects marked as featured
- `getAllProjects()` - Get all projects
- `getProjectBySlug(slug)` - Get project details by slug
- `getAllProjectSlugs()` - Get all project slugs for static generation

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

### Environment Variables

Optional variables (see `.env.example`):
```bash
RESEND_API_KEY=              # For contact form email functionality
NEXT_PUBLIC_SERVER_URL=      # Server URL (http://localhost:3000 for dev)
```

## Development Workflows

### Adding a New View Section

1. Create component in `/src/views/NewSection.tsx`
2. Use `SectionContainer` wrapper with appropriate props
3. Define TypeScript interface for props in `/src/types/sections.ts`
4. Import and use in `/src/app/(public)/page.tsx`

### Modifying Content

1. Edit `/src/consts/demoData.ts` to update any content
2. Follow existing type structures for consistency
3. Add new projects to both `projects` array and `projectDetails` object

### Adding New Projects

1. Add project to `projects` array in `demoData.ts`
2. Add detailed project data to `projectDetails` object with matching slug
3. Project will automatically appear on `/projects` page
4. Individual page will be available at `/projects/[slug]`
