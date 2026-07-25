import { WorkflowMarquee } from '../../components/ui/WorkflowMarquee';
import { preProductionItems, preProdMarqueeImages, productionItems, prodMarqueeImages, postProductionItems, postProdMarqueeImages } from '../../data/services';

export default function Stages() {
    return (
        <>
            {/* PRE-PRODUCTION STAGE */}
            <section className="relative py-16 px-4 sm:px-6 md:px-12" id="pre-production">
                <div className="max-w-6xl mx-auto bg-neutral-950/40 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-14 space-y-12 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Left Column: Descriptions and Marquee */}
                        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                            <div className="space-y-4">
                                <h2 className="text-section-heading">Pre-Production</h2>
                                <div className="h-0.5 w-12 bg-gold" />
                                <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed">
                                    Before the cameras roll, the magic of video production begins with pre-production. This is where your ideas take shape, scripts are written, and plans are made.
                                </p>
                                <p className="font-sans text-neutral-300 text-xs sm:text-sm leading-relaxed">
                                    <strong className="text-white">Pre-production</strong> is the critical planning phase where we lay the foundation for your video project. This stage involves:
                                </p>
                            </div>

                            <WorkflowMarquee images={preProdMarqueeImages.map(i => i.url)} speed={18} />
                        </div>

                        {/* Right Column: Items List */}
                        <div className="lg:col-span-7 space-y-6">
                            {preProductionItems.map((item, idx) => {
                                const IconComp = item.icon;
                                return (
                                    <div key={idx} className="flex gap-x-4 sm:gap-x-5 pb-6 border-b border-white/5 last:border-none last:pb-0">
                                        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-gold shrink-0 mt-0.5">
                                            <IconComp className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-sans font-bold text-sm sm:text-base text-neutral-100">{item.title}</h4>
                                            <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCTION STAGE */}
            <section className="relative py-16 px-4 sm:px-6 md:px-12" id="production">
                <div className="max-w-6xl mx-auto bg-neutral-950/40 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-14 space-y-12 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Left Column: Items List */}
                        <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
                            {productionItems.map((item, idx) => {
                                const IconComp = item.icon;
                                return (
                                    <div key={idx} className="flex gap-x-4 sm:gap-x-5 pb-6 border-b border-white/5 last:border-none last:pb-0">
                                        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-gold shrink-0 mt-0.5">
                                            <IconComp className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-sans font-bold text-sm sm:text-base text-neutral-100">{item.title}</h4>
                                            <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Column: Descriptions and Marquee */}
                        <div className="lg:col-span-5 order-1 lg:order-2 space-y-6 lg:sticky lg:top-24">
                            <div className="space-y-4">
                                <h2 className="text-section-heading">Production</h2>
                                <div className="h-0.5 w-12 bg-gold" />
                                <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed">
                                    The heart of video production lies in the production phase. This is where we turn your vision into reality.
                                </p>
                                <p className="font-sans text-neutral-300 text-xs sm:text-sm leading-relaxed">
                                    <strong className="text-white">Production</strong> is where your video project comes to life. We offer a wide range of production services to bring your vision to the screen, includes:
                                </p>
                            </div>

                            <WorkflowMarquee images={prodMarqueeImages.map(i => i.url)} speed={18} reverse />
                        </div>

                    </div>
                </div>
            </section>

            {/* POST-PRODUCTION STAGE */}
            <section className="relative py-16 px-4 sm:px-6 md:px-12" id="post-production">
                <div className="max-w-6xl mx-auto bg-neutral-950/40 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-14 space-y-12 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Left Column: Descriptions and Marquee */}
                        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                            <div className="space-y-4">
                                <h2 className="text-section-heading">Post-Production</h2>
                                <div className="h-0.5 w-12 bg-gold" />
                                <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed">
                                    The real magic happens in post-production. This is where we take the raw footage and craft it into a polished, engaging video.
                                </p>
                                <p className="font-sans text-neutral-300 text-xs sm:text-sm leading-relaxed">
                                    Our <strong className="text-white">post-production</strong> services cover video editing, sound design, color correction, visual effects, and more. We pay meticulous attention to detail to ensure your video looks and sounds its best.
                                </p>
                            </div>

                            <WorkflowMarquee images={postProdMarqueeImages.map(i => i.url)} speed={18} />
                        </div>

                        {/* Right Column: Items List */}
                        <div className="lg:col-span-7 space-y-6">
                            {postProductionItems.map((item, idx) => {
                                const IconComp = item.icon;
                                return (
                                    <div key={idx} className="flex gap-x-4 sm:gap-x-5 pb-6 border-b border-white/5 last:border-none last:pb-0">
                                        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-gold shrink-0 mt-0.5">
                                            <IconComp className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-sans font-bold text-sm sm:text-base text-neutral-100">{item.title}</h4>
                                            <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}