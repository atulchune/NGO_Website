export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  images: string[];
  stats: Record<string, string>;
}

export interface GalleryImage {
  id: number;
  url: string;
  category: string;
  alt: string;
}

export interface GalleryData {
  categories: string[];
  images: GalleryImage[];
}

export interface CommitteeGroup {
  group: string;
  members: CommitteeMember[];
}

export interface CommitteeMember {
  name: string;
  role: string;
  photo: string;
}

export interface ImpactStat {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
