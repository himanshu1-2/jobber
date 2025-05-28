import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma-clients/auth'

@Injectable()
export class UsersService {
 constructor(private readonly prismaService:PrismaService){}
 async createUser(data:Prisma.UserCreateInput){}

}
