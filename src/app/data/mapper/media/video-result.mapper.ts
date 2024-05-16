import { Mapper } from "../../../core/base/mapper";
import { VideoResult } from "../../../core/models/media/video-result.model";
import { VideoResultDto } from "../../dtos/media/video-result.dto";

export class VideoResultMapper extends Mapper<VideoResult, VideoResultDto> {

    override mapFrom(param: VideoResult): VideoResultDto {
        throw new Error("Method not implemented.");
    }

    override mapFromList(param: VideoResult[]): VideoResultDto[] {
        let videos: VideoResultDto[] = [];

        param.forEach(obj => {
            videos.push({
                key: obj.key,
                site: obj.site
            });
        });

        return videos;
    }
   
}