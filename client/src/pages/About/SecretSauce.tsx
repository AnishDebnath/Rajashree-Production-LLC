import { coreValues } from '../../data/about';

export default function CoreValueSection() {
    return (
        <section className="relative py-16 z-10 bg-transparent overflow-hidden" id="secret-sauce">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">

                <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
                    <h2 className="text-section-heading">
                        Our Core Values
                    </h2>
                    <div className="w-16 h-[1.5px] bg-gold mx-auto mt-6" />
                </div>

                <div className="flex flex-col gap-16 md:gap-24">

                    {coreValues.map((item, idx) => (
                        <div
                            key={idx}
                            className={`relative group flex flex-col ${idx % 2 === 0 ? "self-start md:pr-12" : "self-end md:pl-12"} w-full md:w-[48%]`}
                        >
                            {/* Large Background Number */}
                            <div className="font-display font-black text-8xl sm:text-9xl md:text-[10rem] lg:text-[11rem] text-[#141414] select-none pointer-events-none leading-none absolute -top-8 sm:-top-12 md:-top-16 left-0 transition-colors duration-300 group-hover:text-gold/2">
                                {item.num}
                            </div>

                            {/* Title overlaying the number */}
                            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white relative z-10 pt-4 sm:pt-6 pl-4 sm:pl-6 leading-none transition-colors duration-300 group-hover:text-gold">
                                {item.title}
                            </h3>

                            {/* Description text */}
                            <p className="font-sans text-sm sm:text-base text-neutral-400 leading-relaxed font-light mt-6 pl-4 sm:pl-6 max-w-lg relative z-10">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
