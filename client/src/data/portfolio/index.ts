import { Project, Category } from '../../types';

import project1 from './travel-vlog-adventure';
import project2 from './automation-vfx';
import project3 from './culinary-journeys';
import project4 from './ecocharge-power-bank';
import project5 from './elevatecorp-corporate-video';
import project6 from './executive-insights';
import project7 from './fashion-brand-showcase';
import project8 from './glotech-smart-home';
import project9 from './healthy-living-expo-2023';
import project10 from './innovatex-summit-2023';
import project11 from './learntech-online-course-series';
import project12 from './pixel-pioneers';
import project13 from './rising-tides';
import project14 from './scope-solar-panel-system';
import project15 from './shaping-tomorrow-today';
import project16 from './smart-wearables';
import project17 from './socialbuzz-reel';
import project18 from './sunnysip-beverage-commercial';
import project19 from './techconnect-expo-2023';
import project20 from './the-timekeepers-watch';
import project21 from './top-roofers';
import project22 from './unspoken-letters-shortfilm';
import project23 from './urban-explorers';
import project24 from './urbaneats-food-delivery';
import project25 from './villa-serenity';
import project26 from './voices-of-resilience';
import project27 from './wanderlust-chronicles';
import project28 from './whispers-in-the-mist-shortfilm';

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
