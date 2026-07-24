import { Project, ProjectCaseStudy, Testimonial, CastingMember } from '../../types';

const caseStudy: ProjectCaseStudy = {
    "objectives": [
        "Create a high-fidelity animation sequence for Pixelplay studios that pushes the boundaries of procedural generation and realistic rendering.",
        "Integrate cutting-edge path-tracing and fluid simulation workflows for unmatched micro-detail and visual fidelity.",
        "Establish an artistic bridge between Pixelplay studios's brand identity and cinematic visual storytelling.",
        "Deliver pixel-perfect ACES-compliant master files ready for multi-platform distribution."
    ],
    "scopes": [
        {
            "title": "Pre-Visualization",
            "items": [
                "Collaborate with Pixelplay studios to storyboard the animation sequence and define visual benchmarks.",
                "Create animatics and grey-scale blocking passes to validate timing, pacing, and camera motion."
            ]
        },
        {
            "title": "Asset Production",
            "items": [
                "Design high-polygon 3D assets with physically-based rendering (PBR) textures, tailored to Pixelplay studios's style.",
                "Build procedural shader networks for realistic material response under dynamic lighting conditions."
            ]
        },
        {
            "title": "Lighting & Rendering",
            "items": [
                "Set up virtual studio lighting arrays to emulate real-world cinematography techniques.",
                "Execute final renders through the ACES color pipeline for maximum dynamic range and color accuracy."
            ]
        }
    ],
    "results": "The finished animation sequence for Pixelplay studios was highly praised for its photorealistic quality and technical ambition, setting a new benchmark for the studio's CGI capabilities. The seamless integration of procedural and hand-crafted elements delivered a visual experience that felt both futuristic and tactile.",
    "lessons": [
        "Procedural modeling combined with hand-applied detail layers yields the most convincing results.",
        "ACES color management is essential for flawless integration of CGI with live-action footage.",
        "Pre-rendering low-resolution test sequences saves significant computing overhead during the final rendering phase."
    ],
    "conclusion": "This animation project proves that when technical precision meets creative ambition, computer-generated imagery can achieve the emotional depth and sensory weight of physical cinematography, delivering unforgettable brand experiences."
};

const testimonials: Testimonial[] = [
    {
        "quote": "\"The team transformed our vision for Pixel Pioneers into a stunning cinematic reality. Their attention to detail and creative passion exceeded every expectation we had.\"",
        "author": "PIXELPLAY STUDIOS",
        "role": "EXECUTIVE PRODUCER",
        "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250"
    },
    {
        "quote": "\"Working with Rajashree Production on Pixel Pioneers was an absolute pleasure. Their cinematography, sound design, and color grading are world-class — they made our brand look incredible.\"",
        "author": "HELENA MOSS",
        "role": "BRAND DIRECTOR",
        "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250"
    },
    {
        "quote": "\"From concept to delivery, every frame of Pixel Pioneers was meticulously crafted. The production quality, pacing, and emotional depth far surpassed anything we imagined possible.\"",
        "author": "DEVON KOVACS",
        "role": "CHIEF CREATIVE OFFICER",
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250"
    }
];

const casting: CastingMember[] = [
    { role: 'Director', name: 'Abhishek Roy', avatar: '/src/assets/images/artist-vikram-roy.jpg' },
    { role: 'Compositor', name: 'Amit Sharma', avatar: '/src/assets/images/artist-elina-roy.jpg' },
    { role: 'Concept Artist', name: 'Neha Pal', avatar: '/src/assets/images/artist-kabir-mehta.jpg' },
    { role: 'SFX', name: 'Rohan Verma', avatar: '/src/assets/images/artist-sarah-sen.jpg' }
];

const gallery: string[] = [
    '/src/assets/images/project-doc-sundarbans.jpg',
    '/src/assets/images/kumartuli-sculptor-film.jpg',
    '/src/assets/images/princep-ghat-film.jpg'
];

const project: Project = {
    id: '12',
    slug: 'pixel-pioneers',
    title: 'Pixel Pioneers',
    client: 'PIXELPLAY STUDIOS',
    category: 'Animation',
    image: '/src/assets/images/kolkata-tram-night.jpg',
    description: 'An immersive 3D animation reel tracking a neon-pulsing retro vehicle moving through a cybernetic cityscape.',
    duration: '4m 05s',
    year: '2025',
    director: 'Abhishek Roy',
    role: 'Render Pipeline & VFX',
    credits: ['Director: Abhishek Roy', 'Compositor: Amit Sharma', 'Concept Artist: Neha Pal', 'SFX: Rohan Verma'],
    introParagraph: 'Pixelplay studios engaged our CGI and motion graphics pipeline to produce "Pixel Pioneers", a cutting-edge animation sequence that pushes the boundaries of procedural generation, photorealistic rendering, and visual storytelling.',
    caseStudy,
    testimonials,
    casting,
    gallery
};

export default project;
