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
    Film,
    Sliders,
    Volume2,
    Type,
    Database,
    type LucideIcon
} from 'lucide-react';

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

export const preProductionItems: PreProductionItem[] = [
    {
        icon: Lightbulb,
        title: "Concept Development",
        desc: "We work with you to understand your goals, audience, and message — then develop creative concepts that fit your vision and budget."
    },
    {
        icon: PenTool,
        title: "Scriptwriting & Treatment",
        desc: "Our writers craft compelling scripts, treatments, and shooting outlines for your format — whether it's a 30-second commercial, a corporate film, or a feature documentary."
    },
    {
        icon: Layers,
        title: "Storyboarding & Shot Planning",
        desc: "We visualize every scene with detailed storyboards, shot lists, and lighting diagrams — giving the whole crew a clear blueprint before cameras roll."
    },
    {
        icon: MapPin,
        title: "Location Scouting & Recce",
        desc: "We find and secure the perfect locations — studios, heritage buildings, outdoor landscapes, or virtual production stages — with permits, power, and logistics handled."
    },
    {
        icon: Users,
        title: "Casting & Talent Coordination",
        desc: "From professional actors and presenters to real people and voice artists — we handle auditions, callbacks, contracts, and on-set talent management."
    },
    {
        icon: Settings,
        title: "Technical Planning & Gear Prep",
        desc: "Camera packages, lens sets, lighting plots, grip equipment, sound kits, and backup plans — all specified, tested, and prepped for shoot day."
    },
    {
        icon: Clock,
        title: "Scheduling & Budget Management",
        desc: "Detailed shooting schedules, call sheets, day-out-of-days, and budget tracking — ensuring efficient production with no surprises."
    }
];

export const productionItems: ProductionItem[] = [
    {
        icon: Video,
        title: "Principal Photography",
        desc: "Our directors and cinematographers capture your story with precision — blocking, lighting, framing, and directing talent for every shot on the shot list."
    },
    {
        icon: Tv,
        title: "Drone & Aerial Cinematography",
        desc: "Licensed drone operators capture stunning aerial perspectives — cityscapes, landscapes, establishing shots, and dynamic tracking — with full permits and safety compliance."
    },
    {
        icon: Radio,
        title: "Live Streaming & Multi-Cam Events",
        desc: "Professional multi-camera switching, graphics, lower-thirds, and simultaneous recording for live broadcasts, hybrid events, and webcasts to any platform."
    },
    {
        icon: Activity,
        title: "Stabilized Camera Movement",
        desc: "Ronin 2 gimbals, Steadicam, dolly, slider, and crane — smooth, intentional camera motion that adds production value without drawing attention to itself."
    },
    {
        icon: Layers,
        title: "Multi-Camera Production",
        desc: "Synchronized multi-cam setups for interviews, performances, panels, and events — giving editors maximum coverage and creative flexibility in post."
    },
    {
        icon: Clock,
        title: "Time-Lapse & High-Speed Capture",
        desc: "Controlled time-lapse sequences and high-frame-rate slow motion for dramatic effect, product reveals, and visual storytelling punctuation."
    },
    {
        icon: Sparkles,
        title: "Green Screen & Virtual Production",
        desc: "Full cyclorama green screen, LED volume walls, camera tracking, and real-time compositing — enabling virtual locations, set extensions, and ICVFX workflows."
    },
    {
        icon: Video,
        title: "Second Unit & B-Roll Acquisition",
        desc: "Dedicated second unit captures insert shots, cutaways, establishing shots, and atmospheric B-roll — maximizing coverage while first unit focuses on principal scenes."
    }
];

export const postProductionItems: PostProductionItem[] = [
    {
        icon: Film,
        title: "Offline & Online Editing",
        desc: "Rough cut to fine cut to picture lock — narrative pacing, structural refinement, and creative editing decisions that serve the story and engage the viewer."
    },
    {
        icon: Sliders,
        title: "Color Grading & Finishing",
        desc: "DaVinci Resolve color suites with calibrated monitors — primary and secondary grading, LUT creation, HDR/SDR delivery, and final mastering for broadcast and digital."
    },
    {
        icon: Volume2,
        title: "Sound Design & Audio Mixing",
        desc: "Dialogue editing, ADR, Foley, sound effects, music licensing, and 5.1/stereo mastering — immersive audio that elevates every frame."
    },
    {
        icon: Layers,
        title: "Visual Effects & Compositing",
        desc: "Rotoscoping, keying, tracking, 3D integration, matte painting, and motion graphics — seamless VFX that serve the story, not spectacle."
    },
    {
        icon: Type,
        title: "Subtitles, Captions & Localization",
        desc: "Burned-in and sidecar subtitles (SRT, VTT, STL), closed captions for accessibility, and multi-language versions for regional and international distribution."
    },
    {
        icon: Database,
        title: "Mastering, Delivery & Archival",
        desc: "Multi-format exports (ProRes, DNxHR, H.264/HEVC, IMF, DCP), QC reports, secure cloud delivery, and long-term LTO archival with checksum verification."
    }
];

export const preProdMarqueeImages: MarqueeImage[] = [
    { url: "/src/assets/images/bengali-heritage-mansion.jpg", alt: "CONCEPT & MOOD BOARDS" },
    { url: "/src/assets/images/film-crew-set-kolkata.jpg", alt: "PRODUCTION DESIGN" },
    { url: "/src/assets/images/kumartuli-sculptor-film.jpg", alt: "SCRIPT & BREAKDOWN" },
    { url: "/src/assets/images/project-biopic-1920s.jpg", alt: "CAMERA & LENS TESTS" },
    { url: "/src/assets/images/princep-ghat-film.jpg", alt: "LOCATION RECCE" },
    { url: "/src/assets/images/victoria-memorial-film.jpg", alt: "SCHEDULE & BUDGET" }
];

export const prodMarqueeImages: MarqueeImage[] = [
    { url: "/src/assets/images/kolkata-film-hero.jpg", alt: "PRINCIPAL PHOTOGRAPHY" },
    { url: "/src/assets/images/howrah-bridge-dusk.jpg", alt: "AERIAL CINEMATOGRAPHY" },
    { url: "/src/assets/images/durga-puja-cinematic.jpg", alt: "LIVE EVENT COVERAGE" },
    { url: "/src/assets/images/kolkata-tram-night.jpg", alt: "NIGHT EXTERIORS" },
    { url: "/src/assets/images/project-doc-sundarbans.jpg", alt: "DOCUMENTARY SHOOT" }
];

export const postProdMarqueeImages: MarqueeImage[] = [
    { url: "/src/assets/images/project-ott-thriller.jpg", alt: "EDITORIAL & PACING" },
    { url: "/src/assets/images/project-commercial-gold.jpg", alt: "COLOR GRADING" },
    { url: "/src/assets/images/project-bengali-drama.jpg", alt: "SOUND DESIGN" },
    { url: "/src/assets/images/project-music-video.jpg", alt: "VFX & COMPOSITING" },
    { url: "/src/assets/images/project-short-film-tea.jpg", alt: "FINAL DELIVERY" }
];