import { axiosApi } from '../config';
import { Album, Id } from '../types';

async function getAlbumById(id: Id): Promise<Album> {
  const result = await axiosApi.get(`/albums/${id}`);
  return result.data;
}

async function getAlbumsById(ids: Array<Id>): Promise<Array<Album>> {
  const albums: Array<Album> = await Promise.all(
    ids.map(async (id) => {
      const album = await getAlbumById(id);
      return album;
    })
  );
  return albums;
}

export default {
  getAlbumById,
  getAlbumsById,
};
