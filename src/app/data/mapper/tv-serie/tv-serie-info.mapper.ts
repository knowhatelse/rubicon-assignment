import { Mapper } from "../../../core/base/mapper";
import { TvSerieDetails } from "../../../core/models/tv-serie/tv-serie.details.model";
import { TvSerieDetailsDto } from "../../dtos/tv-serie/tv-serie-details.dto";

export class TvSerieInfoMapper extends Mapper<TvSerieDetails, TvSerieDetailsDto> {

    override mapFrom(param: TvSerieDetails): TvSerieDetailsDto {
        return {
            id: param.id,
            name: param.name,
            overview: param.overview,
            poster_path: param.poster_path
        }
    }

    override mapFromList(param: TvSerieDetails[]): TvSerieDetailsDto[] {
        throw new Error("Method not implemented.");
    }

}