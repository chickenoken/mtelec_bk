"use server"
import dbConnect from "@db/db";
import PIndex from "@model/PIndex";

export const savePIndex = async (data: any) => {
  await dbConnect();
  let ind = await PIndex.findOne();
  if(!ind) ind = new PIndex();
  ind.about1 = data.about1;
  ind.about2 = data.about2;
  ind.concept = data.concept;
  ind.image1 = data.image1;
  ind.image2 = data.image2;
  await ind.save();
  return { status: 200 };
}

export const getPIndex = async () => {
  await dbConnect();
  let ind = await PIndex.findOne();
  return JSON.parse(JSON.stringify(ind));
}