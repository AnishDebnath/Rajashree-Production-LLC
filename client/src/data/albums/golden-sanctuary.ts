import type { Album } from './types';

const album: Album = {
    id: 'golden-sanctuary',
    title: 'Heritage Hooghly & Victoria Serenade',
    description: "A serene, golden visual study of Kolkata's iconic heritage architecture including Victoria Memorial and Princep Ghat, where nature and historic monuments exist in absolute harmony. This photo series explores the symmetry and majesty of Bengal's heritage structures at the break of dawn.",
    coverImage: '/src/assets/images/victoria-memorial-film.jpg',
    location: 'Kolkata, Bengal',
    year: '2025-2026',
    category: 'Cultural Heritage / Film Stills',
    projectType: 'Cultural Heritage Exhibition',
    camera: 'ARRI Alexa Mini LF',
    lenses: 'ARRI Signature Primes 29mm, 47mm, 75mm',
    otherEquipment: 'DJI Inspire 3 Drone, Heavy Duty Ronin 2 Gimbal',
    highlights: [
        'Documenting the architectural symmetry of Victoria Memorial and Princep Ghat during golden hours.',
        'Capturing flocking birds over Hooghly River at sunrise in perfect sync with morning temple bells.',
        'A deep-dive study of vintage North Kolkata heritage mansions that have stood for centuries.'
    ],
    challenges: [
        'Managing high-contrast lighting between bright sunrise sky and deep shadow archways.',
        'Securing drone permissions near heritage zones to safely capture aerial vistas of Kolkata skyline.',
        'Working with local authorities to find undisturbed compositions and capture peaceful frames.'
    ],
    behindTheScenes: [
        'Waking up at 4:00 AM daily for two weeks to study wind patterns and capture the river with mirror-like stillness.',
        'Engaging with local wooden boatmen to navigate the Hooghly River during blue hour.',
        'Color grading with custom warm, low-contrast presets to accentuate rich gold and amber hues.'
    ],
    photos: [
        {
            id: 'gs-1',
            url: '/src/assets/images/victoria-memorial-film.jpg',
            caption: 'The majestic Victoria Memorial at golden hour with dramatic sky above.'
        },
        {
            id: 'gs-2',
            url: '/src/assets/images/howrah-bridge-dusk.jpg',
            caption: 'Iconic Howrah Bridge at dusk with yellow taxis crossing over Hooghly river.'
        },
        {
            id: 'gs-3',
            url: '/src/assets/images/princep-ghat-film.jpg',
            caption: 'Princep Ghat columns glowing under twilight lanterns by the riverfront.'
        },
        {
            id: 'gs-4',
            url: '/src/assets/images/bengali-heritage-mansion.jpg',
            caption: 'Quiet sunlight streaming into the inner courtyard of a North Kolkata zamindar mansion.'
        }
    ]
};

export default album;
