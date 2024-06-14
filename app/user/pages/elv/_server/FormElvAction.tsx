"use server";
import dbConnect from "@db/db";
import PElv from "@model/PElv";
import { IDataWorkingField } from "../../automation/_server/FormAutomationAction";

export const savePElv = async (data: any) => {
	await dbConnect();
	let inf = await PElv.findOne();
	if (!inf) inf = new PElv();
	inf.name1 = data.name1;
	inf.image1 = data.image1;
	inf.name2 = data.name2;
	inf.image2 = data.image2;
	inf.name3 = data.name3;
	inf.image3 = data.image3;
	inf.name4 = data.name4;
	inf.image4 = data.image4;
	await inf.save();
	return { status: 200 };
};

export const getPElv = async () => {
	await dbConnect();
	let inf = await PElv.findOne();
	return JSON.parse(JSON.stringify(inf));
};

export const getPElvWorkingField = async () => {
	await dbConnect();
	const res = await PElv.find({}, { workingFields: 1 });
	return res.length ? JSON.parse(JSON.stringify(res[0].workingFields)) : [];
};

export const getPElvDataById = async (id: string) => {
	await dbConnect();
	const res = await PElv.findById(id);
	return JSON.parse(JSON.stringify(res));
};

export const getPElvWorkingFieldById = async (id: string) => {
	await dbConnect();
	const res = await PElv.findOne({ "workingFields._id": id }, { "workingFields.$": 1 });

	return JSON.parse(JSON.stringify(res));
};

export const createWorkingField = async (id: string, data: IDataWorkingField) => {
	await dbConnect();

	await PElv.updateOne(
		{ _id: id },
		{
			$push: {
				workingFields: {
					title: data.title,
					descriptions: [
						{
							column: 1,
							sub: data.sub1 ? data.sub1 : undefined,
						},
						{
							column: 2,
							sub: data.sub2 ? data.sub2 : undefined,
						},
					],
				},
			},
		}
	);

	return { status: 200 };
};

export const updateWorkingFieldByWorkingId = async (id: string, data: IDataWorkingField) => {
	await dbConnect();

	await PElv.updateOne(
		{ "workingFields._id": id },
		{
			$set: {
				"workingFields.$.title": data.title,
				"workingFields.$.descriptions.0.sub": data.sub1 ? data.sub1 : undefined,
				"workingFields.$.descriptions.1.sub": data.sub2 ? data.sub2 : undefined,
			},
		}
	);

	return { status: 200 };
};
