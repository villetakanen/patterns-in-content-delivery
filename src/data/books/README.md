# Pattern Documentation

This directory contains the pattern documentation articles for the project. Each article is a Markdown file that documents a specific web architecture or content delivery pattern.

## File Naming Convention

Use kebab-case for filenames:
- `static-site-generation.md`
- `server-side-rendering.md`
- `islands-architecture.md`
- `content-delivery-networks.md`

## Article Structure

Each pattern article should include:

1. **Title** - Clear, descriptive name of the pattern
2. **Definition** - What is this pattern?
3. **Use Cases** - When should you use it?
4. **How It Works** - Technical explanation
5. **Pros & Cons** - Trade-offs and considerations
6. **Implementation Example** - Practical code samples
7. **Related Patterns** - Links to complementary patterns
8. **Common Misconceptions** - Clarify confusion
9. **Real-World Examples** - Where is this used in production?
10. **References** - Links to authoritative sources

## Front Matter (Optional)

You can include YAML front matter for metadata:

```yaml
---
title: "Static Site Generation (SSG)"
category: "Content Delivery"
tags: ["performance", "jamstack", "pre-rendering"]
date: 2024-11-20
updated: 2024-11-20
---
```

## Writing Guidelines

- **Be concise but complete** - No fluff, cover essentials
- **Use examples** - Show, don't just tell
- **Clarify jargon** - Explain technical terms
- **Cite sources** - Link to authoritative documentation
- **Stay current** - Note when information may change
- **Think dual-audience** - Optimize for both humans and AI answer engines

## Content Generation

- AI-generated content (Claude, Gemini) is acceptable as a starting point
- **MUST be curated** - Verify accuracy, add practical insights
- Add tacit knowledge from real-world experience
- Remove marketing speak and generic content

---

Articles will be processed by the Astro build system and rendered as part of the static site.