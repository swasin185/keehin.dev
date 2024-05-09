<template>
  <Panel>
    <template #default>
      <InputText
        v-model="username"
        placeholder="ชื่อ user"
        :disabled="loggedIn"
      />
      <Password
        v-model="password"
        placeholder="รหัสผ่าน"
        :disabled="loggedIn"
        toggleMask
        @keydown.enter="login"
      />
    </template>
    <template #footer>
      <Button v-if="loggedIn" @click="logout">Logout</Button>
      <Button v-else @click="login">Login</Button>
    </template>
  </Panel>
</template>

<script lang="ts" setup>
const loggedIn: Ref<boolean> = useCookie("loggedIn");
const username: Ref<string> = useCookie("username");
const password: Ref<string> = ref("");

async function login() {
  const data = await $fetch("/api/authen", {
    query: { username: username.value, password: password.value },
  });
  loggedIn.value = data.isAuthen;
}

function logout() {
  loggedIn.value = false;
  username.value = "";
  password.value = "";

}
</script>
