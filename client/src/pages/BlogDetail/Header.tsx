import { useScroll, useTransform, motion } from 'motion/react';
import { BlogPost } from '../../data/blogs';

interface BlogHeaderProps {
  blog: BlogPost;
  onBack: () => void;
}

export default function BlogHeader({ blog, onBack }: BlogHeaderProps) {
  const { scrollY } = useScroll();
  const backdropY = useTransform(scrollY, [0, 600], [0, 150]);
  const backdropOpacity = useTransform(scrollY, [0, 600], [0.65, 0.25]);

  return (
    <>
      {/* Immersive Fixed Parallax Backdrop Banner */}
      <div className="absolute top-0 left-0 right-0 h-dvh w-full overflow-hidden pointer-events-none z-0">
        <motion.div
          style={{ y: backdropY, opacity: backdropOpacity }}
          className="relative w-full h-full"
        >
          <img
            src={blog.image}
            alt={blog.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter scale-[1.05] brightness-[0.45] contrast-[1.1] saturate-[0.95]"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0) 100%)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0) 100%)',
            }}
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-bg-dark via-bg-dark/60 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-bg-dark via-bg-dark/70 to-transparent pointer-events-none z-10" />
        </motion.div>
      </div>

      {/* Decorative ambient glowing lights */}
      <div className="absolute top-[40vh] left-1/4 w-125 h-125 rounded-full bg-gold/2 blur-[150px] pointer-events-none" />
      <div className="absolute top-[70vh] right-1/4 w-150 h-150 rounded-full bg-accent-red/2 blur-[180px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full h-dvh flex flex-col justify-end max-w-6xl mx-auto px-6 sm:px-10 md:px-12 pb-12 sm:pb-16 pt-36">

        {/* Editorial Blog Title */}
        <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] tracking-tight text-white mb-6 max-w-5xl line-clamp-2 overflow-hidden text-ellipsis">
          {blog.title}
        </h1>

        {/* Symmetrical Spaced-out Horizontal Metadata Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-4 pt-2 font-mono text-[9px] sm:text-[10px] tracking-[0.25em] font-bold text-neutral-400 uppercase">
          <div className="flex items-center">
            [BY] <span className="text-white ml-2">{blog.author}</span>
          </div>
          <div className="sm:text-center flex items-center">
            [CATEGORY] <span className="text-white ml-2">{blog.category}</span>
          </div>
          <div className="sm:text-right flex items-center">
            [DATE] <span className="text-white ml-2">{blog.date}</span>
          </div>
        </div>
      </div>
    </>
  );
}