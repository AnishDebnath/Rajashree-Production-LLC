import { motion } from 'motion/react';
import ThreeDCardEffect from '../../components/ThreeDCardEffect';
import { ArrowUpRight } from 'lucide-react';

interface ProjectSimilarSectionProps {
    suggestedProjects: any[];
    onSelectProject?: (project: any) => void;
    onShowMessage: (msg: string, type: 'info' | 'success') => void;
    onBack: () => void;
}

export default function ProjectSimilarSection({
    suggestedProjects,
    onSelectProject,
    onShowMessage,
    onBack
}: ProjectSimilarSectionProps) {
    return (
        <div className="w-full flex flex-col items-center my-14 px-6">
            <div className="max-w-2xl w-full flex flex-col gap-5 text-left">
                <h2 className="text-section-heading">
                    View Similar Projects
                </h2>
                <div className="h-0.5 w-12 bg-gold" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                    {suggestedProjects.map((proj) => (
                        <div key={proj.id} className="w-full flex justify-center">
                            <ThreeDCardEffect
                                onClick={() => {
                                    if (onSelectProject) {
                                        onSelectProject(proj);
                                        onShowMessage(`Opening project: ${proj.title}`, 'info');
                                        window.scrollTo({ top: 0, behavior: 'instant' });
                                    }
                                }}
                                className="group cursor-pointer select-none relative w-full aspect-16/11 max-w-85"
                                tiltMaxAngle={8}
                            >
                                {/* Background image covering the full card */}
                                <div
                                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-gold/30 shadow-xl bg-neutral-950 transition-all duration-300"
                                    style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}
                                >
                                    <img
                                        src={proj.image}
                                        alt={`${proj.title} showcase`}
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-[0.9] group-hover:brightness-100"
                                        loading="lazy"
                                    />

                                    {/* Clean Dark Gradient Overlay */}
                                    <div
                                        className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-transparent z-10 pointer-events-none"
                                        style={{ transform: 'translateZ(5px)' }}
                                    />
                                </div>

                                {/* Clean text overlay */}
                                <div
                                    className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between pointer-events-none text-left"
                                    style={{ transform: 'translateZ(25px)' }}
                                >
                                    <div>
                                        <span className="font-mono text-[9px] tracking-widest text-gold font-medium uppercase block mb-0.5">
                                            {proj.category}
                                        </span>
                                        <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-tight group-hover:text-gold transition-colors duration-200 line-clamp-1">
                                            {proj.title}
                                        </h3>
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-black transition-all duration-300 shrink-0">
                                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                    </div>
                                </div>
                            </ThreeDCardEffect>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onBack}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-red hover:bg-[#ff3b3b] text-white font-sans font-bold text-xs tracking-widest uppercase cursor-pointer select-none transition-all duration-300"
                >
                    <span>All Projects</span>
                </motion.button>
            </div>
        </div>
    );
}
