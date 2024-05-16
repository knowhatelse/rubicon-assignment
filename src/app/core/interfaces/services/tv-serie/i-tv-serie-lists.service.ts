import { Observable } from "rxjs";
import { TvSerieResultDto } from "../../../../data/dtos/tv-serie/tv-serie-result.dto";

export abstract class ITvSerieListsService {
    abstract getTopRatedTvSeries(): Observable<TvSerieResultDto[]>;
}