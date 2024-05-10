import { UserSession } from "#auth-utils";
import createUserSession from "~/server/utils/createUserSession";
export default oauth.githubEventHandler({
  async onSuccess(event: any, { user } : UserSession) {
    await setUserSession(event, createUserSession(user));
    return sendRedirect(event, "/");
  },
});
