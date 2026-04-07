# Personal Website Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Hugo-based academic site with a hand-crafted bento-grid personal website using plain HTML/CSS/JS, deployed on GitHub Pages.

**Architecture:** Single `index.html` page with a 4-column responsive bento grid. Styles in `style.css` using CSS custom properties for the Clean Warm design tokens. Interactions in `main.js` — smooth scroll, card hover, easter egg. No build step; GitHub Pages serves static files directly from `main` branch.

**Tech Stack:** HTML5, CSS3 (Grid, Custom Properties, Transitions), Vanilla JavaScript

**Spec:** `docs/superpowers/specs/2026-04-07-website-redesign-design.md`

---

### Task 1: Scaffold file structure and migrate assets

**Files:**
- Create: `assets/` directory
- Move: `content/authors/admin/avatar.jpeg` → `assets/avatar.jpeg`
- Move: `static/uploads/resume_chenyiwang.pdf` → `assets/resume_chenyiwang.pdf`
- Move: `static/favicon.ico` → `favicon.ico` (root)
- Keep: `publications.bib`, `.github/FUNDING.yml`, `LICENSE.md`, `docs/`

- [ ] **Step 1: Create assets directory and copy files**

```bash
mkdir -p assets
cp content/authors/admin/avatar.jpeg assets/avatar.jpeg
cp static/uploads/resume_chenyiwang.pdf assets/resume_chenyiwang.pdf
cp static/favicon.ico ./favicon.ico
```

- [ ] **Step 2: Remove Hugo infrastructure**

```bash
rm -rf config/ content/ layouts/ resources/ public/ themes/
rm -f go.mod go.sum hugo_stats.json hugoblox.yaml netlify.toml manual.bib .hugo_build.lock hugo_stats.json
rm -f static/uploads/resume.pdf static/uploads/resume_chenyiwang_old.pdf
rm -rf static/uploads
rmdir static 2>/dev/null || true
rm -rf .github/workflows/publish.yaml .github/workflows/import-publications.yml .github/workflows/updater-wip.yml
rmdir .github/workflows 2>/dev/null || true
```

- [ ] **Step 3: Update .gitignore**

Create `.gitignore`:

```
.superpowers/
.DS_Store
*.swp
```

- [ ] **Step 4: Verify file structure**

```bash
find . -not -path './.git/*' -not -path './.superpowers/*' -not -path './docs/*' | sort
```

Expected output should show:
```
.
./.github
./.github/FUNDING.yml
./.gitignore
./LICENSE.md
./assets
./assets/avatar.jpeg
./assets/resume_chenyiwang.pdf
./favicon.ico
./publications.bib
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: remove Hugo infrastructure, scaffold new file structure"
```

---

### Task 2: Create index.html with full content

**Files:**
- Create: `index.html`

- [ ] **Step 1: Write index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chenyi Wang — PhD Candidate, University of Arizona</title>
  <meta name="description" content="PhD candidate in ECE at University of Arizona researching AI/ML security, cyber-physical systems, and autonomous vehicles.">
  <meta property="og:title" content="Chenyi Wang — Researcher">
  <meta property="og:description" content="AI/ML Security · CPS Security · Autonomous Vehicles">
  <meta property="og:image" content="assets/avatar.jpeg">
  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="style.css">
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q4RFT3CEL2"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-Q4RFT3CEL2');
  </script>
</head>
<body>

  <!-- Navigation -->
  <nav class="nav" id="nav">
    <a href="#" class="nav-logo">Chenyi Wang</a>
    <div class="nav-links">
      <a href="#about">About</a>
      <a href="#papers">Papers</a>
      <a href="#service">Service</a>
      <a href="assets/resume_chenyiwang.pdf" class="nav-cv" download>CV ↓</a>
    </div>
  </nav>

  <!-- Bento Grid -->
  <main class="bento" id="about">

    <!-- Row 1: Bio + Education + Photo -->
    <section class="card card-bio">
      <h1>Chenyi Wang <span class="name-cn">(王晨懿)</span></h1>
      <p class="subtitle">PhD Candidate · <a href="http://wiser.arizona.edu/">University of Arizona</a></p>
      <p class="bio-text">Hello! I'm a PhD candidate at the University of Arizona's <a href="http://wiser.arizona.edu/">WiSeR Lab</a>, advised by <a href="http://wiser.arizona.edu/mingli/index.html">Dr. Ming Li, FIEEE</a>, where I'm exploring performance and security challenges in cooperative vehicular perception. My research interests and experience span machine learning, computer vision, and cybersecurity, with a broad curiosity about artificial intelligence — from its theoretical foundations to practical applications and societal implications.</p>
      <p class="bio-text">Before joining the University of Arizona in 2023, I earned my master's degree from Columbia University and completed my bachelor's degrees at the University of Minnesota, Twin Cities, with two formative years spent at the Chinese University of Hong Kong (Shenzhen).</p>
      <div class="tags">
        <span class="tag">AI/ML Security</span>
        <span class="tag">CPS Security</span>
        <span class="tag">Autonomous Vehicles</span>
      </div>
      <div class="social-links">
        <a href="mailto:chenyiw@arizona.edu" title="Email">✉ Email</a>
        <a href="https://github.com/ch3ny1" title="GitHub">GitHub</a>
        <a href="https://www.linkedin.com/in/chenyi-wang-8b171b138/" title="LinkedIn">LinkedIn</a>
        <a href="https://scholar.google.com/citations?user=OeLKJ4sAAAAJ&hl=en&oi=sra" title="Google Scholar">Scholar</a>
        <a href="https://orcid.org/0009-0005-3130-0676" title="ORCID">ORCID</a>
      </div>
    </section>

    <section class="card card-education">
      <h2 class="card-label">Education</h2>
      <div class="edu-item">
        <div class="edu-degree">PhD · ECE</div>
        <div class="edu-school">U of Arizona · 2023–</div>
      </div>
      <div class="edu-item">
        <div class="edu-degree">MA · Statistics</div>
        <div class="edu-school">Columbia University · 4.0 GPA</div>
      </div>
      <div class="edu-item">
        <div class="edu-degree">BSc · Statistics & Math</div>
        <div class="edu-school">U of Minnesota · 3.93 GPA</div>
      </div>
    </section>

    <section class="card card-photo">
      <img src="assets/avatar.jpeg" alt="Chenyi Wang" class="avatar">
    </section>

    <!-- Row 2: Papers + Awards + Easter Egg -->
    <section class="card card-papers" id="papers">
      <h2 class="card-label">Selected Papers</h2>
      <div class="papers-grid">
        <div class="paper paper-first-author">
          <span class="paper-venue venue-highlight">AAAI 2026</span>
          <a href="https://arxiv.org/abs/2508.01062" class="paper-title" target="_blank" rel="noopener">CP-FREEZER: Latency Attacks against Vehicular Cooperative Perception</a>
          <span class="paper-authors">Wang, Song, Muller, Monteuuis, Celik, Petit, Gerdes, Li</span>
        </div>
        <div class="paper paper-first-author">
          <span class="paper-venue venue-highlight">USENIX Security 2025</span>
          <a href="https://www.usenix.org/conference/usenixsecurity25/presentation/wang-chenyi" class="paper-title" target="_blank" rel="noopener">From Threat to Trust: Exploiting Attention Mechanisms for Attacks and Defenses in Cooperative Perception</a>
          <span class="paper-authors">Wang, Muller, Song, Monteuuis, Petit, Man, Gerdes, Celik, Li</span>
        </div>
        <div class="paper">
          <span class="paper-venue">IEEE S&P 2025</span>
          <a href="https://doi.ieeecomputersociety.org/10.1109/SP61157.2025.00236" class="paper-title" target="_blank" rel="noopener">Investigating Physical Latency Attacks against Camera-based Perception</a>
          <span class="paper-authors">Muller, Song, Wang, Zhan, Monteuuis, Man, Li, Gerdes, Petit, Celik</span>
        </div>
        <div class="paper">
          <span class="paper-venue">ACSAC 2024</span>
          <a href="https://doi.ieeecomputersociety.org/10.1109/ACSAC63791.2024.00080" class="paper-title" target="_blank" rel="noopener">Physical ID-Transfer Attacks against Multi-Object Tracking via Adversarial Trajectory</a>
          <span class="paper-authors">Wang, Man, Muller, Li, Celik, Gerdes, Petit</span>
        </div>
      </div>
    </section>

    <section class="card card-awards">
      <h2 class="card-label">Awards</h2>
      <ul class="awards-list">
        <li>🏆 <a href="https://news.engineering.arizona.edu/news/graduate-student-fellowships-boost-contributions-life-changing-research">Herbold Fellowship '23</a></li>
        <li>✈️ USENIX Security Travel Grant '25</li>
        <li>✈️ GPSC Student Travel Grant '25</li>
        <li>🎓 <a href="https://scholarswalk.umn.edu/chenyi-wang">Phi Beta Kappa · Scholar Walk</a></li>
        <li>📊 <a href="https://www.linkedin.com/posts/ma-in-statistics-program-columbia-university_winners-jsm-statistics-activity-6947188762925813760-vNKQ">Columbia ASA JSM '22</a></li>
      </ul>
    </section>

    <section class="card card-easter-egg" id="easter-egg">
      <div class="egg-front">
        <span class="egg-icon">🌵</span>
        <span class="egg-title">Beyond Research</span>
        <span class="egg-hint">14ers · Philosophy · ?</span>
        <span class="egg-prompt">click me...</span>
      </div>
      <div class="egg-back">
        <h2 class="card-label">Beyond Research</h2>
        <p class="egg-content">I love deep dives into philosophy and am an avid outdoor enthusiast. I've summited several of Colorado's famed 14ers, including <strong>Mt. Harvard</strong>, <strong>Mt. Yale</strong>, and <strong>Mt. Holy Cross</strong>.</p>
        <span class="egg-close">✕ close</span>
      </div>
    </section>

    <!-- Row 3: Service + Teaching/Reviewer -->
    <section class="card card-service" id="service">
      <h2 class="card-label">Academic Service</h2>
      <div class="service-grid">
        <div>
          <h3 class="service-subhead">Program Committee</h3>
          <ul class="service-list">
            <li>USENIX Security 2026 Artifact Evaluation</li>
            <li>VehicleSec 2026 Poster/Demo</li>
            <li>NDSS 2026 Poster Session</li>
          </ul>
        </div>
        <div>
          <h3 class="service-subhead">External Reviewer</h3>
          <ul class="service-list">
            <li>USENIX Security '23, '24</li>
            <li>ACM CCS '23, '24, '25</li>
            <li>VehicleSec '23</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card card-teaching-reviewer">
      <div class="service-grid">
        <div>
          <h2 class="card-label">Teaching</h2>
          <ul class="teaching-list">
            <li>
              <span class="teaching-course">ECE 471/571</span>
              <span class="teaching-detail">Info & Network Security · UofA</span>
            </li>
            <li>
              <span class="teaching-course">STAT 1101W</span>
              <span class="teaching-detail">Intro to Statistics · Columbia</span>
            </li>
            <li>
              <span class="teaching-course">STAT GR5203</span>
              <span class="teaching-detail">Probability · Columbia</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="card-label">Reviewer</h2>
          <ul class="service-list">
            <li>AAAI '25 · IEEE IoT '25</li>
            <li>IEEE TIFS '24 · TCPS '25</li>
            <li>IEEE ICC '25 · ICCCN '23</li>
          </ul>
        </div>
      </div>
    </section>

  </main>

  <footer class="footer">
    <p>© 2026 Chenyi Wang · Last updated Feb. 13, 2026</p>
  </footer>

  <script src="main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify the file renders (open in browser)**

```bash
# Open in default browser or use python server
python3 -m http.server 8000 &
echo "Open http://localhost:8000 in browser"
```

Expected: Page loads with unstyled content, all text visible, links work. No CSS yet.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add index.html with full bento grid content"
```

---

### Task 3: Create style.css — design tokens and base styles

**Files:**
- Create: `style.css`

- [ ] **Step 1: Write CSS with design tokens, reset, nav, and base layout**

```css
/* ============================================
   Design Tokens
   ============================================ */
:root {
  --color-bg: #fafaf9;
  --color-surface: #ffffff;
  --color-border: #e7e5e4;
  --color-text: #1c1917;
  --color-text-secondary: #57534e;
  --color-text-muted: #a8a29e;
  --color-accent: #d97706;
  --color-accent-bg: #fef3c7;
  --color-accent-text: #92400e;
  --color-accent-border: #fde68a;

  --font-serif: Georgia, 'Times New Roman', serif;
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  --grid-gap: 12px;
  --card-padding: 20px;
  --card-radius: 12px;

  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}

/* ============================================
   Reset & Base
   ============================================ */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-sans);
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.6;
  min-height: 100vh;
}

a {
  color: var(--color-accent);
  text-decoration: none;
  transition: color var(--duration-fast);
}

a:hover {
  color: var(--color-accent-text);
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

/* ============================================
   Navigation
   ============================================ */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: rgba(250, 250, 249, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.nav-logo {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  color: var(--color-text);
  text-decoration: none;
}

.nav-logo:hover {
  color: var(--color-accent);
}

.nav-links {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-links a {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.nav-links a:hover {
  color: var(--color-accent);
}

.nav-cv {
  border: 1px solid var(--color-accent);
  padding: 4px 14px;
  border-radius: 6px;
  color: var(--color-accent) !important;
  font-weight: 500;
  transition: background var(--duration-fast), color var(--duration-fast);
}

.nav-cv:hover {
  background: var(--color-accent);
  color: var(--color-surface) !important;
}

/* ============================================
   Bento Grid
   ============================================ */
.bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--grid-gap);
  max-width: 1100px;
  margin: 24px auto;
  padding: 0 24px;
}

/* ============================================
   Card Base
   ============================================ */
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--card-radius);
  padding: var(--card-padding);
  transition: transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}

.card-label {
  font-family: var(--font-sans);
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-accent);
  margin-bottom: 12px;
}

/* ============================================
   Bio Card
   ============================================ */
.card-bio {
  grid-column: span 2;
}

.card-bio h1 {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.2;
}

.name-cn {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.card-bio .subtitle {
  font-size: 0.875rem;
  color: var(--color-accent);
  margin-top: 4px;
  font-weight: 500;
}

.card-bio .subtitle a {
  color: inherit;
}

.bio-text {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
  margin-top: 8px;
  line-height: 1.65;
}

.bio-text a {
  font-weight: 500;
}

.tags {
  display: flex;
  gap: 6px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.6875rem;
  background: var(--color-accent-bg);
  color: var(--color-accent-text);
  padding: 3px 10px;
  border-radius: 4px;
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: 14px;
  margin-top: 12px;
}

.social-links a {
  font-size: 0.8125rem;
  color: var(--color-accent);
  font-weight: 500;
}

/* ============================================
   Education Card
   ============================================ */
.card-education {
  grid-column: span 1;
}

.edu-item {
  margin-bottom: 10px;
}

.edu-item:last-child {
  margin-bottom: 0;
}

.edu-degree {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text);
}

.edu-school {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

/* ============================================
   Photo Card
   ============================================ */
.card-photo {
  grid-column: span 1;
  padding: 0;
  overflow: hidden;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 180px;
}

/* ============================================
   Papers Card
   ============================================ */
.card-papers {
  grid-column: span 2;
}

.papers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.paper {
  padding-left: 10px;
  border-left: 2px solid var(--color-border);
}

.paper-first-author {
  border-left-color: var(--color-accent-border);
}

.paper-venue {
  font-size: 0.625rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.venue-highlight {
  color: var(--color-accent);
}

.paper-title {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.35;
  margin-top: 2px;
  transition: color var(--duration-fast);
}

.paper-title:hover {
  color: var(--color-accent);
}

.paper-authors {
  display: block;
  font-size: 0.6875rem;
  color: var(--color-text-muted);
  margin-top: 3px;
}

/* ============================================
   Awards Card
   ============================================ */
.card-awards {
  grid-column: span 1;
}

.awards-list li {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
}

.awards-list a {
  color: var(--color-text-secondary);
  text-decoration: underline;
  text-decoration-color: var(--color-border);
  text-underline-offset: 2px;
}

.awards-list a:hover {
  color: var(--color-accent);
  text-decoration-color: var(--color-accent);
}

/* ============================================
   Easter Egg Card
   ============================================ */
.card-easter-egg {
  grid-column: span 1;
  background: linear-gradient(135deg, var(--color-accent-bg), #fff7ed);
  border-color: var(--color-accent-border);
  cursor: pointer;
  position: relative;
  perspective: 600px;
  padding: 0;
  overflow: hidden;
}

.egg-front,
.egg-back {
  padding: var(--card-padding);
  backface-visibility: hidden;
  transition: transform var(--duration-normal) var(--ease-out);
}

.egg-front {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100%;
}

.egg-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.egg-title {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-accent-text);
}

.egg-hint {
  font-size: 0.75rem;
  color: #b45309;
  margin-top: 4px;
}

.egg-prompt {
  font-size: 0.6875rem;
  color: var(--color-accent);
  margin-top: 10px;
  opacity: 0.6;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

.egg-back {
  display: none;
}

.card-easter-egg.flipped .egg-front {
  display: none;
}

.card-easter-egg.flipped .egg-back {
  display: block;
}

.egg-content {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.egg-close {
  display: inline-block;
  margin-top: 12px;
  font-size: 0.75rem;
  color: var(--color-accent);
  cursor: pointer;
}

.egg-close:hover {
  color: var(--color-accent-text);
}

/* ============================================
   Service Card
   ============================================ */
.card-service {
  grid-column: span 2;
}

.service-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.service-subhead {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 6px;
}

.service-list li {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

/* ============================================
   Teaching & Reviewer Card
   ============================================ */
.card-teaching-reviewer {
  grid-column: span 2;
}

.teaching-list li {
  margin-bottom: 6px;
}

.teaching-list li:last-child {
  margin-bottom: 0;
}

.teaching-course {
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text);
}

.teaching-detail {
  display: block;
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

/* ============================================
   Footer
   ============================================ */
.footer {
  text-align: center;
  padding: 24px;
  font-size: 0.75rem;
  color: var(--color-text-muted);
  border-top: 1px solid var(--color-border);
  margin-top: 24px;
}

/* ============================================
   Hover Effects
   ============================================ */
.card-papers .paper:hover {
  transform: translateX(2px);
  transition: transform var(--duration-fast);
}

.card-easter-egg:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

/* ============================================
   Responsive: Tablet (2 columns)
   ============================================ */
@media (max-width: 1023px) {
  .bento {
    grid-template-columns: repeat(2, 1fr);
  }

  .card-bio {
    grid-column: span 2;
  }

  .card-papers {
    grid-column: span 2;
  }

  .card-service {
    grid-column: span 2;
  }

  .card-teaching-reviewer {
    grid-column: span 2;
  }
}

/* ============================================
   Responsive: Mobile (1 column)
   ============================================ */
@media (max-width: 767px) {
  .bento {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }

  .card-bio,
  .card-papers,
  .card-service,
  .card-teaching-reviewer {
    grid-column: span 1;
  }

  .papers-grid {
    grid-template-columns: 1fr;
  }

  .service-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .nav {
    padding: 10px 16px;
  }

  .nav-links {
    gap: 12px;
  }

  .nav-links a {
    font-size: 0.8125rem;
  }

  .card-photo {
    max-height: 300px;
  }
}
```

- [ ] **Step 2: Verify in browser**

Refresh http://localhost:8000. Expected: Full bento grid visible with warm stone palette, cards with borders and rounded corners, sticky nav, responsive at different widths.

- [ ] **Step 3: Commit**

```bash
git add style.css
git commit -m "feat: add style.css with bento grid layout and responsive design"
```

---

### Task 4: Create main.js — smooth scroll, easter egg, interactions

**Files:**
- Create: `main.js`

- [ ] **Step 1: Write main.js**

```javascript
(function () {
  'use strict';

  // ---- Smooth scroll for nav links ----
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Easter egg card flip ----
  var easterEgg = document.getElementById('easter-egg');
  if (easterEgg) {
    var front = easterEgg.querySelector('.egg-front');
    var closeBtn = easterEgg.querySelector('.egg-close');

    front.addEventListener('click', function () {
      easterEgg.classList.add('flipped');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        easterEgg.classList.remove('flipped');
      });
    }
  }

  // ---- Nav background on scroll ----
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        nav.style.boxShadow = '0 1px 8px rgba(0, 0, 0, 0.04)';
      } else {
        nav.style.boxShadow = 'none';
      }
    }, { passive: true });
  }
})();
```

- [ ] **Step 2: Verify in browser**

Refresh http://localhost:8000. Test:
1. Click nav links — page smooth-scrolls to sections
2. Click the 🌵 card — front hides, back content appears
3. Click "✕ close" — card returns to front
4. Scroll down — nav gets subtle shadow

- [ ] **Step 3: Commit**

```bash
git add main.js
git commit -m "feat: add main.js with smooth scroll, easter egg flip, nav shadow"
```

---

### Task 5: Configure GitHub Pages deployment

**Files:**
- Modify: GitHub repository settings (via `gh` CLI)

- [ ] **Step 1: Check current GitHub Pages configuration**

```bash
gh api repos/ch3ny1/ch3ny1.github.io/pages 2>/dev/null || echo "Pages not configured or using Actions"
```

- [ ] **Step 2: Set GitHub Pages to deploy from main branch root**

```bash
gh api repos/ch3ny1/ch3ny1.github.io/pages \
  --method PUT \
  --field source='{"branch":"main","path":"/"}' \
  2>/dev/null || \
gh api repos/ch3ny1/ch3ny1.github.io/pages \
  --method POST \
  --field source='{"branch":"main","path":"/"}' \
  2>/dev/null || \
echo "Configure manually: Settings > Pages > Source: Deploy from branch > main / root"
```

Note: If using GitHub Actions deployment currently, you may need to switch to "Deploy from a branch" in the repository Settings > Pages UI.

- [ ] **Step 3: Push to trigger deployment**

```bash
git push origin main
```

- [ ] **Step 4: Verify deployment**

```bash
echo "Site should be live at https://ch3ny1.github.io/"
echo "Check deployment status:"
gh api repos/ch3ny1/ch3ny1.github.io/pages
```

- [ ] **Step 5: Commit deployment note (if any config file was needed)**

No additional files needed — GitHub Pages serves static files from branch root by default for `*.github.io` repositories.

---

### Task 6: Final polish and visual QA

**Files:**
- Possibly modify: `style.css`, `index.html`

- [ ] **Step 1: Check all links work**

Open https://ch3ny1.github.io/ and verify:
- All 4 paper links open correct URLs in new tabs
- All award links open correct URLs
- CV download works
- Social links (email, GitHub, LinkedIn, Scholar, ORCID) all resolve
- WiSeR Lab and advisor links in bio work

- [ ] **Step 2: Test responsive breakpoints**

Use browser DevTools responsive mode:
- 1440px: 4-column grid, all cards visible
- 768px: 2-column grid, bio and papers span full width
- 375px: Single column, all content stacks vertically

- [ ] **Step 3: Test interactions**

- Nav smooth scroll to each section
- Easter egg card flip and close
- Nav shadow on scroll
- Paper hover effects

- [ ] **Step 4: Lighthouse audit**

Run Lighthouse in Chrome DevTools:
- Performance: target > 95
- Accessibility: target > 90
- SEO: target > 90
- Best Practices: target > 90

- [ ] **Step 5: Fix any issues found and commit**

```bash
git add -A
git commit -m "fix: polish and QA fixes"
git push origin main
```
