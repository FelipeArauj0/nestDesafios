import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove campos extras
      forbidNonWhitelisted: true, // erro se mandar campo que não existe
      transform: false, // tenta transformar os tipos de dados params e DTOs
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
