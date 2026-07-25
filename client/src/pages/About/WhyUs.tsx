import { motion } from 'motion/react';
import ThreeDCardEffect from '../../components/ThreeDCardEffect';
import type { USP } from '../../data/about/whyus';

interface WhyUsSectionProps {
    usps: USP[];
}

export default function WhyUsSection({ usps }: WhyUsSectionProps) {
    return (
        <section className="relative py-24 z-10 bg-transparent" id="why-us">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="p-8 md:p-12 rounded-3xl bg-[#090909]/40 border border-white/5 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left Column Image with Project Card 3D snap effect */}
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <ThreeDCardEffect
                                tiltMaxAngle={7}
                                className="w-full relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gold/30 group cursor-pointer transition-all duration-500 ease-out shadow-3xl"
                            >
                                <div
                                    className="w-full h-full rounded-3xl overflow-hidden bg-neutral-950 relative"
                                    style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
                                >
                                    <img
                                        src="/src/assets/images/cinematic-studio-hero.jpg"
                                        alt="Cinematic camera rig and studio setup"
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover transition-all duration-700 ease-out brightness-90 group-hover:scale-[1.03] group-hover:brightness-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
                                </div>
                            </ThreeDCardEffect>
                        </div>

                        {/* Right Column Narrative */}
                        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
                            <h2 className="text-section-heading">
                                Why us?
                            </h2>
                            <div className="h-0.5 w-12 bg-gold" />

                            <div className="flex flex-col gap-5 text-neutral-400 leading-relaxed font-light text-sm sm:text-base mt-4">
                                <p className="text-white font-normal text-base sm:text-lg">
                                    People hire us for our full-service production capabilities, experienced creative team, and transparent collaborative process. We handle every stage from concept to delivery with attention to craft — whether it's a feature film, commercial, documentary, or digital content.
                                </p>
                                <p className="text-gold font-semibold underline decoration-gold/30">
                                    Our collaborative approach keeps you informed at every stage, with transparent budgets and timelines.
                                </p>
                                <p className="text-xs sm:text-sm">
                                    Based in Kolkata, West Bengal, we combine local production expertise with global quality standards. Our portfolio spans feature films, TV commercials, corporate videos, documentaries, music videos, web series, and digital content — all delivered with professional integrity.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Divider line between Why us and Wait! There's more */}
                    <div className="my-12 border-t border-white/5" />

                    {/* Wait! There's more... bento-styled content within the same Why Us container */}
                    <div id="wait-theres-more">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                                Our Core Strengths
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
                            {usps.slice(0, 6).map((usp, uIdx) => {
                                const IconComp = usp.icon;
                                return (
                                    <div key={uIdx} className="flex gap-4 group">
                                        <div className="w-5 h-5 text-gold shrink-0 mt-1">
                                            <IconComp className="w-full h-full" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className="font-display font-bold text-base text-white tracking-tight group-hover:text-gold transition-colors duration-300">
                                                {usp.title}
                                            </h4>
                                            <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                                                {usp.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
