import { Injectable } from "@angular/core";
import { IMovieListsRepository } from "../../../core/interfaces/repositories/movie/i-movie-lists.repository";
import { Observable } from "rxjs";
import { MovieResults } from "../../../core/models/movie/movie-results.model";
import { HttpClient } from "@angular/common/http";
import { ConfigurationService } from "../../services/configuration.service";

@Injectable()
export class MovieListsRepository extends IMovieListsRepository {

    constructor(private http: HttpClient, private config: ConfigurationService) {
        super();
    }

    override getTopRadtedMovies(): Observable<MovieResults> {
        return this.http.get<MovieResults>(this.config.getApiUrl() + `movie/top_rated`, { headers: this.config.getApiHeaders() });
    }

}