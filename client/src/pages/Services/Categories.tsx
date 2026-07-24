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
        <section className="relative py-24 px-4 sm:px-6 md:px-12" id="categories-section">
            <div className="max-w-6xl mx-auto bg-neutral-950/40 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-14 space-y-20 shadow-2xl">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                        We are your experts in these categories
                    </h2>
                    <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                        Our creative toolbox overflows with video possibilities! From captivating stories to informative animations, we craft videos that fit every need.
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