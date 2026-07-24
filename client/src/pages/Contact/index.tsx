import { useEffect } from 'react';
import Hero from '../../components/common/hero/Hero';
import InfoForm from './InfoForm';
import MapSection from './Map';
import { faqs } from '../../data/faq';
import FAQ from '../../components/common/FAQ';
import Marquee from '../../components/ui/Marquee';

interface ContactPageProps {
  onShowMessage: (msg: string, type: 'info' | 'success') => void;
  prepopulatedContext?: string;
  onClearContext?: () => void;
  onCollaborateWithContext?: (context: string) => void;
}

export default function ContactPage({
  onShowMessage,
  prepopulatedContext,
  onClearContext,
  onCollaborateWithContext
}: ContactPageProps) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <Hero
        backgroundImage="/src/assets/images/kolkata-tram-night.jpg"
        title="Contact Us"
        subtitle="We love hearing from you! Whether you're ready to discuss your next project, have a question, or just want to say hello, we're all ears. Drop us a message, and let's start a conversation."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      {/* Subsequent sections wrapper with solid, opaque ambient gradient */}
      <div
        className="relative w-full z-20"
        style={{
          background: 'linear-gradient(180deg, #050505 0%, #100e07 50%, #030303 100%)'
        }}
      >
        <InfoForm
          onShowMessage={onShowMessage}
          prepopulatedContext={prepopulatedContext}
          onClearContext={onClearContext}
          onCollaborateWithContext={onCollaborateWithContext}
        />

        {/* Map Section */}
        <MapSection />

        {/* FAQs Section */}
        <FAQ faqs={faqs} onShowMessage={onShowMessage} sectionId="contact-faq-section" className="bg-bg-dark" />

        {/* MARQUEE TEXT SECTION */}
        <div className="relative w-full bg-bg-dark" id="contact-marquee-section">
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
        {/* End of subsequent sections gradient wrapper */}
      </div>
    </>
  );
}