import { MovieResult } from "./movie-result.model"

export interface MovieResults {
    page: number
    results: MovieResult[]
    total_pages: number
    total_results: number
}