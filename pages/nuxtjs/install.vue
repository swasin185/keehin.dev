<template>
  <Card>
    <template #title>
      <NuxtLink
        target="_blank"
        to="https://nuxt.com/docs/getting-started/installation"
      >
        Nuxt Installation
      </NuxtLink>
    </template>
    <template #content>
      <pre>
\> npx nuxi@latest init keehin.dev
\> npm install nuxt-primevue primevue primeflex primeicons --save-dev
\> npx nuxi@latest module add auth-utils

[package.json]
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

[nuxt.config.ts]
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue"],
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
});</pre>
    </template>
  </Card>
</template>

<script lang="ts" setup></script>
