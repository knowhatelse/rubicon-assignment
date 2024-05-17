import { Injectable } from '@angular/core';
import { ITvSerieListsService } from '../../../core/interfaces/services/tv-serie/i-tv-serie-lists.service';
import { Observable, map } from 'rxjs';
import { TvSerieResultMapper } from '../../mapper/tv-serie/tv-serie-result.mapper';
import { ITvSerieListsRepository } from '../../../core/interfaces/repositories/tv-serie/i-tv-serie-lists.repository';
import { TvSerieResult } from '../../../core/models/tv-serie/tv-serie-result.model';
import { MediaResultDto } from '../../dtos/media/media-result.dto';

@Injectable({
  providedIn: 'root'
})
export class TvSerieListsService implements ITvSerieListsService {

  constructor(
    private tvSerieListsRepository: ITvSerieListsRepository, 
    private tvSerieResultMapper: TvSerieResultMapper
  ) { }

  getTopRatedTvSeries(): Observable<MediaResultDto[]> {
    return this.tvSerieListsRepository.getTopRatedTvSeries().pipe(
      map((response: {results: TvSerieResult[]}) => this.tvSerieResultMapper.mapFromList(response.results))
    );
  }

}
