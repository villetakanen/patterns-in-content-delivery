# PBI-003: Page Layout and BaseHead Component

**Status:** Backlog  
**Priority:** High  
**Type:** Feature

## Description

Create reusable layout components to eliminate HTML boilerplate duplication across pages. Establish a base page layout (`Page.astro`) and a head component (`BaseHead.astro`) that all pages in the application will use. This will centralize meta tags, styles, and common page structure.

## Acceptance Criteria

- [ ] `BaseHead.astro` component created in `src/components/core/`
  - [ ] Accepts props for customizing page metadata (title, description, image, url, etc.)
  - [ ] Includes all essential meta tags (charset, viewport, generator)
  - [ ] Imports global styles (`../styles/global.css`)
  - [ ] Includes favicon reference
  - [ ] Supports customizable page title with site name fallback
  - [ ] Supports customizable meta description
  - [ ] Includes comprehensive Open Graph meta tags
    - [ ] `og:title`, `og:description`, `og:type`, `og:url`, `og:image`
    - [ ] `og:site_name`, `og:locale`
  - [ ] Includes Twitter Card meta tags
    - [ ] `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
    - [ ] Optional `twitter:site` and `twitter:creator`
  - [ ] Includes canonical URL tag
  - [ ] Includes theme-color meta tag for mobile browsers
  - [ ] Supports optional author and keywords meta tags
- [ ] `PageFooter.astro` component created in `src/components/core/`
  - [ ] Contains standard footer content
  - [ ] Applies consistent styling (`.section`, `.text-center`, `.text-secondary`)
  - [ ] Includes horizontal rule separator
  - [ ] Accepts optional slot for custom footer content
  - [ ] Default content: "A living document combining AI-generated content with human curation."
- [ ] `Page.astro` layout created in `src/layouts/`
  - [ ] Uses `BaseHead.astro` component in `<head>`
  - [ ] Provides semantic HTML structure (`<body>`, `<main>`, etc.)
  - [ ] Includes container/wrapper div for consistent page width
  - [ ] Uses `PageFooter.astro` component
  - [ ] Accepts slots for page content
  - [ ] Optionally accepts props for page-specific customization
- [ ] All existing pages refactored to use new layout
  - [ ] `src/pages/index.astro` refactored
  - [ ] `src/pages/ds.astro` refactored
- [ ] No visual or functional regressions
- [ ] HTML structure remains semantic and accessible
- [ ] Build succeeds without errors or warnings

## Tasks

1. Create core components directory structure
   - Create `src/components/core/` directory
   - This will house foundational components like `BaseHead.astro` and `PageFooter.astro`

2. Implement `BaseHead.astro`
   - Accept props:
     - `title` (string, required) - Page title
     - `description` (string, required) - Meta description
     - `image` (string, optional) - Social sharing image URL (absolute URL)
     - `url` (string, optional) - Canonical URL (defaults to current page)
     - `siteName` (string, optional, default: "Patterns in Content Delivery")
     - `author` (string, optional) - Page author
     - `keywords` (string, optional) - SEO keywords
     - `type` (string, optional, default: "website") - Open Graph type
     - `twitterSite` (string, optional) - Twitter handle for site
     - `twitterCreator` (string, optional) - Twitter handle for content creator
   - Include essential meta tags:
     - `<meta charset="utf-8" />`
     - `<meta name="viewport" content="width=device-width" />`
     - `<meta name="generator" content={Astro.generator} />`
     - `<meta name="description" content={description} />`
     - `<meta name="author" content={author} />` (if provided)
     - `<meta name="keywords" content={keywords} />` (if provided)
     - `<meta name="theme-color" content="..." />` (light/dark aware)
   - Include Open Graph meta tags:
     - `<meta property="og:title" content={title} />`
     - `<meta property="og:description" content={description} />`
     - `<meta property="og:type" content={type} />`
     - `<meta property="og:url" content={url} />`
     - `<meta property="og:image" content={image} />` (if provided)
     - `<meta property="og:site_name" content={siteName} />`
     - `<meta property="og:locale" content="en_US" />`
   - Include Twitter Card meta tags:
     - `<meta name="twitter:card" content="summary_large_image" />`
     - `<meta name="twitter:title" content={title} />`
     - `<meta name="twitter:description" content={description} />`
     - `<meta name="twitter:image" content={image} />` (if provided)
     - `<meta name="twitter:site" content={twitterSite} />` (if provided)
     - `<meta name="twitter:creator" content={twitterCreator} />` (if provided)
   - Include canonical URL:
     - `<link rel="canonical" href={url} />`
   - Include favicon: `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`
   - Import global styles: `import '../styles/global.css'`
   - Generate title with site name (e.g., "Page Title | Site Name")
   - Add TypeScript types for props with proper optional handling

3. Implement `PageFooter.astro`
   - Create component in `src/components/core/`
   - Accept optional slot for custom footer content
   - Default content: "A living document combining AI-generated content with human curation."
   - Apply consistent styling:
     - Wrapper with `.section .text-center .text-secondary` classes
     - `<hr>` with `margin-block-end: var(--space-6)`
     - `<small>` tag for default text
   - Keep structure flexible for future customization

4. Implement `Page.astro` layout
   - Create `src/layouts/` directory if it doesn't exist
   - Accept props:
     - `title` (string, required)
     - `description` (string, required)
     - Additional props as needed (can extend later)
   - Use `BaseHead` component in `<head>` section
   - Include semantic HTML structure:
     - `<!doctype html>`
     - `<html lang="en">`
     - `<head>` with `BaseHead`
     - `<body>` with container div
     - `<main>` slot for page content
     - `PageFooter` component
   - Apply existing CSS classes (`.container`, `.section`, etc.)

5. Refactor `index.astro`
   - Replace HTML boilerplate with `Page` layout
   - Pass appropriate title and description props
   - Move page-specific content into layout slot
   - Verify visual appearance matches original
   - Footer should use default `PageFooter` content

6. Refactor `ds.astro`
   - Replace HTML boilerplate with `Page` layout
   - Pass appropriate title and description props
   - Move page-specific content into layout slot
   - Verify visual appearance matches original
   - Footer should use default `PageFooter` content (but ds.astro currently has "Back to Home" link)

7. Test and validate
   - Run `pnpm dev` and verify both pages render correctly
   - Check browser DevTools for proper HTML structure
   - Verify no console errors or warnings
   - Test light/dark theme switching still works
   - Run `pnpm build` to ensure production build succeeds
   - Run `pnpm check` to verify Biome passes

## Technical Notes

### Component Structure

```
src/
├── components/
│   └── core/
│       ├── BaseHead.astro
│       └── PageFooter.astro
├── layouts/
│   └── Page.astro
└── pages/
    ├── index.astro
    └── ds.astro
```

### BaseHead.astro Interface

```typescript
interface Props {
  title: string;
  description: string;
  image?: string;
  url?: string;
  siteName?: string;
  author?: string;
  keywords?: string;
  type?: string;
  twitterSite?: string;
  twitterCreator?: string;
}
```

Example usage:
```astro
---
import BaseHead from '../components/core/BaseHead.astro';
---
<head>
  <BaseHead 
    title="Design System" 
    description="Visual showcase of design tokens, typography, colors, and components"
    image="https://example.com/og-image.png"
    url={Astro.url.href}
    author="Project Team"
  />
</head>
```

**Default Values**:
- `siteName`: "Patterns in Content Delivery"
- `type`: "website"
- `url`: Falls back to `Astro.url.href` if not provided
- `image`: Optional, no default (important for social sharing)

### PageFooter.astro Interface

```typescript
interface Props {
  // No required props - uses slot for custom content
}
```

Example usage (default):
```astro
---
import PageFooter from '../components/core/PageFooter.astro';
---
<PageFooter />
```

Example usage (custom content):
```astro
---
import PageFooter from '../components/core/PageFooter.astro';
---
<PageFooter>
  <p><a href="/">Back to Home</a></p>
</PageFooter>
```

### Page.astro Interface

```typescript
interface Props {
  title: string;
  description: string;
}
```

Example usage:
```astro
---
import Page from '../layouts/Page.astro';
---
<Page 
  title="Design System" 
  description="Visual showcase of design tokens"
>
  <header class="section">
    <h1>Design System</h1>
  </header>
  <!-- More content -->
</Page>
```

The `Page` layout automatically includes `PageFooter` with default content. Pages cannot override footer without modifying the layout (intentional design decision for consistency).

### Layout Best Practices

- **Separation of concerns**: `BaseHead` handles `<head>`, `PageFooter` handles `<footer>`, `Page` orchestrates
- **Flexibility**: Props allow customization while maintaining consistency
- **Semantic HTML**: Proper use of `<main>`, `<header>`, `<footer>`, etc.
- **Slot usage**: Astro's default slot for page content, optional slot for footer customization
- **Type safety**: Use TypeScript interfaces for props
- **Componentization**: Small, focused components are easier to maintain and reuse

### PageFooter Component Design

The `PageFooter` component encapsulates footer structure and styling:
- Consistent across all pages by default
- Can accept custom content via slot
- Includes semantic `<footer>` element
- Pre-styled with design system tokens

**Default footer structure**:
```astro
<footer class="section text-center text-secondary">
  <hr style="margin-block-end: var(--space-6);" />
  <p>
    <small>
      A living document combining AI-generated content with human curation.
    </small>
  </p>
</footer>
```

**Note**: The `ds.astro` page currently has a "Back to Home" link in the footer. Consider if this should:
1. Use a custom footer slot in `Page` layout (more flexible)
2. Be part of page content instead of footer (simpler)
3. Become a standard "Back to Home" pattern for sub-pages (more consistent)

### SEO Best Practices

**Image Requirements**:
- OG images should be 1200x630px (Facebook/LinkedIn)
- Twitter large card images should be 2:1 aspect ratio
- Use absolute URLs for images
- Provide fallback image for pages without specific images

**URL Handling**:
- Always use canonical URLs to avoid duplicate content issues
- Use `Astro.url.href` to get current page URL
- Ensure URLs are absolute (include protocol and domain)

**Title Length**:
- Optimal: 50-60 characters
- Include site name separator: " | Site Name"

**Description Length**:
- Optimal: 150-160 characters
- Make it compelling for social sharing

### Future Enhancements

These are NOT part of this PBI but can be added later:
- Optional header/navigation component (similar to `PageFooter` pattern)
- Custom footer slot in `Page` layout for page-specific footer content
- Breadcrumb support
- Structured data (JSON-LD) for rich results
- Language alternate links (hreflang)
- Custom fonts loading optimization
- Analytics scripts integration
- RSS feed link
- Site verification meta tags (Google, Bing, etc.)

## Dependencies

- PBI-001 (Base tooling) - ✅ Complete
- PBI-002 (Basic styling and design system) - ✅ Complete

## Definition of Done

- All acceptance criteria met
- All three components created: `BaseHead.astro`, `PageFooter.astro`, and `Page.astro`
- All existing pages (`index.astro`, `ds.astro`) refactored</parameter>
- No visual or functional regressions
- Build succeeds (`pnpm build`)
- Biome checks pass (`pnpm check`)
- HTML structure validated (semantic and accessible)
- Changes committed using conventional commit format
- Code is clean, well-commented, and follows project conventions

## Estimated Effort

2-3 hours

## References

- [Astro Layouts Documentation](https://docs.astro.build/en/core-concepts/layouts/)
- [Astro Components Documentation](https://docs.astro.build/en/core-concepts/astro-components/)
- [Astro Slots Documentation](https://docs.astro.build/en/core-concepts/astro-components/#slots)
- [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements)

## Notes

- Keep components simple and focused
- Prioritize reusability without over-engineering
- TypeScript types improve developer experience
- This establishes the foundation for future pages and layouts
- The layout should feel invisible - pages should "just work" without fighting the layout
- Consider this a living structure that can evolve with the project's needs