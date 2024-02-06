import { getServerSession } from "next-auth";

export const isAuthenticated = async () => {
  // const session = await getServerSession();
  // console.log(session);

  return true;
};
