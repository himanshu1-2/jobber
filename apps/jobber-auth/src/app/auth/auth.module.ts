import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './strageries/jwt.stategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync(
      {
        imports:[ConfigModule],
        useFactory: (confingService: ConfigService) => ({
          secret: confingService.getOrThrow('JWT_SECRET'),
          signOptions: {
            expiresIn: 2800000
          }
        }), inject: [ConfigService]
      }
    ), UsersModule],
  controllers:[AuthController],  
  providers: [AuthResolver, AuthService,JwtStrategy],
})
export class AuthModule { }
