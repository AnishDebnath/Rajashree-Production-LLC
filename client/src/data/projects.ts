import type { Category } from '../types';

// -- Barrel re-export --
// All project data lives in ./portfolio/*.ts
// Add new project file to ./portfolio/ and register it in ./portfolio/index.ts
export { projectsData, featuredProjects, featuredProjectIds } from './portfolio';

export const projectCategories: Category[] = [
    'All', 'Animation', 'Commercials', 'Corporate', 'Documentary',
    'Educational', 'Entertainment', 'Event', 'Fashion', 'Interview',
    'Lifestyle', 'Product Video', 'Real Estate', 'Social Media'
];
