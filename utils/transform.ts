import {
  IBasicStore,
  IEducationItem,
  IProfessionalExperienceItem,
} from "@/stores/types";
import generateUUID from "./uuid";

interface IBasic
  extends Pick<
    IBasicStore,
    | "name"
    | "objective"
    | "email"
    | "website"
    | "location"
    | "phoneNumber"
    | "wantedJobTitle"
  > {}

interface ITransformBasic {
  name: string;
  objective: string;
  wanted_job_title: string;
  email: string;
  phone_number: string;
  website: string;
  location: string;
}

function transformBasic(basic: ITransformBasic): IBasic {
  return {
    name: basic.name,
    objective: basic.objective,
    email: basic.email,
    website: basic.website,
    location: basic.location,
    phoneNumber: basic.phone_number,
    wantedJobTitle: basic.wanted_job_title,
  };
}

interface ITransformProfessionalExperienceItem {
  company_name: string;
  location: string;
  job_title: string;
  date: string;
  description: string;
}

function transformProfessionalExperience(
  experiences: ITransformProfessionalExperienceItem[]
): IProfessionalExperienceItem[] {
  return experiences.map((experience: ITransformProfessionalExperienceItem) => {
    return {
      id: generateUUID(),
      companyName: experience.company_name,
      location: experience.location,
      jobTitle: experience.job_title,
      date: experience.date,
      description: experience.description,
    };
  });
}

interface ITransformEducationItem {
  school_name: string;
  date: string;
  degree_and_major: string;
  gpa: string;
  description: string;
}

function transformEducation(
  educations: ITransformEducationItem[]
): IEducationItem[] {
  return educations.map((education: ITransformEducationItem) => {
    return {
      id: generateUUID(),
      schoolName: education.school_name,
      date: education.date,
      degreeAndMajor: education.degree_and_major,
      gpa: education.gpa,
      description: education.description,
    };
  });
}

export { transformBasic, transformProfessionalExperience, transformEducation };
