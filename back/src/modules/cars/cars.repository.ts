import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarsFilterDto, NewCarDto, UpdateCarDto } from 'src/dtos/Car.dto';
import { Car } from 'src/entities/Car.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FilesService } from '../files/files.service';

@Injectable()
export class CarsRepository {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
    private readonly filesService: FilesService
  ) {}

  async getAllCars(
    page: number,
    limit: number,
  ): Promise<{ data: Car[]; total: number }> {
    const [data, total] = await this.carsRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return { data, total };
  }

  async getCarsByFilters(
    page: number,
    limit: number,
    filters: CarsFilterDto,
  ): Promise<{ data: Car[]; total: number }> {
    const queryBuilder = this.carsRepository.createQueryBuilder('car');

    if (filters.brand) {
      queryBuilder.andWhere('car.brand = :brand', { brand: filters.brand });
    }

    if (filters.year) {
      queryBuilder.andWhere('car.year = :year', { year: filters.year });
    }
    if (filters.seatingCapacity) {
      queryBuilder.andWhere('car.seatingCapacity = :seatingCapacity', {
        seatingCapacity: filters.seatingCapacity,
      });
    }
    if (filters.doorsNumber) {
      queryBuilder.andWhere('car.doorsNumber = :doorsNumber', {
        doorsNumber: filters.doorsNumber,
      });
    }
    if (filters.fuelType) {
      queryBuilder.andWhere('car.fuelType = :fuelType', {
        fuelType: filters.fuelType,
      });
    }
    if (filters.transmissionType) {
      queryBuilder.andWhere('car.transmissionType = :transmissionType', {
        transmissionType: filters.transmissionType,
      });
    }
    if (filters.minPrice) {
      queryBuilder.andWhere('car.price >= :minPrice', {
        minPrice: filters.minPrice,
      });
    }

    if (filters.maxPrice) {
      queryBuilder.andWhere('car.price <= :maxPrice', {
        maxPrice: filters.maxPrice,
      });
    }

    const [data, total] = await queryBuilder
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { data, total };
  }

  getCar(id: string): Promise<Car> {
    return this.carsRepository.findOneBy({ id });
  }

  async createCar(car: NewCarDto, image: Express.Multer.File): Promise<Car> {
    const imageUrl = await this.filesService.uploadImage(image); 
  
    const newCar = { 
      ...car, 
      image: imageUrl
    };
  
    return this.carsRepository.save(newCar);
  }

  async updateCar(id: string, car: UpdateCarDto, image: Express.Multer.File): Promise<UpdateResult> {
    const imageUrl = await this.filesService.uploadImage(image);

    const updatedCar = {
      ...car,
      image: imageUrl
    }

    return this.carsRepository.update(id, updatedCar);
  }

  deleteCar(id: string): Promise<DeleteResult> {
    return this.carsRepository.delete(id);
  }
}
