import { AbstractModel } from "@jobber/nestjs";
import { ObjectType,Field } from "@nestjs/graphql";

@ObjectType()
export class User extends AbstractModel{
    @Field()
    email:string
}