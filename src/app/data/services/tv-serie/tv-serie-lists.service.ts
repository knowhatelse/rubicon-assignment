import { Injectable } from '@angular/core';
import { ITvSerieListsService } from '../../../core/interfaces/services/tv-serie/i-tv-serie-lists.service';
import { Observable, map } from 'rxjs';
import { TvSerieResultDto } from '../../dtos/tv-serie/tv-serie-result.dto';
import { TvSerieResultMapper } from '../../mapper/tv-serie/tv-serie-result.mapper';
import { ITvSerieListsRepository } from '../../../core/interfaces/repositories/tv-serie/i-tv-serie-lists.repository';
import { TvSerieResult } from '../../../core/models/tv-serie/tv-serie-result.model';

@Injectable({
  providedIn: 'root'
})
export class TvSerieListsService extends ITvSerieListsService {

  constructor(
    private tvSerieListsRepository: ITvSerieListsRepository, 
    private tvSerieResultMapper: TvSerieResultMapper
  ) {
    super();
  }

  override getTopRatedTvSeries(): Observable<TvSerieResultDto[]> {
    return this.tvSerieListsRepository.getTopRatedTvSeries().pipe(
      map((response: {results: TvSerieResult[]}) => this.tvSerieResultMapper.mapFromList(response.results))
    );
  }

}
