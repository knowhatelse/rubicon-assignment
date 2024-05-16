import { Observable } from "rxjs";
import { MovieResults } from "../../../models/movie/movie-results.model";
import { TvSerieResults } from "../../../models/tv-serie/tv-serie-results.model";

export abstract class ISearchRepository{
    abstract searchMovies(query:string): Observable<MovieResults>;
    abstract searchTvSeries(query: string): Observable<TvSerieResults>;
}