# Design System Usage Guide

## Text Scale System

The text scale provides 5 levels of emphasis, each with automatic dark mode support:

### Scale Levels

| Level | Usage | Light Mode | Dark Mode | Class |
|-------|-------|------------|-----------|--------|
| **Weakest** | Meta info, timestamps, least important | `#94a3b8` (slate-400) | `#64748b` (slate-500) | `.text-weakest` |
| **Weaker** | Body text, descriptions, secondary content | `#475569` (slate-600) | `#94a3b8` (slate-400) | `.text-weaker` |
| **Default** | Primary content, main text | `#1e293b` (slate-800) | `#e2e8f0` (slate-200) | `.text-default` |
| **Stronger** | Emphasized text, important highlights | `#0f172a` (slate-900) | `#f1f5f9` (slate-100) | `.text-stronger` |
| **Strongest** | Maximum emphasis, hero text | `#020617` (slate-950) | `#f8fafc` (slate-50) | `.text-strongest` |

### Usage Examples

#### Before (Inline Tailwind)
```jsx
<h1 className="text-4xl sm:text-5xl font-semibold text-primary-light dark:text-primary-dark">
  Matthew Mocniak
</h1>

<h2 className="text-xl sm:text-2xl text-secondary-light dark:text-secondary-dark">
  I'm a software designer...
</h2>
```

#### After (Design System)
```jsx
<h1 className="heading-1">
  Matthew Mocniak
</h1>

<h2 className="body-large">
  I'm a software designer...
</h2>
```

## Typography Components

Pre-composed typography classes that combine size, weight, and text scale:

| Class | Description | Composition |
|-------|-------------|-------------|
| `.heading-display` | Hero/display text | `text-4xl sm:text-5xl md:text-6xl font-semibold text-strongest` |
| `.heading-1` | Main title | `text-4xl sm:text-5xl font-semibold text-default` |
| `.heading-2` | Section title | `text-2xl sm:text-3xl font-semibold text-default` |
| `.heading-3` | Subsection | `text-xl sm:text-2xl font-semibold text-default` |
| `.heading-4` | Card title | `text-lg sm:text-xl font-semibold text-default` |
| `.body-large` | Intro text | `text-lg sm:text-xl text-weaker` |
| `.body` | Body text | `text-base sm:text-lg text-weaker` |
| `.body-small` | Supporting text | `text-sm sm:text-base text-weaker` |
| `.caption` | Meta info | `text-xs sm:text-sm text-weakest` |
| `.label` | UI labels | `text-sm font-medium uppercase tracking-wider text-weaker` |

## Component Classes

### Buttons

```jsx
// Primary button
<button className="btn-primary">
  Click Me
</button>

// Disabled button
<button className="btn-primary btn-disabled" disabled>
  Disabled
</button>
```

### Links

```jsx
// Primary link
<a href="#" className="link-primary">
  Learn more
</a>

// External link with icon
<a href="#" className="link-external">
  <img src="/icon.svg" />
  <span>Twitter</span>
</a>
```

### Images

```jsx
// Project showcase image
<img 
  src="/project.png" 
  className="project-image"
  onClick={openLightbox}
/>
```

### Containers

```jsx
// Main page container
<div className="container-main">
  // content
</div>

// Section container
<section className="container-section">
  // section content
</section>

// Section divider
<h3 className="section-divider">
  Recent Work
</h3>
```

## Migration Strategy

### Phase 1: Text Colors
Replace all instances of:
- `text-primary-light dark:text-primary-dark` → `text-default`
- `text-secondary-light dark:text-secondary-dark` → `text-weaker`

### Phase 2: Typography
Replace inline typography combinations with semantic classes:
- Main headings → `.heading-1`
- Section titles → `.heading-3`
- Body descriptions → `.body-large` or `.body`

### Phase 3: Components
Replace repeated component patterns:
- Button patterns → `.btn-primary`
- Link patterns → `.link-primary` or `.link-external`
- Image patterns → `.project-image`

## Using Raw Utilities

You can still use the raw Tailwind utilities when needed:

```jsx
// Using scale directly with Tailwind
<p className="text-weaker-light dark:text-weaker-dark">
  Custom styled text
</p>

// Combining with other utilities
<h2 className="text-default font-bold text-3xl">
  Custom heading
</h2>
```

## JavaScript Design System

Import and use the design system constants in JavaScript:

```jsx
import { textScale, typography, components } from './design-system';

// Access color values
const weakestColor = textScale.weakest.light;

// Use typography scales
const headingClasses = typography.h1;

// Apply component patterns
const buttonClasses = `${components.button.base} ${components.button.primary}`;
```

## Benefits

1. **Consistency**: Single source of truth for all design decisions
2. **Maintainability**: Change styles in one place
3. **Performance**: Smaller HTML with reused classes
4. **Clarity**: Semantic naming makes intent clear
5. **Dark Mode**: Automatic theme switching built-in
6. **Scalability**: Easy to add new levels or modify existing ones