import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CarsFilterDto, NewCarDto, UpdateCarDto } from 'src/dtos/Car.dto';
import { Car } from 'src/entities/Car.entity';
import { FileInterceptor } from '@nestjs/platform-express';

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
  @UseInterceptors(FileInterceptor('image'))
  createCar(@Body() car: NewCarDto,
  @UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1000000, message: 'El archivo debe ser menor a 1mb' }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png|webp)$/ })
    ]
    })
  ) image: Express.Multer.File ): Promise<Car> {
    return this.carsService.createCar(car, image);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() car: UpdateCarDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000000, message: 'El archivo debe ser menor a 1mb' }),
          new FileTypeValidator({ fileType: /(jpg|jpeg|png|webp)$/ })
      ]
      })
    ) image: Express.Multer.File
  ): Promise<UpdateResult> {
    return this.carsService.updateCar(id, car, image);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string): Promise<DeleteResult> {
    return this.carsService.deleteCar(id);
  }
}
