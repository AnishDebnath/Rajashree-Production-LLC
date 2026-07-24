import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface OpeningIntroProps {
    onFinish: () => void;
}

export default function OpeningIntro({ onFinish }: OpeningIntroProps) {
    const [exiting, setExiting] = useState(false);

    // Lock scroll while intro plays
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const handleVideoEnd = () => {
        setExiting(true);
        document.body.style.overflow = ''; // restore scroll with exit animation
        setTimeout(onFinish, 1200);
    };

    return (
        <motion.div
            className="fixed inset-0 z-9999 bg-black"
            initial={{ opacity: 1 }}
            animate={exiting ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <video
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="w-full h-full object-cover"
                >
                    <source src="/src/assets/opening-video.mp4" type="video/mp4" />
                </video>

                {/* Cinematic gradient overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,black_100%)] opacity-30 pointer-events-none" />
            </div>
        </motion.div>
    );
}