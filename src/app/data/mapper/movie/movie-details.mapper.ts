import { Injectable } from "@angular/core";
import { Mapper } from "../../../core/base/mapper";
import { MovieDetails } from "../../../core/models/movie/movie-details.model";
import { MediaDetailsDto } from "../../dtos/media/media-details.dto";

@Injectable({
    providedIn: 'root'
})
export class MovieDetailsMapper implements Mapper<MovieDetails, MediaDetailsDto> {

    mapFrom(param: MovieDetails): MediaDetailsDto {
        return {
            id: param.id,
            title: param.title,
            poster_path: param.poster_path,
            overview: param.overview
        }
    }

    mapFromList(param: MovieDetails[]): MediaDetailsDto[] {
        throw new Error("Method not implemented.");
    }

}