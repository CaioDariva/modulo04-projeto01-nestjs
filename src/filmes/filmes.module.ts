import { Module } from '@nestjs/common';
import { FilmesController } from './filmes.controller';
import { FilmesService } from './filmes.service';

@Module({
  providers: [FilmesService],
  controllers: [FilmesController],
})
export class FilmesModule {}
