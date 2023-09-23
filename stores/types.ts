export interface IZoomStore {
  zoom: number;
  setZoom: (zoomValue: number) => void;
}

export interface IBasicStore {
  name: string;
  objective: string;
  email: string;
  website: string;
  location: string;
  phoneNumber: string;
  wantedJobTitle: string;
  setName: (name: string) => void;
  setObjective: (objective: string) => void;
  setEmail: (email: string) => void;
  setWebsite: (website: string) => void;
  setLocation: (location: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setWantedJobTitle: (wantedJobTitle: string) => void;
}

export interface IProfessionalExperienceItem {
  id: string;
  companyName: string;
  location: string;
  jobTitle: string;
  date: string;
  description: string;
}

export interface IProfessionalExperienceStore {
  title: string;
  visible: boolean;
  experiences: IProfessionalExperienceItem[];
  setTitle: (title: string) => void;
  toggle: () => void;
  add: () => void;
  moveUp: (index: number) => void;
  moveDown: (index: number) => void;
  remove: (index: number) => void;
  update: (
    index: number,
    updateProfessionalExperience: IProfessionalExperienceItem
  ) => void;
}

export interface IEducationItem {
  id: string;
  schoolName: string;
  date: string;
  degreeAndMajor: string;
  gpa: string;
  description: string;
}

export interface IEducationStore {
  title: string;
  visible: boolean;
  educations: IEducationItem[];
  setTitle: (title: string) => void;
  toggle: () => void;
  add: () => void;
  moveUp: (index: number) => void;
  moveDown: (index: number) => void;
  remove: (index: number) => void;
  update: (index: number, updateEducation: IEducationItem) => void;
}

export interface IProjectItem {
  id: string;
  projectName: string;
  date: string;
  description: string;
}

export interface IProjectStore {
  title: string;
  visible: boolean;
  projects: IProjectItem[];
  setTitle: (title: string) => void;
  toggle: () => void;
  add: () => void;
  moveUp: (index: number) => void;
  moveDown: (index: number) => void;
  remove: (index: number) => void;
  update: (index: number, updateProject: IProjectItem) => void;
}

export interface ISkillStore {
  title: string;
  visible: boolean;
  skills: string;
  setTitle: (title: string) => void;
  toggle: () => void;
  update: (updateSkill: string) => void;
}
