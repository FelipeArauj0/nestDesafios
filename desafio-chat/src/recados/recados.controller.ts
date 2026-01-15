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
import { UpdateRecadoDto } from './DTO/update-recado.dto';
import { FindRecadoIdDto } from './DTO/find-recado-id.dto';

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
  findOne(@Param() params: FindRecadoIdDto) {
    return this.recadosService.findOne(params.id);
  }

  // criar um recado
  @Post('/')
  create(@Body() createRecadoDTO: CreateRecadoDto) {
    return this.recadosService.create(createRecadoDTO);
  }

  // atualizar um recado
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecadoDTO: UpdateRecadoDto) {
    return this.recadosService.update(id, updateRecadoDTO);
  }

  // deletar um recado
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recadosService.remove(id);
  }
}
