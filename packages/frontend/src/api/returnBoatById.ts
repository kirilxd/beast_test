import client from './client';
import { Boat } from './types';

const returnBoatById = async (id?: string): Promise<Boat> => {
  const response = await client.patch(`/boats/return/${id}`);
  return response.data;
};
export default returnBoatById;