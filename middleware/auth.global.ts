export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn, session } = useUserSession()
  console.log(new Date().toString(), to.path);
  console.log('Session', session.value)
  const loginUrl = "/login";
  if (to.path !== loginUrl && !loggedIn.value) {
    return navigateTo(loginUrl);
  }
});
