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
    { url: "/src/assets/images/bengali-heritage-mansion.jpg", alt: "STORYBOARD DRAFTS" },
    { url: "/src/assets/images/film-crew-set-kolkata.jpg", alt: "PRODUCTION PLANNING" },
    { url: "/src/assets/images/kumartuli-sculptor-film.jpg", alt: "SCRIPT DRAFTING" },
    { url: "/src/assets/images/project-biopic-1920s.jpg", alt: "LENS & RIG SELECTION" },
    { url: "/src/assets/images/princep-ghat-film.jpg", alt: "CREATIVE RECON" },
    { url: "/src/assets/images/victoria-memorial-film.jpg", alt: "SET CONCEPTUALIZATION" }
];

export const prodMarqueeImages: MarqueeImage[] = [
    { url: "/src/assets/images/kolkata-film-hero.jpg", alt: "Production 1" },
    { url: "/src/assets/images/howrah-bridge-dusk.jpg", alt: "Production 2" },
    { url: "/src/assets/images/durga-puja-cinematic.jpg", alt: "Production 3" },
    { url: "/src/assets/images/kolkata-tram-night.jpg", alt: "Production 4" },
    { url: "/src/assets/images/project-doc-sundarbans.jpg", alt: "Production 5" }
];

export const postProdMarqueeImages: MarqueeImage[] = [
    { url: "/src/assets/images/project-ott-thriller.jpg", alt: "Post 1" },
    { url: "/src/assets/images/project-commercial-gold.jpg", alt: "Post 2" },
    { url: "/src/assets/images/project-bengali-drama.jpg", alt: "Post 3" },
    { url: "/src/assets/images/project-music-video.jpg", alt: "Post 4" },
    { url: "/src/assets/images/project-short-film-tea.jpg", alt: "Post 5" }
];