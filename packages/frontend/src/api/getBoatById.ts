import client from './client';
import { Boat } from './getBoats';

const getBoadById = async (id: number): Promise<Boat> => {
  const response = await client.get(`/boats/${id}`);
  return response.data;
};
export default getBoadById;