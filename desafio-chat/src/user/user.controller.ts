import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './DTO/create-user.dto';

@Controller('user')
export class userController {
  constructor(private readonly userService: UserService) {}
  // CRUD
  // Create -> POST -> Criar um recado
  // Read -> GET -> Ler um ou mais recados
  // Update -> PUT/PATCH -> Atualizar um recado
  // Delete -> DELETE -> Deletar um recado

  // PATCH é utilizado para atualizar dados de um recurso.
  // PUT -> Atualiza o recurso por completo.

  // encontrar todos os recados
  @HttpCode(HttpStatus.OK)
  @Get('/')
  findAllUsers(@Query() pagination: any) {
    const { limit = 10, offset = 0 } = pagination;
    // return 'essa rota retorna todos so recados';
    return this.userService.findAllUsers();
  }

  // encontrar um recado recado
  @Get(':id')
  findOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOneUser(id);
  }

  // criar um recado
  @Post('/')
  createUser(@Body() createUserDTO: CreateUserDto) {
    return this.userService.createUser(createUserDTO);
  }

  // atualizar um recado
  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDTO: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDTO);
  }

  // deletar um recado
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.recadosService.remove(id);
  }
}
