import { Mapper } from "../../../core/base/mapper";
import { MovieResult } from "../../../core/models/movie/movie-result.model";
import { MovieResultDto } from "../../dtos/movie/movie-result.dto";

export class MovieMapper extends Mapper<MovieResult, MovieResultDto> {

    override mapFrom(param: MovieResult): MovieResultDto {
        throw new Error("Method not implemented.");
    }

    override mapFromList(param: MovieResult[]): MovieResultDto[] {
        let movies: MovieResultDto[] = [];

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