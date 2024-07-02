import { IsNotEmpty, IsString } from "class-validator";

export class CreateMenuDto {

    @IsString()
    @IsNotEmpty()
    name: string
}