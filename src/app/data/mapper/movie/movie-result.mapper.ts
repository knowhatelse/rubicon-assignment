import { Injectable } from "@angular/core";
import { Mapper } from "../../../core/base/mapper";
import { MovieResult } from "../../../core/models/movie/movie-result.model";
import { MediaResultDto } from "../../dtos/media/media-result.dto";

@Injectable({
    providedIn: 'root'
})
export class MovieResultMapper implements Mapper<MovieResult, MediaResultDto> {
     
    mapFrom(param: MovieResult): MediaResultDto {
        throw new Error("Method not implemented.");
    }
     
    mapFromList(param: MovieResult[]): MediaResultDto[] {
        let movies: MediaResultDto[] = [];

        param.forEach(obj => {
            movies.push({
                id: obj.id,
                title: obj.title,
                poster_path: obj.poster_path
            });
        });

        return movies;
    }

}