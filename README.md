# 🌶️ Spice Garden — Restaurant Website

A modern, fully responsive restaurant landing page built with **React** and **TypeScript** as part of learning the fundamentals of frontend development.

## 🚀 Live Preview

> Run locally with `npm run dev` (see below)

---

## ✨ Features

| Section | Description |
|---|---|
| **Navbar** | Sticky, transparent → solid on scroll, mobile hamburger menu |
| **Hero** | Full-screen background, animated headline, stat badges |
| **About** | Two-column layout with image collage and feature cards |
| **Popular Dishes** | 6-card grid with image zoom, spice level, and badges |
| **Full Menu** | 5-category tab switcher (50+ menu items) |
| **Gallery** | Masonry photo grid with lightbox (click-to-open, Esc to close) |
| **Opening Hours** | Live open/closed indicator, today's row highlighted |
| **Contact** | Reservation form with loading state and success screen |
| **Footer** | 4-column footer with newsletter signup |

---

## 🛠️ Tech Stack

- **React 18** — component-based UI
- **TypeScript** — type-safe code
- **Vite** — fast development server and build tool
- **Pure CSS** — CSS custom properties (variables) for theming, no UI library
- **Google Fonts** — Playfair Display + Lato

---

## 📁 Project Structure

```
src/
├── main.tsx                 # App entry point
├── App.tsx                  # Root component
├── index.css                # Global styles & CSS variables
├── vite-env.d.ts            # TypeScript/Vite type declarations
└── components/
    ├── Navbar.tsx / .css
    ├── Hero.tsx   / .css
    ├── About.tsx  / .css
    ├── Dishes.tsx / .css
    ├── Menu.tsx   / .css
    ├── Gallery.tsx/ .css
    ├── Hours.tsx  / .css
    ├── Contact.tsx/ .css
    └── Footer.tsx / .css
```

---

## 🏃 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎨 Design Tokens

All colours, fonts and spacing are defined as CSS variables in `src/index.css`:

```css
--color-primary: #c8860a;   /* warm gold */
--color-dark:    #1a1008;   /* near-black */
--font-heading:  'Playfair Display', serif;
--font-body:     'Lato', sans-serif;
```

Change these to retheme the entire site instantly.

---

## 📚 React Concepts Used

- `useState` — active menu tab, lightbox state, form data, scroll flag
- `useEffect` — scroll listener (Navbar), keyboard events (Gallery), body scroll lock
- TypeScript `interface` — every data structure is typed
- Component composition — each section is a self-contained component

---

*Built with ❤️ using Kiro AI development environment*
