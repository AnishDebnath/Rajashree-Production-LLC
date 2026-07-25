import { motion } from 'motion/react';
import { BrandLogo } from './BrandLogo';
import type { Partner } from '../../data/about';

interface BrandPartnersSectionProps {
    partners: Partner[];
}

export default function BrandPartnersSection({ partners }: BrandPartnersSectionProps) {
    return (
        <section className="relative py-24 z-10 bg-transparent" id="creative-playground">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
                    <h2 className="text-section-heading">
                        Our Creative Playground: Where Brands Shine!
                    </h2>
                    <div className="w-16 h-[1.5px] bg-gold mx-auto mt-6" />
                </div>

                {/* Bento-styled Container for Vertical Marquees */}
                <div className="py-0 px-8 md:px-12 rounded-3xl bg-neutral-950/20 border border-white/5 shadow-2xl relative overflow-hidden">

                    {/* Smooth scrolling columns wrapper with perfect CSS alpha gradient mask */}
                    <div
                        className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 h-70 overflow-hidden relative z-10"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                            maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                        }}
                    >

                        {/* Column 1: Bottom to Up */}
                        <div className="flex flex-col h-full overflow-hidden relative opacity-70 hover:opacity-100 transition-opacity duration-300">
                            <motion.div
                                className="flex flex-col gap-8 py-4 items-center"
                                animate={{ y: ["0%", "-50%"] }}
                                transition={{
                                    ease: "linear",
                                    duration: 14,
                                    repeat: Infinity,
                                }}
                            >
                                {[...partners.filter((_, i) => i % 4 === 0), ...partners.filter((_, i) => i % 4 === 0)].map((partner, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 group cursor-pointer"
                                    >
                                        <div className="text-gold group-hover:scale-110 transition-transform duration-300">
                                            <BrandLogo name={partner.name} symbol={partner.symbol} />
                                        </div>
                                        <span className="font-mono text-xs text-neutral-400 font-bold tracking-widest uppercase group-hover:text-white transition-colors truncate">
                                            {partner.name}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Column 2: Up to Bottom */}
                        <div className="flex flex-col h-full overflow-hidden relative opacity-70 hover:opacity-100 transition-opacity duration-300">
                            <motion.div
                                className="flex flex-col gap-8 py-4 items-center"
                                animate={{ y: ["-50%", "0%"] }}
                                transition={{
                                    ease: "linear",
                                    duration: 16,
                                    repeat: Infinity,
                                }}
                            >
                                {[...partners.filter((_, i) => i % 4 === 1), ...partners.filter((_, i) => i % 4 === 1)].map((partner, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 group cursor-pointer"
                                    >
                                        <div className="text-gold group-hover:scale-110 transition-transform duration-300">
                                            <BrandLogo name={partner.name} symbol={partner.symbol} />
                                        </div>
                                        <span className="font-mono text-xs text-neutral-400 font-bold tracking-widest uppercase group-hover:text-white transition-colors truncate">
                                            {partner.name}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Column 3: Bottom to Up */}
                        <div className="flex flex-col h-full overflow-hidden relative opacity-70 hover:opacity-100 transition-opacity duration-300">
                            <motion.div
                                className="flex flex-col gap-8 py-4 items-center"
                                animate={{ y: ["0%", "-50%"] }}
                                transition={{
                                    ease: "linear",
                                    duration: 15,
                                    repeat: Infinity,
                                }}
                            >
                                {[...partners.filter((_, i) => i % 4 === 2), ...partners.filter((_, i) => i % 4 === 2)].map((partner, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 group cursor-pointer"
                                    >
                                        <div className="text-gold group-hover:scale-110 transition-transform duration-300">
                                            <BrandLogo name={partner.name} symbol={partner.symbol} />
                                        </div>
                                        <span className="font-mono text-xs text-neutral-400 font-bold tracking-widest uppercase group-hover:text-white transition-colors truncate">
                                            {partner.name}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Column 4: Up to Bottom */}
                        <div className="flex flex-col h-full overflow-hidden relative opacity-70 hover:opacity-100 transition-opacity duration-300">
                            <motion.div
                                className="flex flex-col gap-8 py-4 items-center"
                                animate={{ y: ["-50%", "0%"] }}
                                transition={{
                                    ease: "linear",
                                    duration: 17,
                                    repeat: Infinity,
                                }}
                            >
                                {[...partners.filter((_, i) => i % 4 === 3), ...partners.filter((_, i) => i % 4 === 3)].map((partner, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 group cursor-pointer"
                                    >
                                        <div className="text-gold group-hover:scale-110 transition-transform duration-300">
                                            <BrandLogo name={partner.name} symbol={partner.symbol} />
                                        </div>
                                        <span className="font-mono text-xs text-neutral-400 font-bold tracking-widest uppercase group-hover:text-white transition-colors truncate">
                                            {partner.name}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
