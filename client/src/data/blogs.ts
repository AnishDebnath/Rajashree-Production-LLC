export interface BlogSection {
  title?: string;
  introduction?: string;
  items?: {
    num?: string;
    label: string;
    description: string;
  }[];
  content?: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  introduction: string;
  sections: BlogSection[];
  conclusion: string;
}

export const blogCategories: string[] = ['All', 'NEWS', 'STORIES', 'TIPS & TRICKS'];

export const blogsData: BlogPost[] = [
  {
    id: 'unveiling-storystreams-commitment-sustainability',
    category: 'NEWS',
    title: "Unveiling Rajashree Production's Eco-Friendly Film Sets: Sustainable Cinema in Bengal",
    author: 'RAJRUPA SEN',
    date: 'OCT 1, 2025',
    image: '/src/assets/images/film-crew-set-kolkata.jpg',
    excerpt: 'Explore our commitment to eco-friendly cinema production in Kolkata, showcasing how we reduce environmental footprint while creating captivating feature films.',
    introduction: "At Rajashree Production LLC, we are passionate about cinematic storytelling, and that passion extends to sustainable filmmaking. We share our commitment to eco-friendly film sets in Kolkata, reducing our environmental footprint while continuing to produce award-winning Bengali feature films and commercials.",
    sections: [
      {
        introduction: "Our Sustainable Vision:\n\n• Introduce Rajashree Production's vision for sustainability in Indian cinema production and responsible environmental practices."
      },
      {
        items: [
          {
            num: '1.',
            label: 'Reducing Carbon Footprint',
            description: 'Steps Rajashree Production is taking to reduce carbon footprint, from efficient LED studio lighting to eco-friendly set design materials.'
          },
          {
            num: '2.',
            label: 'Solar & Energy-Efficient Studios',
            description: 'Implementation of energy-efficient technologies in our Kolkata studios, maintaining top-notch cinema quality.'
          },
          {
            num: '3.',
            label: 'Sustainable Set Construction',
            description: 'Using upcycled materials in period set designs for Kolkata heritage films.'
          }
        ]
      }
    ],
    conclusion: "At Rajashree Production LLC, we believe in the power of visual storytelling to change the world. With our eco-friendly practices, we're not just making movies; we're creating a cleaner, greener future for Bengali and Indian cinema."
  },
  {
    id: 'storystreams-gears-up-for-spectacular-2023',
    category: 'NEWS',
    title: 'Rajashree Production LLC Unveils 2026 Bengali Cinema Slate: Feature Films & OTT Series',
    author: 'VIKRAMADITYA ROY',
    date: 'JAN 15, 2026',
    image: '/src/assets/images/kolkata-film-hero.jpg',
    excerpt: 'Get an exclusive sneak peek into our upcoming feature films, OTT thriller web series, and international festival submissions.',
    introduction: "As we step into 2026, the team at Rajashree Production LLC is rolling out a series of cutting-edge production upgrades, expanding our creative horizons with RED 8K camera rigs and Dolby Atmos post-suites.",
    sections: [
      {
        title: 'Our Next-Gen Technological Setup',
        content: 'We have updated our Kolkata studio floor with HDR tracking systems and DaVinci Resolve color suites.'
      },
      {
        items: [
          {
            num: '1.',
            label: 'Advanced Cinema Workflows',
            description: 'Integrating ARRI Alexa and RED 8K cameras for unmatched low-light performance across street shoots.'
          },
          {
            num: '2.',
            label: 'Immersive Dolby Atmos Sound Design',
            description: 'Full spatial audio capabilities across feature films, music videos, and commercial advertising pipelines.'
          }
        ]
      }
    ],
    conclusion: "We cannot wait to share these film projects with you. 2026 is set to be our most collaborative and creative year yet!"
  },
  {
    id: 'video-marketing-magic-10-tips-to-boost-brand',
    category: 'TIPS & TRICKS',
    title: "Cinematic Branding: How Commercial Advertisements Drive Conversion in India",
    author: 'AISHA SEN',
    date: 'NOV 4, 2025',
    image: '/src/assets/images/project-commercial-gold.jpg',
    excerpt: 'Maximize brand impact with these essential insights for crafting compelling, high-conversion commercial films and digital advertisements.',
    introduction: "In today's fast-paced digital ecosystem, visual storytelling is the ultimate currency. Commercial video ads crafted with cinema-grade lighting and emotional narrative build lasting brand loyalty.",
    sections: [
      {
        title: 'Crafting the Ultimate Brand Film',
        content: 'To achieve advertising excellence, emotional resonance and cinematic quality are key.'
      },
      {
        items: [
          {
            num: '1.',
            label: 'Hook within the First 3 Seconds',
            description: 'Deliver value or a visual curiosity hook immediately with stunning anamorphic imagery.'
          },
          {
            num: '2.',
            label: 'Tell a Human Story',
            description: 'Focus on emotional connection rather than dry feature lists.'
          }
        ]
      }
    ],
    conclusion: "By applying cinematic storytelling, your brand will establish a deeper connection with audiences across India."
  },
  {
    id: 'storystreams-video-production-career-opportunities',
    category: 'NEWS',
    title: "Join Rajashree Production LLC: Career Opportunities in Kolkata Film Industry",
    author: 'ELINA ROY',
    date: 'DEC 12, 2025',
    image: '/src/assets/images/film-crew-set-kolkata.jpg',
    excerpt: 'Join our award-winning production house. Learn about open roles in direction, cinematography, editing, and sound design.',
    introduction: "Rajashree Production LLC is expanding! We are looking for passionate, vision-driven creators who want to build a career in feature films, commercials, and OTT web series.",
    sections: [
      {
        title: 'Open Roles & Recruitment Pipeline',
        content: 'We are accepting portfolios for multiple roles across pre-production, production, and post-production crews.'
      },
      {
        items: [
          {
            num: '•',
            label: 'Assistant Directors & Script Supervisors',
            description: 'Organize shoots, collaborate on screenplays, and guide on-set logistics.'
          },
          {
            num: '•',
            label: 'Post-Production Editors & Colorists',
            description: 'Master grading and dynamic pacing in DaVinci Resolve.'
          }
        ]
      }
    ],
    conclusion: "Submit your showreel through our contact portal to connect with our lead film producers."
  },
  {
    id: 'from-script-to-screen-the-journey-of-crafting-stories',
    category: 'STORIES',
    title: 'From Script to Screen: The Creative Journey of Bengali Feature Filmmaking',
    author: 'VIKRAMADITYA ROY',
    date: 'OCT 8, 2025',
    image: '/src/assets/images/bengali-heritage-mansion.jpg',
    excerpt: 'Go behind the scenes and follow the step-by-step journey that transforms a screenplay into an award-winning feature film.',
    introduction: "Every film masterpiece starts as a screenplay. Translating written dialogue into cinematic light, shadow, and sound is a meticulous dance of passion and art.",
    sections: [
      {
        title: 'The Blueprint of Cinema Success',
        content: 'There are three main phases: Pre-production, Production on location in Kolkata, and Post-production.'
      },
      {
        items: [
          {
            num: '1.',
            label: 'The Screenplay & Location Scouting',
            description: 'Finding heritage mansions in North Kolkata and writing dialogue that captures Bengal culture.'
          },
          {
            num: '2.',
            label: 'Cinematography & Set Styling',
            description: 'Planning camera moves and matching warm golden lighting to the narrative mood.'
          }
        ]
      }
    ],
    conclusion: "Understanding this lifecycle is what separates ordinary footage from timeless cinema at Rajashree Production LLC."
  },
  {
    id: 'the-visual-revolution-unveiling-profound-importance',
    category: 'TIPS & TRICKS',
    title: 'The OTT Streaming Boom: How Quality Cinema Reaches Global Indian Audiences',
    author: 'KABIR MEHTA',
    date: 'OCT 6, 2025',
    image: '/src/assets/images/project-ott-thriller.jpg',
    excerpt: 'Analyze the shift toward high-end OTT web series and feature films on global streaming platforms like Hoichoi, Netflix, and Prime.',
    introduction: "We are living in an era of global streaming accessibility. From Bengali cinema lovers worldwide to mainstream Indian audiences, quality OTT content commands attention.",
    sections: [
      {
        title: 'Why Cinema Quality Matters on OTT',
        content: 'By uniting 8K cinematography, spatial sound mixing, and authentic storytelling, web series achieve massive viewership.'
      }
    ],
    conclusion: "Quality film production is the foundational engine of modern entertainment growth."
  },
  {
    id: 'mastering-the-art-of-storytelling-power-of-narrative',
    category: 'TIPS & TRICKS',
    title: 'Mastering Cinematic Lighting & Color: The Golden Hour Aesthetic of Kolkata',
    author: 'SARAH SEN',
    date: 'OCT 17, 2025',
    image: '/src/assets/images/howrah-bridge-dusk.jpg',
    excerpt: 'Uncover the color grading secrets behind the golden hour highlights and moody shadows of Rajashree Production films.',
    introduction: "A beautiful camera shot pleases the eye, but rich color grading captures the soul. Learn how we craft golden highlights and film grain in DaVinci Resolve.",
    sections: [
      {
        title: 'The Art of Color Continuity',
        content: 'Matching skin tones and ambient warm tungsten lighting across interior and exterior Kolkata shoots.'
      }
    ],
    conclusion: "Color grading is the emotional heartbeat of feature cinema."
  },
  {
    id: 'lights-camera-action-behind-scenes-production',
    category: 'STORIES',
    title: 'Lights, Camera, Action! Behind the Scenes of a Rajashree Production Film Shoot',
    author: 'MARCUS THORNE',
    date: 'OCT 16, 2025',
    image: '/src/assets/images/kumartuli-sculptor-film.jpg',
    excerpt: 'Step onto the bustling set in Kumartuli and North Kolkata to witness the coordinated team of gaffers, grips, and directors.',
    introduction: "What happens when Director Vikramaditya Roy calls 'Action!'? Step onto our set and explore the dynamic ecosystem of a live film production.",
    sections: [
      {
        title: 'The Symphony on Set',
        content: 'From lighting key setups to camera dolly moves, every second is a joint effort between passionate film artists.'
      }
    ],
    conclusion: "At Rajashree Production LLC, every frame is crafted with dedication to cinema."
  }
];
