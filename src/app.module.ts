import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsController } from './brands/brands.controller';

@Module({
  imports: [],
  controllers: [AppController, BrandsController],
  providers: [AppService],
})
export class AppModule {}
