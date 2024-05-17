import { Genre } from "../info/genre.model"
import { ProductionCompany } from "../production/production-company.model"
import { ProductionCountry } from "../production/production-country.model"
import { SpokenLanguage } from "../info/spoken-language.model"

export interface MovieDetails {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: any
    budget: number
    genres: Genre[]
    homepage: string
    id: number
    imdb_id: string
    origin_country: string[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}