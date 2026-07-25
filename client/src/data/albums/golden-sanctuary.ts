import type { Album } from './index';

const album: Album = {
    id: 'golden-sanctuary',
    title: 'Heritage Hooghly & Victoria Serenade',
    description: "A peaceful visual study of Kolkata's famous heritage architecture — Victoria Memorial and Princep Ghat. Nature and historic monuments exist in harmony. This photo series explores the symmetry and beauty of Bengal's heritage structures at dawn.",
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
        'Capturing birds over Hooghly River at sunrise in sync with morning temple bells.',
        'A deep study of vintage North Kolkata heritage mansions standing for centuries.'
    ],
    challenges: [
        'Managing high-contrast lighting between bright sunrise sky and deep shadow archways.',
        'Getting drone permissions near heritage zones for aerial views of Kolkata skyline.',
        'Working with local authorities to find peaceful compositions and capture quiet frames.'
    ],
    behindTheScenes: [
        'Waking up at 4:00 AM daily for two weeks to study wind patterns and capture the river with mirror-like stillness.',
        'Working with local wooden boatmen to navigate the Hooghly River during blue hour.',
        'Color grading with custom warm, low-contrast presets to highlight rich gold and amber tones.'
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
