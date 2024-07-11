import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class NewCarDto {
  @IsNotEmpty({ message: 'The brand is required' })
  @IsString({ message: 'The brand must be a text string' })
  brand: string;

  @IsNotEmpty({ message: 'The model is required' })
  @IsString({ message: 'The model must be a text string' })
  model: string;

  @IsNotEmpty({ message: 'The year is required' })
  year: number;

  @IsNotEmpty({ message: 'The seating capacity is required' })
  seatingCapacity: number;

  @IsNotEmpty({ message: 'The doors number is required' })
  doorsNumber: number;

  @IsNotEmpty({ message: 'The fuel type is required' })
  @IsString({ message: 'The fuel type must be a text string' })
  fuelType: string;

  @IsNotEmpty({ message: 'The transmission type is required' })
  @IsString({ message: 'The transmission type must be a text string' })
  transmissionType: string;

  @IsNotEmpty({ message: 'The price is required' })
  price: number;
}

export class UpdateCarDto extends PartialType(NewCarDto) {}

export class CarsFilterDto {
  @IsOptional()
  page?: number;

  @IsOptional()
  limit?: number;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  year?: number;

  @IsOptional()
  seatingCapacity?: number;

  @IsOptional()
  doorsNumber?: number;

  @IsOptional()
  @IsString()
  fuelType?: string;

  @IsOptional()
  @IsString()
  transmissionType?: string;

  @IsOptional()
  maxPrice?: number;

  @IsOptional()
  minPrice?: number;
}
