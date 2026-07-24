import { motion, AnimatePresence, type Variants } from 'motion/react';
import { Project, Category } from '../../types';
import ProjectCard from '../../components/product/ProjectCard';
import Filter from './Filter';

interface ProjectGridProps {
    projects: Project[];
    selectedCategory: Category;
    onSelectCategory: (category: Category) => void;
    onProjectClick: (project: Project) => void;
    isLoading: boolean;
}

export default function ProjectGrid({ projects, selectedCategory, onSelectCategory, onProjectClick, isLoading }: ProjectGridProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 16, scale: 0.98 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }
        },
        exit: {
            opacity: 0,
            scale: 0.98,
            y: 10,
            transition: {
                duration: 0.2,
                ease: [0.16, 1, 0.3, 1],
            }
        }
    };

    return (
        <section className="relative py-20 md:py-32 z-20 bg-transparent">
            {/* Ambient background */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(180deg, #050505 0%, #100e07 50%, #050505 100%)'
                }}
            />

            {/* Top blend transition */}
            <div className="absolute top-0 left-0 right-0 h-48 -translate-y-full pointer-events-none z-10 overflow-hidden">
                <div className="w-full h-full absolute inset-0 bg-linear-to-t from-bg-dark via-bg-dark/85 to-transparent" />
                <div
                    className="w-full h-32 absolute bottom-0 backdrop-blur-xs"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
                        maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)'
                    }}
                />
                <div
                    className="w-full h-20 absolute bottom-0 backdrop-blur-md"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                        maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
                    }}
                />
            </div>

            {/* Category Pills */}
            <div className="relative z-10">
                <Filter selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} />
            </div>

            {/* Project Cards */}
            <div className="relative z-10">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-0 min-h-75">
                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            <motion.div
                                key="skeletons"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
                            >
                                {Array.from({ length: Math.max(projects.length, 3) }).map((_, index) => (
                                    <div
                                        key={`skeleton-${index}`}
                                        className="bg-surface-dark rounded-3xl p-3 flex flex-col w-full"
                                    >
                                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface-light animate-pulse flex items-center justify-center">
                                            <div className="absolute top-3 left-3 w-16 h-5 rounded-full bg-surface-dark/80" />
                                        </div>
                                        <div className="mt-1 px-4 pt-4 pb-2 flex flex-col gap-2.5">
                                            <div className="h-3 w-20 bg-surface-light rounded-md animate-pulse" />
                                            <div className="h-5 w-44 bg-surface-light rounded-md animate-pulse" />
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        ) : projects.length === 0 ? (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="py-24 text-center"
                            >
                                <p className="font-sans text-neutral-400 text-base">
                                    No projects found in this category. Check back soon for new releases!
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="grid"
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                layout
                                transition={{
                                    layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                                }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
                            >
                                <AnimatePresence mode="popLayout">
                                    {projects.map((project) => (
                                        <motion.div
                                            key={project.id}
                                            variants={itemVariants}
                                            layout
                                            transition={{
                                                layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                                            }}
                                            className="w-full flex"
                                        >
                                            <ProjectCard
                                                project={project}
                                                onClick={() => onProjectClick(project)}
                                                enableLayout={false}
                                            />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom blend transition */}
            <div
                className="absolute left-0 right-0 h-64 pointer-events-none z-30 overflow-hidden"
                style={{ bottom: '-256px' }}
            >
                <div
                    className="w-full h-full absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, #050505 0%, #050505 20%, rgba(5, 5, 5, 0.85) 30%, rgba(5, 5, 5, 0) 100%)'
                    }}
                />
                <div
                    className="w-full h-48 absolute top-8 backdrop-blur-xs"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)'
                    }}
                />
                <div
                    className="w-full h-32 absolute top-8 backdrop-blur-md"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
                    }}
                />
            </div>
        </section>
    );
}
