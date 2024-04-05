import { lucia, validateRequest } from "@/auth/auth";
import dbConnect from "@/db/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const { user } = await validateRequest();
	if (!user) {
		return redirect("/login");
	}

  const logout = async () => {
    "use server";
    const { session } = await validateRequest();
    if (!session) {
      return {
        error: "Unauthorized"
      };
    }
    dbConnect();
    await lucia.invalidateSession(session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect("/login");
  };

	return (
    <>
      <h1>Hi, {user.username}!</h1>
      <form action={logout}>
        <button>Sign out</button>
      </form>
    </>
  );
}

