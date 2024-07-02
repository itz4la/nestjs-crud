import { IsOptional, IsString } from "class-validator";

export class EditMenuDto {

    @IsString()
    @IsOptional()
    name: string
}