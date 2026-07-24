import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { BlogPost, blogsData } from '../../data/blogs';
import Header from './Header';
import Content from './Content';
import Similar from './Similar';

interface BlogDetailPageProps {
  blog: BlogPost;
  onBack: () => void;
  onSelectBlog: (blog: BlogPost) => void;
  onShowMessage: (msg: string, type: 'info' | 'success') => void;
  onCollaborateClick?: () => void;
}

export default function BlogDetailPage({ blog, onBack, onSelectBlog, onShowMessage, onCollaborateClick }: BlogDetailPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top on mount or when blog changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [blog]);

  // Find other similar blog posts (excluding current)
  const similarBlogs = blogsData
    .filter(b => b.id !== blog.id)
    .slice(0, 2);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-bg-dark text-neutral-200 pb-0 overflow-x-clip antialiased"
    >
      <Header blog={blog} onBack={onBack} />

      <Content blog={blog} />

      <Similar
        similarBlogs={similarBlogs}
        onSelectBlog={onSelectBlog}
        onShowMessage={onShowMessage}
        onBack={onBack}
      />

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
    </div>
  );
}