import { Module } from '@nestjs/common';
import { messagesController } from './user.controller';
import { RecadosService } from './recados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recado } from './entities/recado.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Recado])],
  controllers: [messagesController],
  providers: [RecadosService],
})
export class RecadosModule {}
