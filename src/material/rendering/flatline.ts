import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/material'
import { as, ContourPiece } from '@musical-patterns/utilities'

const flatlineRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> => as.ContourPiece<PitchDuration>([
        [
            1,
            cell,
        ],
    ])

export {
    flatlineRendering,
}
