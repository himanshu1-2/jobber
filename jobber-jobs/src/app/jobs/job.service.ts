import { DiscoveredClassWithMeta, DiscoveryService } from "@golevelup/nestjs-discovery";
import { BadRequestException, Injectable, InternalServerErrorException, OnModuleInit } from "@nestjs/common";
import { JOB_METADATA_KEY } from "../decorators/job.decorator";
import { AbstractJob } from "./abstract.job";
import { JobMeta } from "../interfaces/job-metadata.interface";
import { FibonacciJob } from "./fibonacci/fibonacci.job";
@Injectable()
export class JobService implements OnModuleInit{
    private  jobs:DiscoveredClassWithMeta<JobMeta>[]=[];
    constructor(private readonly discoveryService:DiscoveryService){
     
  }
  async onModuleInit() {
      this.jobs = await  this.discoveryService.providersWithMetaAtKey<JobMeta>(JOB_METADATA_KEY)
      
  }
  getJobs(){
    return this.jobs.map((job)=>job.meta)
  }
  async executeJob(name:string,data:object){
     const job = this.jobs.find(job=>job.meta.name===name)
     if(!(job.discoveredClass.instance instanceof AbstractJob)){
        throw new InternalServerErrorException('job is not instance of abstract job')
     } 
     if(!job){
         throw new BadRequestException(`Job ${name} does not exist`)
       }
       await job.discoveredClass.instance.execute(data,job.meta.name)
       return job.meta
  }
}