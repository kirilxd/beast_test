import { Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { BoatsService } from './boats.service';

@Controller('boats')
export class BoatsController {
  constructor(private boatsService: BoatsService) {}

  @Get()
  findAll() {
    return this.boatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.boatsService.findOne(id);
  }

  @Patch('rent/:id')
  rent(@Param('id', new ParseIntPipe()) id: number) {
    return this.boatsService.rent(id);
  }

  @Patch('return/:id')
  return(@Param('id', new ParseIntPipe()) id: number) {
    return this.boatsService.return(id);
  }
}
