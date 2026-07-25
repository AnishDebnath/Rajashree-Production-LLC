import type { Album } from './index';

const album: Album = {
    id: 'neon-rain',
    title: 'Kolkata After Dark: Tramway Lights',
    description: "Capturing the cinematic soul of Kolkata streets at dusk and night. Wet pavement reflections, yellow trams in warm lights, and classic yellow taxis moving through the city's historic streets.",
    coverImage: '/src/assets/images/kolkata-tram-night.jpg',
    location: 'North Kolkata, India',
    year: '2025',
    category: 'Cinematic Street / Film Stills',
    projectType: 'Editorial & Thriller Web Series Study',
    camera: 'RED V-Raptor 8K',
    lenses: 'Leitz Cine Primes 35mm f/1.4',
    otherEquipment: 'Handheld LED Wand, CineBloom Diffusion Filter',
    highlights: [
        'Blending classic Kolkata trams with vintage yellow taxis under glowing streetlights.',
        'Studying rain reflections on asphalt, using passing traffic to paint streaks of warm gold and deep amber.',
        'Exploring the tight, busy alleyways of College Street and Shyambazar at 2:00 AM.'
    ],
    challenges: [
        'Keeping cinema camera gear dry and working during heavy monsoon downpours.',
        'Balancing high-contrast street lights with dark shadows without overexposing highlights.',
        'Navigating fast-moving city traffic safely while positioning the camera low on wet pavement.'
    ],
    behindTheScenes: [
        'Using a CineBloom diffusion filter to give street lamps a dreamy, film-like glow.',
        'Coordinating nighttime shoots with local tram conductors through historic routes.',
        'Waiting underneath overpasses for passing trams and classic taxis to align in a single frame.'
    ],
    photos: [
        {
            id: 'nr-1',
            url: '/src/assets/images/kolkata-tram-night.jpg',
            caption: 'A vintage Kolkata tram moving through wet cobblestone streets in evening rain.'
        },
        {
            id: 'nr-2',
            url: '/src/assets/images/project-ott-thriller.jpg',
            caption: 'Intense noir scene from our OTT crime thriller web series shot on Kolkata location.'
        },
        {
            id: 'nr-3',
            url: '/src/assets/images/howrah-bridge-dusk.jpg',
            caption: 'Glowing tail lights tracing paths across Howrah Bridge at dusk.'
        },
        {
            id: 'nr-4',
            url: '/src/assets/images/kolkata-film-hero.jpg',
            caption: 'Nighttime camera crew setup capturing high-contrast cinematic reflections.'
        }
    ]
};

export default album;
