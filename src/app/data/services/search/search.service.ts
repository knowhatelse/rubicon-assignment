import { Injectable } from '@angular/core';
import { ISearchService } from '../../../core/interfaces/services/search/i-search.service';
import { Observable, map, of } from 'rxjs';
import { MovieResultMapper } from '../../mapper/movie/movie-result.mapper';
import { TvSerieResultMapper } from '../../mapper/tv-serie/tv-serie-result.mapper';
import { MovieResult } from '../../../core/models/movie/movie-result.model';
import { ISearchRepository } from '../../../core/interfaces/repositories/search/i-search.repository';
import { TvSerieResult } from '../../../core/models/tv-serie/tv-serie-result.model';
import { MediaResultDto } from '../../dtos/media/media-result.dto';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements ISearchService {

  constructor(
    private searchRepository: ISearchRepository, 
    private movieResultMapper: MovieResultMapper, 
    private tvSerieResultMapper: TvSerieResultMapper
  ) { }

  searchMovies(query: string): Observable<MediaResultDto[]> {
    return this.searchRepository.searchMovies(query).pipe(
      map((response: { results:MovieResult[] }) => this.movieResultMapper.mapFromList(response.results))
    );
  }
  
  searchTvSeries(query: string): Observable<MediaResultDto[]> {
    return this.searchRepository.searchTvSeries(query).pipe(
      map((response: { results:TvSerieResult[] }) => this.tvSerieResultMapper.mapFromList(response.results))
    );
  }

}
