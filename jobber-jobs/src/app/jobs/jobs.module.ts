import { Module } from "@nestjs/common";
import { FibonacciJob } from "./fibonacci.job";
import { DiscoveryModule } from "@golevelup/nestjs-discovery"
import { JobService } from "./job.service";
import { JobsResolver } from "./jobs.resolver";

@Module({
    imports:[DiscoveryModule],
    providers:[FibonacciJob,JobService,JobsResolver]
})
export class JobModule{}