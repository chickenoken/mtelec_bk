"use server"
import dbConnect from "@db/db";
import CateProject from "@model/CateProject";

export const getAllCateProjNoId = async () => {
  await dbConnect();
  let catePro = await CateProject.find({});
  return JSON.parse(JSON.stringify(catePro));
}
