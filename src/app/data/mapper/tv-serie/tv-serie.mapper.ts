import { Mapper } from "../../../core/base/mapper";
import { TvSerieResult } from "../../../core/models/tv-serie/tv-serie-result.model";
import { TvSerieResultDto } from "../../dtos/tv-serie/tv-serie-result.dto";

export class TvSerieMapper extends Mapper<TvSerieResult, TvSerieResultDto> {
    
    override mapFrom(param: TvSerieResult): TvSerieResultDto {
        throw new Error("Method not implemented.");
    }
  
    override mapFromList(param: TvSerieResult[]): TvSerieResultDto[] {
        let tvSeries: TvSerieResultDto[] = [];

        param.forEach(obj => {
            tvSeries.push({
                id: obj.id,
                name: obj.name,
                poster_path: obj.poster_path
            });
        });

        return tvSeries;
    }

}