# Kankon Mondal — Modern Engineering Portfolio

Modern personal developer and engineering portfolio of **Kankon Mondal**, an Electronics & Communication Engineering (ECE) undergraduate student at **KUET (Khulna University of Engineering & Technology)**, Bangladesh.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom dark engineering theme & Glassmorphism
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) & [Inter](https://fonts.google.com/specimen/Inter) via `next/font/google`
- **Deployment Ready**: GitHub Pages (Static Export) / Vercel / Node.js

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.17+ or v20+ / v22+ / v24+
- **npm** (or `pnpm` / `yarn` / `bun`)

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio live with Hot-Module-Replacement.

### 3. Build for Production

```bash
npm run build
```

This generates an optimized production bundle with statically pre-rendered routes.

### 4. Run the Production Build Locally

```bash
npm run start
```

---

## 💻 Featured Projects Showcased

| Project | Domain | Technologies | Links |
| :--- | :--- | :--- | :--- |
| **E-Lab Interactive Laboratory** | ECE Simulation | TypeScript, React, Vite, KaTeX, Recharts | [GitHub](https://github.com/KankonNil007/E-Lab) • [Live Demo](https://kankonnil007.github.io/E-Lab/) |
| **GreenSort Waste Classifier** | Deep Learning / CV | TensorFlow, Keras, FastAPI, Render | [GitHub](https://github.com/KankonNil007/GreenSort-Waste-Classifier) • [Live App](https://greensort-waste-classifier.onrender.com/) • [API Docs](https://greensort-waste-classifier.onrender.com/docs) |
| **KUET-ECE Hub** | Web Platform | HTML5, CSS3, JavaScript | [GitHub](https://github.com/KankonNil007/KUET-ECE) • [Live Demo](https://kankonnil007.github.io/KUET-ECE/) |
| **BUP CSE Fest Hackathon API** | Backend / Concurrency | Python, FastAPI, Docker, Locks, ACID | [GitHub (Contributor)](https://github.com/tahfimism/bup-cse-fest-preli) |
| **Heart Disease Prediction** | Machine Learning | Python, Scikit-Learn, Pandas, Render | [GitHub](https://github.com/KankonNil007/Heart-Disease-Prediction) • [Live App](https://heart-disease-prediction-z7ub.onrender.com) |
| **CS50x CS Solutions** | Computer Science | C, Python, SQL, DSA | [GitHub (⭐ 29)](https://github.com/KankonNil007/CS50x-2026) |
| **Introduction to FastAPI** | Backend APIs | FastAPI, Pydantic, OpenAPI | [GitHub](https://github.com/KankonNil007/Introduction-to-FastAPI) |
| **Machine Learning Journey** | Data Science / ML | Jupyter, Math Intuition, Scikit-Learn | [GitHub](https://github.com/KankonNil007/Machine-Learning-Journey) |
| **Applied Python Data Viz** | Data Science | Matplotlib, Pandas | [GitHub](https://github.com/KankonNil007/Applied-Python-Data-Visualization) |
| **LeetCode DSA Solutions** | Algorithms | Python, Data Structures | [GitHub](https://github.com/KankonNil007/LeetCode-Problems) |
| **KUET CSE 1210 Course** | Systems / C | C Language, Pointers, File I/O | [GitHub](https://github.com/KankonNil007/CSE-1210-Course-KUET) |
| **Arduino Starter & Sensors** | Embedded / IoT | Microcontrollers, Proteus, C++ | [GitHub](https://github.com/KankonNil007/Arduino-Starter-Projects) |
| **Engineering CAD & SolidWorks** | CAD / Modeling | SolidWorks, 3D Assemblies, Schematics | Portfolio Showcase |

---

## 🎓 Verified Credentials

- 📜 **Machine Learning Specialization** – DeepLearning.AI & Stanford Online via Coursera • [Verify](https://coursera.org/verify/specialization/RNYC6Q9U9GOO)
- 📜 **Python for Data Science, AI & Development** – IBM via Coursera • [Verify](https://coursera.org/verify/OO2WDVEV3CJC)
- 📜 **Applied Plotting, Charting & Data Representation in Python** – University of Michigan via Coursera • [Verify](https://coursera.org/verify/3RBFUF5AD9NI)
- 📜 **Introduction to Data Science in Python** – University of Michigan via Coursera • [Verify](https://coursera.org/verify/MHM6FC476N4F)
- 📜 **CS50x: Introduction to Computer Science** – Harvard University • [Verify](https://cs50.harvard.edu/certificates/658c719e-59a7-40a3-a2e9-f0b33d38dd83)

---

## 📂 Project Structure

```text
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.ts         # Tailwind design tokens & dark theme
├── postcss.config.mjs         # PostCSS configuration
├── next.config.ts             # Next.js configuration
├── public/
│   ├── favicon.ico
│   └── assets/                # Certificates, avatar & images
└── src/
    ├── app/
    │   ├── layout.tsx         # Root layout with fonts & metadata
    │   ├── globals.css        # Glassmorphism, animations, mesh styling
    │   └── page.tsx           # Assembled single-page application
    ├── components/
    │   ├── Navbar.tsx         # Sticky glass header with mobile drawer
    │   ├── Hero.tsx           # Typewriter, live GitHub stats & avatar card
    │   ├── About.tsx          # Engineering philosophy, metrics & focus areas
    │   ├── Projects.tsx       # Filterable category cards & architecture notes
    │   ├── Skills.tsx         # Domain skill cards with proficiency tiers
    │   ├── EducationCertifications.tsx  # Timeline & certificate lightbox
    │   ├── CurrentlyExploring.tsx       # Active roadmap & learning frontiers
    │   ├── Contact.tsx        # AJAX form, mailto fallback & FAQ accordion
    │   ├── ResumeModal.tsx    # Curriculum Vitae viewer & PDF printer
    │   ├── Footer.tsx         # Footer with social links & year
    │   └── Icon.tsx           # Dynamic Lucide icon mapper
    ├── data/
    │   └── portfolioData.ts   # Central typed data store
    ├── types/
    │   └── portfolio.ts       # TypeScript interfaces
    └── lib/
        └── utils.ts           # Styling utilities (clsx + twMerge)
```

---

## 🔗 Connect

- **GitHub**: [@KankonNil007](https://github.com/KankonNil007/)
- **LinkedIn**: [kankon-mondal](https://www.linkedin.com/in/kankon-mondal/)
- **Email**: [kankonmondal89@gmail.com](mailto:kankonmondal89@gmail.com)
- **Location**: Khulna, Bangladesh

---

_Built with modern engineering standards by Kankon Mondal — 2026_
