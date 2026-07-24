import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
    testimonials: { text: string; author: string; role: string; company: string; iconType: string }[];
    activeTestimonial: number;
    direction: number;
    setActiveTestimonial: (idx: number) => void;
    prevTestimonial: () => void;
    nextTestimonial: () => void;
}

export default function TestimonialsSection({
    testimonials,
    activeTestimonial,
    direction,
    setActiveTestimonial,
    prevTestimonial,
    nextTestimonial,
}: TestimonialsSectionProps) {
    return (
        <section className="relative py-24 z-10 bg-transparent overflow-hidden" id="client-chronicles">
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <img
                    src="/src/assets/images/film-crew-set-kolkata.jpg"
                    alt="Film Production Set Background"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-90 contrast-105 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/30 to-[#050505]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
                <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#050505] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050505] to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                        Our Client Chronicles: Stories that Make Us Smile!
                    </h2>
                    <div className="w-16 h-[1.5px] bg-gold mx-auto mt-6" />
                </div>

                <div className="w-full py-6 min-h-[460px] flex items-center justify-center">
                    <div className="relative w-full max-w-2xl mx-auto">
                        <button
                            onClick={prevTestimonial}
                            className="absolute -left-8 sm:-left-16 md:-left-24 lg:-left-28 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 z-50 shadow-2xl active:scale-95 cursor-pointer"
                            aria-label="Previous Testimonial"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        <div className="relative w-full h-[460px] sm:h-[400px] md:h-[370px] lg:h-[350px] flex items-center justify-center" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
                            {testimonials.map((testimonial, idx) => {
                                let offset = idx - activeTestimonial;
                                while (offset > testimonials.length / 2) offset -= testimonials.length;
                                while (offset <= -testimonials.length / 2) offset += testimonials.length;

                                const isActive = offset === 0;
                                const isLeft = offset === -1;
                                const isRight = offset === 1;

                                return (
                                    <motion.div
                                        key={idx}
                                        style={{ transformStyle: 'preserve-3d', originX: 0.5, originY: 0.5 }}
                                        animate={{
                                            x: isActive ? '0%' : isLeft ? '-102%' : isRight ? '102%' : offset < 0 ? '-135%' : '135%',
                                            scale: isActive ? 1 : isLeft || isRight ? 0.84 : 0.6,
                                            rotateY: isActive ? 0 : isLeft ? 18 : isRight ? -18 : offset < 0 ? 35 : -35,
                                            z: isActive ? 0 : isLeft || isRight ? -100 : -250,
                                            opacity: isActive ? 1 : isLeft || isRight ? 0.68 : 0,
                                            zIndex: isActive ? 30 : isLeft || isRight ? 10 : 0,
                                            filter: isActive ? 'blur(0px)' : 'blur(0.5px)',
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 180,
                                            damping: 22,
                                            mass: 1.1,
                                        }}
                                        onClick={() => {
                                            if (isLeft) prevTestimonial();
                                            if (isRight) nextTestimonial();
                                        }}
                                        className={`absolute w-full h-full flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-[28px] md:rounded-[32px] bg-[#0c0c0e]/65 backdrop-blur-xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.08)_inset] select-none ${isActive ? 'pointer-events-auto cursor-default' : 'pointer-events-auto cursor-pointer hover:bg-[#0c0c0e]/80 hover:border-white/15 transition-all duration-300'
                                            } ${!isActive ? 'hidden md:flex' : 'flex'}`}
                                    >
                                        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                                            <div className="flex items-center gap-1 select-none">
                                                <span className="font-sans font-black italic text-lg sm:text-xl md:text-2xl tracking-tight text-gold lowercase">logoipsum</span>
                                                <span className="text-gold text-base sm:text-lg md:text-xl font-bold relative -top-1 sm:-top-1.5">✦</span>
                                            </div>
                                            <blockquote className="font-sans font-medium text-sm sm:text-base md:text-lg text-white/90 leading-relaxed tracking-wide line-clamp-4 overflow-hidden text-ellipsis">
                                                "{testimonial.text}"
                                            </blockquote>
                                        </div>
                                        <div className="flex flex-col gap-3 mt-4 sm:mt-5">
                                            <Quote className="w-8 h-8 text-gold fill-gold opacity-90" />
                                            <div className="flex flex-col">
                                                <cite className="font-sans font-extrabold text-xs sm:text-sm text-white tracking-widest uppercase not-italic">
                                                    {testimonial.author}
                                                </cite>
                                                <span className="font-sans text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide mt-1 line-clamp-1">
                                                    {testimonial.role}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="absolute -right-8 sm:-right-16 md:-right-24 lg:-right-28 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 z-50 shadow-2xl active:scale-95 cursor-pointer"
                            aria-label="Next Testimonial"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-1.5 mt-8 md:mt-12 z-10 relative">
                    {testimonials.map((_, tIdx) => (
                        <button
                            key={tIdx}
                            onClick={() => setActiveTestimonial(tIdx)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeTestimonial === tIdx ? 'bg-gold w-4' : 'bg-white/20 hover:bg-white/40'}`}
                            aria-label={`Go to slide ${tIdx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
