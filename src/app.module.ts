import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from 'nestjs-mikro-orm';

@Module({
  imports: [MikroOrmModule.forRoot({
    entitiesDirs: ['dist/entities'],
    entitiesDirsTs: ['src/entities'],
    dbName: 'test',
    type: 'mysql'
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
