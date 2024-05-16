import { Injectable } from "@angular/core";
import { ISearchRepository } from "../../../core/interfaces/repositories/search/i-search.repository";
import { Observable } from "rxjs";
import { MovieResults } from "../../../core/models/movie/movie-results.model";
import { HttpClient } from "@angular/common/http";
import { ConfigurationService } from "../../services/configuration.service";
import { TvSerieResults } from "../../../core/models/tv-serie/tv-serie-results.model";

@Injectable()
export class SearchRepository extends ISearchRepository {

    constructor(private http: HttpClient, private config: ConfigurationService) {
        super();
    }

    override searchMovies(query: string): Observable<MovieResults> {
        return this.http.get<MovieResults>(this.config.getApiUrl() + `search/movie?query=${query}&include_adult=false&language=en-US&page=1`, {headers: this.config.getApiHeaders()});
    }
    override searchTvSeries(query: string): Observable<TvSerieResults> {
        return this.http.get<TvSerieResults>(this.config.getApiUrl() + `search/tv?query=${query}&include_adult=false&language=en-US&page=1`, {headers: this.config.getApiHeaders()});
    }

}