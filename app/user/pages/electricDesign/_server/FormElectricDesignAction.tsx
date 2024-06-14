"use server";
import dbConnect from "@db/db";
import PElectricDesign from "@model/PElectricDesign";
import { IDataWorkingField } from "../../automation/_server/FormAutomationAction";

export const savePElectricDesign = async (data: any) => {
	await dbConnect();
	let inf = await PElectricDesign.findOne();
	if (!inf) inf = new PElectricDesign();
	inf.name1 = data.name1;
	inf.image1 = data.image1;
	inf.name2 = data.name2;
	inf.image2 = data.image2;
	inf.name3 = data.name3;
	inf.image3 = data.image3;
	inf.name4 = data.name4;
	inf.image4 = data.image4;
	inf.name5 = data.name5;
	inf.image5 = data.image5;
	inf.name6 = data.name6;
	inf.image6 = data.image6;
	inf.name7 = data.name7;
	inf.image7 = data.image7;
	inf.name8 = data.name8;
	inf.image8 = data.image8;
	inf.name9 = data.name9;
	inf.image9 = data.image9;
	inf.name10 = data.name10;
	inf.image10 = data.image10;
	inf.name11 = data.name11;
	inf.image11 = data.image11;
	await inf.save();
	return { status: 200 };
};

export const getPElectricDesign = async () => {
	await dbConnect();
	let inf = await PElectricDesign.findOne();
	return JSON.parse(JSON.stringify(inf));
};

export const getPElectricWorkingField = async () => {
	await dbConnect();
	const res = await PElectricDesign.find({}, { workingFields: 1 });
	return res.length ? JSON.parse(JSON.stringify(res[0].workingFields)) : [];
};

export const getPElectricDataById = async (id: string) => {
	await dbConnect();
	const res = await PElectricDesign.findById(id);
	return JSON.parse(JSON.stringify(res));
};

export const getPElectricWorkingFieldById = async (id: string) => {
	await dbConnect();
	const res = await PElectricDesign.findOne({ "workingFields._id": id }, { "workingFields.$": 1 });

	return JSON.parse(JSON.stringify(res));
};

export const createWorkingField = async (id: string, data: IDataWorkingField) => {
	await dbConnect();

	await PElectricDesign.updateOne(
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

	await PElectricDesign.updateOne(
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
