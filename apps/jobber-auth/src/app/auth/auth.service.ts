import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginInput } from './dto/login.input';
import { Response } from 'express';
import { UsersService } from '../users/users.service';
import { compare } from 'bcryptjs';
import { TokenPayload } from './token-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
    constructor(private readonly userService:UsersService,
    private readonly jwtService:JwtService,
    private readonly configService:ConfigService
    ){}
    async login({email,password}:LoginInput,response:Response){
      const user = await this.verifyUser(email,password)
      const tokenPayload:TokenPayload={
        userId:user.id
      }
      const accessToken = this.jwtService.sign(tokenPayload)
      response.cookie('Authenication',accessToken,{
        httpOnly:true,secure:this.configService.get('NODE_ENV')==='production'
      })
    }
    private async verifyUser(email:string,password:string){
       try {
        const user = await this.userService.getUser({
            email
        })
        const authenticated = await compare(password,user.password)
        if(!authenticated){
            throw new UnauthorizedException()
        }
        return user
       } catch (error) {
         throw new UnauthorizedException('cred not vaild')
       }
    }
}
