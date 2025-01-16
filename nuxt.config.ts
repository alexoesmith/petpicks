// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: "dark:bg-gray-950",
      },
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  site: {
    url: process.env.NUXT_SITE_URL,
    name: "PetPicks",
  },

  modules: ["@nuxt/ui", "@nuxtjs/seo", "@nuxtjs/supabase"],

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: ["/"],
      cookieRedirect: true,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
