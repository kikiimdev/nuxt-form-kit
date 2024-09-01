// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-08-31",
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@formkit/nuxt', "@nuxtjs/tailwindcss"],
  formkit: {
    // Experimental support for auto loading (see note):
    // autoImport: true
  }
})