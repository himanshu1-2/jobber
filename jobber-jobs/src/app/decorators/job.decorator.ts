import { applyDecorators, Injectable, SetMetadata } from "@nestjs/common";
import { JobMeta } from "../interfaces/job-metadata.interface";

export const JOB_METADATA_KEY='job_meta'
export const Job=(meta:JobMeta)=>applyDecorators(
    SetMetadata(JOB_METADATA_KEY,meta),Injectable()
)