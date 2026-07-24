import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface CategoryItem {
    title: string;
    serial: string;
    images: string[];
    desc: string;
}

interface CategoryInteractiveCardProps {
    key?: React.Key;
    cat: CategoryItem;
    catIndex: number;
    globalStep: number;
    onCollaborateWithContext?: (projectName: string) => void;
    onCollaborateClick: () => void;
    onShowMessage: (msg: string, type: 'info' | 'success') => void;
}

export function CategoryInteractiveCard({
    cat,
    catIndex,
    globalStep,
    onCollaborateWithContext,
    onCollaborateClick,
    onShowMessage
}: CategoryInteractiveCardProps) {
    const [manualActiveIndex, setManualActiveIndex] = useState<number | null>(null);

    // Determine if Odd (1, 3, 5...) or Even (2, 4, 6...) category based on serial or index
    const serialNum = parseInt(cat.serial, 10);
    const isOddCategory = isNaN(serialNum) ? (catIndex % 2 === 0) : (serialNum % 2 !== 0);

    // Alternating sync:
    // Odd categories update active image index on even beats (0, 2, 4...)
    // Even categories update active image index on odd beats (1, 3, 5...)
    const autoActiveIndex = isOddCategory
        ? Math.floor(globalStep / 2) % 3
        : Math.floor((globalStep + 1) / 2) % 3;

    const activeIndex = manualActiveIndex !== null ? manualActiveIndex : autoActiveIndex;

    // Clear manual selection after 5 seconds
    useEffect(() => {
        if (manualActiveIndex !== null) {
            const timer = setTimeout(() => {
                setManualActiveIndex(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [manualActiveIndex]);

    return (
        <div
            onClick={() => {
                if (onCollaborateWithContext) {
                    onCollaborateWithContext(cat.title);
                } else {
                    onCollaborateClick();
                }
                onShowMessage(`Interested in planning a "${cat.title}" project! Let's schedule a visual draft session.`, "success");
            }}
            className="group relative flex flex-col justify-start w-full cursor-pointer"
        >
            {/* Large background serial number */}
            <div className="absolute top-[-44px] left-[-16px] text-[110px] sm:text-[130px] font-extrabold text-white/[0.04] font-sans tracking-tighter leading-none select-none pointer-events-none group-hover:text-gold/[0.06] transition-colors duration-500">
                {cat.serial}
            </div>

            {/* Layered Cards Stack with Framer Motion layout animations */}
            <div className="relative flex items-stretch gap-0 w-full h-44 sm:h-52 md:h-56 lg:h-60 overflow-visible mb-8 pl-8 sm:pl-14 pt-4 sm:pt-6">
                {cat.images.map((img, imgIdx) => {
                    const isActive = imgIdx === activeIndex;

                    let widthClass = "w-[8%] shrink-0";
                    let borderRad = "rounded-full";
                    if (isActive) {
                        widthClass = "aspect-[4/3] shrink-0";
                        borderRad = "rounded-[24px]";
                    } else {
                        const relativeIdx = (imgIdx - activeIndex + 3) % 3;
                        if (relativeIdx === 1) {
                            widthClass = "w-[10%] shrink-0";
                        } else {
                            widthClass = "w-[6%] shrink-0";
                        }
                    }

                    return (
                        <motion.div
                            layout
                            key={imgIdx}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 22
                            }}
                            onClick={(e) => {
                                if (!isActive) {
                                    e.stopPropagation();
                                    setManualActiveIndex(imgIdx);
                                }
                            }}
                            className={`relative overflow-hidden border border-white/10 transition-colors duration-300 ${widthClass} ${borderRad} ${isActive ? "group-hover:border-gold/30" : "group-hover:border-gold/20"
                                }`}
                        >
                            <img
                                src={img}
                                alt={`${cat.title} preview ${imgIdx + 1}`}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className={`absolute inset-0 transition-colors duration-300 ${isActive ? "bg-black/10" : imgIdx === (activeIndex + 1) % 3 ? "bg-black/40" : "bg-black/50"
                                }`} />
                        </motion.div>
                    );
                })}
            </div>

            {/* Title & Description */}
            <div className="space-y-2 mt-2">
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-neutral-100 group-hover:text-gold transition-colors duration-300">
                    {cat.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                    {cat.desc}
                </p>
            </div>
        </div>
    );
}
