import client from "./client";
export enum Status {
  Available = "available",
  Renting = "renting",
  Charging = "charging",
}

export interface Boat {
  id: string;
  name: string;
  charge: number;
  location: number;
  status: Status;
}

const getBoats = async (): Promise<Boat[]> => {
  const response = await client.get("/boats");
  return response.data;
};
export default getBoats;
