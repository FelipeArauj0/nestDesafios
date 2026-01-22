import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecadosModule } from 'src/recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'postgres',
      autoLoadEntities: true, // Carrega entidades sem precisar especifica-las
      synchronize: true, // Sincroniza o banco de dados. (não usar em produção)
    }),
    RecadosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
