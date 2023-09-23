import { axiosApi } from '../config';
import { Band } from '../types';

async function fetch(search?: string): Promise<Array<Band>> {
  const result = await axiosApi.get('/bands');
  let finalData: Array<Band> = result.data;
  if (search) {
    finalData = finalData.filter((band) =>
      band.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  return finalData;
}

export default {
  fetch,
};
