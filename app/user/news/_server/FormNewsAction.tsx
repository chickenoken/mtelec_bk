"use server";
import dbConnect from "@db/db";
import News from "@model/News";

export const getNewById = async (id: any) => {
  await dbConnect();
  let ne = await News.findOne({ _id: id });
  return JSON.parse(JSON.stringify(ne));
}

export const saveNew = async (data: any) => {
  await dbConnect();
  let ne = new News();
  ne.title = data.title;
  ne.content = data.content;
  ne.type = data.type;
  await ne.save();
  return { status: 200 };
}

export const updateNew = async (data: any) => {
  await dbConnect();
  let ne = await News.findOne({ _id: data._id });
  ne.title = data.title;
  ne.content = data.content;
  ne.type = data.type;
  await ne.save();
  return { status: 200 };
}
