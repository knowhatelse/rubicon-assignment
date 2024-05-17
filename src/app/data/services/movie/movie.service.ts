import { Injectable } from '@angular/core';
import { IMovieService } from '../../../core/interfaces/services/movie/i-movie.service';
import { Observable, map } from 'rxjs';
import { VideoResultDto } from '../../dtos/media/video-result.dto';
import { MovieDetailsDto } from '../../dtos/movie/movie-details.dto';
import { IMovieRepository } from '../../../core/interfaces/repositories/movie/i-movie.repository';
import { MovieDetailsMapper } from '../../mapper/movie/movie-details.mapper';
import { MovieDetails } from '../../../core/models/movie/movie-details.model';
import { VideoResultMapper } from '../../mapper/media/video-result.mapper';
import { VideoResult } from '../../../core/models/media/video-result.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends IMovieService {

  constructor(
    private movieRepositorie: IMovieRepository, 
    private movieDetailsMapper: MovieDetailsMapper, 
    private videoResultMapper: VideoResultMapper 
  ) {
    super();
  }

  override getMovieDetails(movieId: number): Observable<MovieDetailsDto> {
    return this.movieRepositorie.getMovieDetails(movieId).pipe(
      map((response: MovieDetails) => this.movieDetailsMapper.mapFrom(response))
    );
  }

  override getMovieVideos(movieId: number): Observable<VideoResultDto> {
    return this.movieRepositorie.getMovieVideos(movieId).pipe(
      map((response: VideoResult) => this.videoResultMapper.mapFrom(response))
    );
  }

}
