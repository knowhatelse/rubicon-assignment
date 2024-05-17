import { Injectable } from '@angular/core';
import { ITvSerieService } from '../../../core/interfaces/services/tv-serie/i-tv-serie.service';
import { Observable, map } from 'rxjs';
import { VideoResultDto } from '../../dtos/media/video-result.dto';
import { ITvSerieRepository } from '../../../core/interfaces/repositories/tv-serie/i-tv-serie.repository';
import { TvSerieDetailsMapper } from '../../mapper/tv-serie/tv-serie-details.mapper';
import { VideoResultMapper } from '../../mapper/media/video-result.mapper';
import { TvSerieDetails } from '../../../core/models/tv-serie/tv-serie.details.model';
import { VideoResult } from '../../../core/models/media/video-result.model';
import { MediaDetailsDto } from '../../dtos/media/media-details.dto';

@Injectable({
  providedIn: 'root'
})
export class TvSerieService implements ITvSerieService {

  constructor(
    private tvSerieRepository: ITvSerieRepository, 
    private tvSerieDetailsMapper: TvSerieDetailsMapper, 
    private videoResultMapper: VideoResultMapper
  ) { }

  getTvSerieDetails(tvSerieId: number): Observable<MediaDetailsDto> {
    return this.tvSerieRepository.getTvSerieDetails(tvSerieId).pipe(
      map((response: TvSerieDetails) => this.tvSerieDetailsMapper.mapFrom(response))
    );
  }

  getTvSerieVideos(tvSerieId: number): Observable<VideoResultDto[]> {
    return this.tvSerieRepository.getTvSerieVideos(tvSerieId).pipe(
      map((response: {results: VideoResult[]}) => this.videoResultMapper.mapFromList(response.results))
    );
  }

}
