export default defineNuxtRouteMiddleware((to, from) => {
  const loggedIn: Ref<boolean> = useCookie("loggedIn");
  const loginUrl = "/login";
  if (to.path !== loginUrl && !loggedIn.value) {
    return navigateTo(loginUrl);
  }
});
