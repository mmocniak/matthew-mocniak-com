# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Matthew Mocniak's personal portfolio website built with Next.js 14, React 18, and Tailwind CSS. The site features a clean, minimalist design with dark mode support, image lightbox functionality, and Fathom analytics integration.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14 with Pages Router (not App Router)
- **Styling**: Tailwind CSS with custom color scheme and PostCSS
- **Analytics**: Fathom Client for privacy-focused tracking
- **Image Optimization**: Next.js Image component

### Key Files and Structure
- `pages/index.js`: Main portfolio page with project showcases, lightbox implementation, and contact information
- `pages/_app.js`: App wrapper with Fathom analytics initialization tracking multiple domains
- `pages/api/hello.js`: Example API route (can be removed if unused)
- `tailwind.config.js`: Custom theme configuration with light/dark mode text colors and custom gradients
- `styles/globals.css`: Global styles with Tailwind directives and CSS variables for theme colors

### Styling Conventions
- Uses Tailwind CSS utility classes exclusively
- Dark mode implemented via `dark:` prefix with `media` strategy
- Custom text colors defined for light/dark themes:
  - Primary: `text-primary-light` / `dark:text-primary-dark`
  - Secondary: `text-secondary-light` / `dark:text-secondary-dark`
- Tab width: 4 spaces (configured in .prettierrc)

### Image Assets
- Profile images: `/public/images/faces/`
- Project screenshots: `/public/images/projects/[project-name]/`
- Project thumbnails: `/public/images/projects/[project-name]/thumbs/`
- Social icons: `/public/images/socials/`

### Features
- **Lightbox**: Custom React implementation for image viewing with keyboard navigation (ESC to close)
- **Email Copy**: Click-to-copy email functionality with visual feedback
- **Analytics**: Multi-domain tracking configured for matthewmocniak.com and mocniak.site variants