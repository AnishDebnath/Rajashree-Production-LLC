import { Quote, Star } from 'lucide-react';

interface Testimonial {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
}

interface ProjectTestimonialsSectionProps {
    testimonials: Testimonial[];
    activeTestimonialIndex: number;
    setActiveTestimonialIndex: (idx: number) => void;
    setIsTestimonialPaused: (v: boolean) => void;
}

export default function ProjectTestimonialsSection({
    testimonials,
    activeTestimonialIndex,
    setActiveTestimonialIndex,
    setIsTestimonialPaused
}: ProjectTestimonialsSectionProps) {
    return (
        <div
            className="max-w-4xl mx-auto my-28 px-6 overflow-hidden relative"
            onMouseEnter={() => setIsTestimonialPaused(true)}
            onMouseLeave={() => setIsTestimonialPaused(false)}
        >
            <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeTestimonialIndex * 100}%)` }}
            >
                {testimonials.map((testimonial, idx) => (
                    <div
                        key={idx}
                        className="w-full shrink-0 flex flex-col items-center text-center gap-6 select-none px-4"
                    >
                        {/* Decorative Quote Icon and Stars */}
                        <div className="flex flex-col items-center gap-3">
                            <Quote className="w-8 h-8 text-gold/60 stroke-[1.5]" />
                            <div className="flex justify-center items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold/80" />
                                ))}
                            </div>
                        </div>

                        <p className="font-display font-medium text-lg sm:text-xl md:text-2xl text-neutral-100 leading-relaxed max-w-2xl italic">
                            {testimonial.quote}
                        </p>

                        {/* Elegant divider */}
                        <div className="w-8 h-[1px] bg-white/20 my-1" />

                        {/* Author Avatar & Details (Side-by-side layout without border) */}
                        <div className="flex flex-row items-center justify-center gap-4 text-left mt-3">
                            {testimonial.avatar && (
                                <div className="relative w-12 h-12 sm:w-13 sm:h-13 shrink-0 rounded-full overflow-hidden shadow-md shadow-black/60">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.author}
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover rounded-full filter brightness-[1.03] contrast-[1.05]"
                                    />
                                </div>
                            )}
                            <div className="flex flex-col justify-center gap-1 min-w-0">
                                <span className="font-sans font-bold text-[12px] sm:text-[13px] text-white tracking-[0.2em] uppercase">
                                    {testimonial.author}
                                </span>
                                <span className="font-mono text-[10px] sm:text-[11px] text-gold/90 tracking-[0.14em] uppercase">
                                    {testimonial.role}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Interactive Pagination Dots */}
            <div className="flex justify-center items-center gap-2.5 mt-8 relative z-20">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveTestimonialIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTestimonialIndex === idx
                            ? 'bg-gold w-6'
                            : 'bg-white/20 hover:bg-white/40'
                            }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
