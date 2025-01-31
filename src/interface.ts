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

export interface AnimationBarsProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProjectsLeftSectionProps {
  numberOfProjects: number;
  typeOfProjects: Item[];
}

export interface ProjectsRightSectionProps {
  typeOfProjects: Item[];
  projects: Project[];
  setNumberOfProjects: React.Dispatch<React.SetStateAction<number>>;
  setShowedProject: React.Dispatch<React.SetStateAction<Project | null>>;
}

export interface ProjectDetailProps {
  project: Project;
  setShowedProject: React.Dispatch<React.SetStateAction<Project | null>>;
}

export interface ImageSliderProps {
  imageUrls: string[];
}
