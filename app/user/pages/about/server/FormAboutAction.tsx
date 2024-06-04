"use server"
import dbConnect from "@db/db";
import PAbout from "@model/PAbout";

export const savePAbout = async (data: any) => {
  await dbConnect();
  let res = await PAbout.findOne();
  if(!res) res = new PAbout();
  res.title = data.title;
  res.content = data.content;
  res.desc = data.desc;
  res.image1 = data.image1;
  res.image2 = data.image2;
  res.team_title = data.team_title;
  res.team_content = data.team_content;
  res.icon1 = data.icon1;
  res.icon_name1 = data.icon_name1;
  res.icon_desc1 = data.icon_desc1;
  res.icon2 = data.icon2;
  res.icon_name2 = data.icon_name2;
  res.icon_desc2 = data.icon_desc2;
  res.icon3 = data.icon3;
  res.icon_name3 = data.icon_name3;
  res.icon_desc3 = data.icon_desc3;
  res.vision = data.vision;
  res.val1 = data.val1;
  res.val_title1 = data.val_title1;
  res.val_desc1 = data.val_desc1;
  res.val2 = data.val2;
  res.val_title2 = data.val_title2;
  res.val_desc2 = data.val_desc2;
  res.val3 = data.val3;
  res.val_title3 = data.val_title3;
  res.val_desc3 = data.val_desc3;
  res.core1 = data.core1;
  res.core_title1 = data.core_title1;
  res.core_desc1 = data.core_desc1;
  res.core2 = data.core2;
  res.core_title2 = data.core_title2;
  res.core_desc2 = data.core_desc2;
  res.core3 = data.core3;
  res.core_title3 = data.core_title3;
  res.core_desc3 = data.core_desc3;
  res.core4 = data.core4;
  res.core_title4 = data.core_title4;
  res.core_desc4 = data.core_desc4;
  await res.save();
  return { status: 200 };
}

export const getPAbout = async () => {
  await dbConnect();
  let res = await PAbout.findOne();
  return JSON.parse(JSON.stringify(res));
}