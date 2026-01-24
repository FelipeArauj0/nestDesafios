import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional() // Torna o campo opcional
  readonly email?: string;

  @IsOptional() // Torna o campo opcional
  readonly password?: string;
}
