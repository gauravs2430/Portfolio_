# 🚀 Gaurav Soni — Personal Portfolio

A modern, animated, single-page portfolio website built with vanilla HTML, CSS, and JavaScript — no frontend framework. Designed to feel like a premium SaaS landing page with smooth scroll animations, dynamic section reveals, and a dark-themed aesthetic.

---

## 🌐 Live Preview

> Run locally: `python3 -m http.server 8080` → open [http://localhost:8080](http://localhost:8080)

---

## 📌 Sections

| Section | Description |
|---|---|
| **Home** | Hero section with typewriter animation and floating blob effects |
| **About** | Bio, quick stats (projects, experience, coffee count 😄), and tech stack highlights |
| **Skills** | Visual skill bars and icon grid — Frontend, Backend, Languages, Tools |
| **Projects** | Showcase of featured projects with tech tags and GitHub/live links |
| **Contact** | Contact form and social links |

---

## 🛠️ Tech Stack

### Core
| Technology | Role |
|---|---|
| **HTML5** | Semantic structure and single-page layout |
| **CSS3** | Custom styling, animations, aurora effects, 3D perspective |
| **Vanilla JavaScript** | DOM manipulation, scroll logic, animations |

### Styling Libraries
| Library | Version | Purpose |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com/) | v2.2.19 + v4.x CLI | Utility-first CSS classes (CDN + local build) |
| [Font Awesome](https://fontawesome.com/) | 6.4.0 | Icons throughout the site |
| [Devicon](https://devicon.dev/) | v2.15.1 | Tech stack SVG icons in Skills section |
| [Animate.css](https://animate.style/) | 4.1.1 | CSS animation utility classes |

### Animation Libraries
| Library | Version | Purpose |
|---|---|---|
| [GSAP](https://greensock.com/gsap/) | 3.11.4 | Hero reveal, smooth scroll, staggered section animations |
| [GSAP ScrollToPlugin](https://greensock.com/scrolltoplugin/) | 3.11.4 | Programmatic scroll with easing (`power3.inOut`) |
| [AOS](https://michalsnik.github.io/aos/) | 2.3.1 | Animate-on-scroll for general elements |

---

## 📁 Project Structure

```
Portfolio_/
├── index.html              # Main single-page HTML file
├── package.json            # Node project config (Tailwind CLI)
│
├── css/
│   ├── aurora.css          # Aurora/gradient background effects
│   ├── style3D.css         # 3D hover effects, blobs, celestial animations
│   ├── skills.css          # Skills section layout and bar animations
│   └── projects.css        # Project card styles and hover effects
│
├── js/
│   ├── script.js           # Core logic: scroll, nav tracking, section reveals
│   ├── skills.js           # Skill bar animations and icon effects
│   ├── projects.js         # Project card rendering and interactions
│   └── aurora.js           # Aurora background particle/effect logic
│
├── src/
│   ├── input.css           # Tailwind source input
│   └── output.css          # Tailwind compiled output
│
├── json/                   # JSON data files (projects, etc.)
├── jpg/ & png/             # Image assets
└── pdf/
    └── Resume.pdf          # Downloadable resume
```

---

## ✨ Key Features

- **Smooth Scroll Navigation** — GSAP-powered scrolling with `power3.inOut` easing when clicking header nav links
- **Active Nav Indicator** — Navigation link highlights automatically as you scroll through sections using `IntersectionObserver`
- **Section Reveal Animations** — Elements fade in with `opacity: 0→1`, `translateY: 40px→0`, and `blur: 6px→0` with 0.1s stagger
- **Typewriter Effect** — Custom JS typewriter cycling through roles
- **Aurora Background** — Animated canvas/CSS aurora effect on the hero
- **Skill Bars** — Width-animated progress bars triggered on scroll
- **3D Hover Effects** — CSS perspective transforms on cards and the logo
- **Floating Blobs** — Animated gradient blobs as hero background decoration
- **Responsive Design** — Mobile menu with hamburger toggle, responsive grid layouts
- **Resume Download** — Direct PDF download via the About section button

---

## 🧠 Skills Showcased

**Frontend:** HTML5, CSS3, JavaScript, React.js  
**Backend:** Node.js, Express.js, MongoDB, MySQL  
**Languages:** C, C++, Python, Java  
**Tools:** Git, GitHub, VS Code, Figma, Postman, Docker, Linux

---

## 🗂️ Featured Projects

- **Spotify-like Audio Player** — Custom audio player with playlist support
- **Next.js E-Commerce Platform** — Full-stack e-commerce with Next.js
- **Rust Microservice API** — High-performance REST API built in Rust

---

## 🚀 Running Locally

No build step required for basic use. Just serve the files:

```bash
# Simple Python server
python3 -m http.server 8080

# Or if you have Node installed
npx serve .
```

Then visit **http://localhost:8080**

### Tailwind (if rebuilding CSS)

```bash
npm install
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

---

## 📬 Contact

Built by **Gaurav Soni** · [GitHub](https://github.com/gauravs2430)
