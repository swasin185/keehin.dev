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
      {{ loggedIn ? new Date(session?.loginTime).toString() : "" }}
    </template>
    <template #footer>
      <Button v-if="loggedIn" @click="logout">Logout</Button>
      <Button v-else @click="login">Login</Button>
      &nbsp;
      <a href="/api/auth/github" external>GitHub</a>
      &nbsp;
      <a href="/api/auth/google" external>Google</a>
    </template>
  </Panel>
</template>

<script lang="ts" setup>
const { loggedIn, user, session, clear } = useUserSession();
const username: Ref<string> = ref(user?.value?.login || "");
const password: Ref<string> = ref("");

async function login() {
  await $fetch("/api/auth/local", {
    query: { username: username.value, password: password.value },
  });
  location.reload();
}

async function logout() {
  await clear();
  location.reload();
}
</script>
