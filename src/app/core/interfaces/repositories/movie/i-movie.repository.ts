import { Observable } from "rxjs";
import { MovieDetails } from "../../../models/movie/movie-details.model";
import { Image } from "../../../models/media/image.model";
import { VideoResult } from "../../../models/media/video-result.model";

export abstract class IMovieRepository{
    abstract getMovieDetails(movieId:number): Observable<MovieDetails>;
    abstract getMovieImages(movieId:number): Observable<Image>;
    abstract getMovieVideos(movieId:number): Observable<VideoResult>;
}