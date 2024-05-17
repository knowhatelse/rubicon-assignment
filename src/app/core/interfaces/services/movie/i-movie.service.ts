import { Observable } from "rxjs";
import { VideoResultDto } from "../../../../data/dtos/media/video-result.dto";
import { MediaDetailsDto } from "../../../../data/dtos/media/media-details.dto";

export abstract class IMovieService {
    abstract getMovieDetails(movieId:number): Observable<MediaDetailsDto>;
    abstract getMovieVideos(movieId:number): Observable<VideoResultDto>;
}