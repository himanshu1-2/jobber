import { Module } from "@nestjs/common";
import { FibonacciJob } from "./fibonacci.job";
import { DiscoveryModule } from "@golevelup/nestjs-discovery"
import { JobService } from "./job.service";

@Module({
    imports:[DiscoveryModule],
    providers:[FibonacciJob,JobService]
})
export class JobModule{}