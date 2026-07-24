export interface BlogSection {
    title?: string;
    introduction?: string;
    items?: {
        num?: string;
        label: string;
        description: string;
    }[];
    content?: string;
}

export interface BlogPost {
    id: string;
    category: string;
    title: string;
    author: string;
    date: string;
    image: string;
    excerpt: string;
    introduction: string;
    sections: BlogSection[];
    conclusion: string;
}

export const blogCategories: string[] = ['All', 'NEWS', 'STORIES', 'TIPS & TRICKS'];

import { ecoFriendlyFilmSets } from './eco-friendly-film-sets';
import { bengaliCinemaSlate2026 } from './bengali-cinema-slate-2026';
import { cinematicBranding } from './cinematic-branding';
import { careerOpportunities } from './career-opportunities';
import { scriptToScreen } from './script-to-screen';
import { ottStreamingBoom } from './ott-streaming-boom';
import { cinematicLightingColor } from './cinematic-lighting-color';
import { behindTheScenes } from './behind-the-scenes';

export { ecoFriendlyFilmSets } from './eco-friendly-film-sets';
export { bengaliCinemaSlate2026 } from './bengali-cinema-slate-2026';
export { cinematicBranding } from './cinematic-branding';
export { careerOpportunities } from './career-opportunities';
export { scriptToScreen } from './script-to-screen';
export { ottStreamingBoom } from './ott-streaming-boom';
export { cinematicLightingColor } from './cinematic-lighting-color';
export { behindTheScenes } from './behind-the-scenes';

export const blogsData = [
    ecoFriendlyFilmSets,
    bengaliCinemaSlate2026,
    cinematicBranding,
    careerOpportunities,
    scriptToScreen,
    ottStreamingBoom,
    cinematicLightingColor,
    behindTheScenes
];