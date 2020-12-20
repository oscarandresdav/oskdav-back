import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  findAll(@Query() paginationQuery) {
    const {limit, offset} = paginationQuery
    return `This action returns all brands. Limit: ${limit}, Offset: ${offset}`;
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
