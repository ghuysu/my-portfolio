interface Contact {
  email: string;
  address: string;
  github: string;
  linkedIn: string;
  facebook: string;
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
}
