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
    // Rich details for the Album Detail Page matching the screenshot
    projectType: string;
    camera: string;
    lenses: string;
    otherEquipment: string;
    highlights: string[];
    challenges: string[];
    behindTheScenes: string[];
}
