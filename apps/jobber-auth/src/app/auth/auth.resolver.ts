import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../users/models/user.model';
import { LoginInput } from './dto/login.input';
import { GqlContext } from '@jobber/nestjs';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
   constructor(private readonly authService:AuthService){}

    @Mutation(() => User)
    async login(@Args('loginInput') LoginInput: LoginInput,
        @Context() Context: GqlContext) { 
            return this.authService.login(LoginInput,Context.res)
        }
}
