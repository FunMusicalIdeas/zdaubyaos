import { from, Index } from '@musical-patterns/shared'
import { ContourPiece, to } from '../../../../../nominal'
import { RenderingByBlockElement } from './types'

const flatlineRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece => to.ContourPiece([
        [
            1,
            from.Index(blockElement),
        ],
    ])

export {
    flatlineRendering,
}
