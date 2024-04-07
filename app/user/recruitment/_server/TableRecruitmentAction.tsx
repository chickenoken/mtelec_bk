"use server";
import dbConnect from "@db/db";
import Recruitment from "@model/Recruitment";

export const getAllRecruitment = async () => {
  await dbConnect();
  const pro = await Recruitment.find({});
  return JSON.parse(JSON.stringify(pro));
}

export const delRecruitment = async (id: any) => {
  await dbConnect();
  await Recruitment.deleteMany({ id_recruitment : id });
  return {status : 200};
}