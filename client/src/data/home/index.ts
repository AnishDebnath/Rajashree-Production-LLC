import { Project } from '../../types';
import { BlogPost } from '../blogs';
export { featuredProjects } from '../portfolio';

import { preProdMarqueeImages, prodMarqueeImages, postProdMarqueeImages } from '../services';

export const preProductionCarouselImages: string[] = preProdMarqueeImages.map(m => m.url);
export const productionCarouselImages: string[] = prodMarqueeImages.map(m => m.url);
export const postProductionCarouselImages: string[] = postProdMarqueeImages.map(m => m.url);
export { heroSlides } from './hero';
export { faqs } from '../faq';
export { testimonials } from '../testimonial';
export { industries } from './industry';
export { homeBlogs } from './blog';

export interface HomePageProps {
    setActiveTab: (tab: string) => void;
    onShowMessage: (msg: string, type?: 'info' | 'success') => void;
    onProjectClick?: (project: Project) => void;
    onSelectBlog?: (blog: BlogPost) => void;
}