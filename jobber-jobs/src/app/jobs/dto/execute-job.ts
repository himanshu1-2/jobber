import { Field,InputType } from "@nestjs/graphql"
import {IsNotEmpty, IsObject} from 'class-validator'

@InputType()
export class ExceuteJobInput{
    @Field()
    @IsNotEmpty()
    name:string
    @Field(()=>JSON)
    @IsObject()
    @IsNotEmpty()
    data:object
}