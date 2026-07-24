import { useState, useEffect } from 'react';
import { blogsData, BlogPost } from '../../data/blogs';
import Hero from '../../components/common/hero/Hero';
import BlogsGrid from './BlogsGrid';

interface BlogsPageProps {
  onSelectBlog: (blog: BlogPost) => void;
  onCollaborateClick: () => void;
  onShowMessage: (msg: string, type: 'info' | 'success') => void;
  onCollaborateWithContext?: (context: string) => void;
}

export default function BlogsPage({ onSelectBlog, onCollaborateClick, onShowMessage, onCollaborateWithContext }: BlogsPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  // Trigger grid skeleton loading when selected category changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const filteredBlogs = activeCategory === 'All'
    ? blogsData
    : blogsData.filter(b => b.category.toLowerCase() === activeCategory.toLowerCase());

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    onShowMessage(`Filtering articles by category: ${cat}`, 'info');
  };

  return (
    <>
      <Hero
        backgroundImage="/src/assets/images/howrah-bridge-dusk.jpg"
        title="Blogs & Stories"
        subtitle="Discover the narratives behind our lens — from set production diaries and artist spotlights to cinematography deep-dives and cinematic philosophy."
      />
      <BlogsGrid
        filteredBlogs={filteredBlogs}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        isLoading={isLoading}
        onSelectBlog={onSelectBlog}
        onCollaborateClick={onCollaborateClick}
        onShowMessage={onShowMessage}
        onCollaborateWithContext={onCollaborateWithContext}
      />
    </>
  );
}