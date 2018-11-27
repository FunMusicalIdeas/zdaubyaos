import { EVEN, from, Index, INITIAL, numbers } from '@musical-patterns/shared'
import { ContourPiece, to } from '../../../../../nominal'
import { ContourElement } from '../../types'
import { RenderingByBlockElement } from './types'

const summerRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece =>
        to.ContourPiece(numbers.slice(from.Index(INITIAL), from.Index(blockElement))
            .map((n: number): ContourElement =>
                n % EVEN === 0 ? [ 0, 1 ] : [ n, 1 ]))

export {
    summerRendering,
}
