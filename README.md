# Agrofusion – Nuxt 3 Web App

[![Preview](public/preview.png)](https://nuxt-mpa.netlify.app/)

**Demo:** [https://nuxt-mpa.netlify.app/](https://nuxt-mpa.netlify.app/)

**Agrofusion** is a **multi-page Nuxt 3 website** created for experiments with modern frontend tools.  
The theme is **agriculture**, showcasing layouts, UI components, form validation, and SEO features.

---

## 🚀 Features

- ⚡️ Built with [Nuxt 3](https://nuxt.com)
- 🎨 Tailwind CSS 4 + [shadcn/ui](https://ui.shadcn.dev) components
- 🧠 Form validation via [`vee-validate`](https://vee-validate.logaretm.com/) + [`zod`](https://zod.dev/)
- 💡 SEO-ready with Open Graph and Twitter meta tags
- 📝 Markdown content management using [`@nuxt/content`](https://content.nuxt.com/)
- 🌄 Optimized image handling with [`@nuxt/image`](https://image.nuxt.com/)
- 🗂 Modular state management using [`pinia`](https://pinia.vuejs.org/)
- 💾 Lightweight local storage with `better-sqlite3`
- 📱 Mobile-first responsive layout

---

## 🛠 Tech Stack

- [Nuxt 3](https://nuxt.com) (Vue 3, Composition API)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.dev) (via `shadcn-nuxt`)
- [Pinia](https://pinia.vuejs.org/) for state management
- [VeeValidate](https://vee-validate.logaretm.com/) + [Zod](https://zod.dev/) for schema-based form validation
- [Lucide Icons](https://lucide.dev/)
- [Vue Sonner](https://sonner.emilkowal.ski/) for toast notifications
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) for optional local data persistence

---

## 📦 Install

```bash
npm install
```

## 🧪 Development
```bash
npm run dev
```

## 📦 Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure
```bash
├── assets/css/           # Tailwind CSS config
├── components/           # Vue components
├── pages/                # File-based routing (Nuxt)
├── content/              # Markdown files using @nuxt/content
├── data/                 # Static or dynamic data
├── public/               # Static assets (e.g. favicon, preview.png)
├── nuxt.config.ts        # Nuxt config with modules and meta tags
└── ...
```

## 🔒 Accessibility & SEO
- Semantic HTML + ARIA support for screen readers
- Meta tags for SEO, Open Graph, and Twitter Cards

## ✨ Credits
- This project makes use of:
- Nuxt 3
- Tailwind CSS
- shadcn/ui
- Pinia
- VeeValidate
- Zod
- Vue Sonner
- @nuxt/content