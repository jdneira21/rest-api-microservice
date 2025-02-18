import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3001);

  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 4001,
      }
    },
  );
  await microservice.listen();
}
bootstrap();
