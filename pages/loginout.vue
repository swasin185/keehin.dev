<template>
  <Card style="text-align: center;">
    <template #content>
      <InputText
        :disabled="loginTime > 0"
        v-model="username"
        placeholder="ชื่อ user"
        type="text"
        :maxlength="8"
      />
      <br />
      <br />
      <Password
        :disabled="loginTime > 0"
        placeholder="รหัสผ่าน"
        v-model="password"
        maxlength="16"
        toggleMask
        @keydown.enter="login"
      />
    </template>
    <template #footer>
      <Button v-if="loginTime > 0" @click="logout">Logout</Button>
      <Button v-else @click="login">Login</Button>
      <h3 v-if="loginTime">
        เข้าระบบเวลา {{ new Date(loginTime).toString() }}
      </h3>
    </template>
  </Card>
</template>

<script lang="ts" setup>
const username = ref("");
const password = ref("");
const loginTime = ref(0);
onMounted(() => {
  loginTime.value = Number(useCookie("loginTime").value);
  username.value = useCookie("username").value || "";
});
function login() {
  loginTime.value = Date.now();
  useCookie("loginTime").value = loginTime.value.toString();
  useCookie("username").value = username.value;
}
function logout() {
  loginTime.value = 0;
  username.value = "";
  password.value = "";
  useCookie("username").value = ""
  useCookie("loginTime").value = "0"
}
</script>
