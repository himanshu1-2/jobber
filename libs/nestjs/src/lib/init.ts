/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';


export async function init(app:INestApplication) {
  const globalPrefix = 'api';
  app.useGlobalPipes(new ValidationPipe({whitelist:true}))
  app.setGlobalPrefix(globalPrefix);
  app.use(cookieParser())
  const port = app.get(ConfigService) .getOrThrow("PORT")|| 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}




