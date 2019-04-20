import {
    PitchDuration,
    RenderingByBlockElement,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from '@musical-patterns/material'
import {
    as,
    ContourElement,
    ContourPiece,
    INITIAL,
    Integer,
    isEven,
    notAs,
    ONE_HALF,
    POSITIVE_INTEGERS,
    Scalar,
    slice,
    use,
} from '@musical-patterns/utilities'
import { SPRINGY_SUMMER_TRANSLATION } from './constants'

const springySummerRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> =>
        as.ContourPiece<PitchDuration>(slice(POSITIVE_INTEGERS, INITIAL, as.Ordinal(cell))
            .map((integer: Integer): ContourElement<PitchDuration> => {
                if (isEven(integer)) {
                    return as.ContourElement<PitchDuration>([
                        notAs.Ordinal<Scalar>(STANDARD_PITCH_INDEX_INDICATING_REST),
                        1,
                    ])
                }

                return as.ContourElement<PitchDuration>([
                    use.Scalar(use.Translation(integer, SPRINGY_SUMMER_TRANSLATION), ONE_HALF),
                    1,
                ])
            }),
        )

export {
    springySummerRendering,
}
