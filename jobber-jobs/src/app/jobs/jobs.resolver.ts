import { Args,Mutation, Query } from "@nestjs/graphql";
import { Resolver } from "@nestjs/graphql";
import { JobModel } from "./models/job.model";
import { JobService } from "./job.service";
import { ExceuteJobInput } from "./dto/execute-job";

@Resolver()
export class JobsResolver{
    constructor(private readonly jobsService :JobService){}
    @Query(()=>[JobModel],{name:'jobs'})
    async getJobs(){
        return this.jobsService.getJobs()
    }

    @Mutation(()=>JobModel)
    async executeJob(@Args('executeJobInput')executeJobInput:ExceuteJobInput){
        return this.jobsService.executeJob(executeJobInput.name);
    }
}

