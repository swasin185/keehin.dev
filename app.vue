<template>
  <div>
    <Menubar :model="menu" />
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import type { MenuItemCommandEvent } from "primevue/menuitem";

const menu = [
  {
    label: "Home",
    items: [
      { label: "Welcome", to: "/" },
      { label: "Login/out", to: "/login" },
      { label: "Reload", command: () => location.reload() },
    ],
  },
  {
    label: "Nuxt.js",
    items: [
      { label: "Installation", to: "/nuxtjs/install" },
      { label: "PrimeVue", to: "/nuxtjs/primevue" },
      { label: "Prime Flex/Icon", to: "/nuxtjs/flexicon" },
      { label: "Middleware", to: "/nuxtjs/middleware" },
      { label: "Session", to: "/nuxtjs/session" },
    ],
  },
];

for (const head of menu)
  head.items.forEach((item: any) => {
    if (!item.command)
      item.command = (event: MenuItemCommandEvent) => navigateTo(event.item.to);
  });
</script>
