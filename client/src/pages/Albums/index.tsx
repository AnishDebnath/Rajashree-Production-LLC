import { Album } from '../../data/albums';
import Hero from '../../components/common/hero/Hero';
import AlbumsGrid from './AlbumsGrid';

interface AlbumsPageProps {
  onCollaborateClick: () => void;
  onShowMessage: (msg: string, type: 'info' | 'success') => void;
  onSelectAlbum: (album: Album) => void;
}

export default function AlbumsPage({ onSelectAlbum }: AlbumsPageProps) {
  return (
    <>
      <Hero
        backgroundImage="/src/assets/images/durga-puja-cinematic.jpg"
        title="Photo Albums"
        subtitle="Explore our portfolio of compelling photo stories in the albums, showcasing our expertise in landscape, automotive, documentary, and editorial photography."
      />
      <AlbumsGrid onSelectAlbum={onSelectAlbum} />
    </>
  );
}
