import { Module } from '@nestjs/common';
import { JobsModule } from './job.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from '@jobber/nestjs';


@Module({
  imports: [JobsModule,LoggerModule,ConfigModule.forRoot({isGlobal:true})],
  
})
export class AppModule {}
