export interface ProjectCaseStudy {
  objectives: string[];
  scopes: { title: string; items: string[] }[];
  results: string;
  lessons: string[];
  conclusion: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface CastingMember {
  role: string;
  name: string;
  avatar: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  duration?: string;
  year: string;
  director?: string;
  credits?: string[];
  role?: string;
  aspectRatio?: string;
  /** Per-project gallery images (overrides category-based defaults) */
  gallery?: string[];
  /** Per-project intro paragraph (overrides category-based default) */
  introParagraph?: string;
  /** Per-project case study data */
  caseStudy?: ProjectCaseStudy;
  /** Per-project testimonials */
  testimonials?: Testimonial[];
  /** Per-project casting/crew team */
  casting?: CastingMember[];
}

export type Category =
  | 'All'
  | 'Animation'
  | 'Commercials'
  | 'Corporate'
  | 'Documentary'
  | 'Educational'
  | 'Entertainment'
  | 'Event'
  | 'Fashion'
  | 'Interview'
  | 'Lifestyle'
  | 'Product Video'
  | 'Real Estate'
  | 'Social Media';
