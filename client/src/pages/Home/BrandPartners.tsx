import { motion } from 'motion/react';
import { homePartners } from '../../data/about/partner';

export default function BrandPartnersSection() {
    return (
        <section className="relative py-16 bg-transparent z-20 select-none" id="brand-marquee-section">
            <div className="max-w-6xl mx-auto px-6 mb-8 sm:mb-12 flex flex-col items-center text-center">
                <div className="space-y-3 flex flex-col items-center">
                    <h2 className="text-section-heading">
                        Clients & Partners We Work With
                    </h2>
                    <div className="h-0.5 w-16 bg-gold" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6">
                <div className="w-full rounded-2xl border border-white/5 bg-neutral-950/40 overflow-hidden py-4 flex items-center relative shadow-xl">
                    <div className="flex w-max items-center relative">
                        <motion.div
                            animate={{ x: ["0%", "-33.33%"] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            }}
                            className="flex items-center whitespace-nowrap"
                        >
                            {[...homePartners, ...homePartners, ...homePartners].map((partner, idx) => (
                                <div
                                    key={`${partner.name}-${idx}`}
                                    className="flex items-center justify-center shrink-0 border-r border-white/10 h-14 w-42.5 sm:w-47.5 last:border-r-0 gap-2 select-none"
                                >
                                    <span className="font-mono text-gold font-black text-lg">{partner.symbol}</span>
                                    <span className="font-sans text-sm font-semibold tracking-tight text-white/80 truncate">{partner.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
