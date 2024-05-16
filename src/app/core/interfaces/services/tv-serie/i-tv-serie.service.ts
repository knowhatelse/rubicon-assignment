import { Observable } from "rxjs";
import { VideoResultDto } from "../../../../data/dtos/media/video-result.dto";
import { TvSerieDetailsDto } from "../../../../data/dtos/tv-serie/tv-serie-details.dto";

export abstract class ITvSerieService {
    abstract getTvSerieDetails(tvSerieId: number) : Observable<TvSerieDetailsDto>;
    abstract getTvSerieVideos(tvSerieId: number) : Observable<VideoResultDto[]>;
}