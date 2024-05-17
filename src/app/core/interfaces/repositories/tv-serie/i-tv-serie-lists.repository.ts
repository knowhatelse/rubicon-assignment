import { Observable } from "rxjs";
import { TvSerieResults } from "../../../models/tv-serie/tv-serie-results.model";

export abstract class ITvSerieListsRepository {
    abstract getTopRatedTvSeries(): Observable<TvSerieResults>;
}