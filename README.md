# Modern Developer Portfolio

A responsive, high-performance personal portfolio built with pure **HTML5, CSS3, and modern Vanilla JavaScript (ES6+)**. Designed with rich aesthetics, glassmorphism, dynamic micro-interactions, dark/light theme support, and zero external JS runtime dependencies.

---

## 🌟 Highlights & Features

- **Rich Modern Aesthetics**: Deep cosmic dark mode with glassmorphic cards (`backdrop-filter: blur`), subtle gradients, and ambient lighting.
- **Theme Toggle (Dark & Light Mode)**: Instant theme toggle with localStorage persistence, smooth transitions, and keyboard shortcut (`T`).
- **Interactive Cursor Aura**: Ambient mouse spotlight on desktop that smoothly follows user pointer.
- **Dynamic Typing Cycler**: Smooth typewriter headline effect showcasing developer specializations.
- **Project Showcase & Dynamic Filters**: Filter projects by categories (*All*, *Full Stack*, *AI & Data*, *Cloud & Tools*).
- **Interactive Case Study Modal**: Deep dive into architectural highlights, benchmark metrics, and tech stacks with Esc key and backdrop dismiss.
- **Interactive Skills Grid**: Categorized skill cards with animated proficiency bars that trigger on viewport entry.
- **Animated Statistics Counter**: Automatic number roll-up when the stats section scrolls into view.
- **Interactive Career Timeline**: Milestone journey through engineering roles and education.
- **Functional Contact Form**: Interactive form with live validation, button loading spinner, and celebration feedback toast.
- **One-Click Copy Email**: Instant clipboard copying with visual toast feedback.
- **Responsive Navigation**: Sticky frosted-glass navbar with active section scroll-spy and mobile slide-out menu drawer.
- **Simulated CV Download**: Pre-wired "Download CV" action that generates a developer profile document.

---

## 📁 Directory Structure

```text
portfolio/
├── index.html               # Semantic, SEO-optimized HTML5 structure
├── css/
│   ├── style.css            # Core design system tokens, layout & components
│   └── animations.css       # Keyframes, glow pulses & transitions
├── js/
│   ├── main.js              # Theme manager, scroll spy, modal & form logic
│   └── projects-data.js     # Project showcase dataset & case study details
└── assets/
    └── images/              # Developer avatar & project preview artwork
        ├── avatar.jpg
        ├── project-analytics.jpg
        ├── project-fintech.jpg
        ├── project-canvas.svg
        └── project-devops.svg
```

---

## 🚀 Running Locally

No build tools, bundlers, or package installations are required! You can open `index.html` directly or run a local HTTP server:

### Option 1: Python HTTP Server (Built-in)
```bash
python -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Node.js (npx serve)
```bash
npx serve .
```

### Option 3: Direct File Opening
Double-click `index.html` to open it in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 🛠️ Customization

1. **Personal Information**: Edit your name, bio, social links, and email in [index.html](file:///c:/Users/Bhavy/Desktop/portfolio/index.html).
2. **Projects**: Add or edit projects in [js/projects-data.js](file:///c:/Users/Bhavy/Desktop/portfolio/js/projects-data.js).
3. **Skills**: Modify technical proficiencies and categories in `skillsData` inside [js/main.js](file:///c:/Users/Bhavy/Desktop/portfolio/js/main.js).
4. **Color Scheme & Accents**: Tweak CSS custom properties (`--accent-cyan`, `--accent-violet`, `--bg-primary`, etc.) at the top of [css/style.css](file:///c:/Users/Bhavy/Desktop/portfolio/css/style.css).
