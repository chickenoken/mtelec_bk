"use server"
import dbConnect from "@db/db";
import PElv from "@model/PElv";

export const savePElv = async (data: any) => {
  await dbConnect();
  let inf = await PElv.findOne();
  if (!inf) inf = new PElv();
  inf.name1 = data.name1;
  inf.image1 = data.image1;
  inf.name2 = data.name2;
  inf.image2 = data.image2;
  inf.name3 = data.name3;
  inf.image3 = data.image3;
  inf.name4 = data.name4;
  inf.image4 = data.image4;
  await inf.save();
  return { status: 200 };
}

export const getPElv = async () => {
  await dbConnect();
  let inf = await PElv.findOne();
  return JSON.parse(JSON.stringify(inf));
}
