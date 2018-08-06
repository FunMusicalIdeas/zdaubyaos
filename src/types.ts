import { Note } from '../../../src/types'

type Blocks = number[]

type Contour = number[]

type Notes = Note[]

type Season = Note[]

type Track = Note[]

type Rendering = (_: number) => number[]

export {
    Blocks,
    Contour,
    Notes,
    Season,
    Track,
    Rendering,
}
