import {  IsNumber, IsOptional, IsString } from "class-validator";

export class EditFoodDto {

    @IsString()
    @IsOptional()
    name: string

    @IsNumber()
    @IsOptional()
    price: number;
}