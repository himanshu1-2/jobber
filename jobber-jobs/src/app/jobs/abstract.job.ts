import { Producer } from "pulsar-client";
import {PulsarClient} from '@jobber/pulsar'
import { serialize } from "@jobber/pulsar";
export abstract class AbstractJob<T> {
  private producer:Producer; 
  constructor(private readonly pulsarClient:PulsarClient){}
  async execute(data:T,name:string){
     if(!this.producer){
     
     }
     await this.producer.send({data:serialize(data)})
   }
   private async va
}