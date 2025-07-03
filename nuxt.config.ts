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
        "@nuxt/icon",
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

    app: {
        pageTransition: { name: "page", mode: "out-in" },
        head: {
            title: "Agrofusion",
            titleTemplate: "%s",
            htmlAttrs: {
                lang: "en",
            },
        },
    },

    // app: {
    //     head: {
    //         meta: [
    //             { charset: "utf-8" },
    //             { name: "viewport", content: "width=device-width, initial-scale=1" },
    //             { name: "description", content: "A modern Nuxt 3 app with Tailwind, ShadCN and more." },
    //             { name: "theme-color", content: "#ffffff" },

    //             // Open Graph (для соцсетей)
    //             { property: "og:title", content: "Agrofusion" },
    //             { property: "og:description", content: "A modern Nuxt 3 app with Tailwind, ShadCN and more." },
    //             { property: "og:type", content: "website" },
    //             { property: "og:image", content: "/preview.png" },
    //             { property: "og:url", content: "https://my-nuxt-app.com" },

    //             // Twitter Card
    //             { name: "twitter:card", content: "summary_large_image" },
    //             { name: "twitter:title", content: "Agrofusion" },
    //             { name: "twitter:description", content: "A modern Nuxt 3 app with Tailwind, ShadCN and more." },
    //             { name: "twitter:image", content: "/preview.png" },
    //         ],
    //         link: [
    //             { rel: "icon", type: "image/png", href: "/favicon.png" },
    //             { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    //             { rel: "manifest", href: "/site.webmanifest" },
    //         ],
    //     },
    // },
});
