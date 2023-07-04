import client from "./client";
import { Boat } from './types';

const getBoats = async (): Promise<Boat[]> => {
  const response = await client.get("/boats");
  return response.data;
};
export default getBoats;
