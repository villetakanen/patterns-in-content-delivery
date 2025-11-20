# PBI-005: Static Content Pattern Documentation Page

**Status:** Backlog  
**Priority:** High  
**Type:** Feature (Content)

## Description

Create the first pattern documentation page for "Static Content" to test the content layout system and establish the pattern documentation structure. This pattern is fundamental to understanding content delivery and serves as a simple, clear starting point for the documentation. It will validate our layouts, components, and content rendering pipeline while establishing the template for future pattern articles.

## Acceptance Criteria

- [ ] Content Collections configured in `src/content/config.ts`
- [ ] Markdown file created at `src/content/patterns/static-content.md`
- [ ] Article follows the pattern documentation structure
- [ ] Content includes all required sections:
  - [ ] Clear title and definition
  - [ ] Use cases section
  - [ ] How it works (technical explanation)
  - [ ] Pros and cons
  - [ ] Implementation example(s)
  - [ ] Related patterns
  - [ ] Common misconceptions
  - [ ] Real-world examples
  - [ ] References to authoritative sources
- [ ] Front matter metadata included (title, category, tags, dates)
- [ ] Content is accurate, concise, and beginner-friendly
- [ ] Code examples are practical and well-formatted
- [ ] Dynamic page route created at `src/pages/patterns/[id].astro`
- [ ] Route uses `getStaticPaths()` to generate pages from Content Collections
- [ ] Page uses `Page.astro` layout (from PBI-003)
- [ ] Page renders Markdown content correctly
- [ ] Page is accessible and semantic HTML
- [ ] Build succeeds without errors
- [ ] Content is optimized for both human readers and AI answer engines

## Tasks

### 1. Research and Content Creation

- [ ] Define "static content" clearly and concisely
- [ ] Identify key use cases (documentation sites, blogs, marketing pages, etc.)
- [ ] Explain how static content works (pre-built files, CDN distribution, no server processing)
- [ ] List advantages (performance, security, cost, scalability, simplicity)
- [ ] List disadvantages (no dynamic behavior, rebuild required for updates, not suitable for personalized content)
- [ ] Find real-world examples (GitHub Pages, static marketing sites, documentation portals)
- [ ] Clarify common misconceptions (static ≠ boring, static can include client-side interactivity)
- [ ] Identify related patterns (SSG, CDN, Jamstack, pre-rendering)
- [ ] Gather authoritative references (MDN, web.dev, etc.)

### 2. Configure Content Collections

- [ ] Create `src/content/config.ts` if it doesn't exist
- [ ] Define `patterns` collection with schema:
  ```typescript
  import { defineCollection, z } from 'astro:content';

  const patterns = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      category: z.string(),
      tags: z.array(z.string()),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
    }),
  });

  export const collections = { patterns };
  ```
- [ ] Create `src/content/patterns/` directory

### 3. Write Markdown Article

- [ ] Create `src/content/patterns/static-content.md`
- [ ] Add YAML front matter:
  ```yaml
  ---
  title: "Static Content"
  category: "Content Delivery"
  tags: ["static", "performance", "cdn", "fundamentals"]
  date: 2024-11-XX
  updated: 2024-11-XX
  ---
  ```
- [ ] Write clear, structured content following the template
- [ ] Include code examples (HTML, basic file structure, deployment examples)
- [ ] Use semantic markdown (headings, lists, code blocks, emphasis)
- [ ] Keep language accessible but technically accurate
- [ ] Target length: 800-1200 words (comprehensive but not overwhelming)
- [ ] Proofread and edit for clarity

### 4. Create Dynamic Page Route

- [ ] Create directory `src/pages/patterns/` if it doesn't exist
- [ ] Create `src/pages/patterns/[id].astro`
- [ ] Implement `getStaticPaths()` to:
  - Import all patterns from Content Collections
  - Return array of `{ params: { id }, props: { entry } }` objects
  - Use entry slug as the `id` parameter
- [ ] Import and use `Page.astro` layout
- [ ] Set title and description from entry front matter
- [ ] Render Markdown content using `<Content />` component from entry
- [ ] Apply proper typography and content styling
- [ ] Add "Back to Home" or breadcrumb navigation (if applicable)
- [ ] Ensure page structure is semantic (`<article>`, proper headings)

### 5. Content Rendering Implementation

- [ ] Use Astro's `<Content />` component to render Markdown
- [ ] Access front matter via `entry.data`
- [ ] Style Markdown output (headings, paragraphs, code blocks, lists)
- [ ] Ensure code syntax highlighting works (Astro handles this automatically)
- [ ] Test with various Markdown features (links, emphasis, blockquotes)
</text>

<old_text line=88>
### 5. Styling and Design

### 5. Styling and Design

- [ ] Apply existing design system tokens to content
- [ ] Ensure typography scale is readable (body text, headings)
- [ ] Style code blocks appropriately (monospace font, background, padding)
- [ ] Add spacing between sections (use `--space-*` tokens)
- [ ] Ensure responsive design (mobile, tablet, desktop)
- [ ] Test light and dark themes
- [ ] Add any pattern-specific styles to `src/styles/global.css` if needed

### 7. Testing and Validation

- [ ] Test page renders correctly in development (`pnpm dev`)
- [ ] Verify Markdown content displays properly
- [ ] Check all sections are present and formatted
- [ ] Test links (internal and external)
- [ ] Validate HTML structure (semantic elements, heading hierarchy)
- [ ] Test accessibility (keyboard navigation, screen reader friendly)
- [ ] Run `pnpm build` and verify production build
- [ ] Preview production build (`pnpm preview`)
- [ ] Run `pnpm check` (Biome)
- [ ] Check for any console errors or warnings

### 8. Documentation and Cleanup

- [ ] Add route to site navigation (if navigation exists)
- [ ] Update any index or table of contents
- [ ] Commit with conventional commit message
- [ ] Verify no temporary files or debugging code left behind

## Technical Notes

### Content Collections Setup

First, configure Content Collections in `src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';

const patterns = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { patterns };
```

### Markdown File Structure

Example structure for `src/content/patterns/static-content.md`:

```markdown
---
title: "Static Content"
category: "Content Delivery"
tags: ["static", "performance", "cdn", "fundamentals"]
date: 2024-11-20
updated: 2024-11-20
---

# Static Content

## What is Static Content?

[Definition...]

## When to Use Static Content

[Use cases...]

## How Static Content Works

[Technical explanation...]

## Advantages

- Performance
- Security
- Cost-effectiveness
- Scalability
- Simplicity

## Disadvantages

- No real-time personalization
- Requires rebuild for updates
- Not suitable for dynamic data

## Implementation Example

[Code example with explanation...]

## Related Patterns

- Static Site Generation (SSG)
- Content Delivery Networks (CDN)
- Jamstack Architecture

## Common Misconceptions

- "Static means boring" - False, static sites can be highly interactive
- "Static can't have dynamic features" - False, client-side JS adds interactivity

## Real-World Examples

- GitHub Pages
- Netlify-hosted documentation sites
- Marketing landing pages

## References

- [MDN Web Docs: Static vs Dynamic](https://...)
- [Jamstack.org](https://jamstack.org)
```

### Dynamic Page Component Structure

Example for `src/pages/patterns/[id].astro`:

```astro
---
import { getCollection } from 'astro:content';
import Page from '../../layouts/Page.astro';

// Generate static paths for all patterns
export async function getStaticPaths() {
  const patterns = await getCollection('patterns');
  
  return patterns.map((entry) => ({
    params: { id: entry.slug },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();
const { title, category, tags } = entry.data;

// Create description from first paragraph or use a default
const description = `Understanding ${title.toLowerCase()}, its benefits, trade-offs, and when to use it.`;
---

<Page title={title} description={description}>
  <article class="section pattern-content">
    <header>
      <p class="text-secondary">{category}</p>
      <h1>{title}</h1>
      <div class="tags">
        {tags.map(tag => <span class="tag">{tag}</span>)}
      </div>
    </header>
    
    <Content />
  </article>
</Page>
```

### Why Content Collections?

Astro Content Collections provide:

1. **Type Safety** - Schema validation for front matter
2. **Better DX** - TypeScript autocompletion for content
3. **Performance** - Content is processed at build time
4. **Query API** - Easy filtering and sorting of content
5. **Built-in Rendering** - `<Content />` component handles Markdown
6. **Syntax Highlighting** - Automatic with Shiki/Prism

This is the recommended approach for structured content in Astro.

### Styling Considerations

Apply content-specific styles:

```css
/* Markdown content styling */
article.pattern-content {
  max-width: 70ch; /* Optimal reading width */
  
  h2 {
    margin-block-start: var(--space-8);
    margin-block-end: var(--space-4);
  }
  
  h3 {
    margin-block-start: var(--space-6);
    margin-block-end: var(--space-3);
  }
  
  p {
    margin-block-end: var(--space-4);
    line-height: var(--line-height-relaxed);
  }
  
  code {
    font-family: var(--font-mono);
    background: var(--color-surface-secondary);
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }
  
  pre {
    padding: var(--space-4);
    border-radius: var(--radius-md);
    overflow-x: auto;
  }
}
```

### Content Quality Checklist

- [ ] Technically accurate
- [ ] No marketing fluff
- [ ] Includes practical examples
- [ ] Explains jargon on first use
- [ ] Cites authoritative sources
- [ ] Acknowledges trade-offs (pros AND cons)
- [ ] Optimized for search/answer engines (clear headings, semantic structure)
- [ ] Includes version/date information where relevant

## Dependencies

- PBI-003 (Page Layout and BaseHead Component) - Must be complete
- PBI-002 (Basic styling and design system) - ✅ Complete
- PBI-004 (Golden Ratio Grid Layout) - ✅ Complete

## Definition of Done

- Markdown content file created and complete
- Page route created and functional
- Content follows established structure
- All required sections present
- Code examples are clear and practical
- Page renders correctly (development and production)
- Semantic HTML and accessibility verified
- Biome checks pass
- No console errors or warnings
- Changes committed using conventional commit format
- Content is accurate and well-curated (not just AI-generated fluff)

## Estimated Effort

3-4 hours
- Research and content creation: 1.5-2 hours
- Implementation and styling: 1 hour
- Testing and refinement: 0.5-1 hour

## References

- [Astro Markdown Documentation](https://docs.astro.build/en/guides/markdown-content/)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro Dynamic Routes](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes)
- [MDN: Static vs Dynamic Websites](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Pages_sites_servers_and_search_engines)
- [Jamstack.org](https://jamstack.org/)

## Notes

- This is the **first content page** - it sets the precedent for all future patterns
- Focus on clarity and structure - this is a template for future articles
- Keep it simple - static content is a fundamental, straightforward concept
- Test thoroughly - ensure the rendering pipeline works before creating more pages
- The dynamic route `[id].astro` will handle all future pattern pages automatically
- Content Collections provide type safety and better developer experience
- Consider adding a table of contents (TOC) component for longer articles
- Think about navigation between pattern pages (previous/next, related patterns)
- Future patterns just need a new `.md` file in `src/content/patterns/` - no new page files needed!
- The `src/data/books/` directory can be removed or repurposed later

---

*This PBI validates the entire content delivery pipeline from Markdown source to rendered page.*