import { OnModuleDestroy } from "@nestjs/common";
import {ConfigService} from '@nestjs/config'
import {Client, Consumer, Producer,Message} from 'pulsar-client'
export class PulsarClient implements OnModuleDestroy{
    private readonly producers:Producer[]=[];
    private readonly consumers:Consumer[]=[]
    private readonly client = new Client({
        serviceUrl:this.configService.getOrThrow<string>('PULSAR_SERVICE_URL')
    })
    constructor(private readonly configService:ConfigService){

    }
    async createProducer(topic: string) {
        const producer = await this.client.createProducer({ topic })
        this.producers.push(producer)
        return this.producers;
    }
    async createConsumer(topic:string,listener:(message:Message)=>void){
      const consumer = await this.client.subscribe({
        topic,subscription:'jobber',listener
      })
      this.consumers.push(consumer);
      return consumer
    }
    async onModuleDestroy() {
        for(const producer of this.producers){
            await producer.close()
        }
        await this.client.close()
    }
}