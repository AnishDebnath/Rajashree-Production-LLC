import { motion } from 'motion/react';

export function WorkflowMarquee({ images, speed = 12, reverse = false }: { images: string[]; speed?: number; reverse?: boolean }) {
    const xValues = reverse ? ["0%", "-50%"] : ["-50%", "0%"];

    return (
        <div className="relative overflow-hidden rounded-xl border border-white/5 h-28 sm:h-32 bg-bg-dark mt-4 z-10">
            <div className="flex w-full h-full overflow-hidden select-none relative">
                <motion.div
                    animate={{ x: xValues }}
                    transition={{ ease: 'linear', duration: speed, repeat: Infinity }}
                    className="flex gap-3 shrink-0 pr-3 h-full whitespace-nowrap"
                >
                    <div className="flex gap-3 shrink-0 h-full">
                        {images.map((img, idx) => (
                            <div key={`set1-${idx}`} className="h-full aspect-4/3 rounded-lg overflow-hidden border border-white/10 shrink-0 relative group/img">
                                <img src={img} alt="Workflow stage preview clip" referrerPolicy="no-referrer" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" />
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-3 shrink-0 h-full">
                        {images.map((img, idx) => (
                            <div key={`set2-${idx}`} className="h-full aspect-4/3 rounded-lg overflow-hidden border border-white/10 shrink-0 relative group/img">
                                <img src={img} alt="Workflow stage preview clip copy" referrerPolicy="no-referrer" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
