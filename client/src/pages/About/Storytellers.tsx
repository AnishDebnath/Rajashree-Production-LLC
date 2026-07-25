import { motion } from 'motion/react';
import { storytellerImages } from '../../data/about/storyteller';

export default function StorytellersSection() {
    return (
        <section className="relative py-16 z-10 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                {/* Main Card with thick styled boundaries and custom off-white border */}
                <div className="p-8 md:p-14 pb-0 md:pb-0 rounded-3xl bg-[#090909]/40 border-2 border-neutral-200/25 shadow-[0_0_50px_rgba(245,245,245,0.03)] relative overflow-hidden hover:border-neutral-200/40 transition-colors duration-500">
                    <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

                    {/* Header Quote */}
                    <div className="max-w-4xl mb-12 relative z-10">
                        <h3 className="font-display font-bold text-lg sm:text-2xl md:text-3xl text-neutral-300 leading-normal">
                            "We're the storytellers, visionaries, and creative dreamers who turn your{' '}
                            <span className="text-white font-extrabold">ideas into cinematic adventures</span>. With us, work feels
                            like play, and every project is a chance to{' '}
                            <span className="text-gold font-extrabold underline decoration-gold/30">make magic happen</span>."
                        </h3>
                    </div>

                    {/* Behind the scenes rounded colorful animated images marquee */}
                    <div className="relative overflow-hidden z-10 pt-6 pb-0 -mx-8 md:-mx-14">
                        {/* Fade masks for elegant marquee edges */}
                        <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-12 bg-linear-to-r from-[#090909] to-transparent z-20 pointer-events-none" />
                        <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-12 bg-linear-to-l from-[#090909] to-transparent z-20 pointer-events-none" />

                        <motion.div
                            className="flex gap-6 w-max items-end h-64 sm:h-80 md:h-100"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{
                                ease: "linear",
                                duration: 28,
                                repeat: Infinity,
                            }}
                        >
                            {[...storytellerImages, ...storytellerImages].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="h-[95%] rounded-t-2xl rounded-b-none overflow-hidden border-t border-x border-white/10 group relative shadow-2xl shrink-0"
                                    animate={{
                                        width: ["11rem", "18rem", "11rem"]
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 4.5 + (idx % 3) * 0.8,
                                        ease: "easeInOut",
                                        delay: idx * 0.3,
                                    }}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        referrerPolicy="no-referrer"
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18rem] max-w-none h-full object-cover transition-all duration-700 brightness-100 saturate-125 contrast-105"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
}
