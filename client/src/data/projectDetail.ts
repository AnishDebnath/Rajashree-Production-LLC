import { Project, ProjectCaseStudy, Testimonial } from '../types';
import { projectsData } from './projects';

// ── Intro Paragraph ──
export function getIntroParagraph(project: Project): string {
    // Use per-project custom intro if provided
    if (project.introParagraph) return project.introParagraph;

    const clientName = project.client ? (project.client.charAt(0) + project.client.slice(1).toLowerCase()) : 'Sarah';
    const categoryName = project.category || 'Social Media';
    const titleName = project.title;

    if (categoryName === 'Social Media' || categoryName === 'Lifestyle') {
        return `An independent travel vlogger and adventurer, ${clientName}, approached our content creation agency, "Wanderlust Media", with a passion for creating a travel vlog series that captured her journey exploring lesser-known destinations around the world. Her goal was to share her experiences, inspire wanderlust, and ultimately monetize her vlog through brand partnerships and sponsorships to her online presence.`;
    }
    if (categoryName === 'Animation' || categoryName === 'VFX') {
        return `An innovative digital design studio, ${project.client || 'EcoScape Solutions'}, partnered with our CGI and motion graphics pipeline on "${titleName}" to create a hyper-realistic, path-traced animated sequence. Their primary milestone was showcasing complex organic structures seamlessly merging with virtual artificial intelligence systems.`;
    }
    if (categoryName === 'Commercials' || categoryName === 'Product Video') {
        return `A sustainable product lifestyle brand, ${project.client || 'EcoGlow'}, reached out to our production house with a vision to build a high-impact advertising commercial. They wanted to capture the tactical, premium feel of their flagship release and command immediate consumer desire through dramatic, warm macro lighting.`;
    }
    return `A premium collaborative partner, ${clientName}, worked alongside our core production division to craft the visual showcase for "${titleName}". Our shared creative objective was to film authentic, raw human stories and elevate them with world-class, cinema-grade visual pacing.`;
}

// ── Project Case Study ──
export function getProjectCaseStudy(project: Project): ProjectCaseStudy {
    // Use per-project case study if provided
    if (project.caseStudy) return project.caseStudy;

    const categoryName = project.category || 'Social Media';
    const titleName = project.title;

    if (categoryName === 'Social Media' || categoryName === 'Lifestyle') {
        return {
            objectives: [
                "Produce a captivating travel vlog series that showcases Sarah's adventures and storytelling skills.",
                "Attract a loyal and engaged audience of travel enthusiasts and adventure seekers.",
                "Secure brand partnerships and sponsorships to monetize the vlog.",
                "Develop a content strategy and promotional plan to maximize the vlog's reach and impact."
            ],
            scopes: [
                {
                    title: "Content Planning",
                    items: [
                        "Collaborate with Sarah to outline her travel itinerary, storytelling approach, and target audience.",
                        "Develop a content calendar to ensure consistent vlog uploads and engagement with viewers."
                    ]
                },
                {
                    title: "Production",
                    items: [
                        "Accompany Sarah on her travel adventures to capture stunning footage and authentic experiences.",
                        "Utilize high-quality camera equipment, drones, and stabilization tools for professional vlogging.",
                        "Record Sarah's on-camera narration and interviews with locals to enhance storytelling."
                    ]
                },
                {
                    title: "Post-production",
                    items: [
                        "Edit the vlog episodes to create engaging and cohesive narratives, adding background music and soundscapes.",
                        "Incorporate eye-catching visual effects and transitions to maintain viewer engagement.",
                        "Optimize video length and format for various social media platforms and YouTube."
                    ]
                },
                {
                    title: "Promotion and Monetization",
                    items: [
                        "Launch vlog episodes on YouTube and share teaser clips on social media platforms to build anticipation.",
                        "Implement SEO strategies and engage with travel communities to attract viewers and subscribers.",
                        "Seek brand partnerships and sponsorships related to travel, adventure gear, and tourism services.",
                        "Utilize affiliate marketing to generate revenue through recommended travel products and services."
                    ]
                }
            ],
            results: `"${titleName}" gained significant traction within the travel vlogging community, resulting in rapid subscriber growth and high viewer engagement. The organic style and breathtaking aerial imagery captured the audience's imagination, establishing Sarah as a trusted travel voice and securing sponsorships from leading travel gear manufacturers.`,
            lessons: [
                "Authenticity and storytelling are key elements in building a loyal vlog audience.",
                "Consistent and high-quality content, as well as effective SEO strategies, are essential for growing a vlog channel.",
                "Collaborating with brands and utilizing affiliate marketing can provide sustainable income opportunities for vloggers."
            ],
            conclusion: `This case study demonstrates how a passionate and well-planned travel vlog series can effectively capture an audience's attention, inspire wanderlust, and provide monetization opportunities through brand partnerships and sponsorships.`
        };
    }

    if (categoryName === 'Animation' || categoryName === 'VFX') {
        return {
            objectives: [
                "Create a high-fidelity 3D sequence displaying organic mechanical movements in a simulated volumetric space.",
                "Incorporate cutting-edge path-tracing and fluid simulation workflows for unmatched micro-detail.",
                "Establish an artistic bridge between cold algorithmic precision and warm analog cinematic heritage.",
                "Synthesize custom spatial-audio sound cues matching every procedural gear shift."
            ],
            scopes: [
                {
                    title: "Pre-Visualization",
                    items: [
                        "Draft complex storyboards and schematic layout blueprints for 3D object positioning.",
                        "Define mathematically sound golden ratio matrices for raw model assembly."
                    ]
                },
                {
                    title: "Mesh Modeling & Texturing",
                    items: [
                        "Design high-polygon hard surface mechanical limbs alongside organic fibrous veins.",
                        "Create physical-based rendering (PBR) texture maps featuring microscopic wear and dirt patterns."
                    ]
                },
                {
                    title: "Lighting & Rendering",
                    items: [
                        "Mount virtual high-key studio backlights to sculpt 3D depth and shadow volume.",
                        "Execute ACES color space pipeline renders to preserve maximum floating-point precision."
                    ]
                }
            ],
            results: `The finished CGI sequence was highly praised by industry experts, setting a new studio record for volumetric mesh rendering efficiency. It achieved flawless lighting coherence, allowing the virtual lens to capture mechanical depth with tactile realism.`,
            lessons: [
                "Procedural modeling combined with manually applied dirt layers yields the most realistic results.",
                "ACES color management ensures flawless asset integration with real-world cinematography clips.",
                "Pre-rendering low-res sequence grids saves critical computing overhead during coloring."
            ],
            conclusion: `By bridging mechanical hard-surfaces with fluid organic elements, this sequence proves that next-generation virtual sets can achieve the deep emotional weight and sensory response of physical film.`
        };
    }

    // Default fallback for commercial, product, or generic
    return {
        objectives: [
            `Deconstruct ${titleName}'s core values into a compelling cinematic visual brief.`,
            "Apply dynamic macro lighting and shallow depth-of-field to elevate product premium feel.",
            "Create a fast-paced edit that maintains high viewer retention and curiosity.",
            "Tune color balances meticulously to convey absolute luxury and brand superiority."
        ],
        scopes: [
            {
                title: "Creative Boarding",
                items: [
                    "Collaborate with brand representatives to identify key materials and sensory highlights.",
                    "Establish a moodboard focusing on luxury light play, metallic textures, and rich negative space."
                ]
            },
            {
                title: "Principal Cinematography",
                items: [
                    "Shoot with high-speed Cine lenses and ARRI Alexa platforms to render creamy background roll-offs.",
                    "Perform precision camera tracks and micro-jib motions to accentuate physical geometries."
                ]
            },
            {
                title: "Post-Production Master",
                items: [
                    "Conduct frame-by-frame DaVinci Resolve color grading to produce a warm, eye-safe cinematic look.",
                    "Integrate a fully spatial, high-end acoustic soundscapes that guides visual focus."
                ]
            }
        ],
        results: `The commercial release drove unprecedented engagement rates across brand channels, showing a substantial boost in premium customer perception. The warm, moody visual style positioned the product as a timeless artifact of design.`,
        lessons: [
            "Shallow depth of field forces viewers to appreciate individual material textures.",
            "Macro-level cinematic details are more effective in driving product desire than standard generic wide shots.",
            "Custom sound design and sound effects are responsible for over half of the commercial's emotional weight."
        ],
        conclusion: `This production showcases that luxury is built on microscopic design choices. When lighting, sound, and precision pacing align, standard product advertisements transform into cinematic works of art.`
    };
}

// ── Testimonials ──
export function getTestimonials(project: Project): Testimonial[] {
    // Use per-project testimonials if provided
    if (project.testimonials && project.testimonials.length > 0) return project.testimonials;

    const clientName = project.client || 'Sarah';
    const categoryName = project.category || 'Social Media';

    if (categoryName === 'Social Media' || categoryName === 'Lifestyle') {
        return [
            {
                quote: `"They transformed our campaign into a high-impact cinematic experience. The video exceeded our wild expectations and elevated our digital authority."`,
                author: `TIM GARFIELD`,
                role: "CEO, SOCIALBUZZ AGENCY",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250"
            },
            {
                quote: `"The sheer level of visual poetry brought to our brand was stunning. Our engagement metrics saw an immediate, significant upward shift."`,
                author: `ALEXA CHEN`,
                role: "HEAD OF LIFESTYLE BRANDING",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"
            },
            {
                quote: `"Their pacing, modern styling, and editing precision are unmatched. They made our social narrative feel premium and unforgettable."`,
                author: `MARCUS VANCE`,
                role: "DIGITAL STRATEGIST",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250"
            }
        ];
    }
    return [
        {
            quote: `"An absolute masterpiece. Their commitment to tactile realism, micro-textures, and high-contrast styling is unparalleled, giving our brand supreme luxury authority."`,
            author: `${clientName.toUpperCase()}`,
            role: "EXECUTIVE PRODUCER",
            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250"
        },
        {
            quote: `"The soundscape and lighting design brought a rare emotional depth to our product story. It's more than a commercial—it is cinema."`,
            author: `HELENA MOSS`,
            role: "BRAND DIRECTOR",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250"
        },
        {
            quote: `"Every frame is meticulously crafted with high fidelity. The entire production was executed with remarkable precision and vision."`,
            author: `DEVON KOVACS`,
            role: "CHIEF CREATIVE OFFICER",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250"
        }
    ];
}

// ── Related Stills ──
export function getRelatedStills(project: Project): string[] {
    // Use per-project gallery if provided
    if (project.gallery && project.gallery.length > 0) return project.gallery;

    if (project.category === 'Animation' || project.category === 'VFX') {
        return [
            '/src/assets/images/kolkata-tram-night.jpg',
            '/src/assets/images/project-ott-thriller.jpg',
            '/src/assets/images/film-crew-set-kolkata.jpg'
        ];
    }
    if (project.category === 'Lifestyle' || project.category === 'Social Media' || project.category === 'Fashion') {
        return [
            '/src/assets/images/project-fashion-saree.jpg',
            '/src/assets/images/project-short-film-tea.jpg',
            '/src/assets/images/durga-puja-cinematic.jpg'
        ];
    }
    if (project.category === 'Commercials' || project.category === 'Product Video' || project.category === 'Corporate') {
        return [
            '/src/assets/images/project-commercial-gold.jpg',
            '/src/assets/images/bengali-heritage-mansion.jpg',
            '/src/assets/images/victoria-memorial-film.jpg'
        ];
    }
    return [
        '/src/assets/images/princep-ghat-film.jpg',
        '/src/assets/images/project-bengali-drama.jpg',
        '/src/assets/images/kumartuli-sculptor-film.jpg'
    ];
}

// ── Suggested Projects ──
export function getSuggestedProjects(project: Project): Project[] {
    const others = projectsData.filter(p => p.id !== project.id);
    const sameCategory = others.filter(p => p.category === project.category);
    const differentCategory = others.filter(p => p.category !== project.category);

    // Combine same category first, then others to fill up to at least 2
    const combined = [...sameCategory, ...differentCategory];
    return combined.slice(0, 2);
}
