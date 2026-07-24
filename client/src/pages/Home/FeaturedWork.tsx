import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import ThreeDCardEffect from '../../components/ThreeDCardEffect';

interface FeaturedWorkProps {
    industries: { title: string; image: string; gridSpan: string; heightClass: string }[];
    setActiveTab: (tab: string) => void;
    onShowMessage: (msg: string, type?: 'info' | 'success') => void;
}

export default function FeaturedWork({ industries, setActiveTab, onShowMessage }: FeaturedWorkProps) {
    return (
        <section className="relative py-24 md:py-32 bg-transparent z-20">
            <div className="max-w-6xl mx-auto px-6 space-y-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-4">
                    <div className="space-y-3">
                        <h2 className="font-sans font-bold text-3xl sm:text-4.5xl text-white tracking-tight leading-[1.1]">
                            We're Video Pros in Many Industries!
                        </h2>
                        <div className="h-0.5 w-16 bg-gold" />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                            setActiveTab('projects');
                            window.scrollTo({ top: 0, behavior: 'instant' });
                            onShowMessage("Explore our full categories portfolio!", "info");
                        }}
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-white text-black font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase cursor-pointer select-none transition-all duration-300 shrink-0"
                    >
                        <span>Explore All Sectors</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-12 gap-5">
                    {industries.map((ind, i) => (
                        <div key={i} className={`${ind.gridSpan} ${ind.heightClass}`}>
                            <ThreeDCardEffect
                                className="group cursor-default select-none relative w-full h-full"
                                tiltMaxAngle={12}
                            >
                                <div
                                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/5 shadow-lg bg-neutral-950 transition-all duration-500"
                                    style={{ transform: 'translateZ(25px)', transformStyle: 'preserve-3d' }}
                                >
                                    <img
                                        src={ind.image}
                                        alt={ind.title}
                                        className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500 filter brightness-[0.93] group-hover:brightness-100"
                                        loading="lazy"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent z-10 transition-colors duration-300 group-hover:from-neutral-950/95 pointer-events-none"
                                        style={{ transform: 'translateZ(10px)' }}
                                    />
                                </div>
                                <div
                                    className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none"
                                    style={{ transform: 'translateZ(55px)' }}
                                >
                                    <h3 className="font-display font-bold text-base sm:text-lg tracking-wide text-white group-hover:text-gold transition-colors duration-300">
                                        {ind.title}
                                    </h3>
                                </div>
                            </ThreeDCardEffect>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
