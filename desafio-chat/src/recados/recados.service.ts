/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entities';

@Injectable()
export class RecadosService {
  private lasId = 1;
  private recados: Recado[] = [
    {
      id: 1,
      texto: 'Este é um Recado de teste',
      de: 'Joana',
      para: 'João',
      lido: false,
      data: new Date(),
    },
  ];

  // Método para lançar erro de recado não encontrado
  throwNotFoundError() {
    throw new NotFoundException(`Recado não encontrado.`);
  }

  // encontrar todos os recados
  findAll() {
    return this.recados;
  }

  // encontrar um recado pelo id
  findOne(id: string) {
    const recado = this.recados.find(recados => recados.id === +id);
    if (recado) return recado;
    return this.throwNotFoundError();
  }

  // criar um novo recado
  create(body: any) {
    this.lasId++;
    const { texto, de, para } = body;
    const newRecado: Recado = {
      id: this.lasId,
      texto,
      de,
      para,
      lido: false,
      data: new Date(),
    };
    this.recados.push(newRecado);
    return newRecado;
  }

  // atualizar um recado existente
  update(id: string, body: Record<string, any>) {
    const recadoExistenteIndex = this.recados.findIndex(
      recado => recado.id === +id,
    );

    if (recadoExistenteIndex <= 0) {
      this.throwNotFoundError();
    }

    const recadoExistente = this.recados[recadoExistenteIndex];

    this.recados[recadoExistenteIndex] = {
      ...recadoExistente,
      ...body,
    };

    return this.recados[recadoExistenteIndex];
  }

  // deletar um recado
  remove(id: string) {
    const recadoExistenteIndex = this.recados.findIndex(
      recado => recado.id === +id,
    );

    if (recadoExistenteIndex <= 0) {
      this.throwNotFoundError();
    }

    const recado = this.recados[recadoExistenteIndex];
    this.recados.splice(recadoExistenteIndex, 1);
    return { message: `Recado com id ${id} deletado com sucesso.`, ...recado };
  }

  hello() {
    return 'Hello World! from RecadosService';
  }
}
