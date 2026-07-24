import { artistsData } from '../../data/artists';
import type { Artist } from '../../data/artists';
import ArtistCard from '../../components/product/ArtistCard';

interface ProjectCastingSectionProps {
    extendedList: any[];
    visibleCount: number;
    activeIndex: number;
    isTransitioning: boolean;
    setIsPaused: (v: boolean) => void;
    onSelectArtist?: (artist: any) => void;
    onShowMessage: (msg: string, type: 'info' | 'success') => void;
}

export default function ProjectCastingSection({
    extendedList,
    visibleCount,
    activeIndex,
    isTransitioning,
    setIsPaused,
    onSelectArtist,
    onShowMessage
}: ProjectCastingSectionProps) {
    return (
        <div className="max-w-5xl mx-auto w-full my-20 px-6 md:px-12">
            <div className="text-left mb-10 flex flex-col items-start w-full">
                <span className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] text-gold font-bold uppercase mb-2 block">
                    COLLABORATORS
                </span>
                <div className="flex items-center gap-6 w-full">
                    <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight whitespace-nowrap">
                        Casting & Creative Team
                    </h2>
                    <div className="grow h-px bg-white/10" />
                </div>
            </div>

            <div className="relative w-full overflow-hidden py-6">
                <div
                    className="flex"
                    style={{
                        transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
                        transition: isTransitioning ? 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {extendedList.map((member, idx) => {
                        const artistForCard: Artist = {
                            id: member.id || `member-${idx}`,
                            name: member.name || '',
                            role: member.role || '',
                            avatar: member.avatar || '',
                            bio: member.bio || '',
                            specialties: member.specialties || [],
                            experience: member.experience || '',
                            featuredWorks: member.featuredWorks || [],
                            gallery: member.gallery || [],
                        };

                        return (
                            <div
                                key={idx}
                                className="shrink-0 px-2.5 md:px-3 select-none flex justify-center"
                                style={{ width: `${100 / visibleCount}%` }}
                            >
                                <ArtistCard
                                    artist={artistForCard}
                                    onSelect={() => onSelectArtist?.(artistForCard)}
                                    onShowMessage={onShowMessage}
                                    onCardClick={() => {
                                        if (member.artistObj) {
                                            onSelectArtist?.(member.artistObj);
                                            onShowMessage(`Opening creative profile: ${member.name}`, 'info');
                                        } else {
                                            const art = artistsData.find(a => a.name.toLowerCase().includes(member.name.toLowerCase()));
                                            if (art) {
                                                onSelectArtist?.(art);
                                                onShowMessage(`Opening creative profile: ${art.name}`, 'info');
                                            } else {
                                                onShowMessage(`Viewing details for ${member.name}`, 'info');
                                            }
                                        }
                                    }}
                                    variant="grid"
                                    enableLayout={false}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
