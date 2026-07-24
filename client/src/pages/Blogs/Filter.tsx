import { motion } from 'motion/react';
import { blogCategories } from '../../data/blogs';

interface BlogsFilterProps {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

export default function BlogsFilter({ selectedCategory, onSelectCategory }: BlogsFilterProps) {
    const categories = blogCategories;

    return (
        <div className="w-full max-w-7xl mx-auto pl-0 pr-6 md:pr-12 mb-12 select-none">
            <div className="flex items-center w-full overflow-x-auto scrollbar-none py-2 gap-2 flex-wrap justify-start">
                {categories.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => onSelectCategory(cat)}
                            className="relative px-5 py-2.5 text-[11px] font-bold tracking-wider uppercase rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
                            style={{
                                backgroundColor: isSelected ? 'transparent' : 'var(--color-surface-dark)',
                                color: isSelected ? '#ffffff' : 'var(--color-muted-text)',
                            }}
                        >
                            {isSelected && (
                                <motion.div
                                    layoutId="active-category-pill"
                                    className="absolute inset-0 bg-accent-red rounded-full"
                                    style={{ zIndex: -1 }}
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{cat}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
