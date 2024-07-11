import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarsRepository } from './cars.repository';
import { Car } from 'src/entities/Car.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesService } from '../files/files.service';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  controllers: [CarsController],
  providers: [CarsService, CarsRepository, FilesService],
})
export class CarsModule {}
