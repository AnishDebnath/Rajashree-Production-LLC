import type { Album } from './types';

const album: Album = {
    id: 'river-devotion',
    title: 'Bengal Craftsmen: Kumartuli & Durga Puja',
    description: 'Documenting the master clay sculptors of Kumartuli preparing magnificent idols for Durga Puja. A powerful, quiet testament to heritage craftsmanship, art, and festival devotion in Bengal.',
    coverImage: '/src/assets/images/kumartuli-sculptor-film.jpg',
    location: 'Kumartuli, Kolkata',
    year: '2025',
    category: 'Documentary / Cultural',
    projectType: 'Cultural Feature Film',
    camera: 'ARRI Alexa Mini LF',
    lenses: 'Canon K35 Vintage Primes',
    otherEquipment: 'Handheld audio recorder for environmental soundscapes',
    highlights: [
        'Capturing the master sculptors painting intricate eyes on clay idols under warm bulb light.',
        'Detailing the humble, dedicated daily routine of Kumartuli artisan families.',
        'A photographic exploration of devotion, using warm amber lighting and deep red earth pigments.'
    ],
    challenges: [
        'Maintaining complete discretion while shooting in narrow artisan lanes.',
        'Predicting dust and clay particles in workshops to protect camera gear.',
        'Adapting to fast-changing natural light inside covered lanes.'
    ],
    behindTheScenes: [
        'Sitting with Kumartuli artisans for days to build trust before filming close-ups.',
        'Sourcing vintage K35 lenses to capture organic, warm, and highly authentic textures of clay.',
        'Building strong relationships with local artisan committees.'
    ],
    photos: [
        {
            id: 'rd-1',
            url: '/src/assets/images/kumartuli-sculptor-film.jpg',
            caption: 'Master artisan in Kumartuli painting eyes on a clay idol under warm bulb light.'
        },
        {
            id: 'rd-2',
            url: '/src/assets/images/durga-puja-cinematic.jpg',
            caption: 'Grand Durga Puja festival celebrations featuring Dhunuchi dance in golden light.'
        },
        {
            id: 'rd-3',
            url: '/src/assets/images/bengali-heritage-mansion.jpg',
            caption: 'Traditional heritage courtyard prepared for festive rituals.'
        },
        {
            id: 'rd-4',
            url: '/src/assets/images/project-commercial-gold.jpg',
            caption: 'Royal festive attire in glowing gold and deep crimson red.'
        }
    ]
};

export default album;
