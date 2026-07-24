import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '../../components/product/ProjectCard';

interface FeaturedPortfolioSectionProps {
    portfolioSectionRef: React.RefObject<HTMLDivElement | null>;
    portfolioTrackRef: React.RefObject<HTMLDivElement | null>;
    portfolioX: any;
    featuredProjects: { id: string; title: string; client: string; category: string; image: string }[];
    handleCardClick: (projectId: string) => void;
    setActiveTab: (tab: string) => void;
    onShowMessage: (msg: string, type?: 'info' | 'success') => void;
}

export default function FeaturedPortfolioSection({
    portfolioSectionRef,
    portfolioTrackRef,
    portfolioX,
    featuredProjects,
    handleCardClick,
    setActiveTab,
    onShowMessage,
}: FeaturedPortfolioSectionProps) {
    return (
        <section ref={portfolioSectionRef} className="relative h-[250vh] bg-transparent z-20">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 md:px-16 mb-8 sm:mb-12">
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                        <div className="space-y-3">
                            <h2 className="font-sans font-bold text-3xl sm:text-4.5xl text-white tracking-tight leading-[1.1]">
                                Our Handpicked Featured Portfolio
                            </h2>
                            <div className="h-0.5 w-16 bg-gold" />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                setActiveTab('projects');
                                window.scrollTo({ top: 0, behavior: 'instant' });
                                onShowMessage("Showing entire cinematic portfolio grid!", "info");
                            }}
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-white text-black font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase cursor-pointer select-none transition-all duration-300 shrink-0"
                        >
                            <span>See All Projects</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </motion.button>
                    </div>
                </div>

                <div className="relative w-full overflow-visible">
                    <motion.div
                        ref={portfolioTrackRef}
                        style={{ x: portfolioX }}
                        className="flex gap-4 sm:gap-8 select-none"
                    >
                        {featuredProjects.map((project) => (
                            <div key={project.id} className="shrink-0 w-75 sm:w-105">
                                <ProjectCard
                                    project={project}
                                    onClick={() => handleCardClick(project.id)}
                                    enableTilt={false}
                                    enableLayout={false}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
