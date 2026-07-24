import {
    Lightbulb,
    PenTool,
    Layers,
    MapPin,
    Users,
    Settings,
    Clock,
    Video,
    Tv,
    Radio,
    Activity,
    Sparkles,
    MessageSquare,
    Film,
    Sliders,
    Volume2,
    Type,
    Disc,
    Database,
    type LucideIcon
} from 'lucide-react';

// ── Interfaces ──────────────────────────────────────────────────────────────

export interface GearSlide {
    title: string;
    image: string;
    desc: string;
}

export interface PreProductionItem {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export interface ProductionItem {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export interface PostProductionItem {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export interface MarqueeImage {
    url: string;
    alt: string;
}

export interface CategoryItem {
    title: string;
    serial: string;
    images: string[];
    desc: string;
}

export interface FaqItem {
    q: string;
    a: string;
}

// ── Data ────────────────────────────────────────────────────────────────────

export const gearSlides: GearSlide[] = [
    {
        title: "Recording Facility",
        image: "/src/assets/images/project-music-video.jpg",
        desc: "State-of-the-art vocal booths, acoustic recording spaces, and spatial surround engineering."
    },
    {
        title: "Professional Gears",
        image: "/src/assets/images/film-crew-set-kolkata.jpg",
        desc: "High-end cinematic rig setups, RED & ARRI packages, and premium prime lenses."
    },
    {
        title: "Studio Stages",
        image: "/src/assets/images/bengali-heritage-mansion.jpg",
        desc: "Soundstages, custom rigging rigs, green screen panels, and calibrated lighting arrays."
    },
    {
        title: "VFX & Chroma Stage",
        image: "/src/assets/images/project-ott-thriller.jpg",
        desc: "Advanced motion tracking space, high-key green screens, and real-time live preview composite setups."
    },
    {
        title: "Post-Production Suite",
        image: "/src/assets/images/kolkata-film-hero.jpg",
        desc: "Color-grading consoles, professional surround audio playback, and high-speed render stations."
    }
];

export const preProductionItems: PreProductionItem[] = [
    {
        icon: Lightbulb,
        title: "Concept Development",
        desc: "We work closely with you to brainstorm ideas, themes, and concepts that align with your goals and vision. This is where the creative magic begins."
    },
    {
        icon: PenTool,
        title: "Scriptwriting",
        desc: "Our experienced scriptwriters craft compelling narratives that effectively convey your message. Whether it's a commercial, corporate video, or any other format, we ensure that the script resonates with your target audience."
    },
    {
        icon: Layers,
        title: "Storyboarding",
        desc: "Visual storytelling is key to engaging your audience. We create storyboards that outline the visual sequence, shot angles, and transitions, providing a blueprint for the shoot."
    },
    {
        icon: MapPin,
        title: "Location Scouting",
        desc: "The right location can make or break a video. We scout and select the ideal settings, whether it's a studio, outdoor location, or a unique environment that suits your project."
    },
    {
        icon: Users,
        title: "Casting and Talent Management",
        desc: "We handle talent auditions, casting, and management. Our goal is to select the perfect actors, presenters, or hosts who bring your script to life."
    },
    {
        icon: Settings,
        title: "Equipment and Crew Planning",
        desc: "We ensure that the right equipment and skilled crew members are in place for a successful shoot. This includes camera selection, lighting setup, and more."
    },
    {
        icon: Clock,
        title: "Production Timeline",
        desc: "We establish a clear timeline for the pre-production phase to keep everything on track and ensure timely project delivery."
    }
];

export const productionItems: ProductionItem[] = [
    {
        icon: Video,
        title: "Cinematography",
        desc: "Our skilled cinematographers expertly frame and capture your content, ensuring that every shot is visually stunning and engaging."
    },
    {
        icon: Tv,
        title: "Drone Videography",
        desc: "Elevate your visuals with breathtaking aerial footage. Our drone videography services provide stunning perspectives that add a dynamic dimension to your videos."
    },
    {
        icon: Radio,
        title: "Live Streaming",
        desc: "We're well-versed in live streaming, enabling you to broadcast events, presentations, and content in real-time to a global audience."
    },
    {
        icon: Activity,
        title: "Steadicam and Gimbal Work",
        desc: "For silky-smooth and stabilized footage, our Steadicam and gimbal work ensures that every shot is free from shaky distractions."
    },
    {
        icon: Layers,
        title: "Multi-Camera Setup",
        desc: "Multi-camera setups add versatility and dynamism to your video. We utilize multiple cameras to capture different angles and perspectives, enhancing your storytelling."
    },
    {
        icon: Clock,
        title: "Time-Lapse and Slow Motion",
        desc: "Time-lapse and slow-motion techniques are powerful storytelling tools. Our team excels in creating time-lapse sequences and slow-motion footage that captivate audiences."
    },
    {
        icon: Sparkles,
        title: "Green Screen and Chroma Key",
        desc: "For projects that require background replacement or visual effects, our green screen and chroma key services allow us to create virtually any environment, enhancing your storytelling."
    },
    {
        icon: MessageSquare,
        title: "Dynamic Webinars",
        desc: "Webinars are an essential tool for online engagement. We can create and manage dynamic webinars, making sure your content is engaging and informative."
    }
];

export const postProductionItems: PostProductionItem[] = [
    {
        icon: Film,
        title: "Video Editing",
        desc: "Our skilled editors meticulously assemble and edit the footage, creating a seamless, coherent, and compelling narrative that captivates your audience."
    },
    {
        icon: Sliders,
        title: "Color Grading",
        desc: "We enhance the visuals by applying color grading techniques, ensuring that your video looks its best with vibrant colors, a consistent mood, and a professional finish."
    },
    {
        icon: Volume2,
        title: "Audio Enhancement",
        desc: "Clear and impactful audio is vital for a memorable video. We provide audio enhancement services to make sure your message is conveyed with crystal clarity."
    },
    {
        icon: Layers,
        title: "3D Animation and CGI",
        desc: "To add a touch of magic to your project, we offer 3D animation and CGI services that create stunning visual effects and immersive 3D elements."
    },
    {
        icon: Type,
        title: "Subtitles and Closed Captions",
        desc: "We can add subtitles and closed captions to make your content accessible to a broader audience, ensuring that your message reaches everyone."
    },
    {
        icon: PenTool,
        title: "Whiteboard Animation",
        desc: "Whiteboard animation is an engaging way to convey complex ideas. Our whiteboard animation services turn your concepts into captivating visuals that resonate with your audience."
    },
    {
        icon: Disc,
        title: "DVD and Blu-ray Authoring",
        desc: "If your project is intended for physical distribution, we provide DVD and Blu-ray authoring services, ensuring your content is professionally presented."
    },
    {
        icon: Database,
        title: "Archiving and Backup",
        desc: "We understand the importance of preserving your valuable content. Our archiving and backup services ensure that your video assets are securely stored and easily retrievable for future use."
    }
];

export const preProdMarqueeImages: MarqueeImage[] = [
    {
        url: "/src/assets/images/bengali-heritage-mansion.jpg",
        alt: "STORYBOARD DRAFTS"
    },
    {
        url: "/src/assets/images/film-crew-set-kolkata.jpg",
        alt: "PRODUCTION PLANNING"
    },
    {
        url: "/src/assets/images/kumartuli-sculptor-film.jpg",
        alt: "SCRIPT DRAFTING"
    },
    {
        url: "/src/assets/images/project-biopic-1920s.jpg",
        alt: "LENS & RIG SELECTION"
    },
    {
        url: "/src/assets/images/princep-ghat-film.jpg",
        alt: "CREATIVE RECON"
    },
    {
        url: "/src/assets/images/victoria-memorial-film.jpg",
        alt: "SET CONCEPTUALIZATION"
    }
];

export const prodMarqueeImages: MarqueeImage[] = [
    {
        url: "/src/assets/images/kolkata-film-hero.jpg",
        alt: "Production 1"
    },
    {
        url: "/src/assets/images/howrah-bridge-dusk.jpg",
        alt: "Production 2"
    },
    {
        url: "/src/assets/images/durga-puja-cinematic.jpg",
        alt: "Production 3"
    },
    {
        url: "/src/assets/images/kolkata-tram-night.jpg",
        alt: "Production 4"
    },
    {
        url: "/src/assets/images/project-doc-sundarbans.jpg",
        alt: "Production 5"
    }
];

export const postProdMarqueeImages: MarqueeImage[] = [
    {
        url: "/src/assets/images/project-ott-thriller.jpg",
        alt: "Post 1"
    },
    {
        url: "/src/assets/images/project-commercial-gold.jpg",
        alt: "Post 2"
    },
    {
        url: "/src/assets/images/project-bengali-drama.jpg",
        alt: "Post 3"
    },
    {
        url: "/src/assets/images/project-music-video.jpg",
        alt: "Post 4"
    },
    {
        url: "/src/assets/images/project-short-film-tea.jpg",
        alt: "Post 5"
    }
];

export const categoriesData: CategoryItem[] = [
    {
        title: "Corporate Video",
        serial: "01",
        images: [
            "/src/assets/images/victoria-memorial-film.jpg",
            "/src/assets/images/bengali-heritage-mansion.jpg",
            "/src/assets/images/princep-ghat-film.jpg"
        ],
        desc: "Our Corporate Video Production service is a comprehensive solution for organizations seeking effective internal and external communication tools. From employee training and company profiles to marketing messages and investor communications, our corporate videos convey your company's values, mission, and key messages to various stakeholders."
    },
    {
        title: "Commercial Video",
        serial: "02",
        images: [
            "/src/assets/images/project-commercial-gold.jpg",
            "/src/assets/images/howrah-bridge-dusk.jpg",
            "/src/assets/images/kolkata-film-hero.jpg"
        ],
        desc: "High-impact commercial video productions tailored for brands that want to command attention. We design visually striking, narratively rich advertising films and social commercials that capture consumer interest and drive actionable results."
    },
    {
        title: "Documentary Film",
        serial: "03",
        images: [
            "/src/assets/images/project-doc-sundarbans.jpg",
            "/src/assets/images/kumartuli-sculptor-film.jpg",
            "/src/assets/images/durga-puja-cinematic.jpg"
        ],
        desc: "Deep-dive investigative documentaries and emotional human-interest stories. We bring a cinematic patience and editorial integrity to real-world storytelling, uncovering facts and feelings in unscripted environments."
    },
    {
        title: "Product Video",
        serial: "04",
        images: [
            "/src/assets/images/project-commercial-gold.jpg",
            "/src/assets/images/project-short-film-tea.jpg",
            "/src/assets/images/film-crew-set-kolkata.jpg"
        ],
        desc: "Stunning close-up showcases, sleek exploded-view features, and high-fidelity studio shoots. We highlight your product's textures, design nuances, and core mechanics using precision camera motion and customized lighting rigs."
    },
    {
        title: "Animation",
        serial: "05",
        images: [
            "/src/assets/images/kolkata-tram-night.jpg",
            "/src/assets/images/project-ott-thriller.jpg",
            "/src/assets/images/howrah-bridge-dusk.jpg"
        ],
        desc: "Immersive 3D motion graphics, stylized 2D explanatory loops, and high-fidelity CGI composites. We explain complex technological pipelines or build impossible creative universes from the ground up."
    },
    {
        title: "Event Video",
        serial: "06",
        images: [
            "/src/assets/images/durga-puja-cinematic.jpg",
            "/src/assets/images/princep-ghat-film.jpg",
            "/src/assets/images/victoria-memorial-film.jpg"
        ],
        desc: "Comprehensive multi-camera coverage for high-profile summits, live concerts, global summits, and product announcements. We capture the energy, keynote highlights, and attendee experiences in highly polished highlights packages."
    },
    {
        title: "Educational Video",
        serial: "07",
        images: [
            "/src/assets/images/project-biopic-1920s.jpg",
            "/src/assets/images/bengali-heritage-mansion.jpg",
            "/src/assets/images/project-short-film-tea.jpg"
        ],
        desc: "Clear, structured, and informative content engineered for maximum learning retention. We turn complex academic curriculum, technical manuals, and corporate training slides into engaging cinematic formats."
    },
    {
        title: "Entertainment Video",
        serial: "08",
        images: [
            "/src/assets/images/project-bengali-drama.jpg",
            "/src/assets/images/project-ott-thriller.jpg",
            "/src/assets/images/project-music-video.jpg"
        ],
        desc: "High-energy variety shows, creative performance segments, music videos, and scripted episodic content. We supply complete creative planning, staging, and colorgrading to capture pure audience excitement."
    },
    {
        title: "Fashion Video",
        serial: "09",
        images: [
            "/src/assets/images/project-fashion-saree.jpg",
            "/src/assets/images/bengali-heritage-mansion.jpg",
            "/src/assets/images/victoria-memorial-film.jpg"
        ],
        desc: "Avant-garde editorial films, runway lookbooks, and high-fashion brand teasers. We play with dynamic contrast, lighting, shadows, and expressive editing rhythms to craft a captivating luxury aesthetic."
    },
    {
        title: "Lifestyle",
        serial: "10",
        images: [
            "/src/assets/images/project-short-film-tea.jpg",
            "/src/assets/images/princep-ghat-film.jpg",
            "/src/assets/images/kumartuli-sculptor-film.jpg"
        ],
        desc: "Authentic, relatable content focused on wellness, travel, home aesthetics, and organic daily experiences. We emphasize natural lighting, spontaneous smiles, and warm color grading to evoke comfort and aspiration."
    },
    {
        title: "Interview Video",
        serial: "11",
        images: [
            "/src/assets/images/bengali-heritage-mansion.jpg",
            "/src/assets/images/film-crew-set-kolkata.jpg",
            "/src/assets/images/project-biopic-1920s.jpg"
        ],
        desc: "High-fidelity talking-head interviews, podcast captures, and executive panels. We utilize multi-mic arrays and complementary face-key lighting to deliver pristine dialog and warm, professional presence."
    },
    {
        title: "Social Media Video",
        serial: "12",
        images: [
            "/src/assets/images/project-music-video.jpg",
            "/src/assets/images/kolkata-tram-night.jpg",
            "/src/assets/images/project-short-film-tea.jpg"
        ],
        desc: "Vibrant, high-tempo vertical edits (9:16) optimized for TikTok, Instagram Reels, and YouTube Shorts. Engineered with instantly hooky intros, custom captions, and high energy to maximize algorithmic reach."
    }
];

export const faqs: FaqItem[] = [
    {
        q: "What services do you offer?",
        a: "We offer end-to-end video production services spanning custom creative pre-production scripting, full ARRI/RED camera cinematography, spatial multi-channel audio setups, DaVinci Resolve color grading, motion graphics, and high-fidelity mastering."
    },
    {
        q: "How much does video production cost?",
        a: "Budgets scale dynamically based on your creative outline, filming locations, and equipment specifications. We pride ourselves on custom tailoring production values to meet business goals while ensuring uncompromised screen standards."
    },
    {
        q: "How long does it take to produce a video?",
        a: "A typical high-end campaign completes in 4 to 8 weeks. This accounts for pre-production alignment, dedicated production shoots, editing passes, full color sweeps, audio mastering, and platform delivery."
    },
    {
        q: "Can you help with scriptwriting and storyboarding?",
        a: "Yes, our creative team specializes in writing concepts, drafting dialogues, and creating complete visual storyboards before any camera is set up."
    },
    {
        q: "What is the production process like?",
        a: "Our playbook flows sequentially across concept & script layout, principal photography, non-linear video editing, and delivery of platform-optimized aspect exports."
    },
    {
        q: "Do you provide video marketing services?",
        a: "We offer technical distribution support, mastering checks under broadcast parameters, and strategic campaign guidance to maximize viewer interaction."
    },
    {
        q: "Can you work with a specific budget?",
        a: "We collaborate with agencies and brands of varying scales, designing creative parameters to extract the maximum narrative and visual output out of your allocated budget."
    }
];