import { Observable } from "rxjs";
import { MovieDetailsDto } from "../../../../data/dtos/movie/movie-details.dto";
import { VideoResultDto } from "../../../../data/dtos/media/video-result.dto";

export abstract class IMovieService {
    abstract getMovieDetails(movieId:number): Observable<MovieDetailsDto>;
    abstract getMovieVideos(movieId:number): Observable<VideoResultDto>;
}