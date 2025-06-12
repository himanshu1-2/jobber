import { Producer } from "pulsar-client";
import {PulsarClient} from '@jobber/pulsar'
export abstract class AbstractJob<T> {
  private producer:Producer; 
  constructor(private readonly pulsarClient:PulsarClient){}
  async execute(data:T,job:string,name:string){
     if(!this.producer){
     
     }
     await this.producer.send({data:Buffer.from(JSON.stringify(data))})
   }
   
}