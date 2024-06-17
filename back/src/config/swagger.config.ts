import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from "@nestjs/common";

export function setupSwagger(app: INestApplication) {
    const configDocumentacion = new DocumentBuilder()
        .setTitle('Alltagsauto.ch')
        .setDescription('Documentación de la API de Alltagsauto.')
        .addBearerAuth()
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, configDocumentacion);
    SwaggerModule.setup('api', app, document);
}