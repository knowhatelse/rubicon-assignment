import { Observable } from "rxjs";
import { ITvSerieListsRepository } from "../../../core/interfaces/repositories/tv-serie/i-tv-serie-lists.repository";
import { TvSerieResults } from "../../../core/models/tv-serie/tv-serie-results.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfigurationService } from "../../services/configuration.service";

@Injectable({
    providedIn: 'root'
})
export class TvSerieListsRepository implements ITvSerieListsRepository {

    constructor(private http: HttpClient, private config: ConfigurationService) {}

    getTopRatedTvSeries(): Observable<TvSerieResults> {
        return this.http.get<TvSerieResults>(this.config.getApiUrl() + `tv/top_rated`, {headers: this.config.getApiHeaders()});
    }

}