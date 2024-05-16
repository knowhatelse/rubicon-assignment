import { Injectable } from '@angular/core';
import { IMovieListsService } from '../../../core/interfaces/services/movie/i-movie-lists.service';
import { Observable, map } from 'rxjs';
import { MovieResultDto } from '../../dtos/movie/movie-result.dto';
import { IMovieListsRepository } from '../../../core/interfaces/repositories/movie/i-movie-lists.repository';
import { MovieResultMapper } from '../../mapper/movie/movie-result.mapper';
import { MovieResult } from '../../../core/models/movie/movie-result.model';

@Injectable({
  providedIn: 'root'
})
export class MovieListsService extends IMovieListsService {

  constructor(private movieListsRepository: IMovieListsRepository, private movieResultMapper: MovieResultMapper ) {
    super()
  }

  override getTopRadtedMovies(): Observable<MovieResultDto[]> {
    return this.movieListsRepository.getTopRadtedMovies().pipe(
      map((response: { results:MovieResult[] }) => this.movieResultMapper.mapFromList(response.results))
    );
  }
}
