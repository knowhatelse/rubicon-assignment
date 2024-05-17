import { Injectable } from '@angular/core';
import { ISearchService } from '../../../core/interfaces/services/search/i-search.service';
import { Observable, map, of } from 'rxjs';
import { MovieResultDto } from '../../dtos/movie/movie-result.dto';
import { TvSerieResultDto } from '../../dtos/tv-serie/tv-serie-result.dto';
import { MovieResultMapper } from '../../mapper/movie/movie-result.mapper';
import { TvSerieResultMapper } from '../../mapper/tv-serie/tv-serie-result.mapper';
import { MovieResult } from '../../../core/models/movie/movie-result.model';
import { ISearchRepository } from '../../../core/interfaces/repositories/search/i-search.repository';
import { TvSerieResult } from '../../../core/models/tv-serie/tv-serie-result.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends ISearchService {

  constructor(
    private searchRepository: ISearchRepository, 
    private movieResultMapper: MovieResultMapper, 
    private tvSerieResultMapper: TvSerieResultMapper
  ) { 
    super();
  }

  searchMovies(query: string): Observable<MovieResultDto[]> {
    return this.searchRepository.searchMovies(query).pipe(
      map((response: { results:MovieResult[] }) => this.movieResultMapper.mapFromList(response.results))
    );
  }

  override searchTvSeries(query: string): Observable<TvSerieResultDto[]> {
    return this.searchRepository.searchTvSeries(query).pipe(
      map((response: { results:TvSerieResult[] }) => this.tvSerieResultMapper.mapFromList(response.results))
    );
  }

}
