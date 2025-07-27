export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  category: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}