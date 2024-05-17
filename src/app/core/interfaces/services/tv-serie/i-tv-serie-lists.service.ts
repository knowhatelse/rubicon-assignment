import { Observable } from "rxjs";
import { MediaResultDto } from "../../../../data/dtos/media/media-result.dto";

export abstract class ITvSerieListsService {
    abstract getTopRatedTvSeries(): Observable<MediaResultDto[]>;
}