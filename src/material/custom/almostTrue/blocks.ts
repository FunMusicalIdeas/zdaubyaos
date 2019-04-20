import { as, Block } from '@musical-patterns/utilities'
import { AlmostTrueBlocks } from './types'

const computeAlmostTrueBlocks: () => AlmostTrueBlocks =
    (): AlmostTrueBlocks => {
        const trueGlisVariant: Block = as.Block([
            4, 5, 6,
            7, 8,
            9, 8,
            6, 4, 2, 4, 6,
            8, 6, 4, 2, 4,
            6, 4, 2, 4, 6,
            8, 6, 4, 2, 4, 2,
        ])

        return {
            trueGlisVariant,
        }
    }

export {
    computeAlmostTrueBlocks,
}
