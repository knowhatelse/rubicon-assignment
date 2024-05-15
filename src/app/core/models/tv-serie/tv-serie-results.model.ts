import { TvSerieResult } from "./tv-serie-result.model"

export interface Root {
    page: number
    results: TvSerieResult[]
    total_pages: number
    total_results: number
}