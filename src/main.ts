import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true
  }));  
  app.enableCors({
    origin: 'http://localhost:4200', // Your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
   // Apply Morgan middleware
   app.use(morgan('combined'));
  await app.listen(3000);
}
bootstrap();
