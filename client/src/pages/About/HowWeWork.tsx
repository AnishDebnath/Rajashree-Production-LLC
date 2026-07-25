import ThreeDCardEffect from '../../components/ThreeDCardEffect';

export default function HowWeWorkSection() {
    return (
        <section className="relative py-16 z-10 bg-transparent" id="how-we-work">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="p-8 md:p-12 rounded-3xl bg-[#090909]/40 border border-white/5 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left Column Narrative */}
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            <h2 className="text-section-heading">
                                How We Work
                            </h2>
                            <div className="h-0.5 w-12 bg-gold" />

                            <div className="flex flex-col gap-5 text-neutral-400 leading-relaxed font-light text-sm sm:text-base mt-4">
                                <p className="text-white font-normal text-base sm:text-lg">
                                    Our production process is structured around three phases — pre-production, production, and post-production — each designed to ensure clarity, creative alignment, and on-time delivery.
                                </p>
                                <p className="text-gold font-semibold underline decoration-gold/30">
                                    We maintain transparent communication at every stage so you always know where your project stands.
                                </p>
                                <p className="text-xs sm:text-sm">
                                    In pre-production, we develop concepts, write scripts, storyboard, scout locations, cast talent, and plan logistics. During production, our crew captures your story with cinema-grade equipment and experienced direction. In post-production, we edit, color grade, design sound, add visual effects, and deliver in your required formats.
                                </p>
                                <p className="text-xs sm:text-sm">
                                    Whether it's a feature film, commercial, corporate video, or digital content — our team manages every detail so you can focus on the creative vision. Let's start your project.
                                </p>
                            </div>
                        </div>

                        {/* Right Column Custom Image with Project Card 3D snap effect */}
                        <div className="lg:col-span-5">
                            <ThreeDCardEffect
                                tiltMaxAngle={7}
                                className="w-full relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gold/30 group cursor-pointer transition-all duration-500 ease-out shadow-3xl"
                            >
                                <div
                                    className="w-full h-full rounded-3xl overflow-hidden bg-neutral-950 relative"
                                    style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
                                >
                                    <img
                                        src="/src/assets/images/film-crew-set-kolkata.jpg"
                                        alt="Film crew working on location in Kolkata"
                                        referrerPolicy="no-referrer"
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-all duration-700 ease-out brightness-90 group-hover:scale-[1.03] group-hover:brightness-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
                                </div>
                            </ThreeDCardEffect>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
