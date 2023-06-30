import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Boat } from './boats.entity';
import { BoatsService } from './boats.service';
import { BoatsController } from './boats.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Boat])],
  providers: [BoatsService],
  controllers: [BoatsController],
})
export class BoatsModule {}
