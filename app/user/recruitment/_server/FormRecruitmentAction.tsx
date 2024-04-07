"use server";
import dbConnect from "@db/db";
import Recruitment from "@model/Recruitment";

export const getRecruitById = async (data: any) => {
    await dbConnect();
    let re = await Recruitment.findOne({ id_recruitment: data.id, language: data.language });
    return JSON.parse(JSON.stringify(re));
}

export const saveRecruit = async (data: any) => {
    await dbConnect();
    let re = new Recruitment();
    re.title = data['title'];
    re.gender = data['gender'];
    re.education = data['education'];
    re.experience = data['experience'];
    re.work_time = data['work_time'];
    re.work_form = data['work_form'];
    re.work_place = data['work_place'];
    re.salary = data['salary'];
    re.job_description = data['job_description'];
    re.requirement = data['requirement'];
    re.benefit = data['benefit'];
    re.document = data['document'];
    re.contact = data['contact'];
    re.deadline = data['deadline'] ?? new Date();
    re.quantity = data['quantity'];
    re.language = data['language'];
    if(!data['id']){
      const maxId = await Recruitment.findOne().sort('-id_recruitment').select('id_recruitment');
      if(maxId == null){
          re.id_recruitment = 1;
      }else{
          re.id_recruitment = maxId.id_recruitment + 1;
      }
    }else{
      re.id_recruitment = data['id'];
    }
    await re.save();
    return { status: 200 };
}

export const updateRecruit = async (data: any) => {
  await dbConnect();
  let re = await Recruitment.findOne({id_recruitment: data['id_recruitment'], language: data['language']});
  if(re == null){
      re = new Recruitment();
      re.id_recruitment = data['id_recruitment']
  }
  re.title = data['title'];
  re.gender = data['gender'];
  re.education = data['education'];
  re.experience = data['experience'];
  re.work_time = data['work_time'];
  re.work_form = data['work_form'];
  re.work_place = data['work_place'];
  re.salary = data['salary'];
  re.job_description = data['job_description'];
  re.requirement = data['requirement'];
  re.benefit = data['benefit'];
  re.document = data['document'];
  re.contact = data['contact'];
  re.deadline = data['deadline'];
  re.quantity = data['quantity'];
  re.language = data['language'];
  await re.save();
  return { status: 200 };
}

