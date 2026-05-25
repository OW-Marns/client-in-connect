<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Standard Prompts

Use these two prompts in order when starting a new page component.

**Prompt 1 — Revision:**
> Check `{ComponentName}OriginalFile.jsx` and revise it into `{ComponentName}.jsx` following the process in `AGENTS.md`.

**Prompt 2 — Globals audit:**
> Check `globals.css` in this repo. What CSS can we use in this file?

---

# Source Context

Components in `app/page-components/` originate from a Figma export in a separate repo. They are pixel-perfect but rigid — not production-ready. Your role is to revise them into a single, reusable, responsive component with shared CSS.

## What to expect from the original file

- **Three separate breakpoint components** (`*Mobile`, `*Tablet`, `*Desktop`) switched by a `pickByBreakpoint()` helper
- **All styles as inline `style={{}}` objects** — no classes, no globals
- **Cards hardcoded as repeated HTML** with fixed pixel widths and `position: absolute` + hardcoded `left` values inside an oversized container
- **Pagination rendered as `<img>` tags** pulled from AWS S3 / Figma alpha URLs
- **No imports, no export**

## Revision pattern

| Original                                             | Revised                                   |
| ---------------------------------------------------- | ----------------------------------------- |
| `Mobile` + `Tablet` + `Desktop` + `pickByBreakpoint` | Single responsive component               |
| Absolute-positioned oversized container              | Swiper `Carousel` with `breakpoints` prop |
| Pagination `<img>` from S3                           | Swiper `Pagination` module                |
| Repeated hardcoded card HTML                         | `slides` array + `.map()`                 |
| Inline `style={{}}` objects                          | CSS classes + `globals.css`               |

---

# Page Component Process

Follow these steps when creating or migrating a page component (e.g. files in `app/page-components/`).

## 1. Imports

- Only import `React` when using `React.*` APIs (`useRef`, `useState`, etc.) — not needed for JSX alone with `<>` shorthand
- Import `SwiperSlide` from `swiper/react` (if using a carousel)
- Import any Swiper modules used (e.g. `Autoplay`, `Pagination`) from `swiper/modules`
- Import `Carousel` from `../components/Carousel` (if using a carousel)
- Import `{ cn }` from `../utils/cn` for conditional class names
- Import `{ formatPrice }` from `../utils/formatPrice` for price values
- Import `Image` from `next/image` for all images

## 2. Export

- Always add `export default` at the bottom of the file

## 3. Audit the local `<style>` block

- **Font rules matching a global class** → apply the global class to the element, remove from local styles
  - Body text → `c-font-body c-font-body--{size}-w{weight}-{spacing}`
  - Display/heading text → `c-font c-font--{h1–h6}`
  - Uppercase text → `c-font--uppercase`
- **Font rules with no global equivalent** → create a new global class in `globals.css` under the FONTS section, apply it to the element, remove from local styles
- **Responsive spacing (gap/padding)** → use `var(--spacer-*)` from globals, remove media query overrides from local styles
- **Hardcoded colours** → swap for CSS variables (see colour system below)
- **Repeated `color` on child elements** → set once on the parent container, let children inherit
- **What stays local** → component-specific layout, borders, and structure only

## 4. Colour system

CSS variables are defined in `globals.css` `:root`. Always use these — never hardcode `rgb()` or hex values.

| Variable                     | Value     | Use                             |
| ---------------------------- | --------- | ------------------------------- |
| `--color-primary`            | `#1E1E1E` | Primary dark text / backgrounds |
| `--color-primary-supporting` | `#2E2E2E` | Secondary dark text             |
| `--color-secondary`          | `#734137` | Accent / tag backgrounds        |
| `--color-tertiary`           | `#283B48` | Dark section backgrounds        |
| `--color-accent`             | `#EBE4DF` | Light section backgrounds       |
| `--color-base-white`         | `#FFFFFF` | White text / backgrounds        |
| `--color-base-black`         | `#000000` | Pure black text                 |

To add a new colour: define it in `:root` in `globals.css`, then reference it via `var()`.

## 5. Static data

Arrays or objects that don't depend on props or state must be defined **outside** the component function. This prevents them being recreated on every render.

```jsx
// ✅ Outside
const slides = [{ title: '...' }]

const MyComponent = () => { ... }

// ❌ Inside
const MyComponent = () => {
  const slides = [{ title: '...' }]
}
```

## 6. Images

- Use `next/image` for all images — never `<img>`
- **External URLs** (e.g. Figma S3): add the hostname to `remotePatterns` in `next.config.ts`
- **Local files** in `public/`: reference as `/filename.svg` — no import needed
- **Cover images**: use `fill` prop with a `position: relative` parent wrapper
- **Icon images**: use `width` / `height` props; override rendered size responsively via CSS class

## 7. Cleanup checklist

Run through these after every revision:

- [ ] `key` prop uses a unique field (`slide.id`, `slide.title`) — not array index `i`
- [ ] `<React.Fragment>` replaced with `<>` shorthand
- [ ] No `style={{ color: 'var(--color-primary)' }}` on individual elements — set on parent instead
- [ ] No `textTransform: 'uppercase'` inline — use `c-font--uppercase` class
- [ ] No layout props (`paddingTop`, `marginTop`, etc.) in inline styles — move to local CSS
- [ ] Static data arrays defined outside the component function
- [ ] Unused `import React` removed if no `React.*` APIs are used

## 8. Guiding principle

> Local styles own **structure and colour**. Globals own **typography, spacing scale, and colour tokens**.
