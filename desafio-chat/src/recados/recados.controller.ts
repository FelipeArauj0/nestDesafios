import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './DTO/create-recado.dto';

@Controller('messages')
export class messagesController {
  constructor(private readonly recadosService: RecadosService) {}
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
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 0 } = pagination;
    // return 'essa rota retorna todos so recados';
    return this.recadosService.findAll();
  }

  // encontrar um recado recado
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recadosService.findOne(id);
  }

  // criar um recado
  @Post('/')
  create(@Body() body: CreateRecadoDto) {
    return this.recadosService.create(body);
  }

  // atualizar um recado
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Record<string, any>) {
    return this.recadosService.update(id, body);
  }

  // deletar um recado
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recadosService.remove(id);
  }
}
