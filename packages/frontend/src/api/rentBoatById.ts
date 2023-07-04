import client from './client';
import { Boat } from './types';

const rentBoatById = async (id?: string): Promise<Boat> => {
  const response = await client.patch(`/boats/rent/${id}`);
  return response.data;
};
export default rentBoatById;