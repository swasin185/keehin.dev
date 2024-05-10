import { User, UserSession } from "#auth-utils";

export default function (user: User): UserSession {
  if (user?.email)
    user.name = user?.email;
  return {
    user,
    loginTime: new Date().getTime(),
  };
}
