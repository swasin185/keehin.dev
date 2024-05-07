<template>
  <div>
    <Menubar :model="menuItems">
      <template #end> {{ useCookie("username").value }} </template>
    </Menubar>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import type { MenuItemCommandEvent } from "primevue/menuitem";

const menuItems = [
  {
    label: "Home",
    items: [
      { label: "Welcome", to: "/" },
      { label: "Login/out", to: "/loginout" },
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

for (const menu of menuItems)
  menu.items.forEach((item: any) => {
    if (!item.command)
      item.command = (event: MenuItemCommandEvent) => navigateTo(event.item.to);
  });

</script>
