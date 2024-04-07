"use server";
import dbConnect from "@db/db";
import NewFile from "@model/NewFile";
import News from "@model/News";

export const getNewMain = async () => {
  await dbConnect();
  return JSON.parse(JSON.stringify(''));
}

