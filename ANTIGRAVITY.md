# Design Improvement Suggestions — kankonnil007.github.io

*Note: All improvements have been implemented across `index.html`, `about.html`, `skills.html`, `projects.html`, `contact.html`, `style.css`, and `script.js`.*

## 1. Hero Section
- [x] Add a short, specific tagline under "I am an ECE student..." — one-line value proposition ("*Engineering smart systems at the intersection of embedded hardware, machine learning pipelines, and modern software.*").
- [x] Add a downloadable resume/CV button next to "View My Work" / "Contact Me" ("View CV & Credentials").
- [x] Ensure the hero image/avatar has proper alt text and is hosted locally (`assets/profile.png`) with remote fallback to avoid GitHub rate-limiting.

## 2. About Me Section
- [x] The stat blocks ("ECE Major", "15 Repositories", "36 Stars", "KUET University") equipped with intuitive icons for fast scanning.
- [x] Repo/star counts pulled dynamically via the GitHub API (`https://api.github.com/users/KankonNil007`) with animated count-up and graceful static fallback.

## 3. Navigation
- [x] Visible "active page" indicator added (`.nav-link.active`) across all 5 pages.
- [x] Sticky/fixed header on scroll with glassmorphism backdrop blur across all pages.

## 4. What I Do / Top Skills
- [x] Harmonized sections into an integrated "Skills & Focus Areas" showcase with proficiency indicators (Core / Advanced / Applied).
- [x] Skill cards styled with icons, distinct categories, and clear proficiency badges.

## 5. Featured Projects
- [x] Project cards style tech stack with distinct color-coded pill/badge components (`.badge-python`, `.badge-c`, `.badge-web`, `.badge-ml`, `.badge-hardware`, etc.).
- [x] "Heart Disease Prediction" demo link includes notice badge regarding Render cloud free-tier wake-up time.
- [x] Consistent badge styling (live status with pulse dots, star count badges) applied across project cards.
- [x] Added rich visual preview headers for each project card and expanded catalog to 9+ repositories on `projects.html` with interactive filter tabs.

## 6. Footer
- [x] Footer streamlined with essential contact info, direct socials, and clean navigation.
- [x] Dynamic copyright year (`new Date().getFullYear()`) auto-updates dynamically.

## 7. Color & Background — Grounded ECE Aesthetic
- [x] Grounded palette in authentic ECE / Electronics & Machine Learning aesthetics:
  - Deep PCB charcoal & matte slate navy canvas (`#080c14`, `#0d1424`, `#111a2e`).
  - Electric Phosphor Cyan (`#00f0ff`), Signal Emerald (`#10b981`), and Copper/Amber trace accents (`#f59e0b`).
  - Subtle electronic circuit/schematic grid pattern overlay for depth.
  - Strict WCAG AA contrast compliance and panel differentiation.

## 8. General / Cross-Page
- [x] Color contrast meets WCAG AA guidelines for high readability.
- [x] Fully responsive mobile layouts with smooth hamburger menu, touch-friendly tap targets (>44px), and flexible grids.
- [x] Open Graph & Twitter meta tags (`og:title`, `og:image`, `og:description`, `twitter:card`, etc.) on all pages.
- [x] Favicon links verified and embedded.
- [x] Performance-friendly scroll-triggered animations via `IntersectionObserver`.

## 9. Content Polish
- [x] Taglines varied across Hero and Footer to eliminate repetitive phrasing.
- [x] Interactive contact form with FormSubmit API integration, instant validation, feedback alerts, and direct mailto quick-action button.