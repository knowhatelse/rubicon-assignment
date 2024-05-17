import { Observable } from "rxjs";
import { MediaResultDto } from "../../../../data/dtos/media/media-result.dto";

export abstract class ISearchService {
    abstract setSearchQuery(query: string): void;
    abstract getSearchQuery(): Observable<string>;
    abstract searchMovies(query:string): Observable<MediaResultDto[]>;
    abstract searchTvSeries(query: string): Observable<MediaResultDto[]>;
}