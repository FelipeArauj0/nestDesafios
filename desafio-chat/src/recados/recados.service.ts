import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entities';
import { CreateRecadoDto } from './DTO/create-recado.dto';
import { UpdateRecadoDto } from './DTO/update-recado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecadosService {
  constructor(
    @InjectRepository(Recado)
    private readonly recadoRepository: Repository<Recado>,
  ) {}
 
  // Método para lançar erro de recado não encontrado
  throwNotFoundError() {
    throw new NotFoundException(`Recado não encontrado.`);
  }

  // encontrar todos os recados
  async findAll() {
    // return this.recados;
    const recados = await this.recadoRepository.find();
    // // so exibir até o data esquecer o restante
    // return recados.map(({ id, texto, de, para, lido, data }) => ({
    //   id,
    //   texto,
    //   de,
    //   para,
    //   lido,
    //   data,
    // }));
    return recados;
  }

  // encontrar um recado pelo id
  async findOne(id: number) {
    // const recado = this.recados.find(recados => recados.id === +id);
    const recado = await this.recadoRepository.findOne({
      where: {
        id,
      },
    });
    // // recado encontrado separando o para exibir ate a data
    // if (recado) {
    //   const { texto, de, para, lido, data } = recado;
    //   return { id, texto, de, para, lido, data };
    // }
    if (recado) {
      return recado;
    } 
    return this.throwNotFoundError();
  }

  // criar um novo recado
  async create(createRecadDto: CreateRecadoDto) {
    // this.lasId++;
    // const id = this.lasId;
    const { texto, de, para } = createRecadDto;
    const newRecado = {
      texto,
      de,
      para,
      lido: false,
      data: new Date(),
    };

    const recado = this.recadoRepository.create(newRecado);
    const recadoSaved = await this.recadoRepository.save(recado);

    // const { id, data, lido } = recadoSaved;
    // return { id, texto, de, para, lido, data };
    return recadoSaved;
  }

  // atualizar um recado existente
  async update(id: number, updateRecadoDTO: UpdateRecadoDto) {
    const partialUpdateRecadoDTO = {
      lido: updateRecadoDTO?.lido,
      texto: updateRecadoDTO?.texto,
    }
    const recadoExistente = await this.recadoRepository.preload({
      id,
      ...partialUpdateRecadoDTO,
    });
    if (recadoExistente) {
      const recado = this.recadoRepository.create(recadoExistente);
      return await this.recadoRepository.save(recado);
    }
    return this.throwNotFoundError();

  }

  // deletar um recado
  async remove(id: number) {
    // const recadoExistenteIndex = this.recados.findIndex(
    //   recado => recado.id === id,
    // );

    const recadoExistente = await this.recadoRepository.findOne({
      where: {
        id,
      },
    });

    if (!recadoExistente) {
      this.throwNotFoundError();
    }

    const recadoDeleteResult = await this.recadoRepository.delete(id);
    // this.recados.splice(recadoExistenteIndex, 1);
    return { message: `Recado com id ${id} deletado com sucesso.`, ...recadoExistente };
  }

  hello() {
    return 'Hello World! from RecadosService';
  }
}
