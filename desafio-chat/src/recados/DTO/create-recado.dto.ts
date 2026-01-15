import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateRecadoDto {
  @IsString({ message: 'O campo texto deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo texto é obrigatório.' })
  @MinLength(3, { message: 'O texto deve ter no mínimo 3 caracteres.' })
  readonly texto: string;

  @IsString({ message: 'O campo de é obrigatório e deve ser texto.' })
  @IsNotEmpty({ message: 'O campo de é obrigatório.' })
  readonly de: string;
  @IsString({ message: 'O campo para é obrigatório e deve ser texto.' })
  @IsNotEmpty({ message: 'O campo para é obrigatório.' })
  readonly para: string;
}
