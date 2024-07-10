import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Cars' })
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  seatingCapacity: number;

  @Column()
  doorsNumber: number;

  @Column()
  fuelType: string;

  @Column()
  transmissionType: string;

  @Column()
  price: number;

  @Column()
  image: string;
}
