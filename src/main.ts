import { NestFactory } from '@nestjs/core';
import { AppModule } from './jobs.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Jobs scheduling service - exercise')
    .setVersion('1.0')
    .addTag('jobs')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('jobs/swagger', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.enableCors();

  console.log(process.env.PORT);

  await app.listen(8080); //usually in the env, but for the exercise it'll be publicized
}
bootstrap();
