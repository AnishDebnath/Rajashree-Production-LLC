import { useEffect } from 'react';
import Hero from '../../components/common/hero/Hero';
import InfoForm from './InfoForm';
import MapSection from './Map';
import { faqs } from '../../data/contact';
import FAQs from '../../components/common/FAQs';

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
      />

      <InfoForm
        onShowMessage={onShowMessage}
        prepopulatedContext={prepopulatedContext}
        onClearContext={onClearContext}
        onCollaborateWithContext={onCollaborateWithContext}
      />

      {/* Map Section */}
      <MapSection />

      {/* FAQs Section */}
      <FAQs faqs={faqs} onShowMessage={onShowMessage} sectionId="contact-faq-section" className="bg-bg-dark" />
    </>
  );
}