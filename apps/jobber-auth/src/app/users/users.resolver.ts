import { Resolver ,Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { TokenPayload } from '../auth/token-payload.interface';
import { CurrentUser } from '../auth/current-user.decorator';
;

@Resolver(()=>User)
export class UsersResolver {
    constructor(private readonly userService:UsersService){}
    @Mutation(()=>User)
    async createUser(@Args('createUserInput')createUserInput:CreateUserInput){
        return this.userService.createUser(createUserInput)
    }
    @UseGuards(GqlAuthGuard)
    @Query(()=>[User],{name:'users'})
    async getUsers(
        @CurrentUser(){userId}:TokenPayload
    ){
        return this.userService.getUsers();
    }
}
