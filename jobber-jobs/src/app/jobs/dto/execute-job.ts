import { Field,InputType } from "@nestjs/graphql"
import {IsNotEmpty, IsObject} from 'class-validator'
import JSON from 'graphql-type-json';
@InputType()
export class ExceuteJobInput{
    @Field()
    @IsNotEmpty()
    name:string
    @Field(()=>JSON)
    @IsNotEmpty()
    data:object|object[];
}