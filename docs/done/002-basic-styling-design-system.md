# PBI-002: Basic Styling and Design System

**Status:** Complete  
**Priority:** High  
**Type:** Feature

## Description

Establish a foundational design system with light/dark theme support using modern CSS features. Create design tokens as CSS custom properties with `light-dark()` function for automatic theme switching. Build a design system showcase page to test and document all base components.

## Acceptance Criteria

- [ ] CSS design tokens defined using CSS custom properties
  - [ ] Grid unit: 0.5em base for all dimensions
  - [ ] Color palette using LCH color space (Material Design style)
    - [ ] Primary color scale: near-black to near-white (lightness gradient 10-99)
    - [ ] Secondary color scale: cyan to magenta (hue gradient from light to dark)
    - [ ] Neutral grays for backgrounds and borders
    - [ ] Semantic colors (success, warning, error, info)
  - [ ] Typography scale (font sizes, weights, line heights)
  - [ ] Spacing scale (based on 0.5em grid multiples)
  - [ ] Border radius values (conforming to 0.5em grid)
  - [ ] Shadows
  - [ ] Transitions/animations
  - [x] Responsive breakpoints (small: 620px, medium: 960px, wide: 1365px)
- [ ] Light/dark theme support using `light-dark()` CSS function
  - [ ] Automatic switching based on `prefers-color-scheme`
  - [ ] Optional manual theme toggle (future enhancement)
- [ ] Base CSS reset/normalize
- [ ] Typography system
  - [ ] Headings (h1-h6)
  - [ ] Body text
  - [ ] Lists
  - [ ] Links
  - [ ] Code/pre blocks
- [ ] Layout utilities
  - [ ] Container/wrapper
  - [ ] Grid/flex helpers (if needed)
  - [ ] Section spacing
- [ ] Design system showcase page at `/ds`
  - [ ] All typography variants
  - [ ] Color palette display
  - [ ] Spacing scale visualization
  - [ ] Component examples
  - [ ] Interactive examples where applicable
- [ ] No framework dependencies (no Tailwind, Bootstrap, etc.)
- [ ] Performance: CSS file size < 20KB uncompressed

## Tasks

1. Create base CSS architecture
   - Set up `src/styles/` directory structure
   - Create `tokens.css` for design tokens
   - Create `reset.css` for CSS reset
   - Create `base.css` for base element styles
   - Create `utilities.css` for helper classes (minimal)

2. Define design tokens
   - Grid unit: 0.5em as base dimension unit
   - Color palette using LCH color space
     - Primary scale: near-black to near-white (10-99, including 95)
     - Secondary scale: cyan to magenta (hue shift with lightness)
     - Combine with `light-dark()` for theme support
   - Typography scale
   - Spacing scale (multiples of 0.5em grid unit)
   - Border radius values (conforming to 0.5em grid)
   - Shadow definitions
   - Transition/easing functions

3. Implement base styles
   - CSS reset/normalize
   - Typography styles for all semantic HTML elements
   - Form elements (if needed for future patterns)
   - Code blocks with syntax highlighting support (prepare for it)

4. Create design system showcase
   - New page: `src/pages/ds.astro`
   - Sections for:
     - Typography specimens
     - Color palette with contrast ratios
     - Spacing scale visualization
     - Component examples
     - Theme toggle demonstration
   - Make it visually clear and well-organized

5. Import styles globally
   - Update `src/pages/index.astro` or create layout
   - Ensure styles load in correct order

6. Test across browsers
   - Chrome/Edge (Chromium)
   - Firefox
   - Safari (if available)
   - Mobile viewports

## Technical Notes

### CSS Architecture

```
src/styles/
├── tokens.css       # Design tokens (colors, spacing, etc.)
├── reset.css        # CSS reset/normalize
├── base.css         # Base element styles
├── utilities.css    # Minimal utility classes
└── global.css       # Import orchestrator
```

### light-dark() Function

Modern CSS feature for theme-aware color values:

```css
:root {
  color-scheme: light dark;
  
  --color-bg: light-dark(#ffffff, #0a0a0a);
  --color-text: light-dark(#1a1a1a, #f0f0f0);
  --color-primary: light-dark(#2563eb, #60a5fa);
}
```

Browser automatically applies based on `prefers-color-scheme` media query.

### Design Token Philosophy

- Use semantic naming (e.g., `--color-text-primary`, not `--gray-800`)
- **0.5em grid system** - All dimensions conform to 0.5em multiples
- Scale-based spacing using 0.5em grid unit
- Consistent typography scale (modular scale or fixed ratios)
- Accessible color contrast ratios (WCAG AA minimum)

### Typography Scale Example

```css
:root {
  --font-base: 1rem;        /* 16px */
  --font-sm: 0.875rem;      /* 14px */
  --font-lg: 1.125rem;      /* 18px */
  --font-xl: 1.25rem;       /* 20px */
  --font-2xl: 1.5rem;       /* 24px */
  --font-3xl: 1.875rem;     /* 30px */
  --font-4xl: 2.25rem;      /* 36px */
}
```

### Grid System and Spacing Scale Example

```css
:root {
  /* Base grid unit - all dimensions conform to this */
  --grid-unit: 0.5em;
  
  /* Spacing scale based on grid unit */
  --space-1: calc(var(--grid-unit) * 1);   /* 0.5em */
  --space-2: calc(var(--grid-unit) * 2);   /* 1em */
  --space-3: calc(var(--grid-unit) * 3);   /* 1.5em */
  --space-4: calc(var(--grid-unit) * 4);   /* 2em */
  --space-6: calc(var(--grid-unit) * 6);   /* 3em */
  --space-8: calc(var(--grid-unit) * 8);   /* 4em */
  --space-12: calc(var(--grid-unit) * 12); /* 6em */
  --space-16: calc(var(--grid-unit) * 16); /* 8em */
}
```

### Color System - LCH Color Space

**Primary Scale**: Near-black to near-white (lightness gradient)
```css
:root {
  /* Primary scale using LCH - pure lightness gradient (10-99) */
  --color-primary-10: lch(10% 0 0);     /* Near black */
  --color-primary-20: lch(20% 0 0);
  --color-primary-30: lch(30% 0 0);
  --color-primary-40: lch(40% 0 0);
  --color-primary-50: lch(50% 0 0);     /* Mid gray */
  --color-primary-60: lch(60% 0 0);
  --color-primary-70: lch(70% 0 0);
  --color-primary-80: lch(80% 0 0);
  --color-primary-90: lch(90% 0 0);
  --color-primary-95: lch(95% 0 0);
  --color-primary-99: lch(99% 0 0);     /* Near white */
}
```

**Secondary Scale**: Cyan to magenta (hue gradient from light to dark)
```css
:root {
  /* Secondary scale - cyan (180°) to magenta (330°) with decreasing lightness */
  --color-secondary-10: lch(90% 50 180);  /* Light cyan */
  --color-secondary-20: lch(80% 50 200);
  --color-secondary-30: lch(70% 50 220);
  --color-secondary-40: lch(60% 50 240);  /* Blue */
  --color-secondary-50: lch(50% 50 260);  /* Blue-violet */
  --color-secondary-60: lch(45% 50 280);
  --color-secondary-70: lch(40% 50 300);  /* Violet */
  --color-secondary-80: lch(35% 50 315);
  --color-secondary-90: lch(30% 50 330);  /* Dark magenta */
}
```

**Material Design Style Notation**: Each scale has numbered stops (10, 20, 30... 100) for consistent reference across the design system.

### Color Palette Structure

- **Primary**: Near-black to near-white lightness scale (10-99, achromatic)
- **Secondary**: Cyan to magenta hue gradient with lightness decrease
- **Neutral**: Grays derived from primary scale
- **Semantic**: Success, warning, error, info (defined separately)
- **Surface**: Background variations using primary scale
- **Text**: Text colors using primary scale with `light-dark()`

### Performance Considerations

- Keep CSS minimal and focused
- No unused styles
- Use native CSS features (no preprocessors needed initially)
- Consider critical CSS for above-the-fold content
- Leverage browser caching via Netlify headers

## Dependencies

- PBI-001 (Base tooling) - ✅ Complete

## Definition of Done

- All acceptance criteria met
- Design system page (`/ds`) is functional and comprehensive
- Light/dark themes work correctly
- CSS validates and has no errors
- Biome checks pass
- Build successful with no warnings
- Tested in multiple browsers
- Documentation in design system page is clear
- CSS file size is optimized
- Changes committed with conventional commit message

## Estimated Effort

4-6 hours

## References

- [CSS light-dark() function](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [WCAG Color Contrast](https://webaim.org/resources/contrastchecker/)
- [Modular Scale](https://www.modularscale.com/)

## Notes

- Keep it simple and maintainable
- Design tokens should be easy to understand and modify
- The `/ds` page is both a testing ground and living documentation
- Focus on readability and accessibility
- **All dimensions must conform to the 0.5em grid** for visual consistency
- Using `em` units makes the grid relative to font size (scales naturally)
- **LCH color space** provides perceptually uniform colors
  - Primary: Pure lightness scale (near-black 10% → near-white 99%)
  - Includes 95 and 99 stops for subtle light variations
  - Secondary: Chromatic scale (cyan → magenta) with lightness shift
  - Material Design style numbering (10, 20... 90, 95, 99) for easy reference
- This is a foundation - can be extended later with more components