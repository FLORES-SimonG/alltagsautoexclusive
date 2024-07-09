import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  fullName: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  password: string;

  @Column({ type: 'varchar', nullable: false })
  fullAddress: string;

  @Column({ type: 'varchar', nullable: false })
  phone: string;

  @Column({ type: 'varchar', nullable: false })
  dni: string;

  @Column({ type: 'varchar', nullable: false })
  birthDate: string;

  @Column({ type: 'boolean', nullable: false })
  isSubscribed: boolean;

  /* @ManyToMany(() => Role, { eager: true })
    @JoinTable()
    role: Role[]; */
}
