import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { JobModule } from './jobs/jobs.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LoggerModule } from '@jobber/nestjs';
@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),LoggerModule, JobModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,

    autoSchemaFile: true,
  }),],
  controllers: [],
  providers: [],
})
export class AppModule { }
