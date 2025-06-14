/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import cookieParser from 'cookie-parser';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import {AUTH_PACKAGE_NAME} from 'types/proto/auth'
import { join } from 'path';
import { init } from '@jobber/nestjs';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await init(app)
  app.connectMicroservice<GrpcOptions>({
    transport:Transport.GRPC,
    options:{
      package:AUTH_PACKAGE_NAME,
      protoPath:join(__dirname,'proto/auth.proto')
    }
  })
  await app.startAllMicroservices()
  
}

bootstrap();
