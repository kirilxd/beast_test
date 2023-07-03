import client from './client';
import { Boat } from './getBoats';

const getBoatById = async (id?: string): Promise<Boat> => {
  const response = await client.get(`/boats/${id}`);
  return response.data;
};
export default getBoatById;