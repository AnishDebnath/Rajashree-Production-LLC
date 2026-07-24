import { Project, ProjectCaseStudy, Testimonial, CastingMember } from '../../types';

const caseStudy: ProjectCaseStudy = {
    "objectives": [
        "Partner with Starfest to craft a compelling visual narrative that brings \"Project 20\" to life.",
        "Apply cinematic techniques — lighting, composition, pacing — to elevate the story beyond conventional production.",
        "Deliver a finished piece that resonates emotionally with Starfest's target audience and achieves the project's strategic goals.",
        "Maintain the highest technical standards in cinematography, sound design, and color grading throughout the production."
    ],
    "scopes": [
        {
            "title": "Concept & Planning",
            "items": [
                "Collaborate with Starfest to define the creative vision, narrative arc, and visual approach for \"Project 20\".",
                "Develop shot lists, storyboards, and production schedules aligned with the project scope and budget."
            ]
        },
        {
            "title": "Production",
            "items": [
                "Execute principal photography using ARRI and Sony cinema platforms, tailored to \"Project 20\"'s visual requirements.",
                "Capture high-quality production audio with redundant recording for dialogue, voiceover, and ambient sound."
            ]
        },
        {
            "title": "Post-Production",
            "items": [
                "Edit with narrative pacing that serves the story while maintaining audience engagement throughout.",
                "Color grade in DaVinci Resolve with a customized look designed to enhance the emotional tone of the piece.",
                "Mix immersive soundscapes with clear dialogue, subtle room tone, and dynamic music beds."
            ]
        }
    ],
    "results": "\"Project 20\" was delivered to Starfest's complete satisfaction, achieving the creative and strategic goals established during pre-production. The film's cinematic quality and emotional resonance generated strong audience engagement and reinforced Starfest's brand positioning.",
    "lessons": [
        "Thorough pre-production planning directly correlates with on-set efficiency and final output quality.",
        "Building strong client relationships through clear communication leads to better creative outcomes.",
        "Post-production sound design and color grading are where good productions become great ones."
    ],
    "conclusion": "This project exemplifies the studio's commitment to cinematic excellence, proving that regardless of budget or timeline, a focus on story, craft, and collaboration consistently delivers outstanding results."
};

const testimonials: Testimonial[] = [
    {
        "quote": "\"The team transformed our vision for Project 20 into a stunning cinematic reality. Their attention to detail and creative passion exceeded every expectation we had.\"",
        "author": "STARFEST",
        "role": "EXECUTIVE PRODUCER",
        "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250"
    },
    {
        "quote": "\"Working with Rajashree Production on Project 20 was an absolute pleasure. Their cinematography, sound design, and color grading are world-class — they made our brand look incredible.\"",
        "author": "HELENA MOSS",
        "role": "BRAND DIRECTOR",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250"
    },
    {
        "quote": "\"From concept to delivery, every frame of Project 20 was meticulously crafted. The production quality, pacing, and emotional depth far surpassed anything we imagined possible.\"",
        "author": "DEVON KOVACS",
        "role": "CHIEF CREATIVE OFFICER",
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250"
    }
];

const casting: CastingMember[] = [
        { role: 'Director', name: 'Rajashree Sen', avatar: '/src/assets/images/artist-vikram-roy.jpg' },
        { role: 'Lead Actor', name: 'Naseeruddin Shah', avatar: '/src/assets/images/artist-elina-roy.jpg' },
        { role: 'Screenplay', name: 'Aisha Sen', avatar: '/src/assets/images/artist-kabir-mehta.jpg' },
        { role: 'Music Composer', name: 'Arjun Mehta', avatar: '/src/assets/images/artist-sarah-sen.jpg' }
    ];

const gallery: string[] = [
        '/src/assets/images/project-doc-sundarbans.jpg',
        '/src/assets/images/kumartuli-sculptor-film.jpg',
        '/src/assets/images/princep-ghat-film.jpg'
    ];

const project: Project = {
    id: '20',
    title: "The Timekeeper's Watch",
    client: 'STARFEST',
    category: 'Entertainment',
    image: '/src/assets/images/project-biopic-1920s.jpg',
    description: 'A narrative drama short film exploring the micro-gears of a legacy timekeeper\u2019s watch that holds mysterious powers.',
    duration: '18m 20s',
    year: '2026',
    director: 'Rajashree Sen',
    role: 'Full Production',
    credits: ['Director: Rajashree Sen', 'Lead Actor: Naseeruddin Shah', 'Screenplay: Aisha Sen', 'Music Composer: Arjun Mehta'],
    introParagraph: 'Starfest collaborated with our creative team to produce "Project 20", a entertainment project that blends cinematic craftsmanship with strategic storytelling to deliver a powerful, memorable visual experience.',
    caseStudy,
    testimonials,
    casting,
    gallery
};

export default project;
