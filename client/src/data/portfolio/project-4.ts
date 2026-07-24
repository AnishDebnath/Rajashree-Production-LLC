import { Project, ProjectCaseStudy, Testimonial, CastingMember } from '../../types';

const caseStudy: ProjectCaseStudy = {
    "objectives": [
        "Deconstruct Ecoglow's brand values and product narrative into a compelling cinematic visual brief.",
        "Showcase the quality, design, and emotional resonance of EcoCharge Power Bank through high-end production techniques.",
        "Create a visually striking, retention-optimized spot that drives brand recall and consumer desire.",
        "Deliver a versatile master edit suitable for broadcast, digital, and social media distribution."
    ],
    "scopes": [
        {
            "title": "Creative Development",
            "items": [
                "Work with Ecoglow's marketing team to align on brand messaging, visual direction, and key product highlights.",
                "Develop a moodboard focusing on lighting, color palette, and compositional references that reflect EcoCharge Power Bank's premium positioning."
            ]
        },
        {
            "title": "Principal Photography",
            "items": [
                "Deploy ARRI Alexa and Cooke S7/i prime lenses for creamy background separation and rich skin tones.",
                "Execute precision camera moves — slider tracks, micro-jib motions, and macro focus pulls — to accentuate EcoCharge Power Bank's design details."
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
    "results": "The commercials spot for Ecoglow drove unprecedented engagement and significantly elevated brand perception. The cinematic visual language positioned EcoCharge Power Bank as a premium offering, resulting in increased inquiries and positive audience feedback across all distribution channels.",
    "lessons": [
        "Shallow depth-of-field and macro detail shots are more effective at driving product desire than standard wide shots.",
        "Custom sound design contributes over half of the commercial’s emotional impact and should never be an afterthought.",
        "A well-structured creative brief and pre-production phase saves significant time and budget during the shoot."
    ],
    "conclusion": "This commercials production showcases that when lighting, sound design, and precision pacing align, standard product advertisements transform into cinematic works of art that command attention and drive results."
};

const testimonials: Testimonial[] = [
    {
        "quote": "\"The team transformed our vision for EcoCharge Power Bank into a stunning cinematic reality. Their attention to detail and creative passion exceeded every expectation we had.\"",
        "author": "ECOGLOW",
        "role": "EXECUTIVE PRODUCER",
        "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250"
    },
    {
        "quote": "\"Working with Rajashree Production on EcoCharge Power Bank was an absolute pleasure. Their cinematography, sound design, and color grading are world-class — they made our brand look incredible.\"",
        "author": "HELENA MOSS",
        "role": "BRAND DIRECTOR",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250"
    },
    {
        "quote": "\"From concept to delivery, every frame of EcoCharge Power Bank was meticulously crafted. The production quality, pacing, and emotional depth far surpassed anything we imagined possible.\"",
        "author": "DEVON KOVACS",
        "role": "CHIEF CREATIVE OFFICER",
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250"
    }
];

const casting: CastingMember[] = [
        { role: 'Director', name: 'Karan Johar (Ad Div)', avatar: '/src/assets/images/artist-vikram-roy.jpg' },
        { role: 'Lead Actor', name: 'Ryan Sen', avatar: '/src/assets/images/artist-elina-roy.jpg' },
        { role: 'Creative Director', name: 'Aisha Sen', avatar: '/src/assets/images/artist-kabir-mehta.jpg' },
        { role: 'Music', name: 'Priya Das', avatar: '/src/assets/images/artist-sarah-sen.jpg' }
    ];

const gallery: string[] = [
        '/src/assets/images/project-doc-sundarbans.jpg',
        '/src/assets/images/kumartuli-sculptor-film.jpg',
        '/src/assets/images/princep-ghat-film.jpg'
    ];

const project: Project = {
    id: '4',
    title: 'EcoCharge Power Bank',
    client: 'ECOGLOW',
    category: 'Commercials',
    image: '/src/assets/images/project-commercial-gold.jpg',
    description: 'A high-impact product commercial utilizing moody macro lighting to showcase luxury materials.',
    duration: '0m 45s',
    year: '2026',
    director: 'Karan Johar (Ad Div)',
    role: 'Production House',
    credits: ['Director: Karan Johar (Ad Div)', 'Lead Actor: Ryan Sen', 'Creative Director: Aisha Sen', 'Music: Priya Das'],
    introParagraph: 'Ecoglow commissioned our production house to create a premium commercials spot for "EcoCharge Power Bank". The goal was to capture the product\'s tactile quality and emotional appeal through dramatic macro cinematography, precision lighting, and cinematic sound design.',
    caseStudy,
    testimonials,
    casting,
    gallery
};

export default project;
