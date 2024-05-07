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
\> sudo apt install nodejs
\> sudo apt install npm
\> npx nuxi@latest init keehin.dev
\> npm install nuxt-primevue primevue primeflex primeicons --save-dev

[package.json]
{
  ...
  "devDependencies": {
    "nuxt": "^3.11.2",
    "nuxt-primevue": "^0.3.1",
    "primeflex": "^3.3.1",
    "primeicons": "^7.0.0",
    "primevue": "^3.52.0"
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
  ]
});</pre>
    </template>
  </Card>
</template>

<script lang="ts" setup></script>
