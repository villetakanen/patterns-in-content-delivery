# PBI-004: Golden Ratio CSS Grid Layout System

**Status:** Backlog  
**Priority:** High  
**Type:** Feature

## Description

Implement a responsive CSS Grid layout system that provides optimal reading experience through mathematically balanced typography and spacing. The layout will use Named Grid Lines technique to create a flexible, content-first system that enforces optimal line length (~65-75 characters) and uses Golden Ratio (φ ≈ 1.618) for harmonious gutter spacing on larger screens.

This replaces traditional fixed-width container approaches with a more fluid, mathematically principled system that adapts gracefully from mobile to ultra-wide displays while maintaining typographic excellence.

## User Story

As a **site visitor reading pattern documentation**,  
I want **content to be centered with optimal line length and balanced white space**,  
So that **the reading experience is comfortable, professional, and typographically harmonious on all screen sizes**.

## Context & Background

We're implementing Kevin Powell's "Named Grid Lines" technique to create a layout system that:
- Eliminates the need for multiple breakpoint-based max-width containers
- Enforces optimal reading line length using CSS `ch` units
- Creates harmonious spacing using Golden Ratio mathematics (φ²)
- Allows individual elements to break out to full-width when needed
- Works seamlessly with Astro's component-based architecture

This grid system will be the foundation for all content pages, particularly the pattern documentation in `src/data/books/`.

## Acceptance Criteria

### AC 1: CSS Grid Implementation with Named Lines

- [ ] Create a `.layout-grid` class (or update `.container`) that uses `display: grid`
- [ ] Define Named Grid Lines for three layout zones:
  - [ ] `[full-start]` - Start of edge-to-edge full bleed area
  - [ ] `[breakout-start]` - Start of breakout area (after first gutter)
  - [ ] `[content-start]` - Start of reading content area
  - [ ] `[content-end]` - End of reading content area  
  - [ ] `[breakout-end]` - End of breakout area (before last gutter)
  - [ ] `[full-end]` - End of edge-to-edge full bleed area
- [ ] Default behavior: all child elements sit in the `content` column
- [ ] Provide utility class `.breakout` to span `breakout-start` to `breakout-end` (gutter + content + gutter)
- [ ] Provide utility class `.full-width` to span `full-start` to `full-end` (edge-to-edge)
- [ ] Implementation must use CSS Grid template columns with `minmax()` and `min()` functions
</parameter>
</parameter>

### AC 2: Optimal Line Length (Typography & Legibility)

- [ ] Content column uses CSS `ch` unit for character-based width
- [ ] Content column max-width is between `60ch` and `75ch` (configurable via CSS custom property)
- [ ] Text never touches screen edges on mobile (minimum gutter enforced)
- [ ] Line length remains optimal when zooming to 200%
- [ ] Works correctly with both prose content and code blocks

### AC 3: Golden Ratio Gutter Mathematics

- [ ] Define CSS custom property `--phi` with value `1.618`
- [ ] Calculate `--phi-squared` as `calc(var(--phi) * var(--phi))` (~2.618)
- [ ] Define `--measure` custom property for optimal line length (default: `65ch`)
- [ ] Define `--base-spacing` custom property (default: `1rem`)
- [ ] Implement `--gutter` using `clamp()` where content is φ² larger than gutter:
  - Small screens: minimum `1rem` (or `var(--base-spacing)`)
  - Large screens: maximum `calc(var(--measure) / var(--phi-squared))` (≈ 24.8ch for 65ch content)
  - Uses `5vw` as flexible middle value
  - Math: Gutter = Content / φ², so 65ch / 2.618 ≈ 24.8ch
- [ ] Gutters must be symmetrical (equal on both sides)

### AC 4: Responsive Behavior

- [ ] Small screens (< `--breakpoint-small` / 620px): Gutters collapse to safe minimum (`1rem`)
- [ ] Medium screens (`--breakpoint-medium` / 960px): Gutters begin scaling with viewport
- [ ] Wide screens (`--breakpoint-wide` / 1365px+): Gutters reach Golden Ratio proportions
- [ ] Ultra-wide (1920px+): Content remains centered, gutters expand proportionally
- [ ] No horizontal scrolling at any breakpoint
- [ ] Layout works without explicit media queries (use CSS `clamp()` and `minmax()`)
</parameter>
</parameter>

### AC 5: Integration with Existing Components

- [ ] Works seamlessly with `Page.astro` layout
- [ ] Compatible with existing `.section` spacing
- [ ] Pattern documentation pages render correctly
- [ ] Code examples and syntax highlighting respect grid boundaries
- [ ] Images can break out to full-width when needed

## Tasks

1. **Create CSS custom properties for Golden Ratio system**
   - Add to `:root` in `src/styles/global.css`
   - Define `--phi`, `--phi-squared`, `--measure`, `--base-spacing`, `--gutter`
   - Document the mathematical reasoning in comments

2. **Implement `.layout-grid` class**
   - Add to `src/styles/global.css`
   - Use CSS Grid with Named Lines syntax
   - Define three columns: `[full-start] gutter [content-start] content [content-end] gutter [full-end]`
   - Use `minmax(var(--gutter), 1fr)` for gutters
   - Use `min(100% - (var(--gutter) * 2), var(--measure))` for content column
   - Set default child behavior: `grid-column: content`

3. **Create utility classes**
   - `.breakout`: spans from `breakout-start` to `breakout-end` (gutter + content + gutter)
   - `.full-width`: spans from `full-start` to `full-end` (edge-to-edge)
   - Document usage in CSS comments

4. **Update `Page.astro` layout**
   - Apply `.layout-grid` to main container
   - Ensure all page content flows through the grid
   - Test with existing pages (`index.astro`, `ds.astro`)

5. **Test responsive behavior**
   - Test at 620px (`--breakpoint-small`)
   - Test at 960px (`--breakpoint-medium`)
   - Test at 1365px (`--breakpoint-wide`)
   - Test at 1920px+ (ultra-wide)
   - Test zoom to 200% (accessibility requirement)
   - Verify no horizontal scroll at any size

6. **Validate typography**
   - Measure actual line length in characters
   - Verify comfort of reading long-form content
   - Test with pattern documentation (Markdown rendered to HTML)
   - Ensure code blocks respect boundaries or break appropriately

7. **Document the system**
   - Add usage examples to `ds.astro` page
   - Show standard content layout (default, content column only)
   - Show `.breakout` example (gutter + content + gutter)
   - Show `.full-width` example (edge-to-edge)
   - Explain the Golden Ratio mathematics
   - Add to project documentation
</parameter>
</text>
<new_text>

   - Add to project documentation

## Technical Implementation Notes

### CSS Grid Template Structure

```/dev/null/example.css#L1-30
:root {
  /* Mathematical Constants */
  --phi: 1.618;
  --phi-squared: calc(var(--phi) * var(--phi)); /* ~2.618 */
  
  /* Configuration */
  --measure: 65ch; /* Optimal line length for reading */
  --base-spacing: 1rem;
  
  /* Responsive Gutter Logic:
     - Small screens: 1rem minimum
     - Flexible middle: 5vw
     - Large screens: measure / φ² (e.g., 65ch / 2.618 ≈ 24.8ch)
     - This creates the Golden Ratio: Content = φ² × Gutter
  */
  --gutter: clamp(
    var(--base-spacing), 
    5vw, 
    calc(var(--measure) / var(--phi-squared))
  );
  );</parameter>
}

.layout-grid {
  display: grid;
  grid-template-columns:
    [full-start] minmax(var(--gutter), 1fr) [breakout-start]
    min(100% - (var(--gutter) * 2), var(--measure)) 
    [breakout-end] minmax(var(--gutter), 1fr) [full-end];
  
  /* Alternative with explicit content lines:
  grid-template-columns:
    [full-start] minmax(var(--gutter), 1fr) 
    [breakout-start] 0 [content-start] 
    min(100% - (var(--gutter) * 2), var(--measure)) 
    [content-end] 0 [breakout-end] 
    minmax(var(--gutter), 1fr) [full-end];
  */
}

/* Default: all children in content column (middle column) */
.layout-grid > * {
  grid-column: 2; /* or use content if using explicit [content-start]/[content-end] */
}

/* Utility: break out to include gutters (gutter + content + gutter) */
.layout-grid > .breakout {
  grid-column: breakout;
}

/* Utility: full bleed edge-to-edge */
.layout-grid > .full-width {
  grid-column: full;
}
</parameter>
</text>
<new_text>

}
```

### Integration with Page Layout

```/dev/null/Page.astro#L1-15
---
interface Props {
  title: string;
  description: string;
}
const { title, description } = Astro.props;
---
<!doctype html>
<html lang="en">
  <head>
    <!-- BaseHead component -->
  </head>
  <body>
    <div class="layout-grid">
      <slot />
    </div>
  </body>
</html>
```

### Usage Example

```/dev/null/example-page.astro#L1-20
---
import Page from '../layouts/Page.astro';
---
<Page title="Example" description="Example page">
  <!-- This header stays in content column -->
  <header class="section">
    <h1>Pattern Documentation</h1>
  </header>

  <!-- This article stays in content column -->
  <article>
    <p>This text will have optimal line length of ~65 characters...</p>
  </article>

  <!-- This figure breaks out to include gutters (gutter + content + gutter) -->
  <figure class="breakout">
    <img src="/diagram.png" alt="Medium-width diagram" />
    <figcaption>This spans the content plus both gutters</figcaption>
  </figure>

  <!-- This image goes full edge-to-edge -->
  <figure class="full-width">
    <img src="/hero-image.jpg" alt="Full-width hero image" />
    <figcaption>This spans the entire viewport</figcaption>
  </figure>
</parameter>
</text>
<new_text>

  </figure>
</Page>
```

## Mathematical Rationale

The Golden Ratio (φ ≈ 1.618) appears throughout nature and has been used in design for millennia. In this layout, the content column is proportionally φ² (≈ 2.618) times larger than the maximum gutter:

- **Content to gutter ratio**: Content = φ² × Gutter (65ch = φ² × 24.8ch), creating harmonious proportions
- **Visual hierarchy**: The larger content area is the dominant element, with gutters (≈24.8ch max) providing breathing room
- **Responsive scaling**: Using `clamp()` with `vw` units creates smooth transitions, with gutters scaling from 1rem to ~24.8ch

The `ch` unit ensures optimal reading regardless of font size or user preferences.

## Accessibility Considerations

- Zoom to 200% must not break layout or cause horizontal scroll
- Minimum touch target sizes maintained (gutters provide breathing room)
- Semantic HTML structure preserved (grid is purely presentational)
- Works with assistive technologies (grid doesn't affect document flow for screen readers)
- Respects user font size preferences (uses relative units)

## Performance Implications

- Pure CSS solution, no JavaScript required
- No layout shift during load
- No media query breakpoints to evaluate (uses CSS `clamp()`)
- Minimal CSS payload (~50 lines)
- Compatible with Astro's static generation (no runtime cost)

## Dependencies

- PBI-002 (Basic styling and design system) - ✅ Complete
- PBI-003 (Page Layout and BaseHead Component) - ⏳ In backlog

## Definition of Done

- All acceptance criteria met
- CSS custom properties defined in `global.css`
- `.breakout` and `.full-width` classes implemented with Named Grid Lines
- Utility classes (`.full-width`) implemented
- `Page.astro` layout updated to use grid system
- All existing pages render correctly
- Tested at all design token breakpoints: 620px (`--breakpoint-small`), 960px (`--breakpoint-medium`), 1365px (`--breakpoint-wide`), and 1920px+ (ultra-wide)
- Accessibility check: zoom to 200% works without horizontal scroll
- Build succeeds (`pnpm build`)
- Biome checks pass (`pnpm check`)
- Documentation added to `ds.astro` with visual examples
- Code reviewed
- Changes committed using conventional commit format (`feat(layout): implement golden ratio grid system`)

## Estimated Effort

3-4 hours

## References

- [Kevin Powell - A new approach to container and wrapper classes](https://www.youtube.com/watch?v=c13gpBrnGEw)
- [Every Layout - The Stack](https://every-layout.dev/layouts/stack/)
- [MDN - CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [MDN - CSS clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [The Elements of Typographic Style - Line Length](https://practicaltypography.com/line-length.html)
- [Golden Ratio in Design](https://www.creativebloq.com/design/designers-guide-golden-ratio-12121546)

## Notes

- This grid system is purely presentational - it doesn't affect semantic HTML
- The Named Lines technique eliminates the need for nested wrapper divs
- Three width options:
  1. **Default** (content column): ~65ch centered
  2. **`.breakout`**: content + both gutters (~65ch + 2×24.8ch)
  3. **`.full-width`**: edge-to-edge viewport width
- Consider adding `.prose` class that combines with grid for typography-focused content
</parameter>
</text>
<new_text>

- Future: integrate with Astro's View Transitions for smooth page navigation
- The `ch` unit is based on the width of the "0" character in the current font
- Golden Ratio spacing is aspirational - comfort and legibility are the primary goals

## Future Enhancements

Not part of this PBI, but potential improvements:
- Additional breakout zones (e.g., `.breakout-left`, `.breakout-right` for asymmetric layouts)
- Explicit `[content-start]` and `[content-end]` named lines if needed for more granular control
- Nested grids for complex layouts (e.g., sidebar patterns)
</parameter>
</text>
<new_text>

- CSS container queries for component-level responsiveness
- Integration with Astro's Image component for optimized full-width images
- Dark mode adjustments to gutter visual weight