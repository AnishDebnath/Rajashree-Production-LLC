import { ProjectCaseStudy } from '../../types';

interface ProjectCaseStudySectionProps {
    study: ProjectCaseStudy;
}

export default function ProjectCaseStudySection({ study }: ProjectCaseStudySectionProps) {
    return (
        <div className="max-w-3xl mx-auto w-full flex flex-col gap-8 text-left text-neutral-300 font-sans text-sm sm:text-base leading-relaxed font-light mb-20">

            {/* Objectives */}
            <div className="flex flex-col gap-4">
                <h4 className="font-display font-bold text-lg text-white">Project Objectives:</h4>
                <ol className="list-decimal pl-5 flex flex-col gap-3 text-neutral-400">
                    {study.objectives.map((obj, i) => (
                        <li key={i} className="pl-1">
                            {obj}
                        </li>
                    ))}
                </ol>
            </div>

            {/* Scope */}
            <div className="flex flex-col gap-4 mt-4">
                <h4 className="font-display font-bold text-lg text-white">Project Scope:</h4>

                {study.scopes.map((scope, idx) => (
                    <div key={idx} className="flex flex-col gap-3 mt-2">
                        <h5 className="font-sans font-bold text-sm text-neutral-200 uppercase tracking-wider">{scope.title}:</h5>
                        <ul className="list-disc pl-5 flex flex-col gap-2 text-neutral-400">
                            {scope.items.map((item, i) => (
                                <li key={i} className="pl-1">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Results */}
            <div className="flex flex-col gap-3 mt-4">
                <h4 className="font-display font-bold text-lg text-white">Results:</h4>
                <p className="text-neutral-400">{study.results}</p>
            </div>

            {/* Lessons Learned */}
            <div className="flex flex-col gap-4 mt-4">
                <h4 className="font-display font-bold text-lg text-white">Lessons Learned:</h4>
                <ul className="list-disc pl-5 flex flex-col gap-3 text-neutral-400">
                    {study.lessons.map((lesson, i) => (
                        <li key={i} className="pl-1">
                            {lesson}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Concluding paragraph */}
            <p className="text-neutral-400 mt-4 italic">
                {study.conclusion}
            </p>

        </div>
    );
}
