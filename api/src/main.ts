import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

import { AllExceptionsFilter } from './app/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
