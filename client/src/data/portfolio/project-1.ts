import { Project, ProjectCaseStudy, Testimonial, CastingMember } from '../../types';

const caseStudy: ProjectCaseStudy = {
    objectives: [
        "Produce a captivating travel vlog series showcasing Sarah's adventures through Bengal and the Sundarbans.",
        "Attract a loyal audience of travel enthusiasts and adventure seekers through authentic storytelling.",
        "Secure brand partnerships and sponsorships to monetize the vlog effectively.",
        "Develop a content strategy and promotional plan to maximize the vlog's reach and impact."
    ],
    scopes: [
        {
            title: "Content Planning",
            items: [
                "Collaborate with Sarah to outline her travel itinerary, storytelling approach, and target audience.",
                "Develop a content calendar ensuring consistent vlog uploads and sustained viewer engagement."
            ]
        },
        {
            title: "Production",
            items: [
                "Accompany Sarah on her travel adventures across Bengal to capture stunning footage and authentic experiences.",
                "Utilize high-quality camera equipment, drones, and stabilization tools for professional-grade vlogging.",
                "Record Sarah's on-camera narration and interviews with locals to enhance storytelling depth."
            ]
        },
        {
            title: "Post-Production",
            items: [
                "Edit vlog episodes to create engaging and cohesive narratives with background music and soundscapes.",
                "Incorporate eye-catching visual effects and smooth transitions to maintain viewer engagement.",
                "Optimize video length and format for various social media platforms and YouTube distribution."
            ]
        },
        {
            title: "Promotion and Monetization",
            items: [
                "Launch vlog episodes on YouTube with teaser clips on social media to build anticipation.",
                "Implement SEO strategies and engage with travel communities to attract viewers and subscribers.",
                "Seek brand partnerships and sponsorships related to travel, adventure gear, and tourism services.",
                "Utilize affiliate marketing to generate revenue through recommended travel products and services."
            ]
        }
    ],
    results: '"A Travel Vlog Adventure" gained significant traction within the travel vlogging community, resulting in rapid subscriber growth and high viewer engagement. The organic style and breathtaking aerial imagery of the Sundarbans mangroves captured the audience\'s imagination, establishing Sarah as a trusted travel voice and securing sponsorships from leading travel gear manufacturers.',
    lessons: [
        "Authenticity and storytelling are key elements in building a loyal vlog audience.",
        "Consistent high-quality content and effective SEO strategies are essential for growing a vlog channel.",
        "Collaborating with brands and utilizing affiliate marketing can provide sustainable income opportunities for vloggers."
    ],
    conclusion: "This case study demonstrates how a passionate and well-planned travel vlog series can effectively capture an audience's attention, inspire wanderlust, and provide monetization opportunities through brand partnerships and sponsorships."
};

const testimonials: Testimonial[] = [
    {
        quote: "\"They transformed our travel vlog concept into a high-impact cinematic experience. The aerial footage of the Sundarbans exceeded our wildest expectations and elevated Sarah's digital authority.\"",
        author: "TIM GARFIELD",
        role: "CEO, SOCIALBUZZ AGENCY",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250"
    },
    {
        quote: "\"The sheer level of visual poetry brought to Sarah's travel stories was stunning. Our engagement metrics saw an immediate, significant upward shift after the vlog launched.\"",
        author: "ALEXA CHEN",
        role: "HEAD OF LIFESTYLE BRANDING",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"
    },
    {
        quote: "\"Their pacing, modern editing style, and narrative precision are unmatched. They made Sarah's travel narrative feel premium, immersive, and unforgettable.\"",
        author: "MARCUS VANCE",
        role: "DIGITAL STRATEGIST",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250"
    }
];

const casting: CastingMember[] = [
    { role: 'Director', name: 'Rajashree Sen', avatar: '/src/assets/images/artist-vikram-roy.jpg' },
    { role: 'Director of Photography', name: 'Amit Sharma', avatar: '/src/assets/images/artist-elina-roy.jpg' },
    { role: 'Editor', name: 'Rohan Verma', avatar: '/src/assets/images/artist-kabir-mehta.jpg' },
    { role: 'Sound Designer', name: 'Priya Das', avatar: '/src/assets/images/artist-aisha-sen.jpg' }
];

const gallery: string[] = [
    '/src/assets/images/project-doc-sundarbans.jpg',
    '/src/assets/images/kumartuli-sculptor-film.jpg',
    '/src/assets/images/princep-ghat-film.jpg'
];

const project: Project = {
    id: '1',
    title: 'A Travel Vlog Adventure',
    client: 'SARAH',
    category: 'Social Media',
    image: '/src/assets/images/project-doc-sundarbans.jpg',
    description: 'A visual journey exploring the hidden pathways of Bengal and Sundarbans mangroves, capturing raw moments of wanderlust, local culture, and breathtaking heights.',
    duration: '12m 45s',
    year: '2026',
    director: 'Rajashree Sen',
    role: 'Cinematography & Post-Production',
    credits: ['Director: Rajashree Sen', 'DoP: Amit Sharma', 'Editor: Rohan Verma', 'Sound Designer: Priya Das'],
    introParagraph: 'An independent travel vlogger and adventurer, Sarah, approached our content creation agency, "Wanderlust Media", with a passion for creating a travel vlog series that captured her journey exploring the lesser-known destinations of Bengal and the Sundarbans mangroves. Her goal was to share raw, immersive experiences of local culture, wildlife, and breathtaking landscapes to inspire wanderlust and build a loyal audience of adventure seekers.',
    caseStudy,
    testimonials,
    casting,
    gallery
};

export default project;
