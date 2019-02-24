import { PitchDuration } from '@musical-patterns/pattern'
import {
    ContourWhole,
    DictionaryOf,
    INITIAL,
    repeat,
    repeatCall,
    sequence,
    slice,
    to,
} from '@musical-patterns/utilities'
import { RenderingName } from '../../renderings'
import { BarTarget, BlockStyle } from '../../types'
import { getTrueContours } from '../true'
import { buildOtherContourPieces } from './pieces'

const buildOtherContourWholes: () => DictionaryOf<ContourWhole<PitchDuration>> =
    (): DictionaryOf<ContourWhole<PitchDuration>> => {
        const {
            secretLongChordContourPiece,
            shiftyContourPiece,
            shiftyFifteenContourPiece,
            shiftyTwentyfourContourPiece,
            shiftyTwentyfourVariantContourPiece,
        } = buildOtherContourPieces()

        const secretLongChordContourWhole: ContourWhole<PitchDuration> =
            to.ContourWhole<PitchDuration>(secretLongChordContourPiece)

        const totallyOutThereContourWhole: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(repeat(
            slice(
                getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                INITIAL,
                to.Ordinal(8),
            ),
            to.Cardinal(3),
        ))

        const shiftyAContourWhole: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(sequence([
            repeatCall(() => shiftyFifteenContourPiece, to.Cardinal(3)),
            repeatCall(() => shiftyTwentyfourContourPiece, to.Cardinal(4)),
            repeatCall(() => shiftyTwentyfourVariantContourPiece, to.Cardinal(3)),
        ]))

        const shiftyBContourWhole: ContourWhole<PitchDuration> =
            to.ContourWhole<PitchDuration>(shiftyContourPiece)

        return {
            secretLongChordContourWhole,
            shiftyAContourWhole,
            shiftyBContourWhole,
            totallyOutThereContourWhole,
        }
    }

export {
    buildOtherContourWholes,
}
