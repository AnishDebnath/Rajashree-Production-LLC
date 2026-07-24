export interface AlbumPhoto {
    id: string;
    url: string;
    caption: string;
}

export interface Album {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    location: string;
    year: string;
    category: string;
    photos: AlbumPhoto[];
    projectType: string;
    camera: string;
    lenses: string;
    otherEquipment: string;
    highlights: string[];
    challenges: string[];
    behindTheScenes: string[];
}

import goldenSanctuary from './golden-sanctuary';
import neonRain from './neon-rain';
import mistyPalms from './misty-palms';
import riverDevotion from './river-devotion';
import theStoryteller from './the-storyteller';

export const albumsData: Album[] = [
    goldenSanctuary,
    neonRain,
    mistyPalms,
    riverDevotion,
    theStoryteller
];
