import { axiosApi } from '../config';
import { Band } from '../types';

async function fetch(search?: string, orderBy?: string): Promise<Array<Band>> {
  const result = await axiosApi.get('/bands');
  let finalData: Array<Band> = result.data;
  if (search) {
    finalData = finalData.filter((band) =>
      band.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  switch (orderBy) {
    case 'name':
      finalData = finalData.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'popularity':
      finalData = finalData.sort((a, b) => b.numPlays - a.numPlays);
      break;
  }
  return finalData;
}

export default {
  fetch,
};
