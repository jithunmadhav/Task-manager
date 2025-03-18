import { IsString, IsEmail, IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    mobile: string;

    @IsString()
    @MinLength(6)
    password: string;
}