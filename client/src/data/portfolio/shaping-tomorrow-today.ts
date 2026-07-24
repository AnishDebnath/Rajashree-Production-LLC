import { Project, ProjectCaseStudy, Testimonial, CastingMember } from '../../types';

const caseStudy: ProjectCaseStudy = {
    "objectives": [
        "Deconstruct Innovatex's brand values and product narrative into a compelling cinematic visual brief.",
        "Showcase the quality, design, and emotional resonance of Shaping Tomorrow, Today through high-end production techniques.",
        "Create a visually striking, retention-optimized spot that drives brand recall and consumer desire.",
        "Deliver a versatile master edit suitable for broadcast, digital, and social media distribution."
    ],
    "scopes": [
        {
            "title": "Creative Development",
            "items": [
                "Work with Innovatex's marketing team to align on brand messaging, visual direction, and key product highlights.",
                "Develop a moodboard focusing on lighting, color palette, and compositional references that reflect Shaping Tomorrow, Today's premium positioning."
            ]
        },
        {
            "title": "Principal Photography",
            "items": [
                "Deploy ARRI Alexa and Cooke S7/i prime lenses for creamy background separation and rich skin tones.",
                "Execute precision camera moves — slider tracks, micro-jib motions, and macro focus pulls — to accentuate Shaping Tomorrow, Today's design details."
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
    "results": "The corporate spot for Innovatex drove unprecedented engagement and significantly elevated brand perception. The cinematic visual language positioned Shaping Tomorrow, Today as a premium offering, resulting in increased inquiries and positive audience feedback across all distribution channels.",
    "lessons": [
        "Shallow depth-of-field and macro detail shots are more effective at driving product desire than standard wide shots.",
        "Custom sound design contributes over half of the commercial’s emotional impact and should never be an afterthought.",
        "A well-structured creative brief and pre-production phase saves significant time and budget during the shoot."
    ],
    "conclusion": "This corporate production showcases that when lighting, sound design, and precision pacing align, standard product advertisements transform into cinematic works of art that command attention and drive results."
};

const testimonials: Testimonial[] = [
    {
        "quote": "\"The team transformed our vision for Shaping Tomorrow, Today into a stunning cinematic reality. Their attention to detail and creative passion exceeded every expectation we had.\"",
        "author": "INNOVATEX",
        "role": "EXECUTIVE PRODUCER",
        "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250"
    },
    {
        "quote": "\"Working with Rajashree Production on Shaping Tomorrow, Today was an absolute pleasure. Their cinematography, sound design, and color grading are world-class — they made our brand look incredible.\"",
        "author": "HELENA MOSS",
        "role": "BRAND DIRECTOR",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250"
    },
    {
        "quote": "\"From concept to delivery, every frame of Shaping Tomorrow, Today was meticulously crafted. The production quality, pacing, and emotional depth far surpassed anything we imagined possible.\"",
        "author": "DEVON KOVACS",
        "role": "CHIEF CREATIVE OFFICER",
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250"
    }
];

const casting: CastingMember[] = [
    { role: 'Director', name: 'Dibakar Banerjee', avatar: '/src/assets/images/artist-vikram-roy.jpg' },
    { role: 'DoP', name: 'Amit Sharma', avatar: '/src/assets/images/artist-elina-roy.jpg' },
    { role: 'Sound FX', name: 'Joy Dev', avatar: '/src/assets/images/artist-kabir-mehta.jpg' },
    { role: 'Creative Direction', name: 'Meera Sen', avatar: '/src/assets/images/artist-sarah-sen.jpg' }
];

const gallery: string[] = [
    '/src/assets/images/project-doc-sundarbans.jpg',
    '/src/assets/images/kumartuli-sculptor-film.jpg',
    '/src/assets/images/princep-ghat-film.jpg'
];

const project: Project = {
    id: '15',
    slug: 'shaping-tomorrow-today',
    title: 'Shaping Tomorrow, Today',
    client: 'INNOVATEX',
    category: 'Corporate',
    image: '/src/assets/images/film-crew-set-kolkata.jpg',
    description: 'An emotionally-driven brand narrative corporate film profiling street-level workers transforming Kolkata commutes.',
    duration: '4m 15s',
    year: '2025',
    director: 'Dibakar Banerjee',
    role: 'Executive Production',
    credits: ['Director: Dibakar Banerjee', 'DoP: Amit Sharma', 'Sound FX: Joy Dev', 'Creative Direction: Meera Sen'],
    introParagraph: 'Innovatex collaborated with our creative team to produce "Shaping Tomorrow, Today", a corporate project that blends cinematic craftsmanship with strategic storytelling to deliver a powerful, memorable visual experience.',
    caseStudy,
    testimonials,
    casting,
    gallery
};

export default project;
