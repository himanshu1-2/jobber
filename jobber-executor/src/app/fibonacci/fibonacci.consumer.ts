import { Injectable, OnModuleInit } from "@nestjs/common";
import {PulsarClient, PulsarConsumer} from '@jobber/pulsar'
import {iterate} from 'fibonacci'
import { FibonacciData } from "./fibonacci-data.interface";
@Injectable()
export class FibonacciConsumer extends PulsarConsumer<FibonacciData> implements OnModuleInit{
    constructor(pulsarClient:PulsarClient){
        super(pulsarClient,'Fibonacci')
    }
    protected async onMessage(dataa: FibonacciData): Promise<void> {
        const result = iterate(dataa.iterations)
        this.logger.log(result)
    }
}