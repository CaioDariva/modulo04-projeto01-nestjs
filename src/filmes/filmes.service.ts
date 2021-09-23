import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';

export type Filme = {
  nome: string;
  imagem?: string;
};

const filmes: Filme[] = [
  {
    nome: 'Matrix',
    imagem:
      'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/08/82/20128877.JPG',
  },
];

@Injectable()
export class FilmesService {
  getAll() {
    return filmes;
  }
  createFilme(filme: CreateFilmeDto) {
    return filmes.push(filme);
  }
}
