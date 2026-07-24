import Hero from '../../components/common/hero/Hero';
import ProjectGrid from './ProjectGrid';
import { Project, Category } from '../../types';

interface ProjectsPageProps {
    projects: Project[];
    selectedCategory: Category;
    onSelectCategory: (category: Category) => void;
    onProjectClick: (project: Project) => void;
    isGridLoading: boolean;
}

export default function ProjectsPage({
    projects,
    selectedCategory,
    onSelectCategory,
    onProjectClick,
    isGridLoading,
}: ProjectsPageProps) {
    return (
        <>
            <Hero
                title="Our Projects"
                subtitle="From coming up with creative concepts to delivering outstanding campaigns, we're your friendly, fun-loving crew ready to turn your project dreams into reality!"
                breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
            />
            <ProjectGrid
                projects={projects}
                selectedCategory={selectedCategory}
                onSelectCategory={onSelectCategory}
                onProjectClick={onProjectClick}
                isLoading={isGridLoading}
            />
        </>
    );
}
