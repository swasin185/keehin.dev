import { UserSession } from "#auth-utils";
import "~/server/utils/makeUserSession";
export default oauth.githubEventHandler({
  async onSuccess(event: any, { user } : UserSession) {
    await setUserSession(event, makeUserSession(user));
    return sendRedirect(event, "/");
  },
});
