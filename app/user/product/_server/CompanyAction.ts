"use server";
import dbConnect from "@db/db";
import Companies from "@model/Companies";

/*
	use the same setup in ProductAction.ts
	in which insert company use this 

		const handleSave1 = async () => {
		await insertCompany(a);
	};
*/
export const insertCompany = async (data: string[]) => {
	await dbConnect();
	for (let i of data) {
		await Companies.create({ path: i });
	}

	return { status: 200 };
};

export const getCompanyById = async (id: string) => {
	await dbConnect();
	let company = await Companies.findOne({ _id: id });
	return JSON.parse(JSON.stringify(company));
};

export const getAllCompanies = async () => {
	await dbConnect();
	const companies = await Companies.find({});
	return JSON.parse(JSON.stringify(companies));
};

export const getCompanyWithProduct = async () => {
	await dbConnect();
	const companies = await Companies.aggregate([
		{
			$lookup: {
				from: "products",
				localField: "_id",
				foreignField: "company",
				as: "products",
			},
		},
	]);
	return JSON.parse(JSON.stringify(companies));
};

export const updateCompany = async ({ id, path }: { id: string; path: string }) => {
	await dbConnect();
	await Companies.updateOne(
		{
			_id: id,
		},
		{
			path,
		}
	);
	return { status: 200 };
};
