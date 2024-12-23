interface Contact {
  email: string;
  address: string;
  github: string;
  linkedIn: string;
  facebook: string;
  cv: string;
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

export interface Data {
  nickname: string;
  fullname: string;
  about: string;
  contact: Contact;
  role: string[];
  education: Certificate[];
  skills: Skill[];
  projects: string[];
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
