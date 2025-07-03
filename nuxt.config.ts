// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: false },

    modules: [
        "@nuxt/eslint",
        "shadcn-nuxt",
        "@nuxtjs/google-fonts",
        "@nuxt/content",
        "@nuxt/image",
        "@pinia/nuxt",
        '@vee-validate/nuxt',
    ],

    vite: {
        plugins: [tailwindcss()],
    },
    css: ["~/assets/css/tailwind.css"],

    shadcn: {
        prefix: "Ui",
        componentDir: "./components/ui",
    },

    googleFonts: {
        families: {
            Inter: [400, 600],
            "Source Serif 4": [400],
        },
    },

    image: {
        provider: 'netlify',
        format: ['webp', 'avif'], // можно указать только 'webp' для надёжности
        netlify: {
            baseURL: '/', // важно — без этого может не находить src
        },
    },

    ssr: true,

    nitro: {
        compressPublicAssets: true, // ✅ вкл. сжатие public-ресурсов
    },

    app: {
        pageTransition: { name: "page", mode: "out-in" },
        head: {
            title: "Agrofusion",
            titleTemplate: '%s · Agrofusion',
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                // Базовые
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { name: "description", content: "Agrofusion is a modern agricultural solutions platform." },

                // Цвет статус-бара, особенно на Android
                { name: "theme-color", content: "#ffffff" },

                // Open Graph — для Facebook, LinkedIn, Telegram
                { property: "og:type", content: "website" },
                { property: "og:site_name", content: "Agrofusion" },
                { property: "og:title", content: "Agrofusion" }, // будет переопределяться через useHead
                { property: "og:description", content: "Agrofusion is a modern agricultural solutions platform." },
                { property: "og:image", content: "/preview.png" },
                { property: "og:url", content: "https://yourdomain.com" },

                // Twitter Cards
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: "Agrofusion" },
                { name: "twitter:description", content: "Agrofusion is a modern agricultural solutions platform." },
                { name: "twitter:image", content: "/preview.png" },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: "icon", type: "image/png", href: "/favicon.png" },
                { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
                { rel: "manifest", href: "/site.webmanifest" },
            ],
        },
    },

});
