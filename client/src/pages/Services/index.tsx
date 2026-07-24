import { useState, useEffect } from 'react';
import Marquee from '../../components/ui/Marquee';
import Hero from '../../components/common/hero/Hero';
import Intro from './Intro';
import Stages from './Stages';
import Categories from './Categories';
import { faqs } from '../../data/services';
import FAQ from '../../components/common/FAQ';

interface ServicesPageProps {
  onCollaborateClick: () => void;
  onShowMessage: (msg: string, type: 'info' | 'success') => void;
  onCollaborateWithContext?: (projectName: string) => void;
}

export default function ServicesPage({ onCollaborateClick, onShowMessage, onCollaborateWithContext }: ServicesPageProps) {
  const [globalCategoryStep, setGlobalCategoryStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGlobalCategoryStep((prev) => prev + 1);
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 250);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Hero
        backgroundImage="/src/assets/images/film-crew-set-kolkata.jpg"
        title="Services"
        subtitle="Join us on a journey where ideas transform into captivating video content, with a dash of creativity and a whole lot of fun."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      {/* Subsequent sections wrapper with solid, opaque ambient gradient */}
      <div
        className="relative w-full z-20"
        style={{
          background: 'linear-gradient(180deg, #050505 0%, #100e07 50%, #030303 100%)'
        }}
      >
        {/* STUDIO INTRO SECTION */}
        <Intro
          onCollaborateClick={onCollaborateClick}
          onShowMessage={onShowMessage}
        />

        {/* PROCESS STAGES */}
        <Stages />

        {/* CATEGORIES */}
        <Categories
          globalStep={globalCategoryStep}
          onCollaborateClick={onCollaborateClick}
          onShowMessage={onShowMessage}
          onCollaborateWithContext={onCollaborateWithContext}
        />

        {/* FAQS ACCORDION SECTION */}
        <FAQ faqs={faqs} onShowMessage={onShowMessage} sectionId="services-faq-section" />

        {/* MARQUEE TEXT SECTION */}
        <div className="relative w-full bg-bg-dark" id="services-marquee-section">
          <Marquee />

          {/* Seamless Melt/Blend Transition with the CTA's Fixed Background at the bottom */}
          <div
            className="absolute left-0 right-0 h-64 pointer-events-none z-30 overflow-hidden"
            style={{ bottom: '-256px' }}
          >
            <div
              className="w-full h-full absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, #050505 0%, #050505 20%, rgba(5, 5, 5, 0.85) 30%, rgba(5, 5, 5, 0) 100%)'
              }}
            />
            <div
              className="w-full h-48 absolute top-8 backdrop-blur-xs"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)'
              }}
            />
            <div
              className="w-full h-32 absolute top-8 backdrop-blur-md"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
