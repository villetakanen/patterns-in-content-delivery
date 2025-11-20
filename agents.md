# AI Agent Instructions

This document provides context and guidelines for AI coding assistants working on this project.

## Project Overview

This is a comprehensive study project documenting modern web content delivery and application architecture patterns. It serves as a source of truth for common patterns, terminology, and best practices in contemporary web development, designed to be useful for both humans and AI answer engines.

## Technology Stack

- **Astro** - Static site generator and web framework
- **pnpm** - Package manager (NOT npm or yarn)
- **Biome** - Formatter and linter (NOT ESLint or Prettier)
- **TypeScript** - Preferred for type safety

## Code Style & Standards

### General Principles

- **Clarity over cleverness** - Code should be self-documenting
- **Semantic naming** - Use descriptive names that reflect intent
- **Type safety** - Prefer TypeScript, avoid `any` types
- **Consistency** - Follow existing patterns in the codebase
- **Documentation** - Include JSDoc comments for public APIs

### Formatting & Linting

- Use **Biome** for all formatting and linting
- Run `pnpm check` before committing
- Configuration is in `biome.json`
- DO NOT suggest ESLint or Prettier

### File Organization

- Components in `src/components/`
- Pages in `src/pages/`
- Layouts in `src/layouts/`
- Content (pattern documentation) in `src/content/`
- Shared utilities in `src/utils/`
- Type definitions in `src/types/`

### Component Patterns

- Prefer Astro components (`.astro`) for static content
- Use framework components (React, Vue, etc.) only when interactivity is needed
- Follow Islands Architecture - minimize client-side JavaScript
- Use Astro's built-in features (Content Collections, Image optimization)

## Documentation Standards

### Pattern Documentation

Each architectural pattern should include:

1. **Clear definition** - What is this pattern?
2. **Use cases** - When should you use it?
3. **Trade-offs** - Pros and cons
4. **Implementation examples** - Practical code samples
5. **Related patterns** - Links to similar or complementary patterns
6. **Common misconceptions** - Clarify confusion
7. **Real-world examples** - Where is this used?

### Writing Style

- **Concise but complete** - No fluff, but cover the essentials
- **Technical accuracy** - Fact-check terminology and concepts
- **Beginner-friendly** - Explain jargon when first introduced
- **Answer-engine optimized** - Use semantic HTML, clear headings, structured data
- **Examples over theory** - Show, don't just tell

### Terminology

Use consistent, industry-standard terminology:
- SSR (Server-Side Rendering)
- SSG (Static Site Generation)
- CSR (Client-Side Rendering)
- ISR (Incremental Static Regeneration)
- CDN (Content Delivery Network)
- SPA (Single Page Application)
- MPA (Multi-Page Application)

## Content Strategy

### AI-Generated Content

- It's acceptable to use Claude, Gemini, or other LLMs to generate initial content
- **ALWAYS curate and verify** AI-generated content
- Add tacit knowledge and practical insights from real experience
- Remove generic fluff and marketing speak

### Source of Truth

This project aims to be a reliable reference, so:
- Accuracy is paramount
- Include version information when relevant (e.g., "as of 2024")
- Link to authoritative sources
- Acknowledge when something is opinion vs. fact

## Git Commit Conventions

Use conventional commits format:

```
type(scope): subject

body (optional)
```

Types:
- `feat:` - New feature or content
- `fix:` - Bug fix or correction
- `docs:` - Documentation changes
- `style:` - Formatting, Biome config
- `refactor:` - Code refactoring
- `content:` - Pattern documentation updates
- `chore:` - Dependencies, config, tooling

Examples:
- `feat(patterns): add SSR vs SSG comparison`
- `docs(readme): update installation instructions`
- `content(cdn): clarify edge computing section`

## Package Management

- **ALWAYS use pnpm**, never npm or yarn
- Lock file: `pnpm-lock.yaml`
- Commands:
  - `pnpm install` - Install dependencies
  - `pnpm add <package>` - Add dependency
  - `pnpm add -D <package>` - Add dev dependency
  - `pnpm remove <package>` - Remove dependency

## Testing & Quality

- Prefer built-in TypeScript checking
- Use Biome for linting and formatting
- Test builds before committing: `pnpm build`
- Verify content renders correctly: `pnpm preview`

## Accessibility

- Semantic HTML is required
- Include proper ARIA labels where needed
- Ensure keyboard navigation works
- Use sufficient color contrast
- Provide alt text for images

## Performance

- Optimize images (use Astro's Image component)
- Minimize client-side JavaScript
- Leverage Astro's partial hydration
- Consider edge rendering for dynamic content
- Monitor bundle size

## When Unsure

1. Check existing code for patterns
2. Refer to Astro documentation
3. Follow the principle of least surprise
4. Ask for clarification rather than guessing
5. Prefer simpler solutions over complex ones

## Project-Specific Notes

- This is a **study project** - exploration and experimentation are encouraged
- Balance **educational value** with **technical accuracy**
- Think about **both human readers and AI answer engines** as the audience
- The goal is to **clarify confusion** around web architecture patterns, not add to it

---

*This document evolves with the project. When patterns emerge or standards are established, update this file.*