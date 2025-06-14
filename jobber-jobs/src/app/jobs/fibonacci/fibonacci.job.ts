import { PulsarClient } from "@jobber/pulsar";
import { Job } from "../../decorators/job.decorator";
import { AbstractJob } from "../abstract.job";
import {FibonacciData} from '../fibonacci/fibonacci.data'

@Job({
    name:'Fibonacci',
    description:'Generate a fibonacci sequence'
})
export class FibonacciJob extends AbstractJob<FibonacciData>{
  protected messageClass= FibonacciData
    constructor( pulsarClient:PulsarClient){
    super(pulsarClient)
 }
}