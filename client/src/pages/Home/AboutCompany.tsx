import { motion } from 'motion/react';
import { ArrowUpRight, Trophy, Award, Sparkles } from 'lucide-react';

function LaurelWreath() {
    return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 absolute -inset-5 pointer-events-none text-gold/30 group-hover:text-gold/55 transition-colors duration-300">
            <path d="M 50,85 C 30,80 15,65 15,45 C 15,30 25,18 40,15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 45,82 C 40,82 35,78 37,73 C 39,68 45,72 45,82 Z" fill="currentColor" />
            <path d="M 36,75 C 30,73 28,68 32,64 C 36,60 38,67 36,75 Z" fill="currentColor" />
            <path d="M 28,65 C 22,61 21,55 26,52 C 31,49 31,57 28,65 Z" fill="currentColor" />
            <path d="M 23,53 C 18,48 18,42 23,39 C 28,36 28,45 23,53 Z" fill="currentColor" />
            <path d="M 22,40 C 19,34 21,28 26,27 C 31,26 29,34 22,40 Z" fill="currentColor" />
            <path d="M 27,29 C 26,22 30,17 35,18 C 40,19 36,26 27,29 Z" fill="currentColor" />
            <path d="M 37,20 C 38,14 44,11 48,14 C 52,17 46,22 37,20 Z" fill="currentColor" />
            <path d="M 50,85 C 70,80 85,65 85,45 C 85,30 75,18 60,15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 55,82 C 60,82 65,78 63,73 C 61,68 55,72 55,82 Z" fill="currentColor" />
            <path d="M 64,75 C 70,73 72,68 68,64 C 64,60 62,67 64,75 Z" fill="currentColor" />
            <path d="M 72,65 C 78,61 79,55 74,52 C 69,49 69,57 72,65 Z" fill="currentColor" />
            <path d="M 77,53 C 82,48 82,42 77,39 C 72,36 72,45 77,53 Z" fill="currentColor" />
            <path d="M 78,40 C 81,34 79,28 74,27 C 69,26 71,34 78,40 Z" fill="currentColor" />
            <path d="M 73,29 C 74,22 70,17 65,18 C 60,19 64,26 73,29 Z" fill="currentColor" />
            <path d="M 63,20 C 62,14 56,11 52,14 C 48,17 54,22 63,20 Z" fill="currentColor" />
        </svg>
    );
}

interface AboutCompanyProps {
    setActiveTab: (tab: string) => void;
    onShowMessage: (msg: string, type?: 'info' | 'success') => void;
}

export default function AboutCompany({ setActiveTab, onShowMessage }: AboutCompanyProps) {
    return (
        <section className="relative py-24 z-20 bg-transparent" id="about-our-agency">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4 flex flex-col items-start gap-6">
                        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                            About Our Agency
                        </h2>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                setActiveTab('about');
                                window.scrollTo({ top: 0, behavior: 'instant' });
                                onShowMessage("Discovering Rajashree Production agency story!", "info");
                            }}
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-white text-black font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase cursor-pointer select-none transition-all duration-300 shrink-0"
                        >
                            <span>About Us</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </motion.button>
                    </div>

                    <div className="lg:col-span-8 flex flex-col gap-8">
                        <div className="flex flex-wrap items-center gap-8 md:gap-12 mb-4">
                            <div className="flex flex-col items-center text-center max-w-27.5 group">
                                <div className="w-14 h-14 rounded-full bg-gold/5 border border-gold/25 flex items-center justify-center text-gold mb-2 relative hover:border-gold/50 transition-colors">
                                    <LaurelWreath />
                                    <Trophy className="w-5 h-5 relative z-10" />
                                    <div className="absolute inset-0 rounded-full border border-dashed border-gold/10 animate-spin" style={{ animationDuration: '25s' }} />
                                </div>
                                <span className="font-mono text-[9px] font-bold tracking-wider text-neutral-400 uppercase leading-snug">
                                    Visionary Creations Award
                                </span>
                            </div>

                            <div className="flex flex-col items-center text-center max-w-27.5 group">
                                <div className="w-14 h-14 rounded-full bg-gold/5 border border-gold/25 flex items-center justify-center text-gold mb-2 relative hover:border-gold/50 transition-colors">
                                    <LaurelWreath />
                                    <Award className="w-5 h-5 relative z-10" />
                                    <div className="absolute inset-0 rounded-full border border-dashed border-gold/10 animate-spin" style={{ animationDuration: '20s' }} />
                                </div>
                                <span className="font-mono text-[9px] font-bold tracking-wider text-neutral-400 uppercase leading-snug">
                                    CineMasters Excellence
                                </span>
                            </div>

                            <div className="flex flex-col items-center text-center max-w-27.5 group">
                                <div className="w-14 h-14 rounded-full bg-gold/5 border border-gold/25 flex items-center justify-center text-gold mb-2 relative hover:border-gold/50 transition-colors">
                                    <LaurelWreath />
                                    <Sparkles className="w-5 h-5 relative z-10" />
                                    <div className="absolute inset-0 rounded-full border border-dashed border-gold/10 animate-spin" style={{ animationDuration: '30s' }} />
                                </div>
                                <span className="font-mono text-[9px] font-bold tracking-wider text-neutral-400 uppercase leading-snug">
                                    ReelGenius Award
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 text-neutral-400 leading-relaxed font-light text-sm sm:text-base">
                            <p className="text-white font-normal text-base sm:text-lg">
                                Established in 2015, we have dedicated ourselves to{' '}
                                <span className="text-gold font-semibold">crafting captivating visual narratives</span> defined by
                                creativity, innovation, and an unwavering commitment to{' '}
                                <span className="text-white font-semibold">excellence in video production</span>.
                            </p>
                            <p className="text-neutral-400 text-xs sm:text-sm">
                                Our mission is clear: to transform ideas into compelling visual stories. We believe that every project is an opportunity to create something extraordinary. Whether it's a corporate video, a commercial, an event coverage, or an animation, we approach each endeavor with creativity, enthusiasm, and a commitment to exceeding our clients' expectations of Rajashree Production LLP.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 md:gap-12 mt-12 border-t border-white/5 pt-10">
                            <div className="relative h-20 sm:h-24 md:h-28 flex items-center justify-center overflow-visible group transition-all duration-300">
                                <span className="absolute inset-0 flex items-center justify-center select-none font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-600/50 tracking-tighter leading-none whitespace-nowrap group-hover:text-gold/30 group-hover:scale-105 transition-all duration-300 pointer-events-none">
                                    15+
                                </span>
                                <span className="relative z-10 text-center font-display font-bold text-[10px] sm:text-xs md:text-sm text-white tracking-[0.2em] px-2 uppercase leading-snug max-w-[95%] pointer-events-none">
                                    YEARS OF EXPERIENCE
                                </span>
                            </div>
                            <div className="relative h-20 sm:h-24 md:h-28 flex items-center justify-center overflow-visible group transition-all duration-300">
                                <span className="absolute inset-0 flex items-center justify-center select-none font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-600/50 tracking-tighter leading-none whitespace-nowrap group-hover:text-gold/30 group-hover:scale-105 transition-all duration-300 pointer-events-none">
                                    200+
                                </span>
                                <span className="relative z-10 text-center font-display font-bold text-[10px] sm:text-xs md:text-sm text-white tracking-[0.2em] px-2 uppercase leading-snug max-w-[95%] pointer-events-none">
                                    REPEATED CLIENTS
                                </span>
                            </div>
                            <div className="relative h-20 sm:h-24 md:h-28 flex items-center justify-center overflow-visible group transition-all duration-300">
                                <span className="absolute inset-0 flex items-center justify-center select-none font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-600/50 tracking-tighter leading-none whitespace-nowrap group-hover:text-gold/30 group-hover:scale-105 transition-all duration-300 pointer-events-none">
                                    470+
                                </span>
                                <span className="relative z-10 text-center font-display font-bold text-[10px] sm:text-xs md:text-sm text-white tracking-[0.2em] px-2 uppercase leading-snug max-w-[95%] pointer-events-none">
                                    COMPLETED PROJECTS
                                </span>
                            </div>
                            <div className="relative h-20 sm:h-24 md:h-28 flex items-center justify-center overflow-visible group transition-all duration-300">
                                <span className="absolute inset-0 flex items-center justify-center select-none font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-600/50 tracking-tighter leading-none whitespace-nowrap group-hover:text-gold/30 group-hover:scale-105 transition-all duration-300 pointer-events-none">
                                    550+
                                </span>
                                <span className="relative z-10 text-center font-display font-bold text-[10px] sm:text-xs md:text-sm text-white tracking-[0.2em] px-2 uppercase leading-snug max-w-[95%] pointer-events-none">
                                    HAPPY CLIENTS
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
