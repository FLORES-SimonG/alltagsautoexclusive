import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { CloudinaryConfig } from 'src/config/cloudinary.config';

@Module({
  controllers: [FilesController],
  providers: [FilesService, CloudinaryConfig],
})
export class FilesModule {}
