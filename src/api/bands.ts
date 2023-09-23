import { axiosApi } from '../config';
import { Band } from '../types';

async function fetch(): Promise<Array<Band>> {
  const result = await axiosApi.get('/bands');
  return result.data;
}

export default {
  fetch,
};
