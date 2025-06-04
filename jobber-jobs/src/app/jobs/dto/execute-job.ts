import { Field,InputType } from "@nestjs/graphql"
import {IsNotEmpty} from 'class-validator'

@InputType()
export class ExceuteJobInput{
    @Field()
    @IsNotEmpty()
    name:string
}