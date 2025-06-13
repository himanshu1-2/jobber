import { Module } from '@nestjs/common';
import { JobsModule } from './job.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [JobsModule,ConfigModule.forRoot({isGlobal:true})],
  
})
export class AppModule {}
