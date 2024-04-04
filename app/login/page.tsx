import { lucia } from "@/auth/auth";
import dbConnect from "@/db/db";
import { User } from "@/model/model";
import { Scrypt } from "lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Argon2id } from "oslo/password";

export default async function Page() {
	return (
		<>
			<h1>Create an account</h1>
			<form action={login}>
				<label htmlFor="username">Username</label>
				<input name="username" id="username" />
				<br />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" />
				<br />
				<button type="submit">Continue</button>
			</form>
		</>
	);
}

async function login(formData: FormData): Promise<ActionResult> {
	"use server";
	const username = formData.get("username");
	if (
		typeof username !== "string" ||
		username.length < 3 ||
		username.length > 31 ||
		!/^[a-z0-9_-]+$/.test(username)
	) {
		return {
			error: "Invalid username"
		};
	}
	const password = formData.get("password");
	if (typeof password !== "string" || password.length < 6 || password.length > 255) {
		return {
			error: "Invalid password"
		};
	}

	console.log("Connecting to database");
  await dbConnect();

	console.log("Finding user", username);
	const existingUser = await User.findOne({ username });
	console.log("existingUser", existingUser);

	if (!existingUser) {
		return {
			error: "Incorrect username or password"
		};
	}
	console.log("Verifying password");
	const validPassword = await new Argon2id().verify(existingUser.password, password);
	if (!validPassword) {
		return {
			error: "Incorrect username or password"
		};
	}

  const session = await lucia.createSession(existingUser._id, {});
	console.log("session", session);
  const sessionCookie = lucia.createSessionCookie(session.id);
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	return redirect("/admin");
}

interface ActionResult {
	error: string;
}