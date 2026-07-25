import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { WorkflowMarquee } from '../../components/ui/WorkflowMarquee';

interface WorkflowProcessProps {
    setActiveTab: (tab: string) => void;
    onShowMessage: (msg: string, type?: 'info' | 'success') => void;
    preProductionCarouselImages: string[];
    productionCarouselImages: string[];
    postProductionCarouselImages: string[];
}

export default function WorkflowProcess({
    setActiveTab,
    onShowMessage,
    preProductionCarouselImages,
    productionCarouselImages,
    postProductionCarouselImages,
}: WorkflowProcessProps) {
    return (
        <section className="relative pb-16 bg-transparent z-20">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
                    <div className="space-y-4">
                        <h2 className="text-section-heading">
                            Workflow Pipeline
                        </h2>
                        <div className="h-0.5 w-12 bg-gold" />
                        <p className="font-sans text-neutral-400 text-sm leading-relaxed">
                            Before the cameras roll, the magic of video production begins with workflow alignment. This is where your ideas take shape, are executed, and carefully polished.
                        </p>
                        <p className="font-sans text-neutral-300 text-sm leading-relaxed">
                            Our <strong className="text-white">streamlined process</strong> represents three core phases of film and video creation, designed to bring absolute storytelling excellence to the screen.
                        </p>
                    </div>
                    <div className="pt-2">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                setActiveTab('services');
                                window.scrollTo({ top: 0, behavior: 'instant' });
                                onShowMessage("Viewing details on process & rates!", "info");
                            }}
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-white text-black font-sans font-bold text-xs tracking-widest uppercase cursor-pointer select-none transition-all duration-300 shrink-0"
                        >
                            <span>Explore Services</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </motion.button>
                    </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                    <div
                        onClick={() => {
                            setActiveTab('services');
                            window.location.hash = 'pre-production';
                            onShowMessage("Redirecting to Pre-Production workflow section...", "info");
                        }}
                        className="group rounded-2xl border border-white/5 bg-neutral-950/40 hover:bg-neutral-950/80 p-6 sm:p-8 hover:border-gold/25 transition-all duration-300 cursor-pointer flex flex-col space-y-4"
                    >
                        <div className="space-y-3">
                            <h3 className="text-section-subheading">Pre-Production</h3>
                            <div className="h-0.5 w-12 bg-gold" />
                            <p className="font-sans text-neutral-400 text-sm leading-relaxed pt-1">
                                Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.
                            </p>
                            <span className="inline-flex items-center gap-1.5 font-sans font-bold text-sm tracking-wider uppercase text-gold group-hover:text-white transition-colors duration-200 pt-2">
                                Learn More <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </div>
                        <WorkflowMarquee images={preProductionCarouselImages} speed={12} />
                    </div>

                    <div
                        onClick={() => {
                            setActiveTab('services');
                            window.location.hash = 'production';
                            onShowMessage("Redirecting to Production workflow section...", "info");
                        }}
                        className="group rounded-2xl border border-white/5 bg-neutral-950/40 hover:bg-neutral-950/80 p-6 sm:p-8 hover:border-gold/25 transition-all duration-300 cursor-pointer flex flex-col space-y-4"
                    >
                        <div className="space-y-3">
                            <h3 className="text-section-subheading">Production</h3>
                            <div className="h-0.5 w-12 bg-gold" />
                            <p className="font-sans text-neutral-400 text-sm leading-relaxed pt-1">
                                Production represents the dynamic phase of a creative project, where the plans from pre-production spring to life, with cameras rolling, actors delivering their performances, and the realization of the creative vision.
                            </p>
                            <span className="inline-flex items-center gap-1.5 font-sans font-bold text-sm tracking-wider uppercase text-gold group-hover:text-white transition-colors duration-200 pt-2">
                                Learn More <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </div>
                        <WorkflowMarquee images={productionCarouselImages} speed={14} reverse={true} />
                    </div>

                    <div
                        onClick={() => {
                            setActiveTab('services');
                            window.location.hash = 'post-production';
                            onShowMessage("Redirecting to Post-Production workflow section...", "info");
                        }}
                        className="group rounded-2xl border border-white/5 bg-neutral-950/40 hover:bg-neutral-950/80 p-6 sm:p-8 hover:border-gold/25 transition-all duration-300 cursor-pointer flex flex-col space-y-4"
                    >
                        <div className="space-y-3">
                            <h3 className="text-section-subheading">Post-Production</h3>
                            <div className="h-0.5 w-12 bg-gold" />
                            <p className="font-sans text-neutral-400 text-sm leading-relaxed pt-1">
                                Post-production emerges as the pivotal phase in creative projects, wherein raw content undergoes a transformation into its refined, polished state where editing, sound design, visual effects, and essential adjustments to breathe life into the project.
                            </p>
                            <span className="inline-flex items-center gap-1.5 font-sans font-bold text-sm tracking-wider uppercase text-gold group-hover:text-white transition-colors duration-200 pt-2">
                                Learn More <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </div>
                        <WorkflowMarquee images={postProductionCarouselImages} speed={13} />
                    </div>
                </div>
            </div>
        </section>
    );
}
