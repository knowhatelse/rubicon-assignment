import { Injectable } from "@angular/core";
import { Mapper } from "../../../core/base/mapper";
import { TvSerieResult } from "../../../core/models/tv-serie/tv-serie-result.model";
import { MediaResultDto } from "../../dtos/media/media-result.dto";

@Injectable({
    providedIn: 'root'
})
export class TvSerieResultMapper extends Mapper<TvSerieResult, MediaResultDto> {
    
    override mapFrom(param: TvSerieResult): MediaResultDto {
        throw new Error("Method not implemented.");
    }
  
    override mapFromList(param: TvSerieResult[]): MediaResultDto[] {
        let tvSeries: MediaResultDto[] = [];

        param.forEach(obj => {
            tvSeries.push({
                id: obj.id,
                title: obj.name,
                poster_path: obj.poster_path
            });
        });

        return tvSeries;
    }

}