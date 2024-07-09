import { Injectable, NotFoundException } from '@nestjs/common';
import { CarsRepository } from './cars.repository';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CarsFilterDto, NewCarDto, UpdateCarDto } from 'src/dtos/Car.dto';
import { Car } from 'src/entities/Car.entity';

@Injectable()
export class CarsService {
  constructor(private readonly carsRepository: CarsRepository) {}
  async getCars(page: number, limit: number, filters?: CarsFilterDto) {
    let carsFound: { data: Car[]; total: number };
    if (filters) {
      carsFound = await this.carsRepository.getCarsByFilters(
        page,
        limit,
        filters,
      );
    } else {
      carsFound = await this.carsRepository.getAllCars(page, limit);
    }
    if (carsFound.data.length === 0) {
      throw new NotFoundException('Cars not found');
    }
    return carsFound;
  }
  async getCar(id: string): Promise<Car> {
    const carFound = await this.carsRepository.getCar(id);
    if (!carFound) {
      throw new NotFoundException('Car not found');
    }
    return carFound;
  }
  async createCar(car: NewCarDto): Promise<Car> {
    return this.carsRepository.createCar(car);
  }
  async updateCar(id: string, car: UpdateCarDto): Promise<UpdateResult> {
    const result = await this.carsRepository.updateCar(id, car);
    if (result.affected === 0) {
      throw new NotFoundException('Car not found');
    }
    return result;
  }
  async deleteCar(id: string): Promise<DeleteResult> {
    const result = await this.carsRepository.deleteCar(id);
    if (result.affected === 0) {
      throw new NotFoundException('Car not found');
    }
    return result;
  }
}
