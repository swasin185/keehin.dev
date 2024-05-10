import { User } from "#auth-utils";
import createUserSession from "~/server/utils/createUserSession";

export default eventHandler(async (event) => {
  const query = getQuery(event);
  let isAuthen = query.username ? true : false;
  console.log("Local Authen", query);
  if (isAuthen) {
    await setUserSession(
      event,
      createUserSession({ name: query.username } as User)
    );
  } else await clearUserSession(event);
});
