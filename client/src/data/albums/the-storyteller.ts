import type { Album } from './index';

const album: Album = {
    id: 'the-storyteller',
    title: 'Voices of Bengal: Film Character Portraits',
    description: 'A deep, high-contrast character study capturing the emotion, grace, and depth etched in the faces of Bengali actors and culture icons. Each photograph acts as a still frame from Rajashree Production film projects.',
    coverImage: '/src/assets/images/kolkata-film-hero.jpg',
    location: 'Kolkata Studios, India',
    year: '2025-2026',
    category: 'Portrait / Film Stills',
    projectType: 'Cinematic Character Series',
    camera: 'Hasselblad H6D-100c',
    lenses: 'HC 100mm f/2.2, HC 50mm f/3.5',
    otherEquipment: 'Profoto Pro-11 Flashes, Tungsten Key Lights',
    highlights: [
        'Focusing on intimate close-ups highlighting expressions and emotional depth of Bengali performers.',
        'Studying natural lighting pouring through vintage window shutters in studio sets.',
        'Documenting environmental film stills that weave character and setting together.'
    ],
    challenges: [
        'Building deep rapport with actors in short windows between takes.',
        'Working inside low-light set locations where camera placement requires precision.',
        'Maintaining color consistency across warm skin tones and deep gold/red grading.'
    ],
    behindTheScenes: [
        'Collaborating with makeup and art directors prior to camera rolls.',
        'Using shallow depth of field to make expressive eyes the focal anchor.',
        'Applying custom high-contrast warm color grading matching Rajashree Production brand aesthetics.'
    ],
    photos: [
        {
            id: 'ts-1',
            url: '/src/assets/images/kolkata-film-hero.jpg',
            caption: 'Lead actress in traditional saree during a dramatic feature film scene.'
        },
        {
            id: 'ts-2',
            url: '/src/assets/images/project-bengali-drama.jpg',
            caption: 'Emotional dialogue between lead actors in a heritage courtyard.'
        },
        {
            id: 'ts-3',
            url: '/src/assets/images/project-fashion-saree.jpg',
            caption: 'Royal portrait wearing handcrafted Baluchari silk saree.'
        },
        {
            id: 'ts-4',
            url: '/src/assets/images/project-short-film-tea.jpg',
            caption: 'Authentic expression captured in a North Kolkata morning tea stall scene.'
        }
    ]
};

export default album;
