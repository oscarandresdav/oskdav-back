import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  findAll() {
    return 'This action returns all brands';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return #${id} identification`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
