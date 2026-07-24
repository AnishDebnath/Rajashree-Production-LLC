import { Trophy, Award, Sparkles } from 'lucide-react';
import { LaurelWreath } from './LaurelWreath';

export default function AgencySection() {
    return (
        <section className="relative py-24 z-20 bg-transparent" id="about-our-agency">
            {/* Seamless Melt/Blend Transition with the Hero's Fixed Background */}
            <div className="absolute top-0 left-0 right-0 h-48 -translate-y-full pointer-events-none z-10 overflow-hidden">
                {/* Smooth color gradient from transparent to solid bg-bg-dark */}
                <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-transparent" />

                {/* Layered progressive backdrop blurs with vertical gradient masks to 'melt' the fixed image */}
                <div
                    className="w-full h-32 absolute bottom-0 backdrop-blur-[4px]"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
                        maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)'
                    }}
                />
                <div
                    className="w-full h-20 absolute bottom-0 backdrop-blur-[12px]"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                        maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Header */}
                    <div className="lg:col-span-4">
                        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                            About Our Agency
                        </h2>
                    </div>

                    {/* Right Contents */}
                    <div className="lg:col-span-8 flex flex-col gap-8">

                        {/* Award Badges Row */}
                        <div className="flex flex-wrap items-center gap-8 md:gap-12 mb-4">

                            {/* Badge 1 */}
                            <div className="flex flex-col items-center text-center max-w-[110px] group">
                                <div className="w-14 h-14 rounded-full bg-gold/5 border border-gold/25 flex items-center justify-center text-gold mb-2 relative hover:border-gold/50 transition-colors">
                                    <LaurelWreath />
                                    <Trophy className="w-5 h-5 relative z-10" />
                                    <div className="absolute inset-0 rounded-full border border-dashed border-gold/10 animate-spin" style={{ animationDuration: '25s' }} />
                                </div>
                                <span className="font-mono text-[9px] font-bold tracking-wider text-neutral-400 uppercase leading-snug">
                                    Visionary Creations Award
                                </span>
                            </div>

                            {/* Badge 2 */}
                            <div className="flex flex-col items-center text-center max-w-[110px] group">
                                <div className="w-14 h-14 rounded-full bg-gold/5 border border-gold/25 flex items-center justify-center text-gold mb-2 relative hover:border-gold/50 transition-colors">
                                    <LaurelWreath />
                                    <Award className="w-5 h-5 relative z-10" />
                                    <div className="absolute inset-0 rounded-full border border-dashed border-gold/10 animate-spin" style={{ animationDuration: '20s' }} />
                                </div>
                                <span className="font-mono text-[9px] font-bold tracking-wider text-neutral-400 uppercase leading-snug">
                                    CineMasters Excellence
                                </span>
                            </div>

                            {/* Badge 3 */}
                            <div className="flex flex-col items-center text-center max-w-[110px] group">
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

                        {/* Subtitle & Narrative */}
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

                        {/* Grid of Stats */}
                        <div className="grid grid-cols-2 gap-8 md:gap-12 mt-12 border-t border-white/5 pt-10">

                            {/* Stat 1 */}
                            <div className="relative h-20 sm:h-24 md:h-28 flex items-center justify-center overflow-visible group transition-all duration-300">
                                {/* Giant Background Number */}
                                <span className="absolute inset-0 flex items-center justify-center select-none font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-600/50 tracking-tighter leading-none whitespace-nowrap group-hover:text-gold/30 group-hover:scale-105 transition-all duration-300 pointer-events-none">
                                    15+
                                </span>
                                {/* Overlaid Label */}
                                <span className="relative z-10 text-center font-display font-bold text-[10px] sm:text-xs md:text-sm text-white tracking-[0.2em] px-2 uppercase leading-snug max-w-[95%] pointer-events-none">
                                    YEARS OF EXPERIENCE
                                </span>
                            </div>

                            {/* Stat 2 */}
                            <div className="relative h-20 sm:h-24 md:h-28 flex items-center justify-center overflow-visible group transition-all duration-300">
                                {/* Giant Background Number */}
                                <span className="absolute inset-0 flex items-center justify-center select-none font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-600/50 tracking-tighter leading-none whitespace-nowrap group-hover:text-gold/30 group-hover:scale-105 transition-all duration-300 pointer-events-none">
                                    200+
                                </span>
                                {/* Overlaid Label */}
                                <span className="relative z-10 text-center font-display font-bold text-[10px] sm:text-xs md:text-sm text-white tracking-[0.2em] px-2 uppercase leading-snug max-w-[95%] pointer-events-none">
                                    REPEATED CLIENTS
                                </span>
                            </div>

                            {/* Stat 3 */}
                            <div className="relative h-20 sm:h-24 md:h-28 flex items-center justify-center overflow-visible group transition-all duration-300">
                                {/* Giant Background Number */}
                                <span className="absolute inset-0 flex items-center justify-center select-none font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-600/50 tracking-tighter leading-none whitespace-nowrap group-hover:text-gold/30 group-hover:scale-105 transition-all duration-300 pointer-events-none">
                                    470+
                                </span>
                                {/* Overlaid Label */}
                                <span className="relative z-10 text-center font-display font-bold text-[10px] sm:text-xs md:text-sm text-white tracking-[0.2em] px-2 uppercase leading-snug max-w-[95%] pointer-events-none">
                                    COMPLETED PROJECTS
                                </span>
                            </div>

                            {/* Stat 4 */}
                            <div className="relative h-20 sm:h-24 md:h-28 flex items-center justify-center overflow-visible group transition-all duration-300">
                                {/* Giant Background Number */}
                                <span className="absolute inset-0 flex items-center justify-center select-none font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-600/50 tracking-tighter leading-none whitespace-nowrap group-hover:text-gold/30 group-hover:scale-105 transition-all duration-300 pointer-events-none">
                                    550+
                                </span>
                                {/* Overlaid Label */}
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
