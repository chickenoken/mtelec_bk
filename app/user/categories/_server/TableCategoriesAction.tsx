"use server";
import dbConnect from "@db/db";
import CateProject from "@model/CateProject";
import Categories from "@model/Categories";

export const getAllCate = async () => {
  await dbConnect();
  const cate = await Categories.find();
  return JSON.parse(JSON.stringify(cate));
}

export const delCate = async (id: any) => {
  await dbConnect();
  await Categories.deleteOne({ _id : id });
  await CateProject.deleteMany({ cate_id : id });
  return {status : 200};
}