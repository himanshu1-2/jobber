import { isNotEmpty, IsNotEmpty, IsNumber } from "class-validator";

export class FibonacciJob{
    @IsNotEmpty()
    @IsNumber()
    iterations:number;
}