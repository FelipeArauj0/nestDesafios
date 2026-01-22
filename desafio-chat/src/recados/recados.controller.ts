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
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './DTO/create-recado.dto';
import { UpdateRecadoDto } from './DTO/update-recado.dto';

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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.recadosService.findOne(id);
  }

  // criar um recado
  @Post('/')
  create(@Body() createRecadoDTO: CreateRecadoDto) {
    return this.recadosService.create(createRecadoDTO);
  }

  // atualizar um recado
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRecadoDTO: UpdateRecadoDto,
  ) {
    return this.recadosService.update(id, updateRecadoDTO);
  }

  // deletar um recado
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.recadosService.remove(id);
  }
}
