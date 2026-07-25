import { Sparkles, Award, Users, Target, Heart, Star, Film, Camera, Mic, Layers } from 'lucide-react';

export interface USP {
    title: string;
    desc: string;
    icon: typeof Sparkles;
}

export const usps: USP[] = [
    {
        title: 'Full-Service Production House',
        desc: 'We handle every stage — from concept and script to shooting, editing, color grading, sound design, and final delivery. One team, complete solution.',
        icon: Film
    },
    {
        title: 'Experienced Creative Team',
        desc: 'Our team has award-winning directors, cinematographers, editors, sound designers, VFX artists, and producers who have worked on feature films, commercials, documentaries, and digital content.',
        icon: Users
    },
    {
        title: 'Kolkata-Based, Global Quality',
        desc: 'Based in Kolkata, West Bengal. We use local talent, locations, and production support while delivering quality that matches international standards for brands and platforms worldwide.',
        icon: Target
    },
    {
        title: 'All Formats Under One Roof',
        desc: 'We produce feature films, short films, TV commercials, brand films, corporate videos, music videos, documentaries, web series, OTT content, and social media content — all in one place.',
        icon: Camera
    },
    {
        title: 'Professional Equipment & Studios',
        desc: 'High-end cinema cameras (RED, ARRI), professional lighting, grip equipment, sound recording gear, green screen studios, and post-production suites for color grading and audio mixing.',
        icon: Sparkles
    },
    {
        title: 'Client-First Collaborative Process',
        desc: 'We work closely with you at every stage — understanding goals, sharing creative direction, taking feedback, and delivering on time and on budget. Your vision, our expertise.',
        icon: Heart
    },
    {
        title: 'Complete Post-Production',
        desc: 'Full post-production including editing, color grading, VFX, motion graphics, sound design, audio mixing, subtitles, and multi-format delivery for broadcast and digital.',
        icon: Layers
    },
    {
        title: 'Transparent Production Management',
        desc: 'Clear timelines, detailed budgets, regular updates, and dedicated production managers who handle logistics, permits, casting, locations, and crew so you can focus on the creative.',
        icon: Award
    }
];