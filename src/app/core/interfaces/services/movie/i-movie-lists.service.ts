import { Observable } from "rxjs";
import { MovieResultDto } from "../../../../data/dtos/movie/movie-result.dto";

export abstract class IMovieListsService {
    abstract getTopRadtedMovies(): Observable<MovieResultDto[]>;
}