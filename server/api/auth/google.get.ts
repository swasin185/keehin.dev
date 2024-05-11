import { UserSession } from "#auth-utils";
import "~/server/utils/makeUserSession";
export default oauth.googleEventHandler({
  async onSuccess(event: any, { user } : UserSession) {
    await setUserSession(event, makeUserSession(user));
    return sendRedirect(event, "/");
  },
});
