import { Sparkles, Award, Users, Target, Heart, Star } from 'lucide-react';

export interface USP {
    title: string;
    desc: string;
    icon: typeof Sparkles;
}

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