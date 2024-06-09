"use server"
import dbConnect from "@db/db";
import PAutomation from "@model/PAutomation";

export const savePAutomation = async (data: any) => {
  await dbConnect();
  let inf = await PAutomation.findOne();
  if (!inf) inf = new PAutomation();
  inf.image1 = data.image1;
  inf.image2 = data.image2;
  inf.name3 = data.name3;
  inf.image3 = data.image3;
  inf.name4 = data.name4;
  inf.image4 = data.image4;
  inf.name5 = data.name5;
  inf.image5 = data.image5;
  inf.name6 = data.name6;
  inf.image6 = data.image6;
  inf.name7 = data.name7;
  inf.image7 = data.image7;
  inf.name8 = data.name8;
  inf.image8 = data.image8;
  await inf.save();
  return { status: 200 };
}

export const getPAutomation = async () => {
  await dbConnect();
  let inf = await PAutomation.findOne();
  return JSON.parse(JSON.stringify(inf));
}
