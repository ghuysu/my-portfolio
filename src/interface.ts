interface Contact {
  email: string;
  address: string;
  github: string;
  linkedIn: string;
  facebook: string;
  cv: string;
}

interface University {
  name: string;
  time: string;
  degree: string;
}

interface Education {
  university: University;
  certificates: string[];
}

interface Skills {
  backend: string[];
  frontend: string[];
  data_storage: string[];
  others: string[];
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

export interface Data {
  nickname: string;
  fullname: string;
  about: string;
  contact: Contact;
  role: string[];
  education: Education;
  skills: Skills;
  projects: string[];
  experience: string[];
  statistics: Statistics;
  services: Service[];
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
