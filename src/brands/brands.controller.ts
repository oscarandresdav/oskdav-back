import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  findAll(@Res() response) {
    response.status(200).send('This action returns all brands');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return #${id} identification`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }
}
