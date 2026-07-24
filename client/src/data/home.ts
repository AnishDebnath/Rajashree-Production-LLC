import { Project } from '../types';
import { BlogPost } from './blogs';
export { featuredProjects } from './portfolio';

// ---------- Workflow Carousel Image Arrays ----------

export const preProductionCarouselImages = [
    "/src/assets/images/bengali-heritage-mansion.jpg",
    "/src/assets/images/film-crew-set-kolkata.jpg",
    "/src/assets/images/kumartuli-sculptor-film.jpg"
];

export const productionCarouselImages = [
    "/src/assets/images/kolkata-film-hero.jpg",
    "/src/assets/images/howrah-bridge-dusk.jpg",
    "/src/assets/images/durga-puja-cinematic.jpg"
];

export const postProductionCarouselImages = [
    "/src/assets/images/project-ott-thriller.jpg",
    "/src/assets/images/project-commercial-gold.jpg",
    "/src/assets/images/project-bengali-drama.jpg"
];

// ---------- Hero Slides ----------

export const heroSlides = [
    {
        image: "/src/assets/images/poster-echoes-kolkata-v2.jpg",
        title: "ECHOES OF KOLKATA",
        brand: "A FEATURE FILM BY RAJASHREE PRODUCTION",
        subtitle: "OFFICIAL SELECTION • INTERNATIONAL FILM FESTIVALS 2026"
    },
    {
        image: "/src/assets/images/poster-last-zamindar.jpg",
        title: "THE LAST ZAMINDAR",
        brand: "AN EPIC PERIOD CINEMA BY RAJASHREE PRODUCTION",
        subtitle: "A MESMERIZING TALE OF BENGAL'S LOST HERITAGE AND ROYALTY."
    },
    {
        image: "/src/assets/images/poster-shyambazar-nights.jpg",
        title: "SHYAMBAZAR NIGHTS",
        brand: "AN ORIGINAL OTT CRIME SERIES",
        subtitle: "SOME SECRETS NEVER SLEEP • STREAMING EXCLUSIVELY ON OTT."
    },
    {
        image: "/src/assets/images/poster-sundarbans-tide.jpg",
        title: "SUNDARBANS: TALES OF TIDE",
        brand: "A DOCUMENTARY FEATURE",
        subtitle: "EXPLORING THE MISTY WILD BENGAL DELTA & MANGROVE TIDES."
    },
    {
        image: "/src/assets/images/poster-unspoken-letters.jpg",
        title: "UNSPOKEN LETTERS",
        brand: "AWARD-WINNING SHORT DRAMA",
        subtitle: "A MELANCHOLIC TALE OF LOST MEMORIES INSIDE FORGOTTEN LETTERS."
    },
    {
        image: "/src/assets/images/poster-timekeeper-watch.jpg",
        title: "THE TIMEKEEPER'S WATCH",
        brand: "BIOPIC & HISTORICAL DRAMA",
        subtitle: "THE MYSTERIOUS CHRONICLES OF BENGAL'S FIRST CLOCKMAKER."
    }
];

// ---------- FAQ Data ----------

export const faqs = [
    {
        q: 'What services do you offer?',
        a: 'We offer end-to-end video production, including creative concept development, scriptwriting, storyboard planning, filming with premium cinema camera rigs, spatial sound engineering, CGI animations, and full post-production color grading.'
    },
    {
        q: 'How much does video production cost?',
        a: 'Video production costs vary depending on complexity, crew size, location, visual effects, and sound design. We tailor our services to maximize value and production value for every tier of budget.'
    },
    {
        q: 'How long does it take to produce a video?',
        a: 'A typical project takes between 2 to 6 weeks. This timeline includes planning and concept development, production shooting, and meticulous post-production editing, mixing, and color passes.'
    },
    {
        q: 'Can you help with scriptwriting and storyboarding?',
        a: 'Yes, our creative writers specialize in taking basic concepts and building them into highly cinematic scripts and complete storyboards, establishing clear visual blueprints before shooting begins.'
    },
    {
        q: 'What is the production process like?',
        a: 'Our workflow is highly structured yet collaborative, spanning concept alignment, detailed pre-production scheduling, precision multi-cam cinematic filming, and professional editing/grading passes.'
    },
    {
        q: 'Do you provide video marketing services?',
        a: 'Yes, we optimize files for multi-platform distribution, designing short hooks, custom framing (e.g., vertical 9:16 aspect ratios for social reels), and compressed video variants for digital campaign reach.'
    },
    {
        q: 'Can you work with a specific budget?',
        a: 'We pride ourselves on our adaptability. By adjusting equipment selection, crew scale, and graphics complexity, we design optimized packages to fit your specific funding allocation without compromising on story.'
    }
];

// ---------- Testimonials ----------

export const testimonials = [
    {
        text: 'We are thrilled with our new corporate videos. The team was incredibly calm, patient, and fostered a pleasant atmosphere. Everything came together seamlessly! We wholeheartedly endorse and would recommend them anytime.',
        author: 'SARAH ADAMS',
        role: 'Chief Marketing Officer, HorizonTech Solutions',
        company: 'HORIZONTECH',
        iconType: 'film'
    },
    {
        text: 'StoryStream completely reinvented our advertising layout. They delivered on brief, exceeded on timelines, and elevated our raw script into a commercial masterpiece. The response metrics speak for themselves!',
        author: 'MICHAEL LEE',
        role: 'Director of Brand Communications, Apex Corp',
        company: 'APEX CORP',
        iconType: 'award'
    },
    {
        text: 'Their coloring pipelines and high-fidelity spatial sound design make corporate content look like theatrical releases. The attention to acoustic waves is simply staggering.',
        author: 'RAJESH SHARMA',
        role: 'Founder, Eastern Winds Media',
        company: 'EASTERN WINDS',
        iconType: 'sparkles'
    },
    {
        text: 'Working with them was an absolute game-changer. Their creative visual scripting and unmatched soundscapes transformed our brand story from ordinary to truly breathtaking.',
        author: 'ELENA ROSTOVA',
        role: 'VP of Product, Lumiere Global',
        company: 'LUMIERE GLOBAL',
        iconType: 'sparkles'
    }
];

// ---------- Blogs (Home Page subset) ----------

export const homeBlogs = [
    {
        category: "NEWS",
        title: "Rajashree Production Video Production Career Opportunities and Upcoming Event",
        author: "Rajrupa Sen",
        date: "Dec 12, 2025",
        image: "/src/assets/images/film-crew-set-kolkata.jpg"
    },
    {
        category: "TIPS & TRICKS",
        title: "Mastering Cinematic Lighting & Color: The Golden Hour Aesthetic of Kolkata",
        author: "Vikramaditya Roy",
        date: "Oct 12, 2025",
        image: "/src/assets/images/howrah-bridge-dusk.jpg"
    },
    {
        category: "STORIES",
        title: "Lights, Camera, Action! Behind the Scenes of a Rajashree Production Shoot",
        author: "Marcus Thorne",
        date: "Oct 16, 2025",
        image: "/src/assets/images/kumartuli-sculptor-film.jpg"
    }
];

// ---------- Industries ----------

export const industries = [
    {
        title: "Corporate Videos",
        image: "/src/assets/images/victoria-memorial-film.jpg",
        gridSpan: "col-span-12 md:col-span-7",
        heightClass: "h-[220px] md:h-[320px]"
    },
    {
        title: "Documentaries",
        image: "/src/assets/images/project-doc-sundarbans.jpg",
        gridSpan: "col-span-12 md:col-span-5",
        heightClass: "h-[220px] md:h-[320px]"
    },
    {
        title: "Entertainment and Narrative Films",
        image: "/src/assets/images/project-bengali-drama.jpg",
        gridSpan: "col-span-12 md:col-span-5",
        heightClass: "h-[240px] md:h-[360px]"
    },
    {
        title: "Shorts & Reels",
        image: "/src/assets/images/project-short-film-tea.jpg",
        gridSpan: "col-span-12 md:col-span-7",
        heightClass: "h-[240px] md:h-[360px]"
    },
    {
        title: "Commercials and Advertisements",
        image: "/src/assets/images/project-commercial-gold.jpg",
        gridSpan: "col-span-12 md:col-span-4",
        heightClass: "h-[200px] md:h-[300px]"
    },
    {
        title: "Event and Live Streaming",
        image: "/src/assets/images/durga-puja-cinematic.jpg",
        gridSpan: "col-span-12 md:col-span-4",
        heightClass: "h-[200px] md:h-[300px]"
    },
    {
        title: "Animation and VFX (Visual Effects)",
        image: "/src/assets/images/kolkata-tram-night.jpg",
        gridSpan: "col-span-12 md:col-span-4",
        heightClass: "h-[200px] md:h-[300px]"
    }
];

// ---------- HomePage Component Props Type ----------

export interface HomePageProps {
    setActiveTab: (tab: string) => void;
    onShowMessage: (msg: string, type?: 'info' | 'success') => void;
    onProjectClick?: (project: Project) => void;
    onSelectBlog?: (blog: BlogPost) => void;
}