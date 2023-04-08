import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, OpenAPIObject, SwaggerModule} from '@nestjs/swagger';
import {INestApplication} from '@nestjs/common';
import * as path from 'path';
import {writeFileSync} from 'fs';

const bootstrapSwagger = (app: INestApplication) => {
  try {
    const config = new DocumentBuilder().setTitle('MeetingPackage').setDescription('MeetingPackage API').setVersion('1.0').build();

    const document = SwaggerModule.createDocument(app, config, { operationIdFactory: (controllerKey, methodKey) => methodKey });
    SwaggerModule.setup('/apiSwagger', app, document);
    return document;
  } catch (e) {
    console.error(e);

    return null;
  }
};

const writeOpenApiFile = (document: OpenAPIObject) => {
  const outputPath = path.resolve(process.cwd(), 'open-api.json');
  writeFileSync(outputPath, JSON.stringify(document), { encoding: 'utf8' });
  console.log(`Generated open-api spec: ${outputPath}`);
  console.log(document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const openApiDocument = bootstrapSwagger(app);

  if (openApiDocument && Boolean(process.env.IS_SWAGGER_MODE)) {
    writeOpenApiFile(openApiDocument);
    await app.close();
    return;
  }

  await app.listen(3000);
}
bootstrap();
