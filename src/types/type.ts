interface Social {
  name: string;
  url: string;
}

interface Experience {
  name: string;
  duration: string;
  role: string;
  location: string;
  description: string;
}

interface Projects {
  name: string;
  description: string;
  technologies: string[];
  ref: string;
  image?: string;
}

interface Education {
  title: string;
  profession: string;
  institution: string;
  year: string;
  description?: string;
  image?: string;
  url?: string;
}

interface Certificate {
  name: string;
  organization: string;
  year: string;
  url?: string;
  image?: string;
}

export interface Presentation {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  experience: Experience[];
  projects: Projects[];
  education: Education[];
  certificates: Certificate[];
  profile?: string;
}
