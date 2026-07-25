import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../../data/blogs';
import BlogCard from '../../components/product/BlogCard';

interface BlogSimilarProps {
  similarBlogs: BlogPost[];
  onSelectBlog: (blog: BlogPost) => void;
  onShowMessage: (msg: string, type: 'info' | 'success') => void;
  onBack: () => void;
}

export default function BlogSimilar({ similarBlogs, onSelectBlog, onShowMessage, onBack }: BlogSimilarProps) {
  // Animation container variants matching BlogGrid
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.04 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      y: 10,
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <>
      {/* 3. SIMILAR BLOGS SECTION */}
      <div className="border-y border-white/20 pt-16 mt-16 pb-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 md:px-12">
          <h2 className="text-section-heading">
            Similar Blog Posts
          </h2>
          <div className="h-0.5 w-12 bg-gold mb-4" />

          {/* 2-column list of matching posts - matching ProjectDetail Similar gap */}
          <AnimatePresence mode="wait">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              layout
              transition={{ layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12"
            >
              {similarBlogs.map((similarBlog) => (
                <motion.div
                  key={similarBlog.id}
                  variants={itemVariants}
                  layout
                  transition={{ layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }}
                  className="w-full flex justify-center max-w-85"
                >
                  <BlogCard
                    blog={similarBlog}
                    onClick={() => {
                      onSelectBlog(similarBlog);
                      onShowMessage(`Loading related post: "${similarBlog.title}"`, 'success');
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Read All Blogs Button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={onBack}
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-accent-red hover:bg-[#ff3b3b] text-white font-sans font-bold text-xs tracking-widest uppercase cursor-pointer select-none overflow-hidden transition-all duration-300 shadow-[0_12px_40px_rgba(214,40,40,0.25)] hover:shadow-[0_16px_50px_rgba(214,40,40,0.45)] hover:-translate-y-0.5 active:scale-98"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <span>Read All Blogs</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}