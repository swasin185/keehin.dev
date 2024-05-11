// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "nuxt-auth-utils", "@nuxt/content"],
  css: [
    "primevue/resources/themes/mdc-light-indigo/theme.css",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css",
  ],
  runtimeConfig: {
    oauth: {
      github: {
        clientId:
          process.env.NUXT_OAUTH_GITHUB_CLIENT_ID || "Ov23liOeMX8v01deurmg",
        clientSecret:
          process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET ||
          "66be77cf8f5fe2418bce160e4b3ca7d83b0765a9",
      },
    },
    session: {
      maxAge: 60 * 5, // 5 minutes
      password:
        process.env.NUXT_SESSION_SECRET || "1234567_1234567_1234567_12345678",
    },
  },
  content: {
    highlight: {
      theme: {
        default: 'github-light'
      }
    }
  }
});