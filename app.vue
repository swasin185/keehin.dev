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
    icon: "pi pi-home",
    items: [
      { label: "Welcome", to: "/" },
      { label: "Login/out", to: "/login" },
      { label: "Reload", command: () => location.reload() },
    ],
  },
  {
    label: "Tutorial",
    items: [
      { label: "Installation", to: "/tutorial/install" },
      { label: "PrimeVue", to: "/tutorial/primevue" },
      { label: "Prime Flex/Icon", to: "/tutorial/flexicon" },
      { label: "UserSession", to: "/tutorial/usersession" },
      { label: "Middleware", to: "/tutorial/middleware" },
      { label: "Content", to: "/tutorial/content" },
    ],
  },
];

for (const head of menu)
  head.items.forEach((item: any) => {
    if (!item.command)
      item.command = (event: MenuItemCommandEvent) => navigateTo(event.item.to);
  });
</script>
