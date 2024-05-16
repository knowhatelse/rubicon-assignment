import { Injectable } from "@angular/core";
import { ITvSerieRepository } from "../../../core/interfaces/repositories/tv-serie/i-tv-serie.repository";
import { Observable } from "rxjs";
import { Image } from "../../../core/models/media/image.model";
import { Video } from "../../../core/models/media/video.model";
import { TvSerieDetails } from "../../../core/models/tv-serie/tv-serie.details.model";
import { HttpClient } from "@angular/common/http";
import { ConfigurationService } from "../../services/configuration.service";

@Injectable()
export class TvSerieRepository extends ITvSerieRepository {

    constructor(private http: HttpClient, private config: ConfigurationService) {
        super();
    }

    override getTvSerieDetails(tvSerieId: number): Observable<TvSerieDetails> {
        return this.http.get<TvSerieDetails>(this.config.getApiUrl() + `tv/${tvSerieId}`, {headers: this.config.getApiHeaders()});
    }
    override getTvSerieImages(tvSerieId: number): Observable<Image> {
        return this.http.get<Image>(this.config.getApiUrl() + `tv/${tvSerieId}/images`, {headers: this.config.getApiHeaders()});
    }
    override getTvSerieVideos(tvSerieId: number): Observable<Video> {
        return this.http.get<Video>(this.config.getApiUrl() + `tv/${tvSerieId}/videos`, {headers: this.config.getApiHeaders()});
    }

}