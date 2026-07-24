export interface Testimonial {
    text: string;
    author: string;
    role: string;
    company: string;
    iconType: string;
}

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