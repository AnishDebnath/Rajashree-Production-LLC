export default function MapSection() {
  return (
    <section className="w-full relative bg-black h-100 border-y border-white/5 overflow-hidden" id="contact-map-section">
      {/* We use Google Maps in its original gorgeous, vibrant colors */}
      <iframe
        src="https://maps.google.com/maps?q=kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{
          border: 0,
          pointerEvents: 'none'
        }}
        allowFullScreen
        title="Studio Map Location"
      />

      {/* Floating marker overlay label for a touch of premium details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900/90 border border-accent-red/30 px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.6)] z-20">
        <div className="w-2.5 h-2.5 rounded-full bg-accent-red animate-ping absolute" />
        <div className="w-2.5 h-2.5 rounded-full bg-accent-red relative" />
        <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-white">Rajashree Production LLP</span>
      </div>
    </section>
  );
}