import ThreeDCardEffect from '../../components/ThreeDCardEffect';

export default function HowWeWorkSection() {
    return (
        <section className="relative py-24 z-10 bg-transparent" id="how-we-work">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="p-8 md:p-12 rounded-3xl bg-[#090909]/40 border border-white/5 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left Column Narrative */}
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                                How We Work
                            </h2>

                            <div className="flex flex-col gap-5 text-neutral-400 leading-relaxed font-light text-sm sm:text-base mt-4">
                                <p className="text-white font-normal text-base sm:text-lg">
                                    At Rajashree Production, we're all about making the creative process feel like a breeze on a sunny day. We start by diving headfirst into your ideas, and then we sprinkle our creative magic like confetti at a party.
                                </p>
                                <p className="text-gold font-semibold underline decoration-gold/30">
                                    We keep you in the loop every step of the way because, after all, it's your show!
                                </p>
                                <p className="text-xs sm:text-sm">
                                    We're the team that turns "work" into "wow", and we do it with smiles, laughter, and a touch of video wizardry. So, grab your popcorn, because this creative journey is going to be a blast!
                                </p>
                                <p className="text-xs sm:text-sm">
                                    We'll tap into our creative talents, dust off our brainstorming hats, and make sure that the journey from concept to creation is a toe-tapping, smile-inducing experience. Together, we'll create video magic that's not only effective but also unforgettable. Ready to dance to the beat of your story? Let's get started!
                                </p>
                            </div>
                        </div>

                        {/* Right Column Custom Image with Project Card 3D snap effect */}
                        <div className="lg:col-span-5">
                            <ThreeDCardEffect
                                tiltMaxAngle={7}
                                className="w-full relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gold/30 group cursor-pointer transition-all duration-500 ease-out shadow-3xl"
                            >
                                <div
                                    className="w-full h-full rounded-3xl overflow-hidden bg-neutral-950 relative"
                                    style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
                                >
                                    <img
                                        src="/src/assets/images/film-crew-set-kolkata.jpg"
                                        alt="Film crew working on location in Kolkata"
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover transition-all duration-700 ease-out brightness-90 group-hover:scale-[1.03] group-hover:brightness-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
                                </div>
                            </ThreeDCardEffect>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
