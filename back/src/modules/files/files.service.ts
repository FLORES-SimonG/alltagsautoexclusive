import { Injectable } from "@nestjs/common";
import { v2 } from 'cloudinary';
const toStream = require("buffer-to-stream");

Injectable()
export class FilesService {
    constructor() {}
    
    async uploadImage(file: Express.Multer.File): Promise<string> {
        return new Promise((resolve, reject) => {
            const upload = v2.uploader.upload_stream(
                {resource_type: 'auto'},
                (error, result) => {
                    if(error) reject(error);
                    resolve(result.url);
                }
            )
            toStream(file.buffer).pipe(upload);
        })
    }
}