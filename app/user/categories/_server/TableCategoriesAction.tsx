"use server";
import dbConnect from "@db/db";
import CateProject from "@model/CateProject";
import Categories from "@model/Categories";

export const getAllCate = async () => {
  await dbConnect();
  const cate = await Categories.find();
  const updatedCate = await Promise.all(cate.map(async (item) => {
    let catePrj = await CateProject.find({ cate_id: item._id });
    item.project_detail_num = catePrj.length;
    return item;
  }));
  return JSON.parse(JSON.stringify(updatedCate));
}

export const delCate = async (id: any) => {
  await dbConnect();
  await Categories.deleteOne({ _id : id });
  await CateProject.deleteMany({ cate_id : id });
  return {status : 200};
}