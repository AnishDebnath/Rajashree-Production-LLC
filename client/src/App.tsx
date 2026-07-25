import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, AlertCircle, Info, X } from 'lucide-react';

import Navbar from './components/common/header/Navbar';
import Hero from './components/common/hero/Hero';
import OpeningIntro from './components/common/OpeningIntro';
import ProjectGrid from './pages/Project/ProjectGrid';
import ProjectDetailPage from './pages/ProjectDetail';
import AlbumsPage from './pages/Albums';
import AlbumDetailPage from './pages/AlbumDetail';
import BlogsPage from './pages/Blogs';
import BlogDetailPage from './pages/BlogDetail';
import ArtistsPage from './pages/Artists';
import ArtistDetailPage from './pages/ArtistDetail';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ProjectsPage from './pages/Project';
import HomePage from './pages/Home';
import { Footer, CtaSection } from './components/common/footer';
import ThreeDBackground from './components/ThreeDBackground';

import { projectsData } from './data/portfolio';
import { Project, Category } from './types';
import { Album } from './data/albums';
import { BlogPost } from './data/blogs';
import { Artist, artistsData } from './data/artists';

// URL parsing utilities
const validTabs = ['home', 'projects', 'albums', 'artists', 'about', 'services', 'blogs', 'contact'] as const;

type Tab = typeof validTabs[number];

type DetailType = 'project' | 'album' | 'artist' | 'blog' | null;

interface ParsedPath {
  tab: Tab;
  detailType: DetailType;
  detailId: string | null;
}

const parsePath = (path: string): ParsedPath => {
  const segments = path.split('/').filter(Boolean);
  if (segments.length === 0) return { tab: 'home', detailType: null, detailId: null };

  const tab = segments[0] as Tab;
  if (!validTabs.includes(tab)) return { tab: 'home', detailType: null, detailId: null };

  const detailId = segments.length > 1 ? segments[1] : null;
  let detailType: DetailType = null;
  if (detailId) {
    if (tab === 'projects') detailType = 'project';
    else if (tab === 'albums') detailType = 'album';
    else if (tab === 'artists') detailType = 'artist';
    else if (tab === 'blogs') detailType = 'blog';
  }
  return { tab, detailType, detailId };
};

const getDetailUrl = (type: DetailType, id: string): string => {
  if (!type || !id) return '';
  const base = type === 'blog' ? 'blogs' : `${type}s`;
  return `/${base}/${id}`;
};

const getTabUrl = (tab: Tab): string => {
  return tab === 'home' ? '/' : `/${tab}`;
};

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [activeTab, setActiveTab] = useState<Tab>(() => {
    const { tab } = parsePath(window.location.pathname);
    return tab;
  });
  const [isGridLoading, setIsGridLoading] = useState(false);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [collabContext, setCollabContext] = useState('');

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'info' | 'success'>('info');

  // Navigate to tab (clears details)
  const navigateTo = (tab: string) => {
    const { tab: validTab } = parsePath(`/${tab}`);
    setActiveTab(validTab);
    setSelectedProject(null);
    setSelectedArtist(null);
    setSelectedAlbum(null);
    setSelectedBlog(null);
    const url = getTabUrl(validTab);
    window.history.pushState(null, '', url);
  };

  // Navigate to detail page
  const navigateToDetail = (type: DetailType, id: string) => {
    const url = getDetailUrl(type, id);
    window.history.pushState(null, '', url);
  };

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const { tab, detailType, detailId } = parsePath(window.location.pathname);
      setActiveTab(tab);

      // Clear all details first
      setSelectedProject(null);
      setSelectedArtist(null);
      setSelectedAlbum(null);
      setSelectedBlog(null);

      // Load detail if present in URL
      if (detailType && detailId) {
        switch (detailType) {
          case 'project':
            projectsData.find(p => p.slug === detailId) && setSelectedProject(projectsData.find(p => p.slug === detailId) || null);
            break;
          case 'album':
            import('./data/albums').then(({ albumsData }) => {
              const album = albumsData.find(a => a.id === detailId);
              if (album) setSelectedAlbum(album);
            });
            break;
          case 'artist':
            artistsData.find(a => a.slug === detailId) && setSelectedArtist(artistsData.find(a => a.slug === detailId) || null);
            break;
          case 'blog':
            import('./data/blogs').then(({ blogsData }) => {
              const blog = blogsData.find(b => b.id === detailId);
              if (blog) setSelectedBlog(blog);
            });
            break;
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Trigger grid skeleton loading when selected category changes
  useEffect(() => {
    setIsGridLoading(true);
    const timer = setTimeout(() => {
      setIsGridLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  // Trigger non-blocking premium custom toast
  const triggerToast = (msg: string, type: 'info' | 'success' = 'info') => {
    setToastMessage(msg);
    setToastType(type);
  };

  // Auto-hide toast after 4 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Deep-linking: Load detail from URL path on mount
  useEffect(() => {
    const { detailType, detailId } = parsePath(window.location.pathname);
    if (detailType && detailId) {
      switch (detailType) {
        case 'project':
          projectsData.find(p => p.slug === detailId) && setSelectedProject(projectsData.find(p => p.slug === detailId) || null);
          break;
        case 'album':
          import('./data/albums').then(({ albumsData }) => {
            const album = albumsData.find(a => a.id === detailId);
            if (album) setSelectedAlbum(album);
          });
          break;
        case 'artist':
          artistsData.find(a => a.slug === detailId) && setSelectedArtist(artistsData.find(a => a.slug === detailId) || null);
          break;
        case 'blog':
          import('./data/blogs').then(({ blogsData }) => {
            const blog = blogsData.find(b => b.id === detailId);
            if (blog) setSelectedBlog(blog);
          });
          break;
      }
    }
    // Also check query params for backward compatibility
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');
    if (projectId) {
      const proj = projectsData.find((p) => p.id === projectId);
      if (proj) {
        setSelectedProject(proj);
        triggerToast(`Loaded shared showcase: "${proj.title}"`, 'success');
      }
    }
    const artistId = params.get('artist');
    if (artistId) {
      const art = artistsData.find((a) => a.id === artistId);
      if (art) {
        setSelectedArtist(art);
        triggerToast(`Loaded creative profile: "${art.name}"`, 'success');
      }
    }
  }, []);

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    navigateToDetail('project', project.slug);
  };

  const handleSelectAlbum = (album: Album) => {
    setSelectedAlbum(album);
    navigateToDetail('album', album.id);
  };

  const handleSelectArtist = (artist: Artist) => {
    setSelectedArtist(artist);
    navigateToDetail('artist', artist.slug);
  };

  const handleSelectBlog = (blog: BlogPost) => {
    setSelectedBlog(blog);
    navigateToDetail('blog', blog.id);
  };

  const handleCollaborateClick = () => {
    setCollabContext('');
    navigateTo('contact');
    setSelectedProject(null);
    setSelectedArtist(null);
    setSelectedAlbum(null);
    setSelectedBlog(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCollaborateWithContext = (projectName: string) => {
    setCollabContext(projectName);
    navigateTo('contact');
    setSelectedProject(null);
    setSelectedArtist(null);
    setSelectedAlbum(null);
    setSelectedBlog(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      {showIntro && <OpeningIntro onFinish={() => setShowIntro(false)} />}

      {/* Persistent cinematic background video — plays once, stays across all pages */}
      {!showIntro && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,black_100%)] opacity-40 z-10 pointer-events-none" />
          <video
            autoPlay
            muted
            playsInline
            poster="/src/assets/images/cinematic-studio-hero.jpg"
            src="/src/assets/intro-video.mp4"
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}

      <div
        className="relative z-10 min-h-screen text-neutral-200 selection:bg-accent-red selection:text-white overflow-x-clip antialiased font-sans"
        style={{
          background: 'linear-gradient(135deg, rgba(5,5,5,0.85) 0%, rgba(21,17,6,0.75) 25%, rgba(34,28,11,0.7) 50%, rgba(21,17,6,0.75) 75%, rgba(3,3,3,0.85) 100%)',
          backgroundAttachment: 'fixed'
        }}
      >

        {/* Background Decorative Mesh Gradients for subtle movement and premium feel */}
        <div className="absolute top-0 left-1/4 w-125 h-125 rounded-full bg-linear-to-tr from-primary-red/5 to-gold/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-[30vh] right-1/4 w-150 h-150 rounded-full bg-linear-to-tr from-secondary-red/5 to-accent-red/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[20vh] left-1/3 w-125 h-125 rounded-full bg-linear-to-tr from-gold/5 to-primary-red/5 blur-[130px] pointer-events-none" />

        {/* Interactive 3D Parallax Background */}
        <ThreeDBackground />

        {/* Premium Header */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            navigateTo(tab);
            setSelectedProject(null);
            setSelectedArtist(null);
            setSelectedAlbum(null);
            setSelectedBlog(null);
          }}
          onCollaborateClick={handleCollaborateClick}
          onShowMessage={(msg) => triggerToast(msg, 'info')}
        />

        {/* Main Content Switcher */}
        <main className="relative z-10">
          {selectedProject ? (
            <ProjectDetailPage
              project={selectedProject}
              onBack={() => {
                setSelectedProject(null);
                window.history.replaceState(null, '', getTabUrl('projects'));
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              onCollaborateWithContext={handleCollaborateWithContext}
              onShowMessage={(msg, type) => triggerToast(msg, type)}
              onSelectProject={setSelectedProject}
              onSelectArtist={setSelectedArtist}
            />
          ) : selectedArtist ? (
            <ArtistDetailPage
              artist={selectedArtist}
              onBack={() => {
                setSelectedArtist(null);
                window.history.replaceState(null, '', getTabUrl('artists'));
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              onSelectProject={setSelectedProject}
              onShowMessage={(msg, type) => triggerToast(msg, type)}
              onSelectArtist={setSelectedArtist}
            />
          ) : selectedAlbum ? (
            <AlbumDetailPage
              album={selectedAlbum}
              onBack={() => {
                setSelectedAlbum(null);
                window.history.replaceState(null, '', getTabUrl('albums'));
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              onCollaborateWithContext={handleCollaborateWithContext}
              onShowMessage={(msg, type) => triggerToast(msg, type)}
              onSelectAlbum={setSelectedAlbum}
            />
          ) : selectedBlog ? (
            <BlogDetailPage
              blog={selectedBlog}
              onBack={() => {
                setSelectedBlog(null);
                window.history.replaceState(null, '', getTabUrl('blogs'));
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              onSelectBlog={setSelectedBlog}
              onShowMessage={(msg, type) => triggerToast(msg, type)}
              onCollaborateClick={handleCollaborateClick}
            />
          ) : activeTab === 'albums' ? (
            <AlbumsPage
              onCollaborateClick={handleCollaborateClick}
              onShowMessage={(msg, type) => triggerToast(msg, type)}
              onSelectAlbum={handleSelectAlbum}
            />
          ) : activeTab === 'blogs' ? (
            <BlogsPage
              onSelectBlog={handleSelectBlog}
              onCollaborateClick={handleCollaborateClick}
              onShowMessage={(msg, type) => triggerToast(msg, type)}
            />
          ) : activeTab === 'artists' ? (
            <ArtistsPage
              onCollaborateClick={handleCollaborateClick}
              onShowMessage={(msg, type) => triggerToast(msg, type)}
              onCollaborateWithContext={handleCollaborateWithContext}
              onSelectArtist={handleSelectArtist}
            />
          ) : activeTab === 'contact' ? (
            <ContactPage
              onShowMessage={(msg, type) => triggerToast(msg, type)}
              prepopulatedContext={collabContext}
              onClearContext={() => setCollabContext('')}
            />
          ) : activeTab === 'about' ? (
            <AboutPage
              onCollaborateClick={handleCollaborateClick}
              onShowMessage={(msg, type) => triggerToast(msg, type)}
            />
          ) : activeTab === 'services' ? (
            <ServicesPage
              onCollaborateClick={handleCollaborateClick}
              onShowMessage={(msg, type) => triggerToast(msg, type)}
              onCollaborateWithContext={handleCollaborateWithContext}
            />
          ) : activeTab === 'home' ? (
            <HomePage
              setActiveTab={navigateTo}
              onShowMessage={(msg, type) => triggerToast(msg, type)}
              onProjectClick={handleProjectClick}
              onSelectBlog={setSelectedBlog}
            />
          ) : activeTab === 'projects' ? (
            <ProjectsPage
              projects={filteredProjects}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onProjectClick={handleProjectClick}
              isGridLoading={isGridLoading}
            />
          ) : (
            <>
              {/* Immersive Hero */}
              <Hero
                title="Our Projects"
                subtitle="From coming up with creative concepts to delivering outstanding campaigns, we're your friendly, fun-loving crew ready to turn your project dreams into reality!"
                breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
              />

              {/* Portfolio Showcase Section — ProjectGrid handles its own background + blends */}
              <ProjectGrid
                projects={filteredProjects}
                selectedCategory={selectedCategory}
                onSelectCategory={(cat) => { setSelectedCategory(cat); }}
                onProjectClick={handleProjectClick}
                isLoading={isGridLoading}
              />
            </>
          )}

          {/* Unified Cinematic CTA + Footer Container with Shared Parallax Background */}
          <div className="relative w-full overflow-hidden bg-transparent pt-28 md:pt-36 pb-4" style={{ clipPath: 'inset(0px)' }}>
            {/* The single continuous cinematic background image */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <img
                src="/src/assets/images/howrah-bridge-dusk.jpg"
                alt="Kolkata Cinematic Production Background"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center opacity-65 filter brightness-90 contrast-105"
              />
              {/* Top joining fade gradient */}
              <div className="absolute top-0 left-0 right-0 h-40 bg-linear-to-b from-bg-dark via-bg-dark/70 to-transparent" />
              {/* Subtle overall dark overlay for readability */}
              <div className="absolute inset-0 bg-linear-to-b from-bg-dark/50 via-black/40 to-bg-dark/90" />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-bg-dark to-transparent" />
            </div>

            <CtaSection onCollaborateClick={
              selectedProject
                ? () => handleCollaborateWithContext(selectedProject.title)
                : selectedAlbum
                  ? () => handleCollaborateWithContext(selectedAlbum.title)
                  : handleCollaborateClick
            } />

            <Footer
              transparentBg={true}
              onCollaborateClick={handleCollaborateClick}
              onShowMessage={(msg) => triggerToast(msg, 'success')}
              setActiveTab={(tab) => {
                navigateTo(tab);
                setSelectedProject(null);
                setSelectedAlbum(null);
                setSelectedBlog(null);
              }}
            />
          </div>
        </main>

        {/* Toast notifications disabled */}

      </div>
    </>
  );
}
