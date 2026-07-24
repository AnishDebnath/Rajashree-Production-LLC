import { Project, ProjectCaseStudy, Testimonial, CastingMember } from '../../types';

const caseStudy: ProjectCaseStudy = {
    "objectives": [
        "Deconstruct Ecoscape solutions's brand values and product narrative into a compelling cinematic visual brief.",
        "Showcase the quality, design, and emotional resonance of Scope Solar Panel System through high-end production techniques.",
        "Create a visually striking, retention-optimized spot that drives brand recall and consumer desire.",
        "Deliver a versatile master edit suitable for broadcast, digital, and social media distribution."
    ],
    "scopes": [
        {
            "title": "Creative Development",
            "items": [
                "Work with Ecoscape solutions's marketing team to align on brand messaging, visual direction, and key product highlights.",
                "Develop a moodboard focusing on lighting, color palette, and compositional references that reflect Scope Solar Panel System's premium positioning."
            ]
        },
        {
            "title": "Principal Photography",
            "items": [
                "Deploy ARRI Alexa and Cooke S7/i prime lenses for creamy background separation and rich skin tones.",
                "Execute precision camera moves — slider tracks, micro-jib motions, and macro focus pulls — to accentuate Scope Solar Panel System's design details."
            ]
        },
        {
            "title": "Post-Production",
            "items": [
                "Conduct frame-by-frame DaVinci Resolve color grading to achieve a warm, premium cinematic look.",
                "Integrate spatial audio sound design with layered ambient textures, voiceover, and licensed music."
            ]
        }
    ],
    "results": "The product video spot for Ecoscape solutions drove unprecedented engagement and significantly elevated brand perception. The cinematic visual language positioned Scope Solar Panel System as a premium offering, resulting in increased inquiries and positive audience feedback across all distribution channels.",
    "lessons": [
        "Shallow depth-of-field and macro detail shots are more effective at driving product desire than standard wide shots.",
        "Custom sound design contributes over half of the commercial’s emotional impact and should never be an afterthought.",
        "A well-structured creative brief and pre-production phase saves significant time and budget during the shoot."
    ],
    "conclusion": "This product video production showcases that when lighting, sound design, and precision pacing align, standard product advertisements transform into cinematic works of art that command attention and drive results."
};

const testimonials: Testimonial[] = [
    {
        "quote": "\"The team transformed our vision for Scope Solar Panel System into a stunning cinematic reality. Their attention to detail and creative passion exceeded every expectation we had.\"",
        "author": "ECOSCAPE SOLUTIONS",
        "role": "EXECUTIVE PRODUCER",
        "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250"
    },
    {
        "quote": "\"Working with Rajashree Production on Scope Solar Panel System was an absolute pleasure. Their cinematography, sound design, and color grading are world-class — they made our brand look incredible.\"",
        "author": "HELENA MOSS",
        "role": "BRAND DIRECTOR",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250"
    },
    {
        "quote": "\"From concept to delivery, every frame of Scope Solar Panel System was meticulously crafted. The production quality, pacing, and emotional depth far surpassed anything we imagined possible.\"",
        "author": "DEVON KOVACS",
        "role": "CHIEF CREATIVE OFFICER",
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250"
    }
];

const casting: CastingMember[] = [
    { role: 'Director', name: 'Anurag Kashyap', avatar: '/src/assets/images/artist-vikram-roy.jpg' },
    { role: 'VFX', name: 'Vikram Aditya', avatar: '/src/assets/images/artist-elina-roy.jpg' },
    { role: 'Script', name: 'Divya Patel', avatar: '/src/assets/images/artist-kabir-mehta.jpg' },
    { role: 'Voiceover', name: 'Ashutosh Rana', avatar: '/src/assets/images/artist-sarah-sen.jpg' }
];

const gallery: string[] = [
    '/src/assets/images/project-doc-sundarbans.jpg',
    '/src/assets/images/kumartuli-sculptor-film.jpg',
    '/src/assets/images/princep-ghat-film.jpg'
];

const project: Project = {
    id: '14',
    slug: 'scope-solar-panel-system',
    title: 'Scope Solar Panel System',
    client: 'ECOSCAPE SOLUTIONS',
    category: 'Product Video',
    image: '/src/assets/images/howrah-bridge-dusk.jpg',
    description: 'Product video combining 3D schematic models and physical installations across Bengal energy networks.',
    duration: '2m 50s',
    year: '2024',
    director: 'Anurag Kashyap',
    role: 'Director & Visual Design',
    credits: ['Director: Anurag Kashyap', 'VFX: Vikram Aditya', 'Script: Divya Patel', 'Voiceover: Ashutosh Rana'],
    introParagraph: 'Ecoscape solutions commissioned our production house to create a premium product video spot for "Scope Solar Panel System". The goal was to capture the product\'s tactile quality and emotional appeal through dramatic macro cinematography, precision lighting, and cinematic sound design.',
    caseStudy,
    testimonials,
    casting,
    gallery
};

export default project;
