import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  findAll(@Res() response) {
    response.status(200).send('This action returns all brands');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return #${id} brand`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} brand`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} brand`;
  }
}
