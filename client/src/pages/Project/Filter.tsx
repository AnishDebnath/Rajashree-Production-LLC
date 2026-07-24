import { motion } from 'motion/react';
import { Category } from '../../types';
import { projectCategories } from '../../data/projects';

interface FilterProps {
    selectedCategory: Category;
    onSelectCategory: (category: Category) => void;
}

export default function Filter({ selectedCategory, onSelectCategory }: FilterProps) {
    const categories: Category[] = projectCategories;

    return (
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-12 select-none">
            <div className="flex items-center w-full overflow-x-auto scrollbar-none py-2 gap-2 md:flex-wrap md:justify-start">
                {categories.map((category) => {
                    const isSelected = category === selectedCategory;
                    return (
                        <button
                            key={category}
                            onClick={() => onSelectCategory(category)}
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

                            <span className="relative z-10">{category}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
