import { Module } from '@nestjs/common';
import { PulsarClient } from './pulsar.client';

@Module({
  controllers: [],
  providers: [PulsarModule],
  exports: [PulsarClient],
})
export class PulsarModule {}
