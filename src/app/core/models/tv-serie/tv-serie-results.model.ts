import { TvSerieResult } from "./tv-serie-result.model"

export interface TvSerieResults {
    page: number
    results: TvSerieResult[]
    total_pages: number
    total_results: number
}