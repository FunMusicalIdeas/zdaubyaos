import { PitchDuration, RenderingByBlockElement } from '@musical-patterns/material'
import { ContourPiece, to } from '@musical-patterns/utilities'

const glisRendering: RenderingByBlockElement<PitchDuration> =
    (cell: number): ContourPiece<PitchDuration> => to.ContourPiece<PitchDuration>([
        [
            cell,
            cell,
        ],
    ])

export {
    glisRendering,
}
