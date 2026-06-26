# Synapse AI Landing Page

> "Automate every workflow before coffee gets cold."

A premium, high-performance SaaS product landing page for **Synapse AI** built with Next.js (App Router), JavaScript, and Vanilla CSS. The design system features a dark, warm technical aesthetic ("Synapse Technical Warmth"), blending monospaced typography, subtle glow highlights, 3D CSS dashboard translations, and fully responsive layouts.

---

## 🚀 Live Demo & Screenshots

*   **Live Demo:** [Deploy to Vercel / GitHub Pages placeholder](#)
*   **Screenshots:** *(Placeholders for dashboard visuals and pricing toggles)*

---

## ✨ Features

*   **Dynamic Loader:** A terminal-style developer entrance screen showcasing progress tracking and automated log loading.
*   **Interactive 3D Dashboard:** A floating web portal container (`transform: rotateX(12deg) rotateY(-6deg)`) containing live metrics, a mini SVG line graph, active thread meters, and glowing dashboard connection lines.
*   **Precision Bento Grid:**
    *   *AI Workflows:* Interactive flowchart nodes displaying logic mapping.
    *   *Real-time Metrics:* A graph displaying dynamic edge performance throughput.
    *   *Robust API & Team Sync:* High-fidelity code panels and active collaborator details.
    *   *Responsive Bento-to-Accordion:* Converts seamlessly into a clean vertical Accordion on mobile displays (`< 768px`) for maximum legibility.
*   **Automation Timeline:** A detailed vertical sequencing stepper highlighting triggers, synthesis, local VPC caching, CDN deployments, and notification payloads.
*   **Currency & Cycle Pricing Matrix:**
    *   *Multi-currency Support:* Easily switch price amounts between **USD**, **EUR**, and **INR**.
    *   *Flexible Billing Toggles:* Instantly swap between Monthly and Annual billing cycles.
    *   *Dynamic Computations:* Dynamically calculates the 20% annual discount rate using standard functional models without hardcoding billing amounts.
*   **CSS-Only Accordion FAQ:** Uses native `<details>` and `<summary>` styling with smooth hover transitions, removing dependency on external libraries.
*   **Grid CTA:** A call-to-action signup screen featuring a moving grid background animation and input focus glows.

---

## 🛠️ Tech Stack

*   **Framework:** Next.js (App Router)
*   **Logic:** JavaScript (ES6+), React hooks (Client Components minimal integration)
*   **Styling:** Vanilla CSS, Google Fonts (**JetBrains Mono** for technical headers, **Inter** for readable body text)
*   **Icons & Assets:** Vector SVGs (stored in `public/assets/` folder)

---

## 📂 Project Structure

```
d:/FB_Battle/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Design system variables, animations, overrides
│   ├── layout.js            # Base page wrapper & SEO Metadata configurations
│   └── page.js              # Page assembler incorporating all components
├── components/
│   ├── Loader.js            # Progress loader
│   ├── Navbar.js            # Sticky navigation
│   ├── Hero.js              # Header text & 3D floating dashboard
│   ├── Logos.js             # Partner scrolling marquee
│   ├── Bento.js             # Responsive Bento grid / Mobile Accordion
│   ├── Timeline.js          # Choreographed step sequencer
│   ├── Pricing.js           # Multi-currency matrix
│   ├── Testimonials.js      # Glassmorphic user feedbacks
│   ├── FAQ.js               # CSS accordion lists
│   ├── CTA.js               # Animated signup screen
│   └── Footer.js            # Operational systems footer
├── public/
│   └── assets/              # Inline and background SVG resources
├── package.json
└── README.md
```

---

## 📦 Installation

To download packages and configure the project locally, run:

```bash
npm install
```

## 💻 Running Locally

Start the development server with Hot Module Reloading:

```bash
npm run dev
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

## 🏗️ Build Commands

Create an optimized static HTML/JS compilation for production deployment:

```bash
npm run build
```

Verify build files compile warning-free and inspect resource sizes.

---

## 📈 Performance & SEO Highlights

*   **Server Component Delivery:** Sections are rendered statically where possible to minimize JavaScript bundle sizes.
*   **SEO Optimization:** Fully implements the Next.js Metadata API with description, title tags, keywords, and semantic HTML5 sections.
*   **Pure CSS Animation Focus:** All 3D tilt effects, marquee scrolling, glows, and card float keyframes use hardware-accelerated CSS properties to maximize framerate performance.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE details for info.
