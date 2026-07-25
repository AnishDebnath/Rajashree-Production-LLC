import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Play,
    Volume2,
    VolumeX,
    Heart,
    MessageCircle,
    Share2,
    X,
    Music,
    Instagram,
    ArrowUpRight,
} from 'lucide-react';
import ReelCard, { type ReelItem } from '../../components/product/ReelCard';
import { reelsData, mockComments } from '../../data/social';

interface SocialReelsProps {
    onShowMessage: (msg: string, type?: 'info' | 'success') => void;
}

export default function SocialReels({ onShowMessage }: SocialReelsProps) {
    const timeOffsetRef = useRef(0);
    const targetTimeOffsetRef = useRef(0);

    const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});
    const [isFollowing, setIsFollowing] = useState(false);
    const [isFollowingMap, setIsFollowingMap] = useState<Record<string, boolean>>({});
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [commentsList, setCommentsList] = useState(mockComments);
    const [isMobile, setIsMobile] = useState(false);
    const [screenWidth, setScreenWidth] = useState(1200);

    const videoRef = useRef<HTMLVideoElement>(null);

    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(0);
    const dragStartOffset = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Directly update card visual properties on the DOM for 60fps/120fps physics performance
    const updateCardStyles = (offset: number) => {
        const container = containerRef.current;
        if (!container) return;

        const slides = container.querySelectorAll<HTMLElement>('.ls-curved-carousel__slide');
        if (!slides || slides.length === 0) return;

        const isMob = window.innerWidth < 768;
        const W = isMob ? 120 : 210;
        const total = reelsData.length;
        const thetaStepDeg = 14;
        const thetaStepRad = (thetaStepDeg * Math.PI) / 180;
        const gap = isMob ? 16 : 32;
        const W_virtual = W + gap;
        const R_center = (W_virtual / 2) / Math.sin(thetaStepRad / 2);

        slides.forEach((slide, i) => {
            let diff = i - offset;
            const half = total / 2;
            let wrappedDiff = ((diff + half) % total);
            if (wrappedDiff < 0) wrappedDiff += total;
            wrappedDiff -= half;

            const angleRad = wrappedDiff * thetaStepRad;
            const angleDeg = angleRad * (180 / Math.PI);
            const absAngleDeg = Math.abs(angleDeg);

            const zIndex = Math.round((R_center - R_center * Math.cos(angleRad)) * 10) + 10;

            const fadeStart = 50;
            const fadeEnd = 80;
            const opacity = absAngleDeg < fadeStart
                ? 1
                : Math.max(0, 1 - (absAngleDeg - fadeStart) / (fadeEnd - fadeStart));

            const blurAmount = Math.min(2.5, (absAngleDeg / 15) ** 1.5 * 0.15);
            const brightness = Math.max(0.7, 1 - (absAngleDeg / 90) * 0.3);
            const saturation = Math.max(0.8, 1 - (absAngleDeg / 90) * 0.2);

            slide.style.zIndex = String(zIndex);
            slide.style.transform = `translate(-50%, -50%) rotateY(${-angleDeg}deg) translateZ(${-R_center}px)`;
            slide.style.opacity = String(opacity);
            slide.style.filter = `blur(${blurAmount}px) brightness(${brightness}) saturate(${saturation})`;
        });
    };

    // Keep the DOM slide styles fully synchronized synchronously on any React state re-render
    useLayoutEffect(() => {
        updateCardStyles(timeOffsetRef.current);
    });

    // Drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        dragStartX.current = e.clientX;
        dragStartOffset.current = targetTimeOffsetRef.current;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const deltaX = e.clientX - dragStartX.current;
        const width = containerRef.current?.offsetWidth || 800;
        // Premium elastic friction sensitivity for swiping
        const offsetChange = -(deltaX / width) * 3.2;

        let targetVal = (dragStartOffset.current + offsetChange) % reelsData.length;
        if (targetVal < 0) targetVal += reelsData.length;
        targetTimeOffsetRef.current = targetVal;
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 0) return;
        setIsDragging(true);
        dragStartX.current = e.touches[0].clientX;
        dragStartOffset.current = targetTimeOffsetRef.current;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || e.touches.length === 0) return;
        const deltaX = e.touches[0].clientX - dragStartX.current;
        const width = containerRef.current?.offsetWidth || 800;
        const offsetChange = -(deltaX / width) * 3.2;

        let targetVal = (dragStartOffset.current + offsetChange) % reelsData.length;
        if (targetVal < 0) targetVal += reelsData.length;
        targetTimeOffsetRef.current = targetVal;
    };

    // Handle responsive layout and screenWidth detection
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setScreenWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Sync play/mute state when modal opens or changes
    useEffect(() => {
        if (selectedReel && videoRef.current) {
            videoRef.current.muted = isMuted;
            if (isPlaying) {
                videoRef.current.play().catch(() => {
                    setIsPlaying(false);
                });
            } else {
                videoRef.current.pause();
            }
        }
    }, [selectedReel, isMuted, isPlaying]);

    // Smooth continuous requestAnimationFrame loop for marquee scrolling and high-fidelity easing interpolation
    useEffect(() => {
        let animationFrameId: number;
        let lastTime = performance.now();

        const updateMarquee = (time: number) => {
            const delta = time - lastTime;
            lastTime = time;

            // 1. Gentle continuous scroll when idle (not viewing player or dragging)
            if (!selectedReel && !isDragging) {
                const speed = 0.00010; // luxurious, premium drift rate
                targetTimeOffsetRef.current = (targetTimeOffsetRef.current + delta * speed) % reelsData.length;
            }

            // 2. High-performance lerp (linear interpolation) for buttery-smooth inertial physics
            const current = timeOffsetRef.current;
            const target = targetTimeOffsetRef.current;
            const total = reelsData.length;

            // Handle shortest cyclic distance wrap-around
            let diff = target - current;
            const half = total / 2;
            let wrappedDiff = ((diff + half) % total);
            if (wrappedDiff < 0) wrappedDiff += total;
            wrappedDiff -= half;

            // Friction easing coefficient (snappier during touch drag, incredibly soft and floating when idle/clicking)
            const ease = isDragging ? 0.14 : 0.08;
            let nextOffset = current + wrappedDiff * ease;
            nextOffset = (nextOffset + total) % total;

            timeOffsetRef.current = nextOffset;
            updateCardStyles(nextOffset);

            animationFrameId = requestAnimationFrame(updateMarquee);
        };

        animationFrameId = requestAnimationFrame(updateMarquee);
        return () => cancelAnimationFrame(animationFrameId);
    }, [selectedReel, isDragging]);

    const handleCardClick = (index: number) => {
        // Check cyclic distance to center
        const total = reelsData.length;
        const current = timeOffsetRef.current;

        let diff = index - current;
        const half = total / 2;
        let wrappedDiff = ((diff + half) % total);
        if (wrappedDiff < 0) wrappedDiff += total;
        wrappedDiff -= half;

        if (Math.abs(wrappedDiff) < 0.15) {
            // Card is already perfectly centered! Launch immersive player overlay
            setSelectedReel(reelsData[index]);
            setIsPlaying(true);
            onShowMessage(`Playing: "${reelsData[index].title}"`, "success");
        } else {
            // Smoothly rotate the carousel to focus and center the selected card first
            targetTimeOffsetRef.current = index;
            onShowMessage(`Focusing on "${reelsData[index].title}"...`, "info");
        }
    };

    const handleLikeReel = (id: string) => {
        setHasLiked(prev => {
            const updated = !prev[id];
            if (updated) {
                onShowMessage("Added to your Liked Reels! ❤️", "success");
            }
            return { ...prev, [id]: updated };
        });
    };

    const handleAddComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim()) return;
        setCommentsList(prev => [
            { username: "@you", text: newComment, likes: "0" },
            ...prev
        ]);
        setNewComment('');
        onShowMessage("Comment posted successfully!", "success");
    };

    const handleShareReel = (title: string) => {
        navigator.clipboard.writeText(window.location.href);
        onShowMessage(`Link copied! Share "${title}" with friends.`, "success");
    };

    return (
        <section
            className="relative py-16 bg-transparent overflow-hidden z-20"
            id="social-reels-section"
        >
            {/* Background Decorative glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#1d1607] via-transparent to-transparent opacity-20 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col items-center text-center">
                <div className="space-y-4 flex flex-col items-center">
                    <h2 className="text-section-heading">
                        Our Digital Content & Social Shorts
                    </h2>
                    <div className="h-0.5 w-16 bg-gold" />
                </div>
            </div>

            {/* Endless Dark Immersive 3D Carousel Section */}
            <div className="w-full relative z-20 overflow-visible">

                {/* 3D Cylindrical Curved Carousel Container with Feather Masking */}
                <div
                    ref={containerRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleMouseUpOrLeave}
                    className="ls-curved-carousel select-none cursor-grab active:cursor-grabbing"
                >
                    {/* Stage with perspective */}
                    <div className="ls-curved-carousel__stage">
                        {/* The 3D stack wrapper (Ring) */}
                        {(() => {
                            const W = isMobile ? 120 : 210;
                            const H = isMobile ? 210 : 360;
                            const total = reelsData.length;

                            // Set up a gentle 14-degree step between adjacent cards for a smooth, endless ribbon
                            const thetaStepDeg = 14;
                            const thetaStepRad = (thetaStepDeg * Math.PI) / 180;

                            // Introduce a deliberate virtual gap factor between cards
                            const gap = isMobile ? 16 : 32;
                            const W_virtual = W + gap;

                            // Compute mathematically perfect radius based on virtual spacing width
                            const R_center = (W_virtual / 2) / Math.sin(thetaStepRad / 2);

                            return (
                                <div
                                    style={{
                                        width: `${W}px`,
                                        height: `${H}px`,
                                        transform: `translate3d(0, 0, ${R_center}px)`,
                                    } as React.CSSProperties}
                                    className="ls-curved-carousel__ring"
                                >
                                    {reelsData.map((reel, i) => {
                                        const cardStyle: React.CSSProperties = {
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            width: `${W}px`,
                                            height: `${H}px`,
                                            transformStyle: 'preserve-3d',
                                            backfaceVisibility: 'visible',
                                            WebkitBackfaceVisibility: 'visible',
                                        };

                                        return (
                                            <ReelCard
                                                key={reel.id}
                                                reel={reel}
                                                index={i}
                                                style={cardStyle}
                                                width={W}
                                                height={H}
                                                isDragging={isDragging}
                                                isLiked={hasLiked[reel.id]}
                                                isFollowing={isFollowingMap[reel.id]}
                                                sendCount={reel.id === '1' ? '12.4K' : reel.id === '2' ? '5.8K' : reel.id === '3' ? '24K' : '8.9K'}
                                                onCardClick={handleCardClick}
                                                onLike={handleLikeReel}
                                                onComment={(r) => {
                                                    setSelectedReel(r);
                                                    setShowComments(true);
                                                    setIsPlaying(true);
                                                    onShowMessage(`Opening comments for "${r.title}"`, "info");
                                                }}
                                                onShare={handleShareReel}
                                                onSend={() => onShowMessage("Shared Reel directly with contacts!", "success")}
                                                onMore={(title) => onShowMessage(`Options: "${title}"`, "info")}
                                                onFollow={(r) => {
                                                    setIsFollowingMap(prev => {
                                                        const val = !prev[r.id];
                                                        onShowMessage(val ? `Following ${r.creator}` : `Unfollowed ${r.creator}`, "success");
                                                        return { ...prev, [r.id]: val };
                                                    });
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </div>

            {/* Immersive Social Link Action at the bottom */}
            <div className="flex justify-center mt-12 mb-4 z-20 relative">
                <a
                    href="https://instagram.com/rajashree_prod"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onShowMessage("Redirecting to Instagram...", "info")}
                    className="px-8 py-3.5 rounded-full bg-gold hover:bg-white text-black font-sans font-bold text-xs tracking-widest uppercase hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shrink-0 cursor-pointer inline-flex items-center gap-2.5 shadow-[0_12px_40px_rgba(212,175,55,0.15)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.2)]"
                >
                    <Instagram className="w-4 h-4 text-black" />
                    <span>Follow @rajashree_prod</span>
                </a>
            </div>


            {/* VERTICAL PHONE-FRAME IMMERSIVE REELS PLAYER OVERLAY */}
            <AnimatePresence>
                {selectedReel && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">

                        {/* Ambient Blurred Video Background behind the phone frame for dramatic theater effect */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                            <img
                                src={selectedReel.imageUrl}
                                alt="blur background"
                                loading="lazy"
                                className="w-full h-full object-cover filter blur-[80px]"
                            />
                        </div>

                        {/* Click outside to close */}
                        <div
                            className="absolute inset-0"
                            onClick={() => {
                                setSelectedReel(null);
                                setShowComments(false);
                            }}
                        />

                        {/* Close Button top-right */}
                        <button
                            onClick={() => {
                                setSelectedReel(null);
                                setShowComments(false);
                            }}
                            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:text-gold transition-all duration-300 z-50 cursor-pointer"
                            aria-label="Close Player"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                        {/* The Smart Phone Frame */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 30 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                            className="relative w-full max-w-87.5 sm:max-w-92.5 aspect-9/19 bg-[#0c0c0e] rounded-[42px] border-8 border-neutral-800 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden z-10 flex flex-col justify-between"
                        >
                            {/* Phone Camera Notch Pill */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-neutral-900 border border-neutral-800 ml-auto mr-4" />
                            </div>

                            {/* VIDEO PLAYER AREA */}
                            <div
                                className="absolute inset-0 bg-black z-0 cursor-pointer"
                                onClick={() => setIsPlaying(!isPlaying)}
                            >
                                <video
                                    ref={videoRef}
                                    src={selectedReel.videoUrl}
                                    loop
                                    playsInline
                                    autoPlay
                                    preload="metadata"
                                    className="w-full h-full object-cover filter brightness-[0.9]"
                                />

                                {/* Big Floating Play/Pause Visual Feedback */}
                                <AnimatePresence>
                                    {!isPlaying && (
                                        <motion.div
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.5, opacity: 0 }}
                                            className="absolute inset-0 flex items-center justify-center z-30"
                                        >
                                            <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                                <Play className="w-6 h-6 fill-current translate-x-0.5 text-white" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* TOP HEADER CONTROLS (Mute, Quality indicator) */}
                            <div className="relative z-30 p-5 pt-10 flex items-center justify-between w-full pointer-events-none">
                                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="font-mono text-[8px] text-white/90 font-bold tracking-wider uppercase">
                                        LIVE REEL
                                    </span>
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsMuted(!isMuted);
                                        onShowMessage(isMuted ? "Audio Unmuted" : "Audio Muted", "info");
                                    }}
                                    className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white border border-white/10 hover:scale-105 active:scale-95 pointer-events-auto transition-all cursor-pointer"
                                >
                                    {isMuted ? (
                                        <VolumeX className="w-4 h-4 text-white" />
                                    ) : (
                                        <Volume2 className="w-4 h-4 text-gold" />
                                    )}
                                </button>
                            </div>

                            {/* FLOATING ACTION VERTICAL BUTTONS BAR (Likes, Comments, Shares) */}
                            <div className="absolute right-3.5 bottom-24 z-30 flex flex-col gap-4 items-center">

                                {/* Like Button */}
                                <div className="flex flex-col items-center gap-1">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleLikeReel(selectedReel.id);
                                        }}
                                        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-lg border active:scale-90 cursor-pointer ${hasLiked[selectedReel.id]
                                            ? 'bg-red-500 border-red-400 text-white'
                                            : 'bg-black/55 backdrop-blur-md border-white/10 text-white hover:text-red-400'
                                            }`}
                                    >
                                        <Heart className={`w-5 h-5 ${hasLiked[selectedReel.id] ? 'fill-current' : ''}`} />
                                    </button>
                                    <span className="font-mono text-[9px] font-bold text-white tracking-wide">
                                        {hasLiked[selectedReel.id] ? "Liked" : selectedReel.likes}
                                    </span>
                                </div>

                                {/* Comments Toggle Button */}
                                <div className="flex flex-col items-center gap-1">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowComments(!showComments);
                                        }}
                                        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-lg border active:scale-90 cursor-pointer ${showComments
                                            ? 'bg-gold border-gold text-black'
                                            : 'bg-black/55 backdrop-blur-md border-white/10 text-white hover:text-gold'
                                            }`}
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                    </button>
                                    <span className="font-mono text-[9px] font-bold text-white tracking-wide">
                                        {commentsList.length}
                                    </span>
                                </div>

                                {/* Share Button */}
                                <div className="flex flex-col items-center gap-1">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleShareReel(selectedReel.title);
                                        }}
                                        className="w-11 h-11 rounded-full bg-black/55 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-gold hover:border-gold transition-all shadow-lg active:scale-90 cursor-pointer"
                                    >
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                    <span className="font-mono text-[9px] font-bold text-white tracking-wide">
                                        {selectedReel.shares}
                                    </span>
                                </div>

                            </div>

                            {/* BOTTOM INFORMATION CONTROLS AND DETAILS */}
                            <div className="relative z-30 p-5 pb-8 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-3 w-full text-left">

                                {/* Account Details & Follow Button */}
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-full border border-gold/30 bg-black flex items-center justify-center text-gold font-bold text-xs select-none">
                                        RP
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-sans font-extrabold text-xs text-white">
                                            {selectedReel.creator}
                                        </span>
                                        <span className="font-sans text-[8px] text-neutral-400 font-medium">
                                            Rajashree Production LLP
                                        </span>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsFollowing(!isFollowing);
                                            onShowMessage(isFollowing ? "Unfollowed creator" : "Following Rajashree Production!", "success");
                                        }}
                                        className={`ml-auto px-3 py-1 rounded-full font-sans font-bold text-[9px] tracking-wider uppercase transition-all duration-300 cursor-pointer ${isFollowing
                                            ? 'bg-white/10 border border-white/15 text-white/80'
                                            : 'bg-gold text-black hover:bg-white'
                                            }`}
                                    >
                                        {isFollowing ? "Following" : "Follow"}
                                    </button>
                                </div>

                                {/* Caption description */}
                                <p className="font-sans text-[10.5px] text-white/90 leading-relaxed font-light line-clamp-3">
                                    {selectedReel.caption}
                                </p>

                                {/* Scrolling Audio Soundtrack Ticker */}
                                <div className="flex items-center gap-2 border-t border-white/5 pt-2.5">
                                    <Music className="w-3.5 h-3.5 text-gold shrink-0" />
                                    <div className="overflow-hidden flex-1 relative h-4 select-none">
                                        <motion.div
                                            animate={{ x: ["0%", "-50%"] }}
                                            transition={{
                                                ease: 'linear',
                                                duration: 12,
                                                repeat: Infinity
                                            }}
                                            className="whitespace-nowrap flex gap-4 text-[10px] text-neutral-300 font-medium font-mono"
                                        >
                                            <span>{selectedReel.sound} ✦</span>
                                            <span>{selectedReel.sound} ✦</span>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Progress bar of video */}
                                <div className="w-full h-0.5 bg-white/20 rounded-full overflow-hidden mt-1">
                                    <motion.div
                                        animate={{ width: ["0%", "100%"] }}
                                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                        className="h-full bg-gold rounded-full"
                                    />
                                </div>
                            </div>


                            {/* SLIDING COMMENTS DRAWER (Within the Phone Frame) */}
                            <AnimatePresence>
                                {showComments && (
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "100%" }}
                                        transition={{ type: 'spring', damping: 28, stiffness: 240 }}
                                        className="absolute inset-x-0 bottom-0 h-[65%] bg-[#0f0f12] rounded-t-3xl z-40 flex flex-col justify-between border-t border-white/10 shadow-[0_-15px_30px_rgba(0,0,0,0.5)] text-left"
                                    >
                                        {/* Comments Header */}
                                        <div className="p-4 border-b border-white/5 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <MessageCircle className="w-4 h-4 text-gold" />
                                                <span className="font-sans font-bold text-xs text-white">
                                                    Comments ({commentsList.length})
                                                </span>
                                            </div>
                                            <button
                                                onClick={() => setShowComments(false)}
                                                className="p-1 rounded-full hover:bg-white/5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Comments scroll feed */}
                                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                            {commentsList.map((comment, cIdx) => (
                                                <div key={cIdx} className="flex gap-2.5 items-start">
                                                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-neutral-700 to-neutral-800 border border-white/5 flex items-center justify-center font-mono text-[9px] font-black text-white uppercase select-none">
                                                        {comment.username.charAt(1)}
                                                    </div>
                                                    <div className="flex-1 flex flex-col">
                                                        <div className="flex items-baseline gap-1.5">
                                                            <span className="font-sans font-extrabold text-[10px] text-white">
                                                                {comment.username}
                                                            </span>
                                                            <span className="font-sans text-[8px] text-gold/80 font-bold uppercase">
                                                                creator
                                                            </span>
                                                        </div>
                                                        <p className="font-sans text-[10px] text-neutral-300 leading-relaxed mt-1">
                                                            {comment.text}
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-col items-center gap-0.5 pt-0.5">
                                                        <Heart className="w-3 h-3 text-neutral-500 hover:text-red-400 cursor-pointer" />
                                                        <span className="font-mono text-[8px] text-neutral-500">{comment.likes}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Post Comment Input form */}
                                        <form
                                            onSubmit={handleAddComment}
                                            className="p-3 border-t border-white/5 bg-[#0a0a0c] flex items-center gap-2"
                                        >
                                            <input
                                                type="text"
                                                placeholder="Add comment..."
                                                value={newComment}
                                                onChange={(e) => setNewComment(e.target.value)}
                                                className="flex-1 px-3 py-2 bg-neutral-900 border border-white/5 focus:border-gold/30 rounded-xl font-sans text-[11px] text-white outline-none placeholder-neutral-500"
                                            />
                                            <button
                                                type="submit"
                                                className="px-3.5 py-2 bg-gold hover:bg-white text-black font-sans font-bold text-[10px] rounded-xl tracking-wider uppercase transition-all duration-200 cursor-pointer"
                                            >
                                                Post
                                            </button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    );
}
