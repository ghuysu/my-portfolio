interface Contact {
  email: string;
  address: string;
  github: string;
  linkedIn: string;
  facebook: string;
  cv: string;
  phone: string;
}

interface Certificate {
  name: string;
  time: string;
  location: string;
}

interface Skill {
  name: string;
  list: Item[];
}

interface Statistics {
  numberOfCompletedProjects: number;
  numberOfCertificates: number;
  numberOfDegrees: number;
}

interface Service {
  name: string;
  description: string;
}

interface Item {
  name: string;
  value: string;
}

export interface Project {
  name: string;
  type: string[];
  description: string;
  usedTechs: string[];
  time: string;
  link: Item[];
  imageUrls: string[];
}

export interface Data {
  nickname: string;
  fullname: string;
  about: string;
  contact: Contact;
  role: string[];
  education: Certificate[];
  skills: Skill[];
  projects: Project[];
  statistics: Statistics;
  services: Service[];
  summary: Item[];
}

export interface HomeProps {
  fullname: string;
  about: string;
  contact: Contact;
  role: string[];
}

export interface RightSectionProps {
  fullname: string;
  about: string;
  contact: Contact;
  role: string[];
}

export interface AnimationBarsProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  path: string;
}

export interface ServicesProps {
  services: Service[];
}

export interface AboutProps {
  summary: Item[];
  education: Certificate[];
  skills: Skill[];
}

export interface AboutLeftSectionProps {
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

export interface AboutRightSectionProps {
  summary: Item[];
  education: Certificate[];
  skills: Skill[];
  path: string;
}

export interface AboutMeProps {
  summary: Item[];
}

export interface EducationProps {
  education: Certificate[];
}

export interface SkillsProps {
  skills: Skill[];
}

export interface ContactRightSectionProps {
  email: string;
  address: string;
  phone: string;
}

export interface ContactProps {
  email: string;
  address: string;
  phone: string;
}

export interface ProjectsProps {
  projects: Project[];
}

export interface ProjectsLeftSectionProps {
  numberOfProjects: number;
  typeOfProjects: string[];
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

export interface ProjectsRightSectionProps {
  path: string;
  typeOfProjects: string[];
  projects: Project[];
  setNumberOfProjects: React.Dispatch<React.SetStateAction<number>>;
  setShowedProject: React.Dispatch<React.SetStateAction<Project | null>>;
}

export interface ProjectDetailProps {
  project: Project;
  setShowedProject: React.Dispatch<React.SetStateAction<Project | null>>;
}
