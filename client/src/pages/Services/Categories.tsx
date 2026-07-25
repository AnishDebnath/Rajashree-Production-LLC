import { CategoryInteractiveCard } from './CategoryInteractiveCard';
import { categoriesData } from '../../data/services';

interface CategoriesProps {
    globalStep: number;
    onCollaborateClick: () => void;
    onShowMessage: (msg: string, type: 'info' | 'success') => void;
    onCollaborateWithContext?: (projectName: string) => void;
}

export default function Categories({ globalStep, onCollaborateClick, onShowMessage, onCollaborateWithContext }: CategoriesProps) {
    return (
        <section className="relative py-16 px-4 sm:px-6 md:px-12" id="categories-section">
            <div className="max-w-6xl mx-auto bg-neutral-950/40 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-14 space-y-20 shadow-2xl">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-section-heading">
                        Our Production Services
                    </h2>
                    <div className="w-16 h-[1.5px] bg-gold mx-auto mt-6" />
                    <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                        We offer end-to-end production across formats — feature films, commercials, corporate videos, documentaries, music videos, and digital content. Each service is delivered by specialists with the right equipment and experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-y-24 max-w-3xl mx-auto">
                    {categoriesData.map((cat, idx) => (
                        <CategoryInteractiveCard
                            key={idx}
                            cat={cat}
                            catIndex={idx}
                            globalStep={globalStep}
                            onCollaborateWithContext={onCollaborateWithContext}
                            onCollaborateClick={onCollaborateClick}
                            onShowMessage={onShowMessage}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}