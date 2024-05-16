import { Observable } from "rxjs";
import { IMovieRepository } from "../../../core/interfaces/repositories/movie/i-movie.repository";
import { Image } from "../../../core/models/media/image.model";
import { Video } from "../../../core/models/media/video.model";
import { MovieDetails } from "../../../core/models/movie/movie-details.model";
import { Injectable } from "@angular/core";
import { ConfigurationService } from "../../services/configuration.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MovieRepository extends IMovieRepository {

    constructor(private http: HttpClient, private config: ConfigurationService){
        super();
    }

    override getMovieDetails(movieId: number): Observable<MovieDetails> {
        return this.http.get<MovieDetails>(this.config.getApiUrl() + `movie/${movieId}`, {headers: this.config.getApiHeaders()});
    }

    override getMovieImages(movieId: number): Observable<Image> {
        return this.http.get<Image>(this.config.getApiUrl() + `movie/${movieId}/images`, {headers: this.config.getApiHeaders()});
    }

    override getMovieVideos(movieId: number): Observable<Video> {
        return this.http.get<Video>(this.config.getApiUrl() + `movie/${movieId}/videos`, {headers: this.config.getApiHeaders()});
    }

}