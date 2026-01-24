import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Método para lançar erro de user não encontrado
  throwNotFoundErrorUser() {
    throw new NotFoundException(`User não encontrado.`);
  }

  // encontrar todos os users
  async findAllUsers() {
    // return this.recados;
    const users = await this.userRepository.find();

    return users;
  }

  // encontrar um recado pelo id
  async findOneUser(id: number) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (user) {
      return user;
    }
    return this.throwNotFoundErrorUser();
  }

  // criar um novo recado
  async createUser(CreateUserDto: CreateUserDto) {
    const newUser = {
      ...CreateUserDto,
      createDataAt: new Date(),
    };

    const user = this.userRepository.create(newUser);
    const userSaved = await this.userRepository.save(user);

    return userSaved;
  }

  // atualizar um recado existente
  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const partialUpdateUserDTO = {
      email: updateUserDto?.email,
      password: updateUserDto?.password,
    };
    const userExistente = await this.userRepository.preload({
      id,
      ...partialUpdateUserDTO,
    });
    if (userExistente) {
      const user = this.userRepository.create(userExistente);
      return await this.userRepository.save(user);
    }
    return this.throwNotFoundErrorUser();
  }

  // deletar um recado
  async removeUser(id: number) {
    const userExistente = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!userExistente) {
      this.throwNotFoundErrorUser();
    }

    await this.userRepository.delete(id);

    return {
      message: `User com id ${id} deletado com sucesso.`,
      ...userExistente,
    };
  }

  hello() {
    return 'Hello World! from UserService';
  }
}
