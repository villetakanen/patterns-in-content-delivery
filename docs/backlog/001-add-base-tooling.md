# PBI-001: Add Base Tooling

**Status:** Backlog  
**Priority:** High  
**Type:** Infrastructure

## Description

Set up the foundational development tooling for the project. This includes the core framework (Astro in SSG mode), package manager configuration (pnpm), code quality tools (Biome), and commit convention enforcement (commitlint). The site will be deployed to Netlify and optimized for performance.

## Acceptance Criteria

- [ ] Astro project initialized and configured for SSG only
  - [ ] `output: 'static'` in Astro config
  - [ ] No SSR/hybrid rendering enabled
- [ ] pnpm configured as the package manager
  - [ ] `.npmrc` configured to enforce pnpm usage
  - [ ] `pnpm-lock.yaml` committed
- [ ] Biome set up for linting and formatting
  - [ ] `biome.json` configuration file created
  - [ ] Formatting rules defined
  - [ ] Linting rules defined
  - [ ] Scripts added to `package.json` (`check`, `format`, `lint`)
- [ ] commitlint configured
  - [ ] `.commitlintrc.json` or `commitlint.config.js` created
  - [ ] Husky hooks set up for pre-commit and commit-msg
  - [ ] Conventional commit format enforced
- [ ] TypeScript configured
  - [ ] `tsconfig.json` properly set up
  - [ ] Strict mode enabled
- [ ] Basic project scripts functional
  - [ ] `pnpm dev` - Start development server
  - [ ] `pnpm build` - Build for production
  - [ ] `pnpm preview` - Preview production build
  - [ ] `pnpm check` - Run Biome checks
- [ ] `.gitignore` properly configured for Astro/Node.js
- [ ] `src/data/books/` directory structure created for content
- [ ] Netlify configuration added
  - [ ] `netlify.toml` created with build settings
  - [ ] Build command and publish directory configured
  - [ ] Performance optimizations enabled (compression, asset optimization)

## Tasks

1. Initialize Astro project
   - Run `pnpm create astro@latest`
   - Choose minimal template
   - Configure TypeScript strict mode
   - Set `output: 'static'` in `astro.config.mjs` (SSG only)
   - Create `src/data/books/` directory for article content

2. Configure pnpm
   - Create `.npmrc` with `engine-strict=true`
   - Add engines field in `package.json`

3. Set up Biome
   - Install Biome: `pnpm add -D @biomejs/biome`
   - Initialize config: `pnpm biome init`
   - Configure formatting and linting rules
   - Add npm scripts

4. Configure commitlint
   - Install commitlint and conventional config
   - Install Husky for git hooks
   - Set up commit-msg hook
   - Test with example commits

5. Verify setup
   - Test all npm scripts
   - Ensure Biome runs successfully
   - Test commit message validation
   - Build project successfully
   - Create static build output

6. Configure Netlify
   - Create `netlify.toml`
   - Set build command and publish directory
   - Enable asset optimization
   - Configure caching headers

## Technical Notes

### Biome Configuration

Use Biome instead of ESLint + Prettier for:
- Faster performance (Rust-based)
- Single tool for linting and formatting
- Better defaults for modern JavaScript/TypeScript

### commitlint Configuration

Use conventional commits format:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation
- `content:` - Pattern documentation
- `chore:` - Tooling, dependencies
- `style:` - Formatting
- `refactor:` - Code refactoring

### Astro SSG Configuration

Set in `astro.config.mjs`:
```js
export default defineConfig({
  output: 'static', // SSG only, no server/hybrid
  // Additional performance optimizations
});
```

### Netlify Configuration

Create `netlify.toml`:
```toml
[build]
  command = "pnpm build"
  publish = "dist"

[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

### Content Structure

Articles will be stored in:
```
src/data/books/
├── pattern-name-1.md
├── pattern-name-2.md
└── ...
```

### pnpm Enforcement

Add to `.npmrc`:
```
engine-strict=true
```

Add to `package.json`:
```json
"engines": {
  "node": ">=18.0.0",
  "pnpm": ">=8.0.0",
  "npm": "please-use-pnpm",
  "yarn": "please-use-pnpm"
}
```

## Dependencies

None - This is the first infrastructure task.

## Definition of Done

- All acceptance criteria met
- Project builds successfully
- Development server runs without errors
- Biome checks pass
- Commit message validation works
- Documentation updated (if needed)
- Changes committed using conventional commit format

## Estimated Effort

3-4 hours

## References

- [Astro Documentation](https://docs.astro.build/)
- [Biome Documentation](https://biomejs.dev/)
- [commitlint Documentation](https://commitlint.js.org/)
- [pnpm Documentation](https://pnpm.io/)
- [Netlify Configuration](https://docs.netlify.com/configure-builds/file-based-configuration/)
- [Astro SSG Guide](https://docs.astro.build/en/guides/deploy/netlify/)