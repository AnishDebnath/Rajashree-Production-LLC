import { Project, ProjectCaseStudy, Testimonial, CastingMember } from '../../types';

const caseStudy: ProjectCaseStudy = {
    "objectives": [
        "Capture the energy, scale, and key moments of Wellnessworld group's event through dynamic multi-camera coverage.",
        "Produce a high-energy highlight reel that encapsulates the event narrative and audience experience.",
        "Deliver polished, broadcast-quality footage suitable for promotional use and stakeholder review.",
        "Ensure seamless audio capture of keynote speeches, panel discussions, and ambient atmosphere."
    ],
    "scopes": [
        {
            "title": "Pre-Event Planning",
            "items": [
                "Coordinate with Wellnessworld group's event team to map camera positions, run-of-show timing, and key moments to capture.",
                "Prepare redundant recording setups and backup power solutions for uninterrupted coverage."
            ]
        },
        {
            "title": "Live Capture",
            "items": [
                "Deploy multiple camera angles — wide establishing, close-up, roving gimbal — for comprehensive coverage.",
                "Capture clean room tone, speaker audio via wireless lavaliers, and ambient atmosphere for post-production flexibility."
            ]
        },
        {
            "title": "Post-Production",
            "items": [
                "Edit a dynamic event highlight reel with controlled pacing, color consistency, and branded lower-thirds.",
                "Integrate sponsor logos, speaker titles, and call-to-action graphics for maximum promotional value."
            ]
        }
    ],
    "results": "The event coverage for Wellnessworld group exceeded expectations, delivering a polished highlight reel that captured the full energy and impact of the occasion. The video was widely shared across the organization's channels, generating significant positive feedback and serving as a valuable promotional asset for future events.",
    "lessons": [
        "Redundant audio recording is non-negotiable for event coverage — wireless interference is unpredictable.",
        "A mix of wide establishing shots and tight detail captures creates the most engaging event edit.",
        "Quick-turnaround same-day edits provide enormous social media value for event organizers."
    ],
    "conclusion": "This event production demonstrates that meticulous planning, redundant systems, and skilled multi-camera operation are the foundations of exceptional live-event coverage that truly captures the spirit of the occasion."
};

const testimonials: Testimonial[] = [
    {
        "quote": "\"The team transformed our vision for Healthy Living Expo 2023 into a stunning cinematic reality. Their attention to detail and creative passion exceeded every expectation we had.\"",
        "author": "WELLNESSWORLD GROUP",
        "role": "EXECUTIVE PRODUCER",
        "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250"
    },
    {
        "quote": "\"Working with Rajashree Production on Healthy Living Expo 2023 was an absolute pleasure. Their cinematography, sound design, and color grading are world-class — they made our brand look incredible.\"",
        "author": "HELENA MOSS",
        "role": "BRAND DIRECTOR",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250"
    },
    {
        "quote": "\"From concept to delivery, every frame of Healthy Living Expo 2023 was meticulously crafted. The production quality, pacing, and emotional depth far surpassed anything we imagined possible.\"",
        "author": "DEVON KOVACS",
        "role": "CHIEF CREATIVE OFFICER",
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250"
    }
];

const casting: CastingMember[] = [
        { role: 'Lead Videographer', name: 'Rohan Sharma', avatar: '/src/assets/images/artist-vikram-roy.jpg' },
        { role: 'B-Roll Shooter', name: 'Pooja Rao', avatar: '/src/assets/images/artist-elina-roy.jpg' },
        { role: 'Editor', name: 'Priya Das', avatar: '/src/assets/images/artist-kabir-mehta.jpg' },
        { role: 'Sound Design', name: 'Joy Dev', avatar: '/src/assets/images/artist-sarah-sen.jpg' }
    ];

const gallery: string[] = [
        '/src/assets/images/project-doc-sundarbans.jpg',
        '/src/assets/images/kumartuli-sculptor-film.jpg',
        '/src/assets/images/princep-ghat-film.jpg'
    ];

const project: Project = {
    id: '9',
    title: 'Healthy Living Expo 2023',
    client: 'WELLNESSWORLD GROUP',
    category: 'Event',
    image: '/src/assets/images/durga-puja-cinematic.jpg',
    description: 'An energetic event wrap-up video filled with colorful lighting transitions and live audience footage.',
    duration: '3m 40s',
    year: '2023',
    director: 'Rohan Sharma',
    role: 'Event Coverage Lead',
    credits: ['Lead Videographer: Rohan Sharma', 'B-Roll Shooter: Pooja Rao', 'Editor: Priya Das', 'Sound Design: Joy Dev'],
    introParagraph: 'Wellnessworld group collaborated with our creative team to produce "Healthy Living Expo 2023", a event project that blends cinematic craftsmanship with strategic storytelling to deliver a powerful, memorable visual experience.',
    caseStudy,
    testimonials,
    casting,
    gallery
};

export default project;
