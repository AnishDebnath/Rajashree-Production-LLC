import { useState, useEffect } from 'react';
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

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isGridLoading, setIsGridLoading] = useState(false);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [collabContext, setCollabContext] = useState('');

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'info' | 'success'>('info');

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

  // Deep-linking: Load project or artist from URL query param if present
  useEffect(() => {
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
  };

  const handleCollaborateClick = () => {
    setCollabContext('');
    setActiveTab('contact');
    setSelectedProject(null);
    setSelectedArtist(null);
    setSelectedAlbum(null);
    setSelectedBlog(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCollaborateWithContext = (projectName: string) => {
    setCollabContext(projectName);
    setActiveTab('contact');
    setSelectedProject(null);
    setSelectedArtist(null);
    setSelectedAlbum(null);
    setSelectedBlog(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      {showIntro && <OpeningIntro onFinish={() => setShowIntro(false)} />}

      <div
        className="relative min-h-screen text-neutral-200 selection:bg-accent-red selection:text-white overflow-x-clip antialiased font-sans"
        style={{
          background: 'linear-gradient(135deg, #050505 0%, #151106 25%, #221c0b 50%, #151106 75%, #030303 100%)',
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
            setActiveTab(tab);
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
              onBack={() => setSelectedProject(null)}
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
              onSelectAlbum={setSelectedAlbum}
            />
          ) : activeTab === 'blogs' ? (
            <BlogsPage
              onSelectBlog={setSelectedBlog}
              onCollaborateClick={handleCollaborateClick}
              onShowMessage={(msg, type) => triggerToast(msg, type)}
            />
          ) : activeTab === 'artists' ? (
            <ArtistsPage
              onCollaborateClick={handleCollaborateClick}
              onShowMessage={(msg, type) => triggerToast(msg, type)}
              onCollaborateWithContext={handleCollaborateWithContext}
              onSelectArtist={setSelectedArtist}
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
              setActiveTab={setActiveTab}
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
                setActiveTab(tab);
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
