"use server";
import dbConnect from "@db/db";
import CateProject from "@model/CateProject";
import Categories from "@model/Categories";

export const getAllCate = async () => {
  await dbConnect();
  const cate = await Categories.find();
  for (let i = 0; i < cate.length; i++) {
    const item = cate[i];
    let catePrj = await CateProject.find({ cate_id: item._id });
    item.project_detail_num = catePrj.length;
  }

  return JSON.parse(JSON.stringify(cate));
}


export const delCate = async (id: any) => {
  await dbConnect();
  await Categories.deleteOne({ _id : id });
  await CateProject.deleteMany({ cate_id : id });
  return {status : 200};
}