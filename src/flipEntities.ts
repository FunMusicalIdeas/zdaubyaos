import { Season } from './types'
import calculateDuration from '../../../src/calculateDuration'
import rest from '../../../src/rest'

const FLIP_INDEX = 3

const flipEntities: (_: Season[], __: boolean[]) => Season[] =
    (seasons: Season[], flippings: boolean[]): Season[] => {
        const output: Season[] = []
        seasons.forEach((season: Season, index: number): void => {
            if (flippings[index]) {
                output[index] = rest(calculateDuration(season))
                output[index + FLIP_INDEX] = season
            } else {
                output[index] = season
                output[index + FLIP_INDEX] = rest(calculateDuration(season))
            }
        })

        return output
    }

export default flipEntities
