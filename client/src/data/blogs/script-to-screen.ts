import type { BlogPost } from './index';

export const scriptToScreen: BlogPost = {
    id: 'from-script-to-screen-the-journey-of-crafting-stories',
    category: 'STORIES',
    title: 'From Script to Screen: Our Journey Making a Feature Film in Kolkata',
    author: 'Vikramaditya Roy',
    date: 'OCT 8, 2025',
    image: '/src/assets/images/bengali-heritage-mansion.jpg',
    excerpt: 'Go behind the scenes and follow the step-by-step journey that turns a screenplay into a feature film.',
    introduction: "Every film starts as a screenplay. Turning written words into cinematic light, shadow, and sound is a careful process of passion and craft.",
    sections: [
        {
            title: 'The Three Phases of Filmmaking',
            content: 'There are three main phases: Pre-production, Production on location in Kolkata, and Post-production.'
        },
        {
            items: [
                {
                    num: '1.',
                    label: 'Script & Location Scouting',
                    description: 'Finding heritage mansions in North Kolkata and writing dialogue that captures Bengal culture.'
                },
                {
                    num: '2.',
                    label: 'Cinematography & Set Styling',
                    description: 'Planning camera moves and matching warm golden lighting to the story mood.'
                }
            ]
        }
    ],
    conclusion: "Understanding this process is what separates ordinary footage from timeless cinema at Rajashree Production LLP."
};