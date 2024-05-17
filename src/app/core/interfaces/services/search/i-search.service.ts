import { Observable } from "rxjs";
import { MediaResultDto } from "../../../../data/dtos/media/media-result.dto";

export abstract class ISearchService {
    abstract searchMovies(query:string): Observable<MediaResultDto[]>;
    abstract searchTvSeries(query: string): Observable<MediaResultDto[]>;
}