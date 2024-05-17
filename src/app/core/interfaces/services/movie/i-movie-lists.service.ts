import { Observable } from "rxjs";
import { MediaResultDto } from "../../../../data/dtos/media/media-result.dto";

export abstract class IMovieListsService {
    abstract getTopRadtedMovies(): Observable<MediaResultDto[]>;
}