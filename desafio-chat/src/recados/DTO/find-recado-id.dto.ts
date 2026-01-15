import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class FindRecadoIdDto {
  @IsInt({message: 'O id deve ser um número inteiro.'})
  @Type(() => Number)
  id: number;
}
