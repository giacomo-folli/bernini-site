# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal coaching website for Francesco Bernini, built using SvelteKit and Tailwind CSS. The site includes various sections like landing pages, course information, pricing, and philosophy, featuring dynamic content such as course sliders, testimonials, and FAQs.

## Common Commands

### Development

```bash
# Start the development server
npm run dev

# Build the project
npm run build

# Preview the build locally
npm run preview

# Type checking
npm run check

# Watch for type errors
npm run check:watch

# Format code with Prettier
npm run format

# Lint the code
npm run lint
```

## Architecture

### Tech Stack

- **Framework**: SvelteKit 2.x + Svelte 5
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

### Project Structure

- `/src/lib/components/` - Reusable components organized by section:
  - `about/` - Components for the about page
  - `calendar/` - Calendar related components
  - `contact/` - Contact form and information components
  - `global/` - Site-wide components (Navigation, Footer, etc.)
  - `landing/` - Landing page components
  - `pricing/` - Pricing page components
  - `training/` - Training related components
  - `work/` - Portfolio components

- `/src/lib/actions/` - Svelte actions (e.g., intersection observer)
- `/src/lib/data/` - Static data in TypeScript format
- `/src/lib/stores/` - Svelte stores for state management
- `/src/lib/types/` - TypeScript type definitions
- `/src/lib/utils/` - Utility functions

- `/src/routes/` - SvelteKit routes (pages)
  - File-based routing with `+page.svelte` files
  - API routes in `/api/` directory

### Key Utilities

- `cn` function (in `/src/lib/utils.ts`) - Combines class names using `clsx` and `tailwind-merge`
- `flyAndScale` - Custom transition for animations
- `inView` Svelte action - Tracks element visibility with Intersection Observer

### Styling

- Uses Tailwind CSS with a custom configuration
- CSS variables for theming
- Mobile-first responsive design

## Deployment

The site is configured for deployment on Vercel using `@sveltejs/adapter-vercel`.

## Changelog

Changelog is available at [bernini.openchangelog.com](https://bernini.openchangelog.com).