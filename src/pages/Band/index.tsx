import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Album, Band, Id } from '../../types';
import { albumsApi, bandsApi } from '../../api';
import './styles.css';
import { AlbumGallery, IconButton } from '../../components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function BandPage() {
  const { id } = useParams();
  const [band, setBand] = useState<Band>();
  const [albums, setAlbums] = useState<Array<Album>>([]);

  async function getBandById(id: Id): Promise<void> {
    const data = await bandsApi.getById(id);
    setBand(data);
  }

  async function getBandAlbums(albumIds: Array<Id>): Promise<void> {
    const data = await albumsApi.getAlbumsById(albumIds);
    setAlbums(data);
  }

  useEffect(() => {
    if (id) getBandById(id);
  }, [id]);

  useEffect(() => {
    if (band) getBandAlbums(band.albums);
  }, [band]);

  return (
    <div className="bandDetails">
      <div className="topSection">
        <img className="backgroundImage" src={band?.image} />
        <div className="overlay" />
        <h1 className="name">{band?.name}</h1>
        <img className="image" src={band?.image} />
      </div>
      <div className="middleSection">
        <div className="info">
          <p>{band?.genre}</p>
          <p>{band?.numPlays.toLocaleString()} plays</p>
        </div>
        <div className="biography">
          <p>{band?.biography}</p>
          <div className="overlay" />
        </div>
        <div className="buttonExpandBiography">
          <IconButton icon={faPlus} />
        </div>
      </div>
      <div className="bottomSection">
        <h2>Álbuns</h2>
        <AlbumGallery albums={albums} />
      </div>
    </div>
  );
}

export default BandPage;
