"use server"
import dbConnect from "@db/db";
import PPPE from "@model/PPPE";

export const savePPPE = async (data: any) => {
  await dbConnect();
  let pp = await PPPE.findOne();
  if(!pp) pp = new PPPE();
  pp.image1 = data.image1;
  pp.title1 = data.title1;
  pp.content1 = data.content1;
  pp.title2 = data.title2;
  pp.content2 = data.content2;
  pp.title3 = data.title3;
  pp.content3 = data.content3;
  await pp.save();
  return { status: 200 };
}

export const getPPPE = async () => {
  await dbConnect();
  let pp = await PPPE.findOne();
  return JSON.parse(JSON.stringify(pp));
}