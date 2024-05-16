import { Mapper } from "../../../core/base/mapper";
import { MovieDetails } from "../../../core/models/movie/movie-details.model";
import { MovieDetailsDto } from "../../dtos/movie/movie-details.dto";

export class MovieInfoMapper extends Mapper<MovieDetails, MovieDetailsDto> {

    override mapFrom(param: MovieDetails): MovieDetailsDto {
        return {
            id: param.id,
            title: param.title,
            poster_path: param.poster_path,
            overview: param.overview
        }
    }

    override mapFromList(param: MovieDetails[]): MovieDetailsDto[] {
        throw new Error("Method not implemented.");
    }

}