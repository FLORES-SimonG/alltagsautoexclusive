import { Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { FilesService } from "./files.service";

@ApiTags('Files')
@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @Post('uploadImage')
    @ApiOperation({ summary: 'Sube una imagen', description: 'Este endpoint carga una imagen y la nube y retorna su URL.' })
    @UseInterceptors(FileInterceptor('image'))
    uploadImage(@UploadedFile(
        new ParseFilePipe({
            validators: [
                new MaxFileSizeValidator({ maxSize: 1000000, message: 'El archivo debe ser menor a 1mb' }),
                new FileTypeValidator({ fileType: /(jpg|jpeg|png|webp)$/ })
            ]
        })
    ) file: Express.Multer.File ) {
        return this.filesService.uploadImage(file);
    }
}