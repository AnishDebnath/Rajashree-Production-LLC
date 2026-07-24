import { motion } from 'motion/react';
import {
    Play,
    Heart,
    MessageCircle,
    Share2,
    Send,
    MoreVertical,
    Check,
} from 'lucide-react';

export interface ReelItem {
    id: string;
    title: string;
    category: string;
    views: string;
    likes: string;
    likesCount: number;
    commentsCount: number;
    shares: string;
    videoUrl: string;
    imageUrl: string;
    sound: string;
    creator: string;
    duration: string;
    caption: string;
}

interface ReelCardProps {
    reel: ReelItem;
    index: number;
    style: React.CSSProperties;
    width: number;
    height: number;
    isDragging: boolean;
    isLiked: boolean;
    isFollowing: boolean;
    sendCount: string;
    onCardClick: (index: number) => void;
    onLike: (id: string) => void;
    onComment: (reel: ReelItem) => void;
    onShare: (title: string) => void;
    onSend: () => void;
    onMore: (title: string) => void;
    onFollow: (reel: ReelItem) => void;
}

export default function ReelCard({
    reel,
    index,
    style,
    width,
    height: cardHeight,
    isDragging,
    isLiked,
    isFollowing,
    sendCount,
    onCardClick,
    onLike,
    onComment,
    onShare,
    onSend,
    onMore,
    onFollow,
}: ReelCardProps) {
    return (
        <motion.div
            style={style}
            onClick={() => {
                if (!isDragging) {
                    onCardClick(index);
                }
            }}
            className="ls-curved-carousel__slide rounded-[14px] md:rounded-[18px] border border-white/10 overflow-hidden cursor-pointer group select-none shadow-[0_16px_50px_rgba(0,0,0,0.85)]"
        >
            {/* Image Background */}
            <img
                src={reel.imageUrl}
                alt={reel.title}
                referrerPolicy="no-referrer"
                className="ls-curved-carousel__media pointer-events-none transition-transform duration-700 group-hover:scale-105"
            />

            {/* Immersive Edge-to-Edge Gradient Vignettes */}
            <div className="absolute inset-x-0 bottom-0 h-[28%] bg-linear-to-t from-black/80 via-black/25 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-1/5 bg-linear-to-l from-black/35 via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-[10%] bg-linear-to-b from-black/20 to-transparent z-10 pointer-events-none" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-gold/90 text-black flex items-center justify-center shadow-2xl border border-gold/50 backdrop-blur-sm">
                    <Play className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current translate-x-0.5 text-black" />
                </div>
            </div>

            {/* Interactive Side Overlays */}
            <div className="absolute right-1 md:right-2 bottom-10 md:bottom-12 z-20 flex flex-col items-center gap-0.5 md:gap-2">
                {/* Like */}
                <button
                    onClick={(e) => { e.stopPropagation(); onLike(reel.id); }}
                    className="flex flex-col items-center group/btn active:scale-90 transition-transform duration-150"
                >
                    <div className={`p-1 rounded-full transition-colors ${isLiked ? 'text-red-500 scale-110' : 'text-white hover:bg-white/10'}`}>
                        <Heart className={`w-3.5 h-3.5 md:w-4.5 md:h-4.5 drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.8)] ${isLiked ? 'fill-current text-red-500' : ''}`} />
                    </div>
                    <span className="text-[6.5px] md:text-[7.5px] font-extrabold text-white/90 tracking-wide select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                        {isLiked ? "Liked" : reel.likes}
                    </span>
                </button>

                {/* Comments */}
                <button
                    onClick={(e) => { e.stopPropagation(); onComment(reel); }}
                    className="flex flex-col items-center group/btn active:scale-90 transition-transform duration-150"
                >
                    <div className="p-1 rounded-full text-white hover:bg-white/10 transition-colors">
                        <MessageCircle className="w-3.5 h-3.5 md:w-4.5 md:h-4.5 drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.8)]" />
                    </div>
                    <span className="text-[6.5px] md:text-[7.5px] font-extrabold text-white/90 tracking-wide select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                        {reel.commentsCount}
                    </span>
                </button>

                {/* Share */}
                <button
                    onClick={(e) => { e.stopPropagation(); onShare(reel.title); }}
                    className="flex flex-col items-center group/btn active:scale-90 transition-transform duration-150"
                >
                    <div className="p-1 rounded-full text-white hover:bg-white/10 transition-colors">
                        <Share2 className="w-3.5 h-3.5 md:w-4.5 md:h-4.5 drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.8)]" />
                    </div>
                    <span className="text-[6.5px] md:text-[7.5px] font-extrabold text-white/90 tracking-wide select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                        {reel.shares}
                    </span>
                </button>

                {/* Send */}
                <button
                    onClick={(e) => { e.stopPropagation(); onSend(); }}
                    className="flex flex-col items-center group/btn active:scale-90 transition-transform duration-150"
                >
                    <div className="p-1 rounded-full text-white hover:bg-white/10 transition-colors">
                        <Send className="w-3.5 h-3.5 md:w-4.5 md:h-4.5 -rotate-12 drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.8)]" />
                    </div>
                    <span className="text-[6.5px] md:text-[7.5px] font-extrabold text-white/90 tracking-wide select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                        {sendCount}
                    </span>
                </button>

                {/* More */}
                <button
                    onClick={(e) => { e.stopPropagation(); onMore(reel.title); }}
                    className="p-1 rounded-full text-white hover:bg-white/10 transition-colors active:scale-90"
                >
                    <MoreVertical className="w-3.5 h-3.5 md:w-4.5 md:h-4.5 drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.8)]" />
                </button>
            </div>

            {/* Bottom Left Details Panel */}
            <div className="absolute bottom-2.5 md:bottom-3 left-2 md:left-3 right-8 md:right-10 z-20 flex flex-col gap-0.5 md:gap-1 text-left select-none">
                {/* Profile row */}
                <div className="flex items-center gap-1 md:gap-1.5">
                    <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${reel.id}&backgroundColor=38bdf8`}
                        alt={reel.creator}
                        className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-white/25 shadow-md bg-zinc-950 object-cover"
                    />
                    <span className="font-sans font-extrabold text-[8px] md:text-[9.5px] text-white tracking-wide truncate max-w-11.25 md:max-w-16.25 drop-shadow">
                        {reel.creator.substring(1)}
                    </span>
                    <div className="w-2.5 h-2.5 bg-sky-500 rounded-full flex items-center justify-center scale-75 md:scale-85 origin-center select-none shadow shrink-0">
                        <Check className="w-2 text-white stroke-4" />
                    </div>
                    <button
                        onClick={(e) => { e.stopPropagation(); onFollow(reel); }}
                        className={`px-1 py-0.5 rounded text-[5.5px] md:text-[6.5px] font-black uppercase tracking-wider transition-all duration-300 shadow shrink-0 ${isFollowing
                            ? 'bg-white/15 border border-white/10 text-white/90'
                            : 'bg-white hover:bg-gold text-black hover:text-black border border-transparent'
                            }`}
                    >
                        {isFollowing ? "Following" : "Follow"}
                    </button>
                </div>

                {/* Caption */}
                <p className="font-sans text-[7.5px] md:text-[8.5px] text-white/90 leading-snug font-medium line-clamp-2 drop-shadow">
                    {reel.caption}
                </p>
            </div>

            {/* Spinning Music Disc */}
            <div className="absolute bottom-2.5 md:bottom-3 right-2 md:right-2.5 z-20">
                <div className="w-4 h-4 md:w-5.5 md:h-5.5 rounded-full border-2 border-white/15 bg-black flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.5)] overflow-hidden relative">
                    <div className="w-full h-full rounded-full animate-[spin_5s_linear_infinite] flex items-center justify-center relative bg-linear-to-tr from-zinc-950 via-zinc-800 to-zinc-950">
                        <div className="absolute inset-0.5 rounded-full border border-white/5" />
                        <div className="absolute inset-1.5 rounded-full border border-white/5" />
                        <div
                            className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-cover bg-center border border-black/40 shadow-inner"
                            style={{ backgroundImage: `url(${reel.imageUrl})` }}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
