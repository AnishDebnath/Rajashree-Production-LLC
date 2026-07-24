import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import ThreeDCardEffect from '../ThreeDCardEffect';

interface ProjectCardData {
    id: string;
    title: string;
    client: string;
    category: string;
    image: string;
}

interface ProjectCardProps {
    project: ProjectCardData;
    onClick: () => void;
    enableTilt?: boolean;
    enableLayout?: boolean;
}

function CardVisual({ project, onClick }: { project: ProjectCardData; onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer select-none relative w-full aspect-4/3"
        >
            <div
                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-gold/30 shadow-xl bg-neutral-950 transition-all duration-300"
                style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}
            >
                <img
                    src={project.image}
                    alt={`${project.title} showcase`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-[0.9] group-hover:brightness-100"
                    loading="lazy"
                />
                <div
                    className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-transparent z-10 pointer-events-none"
                    style={{ transform: 'translateZ(5px)' }}
                />
            </div>
            <div
                className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between pointer-events-none"
                style={{ transform: 'translateZ(25px)' }}
            >
                <div>
                    <span className="font-mono text-[10px] tracking-widest text-gold font-medium uppercase block mb-1">
                        {project.category}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-tight group-hover:text-gold transition-colors duration-200">
                        {project.title}
                    </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-black transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
            </div>
        </div>
    );
}

export default function ProjectCard({
    project,
    onClick,
    enableTilt = true,
    enableLayout = true,
}: ProjectCardProps) {
    const visual = <CardVisual project={project} onClick={onClick} />;

    const withInteraction = enableTilt ? (
        <ThreeDCardEffect onClick={onClick} tiltMaxAngle={8} className="w-full">
            {visual}
        </ThreeDCardEffect>
    ) : (
        <motion.div whileHover={{ y: -6 }} className="w-full">
            {visual}
        </motion.div>
    );

    if (enableLayout) {
        return (
            <motion.div
                layout
                transition={{
                    layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
                }}
                className="w-full flex"
            >
                {withInteraction}
            </motion.div>
        );
    }

    return withInteraction;
}
