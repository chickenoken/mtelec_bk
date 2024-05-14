"use server"
import dbConnect from "@db/db";
import CateProject from "@model/CateProject";

export const getAllCateProj = async (data: any) => {
  await dbConnect();
  let catePro = await CateProject.find({ cate_id: data.cate_id });
  return JSON.parse(JSON.stringify(catePro));
}

export const delCateProj = async (id: any) => {
  await dbConnect();
  await CateProject.deleteOne({ _id : id });
  return {status : 200};
}

export const saveCateProj = async (data: any) => {
  await dbConnect();
  let cate = new CateProject();
  cate.cate_id = data.cate_id;
  cate.cate_title = data.cate_title;
  cate.cate_pro_name = data.cate_pro_name;
  cate.location = data.location;
  cate.detail = data.detail;
  await cate.save();
  return {status : 200};
}

export const updateCateProj = async (data: any) => {
  await dbConnect();
  let cate = await CateProject.findOne({ _id: data._id });
  cate.cate_title = data.cate_title;
  cate.cate_pro_name = data.cate_pro_name;
  cate.location = data.location;
  cate.detail = data.detail;
  await cate.save();
  return {status : 200};
}




