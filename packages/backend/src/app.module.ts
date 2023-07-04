import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Boat } from './modules/boats/boats.entity';
import { BoatsModule } from './modules/boats/boats.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'bp-pg-db',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'beast_db',
      entities: [Boat],
      synchronize: true,
    }),
    BoatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
