import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/pattern'
import {
    ContourElement,
    ContourPiece,
    INITIAL,
    Integer,
    isEven,
    positiveIntegers,
    slice,
    to,
} from '@musical-patterns/utilities'

const summerRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> =>
        to.ContourPiece<PitchDuration>(slice(positiveIntegers, INITIAL, to.Ordinal(cell))
            .map((integer: Integer): ContourElement<PitchDuration> =>
                to.ContourElement<PitchDuration>(isEven(integer) ? [ 0, 1 ] : [ integer, 1 ])))

export {
    summerRendering,
}
