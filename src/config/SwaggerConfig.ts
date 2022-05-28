import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function SwaggerConfig(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Desafio Tech API')
    .setDescription('Endpoints desafio tech')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docApi', app, document);
}
