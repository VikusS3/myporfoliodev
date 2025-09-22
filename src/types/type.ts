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
}

export interface Presentation {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  experience: Experience[];
  projects: Projects[];
  profile?: string;
}
