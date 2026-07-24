export interface Artist {
    id: string;
    name: string;
    role: string;
    avatar: string;
    bio: string;
    specialties: string[];
    experience: string;
    instagram?: string;
    vimeo?: string;
    linkedin?: string;
    featuredWorks: string[];
    gallery: string[];
}

import vikramadityaRoy from './vikramaditya-roy';
import elinaRoy from './elina-roy';
import kabirMehta from './kabir-mehta';
import sarahSen from './sarah-sen';
import marcusThorne from './marcus-thorne';
import aishaSen from './aisha-sen';

export const artistsData: Artist[] = [
    vikramadityaRoy,
    elinaRoy,
    kabirMehta,
    sarahSen,
    marcusThorne,
    aishaSen
];
