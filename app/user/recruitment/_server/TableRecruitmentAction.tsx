"use server";
import dbConnect from "@db/db";
import Recruitment from "@model/Recruitment";

export const getAllRecruitment = async () => {
  await dbConnect();
  const pro = await Recruitment.find({});
  let result = JSON.parse(JSON.stringify(pro));
  return result;
}
