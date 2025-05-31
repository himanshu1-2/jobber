import { Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

export class LoginInput{
    @Field()
    @IsNotEmpty()
    email:string

    @Field()
    @IsNotEmpty()
    password:string
}