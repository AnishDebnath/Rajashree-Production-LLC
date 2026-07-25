import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

interface OpeningIntroProps {
    onFinish: () => void;
}

export default function OpeningIntro({ onFinish }: OpeningIntroProps) {
    const [exiting, setExiting] = useState(false);
    const [isSoundOn, setIsSoundOn] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

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

    // If browser blocks autoplay with sound, fallback to muted
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                video.muted = true;
                video.play();
                setIsSoundOn(false);
            });
        }
    }, []);

    const toggleSound = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsSoundOn(!videoRef.current.muted);
        }
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
                    ref={videoRef}
                    autoPlay
                    playsInline
                    preload="auto"
                    onEnded={handleVideoEnd}
                    className="w-full h-full object-cover"
                >
                    <source src="/src/assets/opening-video.mp4" type="video/mp4" />
                </video>

                {/* Cinematic gradient overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,black_100%)] opacity-30 pointer-events-none" />

                {/* Sound toggle button */}
                <button
                    onClick={toggleSound}
                    className="absolute bottom-8 right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 cursor-pointer"
                    aria-label={isSoundOn ? 'Mute' : 'Unmute'}
                >
                    {isSoundOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                </button>
            </div>
        </motion.div>
    );
}