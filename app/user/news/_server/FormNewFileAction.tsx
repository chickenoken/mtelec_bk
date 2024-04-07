"use server"
import dbConnect from "@db/db";
import NewFile from "@model/NewFile";

export const getAllNewFile = async (data: any) => {
  await dbConnect();
  let nf = await NewFile.find({ id_news: data.id_news });
  return JSON.parse(JSON.stringify(nf));
}

export const delNewFile = async (id: any) => {
  await dbConnect();
  await NewFile.deleteOne({ _id : id });
  return {status : 200};
}

export const saveNewFile = async (data: any) => {
  await dbConnect();
  let nf = new NewFile();
  nf.id_news = data.id_news;
  nf.file = data.file;
  nf.file_name = data.file_name;
  await nf.save();
  return {status : 200};
}

export const updateNewFile = async (data: any) => {
  await dbConnect();
  let nf = await NewFile.findOne({ _id: data._id });
  nf.file = data.file;
  nf.file_name = data.file_name;
  await nf.save();
  return {status : 200};
}