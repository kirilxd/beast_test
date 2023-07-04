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