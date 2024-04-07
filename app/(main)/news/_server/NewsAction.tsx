"use server";
import dbConnect from "@db/db";
import NewFile from "@model/NewFile";
import News from "@model/News";

export const getNewMain = async () => {
  await dbConnect();
  const ne = await News.find().sort({updatedAt: -1 }).limit(1);

  for (const item of ne) {
      const nf = await NewFile.find({ id_news: item._id }).sort({createdAt: 1 }).limit(1);
      if (nf) {
          ne[0] = ne[0].toObject();
          ne[0]['file'] = nf[0].file;
      }
  }
  return JSON.parse(JSON.stringify(ne[0]));
}

export const getNewOther = async () => {
  await dbConnect();
  const ne = await News.find().sort({updatedAt: -1 }).skip(1);

  for (let i = 0; i < ne.length; i++) {
      const nf = await NewFile.find({ id_news: ne[i]._id }).sort({createdAt: 1 }).limit(1);
      if (nf && nf.length > 0) {
          ne[i] = ne[i].toObject();
          ne[i]['file'] = nf[0].file;
      }
  }
  return JSON.parse(JSON.stringify(ne));
}

export const getNewOtherDetail = async (data: any) => {
  await dbConnect();
  let ne = await News.find({ _id: { $ne: data.id } }).sort({updatedAt: -1});

  for (let i = 0; i < ne.length; i++) {
      const nf = await NewFile.find({ id_news: ne[i]._id }).sort({createdAt: 1 }).limit(1);
      if (nf && nf.length > 0) {
          ne[i] = ne[i].toObject();
          ne[i]['file'] = nf[0].file;
      }
  }
  return JSON.parse(JSON.stringify(ne));
}
