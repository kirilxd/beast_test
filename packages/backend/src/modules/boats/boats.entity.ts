import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from './status';

@Entity()
export class Boat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.Available,
  })
  status: Status;

  @Column()
  charge: number;

  @Column()
  location: number;
}
