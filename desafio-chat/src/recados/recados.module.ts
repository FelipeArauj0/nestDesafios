import { Module } from '@nestjs/common';
import { messagesController } from './recados.controller';
import { RecadosService } from './recados.service';

@Module({
  imports: [],
  controllers: [messagesController],
  providers: [RecadosService],
})
export class RecadosModule {}
