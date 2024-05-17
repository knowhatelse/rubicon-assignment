import { Injectable } from "@angular/core";
import { Mapper } from "../../../core/base/mapper";
import { VideoResult } from "../../../core/models/media/video-result.model";
import { VideoResultDto } from "../../dtos/media/video-result.dto";

@Injectable({
    providedIn: 'root'
})
export class VideoResultMapper implements Mapper<VideoResult, VideoResultDto> {

    mapFrom(param: VideoResult): VideoResultDto {
        return {
            key: param.key,
            site: param.site,
            type: param.type
        }
    }

    mapFromList(param: VideoResult[]): VideoResultDto[] {
        let videos: VideoResultDto[] = [];

        param.forEach(obj => {
            videos.push({
                key: obj.key,
                site: obj.site,
                type: obj.type
            });
        });

        return videos;
    }
   
}