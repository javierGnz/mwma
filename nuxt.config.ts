import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxtjs/supabase",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["~/assets/global.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    experimental: {
      tasks: true,
    },
  },
  i18n: {
    defaultLocale: "es",
    bundle: {
      optimizeTranslationDirective: false,
    },
    locales: [
      {
        code: "es",
        name: "Español",
        file: "es.json",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
    ],
  },
  supabase: {
    redirect: false,
  },
});
