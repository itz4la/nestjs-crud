import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateFoodDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsOptional()
    price: number;
}