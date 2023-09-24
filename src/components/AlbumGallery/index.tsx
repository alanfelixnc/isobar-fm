import { Album } from '../../types';
import './styles.css';

type AlbumGalleryProps = {
  albums: Array<Album>;
};

function AlbumGallery({ albums }: AlbumGalleryProps): JSX.Element {
  return (
    <div className="albumGallery">
      {albums.map((album) => (
        <div key={album.id} className="item">
          <img src={album.image} />
          <div className="overlay" />
          <p>{album.name}</p>
        </div>
      ))}
    </div>
  );
}

export default AlbumGallery;
