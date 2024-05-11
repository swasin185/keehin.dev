# Nuxt 3 Minimal Starter
```bash
# nuxtjs init project
npx nuxi@latest init keehin.dev
# primevue
npm install nuxt-primevue primevue primeflex primeicons --save-dev
# nuxt-auth-utils
npx nuxi@latest module add auth-utils
```

## [package.json]
{
  ...
  "devDependencies": {
    "nuxt": "^3.11.2",
    "nuxt-primevue": "^0.3.1",
    "nuxt-auth-utils": "^0.0.24",
    "primevue": "^3.52.0",
    "primeflex": "^3.3.1",
    "primeicons": "^7.0.0"
  }
}

## [nuxt.config.ts]
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "nuxt-auth-utils"],
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
      maxAge: 60
      password:
        process.env.NUXT_SESSION_SECRET || "1234567_1234567_1234567_12345678",
    },
  },
});

Check out the [Documentation](https://nuxt.com/docs/getting-started/) for more information.
