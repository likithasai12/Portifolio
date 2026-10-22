# Kovvuru Likitha Sai — Personal Portfolio

A refined, minimalist, editorial-style personal portfolio website for **Kovvuru Likitha Sai**, an aspiring Software Engineer and B.Tech student in Computer Science and Systems Engineering (CSSE) at Lendi Institute of Engineering & Technology.

Designed with intentional typography, controlled whitespace, authentic project showcases, and accessible interactions. Built strictly with vanilla web technologies—no heavy frameworks, no bloated dependencies, and no backend required.

---

## 🎨 Color Palette & Design System

The website adheres strictly to an editorial palette:

| Token Name | Hex Code | Description & Usage |
| :--- | :--- | :--- |
| **Main Background** | `#F2F1EC` | Soft Ivory — Primary page backdrop |
| **Accent** | `#617F96` | Slate Blue — Used sparingly for links, buttons, and highlights |
| **Primary Text** | `#27313A` | Deep Charcoal — Headers, lead titles, high-contrast text |
| **Secondary Surfaces** | `#E6E8E5` | Mist Grey — Subtle containers, skill badges, footer backdrop |
| **Secondary Text** | `#59636A` | Muted Grey — Body copy, supporting context, subtitles |
| **Content Surfaces** | `#FAFAF7` | Selective White — Card surfaces and focused containers |

---

## 📁 File Structure

```text
portifolio/
├── index.html         # Semantic HTML5 markup with ARIA accessibility
├── style.css          # Vanilla CSS3 design system, responsive layouts & media queries
├── script.js          # Vanilla JS: mobile navigation, scroll tracking, email copy
├── assets/
│   └── favicon.svg    # Editorial monogram SVG favicon
└── README.md          # Project documentation and deployment guide
```

---

## ✏️ How to Customize Your Details

All customizable sections contain explicit HTML comments (`<!-- EDITABLE FIELD -->`) in [index.html](file:///d:/portifolio/index.html):

### 1. Updating Your Email Address
In `index.html` around the Contact section:
- Update `href="mailto:likitha.sai.csse@gmail.com"` with your preferred email.
- Update `data-email="likitha.sai.csse@gmail.com"` on the `<button id="copy-email-btn">`.
- Update the display text inside `<a class="channel-value email-link">`.

### 2. Updating Featured Projects
Four projects are structured under Section `03 / Featured Projects`:
1. **PharmaWatch** (Healthcare & Inventory Management)
2. **CyberShield AI** (Security & Anomaly Detection)
3. **NutriLife** (Health & Daily Tracking)
4. **FinWise** (Personal Finance & Budgeting)

Each project card has clearly labeled blocks for:
- **Project Name** (`<h3 class="project-name">`)
- **Source Code Link** (`<a class="project-action-link" href="...">`)
- **Overview** (`<p class="project-description">`)
- **Problem Addressed** (`<p class="project-problem">`)
- **Key Features** (`<ul class="project-features-list">`)
- **Technologies Used** (`<div class="tech-tags">`)

### 3. Professional Profiles
- **GitHub**: Already linked to `https://github.com/likithasai12`
- **LinkedIn**: Already linked to `https://www.linkedin.com/in/kovvuru-likitha-sai-89b615388`

---

## 💻 How to Preview and Run Locally

You can preview the website locally using any standard local server:

### Option A: Using Python (Installed by default on most machines)
Open your terminal in the `portifolio` directory and run:
```bash
python -m http.server 8000
```
Then open your browser at:
`http://localhost:8000`

### Option B: Using Node.js / npx
If you have Node.js installed:
```bash
npx serve .
```

### Option C: VS Code "Live Server"
1. Open the folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and select **"Open with Live Server"**.

---

## 🚀 How to Deploy Publicly

### Option 1: Deploy on GitHub Pages (Recommended — 100% Free)

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/likithasai12/portfolio.git
   git push -u origin main
   ```
2. **Enable GitHub Pages**:
   - Go to your repository on GitHub: `https://github.com/likithasai12/portfolio`.
   - Click **Settings** (top tab) &rarr; **Pages** (left sidebar).
   - Under **Build and deployment** &rarr; **Branch**, select `main` and `/ (root)`.
   - Click **Save**.
3. **Your Live Site**:
   - GitHub will generate a public URL within 1–2 minutes:  
     `https://likithasai12.github.io/portfolio/`

---

### Option 2: Deploy on Vercel

1. **Via Vercel Web Dashboard**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New..."** &rarr; **"Project"**.
   - Select your `portfolio` GitHub repository.
   - Leave the Framework Preset as **Other** (Root directory `./`).
   - Click **Deploy**.
   - Your site will be live instantly with a free SSL certificate on a `*.vercel.app` domain.

2. **Via Vercel CLI**:
   ```bash
   npx vercel
   ```
   Follow the interactive prompts to deploy.

---

## ♿ Accessibility & Performance Highlights

- **Semantic HTML5 Elements**: Proper document outline with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- **Keyboard Navigation**: Skip-to-content link, accessible `:focus-visible` outline rings with 2px offset.
- **Mobile Menu**: Responsive hamburger toggle with `aria-expanded`, keyboard ESC dismissal, and automatic focus management.
- **Reduced Motion Support**: Fully respects `@media (prefers-reduced-motion: reduce)` preferences.
- **Privacy & Security**: All external links include `target="_blank" rel="noopener noreferrer"`.
- **Zero Exposed Secrets**: Pure client-side static code with no sensitive environment variables or keys.
