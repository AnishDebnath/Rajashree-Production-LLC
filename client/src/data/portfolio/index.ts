import { Project, Category } from '../../types';

import project1 from './project-1';
import project2 from './project-2';
import project3 from './project-3';
import project4 from './project-4';
import project5 from './project-5';
import project6 from './project-6';
import project7 from './project-7';
import project8 from './project-8';
import project9 from './project-9';
import project10 from './project-10';
import project11 from './project-11';
import project12 from './project-12';
import project13 from './project-13';
import project14 from './project-14';
import project15 from './project-15';
import project16 from './project-16';
import project17 from './project-17';
import project18 from './project-18';
import project19 from './project-19';
import project20 from './project-20';
import project21 from './project-21';
import project22 from './project-22';
import project23 from './project-23';
import project24 from './project-24';
import project25 from './project-25';
import project26 from './project-26';
import project27 from './project-27';
import project28 from './project-28';

// ── Full projects list ──
// Add new project import + entry here to auto-register in grid
export const projectsData: Project[] = [
    project1, project2, project3, project4, project5,
    project6, project7, project8, project9, project10,
    project11, project12, project13, project14, project15,
    project16, project17, project18, project19, project20,
    project21, project22, project23, project24, project25,
    project26, project27, project28
];

// ── IDs of projects featured on home page ──
// Add/remove IDs to control which projects appear in FeaturedPortfolio section
export const projectCategories: Category[] = [
    'All', 'Animation', 'Commercials', 'Corporate', 'Documentary',
    'Educational', 'Entertainment', 'Event', 'Fashion', 'Interview',
    'Lifestyle', 'Product Video', 'Real Estate', 'Social Media'
];

export const featuredProjectIds: string[] = ['1', '7', '3', '20', '13', '18'];

// ── Featured projects display data (custom titles for home page showcase) ──
export const featuredProjects: {
    id: string;
    title: string;
    client: string;
    category: string;
    image: string;
}[] = [
        {
            id: '1',
            title: 'Sundarbans Echoes',
            client: 'BENGAL HERITAGE',
            category: 'Documentary',
            image: '/src/assets/images/project-doc-sundarbans.jpg',
        },
        {
            id: '7',
            title: 'Baluchari Heritage',
            client: 'COUTURE CREATIONS',
            category: 'Fashion',
            image: '/src/assets/images/project-fashion-saree.jpg',
        },
        {
            id: '3',
            title: 'Culinary Journeys',
            client: 'FOODWONDERS',
            category: 'Lifestyle',
            image: '/src/assets/images/project-short-film-tea.jpg',
        },
        {
            id: '20',
            title: "The Timekeeper's Watch",
            client: 'STARFEST',
            category: 'Entertainment',
            image: '/src/assets/images/project-biopic-1920s.jpg',
        },
        {
            id: '13',
            title: 'Rising Tides',
            client: 'AWARENESS INC.',
            category: 'Documentary',
            image: '/src/assets/images/project-doc-sundarbans.jpg',
        },
        {
            id: '18',
            title: 'Kolkata Gold Commercial',
            client: 'ROYAL JEWELLERS',
            category: 'Commercials',
            image: '/src/assets/images/project-commercial-gold.jpg',
        }
    ];
