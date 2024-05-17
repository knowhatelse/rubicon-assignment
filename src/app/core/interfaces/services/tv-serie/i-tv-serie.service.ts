import { Observable } from "rxjs";
import { VideoResultDto } from "../../../../data/dtos/media/video-result.dto";
import { MediaDetailsDto } from "../../../../data/dtos/media/media-details.dto";

export abstract class ITvSerieService {
    abstract getTvSerieDetails(tvSerieId: number) : Observable<MediaDetailsDto>;
    abstract getTvSerieVideos(tvSerieId: number) : Observable<VideoResultDto[]>;
}