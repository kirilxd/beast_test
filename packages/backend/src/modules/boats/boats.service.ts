import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Boat } from './boats.entity';
import { Status } from './status';

const RENT_CHARGE_THRESHOLD = 80;

@Injectable()
export class BoatsService {
  constructor(
    @InjectRepository(Boat)
    private boatsRepository: Repository<Boat>,
  ) {}

  findAll(): Promise<Boat[]> {
    return this.boatsRepository.find();
  }

  findOne(id: number): Promise<Boat | null> {
    return this.boatsRepository.findOneBy({ id });
  }

  async rent(id: number): Promise<Boat | null> {
    const boatToRent = await this.boatsRepository.findOneBy({ id });
    boatToRent.status = Status.Renting;
    await this.boatsRepository.save(boatToRent);
    return boatToRent;
  }

  async return(id: number): Promise<Boat | null> {
    const boatToRent = await this.boatsRepository.findOneBy({ id });
    boatToRent.status = Status.Charging;
    await this.boatsRepository.save(boatToRent);
    return boatToRent;
  }

  async remove(id: number): Promise<void> {
    await this.boatsRepository.delete(id);
  }
}
