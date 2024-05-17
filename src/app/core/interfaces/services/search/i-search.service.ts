import { Observable } from "rxjs";
import { MovieResultDto } from "../../../../data/dtos/movie/movie-result.dto";
import { TvSerieResultDto } from "../../../../data/dtos/tv-serie/tv-serie-result.dto";

export abstract class ISearchService {
    abstract searchMovies(query:string): Observable<MovieResultDto[]>;
    abstract searchTvSeries(query: string): Observable<TvSerieResultDto[]>;
}