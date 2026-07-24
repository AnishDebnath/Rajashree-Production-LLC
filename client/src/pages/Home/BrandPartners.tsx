import { motion } from 'motion/react';
import { Globe, Feather, Smile } from 'lucide-react';

export default function BrandPartnersSection() {
    return (
        <section className="relative py-16 bg-transparent z-20 select-none" id="brand-marquee-section">
            <div className="max-w-6xl mx-auto px-6 mb-8 sm:mb-12 flex flex-col items-center text-center">
                <div className="space-y-3 flex flex-col items-center">
                    <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-3.5xl text-white tracking-tight leading-[1.1] text-center">
                        Standing Tall with Our Esteemed Brand Partners
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
                            {[
                                { id: 'b1-1', element: <div className="flex items-center gap-2 select-none"><Globe className="w-5 h-5 text-neutral-400" /><span className="font-sans text-sm font-light tracking-tight text-white/80">logo</span><span className="font-sans text-sm font-extrabold tracking-tight text-white">ipsum</span></div> },
                                { id: 'b2-1', element: <div className="flex items-center gap-1.5 select-none"><div className="flex items-end gap-[3px] h-3.5 mb-0.5"><span className="w-[3px] h-2 bg-neutral-400 rounded-full" /><span className="w-[3px] h-3.5 bg-neutral-200 rounded-full" /><span className="w-[3px] h-2.5 bg-neutral-300 rounded-full" /><span className="w-[3px] h-1.5 bg-neutral-400 rounded-full" /></div><span className="font-sans text-[11px] font-black uppercase tracking-[0.15em] text-neutral-300">LOGOIPSUM</span></div> },
                                { id: 'b3-1', element: <div className="flex items-center select-none"><span className="font-sans font-black italic text-2xl sm:text-3.5xl text-white tracking-tighter filter drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">ログ</span></div> },
                                { id: 'b4-1', element: <div className="flex items-center gap-2 select-none"><Feather className="w-4 h-4 text-neutral-400" /><span className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-300">LOGOIPSUM</span></div> },
                                { id: 'b5-1', element: <div className="flex items-center select-none"><span className="font-sans font-extrabold italic text-lg text-white tracking-wider border border-white/10 px-3 py-0.5 rounded bg-white/5 shadow-inner">标识</span></div> },
                                { id: 'b6-1', element: <div className="flex items-center gap-1.5 select-none"><Smile className="w-4.5 h-4.5 text-neutral-400" /><span className="font-sans text-xs font-black tracking-tight text-neutral-200 uppercase">Logo</span></div> },
                                { id: 'b1-2', element: <div className="flex items-center gap-2 select-none"><Globe className="w-5 h-5 text-neutral-400" /><span className="font-sans text-sm font-light tracking-tight text-white/80">logo</span><span className="font-sans text-sm font-extrabold tracking-tight text-white">ipsum</span></div> },
                                { id: 'b2-2', element: <div className="flex items-center gap-1.5 select-none"><div className="flex items-end gap-[3px] h-3.5 mb-0.5"><span className="w-[3px] h-2 bg-neutral-400 rounded-full" /><span className="w-[3px] h-3.5 bg-neutral-200 rounded-full" /><span className="w-[3px] h-2.5 bg-neutral-300 rounded-full" /><span className="w-[3px] h-1.5 bg-neutral-400 rounded-full" /></div><span className="font-sans text-[11px] font-black uppercase tracking-[0.15em] text-neutral-300">LOGOIPSUM</span></div> },
                                { id: 'b3-2', element: <div className="flex items-center select-none"><span className="font-sans font-black italic text-2xl sm:text-3.5xl text-white tracking-tighter filter drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">ログ</span></div> },
                                { id: 'b4-2', element: <div className="flex items-center gap-2 select-none"><Feather className="w-4 h-4 text-neutral-400" /><span className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-300">LOGOIPSUM</span></div> },
                                { id: 'b5-2', element: <div className="flex items-center select-none"><span className="font-sans font-extrabold italic text-lg text-white tracking-wider border border-white/10 px-3 py-0.5 rounded bg-white/5 shadow-inner">标识</span></div> },
                                { id: 'b6-2', element: <div className="flex items-center gap-1.5 select-none"><Smile className="w-4.5 h-4.5 text-neutral-400" /><span className="font-sans text-xs font-black tracking-tight text-neutral-200 uppercase">Logo</span></div> },
                                { id: 'b1-3', element: <div className="flex items-center gap-2 select-none"><Globe className="w-5 h-5 text-neutral-400" /><span className="font-sans text-sm font-light tracking-tight text-white/80">logo</span><span className="font-sans text-sm font-extrabold tracking-tight text-white">ipsum</span></div> },
                                { id: 'b2-3', element: <div className="flex items-center gap-1.5 select-none"><div className="flex items-end gap-[3px] h-3.5 mb-0.5"><span className="w-[3px] h-2 bg-neutral-400 rounded-full" /><span className="w-[3px] h-3.5 bg-neutral-200 rounded-full" /><span className="w-[3px] h-2.5 bg-neutral-300 rounded-full" /><span className="w-[3px] h-1.5 bg-neutral-400 rounded-full" /></div><span className="font-sans text-[11px] font-black uppercase tracking-[0.15em] text-neutral-300">LOGOIPSUM</span></div> },
                                { id: 'b3-3', element: <div className="flex items-center select-none"><span className="font-sans font-black italic text-2xl sm:text-3.5xl text-white tracking-tighter filter drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">ログ</span></div> },
                                { id: 'b4-3', element: <div className="flex items-center gap-2 select-none"><Feather className="w-4 h-4 text-neutral-400" /><span className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-300">LOGOIPSUM</span></div> },
                                { id: 'b5-3', element: <div className="flex items-center select-none"><span className="font-sans font-extrabold italic text-lg text-white tracking-wider border border-white/10 px-3 py-0.5 rounded bg-white/5 shadow-inner">标识</span></div> },
                                { id: 'b6-3', element: <div className="flex items-center gap-1.5 select-none"><Smile className="w-4.5 h-4.5 text-neutral-400" /><span className="font-sans text-xs font-black tracking-tight text-neutral-200 uppercase">Logo</span></div> }
                            ].map((brand) => (
                                <div
                                    key={brand.id}
                                    className="flex items-center justify-center shrink-0 border-r border-white/10 h-14 w-[170px] sm:w-[190px] last:border-r-0"
                                >
                                    {brand.element}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
