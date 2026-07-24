import type { Album } from './types';

const album: Album = {
    id: 'misty-palms',
    title: 'Sundarbans & Bengal Backwaters',
    description: 'A cinematic odyssey through the misty channels of the Sundarbans and Bengal backwaters at sunrise. Soft fog blending with golden morning rays to create an ethereal, quiet world.',
    coverImage: '/src/assets/images/project-doc-sundarbans.jpg',
    location: 'Sundarbans, Bengal',
    year: '2026',
    category: 'Documentary / Nature',
    projectType: 'Feature Documentary Film',
    camera: 'Sony Venice 2 8K',
    lenses: 'Cooke Anamorphic /i Full Frame Plus',
    otherEquipment: 'Polarizing Filters, Carbon Travel Tripod',
    highlights: [
        'Documenting the interplay of fog and morning light slicing through mangrove channels.',
        'Studying the quiet, glass-like waters of the Ganges delta during early blue hours.',
        'Capturing the immense scale of Bengal coastal wilderness.'
    ],
    challenges: [
        'Dealing with high humidity levels and sudden mist on cinema camera lenses.',
        'Navigating wooden boats through tidal channels in pre-dawn dark to set up before mist dissipates.',
        'Capturing subtle gradations of mangrove greens without losing structural details.'
    ],
    behindTheScenes: [
        'Spending four days on a house-boat, waking up before dawn to catch river mist at its peak.',
        'Using slow shutter speeds to capture the gentle, painterly movement of water hyacinths.',
        'Post-processing with warm, luminous golden hour highlights.'
    ],
    photos: [
        {
            id: 'mp-1',
            url: '/src/assets/images/project-doc-sundarbans.jpg',
            caption: 'Traditional wooden boat gliding through quiet Sundarbans channels at misty sunrise.'
        },
        {
            id: 'mp-2',
            url: '/src/assets/images/princep-ghat-film.jpg',
            caption: 'Quiet riverfront waters reflecting morning sky at Princep Ghat.'
        },
        {
            id: 'mp-3',
            url: '/src/assets/images/victoria-memorial-film.jpg',
            caption: 'Golden sun rays piercing through the trees along the Hooghly riverbank.'
        },
        {
            id: 'mp-4',
            url: '/src/assets/images/howrah-bridge-dusk.jpg',
            caption: 'The vast river horizon presenting an absolute sense of scale.'
        }
    ]
};

export default album;
