export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  deliverables: string[];
  image: string;
  videoUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Architecture' | 'Interior' | 'Visualization';
  location: string;
  description: string;
  image: string;
  tools: string[];
  year: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SubBranch {
  id: string;
  name: string;
  ratePerSqm?: number;
  flatRate?: number;
}

export interface QuoteService {
  id: string;
  name: string;
  icon: string;
  subBranches: SubBranch[];
}

export interface Addon {
  id: string;
  name: string;
  ratePerSqm?: number;
  flatRate?: number;
}
