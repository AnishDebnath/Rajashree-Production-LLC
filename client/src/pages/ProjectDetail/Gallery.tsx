import ThreeDCardEffect from '../../components/ThreeDCardEffect';

interface ProjectGallerySectionProps {
    relatedStills: string[];
}

export default function ProjectGallerySection({ relatedStills }: ProjectGallerySectionProps) {
    return (
        <>
            <div className="max-w-4xl mx-auto w-full py-16 px-6">
                <div className="text-left flex flex-col items-start w-full">
                    <span className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] text-gold font-bold uppercase mb-2 block">
                        GALLERY
                    </span>
                    <div className="flex items-center gap-6 w-full">
                        <h2 className="text-section-heading">
                            Snaps From the Project
                        </h2>
                        <div className="grow h-0.5 bg-gold/40" />
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto w-full flex flex-col gap-12 md:gap-16 pb-16 px-6">
                {relatedStills.map((still, idx) => (
                    <div
                        key={idx}
                        className="sticky top-24 md:top-28 w-full"
                        style={{
                            zIndex: (idx + 1) * 10,
                        }}
                    >
                        <ThreeDCardEffect
                            tiltMaxAngle={7}
                            className="w-full relative aspect-video rounded-3xl bg-surface-dark border border-white/10 hover:border-gold/30 group/still cursor-pointer transition-all duration-500 ease-out"
                        >
                            {/* Image container inside, keeps the rounded corners clipping perfectly without flattening 3D */}
                            <div
                                className="w-full h-full rounded-3xl overflow-hidden bg-neutral-950 relative"
                                style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}
                            >
                                <img
                                    src={still}
                                    alt={`Project Frame ${idx + 1}`}
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    className="w-full h-full object-cover brightness-[0.85] group-hover/still:brightness-100 group-hover/still:scale-[1.02] transition-all duration-700 ease-out"
                                />
                            </div>
                        </ThreeDCardEffect>
                    </div>
                ))}
            </div>
        </>
    );
}
