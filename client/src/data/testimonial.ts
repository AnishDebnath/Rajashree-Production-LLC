export interface Testimonial {
    text: string;
    author: string;
    role: string;
    company: string;
    iconType: string;
}

export const testimonials: Testimonial[] = [
    {
        text: 'The team at Rajashree Production delivered our brand film with exceptional professionalism. They understood our vision, managed the entire production seamlessly, and the final output exceeded our expectations. The color grading and sound design elevated our story beautifully.',
        author: 'Marketing Director',
        role: 'Consumer Goods Brand',
        company: 'Kolkata',
        iconType: 'film'
    },
    {
        text: 'We partnered with them for a documentary series on Bengal\'s heritage crafts. Their crew\'s sensitivity to the subject, technical excellence with limited locations, and post-production finesse resulted in a film that premiered at festivals and aired on a major OTT platform.',
        author: 'Executive Producer',
        role: 'Documentary Production',
        company: 'Mumbai',
        iconType: 'award'
    },
    {
        text: 'Their cinematography and lighting brought a cinematic quality to our corporate video that we rarely see in this category. The drone work over our facilities, the interview setups, the color grade — every technical decision served the narrative. Highly recommended.',
        author: 'Head of Communications',
        role: 'Manufacturing Company',
        company: 'Kolkata',
        iconType: 'sparkles'
    },
    {
        text: 'Fast turnaround, clear communication, and zero drama. We needed a series of social media shorts for a product launch. They concepted, shot, and delivered 15 vertical videos in under two weeks. The content performed 3x our benchmark. Will definitely work together again.',
        author: 'Digital Marketing Lead',
        role: 'Fashion & Lifestyle Brand',
        company: 'Delhi',
        iconType: 'sparkles'
    }
];