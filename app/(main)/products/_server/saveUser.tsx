"use server";
import dbConnect from "@db/db";
import Users from "@model/user";

export const saveUser = async () => {
	await dbConnect();
	let user = new Users();
	user.username = "admin";
	user.password = "123456789";
	await user.save();
	return { status: 200 };
};
