import { coreValues } from '../../data/about/coreValue';
import { motion } from 'motion/react';

export default function CoreValueSection() {
    return (
        <section className="relative py-16 px-4 sm:px-6 md:px-12 z-10 bg-transparent" id="secret-sauce">
            <div className="max-w-6xl mx-auto bg-neutral-950/40 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-14 shadow-2xl relative z-10">

                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
                    <h2 className="text-section-heading">
                        Our Core Values
                    </h2>
                    <div className="w-16 h-[1.5px] bg-gold mx-auto mt-6" />
                </div>

                <div className="flex flex-col gap-16 md:gap-24">
                    {coreValues.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative group flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12 lg:gap-16 w-full`}
                        >
                            {/* Image */}
                            <div className="relative w-full md:w-[38%] aspect-4/3 rounded-2xl overflow-hidden border border-white/10 shrink-0 shadow-xl">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover w-full h-full scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out filter brightness-[0.85] group-hover:brightness-100"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative flex flex-col w-full md:flex-1">
                                {/* Large Background Number */}
                                <div className="font-sans font-extrabold text-7xl sm:text-8xl md:text-9xl text-white/4 tracking-tighter leading-none select-none pointer-events-none absolute -top-8 -left-3 group-hover:text-gold/6 transition-colors duration-500">
                                    {item.num}
                                </div>

                                {/* Title */}
                                <h3 className="font-display font-bold text-section-heading text-white relative z-10 pt-4 pl-4 leading-snug group-hover:text-gold transition-colors duration-300">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light mt-3 pl-4 relative z-10 max-w-lg">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
