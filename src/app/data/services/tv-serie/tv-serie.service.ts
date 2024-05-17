import { Injectable } from '@angular/core';
import { ITvSerieService } from '../../../core/interfaces/services/tv-serie/i-tv-serie.service';
import { Observable, map } from 'rxjs';
import { VideoResultDto } from '../../dtos/media/video-result.dto';
import { TvSerieDetailsDto } from '../../dtos/tv-serie/tv-serie-details.dto';
import { ITvSerieRepository } from '../../../core/interfaces/repositories/tv-serie/i-tv-serie.repository';
import { TvSerieDetailsMapper } from '../../mapper/tv-serie/tv-serie-details.mapper';
import { VideoResultMapper } from '../../mapper/media/video-result.mapper';
import { TvSerieDetails } from '../../../core/models/tv-serie/tv-serie.details.model';
import { VideoResult } from '../../../core/models/media/video-result.model';

@Injectable({
  providedIn: 'root'
})
export class TvSerieService extends ITvSerieService {

  constructor(
    private tvSerieRepository: ITvSerieRepository, 
    private tvSerieDetailsMapper: TvSerieDetailsMapper, 
    private videoResultMapper: VideoResultMapper
  ) { 
    super();
  }

  override getTvSerieDetails(tvSerieId: number): Observable<TvSerieDetailsDto> {
    return this.tvSerieRepository.getTvSerieDetails(tvSerieId).pipe(
      map((response: TvSerieDetails) => this.tvSerieDetailsMapper.mapFrom(response))
    );
  }

  override getTvSerieVideos(tvSerieId: number): Observable<VideoResultDto[]> {
    return this.tvSerieRepository.getTvSerieVideos(tvSerieId).pipe(
      map((response: {results: VideoResult[]}) => this.videoResultMapper.mapFromList(response.results))
    );
  }

}
