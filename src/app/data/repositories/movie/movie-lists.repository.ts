import { Injectable } from "@angular/core";
import { IMovieListsRepository } from "../../../core/interfaces/repositories/movie/i-movie-lists.repository";
import { Observable } from "rxjs";
import { MovieResults } from "../../../core/models/movie/movie-results.model";
import { HttpClient } from "@angular/common/http";
import { ConfigurationService } from "../../services/configuration.service";

@Injectable({
    providedIn: 'root'
})
export class MovieListsRepository implements IMovieListsRepository {

    constructor(private http: HttpClient, private config: ConfigurationService) {
    }
     
    getTopRadtedMovies(): Observable<MovieResults> {
        return this.http.get<MovieResults>(this.config.getApiUrl() + `movie/top_rated`, { headers: this.config.getApiHeaders() });
    }

}