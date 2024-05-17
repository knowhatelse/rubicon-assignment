import { Observable } from "rxjs";
import { MovieDetails } from "../../../models/movie/movie-details.model";
import { Image } from "../../../models/media/image.model";
import { Video } from "../../../models/media/video.model";

export abstract class IMovieRepository{
    abstract getMovieDetails(movieId:number): Observable<MovieDetails>;
    abstract getMovieImages(movieId:number): Observable<Image>;
    abstract getMovieVideos(movieId:number): Observable<Video>;
}