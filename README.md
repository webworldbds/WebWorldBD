# WebWorldBD — Freelancer Business Platform

> **"Your Vision. Our Code. Your Digital Success."**
> **"আপনার স্বপ্ন, আমাদের কোড, আপনার ডিজিটাল সাফল্য।"**

WebWorldBD is a production-grade full-stack business platform built for **SHAFAET HOSSEN SARIP**, Website & App Developer based in Kushtia, Bangladesh.

---

## Technical Stack & Architectural Decisions

- **Framework**: [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) for fast development, type safety, and optimized build bundles.
- **Styling & Design System**: [Tailwind CSS v4](https://tailwindcss.com/) with pure CSS variables (`src/styles/tokens.css`) for zero hardcoded component colors and seamless theme switching.
- **Icons**: [Lucide React](https://lucide.dev/) for crisp, modern icons.
- **Routing**: [React Router v7](https://reactrouter.com/) client-side routing.
- **Internationalization (i18n)**: Custom lightweight bilingual system supporting **English (`en`)** and **Bangla (`bn`)** with automatic `localStorage` preference persistence.
- **Theme System**: Dynamic Light/Dark mode with `prefers-color-scheme` auto-detection and `localStorage` persistence.

---

## Project Folder Structure

```
src/
├── admin/          # Reserved for future admin panel
├── assets/         # Placeholders, brand assets, images
├── client/         # Reserved for future client portal/dashboard
├── components/     # Reusable design tokens & UI components (Button, Container, Navbar, Footer, Loader, etc.)
├── config/         # App metadata, route constants, bilingual dictionary (translations.ts), site contact info
├── contexts/       # ThemeContext (dark/light switch) & LanguageContext (i18n switch)
├── hooks/          # Custom utility React hooks
├── layouts/        # Shell layout components (MainLayout)
├── pages/          # Route views (Home, About, Services, Portfolio, Certificates, Blog, Pricing, Contact, Hire)
├── public/         # Static assets
├── services/       # Reserved for future API & Firebase service layers
├── styles/         # Design tokens, CSS variables, typography imports
└── utils/          # Helper utilities
```

---

## Development Setup

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation & Local Server

1. **Clone repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Environment configuration:**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   *Note: Never commit `.env.local` or real API keys to version control.*

3. **Start local development server:**
   ```bash
   npm run dev
   ```

4. **Build production distribution:**
   ```bash
   npm run build
   ```

---

## Design System Tokens & Breakpoints

### Theme Colors
- **Primary**: Electric Blue (`#1E50FF`)
- **Secondary**: Purple (`#8B5CF6`)
- **Accent**: Cyan (`#06B6D4`)
- **Dark Mode Surface**: Deep Navy (`#0B0F19` / `#131B2E`)
- **Light Mode Surface**: Pure White (`#FFFFFF` / `#F8FAFC`)

### Breakpoints & Responsiveness
Fully tested across standard viewports without horizontal scroll or layout breakage:
- **360px** (Small Mobile)
- **390px** / **430px** (Modern Smartphones)
- **768px** (Tablets)
- **1024px** (Laptops)
- **1440px+** (Desktops / Ultra-wide)

---

## Security & Guidelines
- All Firebase authentication & database interactions will strictly use Firebase Auth rules and role-based Firestore security in future phases (`allow read, write: if true;` is strictly prohibited).
- Passwords and real user credentials are never stored directly.
