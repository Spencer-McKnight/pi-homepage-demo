# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Experimental React demo for testing alternative homepage layouts for PropertyInvesting.com (PI), a 20+ year-old Australian property investment education community. The goal is to discover which design strategy best converts visitors into repeat interactors.

## Commands

```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Architecture

### Version-Based Component Structure

This project uses a **versioned component architecture** to test three different homepage design strategies simultaneously:

- **Base version** (`/`) - Uses shared components from `src/components/`
- **v1** (`/v1`) - "Steve-Led Authority" strategy emphasizing personal authority and credentials
- **v2** (`/v2`) - "Course-Forward Sales" strategy focused on driving course purchases
- **v3** (`/v3`) - "Community Hub Dashboard" strategy emphasizing forum and community engagement

Each version has:
1. A page component in `src/pages/` (e.g., `HomeV1.jsx`, `HomeV2.jsx`, `HomeV3.jsx`)
2. Version-specific components in `src/components/v{n}/` (e.g., `src/components/v1/`, `src/components/v2/`, `src/components/v3/`)

### Shared Components

Components used across all versions live in `src/components/`:
- `Header.jsx` - Primary and secondary navigation
- `Footer.jsx` - Site footer
- `VersionSwitcher.jsx` - UI to toggle between homepage versions

### Routing

React Router manages version switching via routes defined in `src/App.jsx`:
- `/` → Base Home
- `/v1` → HomeV1 (Steve-Led Authority)
- `/v2` → HomeV2 (Course-Forward Sales)
- `/v3` → HomeV3 (Community Hub Dashboard)

## Project Context & Constraints

**Target audience:** Australians interested in property investing (seasoned to beginner)

**Core objective:** Turn visitors into repeat interactors who engage with the forum, courses, and community

**Navigation requirements:**
- Primary: Training Courses, Forum Home, Calculator Home, Books, SOGIF.au (external), My account
- Secondary: About, Contact, Finance, Blog

**Key CTA:** Sign up to become a member (benefits: forum posting access, free resources, save deals on calculator, regular updates)

**Content guidelines:**
- Use Australian English
- Knowledgeable but approachable tone
- Focus on outcomes and community value
- Use realistic mock content (no lorem ipsum)
- Emphasize trust signals (20+ years, community size, testimonials)

**Design constraints:**
- Keep code concise - this is a demo
- Responsive design for mobile and desktop
- Modern, clean aesthetics (avoid dated forum look)
- Static only - no backend, use mock data

## Tech Stack

- React 18 (Vite for build tooling)
- Tailwind CSS for styling
- React Router for navigation
- Lucide React for icons
