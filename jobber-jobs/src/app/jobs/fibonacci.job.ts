import { Job } from "../decorators/job.decorator";
import { AbstractJob } from "./abstract.job";


@Job({
    name:'Fibonacci',
    description:'Generate a fibonacci sequence'
})
export class FibonacciJob extends AbstractJob{

}