import { Observable } from "rxjs";
import { MovieResults } from "../../../models/movie/movie-results.model";

export abstract class IMovieListsRepository {
    abstract getTopRadtedMovies(): Observable<MovieResults>;
}