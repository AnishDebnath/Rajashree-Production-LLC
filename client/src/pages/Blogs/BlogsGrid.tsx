import React from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import { BlogPost } from '../../data/blogs';
import BlogCard from '../../components/product/BlogCard';
import BlogsFilter from './Filter';

interface BlogsGridProps {
  filteredBlogs: BlogPost[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  isLoading: boolean;
  onSelectBlog: (blog: BlogPost) => void;
  onCollaborateClick: () => void;
  onShowMessage: (msg: string, type: 'info' | 'success') => void;
  onCollaborateWithContext?: (context: string) => void;
}

export default function BlogsGrid({ filteredBlogs, activeCategory, onSelectCategory, isLoading, onSelectBlog, onCollaborateClick, onShowMessage, onCollaborateWithContext }: BlogsGridProps) {
  // Animation container variants matching project page
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
        ease: [0.16, 1, 0.3, 1],
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
    <section
      className="relative py-24 md:py-36 z-20"
      id="blogs-grid-section"
      style={{
        background: 'linear-gradient(180deg, #050505 0%, #100e07 50%, #030303 100%)'
      }}
    >
      {/* Seamless Melt/Blend Transition with the Hero's Fixed Background */}
      <div className="absolute top-0 left-0 right-0 h-48 -translate-y-full pointer-events-none z-10 overflow-hidden">
        {/* Smooth color gradient from transparent to solid bg-bg-dark */}
        <div className="w-full h-full absolute inset-0 bg-linear-to-t from-bg-dark via-bg-dark/85 to-transparent" />

        {/* Layered progressive backdrop blurs with vertical gradient masks to 'melt' the fixed image */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-0 min-h-75">

        {/* Filter pills — always visible, outside AnimatePresence, same as ProjectGrid */}
        <div className="relative z-10 mb-12">
          <BlogsFilter
            selectedCategory={activeCategory}
            onSelectCategory={onSelectCategory}
          />
        </div>

        {/* AnimatePresence for the Grid loader/results to support seamless skeleton transitions */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="blog-skeletons"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={`blog-skeleton-${index}`}
                  className="flex flex-col w-full"
                >
                  {/* Image Placeholder with Pulse */}
                  <div className="relative aspect-16/10.5 rounded-3xl overflow-hidden bg-[#121212] animate-pulse" />

                  {/* Meta details placeholders */}
                  <div className="mt-4 flex flex-col gap-2.5">
                    {/* Tag line */}
                    <div className="h-3 w-16 bg-[#121212] rounded-md animate-pulse" />
                    {/* Title line */}
                    <div className="h-5 w-full bg-[#121212] rounded-md animate-pulse" />
                    <div className="h-5 w-4/5 bg-[#121212] rounded-md animate-pulse" />
                    {/* Metadata line */}
                    <div className="h-3 w-24 bg-[#121212] rounded-md animate-pulse mt-1" />
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <>
              {filteredBlogs.length === 0 ? (
                <motion.div
                  key="blog-empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-24 text-center border border-dashed border-neutral-850 rounded-2xl bg-neutral-950/20"
                >
                  <p className="font-sans text-neutral-400 text-base">
                    No articles found in this category. Check back soon for new releases!
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="blog-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  layout
                  transition={{
                    layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredBlogs.map((blog) => (
                      <motion.div
                        key={blog.id}
                        variants={itemVariants}
                        layout
                        transition={{
                          layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
                        }}
                        className="w-full flex"
                        id={`blog-card-${blog.id}`}
                      >
                        <BlogCard blog={blog} onClick={() => onSelectBlog(blog)} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>

      </div>

      {/* Seamless Melt/Blend Transition with the CTA's Fixed Background at the bottom with overlap */}
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