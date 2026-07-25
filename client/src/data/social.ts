export interface ReelItem {
    id: string;
    title: string;
    category: string;
    views: string;
    likes: string;
    likesCount: number;
    commentsCount: number;
    shares: string;
    videoUrl: string;
    imageUrl: string;
    sound: string;
    creator: string;
    duration: string;
    caption: string;
}

export interface MockComment {
    username: string;
    text: string;
    likes: string;
}

export const reelsData: ReelItem[] = [
    {
        id: '1',
        title: "Feature Film Production BTS",
        category: "BEHIND THE SCENES",
        views: "—",
        likes: "—",
        likesCount: 0,
        commentsCount: 0,
        shares: "—",
        videoUrl: "/src/assets/videos/bts-feature-film.mp4",
        imageUrl: "/src/assets/images/bengali-heritage-mansion.jpg",
        sound: "Original Set Audio",
        creator: "@rajashreeproduction",
        duration: "30s",
        caption: "Behind the scenes on our latest feature film shoot in a historic Kolkata mansion. From blocking to lighting to the final take — watch how a scene comes together. 🎬 #filmmaking #bts #kolkata #featurefilm"
    },
    {
        id: '2',
        title: "Commercial Shoot: Jewelry Brand",
        category: "COMMERCIAL",
        views: "—",
        likes: "—",
        likesCount: 0,
        commentsCount: 0,
        shares: "—",
        videoUrl: "/src/assets/videos/bts-commercial-jewelry.mp4",
        imageUrl: "/src/assets/images/project-commercial-gold.jpg",
        sound: "Commercial Score",
        creator: "@rajashreeproduction",
        duration: "25s",
        caption: "Macro cinematography for a luxury jewelry commercial. Precision lighting, high-speed capture, and macro lenses revealing every facet. ✨ #commercial #jewelry #macro #cinematography"
    },
    {
        id: '3',
        title: "Documentary: Sundarbans Mangroves",
        category: "DOCUMENTARY",
        views: "—",
        likes: "—",
        likesCount: 0,
        commentsCount: 0,
        shares: "—",
        videoUrl: "/src/assets/videos/bts-doc-sundarbans.mp4",
        imageUrl: "/src/assets/images/project-doc-sundarbans.jpg",
        sound: "Ambient Field Recording",
        creator: "@rajashreeproduction",
        duration: "28s",
        caption: "Filming in the Sundarbans — navigating tidal channels, capturing mangrove ecosystems, and documenting local communities. Real stories, real places. 🌿 #documentary #sundarbans #bengal #wildlife"
    },
    {
        id: '4',
        title: "Music Video Production Setup",
        category: "MUSIC VIDEO",
        views: "—",
        likes: "—",
        likesCount: 0,
        commentsCount: 0,
        shares: "—",
        videoUrl: "/src/assets/videos/bts-music-video.mp4",
        imageUrl: "/src/assets/images/project-music-video.jpg",
        sound: "Artist Track Preview",
        creator: "@rajashreeproduction",
        duration: "22s",
        caption: "Lighting a music video set — LED walls, moving heads, practicals, and color gels creating the visual world for the artist's performance. 🎵 #musicvideo #lighting #setlife #production"
    },
    {
        id: '5',
        title: "Corporate Brand Film: Factory Tour",
        category: "CORPORATE",
        views: "—",
        likes: "—",
        likesCount: 0,
        commentsCount: 0,
        shares: "—",
        videoUrl: "/src/assets/videos/bts-corporate-factory.mp4",
        imageUrl: "/src/assets/images/victoria-memorial-film.jpg",
        sound: "Corporate Underscore",
        creator: "@rajashreeproduction",
        duration: "20s",
        caption: "Producing a brand film for a manufacturing client — drone establishing shots, gimbal walkthroughs, interview setups, and detail macros telling the story of craftsmanship. 🏭 #corporatevideo #brandfilm #manufacturing"
    },
    {
        id: '6',
        title: "Drone Aerials: Kolkata Cityscape",
        category: "AERIAL",
        views: "—",
        likes: "—",
        likesCount: 0,
        commentsCount: 0,
        shares: "—",
        videoUrl: "/src/assets/videos/drone-kolkata.mp4",
        imageUrl: "/src/assets/images/howrah-bridge-dusk.jpg",
        sound: "Cinematic Ambient",
        creator: "@rajashreeproduction",
        duration: "18s",
        caption: "Golden hour over Howrah Bridge and the Hooghly. Licensed drone ops, 5.2K capture, ND filters for smooth motion. The city from above. 🌅 #drone #aerial #kolkata #howrahbridge"
    },
    {
        id: '7',
        title: "Short Film: Tea Stall Stories",
        category: "SHORT FILM",
        views: "—",
        likes: "—",
        likesCount: 0,
        commentsCount: 0,
        shares: "—",
        videoUrl: "/src/assets/videos/bts-short-film-tea.mp4",
        imageUrl: "/src/assets/images/project-short-film-tea.jpg",
        sound: "Original Score",
        creator: "@rajashreeproduction",
        duration: "24s",
        caption: "Intimate short film set in a Kolkata tea stall. Natural light, practical lamps, handheld intimacy — small crew, big heart. ☕ #shortfilm #indie #kolkata #storytelling"
    },
    {
        id: '8',
        title: "Green Screen & Virtual Production",
        category: "VFX & VIRTUAL",
        views: "—",
        likes: "—",
        likesCount: 0,
        commentsCount: 0,
        shares: "—",
        videoUrl: "/src/assets/videos/bts-virtual-prod.mp4",
        imageUrl: "/src/assets/images/project-ott-thriller.jpg",
        sound: "Tech Ambient",
        creator: "@rajashreeproduction",
        duration: "26s",
        caption: "LED volume wall, camera tracking, real-time compositing — virtual production workflow for an OTT thriller. Infinite backgrounds, zero travel. ⚡ #virtualproduction #ledvolume #icvfx #ott"
    },
    {
        id: '9',
        title: "Event Coverage: Durga Puja Cultural Fest",
        category: "EVENTS",
        views: "—",
        likes: "—",
        likesCount: 0,
        commentsCount: 0,
        shares: "—",
        videoUrl: "/src/assets/videos/bts-event-durgapuja.mp4",
        imageUrl: "/src/assets/images/durga-puja-cinematic.jpg",
        sound: "Live Cultural Audio",
        creator: "@rajashreeproduction",
        duration: "30s",
        caption: "Multi-cam live coverage of Kolkata's biggest festival — cultural performances, artisan showcases, community moments. Same-day highlights delivery. 🪔 #eventvideo #durgapuja #kolkata #live"
    },
    {
        id: '10',
        title: "Studio Tour: Our Kolkata Facility",
        category: "STUDIO",
        views: "—",
        likes: "—",
        likesCount: 0,
        commentsCount: 0,
        shares: "—",
        videoUrl: "/src/assets/videos/studio-tour.mp4",
        imageUrl: "/src/assets/images/film-crew-set-kolkata.jpg",
        sound: "Walkthrough Voiceover",
        creator: "@rajashreeproduction",
        duration: "35s",
        caption: "Walkthrough of our production facility — cinema camera room, lighting grip, sound suites, edit bays, color grading theater, green screen cyclorama. Book a visit. 🎥 #studio #kolkata #productionhouse #facility"
    }
];

export const mockComments: MockComment[] = [
    { username: "@filmmaker_kolkata", text: "Love the lighting setup on the jewelry commercial. What key light did you use?", likes: "24" },
    { username: "@docu_director", text: "The Sundarbans footage is stunning. How did you handle the humidity with the gear?", likes: "18" },
    { username: "@music_video_dop", text: "That LED wall setup is clean. Virtual production is the future.", likes: "31" },
    { username: "@corporate_client", text: "Your team made our factory look cinematic. Thank you!", likes: "12" },
    { username: "@indie_filmmaker", text: "The tea stall short feels so authentic. Great direction.", likes: "7" }
];