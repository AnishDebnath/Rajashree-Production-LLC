import type { BlogPost } from './index';

export const scriptToScreen: BlogPost = {
    id: 'from-script-to-screen-the-journey-of-crafting-stories',
    category: 'STORIES',
    title: 'From Script to Screen: The Creative Journey of Bengali Feature Filmmaking',
    author: 'VIKRAMADITYA ROY',
    date: 'OCT 8, 2025',
    image: '/src/assets/images/bengali-heritage-mansion.jpg',
    excerpt: 'Go behind the scenes and follow the step-by-step journey that transforms a screenplay into an award-winning feature film.',
    introduction: "Every film masterpiece starts as a screenplay. Translating written dialogue into cinematic light, shadow, and sound is a meticulous dance of passion and art.",
    sections: [
        {
            title: 'The Blueprint of Cinema Success',
            content: 'There are three main phases: Pre-production, Production on location in Kolkata, and Post-production.'
        },
        {
            items: [
                {
                    num: '1.',
                    label: 'The Screenplay & Location Scouting',
                    description: 'Finding heritage mansions in North Kolkata and writing dialogue that captures Bengal culture.'
                },
                {
                    num: '2.',
                    label: 'Cinematography & Set Styling',
                    description: 'Planning camera moves and matching warm golden lighting to the narrative mood.'
                }
            ]
        }
    ],
    conclusion: "Understanding this lifecycle is what separates ordinary footage from timeless cinema at Rajashree Production LLC."
};