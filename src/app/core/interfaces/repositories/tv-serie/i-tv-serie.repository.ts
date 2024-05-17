import { Observable } from "rxjs";
import { TvSerieDetails } from "../../../models/tv-serie/tv-serie.details.model";
import { Image } from "../../../models/media/image.model";
import { Video } from "../../../models/media/video.model";

export abstract class ITvSerieRepository {
    abstract getTvSerieDetails(tvSerieId: number) : Observable<TvSerieDetails>;
    abstract getTvSerieImages(tvSerieId: number) : Observable<Image>;
    abstract getTvSerieVideos(tvSerieId: number) : Observable<Video>;
}