# Personal Website Redesign — Design Spec

**Date:** 2026-04-07
**Goal:** Replace Hugo-based academic site with a hand-crafted, visually distinctive personal website that works for both academia and industry.

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Visual tone | Clean Warm | Light background, warm stone palette, amber accents, editorial typography |
| Layout | Bento Grid | Modular card grid — visually distinctive, good information density, natural easter egg spots |
| Tech stack | Plain HTML/CSS/JS | No build step, zero dependencies, GitHub Pages serves directly from branch |
| Deployment | GitHub Pages (static) | Push to `main` and it's live. No Hugo, no build workflow needed |

## File Structure

```
/
├── index.html          # Single page, all content
├── style.css           # All styles
├── main.js             # Easter eggs, smooth scroll, interactions
├── assets/
│   ├── avatar.jpeg     # Profile photo
│   └── resume_chenyiwang.pdf
├── favicon.ico
├── publications.bib    # Reference copy
├── .github/
│   └── FUNDING.yml
└── .gitignore
```

**Files to remove:** All Hugo infrastructure — `config/`, `content/`, `go.mod`, `go.sum`, `hugo_stats.json`, `hugoblox.yaml`, `netlify.toml`, `layouts/`, `resources/`, `public/`, `assets/media/`, `themes/`, `.hugo_build.lock`, `manual.bib`, `.github/workflows/publish.yaml`, `.github/workflows/import-publications.yml`, `.github/workflows/updater-wip.yml`.

## Page Structure

### Navigation

Sticky top bar:
- Left: "Chenyi Wang" in serif font (Georgia)
- Right: About | Papers | Service | CV ↓ (button style, downloads PDF)
- Smooth-scroll to corresponding sections on click

### Bento Grid (4-column on desktop)

**Row 1: Bio (2col) + Education (1col) + Photo (1col)**

- **Bio card:** Name with Chinese characters, subtitle "PhD Candidate · University of Arizona", condensed about text, research interest tags (amber pills), social links row (Email, GitHub, LinkedIn, Scholar, ORCID)
- **Education card:** Three degrees stacked — PhD ECE (UofA, 2023–), MA Statistics (Columbia, 4.0), BSc Stats & Math (UMN, 3.93)
- **Photo card:** `avatar.jpeg`, rounded corners, object-fit cover

**Row 2: Papers (2col) + Awards (1col) + Easter Egg (1col)**

- **Papers card:** 2×2 internal grid. Each paper has venue badge (amber for first-author, gray for co-author), title, abbreviated author list. Papers link to their URLs. First-author papers highlighted with amber left border.
  - AAAI 2026 — CP-FREEZER
  - USENIX Security 2025 — From Threat to Trust
  - IEEE S&P 2025 — Investigating Physical Latency Attacks
  - ACSAC 2024 — Physical ID-Transfer Attacks
- **Awards card:** Compact list with emoji prefixes — Herbold Fellowship, USENIX Travel Grant, GPSC Travel Grant, Phi Beta Kappa, Columbia ASA JSM
- **Easter Egg card:** Warm gradient background (#fef3c7 → #fff7ed), cactus emoji, "Beyond Research" label, "14ers · Philosophy · ?" hint, "click me..." prompt. On click: expands or flips to reveal personal interests content (hiking summits, philosophy interests, fun facts)

**Row 3: Service (2col) + Teaching & Reviewer (2col)**

- **Service card:** Two-column internal layout. Left: Program Committee (USENIX Security AE '26, VehicleSec '26, NDSS Poster '26). Right: External Reviewer (USENIX Security '23 '24, ACM CCS '23 '24 '25, VehicleSec '23)
- **Teaching & Reviewer card:** Two-column internal layout. Left: Teaching (ECE 471/571, STAT 1101W, STAT GR5203 with institutions). Right: Reviewer (AAAI '25, IEEE IoT '25, TIFS '24, TCPS '25, ICC '25, ICCCN '23)

### Responsive Behavior

- **≥1024px:** 4-column grid as described
- **768–1023px:** 2-column grid, cards reflow naturally
- **≤767px:** Single column stack — Bio → Education → Photo → Papers → Awards → Easter Egg → Service → Teaching/Reviewer

## Design Tokens

```css
/* Colors */
--color-bg: #fafaf9;          /* stone-50 */
--color-surface: #ffffff;
--color-border: #e7e5e4;      /* stone-200 */
--color-text: #1c1917;        /* stone-900 */
--color-text-secondary: #57534e; /* stone-600 */
--color-text-muted: #a8a29e;  /* stone-400 */
--color-accent: #d97706;      /* amber-600 */
--color-accent-bg: #fef3c7;   /* amber-100 */
--color-accent-text: #92400e; /* amber-800 */

/* Typography */
--font-serif: Georgia, 'Times New Roman', serif;
--font-sans: system-ui, -apple-system, sans-serif;

/* Spacing */
--grid-gap: 12px;
--card-padding: 20px;
--card-radius: 12px;

/* Section labels */
Font: system-ui, 10px uppercase, letter-spacing 1px, color amber-600
```

## Interactions

- **Smooth scroll:** Nav links scroll to section anchors
- **Card hover:** Subtle lift (translateY -2px) + shadow increase on paper cards
- **Paper links:** Each paper title is a link to its URL, hover underline
- **CV button:** Downloads `assets/resume_chenyiwang.pdf`
- **Easter egg card:** Click triggers expansion or card flip animation revealing personal content
- **Social links:** Icon-style links with hover color change

## Easter Egg Ideas

The 🌵 card is the primary easter egg surface. Implementation options (pick one during build):
1. **Card flip:** CSS 3D transform, back face reveals hiking photos / summit list / a philosophical quote
2. **Card expand:** Grows to overlay neighboring cards with an animation, shows richer content
3. **Konami code:** Hidden keyboard sequence triggers a site-wide visual effect (desert theme, falling cacti, etc.)

## SEO & Meta

```html
<title>Chenyi Wang — PhD Candidate, University of Arizona</title>
<meta name="description" content="PhD candidate in ECE at University of Arizona researching AI/ML security, cyber-physical systems, and autonomous vehicles.">
<meta property="og:title" content="Chenyi Wang — Researcher">
<meta property="og:description" content="AI/ML Security · CPS Security · Autonomous Vehicles">
<meta property="og:image" content="assets/avatar.jpeg">
```

## Analytics

Preserve Google Analytics: `G-Q4RFT3CEL2`

## Content to Drop

All Hugo Blox boilerplate:
- 5 placeholder blog posts (data-visualization, get-started, project-management, second-brain, teach-courses)
- 2 placeholder teaching courses (python, js tutorials)
- 3 placeholder projects (pandas, pytorch, scikit links)
- 1 example event
- Certifications section (Coursera/edX/DataCamp — generic, not relevant to brand)

## Content to Preserve

All real academic content from `content/authors/admin/_index.md` and publication entries. Full about text, awards, service roles, teaching positions, social links, and the CV PDF.
