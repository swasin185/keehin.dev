<template>
  <Card>
    <template #title>{{ message }}</template>
    <template #content>
      <div class="content">Counter</div>
      <Button @click="counter++">{{ counter }}</Button>
    </template>
  </Card>
</template>

<script lang="ts" setup>
const message = "Hello Vue/Nuxt 3";
const counter = ref(0);
</script>

<style scoped>
.content {
  font-size: 1.5rem;
  color: darkred;
}
Button {
  width: 100px;
  height: 40px;
}
</style>
