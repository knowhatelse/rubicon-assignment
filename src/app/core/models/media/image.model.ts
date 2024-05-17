import { Backdrop } from "../other/backdrop.model"
import { Logo } from "./logo.model"
import { Poster } from "./poster.model"

export interface Image {
    backdrops: Backdrop[]
    id: number
    logos: Logo[]
    posters: Poster[]
}