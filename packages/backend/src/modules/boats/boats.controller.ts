import { Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { BoatsService } from './boats.service';

@Controller('boats')
export class BoatsController {
  constructor(private boatsService: BoatsService) {}

  @Get()
  findAll() {
    return this.boatsService.findAll();
  }
  //
  // @Post()
  // create(
  //   @Body(roledValidationPipe.create)
  //   createCwGarageBranchPackageDto: CreateCwGarageBranchPackageDto,
  // ) {
  //   return this.cwGarageBranchPackagesService.create(
  //     createCwGarageBranchPackageDto,
  //   );
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: number) {
  //   return this.cwGarageBranchPackagesService.findOne(id);
  // }
  //
  @Patch('rent/:id')
  rent(@Param('id', new ParseIntPipe()) id: number) {
    return this.boatsService.rent(id);
  }

  @Patch('return/:id')
  return(@Param('id', new ParseIntPipe()) id: number) {
    return this.boatsService.return(id);
  }
  //
  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   return this.cwGarageBranchPackagesService.remove(id);
  // }
}
