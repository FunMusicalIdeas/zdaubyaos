import repeat from '../../../../src/utilities/repeat'
import { Blocks } from '../types'
import * as to from '../utilities/to'

const backboneFifteenBlocks: Blocks = to.Blocks(repeat([1, 2], 5))

const backboneTwentyfourBlocks: Blocks = to.Blocks(repeat([1, 3], 6))

const shiftyFifteenBlocks: Blocks = to.Blocks([
    2, 1,
    5, 1,
    2, 4,
])

const shiftyTwentyfourBlocks: Blocks = to.Blocks([
    3, 1,
    3, 1,
    3, 4,
    5, 4,
])

const shiftyTwentyfourVariantBlocks: Blocks = to.Blocks([
    4, 7, 4,
    1, 3, 1, 3, 1,
])

const shiftyBlocks: Blocks = to.Blocks([
    2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
    2, 1, 2, 1, 2, 3, 4,
    3, 2, 1, 2, 1, 2, 1, 2, 1,
    3, 5, 7, 9,
    11, 13,
    15, 17, 19, 21,
    // (this spreads across 3 bars)
    // (this spreads across 3 bars)
    23, 25,
    // (this spreads across 2 bars)
])

export {
    backboneFifteenBlocks,
    backboneTwentyfourBlocks,
    shiftyFifteenBlocks,
    shiftyBlocks,
    shiftyTwentyfourBlocks,
    shiftyTwentyfourVariantBlocks,
}
