import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsEmail({}, { message: 'email com formato invalido' })
  @IsNotEmpty() // email nao pode ser vazio
  email: string;

  @IsNotEmpty() // senha nao pode ser vazia
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  password: string;
}
