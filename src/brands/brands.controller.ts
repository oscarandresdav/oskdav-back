import { Controller, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  findAll() {
    return 'This action returns all brands';
  }
}
