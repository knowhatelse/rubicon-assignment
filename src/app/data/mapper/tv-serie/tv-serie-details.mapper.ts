import { Injectable } from "@angular/core";
import { Mapper } from "../../../core/base/mapper";
import { TvSerieDetails } from "../../../core/models/tv-serie/tv-serie.details.model";
import { MediaDetailsDto } from "../../dtos/media/media-details.dto";

@Injectable({
    providedIn: 'root'
})
export class TvSerieDetailsMapper implements Mapper<TvSerieDetails, MediaDetailsDto> {

    mapFrom(param: TvSerieDetails): MediaDetailsDto {
        return {
            id: param.id,
            title: param.name,
            overview: param.overview,
            poster_path: param.poster_path,
        }
    }

    mapFromList(param: TvSerieDetails[]): MediaDetailsDto[] {
        throw new Error("Method not implemented.");
    }

}