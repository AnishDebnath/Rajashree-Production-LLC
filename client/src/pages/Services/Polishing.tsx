import { motion } from 'motion/react';
import { postProductionItems, postProdMarqueeImages } from '../../data/services';

export default function Polishing() {
    return (
        <section className="relative py-24 px-4 sm:px-6 md:px-12" id="post-production">
            <div className="max-w-6xl mx-auto bg-neutral-950/40 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-14 space-y-12 shadow-2xl">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Descriptions and Marquee */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                        <div className="space-y-4">
                            <h2 className="text-section-heading">
                                Post-Production
                            </h2>
                            <div className="h-0.5 w-12 bg-gold" />
                            <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed">
                                The real magic happens in post-production. This is where we take the raw footage and craft it into a polished, engaging video.
                            </p>
                            <p className="font-sans text-neutral-300 text-xs sm:text-sm leading-relaxed">
                                Our <strong className="text-white">post-production</strong> services cover video editing, sound design, color correction, visual effects, and more. We pay meticulous attention to detail to ensure your video looks and sounds its best.
                            </p>
                        </div>

                        {/* Bottom marquee images - Left to Right flow */}
                        <div className="relative overflow-hidden rounded-xl border border-white/5 shadow-2xl h-40 md:h-52 bg-bg-dark">
                            <div className="flex w-full h-full overflow-hidden select-none relative">
                                <motion.div
                                    animate={{ x: ["-50%", "0%"] }}
                                    transition={{
                                        ease: 'linear',
                                        duration: 18,
                                        repeat: Infinity
                                    }}
                                    className="flex gap-3 shrink-0 pr-3 h-full whitespace-nowrap"
                                >
                                    {/* Group 1 */}
                                    <div className="flex gap-3 shrink-0 h-full">
                                        {postProdMarqueeImages.map((img, idx) => (
                                            <div
                                                key={`set1-${idx}`}
                                                className="h-full aspect-4/3 rounded-lg overflow-hidden border border-white/10 shrink-0 relative group"
                                            >
                                                <img
                                                    src={img.url}
                                                    alt={img.alt}
                                                    referrerPolicy="no-referrer"
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Group 2 */}
                                    <div className="flex gap-3 shrink-0 h-full">
                                        {postProdMarqueeImages.map((img, idx) => (
                                            <div
                                                key={`set2-${idx}`}
                                                className="h-full aspect-4/3 rounded-lg overflow-hidden border border-white/10 shrink-0 relative group"
                                            >
                                                <img
                                                    src={img.url}
                                                    alt={img.alt}
                                                    referrerPolicy="no-referrer"
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: List of 8 Items */}
                    <div className="lg:col-span-7 space-y-6">
                        {postProductionItems.map((item, idx) => {
                            const IconComp = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="flex gap-x-4 sm:gap-x-5 pb-6 border-b border-white/5 last:border-none last:pb-0"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-gold shrink-0 mt-0.5">
                                        <IconComp className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-sans font-bold text-sm sm:text-base text-neutral-100">
                                            {item.title}
                                        </h4>
                                        <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}
