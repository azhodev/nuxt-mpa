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
});