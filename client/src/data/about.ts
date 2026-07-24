import { Sparkles, Award, Users, Target, Heart, Star } from 'lucide-react';

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    facebook: string;
    linkedin: string;
}

export interface Partner {
    name: string;
    symbol: string;
}

export interface USP {
    title: string;
    desc: string;
    icon: typeof Sparkles;
}

export interface Testimonial {
    text: string;
    author: string;
    role: string;
    company: string;
    iconType: string;
}

export interface FAQ {
    q: string;
    a: string;
}

export interface CoreValue {
    num: string;
    title: string;
    desc: string;
}

export interface CoreValue {
    num: string;
    title: string;
    desc: string;
}

export const teamMembers: TeamMember[] = [
    {
        name: 'Vikramaditya Roy',
        role: 'PRINCIPAL FILM DIRECTOR',
        image: '/src/assets/images/artist-vikram-roy.jpg',
        facebook: '#',
        linkedin: '#'
    },
    {
        name: 'Elina Roy',
        role: 'DIRECTOR OF PHOTOGRAPHY',
        image: '/src/assets/images/artist-elina-roy.jpg',
        facebook: '#',
        linkedin: '#'
    },
    {
        name: 'Aisha Sen',
        role: 'CREATIVE DIRECTOR & PRODUCER',
        image: '/src/assets/images/artist-aisha-sen.jpg',
        facebook: '#',
        linkedin: '#'
    },
    {
        name: 'Kabir Mehta',
        role: 'LEAD SOUND DESIGNER & COMPOSER',
        image: '/src/assets/images/artist-kabir-mehta.jpg',
        facebook: '#',
        linkedin: '#'
    },
    {
        name: 'Sarah Sen',
        role: 'SENIOR VFX SUPERVISOR',
        image: '/src/assets/images/artist-sarah-sen.jpg',
        facebook: '#',
        linkedin: '#'
    },
    {
        name: 'Marcus Thorne',
        role: 'PRINCIPAL FILM EDITOR',
        image: '/src/assets/images/artist-marcus-thorne.jpg',
        facebook: '#',
        linkedin: '#'
    }
];

export const partners: Partner[] = [
    { name: 'Apex Corp', symbol: 'A' },
    { name: 'HorizonTech', symbol: 'H' },
    { name: 'CineWave', symbol: 'C' },
    { name: 'Eastern Winds', symbol: 'E' },
    { name: 'Vanguard Media', symbol: 'V' },
    { name: 'Zenith Group', symbol: 'Z' },
    { name: 'Nova Digital', symbol: 'N' },
    { name: 'PixelForge', symbol: 'P' },
    { name: 'Stellar Agency', symbol: 'S' },
    { name: 'Summit Studios', symbol: 'S' },
    { name: 'Aether Films', symbol: 'A' },
    { name: 'Eclipse Media', symbol: 'E' },
    { name: 'Chronos Co', symbol: 'C' },
    { name: 'Ignite Brand', symbol: 'I' },
    { name: 'Aura Interactive', symbol: 'A' },
    { name: 'Optima Vision', symbol: 'O' }
];

export const usps: USP[] = [
    {
        title: 'Exceptional Creativity',
        desc: 'Clients choose us for our unparalleled creative prowess. We breathe life into ideas, turning them into visually stunning, memorable videos.',
        icon: Sparkles
    },
    {
        title: 'Proven Track Record',
        desc: "Our portfolio is a testament to our success. We've consistently delivered outstanding results, earning the trust of clients time and again.",
        icon: Award
    },
    {
        title: 'Collaborative Approach',
        desc: "We don't just work for our clients; we work with them. Our collaborative spirit ensures that each project is a true partnership, vision coming to life.",
        icon: Users
    },
    {
        title: 'Innovative Solutions',
        desc: "We're known for pushing boundaries and finding innovative solutions. Clients appreciate our ability to think outside the box and deliver beyond expectations.",
        icon: Target
    },
    {
        title: 'Exceptional Team',
        desc: 'Our team is a powerhouse of talent, experience, and passion. Clients choose us for the depth of expertise and dedication we bring to every project.',
        icon: Heart
    },
    {
        title: 'Attention to Detail',
        desc: 'We obsess over the finest points. Every frame, every edit, every sound is carefully crafted to ensure the highest quality and maximum impact.',
        icon: Star
    }
];

export const testimonials: Testimonial[] = [
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

export const faqs: FAQ[] = [
    {
        q: 'What services do you offer?',
        a: 'We offer end-to-end video production, including creative concept development, scriptwriting, storyboard planning, filming with premium cinema camera rigs, spatial sound engineering, CGI animations, and full post-production color grading.'
    },
    {
        q: 'How much does video production cost?',
        a: 'Video production costs vary depending on the complexity of the project, including crew size, shoot duration, gear requirements, and post-production scaling. We offer modular packages tailored to fit diverse creative scopes and budgets.'
    },
    {
        q: 'How long does it take to produce a video?',
        a: 'Typically, projects range from 2 to 6 weeks. This timeline accounts for planning, scripting, production shoots, editing passes, professional sound scoring, and final color correction.'
    },
    {
        q: 'Can you help with scriptwriting and storyboarding?',
        a: 'Yes! We specialize in narrative design. Our copywriters and story artists turn basic concepts into bulletproof scripts and detailed storyboards before any camera starts rolling.'
    },
    {
        q: 'What is the production process like?',
        a: 'Our pipeline is structured across four phases: Pre-Production (scripting/casting), Principal Photography (cinematic filming), Post-Production (grading/sound design), and Delivery (mastering/deployment).'
    },
    {
        q: 'Do you provide video marketing services?',
        a: 'While we are primarily a premium production studio, we optimize and format all deliverables for multi-platform placement (digital, social, broadcast) to maximize audience reach.'
    },
    {
        q: 'Can you work with a specific budget?',
        a: 'Absolutely. We cooperate with our clients to refine production designs, choosing the optimal crew size, locations, and gear packages to maximize on-screen production value within their budget.'
    }
];

export const storytellerImages = [
    { src: "/src/assets/images/film-crew-set-kolkata.jpg", alt: "Film crew working on location in Kolkata" },
    { src: "/src/assets/images/bengali-heritage-mansion.jpg", alt: "Cinematic filming inside Bengali heritage mansion" },
    { src: "/src/assets/images/kumartuli-sculptor-film.jpg", alt: "Filming Kumartuli artisan sculptors" },
    { src: "/src/assets/images/durga-puja-cinematic.jpg", alt: "Cinematic lighting setup for Durga Puja shoot" },
    { src: "/src/assets/images/princep-ghat-film.jpg", alt: "Princep Ghat cinematic sequence filming" },
    { src: "/src/assets/images/kolkata-film-hero.jpg", alt: "Cinematographer on cinema camera rig" },
];

export const coreValues: CoreValue[] = [
    {
        num: "01",
        title: "Creativity",
        desc: "We believe in the power of imagination and creative thinking. We strive to infuse innovation and originality into everything we do, producing unique and captivating video content."
    },
    {
        num: "02",
        title: "Quality",
        desc: "Excellence is non-negotiable. We are committed to delivering top-notch video production services that meet and exceed our clients' expectations, from concept to final product."
    },
    {
        num: "03",
        title: "Collaboration",
        desc: "We value teamwork and collaboration. We work closely with our clients, understanding their vision and goals, to ensure that every project is a true collaboration resulting in success."
    },
    {
        num: "04",
        title: "Integrity",
        desc: "Trust and honesty are at the heart of our agency. We maintain the highest ethical standards in all our interactions, ensuring transparency, reliability, and long-lasting relationships with our clients and partners."
    }
];