import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import dbConfig from './config/db.config';
import { UsersModule } from './modules/users/users.module';
import { CarsModule } from './modules/cars/cars.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('dbConfig'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig]
    }),
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1h' },
      secret: process.env.JWT_SECRET,
    }),
    AuthModule, UsersModule, CarsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
