"use server"
import dbConnect from "@db/db";
import PHvac from "@model/PHvac";

export const savePHvac = async (data: any) => {
  await dbConnect();
  let inf = await PHvac.findOne();
  if (!inf) inf = new PHvac();
  inf.name1 = data.name1;
  inf.image1 = data.image1;
  inf.name2 = data.name2;
  inf.image2 = data.image2;
  inf.name3 = data.name3;
  inf.image3 = data.image3;
  inf.name4 = data.name4;
  inf.image4 = data.image4;
  inf.name5 = data.name5;
  inf.image5 = data.image5;
  inf.name6 = data.name6;
  inf.image6 = data.image6;
  await inf.save();
  return { status: 200 };
}

export const getPHvac = async () => {
  await dbConnect();
  let inf = await PHvac.findOne();
  return JSON.parse(JSON.stringify(inf));
}
