import { from, Index } from '../../../../../src'
import { ContourPiece, to } from '../../nominal'
import { RenderingByBlockElement } from './types'

const fallRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece =>
        to.ContourPiece([ [ 1, 1 ], [ from.Index(blockElement) - 1, from.Index(blockElement) - 1 ] ])

export {
    fallRendering,
}
