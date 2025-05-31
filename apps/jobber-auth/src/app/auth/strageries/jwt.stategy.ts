import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { TokenPayload } from "../token-payload.interface";

export class JwtStrategy extends PassportStrategy(Strategy){
   constructor(configServie:ConfigService){
    super({jwtFromRequest:ExtractJwt.fromExtractors([
        (request:Request)=>request.cookies.Authenication,
    ]),secretOrKey:configServie.getOrThrow('JWT_SECRET')})
   }
   validate(payload:TokenPayload){
    return payload;
   }
}