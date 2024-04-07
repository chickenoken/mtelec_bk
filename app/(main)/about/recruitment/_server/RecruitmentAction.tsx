"use server";
import dbConnect from "@db/db";
import Appliant from "@model/Appliant";

export const saveApplyRecruit = async (data: any) => {
  await dbConnect();
  let re = new Appliant();
  re.name = data['name'];
  re.email = data['email'];
  re.phone = data['phone'];
  re.position = data['position'];
  re.cv = data['cv'];
  await re.save();
  return {status: 200};
}
