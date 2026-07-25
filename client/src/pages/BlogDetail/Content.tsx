import React from 'react';
import { motion } from 'motion/react';
import { BlogPost, BlogSection } from '../../data/blogs';

interface BlogContentProps {
  blog: BlogPost;
}

export default function BlogContent({ blog }: BlogContentProps) {
  return (
    <section className="relative z-20 px-6 py-16" id="blog-detail-content-section">
      <div className="max-w-3xl mx-auto">

        {/* Centered Highlights Blockquote inside outline card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-14 border border-white/10 rounded-4xl p-8 md:p-12 bg-neutral-900/40 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
        >
          <p className="font-sans text-sm sm:text-base md:text-lg font-medium text-neutral-200 text-center leading-relaxed">
            “{blog.introduction}”
          </p>
        </motion.div>

        {/* Dynamic Sections rendering lists, bullets, and paragraphs */}
        <div className="space-y-10 text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed tracking-wide">
          {blog.sections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              {/* Section Title */}
              {section.title && (
                <h2 className="text-section-heading mt-8">
                  {section.title}
                </h2>
              )}

              {/* Section Introduction */}
              {section.introduction && (
                <p className="whitespace-pre-line text-neutral-400 italic">
                  {section.introduction}
                </p>
              )}

              {/* Section Content Block */}
              {section.content && (
                <p className="whitespace-pre-line text-neutral-300 leading-relaxed">
                  {section.content}
                </p>
              )}

              {/* Section Items (Bulleted list) */}
              {section.items && (
                <div className="space-y-5 pl-2">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex gap-3.5 items-start">
                      <span className="font-sans text-xs sm:text-sm font-bold text-gold shrink-0 mt-0.5 select-none">
                        •
                      </span>
                      <div className="flex-1">
                        <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                          <strong className="text-white font-sans font-bold mr-1.5">{item.label}</strong> — {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Editorial Conclusion Statement */}
          <div className="border-t border-white/5 pt-10 mt-12">
            <h3 className="font-sans font-bold text-xs tracking-widest text-neutral-400 uppercase mb-4">
              Conclusion
            </h3>
            <p className="whitespace-pre-line text-neutral-300 italic leading-relaxed">
              {blog.conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}