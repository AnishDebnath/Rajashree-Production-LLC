import { Project, ProjectCaseStudy, Testimonial, CastingMember } from '../../types';

const caseStudy: ProjectCaseStudy = {
    "objectives": [
        "Produce an engaging lifestyle campaign showcasing Metrolife realty's unique brand voice and storytelling vision.",
        "Capture authentic, high-energy visual content optimized for mobile-first social media platforms.",
        "Drive measurable audience engagement, shares, and brand recall across digital channels.",
        "Develop a cohesive content strategy aligning with Metrolife realty's broader marketing objectives and target demographics."
    ],
    "scopes": [
        {
            "title": "Creative Strategy",
            "items": [
                "Collaborate with Metrolife realty to define brand messaging, visual tone, and platform-specific content pillars.",
                "Develop a content calendar with optimized posting schedules for maximum organic reach."
            ]
        },
        {
            "title": "Production",
            "items": [
                "Execute agile, run-and-gun filming using lightweight gimbal systems and Sony FX6 cinema rigs.",
                "Capture spontaneous b-roll, candid moments, and polished hero shots that align with Metrolife realty's aesthetic."
            ]
        },
        {
            "title": "Post-Production",
            "items": [
                "Color grade footage with vibrant, platform-optimized LUTs to ensure visual consistency.",
                "Edit with fast-paced retention-focused pacing, adding motion graphics and sound design for impact.",
                "Export multiple aspect ratios (16:9, 9:16, 1:1) for cross-platform distribution."
            ]
        }
    ],
    "results": "\"Urban Explorers\" delivered exceptional engagement metrics for Metrolife realty, with a significant increase in followers, shares, and direct inquiries. The content's authentic, raw aesthetic resonated deeply with the target audience, positioning Metrolife realty as a trendsetter in the lifestyle space.",
    "lessons": [
        "Authentic, unscripted content consistently outperforms highly produced advertisements on social platforms.",
        "Platform-specific formatting and caption optimization are critical for maximizing organic reach.",
        "Behind-the-scenes and real-time content builds stronger community trust than polished brand spots alone."
    ],
    "conclusion": "This project demonstrates that a well-executed lifestyle strategy, rooted in authentic storytelling and precision editing, can dramatically amplify brand visibility and audience connection in today's digital landscape."
};

const testimonials: Testimonial[] = [
    {
        "quote": "\"The team transformed our vision for Urban Explorers into a stunning cinematic reality. Their attention to detail and creative passion exceeded every expectation we had.\"",
        "author": "METROLIFE REALTY",
        "role": "EXECUTIVE PRODUCER",
        "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250"
    },
    {
        "quote": "\"Working with Rajashree Production on Urban Explorers was an absolute pleasure. Their cinematography, sound design, and color grading are world-class — they made our brand look incredible.\"",
        "author": "HELENA MOSS",
        "role": "BRAND DIRECTOR",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250"
    },
    {
        "quote": "\"From concept to delivery, every frame of Urban Explorers was meticulously crafted. The production quality, pacing, and emotional depth far surpassed anything we imagined possible.\"",
        "author": "DEVON KOVACS",
        "role": "CHIEF CREATIVE OFFICER",
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250"
    }
];

const casting: CastingMember[] = [
        { role: 'Director', name: 'Imtiaz Ali (Unit-B)', avatar: '/src/assets/images/artist-vikram-roy.jpg' },
        { role: 'DoP', name: 'Amit Sharma', avatar: '/src/assets/images/artist-elina-roy.jpg' },
        { role: 'Music', name: 'A.R. Rahman (Lic)', avatar: '/src/assets/images/artist-kabir-mehta.jpg' },
        { role: 'Gaffer', name: 'Joy Dev', avatar: '/src/assets/images/artist-sarah-sen.jpg' }
    ];

const gallery: string[] = [
        '/src/assets/images/project-doc-sundarbans.jpg',
        '/src/assets/images/kumartuli-sculptor-film.jpg',
        '/src/assets/images/princep-ghat-film.jpg'
    ];

const project: Project = {
    id: '23',
    title: 'Urban Explorers',
    client: 'METROLIFE REALTY',
    category: 'Lifestyle',
    image: '/src/assets/images/bengali-heritage-mansion.jpg',
    description: 'A stylish lifestyle film tracing city enthusiasts seeking rooftop views and historic architecture in vintage brick developments.',
    duration: '4m 50s',
    year: '2024',
    director: 'Imtiaz Ali (Unit-B)',
    role: 'Cinematography & Edit',
    credits: ['Director: Imtiaz Ali (Unit-B)', 'DoP: Amit Sharma', 'Music: A.R. Rahman (Lic)', 'Gaffer: Joy Dev'],
    introParagraph: 'Metrolife realty, a leading voice in the lifestyle space, partnered with our production studio to create "Urban Explorers" — a visually compelling content series designed to captivate audiences and elevate their digital presence through authentic, high-energy storytelling.',
    caseStudy,
    testimonials,
    casting,
    gallery
};

export default project;
