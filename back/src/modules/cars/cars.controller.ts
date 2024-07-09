import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CarsFilterDto, NewCarDto, UpdateCarDto } from 'src/dtos/Car.dto';
import { Car } from 'src/entities/Car.entity';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getCars(@Query() Allfilters: CarsFilterDto) {
    const { page = 1, limit = 5, ...filters } = Allfilters;
    return this.carsService.getCars(Number(page), Number(limit), filters);
  }

  @Get(':id')
  getCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.getCar(id);
  }

  @Post()
  createCar(@Body() car: NewCarDto): Promise<Car> {
    return this.carsService.createCar(car);
  }

  @Put(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() car: UpdateCarDto,
  ): Promise<UpdateResult> {
    return this.carsService.updateCar(id, car);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string): Promise<DeleteResult> {
    return this.carsService.deleteCar(id);
  }
}
