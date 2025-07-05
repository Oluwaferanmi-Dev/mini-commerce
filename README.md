# 🛒 Mini Commerce

**Mini Commerce** is a lightweight e-commerce application built with **Next.js**. It provides a foundational structure for displaying products, managing a shopping cart, and handling a basic checkout flow. The project is built with a modern stack and follows current web development best practices — clean architecture, responsive design, performance focus, and SEO readiness.

---

## 🎨 Design Approach

The design follows a clean, minimalist direction, prioritizing usability and readability.

- **Layout:** Simple and consistent — a global header and footer, grid-based product listing, and dedicated product detail pages.
- **Color Scheme:** A calm color palette that highlights important UI elements like buttons and links without overwhelming the user. Dark mode is also supported for better accessibility and user preference.
- **Responsiveness:** Built mobile-first with **Tailwind CSS**, ensuring seamless usability across devices — from phones to desktops.

---

## 🧰 Tools & Tech

- **Frontend Framework:** [Next.js](https://nextjs.org/)
- **TypeScript:** For static typing and better code maintainability
- **Styling:** 
  - [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
  - [shadcn/ui](https://ui.shadcn.com/) for accessible, pre-built UI components
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) for global cart state, with middleware and selectors
- **Data Fetching:** 
  - Local static JSON file (`public/products.json`) for demo data
  - Set up to scale with tools like **React Query** for more complex data operations
- **Architecture:** 
  - Functional React components with hooks
  - Component-based structure for scalability
- **Theme Support:** Uses `next-themes` for light/dark mode toggling

---

## 🔍 SEO Strategy

SEO has been considered from the ground up:

- **Meta Tags / Open Graph:** (Ready to be implemented) Supports dynamic page metadata for better visibility and social sharing
- **Structured Data:** (Optional enhancement) Can integrate JSON-LD for richer search results
- **Image Optimization:** Uses Next.js `Image` component for lazy loading, resizing, and compression
- **Semantic HTML:** Ensures meaningful markup that search engines can parse effectively
- **Performance Tweaks:** Includes fast loading via image optimization, layout shifting reduction, and selective rendering

---

## ⚠️ Error Handling Strategy

- **Product Data Fetching:** If loading `products.json` fails, the app handles it gracefully with user-friendly feedback instead of crashing
- **Cart Operations:** Prevents adding invalid items and handles edge cases (like out-of-stock or duplicate entries in future extensions)
- **Unknown Routes:** Default Next.js 404 handling, customizable for better UX
- **UI Feedback:** Uses `use-toast` from `shadcn/ui` to notify users of errors or actions
- **Logging:** (Can be extended) Errors can be logged to console or external services
- **Recovery Options:** Where possible, users are given clear paths to retry or navigate elsewhere

---


