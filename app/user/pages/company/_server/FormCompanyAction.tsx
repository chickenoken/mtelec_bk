"use server"
import dbConnect from "@db/db";
import PCompanyInfo from "@model/PCompanyInfo";

export const savePCompanyInfo = async (data: any) => {
  await dbConnect();
  let inf = await PCompanyInfo.findOne();
  if(!inf) inf = new PCompanyInfo();
  inf.name = data.name;
  inf.type = data.type;
  inf.tax = data.tax;
  inf.address = data.address;
  inf.tel = data.tel;
  inf.email = data.email;
  inf.web = data.web;
  inf.fileName1 = data.fileName1;
  inf.image1 = data.image1;
  inf.fileName2 = data.fileName2;
  inf.image2 = data.image2;
  inf.fileName3 = data.fileName3;
  inf.image3 = data.image3;
  inf.fileName4 = data.fileName4;
  inf.image4 = data.image4;
  inf.fileName5 = data.fileName5;
  inf.image5 = data.image5;
  await inf.save();
  return { status: 200 };
}

export const getPCompanyInfo = async () => {
  await dbConnect();
  let inf = await PCompanyInfo.findOne();
  return JSON.parse(JSON.stringify(inf));
}